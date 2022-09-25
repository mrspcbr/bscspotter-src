
<template>
  <div>
    <div id="widget_div">
    <div class="row_widget_price">
  <div class="column_widget_price" >
   
 <span>  <cryptoicon class="icon" symbol="btc" ></cryptoicon></span> <span id="btc"></span>
  </div>
  <div class="column_widget_price" >
   
    <span>  <cryptoicon class="icon" symbol="eth"></cryptoicon>&nbsp;<span id="eth"></span></span> 
  </div>
  <div class="column_widget_price" >
    
    <span>  <cryptoicon class="icon" symbol="bnb" ></cryptoicon><span id="bnb"></span></span> 
  </div>
  <div class="column_widget_price" >
    
 <span>  <cryptoicon class="icon" symbol="ada" ></cryptoicon><span id="ada"></span></span> 
  </div>
</div>











</div>
<div id="widget_div_smallDis">

  <div class="column_widget_price" id="small_display_oneDiv">
    
    <span>  <cryptoicon class="icon" symbol="bnb" size="10"></cryptoicon><span id="bnb_smallDis"></span></span> 
  </div>


</div>

</div>
</template>

<script>
import axios from "axios"
import icon from "@/assets/icons/icon.vue";



export default {
        name: 'crypto_widget',
        components:{
            icon
        },
        mounted (){
          async function summary_btc(){
var form2 = Intl.NumberFormat('en-US')
const btc = await axios.get('https://www.api.bscspotter.com/summary/btcusdt')
const response = btc.data
const change_percent = (response.price.change.percentage)*100
const percent=parseFloat(change_percent).toFixed(2)+"%"
const value=response.price.last


if (change_percent<0){
document.getElementById('btc').innerHTML="  Bitcoin (BTC): <b>$"+form2.format(value)+"</b> <b> <span style='color:red;text-align:center '>"+percent+"</span></b>"

}else{
    document.getElementById('btc').innerHTML="Bitcoin (BTC): <b>$"+form2.format(value)+"</b> <b> <span style='color:green;text-align:center '>"+percent+"</span></b>"

}






}summary_btc()

async function summary_eth(){
var form2 = Intl.NumberFormat('en-US')
const eth = await axios.get('https://www.api.bscspotter.com/summary/ethusdt')
const response = eth.data
const change_percent = (response.price.change.percentage)*100
const percent=parseFloat(change_percent).toFixed(2)+"%"
const value=response.price.last

if (change_percent<0){
document.getElementById('eth').innerHTML="Ethereum (ETH): <b>$"+form2.format(value)+"</b> <b> <span style='color:red'>"+percent+"</span></b>"
}else{
    document.getElementById('eth').innerHTML="Ethereum (ETH): <b>$"+form2.format(value)+"</b> <b> <span style='color:green'>"+percent+"</span></b>"
}

}summary_eth()


async function summary_bnb(){
var form2 = Intl.NumberFormat('en-US')
const bnb = await axios.get('https://www.api.bscspotter.com/summary/bnbusdt')
const response = bnb.data
const change_percent = (response.price.change.percentage)*100
const percent=parseFloat(change_percent).toFixed(2)+"%"
const value=response.price.last


if (change_percent<0){
document.getElementById('bnb').innerHTML="Binance Coin (BNB): <b>$"+form2.format(value)+"</b> <b> <span style='color:red'>"+percent+"</span></b>"
document.getElementById('bnb_smallDis').innerHTML="Binance Coin (BNB): <b>$"+form2.format(value)+"</b> <b> <span style='color:red'>"+percent+"</span></b>"
}else{
    document.getElementById('bnb').innerHTML=" Binance Coin (BNB): <b>$"+form2.format(value)+"</b> <b> <span style='color:green'>"+percent+"</span></b>"
    document.getElementById('bnb_smallDis').innerHTML=" Binance Coin (BNB): <b>$"+form2.format(value)+"</b> <b> <span style='color:green'>"+percent+"</span></b>"
}





}summary_bnb()

async function summary_ada(){
var form2 = Intl.NumberFormat('en-US')
const bnb = await axios.get('https://www.api.bscspotter.com/summary/adausdt')
const response = bnb.data
const change_percent = (response.price.change.percentage)*100
const percent=parseFloat(change_percent).toFixed(2)+"%"
const value=response.price.last


if (change_percent<0){
document.getElementById('ada').innerHTML="Cardano (ADA): <b>$"+form2.format(value)+"</b> <b> <span style='color:red'>"+percent+"</span></b>"
}else{
    document.getElementById('ada').innerHTML="Cardano (ADA): <b>$"+form2.format(value)+"</b> <b> <span style='color:green'>"+percent+"</span></b>"
}





}summary_ada()
        }

}

</script>

<style>
#small_display_oneDiv{
  display: flex;
  justify-content: center;
  align-items: center;
}
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Mulish:ital,wght@1,300&family=Titillium+Web:ital,wght@0,200;0,600;1,700&display=swap');


* {
  box-sizing: border-box;
}


.column_widget_price {
  float: left;
  width: 25%;
 
  
}


.row_widget_price:after {
  content: "";
  display: table;
  clear: both;
}






.price_widget{
overflow: hidden;
  

      
}


#widget_div{
 
    margin-left: 105px;
    margin-bottom: 30px;
    margin-top: 5px;
    margin-right:49px;
         border-radius: 45px;
        
    background-color: #1b1829;
    overflow: hidden;
    white-space: nowrap;

    
}
#widget_div_smallDis, #widget_div_medDis{
  background-color: #1b1829;
    overflow: hidden;
    white-space: nowrap;
  margin: auto;
  width: 50%;

         border-radius: 45px;
         display: none;
}
@media (max-width: 980px){
  #widget_div{
    display: none;
  }

}
@media (max-width:450px){
  .column_widget_price{
    width: 100%;
    float: initial
  }
  #widget_div_smallDis{
    display: block !important;
  }
  #widget_div{
    display: none;
  }
  .icon{
    size: 5 !important;
  }
}
.icon{
  margin-right: 5px;
  margin-top: 3px;
  transform: translate(2%,12%);
   font-size:  clamp(16px, 1.4vw, 35px);
}
#btc, #bnb, #eth, #ada{
    
  
   color: white;
   font-size: clamp(10px, 0.95vw, 18px);
}
#bnb_smallDis{
  color: white;
   font-size: clamp(8px, 0.95vw, 15px);
}

</style>