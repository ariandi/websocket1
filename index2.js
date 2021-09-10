const io = require("socket.io-client");
const socket = io("http://localhost:3005");

const express = require('express');
const app = express();
const cron = require('node-cron');
const Balances = require('./models/balances');
const BalanceDetails = require('./models/balance_details');
const PdamData = require('./models/pdam_data');
const PdamDataDetail = require('./models/pdam_data_details');
const moment = require('moment');
const axios = require('axios');
const { Op } = require("sequelize");

let selamatDateng = 'Hello world';

cron.schedule('*/15 * * * * *', async function() {
  console.log('running a task every minute');
  const balance_det = await BalanceDetails.findOne(
      {
        where:
            {
              biller_status: 'pending',
              status: 0,
              created_at: {
                [Op.gt]: moment().subtract(2, 'days').toDate()
              }
            }
      });
  if (balance_det) {
    const pdamData = await PdamData.findOne({where: {txid: balance_det.txid}});
    const pdamDataDet = await PdamDataDetail.findOne({where: {pdam_data_id: pdamData.id}});

    const payReq = JSON.parse(pdamDataDet.req_pay);
    const { username, buyer_sku_code, customer_no, ref_id, sign, testing} = payReq;
    const payReqDigi = { username, buyer_sku_code, customer_no, ref_id, sign}
    const urlDigi = 'https://api.digiflazz.com/v1/';

    // const payReqDigi = {
    //   username: payReq.username,
    //   buyer_sku_code: "xld10",
    //   customer_no: "087800001232",
    //   ref_id: payReq.ref_id,
    //   sign: payReq.sign,
    //   testing: true,
    // }

    try {
      let billerAdvice = await axios.post(urlDigi + 'transaction', payReqDigi);
      const statusTrx = billerAdvice.data.data.status;

      console.log('status transaksi adalah', statusTrx.toLowerCase());
      if (statusTrx.toLowerCase() === 'sukses') {
        await BalanceDetails.update({'biller_status': 'success'}, {where:
              {id: balance_det.id}}
        );
      } else if (statusTrx.toLowerCase() === 'gagal') {
        await BalanceDetails.update(
            {biller_status: 'gagal', status: 4},
            {where: {id: balance_det.id}}
        );
        const balanceData = await Balances.findOne({where: {id: balance_det.balance_id}});
        console.log('balance total', balanceData.balance_total);
        console.log('balance trx', balance_det.balance);
        await Balances.update(
            {balance_total: balanceData.balance_total - balance_det.balance},
            {where: {id: balance_det.balance_id}}
        );
      }

      console.log(billerAdvice.data.data);
      socket.emit('setTrxStatus', billerAdvice.data.data);
      // socket.emit('setTrxStatus', balance_det_res);
    } catch (e) {
      console.log(e.response.data);
    }
  }
}, {});

app.get('/', (req, res) => {
  // socket.on('users-changed', (data) => {
  //   console.log(data);
  //   selamatDateng = data;
  // });

  socket.on('trxChanged', (data) => {
    // console.log(data);
    selamatDateng = data;
  });

  res.send(selamatDateng);
});

app.listen(3004, () => {
  console.log('V Latest');
  console.log('Listen on 3004');
})
