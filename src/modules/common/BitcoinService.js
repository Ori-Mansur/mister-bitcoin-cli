import axios from "axios"

export default{
    getRate,
    getMarketPrice
}

const BASE_URL='https://blockchain.info/tobtc?currency=USD&value=1'

async function getRate(coins){
   const dolar= await axios.get(BASE_URL)
   console.log(dolar);
   return dolar.data
   
}
async function getMarketPrice(){
    const res=await axios.get('https://api.blockchain.info/charts/market-price?format=json&cors=true')
    console.log(res);
    return res.data.values
    
}