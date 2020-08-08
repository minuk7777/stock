const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.REACT_APP_API_KEY;

const finnhubClient = new finnhub.DefaultApi();

export function getCompanyProfile(symbol) {
  //Company profile2
  finnhubClient.companyProfile2({ symbol }, (error, data, response) => {
    console.log(data);
  });
}
