import axios from "axios";

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_blockNumber",
  "params": []
});

const config = {
  method: 'post',
  url: 'https://app.zeeve.io/shared-api/dcom/364683cc25a95d381c85f073672dac3fc5f94a4a95209970/ext/bc/ACT/rpc',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});