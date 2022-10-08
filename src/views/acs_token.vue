<template>
 
 <body>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <div>
      <div id='content_page'>
  
    <div class="row tokenPage" >
        <div class="column left" >
            
            <div ><img src="https://aircentralstation.com/images/logo2-removebg-preview.png" alt="logo_project" id="logo"> </div>
         
        </div>
        <div class="column middle" style="background-color:#005a68;">
           <div class="separator" style = "color:#dbac04"><a href="https://bscscan.com/token/0x01b42466d39675db204fc9204df6f6ef0370892e"><cryptoicon symbol="bnb" size="40" /></a> &nbsp;  &nbsp;<span id="text_title">Air Centeral Station</span></div>
          
            <p1 class = "desc" style = "color: white" >Our goal is to deliver the best long term projects with the most upside potential. Slowly, with the support of the community we will be the first low entry launch pad in 2023. 
            <br><div id="icons_div">
           <br> <a href="https://t.me/AirCentralStation"><i class="fa fa-telegram" style="font-size:clamp(24px, 2vw, 40px);color:#DBAC04"></i> </a>
           <a href="https://infograph.venngage.com/pl/dwy6dqFedY"><i class="fa fa-file-text" style="font-size:clamp(24px, 2vw, 40px); color:#DBAC04"></i></a>
           <a href="https://twitter.com/ACentralStation?t=mlQX9-MgSDBHu0joInueCw&s=09"><i class="fa fa-twitter" style="font-size:clamp(26px, 2.32vw, 42px); color:#DBAC04"></i></a>

            <a href="https://aircentralstation.com/"><i class="fa fa-chrome" style="font-size:clamp(24px, 2vw, 40px);color:#DBAC04"></i></a></div>
           </p1>
            
        </div>
        
        <div class="column right" style="background-color:#005a68;">
        
          <table style="width:100%, color:blue, border:1px solid black;margin-left:auto;margin-right:auto;">
      
  <tr>
    
    <th>
      
<p style="color:white;" class = "table-text">Listing Date</p></th>
    <td><p style="color:white;" class = "table-text">05/19/2022</p></td>
  </tr>
  <tr>
    <th><p style="color:white;" class = "table-text">Launch Date</p>	</th>
    <td><p style="color:white;" class = "table-text">03/13/2022</p></td>
  </tr>
  <tr>
    <th><p style="color:white;" class = "table-text">Token Type</p></th>
    <td><p style="color:white;" class = "table-text">Layer 3</p></td>
  </tr>
  <tr>
    <th>
<p style="color:white;" class = "table-text">Contract</p></th>
    <td><p style="color:white;" class = "table-text-link">   <a href=" https://bscscan.com/token/0x01b42466d39675db204fc9204df6f6ef0370892e">BSC Scan</a></p></td>
   
  </tr>
</table >
        </div>
    </div>
    

    <div class="row_blank" >
        
        
        </div>
      
  <div class="row_chart" >
        <div class="column left2" >
             <TVChartContainer :symbol="'BITQUERY'" :interval="'60'" :contractAddress="'0x01b42466d39675db204Fc9204DF6f6Ef0370892E'"></TVChartContainer>
        </div>
        
        <div class="column right3" style="background-color:#005a68;">
        <p class ='table_shape'><b>Token Information </b><b id ='right_text'>Gems Rating</b></p>


<label class="switch">
  <input type="checkbox" name="checkbox"  />
  <span class="slider round"> </span>
</label>
<div class = 'buyToken'>
    
  
</div>

  </div>
        </div>
      

     <div class="row_chart" >
        <div class="column left2" >
           
        </div>
        <Rating v-bind:kyc_status="kyc_status" v-bind:utility="utility" v-bind:team="team" v-bind:wallettAddressRating="wallettAddressRating" id ='buyToken2' class="column right2" ></Rating>
        <div class="column right2" id="right2_hide" style="background-color:#005a68;">
         
           <h2 id="table_price_title" style="color: white;">Token Price</h2>

<table  class = 'token_price' style="width:100%">
  <tr>
    <th  style="color: white;">ACS </th>

   <td   style="color: white;"><p id="ACSiUSD"></p></td>

  </tr >
  <tr >
    <th  style="color: white;">ACS/BNB</th>
    <td   style="color: white;"><p id="Token/BNB"></p></td>

  </tr>
      <th  style="color: white;">Total MCAP </th>

   <td  style="color: white;"><p id="mcap_full"></p></td>
  <tr >
  

  </tr>
</table>

        </div>
       
    </div>
 <div class="row_blank" >
       
    </div>
    <div class="row_chart" >
        <div class="column left2" >
           
        </div>


        <div class="column right4" style="background-color:#005a68;">
           <h2 style="color: white;">Additional Information</h2>   <table >

 <tr>
 

  </tr>
  <tr>
    <th style="color: white;">Total Supply</th>
    <td style="color: white;"><p id="supply"></p></td>

  </tr>
  <tr>
    <th style="color: white;">Total Liquidty </th>
   <td ><p  id = "liq_val"></p></td>

  </tr>
   <tr>
    <th style="color: white;">ATH Price </th>
   <td ><p  id = "ath_price"></p></td>

  </tr>
 

           </table>     </div>
        </div >
    </div></div>
   
 </body>
</template>

<script >
  import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import icon from "@/assets/icons/icon.vue";
import TVChartContainer from "../components/TVChartContainer";
import Rating from  "@/components/Rating.vue";
import axios from "axios"


var contractaddress = "0x01b42466d39675db204Fc9204DF6f6Ef0370892E";

export default {
    name: "acstoken",
   name: "TradingView",
    name: 'component.vue',
    components: {TVChartContainer,VueSidebarMenuAkahon, Rating, }, icon, 
     
    props: ["id"],
     data() { 
      return {
        token_count: 1,
        test:'',
        kyc_status:'Verified',
        utility:'L3' ,
        team:'Doxxed',
        wallettAddressRating:'0x204f4aA692F869959947e009C6299bF6F783Bb75',
        name: 'Air Centeral Station',
        symbol: 'ACS',
        image: 'https://aircentralstation.com/images/logo2-removebg-preview.png' }
    },
 

}

  
var form2 = Intl.NumberFormat('en-US')
async function asyncCall() {
var usd = "$"

  const bnb = await axios.get(
                    'https://api.bscspotter.com/bnb')
                    const bnb_data = JSON.stringify(bnb.data)
                    var bnb_value =bnb_data.replace(/"/g,'')
                   
const acs = await axios.get(
                    'https://api.bscspotter.com/price/'+contractaddress)
                    const acs_data = JSON.stringify(acs.data)
                    const acs_value =acs_data.replace(/"/g,'')
                    document.getElementById("Token/BNB").innerHTML =acs_value
                    



  
let TokenUS = bnb_value * acs_value
    


var tokenUS_fixed = (parseFloat(TokenUS).toFixed(2))
if (TokenUS<0.01) { 

  function expo(x, f) {
      return Number.parseFloat(TokenUS).toExponential(f);
    }
   document.getElementById("ACSiUSD").innerHTML =    
 usd.bold()+ (expo(TokenUS, 2)) }
  
  else { document.getElementById("ACSiUSD").innerHTML =    
  usd.bold()+ form2.format(tokenUS_fixed)}


var total_supply = 100000000000

var mcap_total = total_supply * TokenUS

var mcap_fixed = parseFloat(mcap_total).toFixed(2)
var mcap_form= form2.format(mcap_fixed)

document.getElementById("mcap_full").innerHTML =  usd.bold()+ mcap_form


var commas =  total_supply.toLocaleString("en-US")
let mcap_string =  JSON.stringify(commas)
let mcap_final = mcap_string.replace(/[{<p id="BNB/U$SD"></p$>/g]/g, '')
document.getElementById("supply").innerHTML = mcap_final
 var wallet_address= '0x204f4aA692F869959947e009C6299bF6F783Bb75'
const liq = await axios.get(
                    'https://api.bscspotter.com/liquidity/'+wallet_address)
var liqdata=liq.data

var liqvalue = JSON.stringify(liqdata)

var liq_rep = liqvalue.replace(/[{"val[ue":}]/g, '');

var liq_rep2= liq_rep.replace(/]/g, '')


var liq_usd = liq_rep2 * bnb_value *2

var liq_fixed = (parseFloat(liq_usd).toFixed(2))

var liq_format = form2.format(liq_fixed)

document.getElementById("liq_val").innerHTML = await usd.bold()+  liq_format

  const response2 = await axios.get(
                'https://api.bscspotter.com/chart/'+contractaddress)

                var data = response2.data
                var results_max =[]
                for (var i =0; i<data.length;i++)
                 results_max.push(data[i].high)
                var x_max=Math.max(...results_max)
              var  x_max_string= JSON.stringify(x_max)
           

                function search(nameKey, myArray){
                    for (var i=0; i < myArray.length; i++) {
                        if (myArray[i].high === nameKey) {
                            return myArray[i];
                        }
                    }
                }

                var array = data
                
               
                var results_max_date = search(x_max ,array)
                var date_bitquery = (results_max_date.timeInterval.minute)
                var date_bitquery_string = JSON.stringify(date_bitquery)
                var date_stamp = date_bitquery_string.substring(1,11)
               var bitquery_unix = new Date(date_stamp).getTime() / 1000
            

                
               const bnb_ohlc_response= await axios.get('https://api.bscspotter.com/bnb_ohlc')
               var bnb_ohlc_data = bnb_ohlc_response.data
               let A = bitquery_unix
               const findNumber = (array, number) => 
  array.flatMap((sub, idx) => 
  sub.indexOf(number) > -1 ? [idx] : []) 
  var bnb_ohlc_block = (findNumber(bnb_ohlc_data, A));
    var bnb_ohlc=bnb_ohlc_data[bnb_ohlc_block][2] 
   

    var ath_usd = x_max_string*bnb_ohlc
   
  var usd = "$"
    if (ath_usd<0.01){
        function expo(x, f) {
            return Number.parseFloat(ath_usd).toExponential(f);
          }
          let final_ath = expo(ath_usd,2)
          document.getElementById("ath_price").innerHTML = await (usd.bold()+final_ath)
    }else{let final_ath= (    
        (parseFloat(b).toFixed(3))) 
        document.getElementById("ath_price").innerHTML = await (usd.bold()+final_ath)}
const rating_html = document.getElementsByClassName('progress_bar').outerHTML
console.log(rating_html)
console.log(TokenUS)
 console.log(liq_format)
  var logo_link = 'aircentralstation.com/images/logo2-removebg-preview.png'

   {
  const checkbox =  document.querySelector("input[name=checkbox]");
    const div = document.querySelector('#right2_hide')
    const div2 = document.querySelector('#buyToken2')
    const div3 = document.querySelector('#table_price_title')
checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
     div.style.display = "none";
     div3.style.display='none'
      div2.style.display = "block";
       
  } else {
     div.style.display = "block";
     div3.style.display='block'
     div2.style.display = "none";
      
  }


 

})}


setTimeout(() => {
  console.log(liq_usd)
  var final_score_gems= document.getElementById('hide_test').innerHTML
axios.post( 'https://api.bscspotter.com/token_home/'+contractaddress, {
'liquidity': liq_usd,
'contract_address': contractaddress,
'price': TokenUS,
'logo': logo_link,
'rating': final_score_gems,
'mcap': mcap_total,
},
{headers: {
 'content-type': 'application/x-www-form-urlencoded',
}})
.then((response) => {
 console.log(response);
}, (error) => {
 console.log(error);
});}, "3000")
    

}




asyncCall()


 window.onload=function(){

  ;}
</script>

<style scoped> 


</style>