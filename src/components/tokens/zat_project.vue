<template>
 
  <body>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <div class = "content_token_page">
       <div id='content_page'>
     <div class="row tokenPage" >
         <div class="column left" >
             
             <div id="zpro_logo"> </div>
          
         </div>
         <div class="column middle" style="background-color:#005a68;">
            <div class="separator" style = "color:#dbac04" id="zpro_separator"><a href=""><cryptoicon symbol="bnb" size="40" /></a> &nbsp;  &nbsp;<span id="text_title"></span></div>
           
             <p1 class = "desc" style = "color: white" id="zpro_desc" > </p1>
             <br><div  id="zpro_icons">
            <br > <a id='zpro_telegram' href=""><i class="fa fa-telegram" style="font-size:clamp(24px, 2vw, 40px);color:#DBAC04"></i> </a>
            <a id="zpro_whitepaper" href=""><i class="fa fa-file-text" style="font-size:clamp(24px, 2vw, 40px); color:#DBAC04"></i></a>
            <a id='zpro_twitter' href=""><i class="fa fa-twitter" style="font-size:clamp(26px, 2.32vw, 42px); color:#DBAC04"></i></a>
 
             <a id="zpro_site" href=""><i class="fa fa-chrome" style="font-size:clamp(24px, 2vw, 40px);color:#DBAC04"></i></a></div>
           
             
         </div>
         
         <div class="column right" style="background-color:#005a68;">
         
           <table style="width:100%, color:blue, border:1px solid black;margin-left:auto;margin-right:auto;">
       
   <tr>
     
     <th>
       
 <p style="color:white;" class = "table-text">Listing Date</p></th>
     <td><p style="color:white;" class = "table-text" id="zpro_listing"></p></td>
   </tr>
   <tr>
     <th><p style="color:white;" class = "table-text">Launch Date</p>	</th>
     <td><p style="color:white;" class = "table-text" id="zpro_launch"></p></td>
   </tr>
   <tr>
     <th><p style="color:white;" class = "table-text">Token Type</p></th>
     <td><p style="color:white;" class = "table-text" id="zpro_layer"></p></td>
   </tr>
   <tr>
     <th>
 <p style="color:white;" class = "table-text">Contract</p></th>
     <td><p style="color:white;" class = "table-text-link" >   <a id="zpro_contract" href="">BSC Scan</a></p></td>
    
   </tr>
 </table >
         </div>
     </div>
     
 
     <div class="row_blank" >
         
         
         </div>
       
   <div class="row_chart" >
         <div class="column left2" id="zpro_graph" >
              <TVChartContainer  :symbol="'BITQUERY'" :interval="'60'" :contractAddress="'0xc8c488fDbBB2E72E41710Ade67784f0812160210'"></TVChartContainer>
         </div>
         
         <div class="column right3" >
           <div id="switch_box">
         <p class ='table_shape'><b>Token Information </b><b id ='right_text'>Gems Rating</b></p>
  
 
 <label class="switch">
   <input type="checkbox" name="checkbox"  />
   <span class="slider round"> </span>
 </label></div>  <div class="" >
   
         <div class="column left2" >
            
         </div>
         <Rating v-bind:kyc_status="kyc_status" v-bind:utility="utility" v-bind:team="team" v-bind:wallettAddressRating="wallettAddressRating" id ='buyToken2' class="column right2" ></Rating>
         <div class="column right2" id="right2_hide" >
          
            <h2 id="table_price_title" style="color: white;">Token Price</h2>
 
 <table  class = 'token_price' style="width:100%">
   <tr>
     <th  style="color: white;" id="zpro_price"> </th>
 
    <td   style="color: white;"><p id="zproiUSD"></p></td>
 
   </tr >
   <tr >
     <th  style="color: white;" id="zpro_bnb"></th>
     <td   style="color: white;"><p id="zpro/BNB"></p></td>
 
   </tr>
       <th  style="color: white;" id="zpro_mcap">Total MCAP </th>
 
    <td  style="color: white;"><p id="mcap_zpro"></p></td>
   <tr >
   <th style="color:white">Daily Change</th>
   
   <td style="color:white" ><p id="zpro_summary_val"></p></td>
 
   </tr>
 </table>
 
         </div>
         <div class="row_chart" >
         <div class="column left2" >
            
         </div>
 
 
     
         </div >
         <div  class="column right2" >
            <h2 style="color: white;">Additional Information</h2>   <table >
 
  <tr>
  
 
   </tr>
   <tr>
     <th style="color: white;">Total Supply</th>
     <td style="color: white;"><p id="supply">0</p></td>
 
   </tr>
   <tr>
     <th style="color: white;">Total Liquidty </th>
    <td ><p  id = "zpro_liq_val"></p></td>
 
   </tr>
    <tr>
     <th style="color: white;">ATH Price </th>
    <td ><p  id = "zpro_ath_price"></p></td>
 
   </tr>
  
 
            </table>     </div>
     </div>
 <div class = 'buyToken'>
     
   
 </div>
 
   </div>
         </div>
       
 
    
  <div class="row_blank" >
        
     </div>
     <div class="row_chart" >
         <div class="column left2" >
            
         </div>
 
 
     
         </div >
     </div></div>
     
    <router-view></router-view>
  </body>
 </template>
 
 <script >
  
 import icon from "@/assets/icons/icon.vue";
 import TVChartContainer from "./TVChartContainer";
 import Rating from  "@/components/Rating.vue";
 import axios from "axios"
 
 var contractaddress = "0xc8c488fDbBB2E72E41710Ade67784f0812160210";
 
 export default {
     name: "acstoken",
    name: "TradingView",
     name: 'component.vue',
     components: {TVChartContainer, Rating}, icon, 
    
     props: ["id"],
      data() { 
     
       return {
         token_count: 2,
         test:'',
         kyc_status:'Unverified',
         utility:'L3' ,
         team:'Doxxed',
         wallettAddressRating:'0xdbafc3a5c0f3526761056a14a1df466ce1627f2b',
         name: 'zpro Finance',
         symbol: 'zpro',
        
         contractaddress: '0xc8c488fDbBB2E72E41710Ade67784f0812160210', }
     },
 
 }
 
   
 var form2 = Intl.NumberFormat('en-US')
 async function asyncCall() {
 var usd = "$"
 const listing_info = await axios.get('https://www.api.bscspotter.com/listings/'+contractaddress)
 const listing_data= (listing_info.data)
 console.log(listing_data)
 const contractaddress_chart = listing_data.token
 const bscscan=(listing_data.bscscan)
 const date = (listing_data.date)
 const desc = (listing_data.description)
 const kyc =(listing_data.kyc)
 const launch_date = (listing_data.launch_date)
 const logo_link_api = (listing_data.logo_link)
 const name = (listing_data.name)
 const symbol = (listing_data.symbol)
 const team = (listing_data.team)
 const telegram = (listing_data.telegram)
 const twitter = (listing_data.twitter)
 const utility = (listing_data.utility)
 const wallet = (listing_data.wallet)
 const website = (listing_data.website)
 const whitepaper = (listing_data.whitepaper)
 const supply= (listing_data.supply)
     
 
   
 document.getElementById('zpro_separator').href= bscscan
 document.getElementById('text_title').innerHTML= name
 document.getElementById('zpro_price').innerHTML = symbol
 document.getElementById('zpro_bnb').innerHTML = symbol+'/BNB'
 document.getElementById('zpro_desc').innerHTML = desc
 document.getElementById('zpro_launch').innerHTML = launch_date
 document.getElementById('zpro_layer').innerHTML = utility
 document.getElementById('zpro_listing').innerHTML = date
 document.getElementById('zpro_whitepaper').href = whitepaper
 document.getElementById('zpro_site').href = website
 document.getElementById('zpro_twitter').href = twitter
 document.getElementById('zpro_telegram').href = telegram
 document.getElementById('zpro_contract').href = bscscan
 
 var img = document.createElement("img");
 img.id='logo'
 img.src = logo_link_api;
 var src = document.getElementById("zpro_logo");
 src.appendChild(img);
 
 console.log(listing_data)
   const bnb = await axios.get(
                     'https://www.api.bscspotter.com/bnb')
                     const bnb_data = JSON.stringify(bnb.data)
                     var bnb_value =bnb_data.replace(/"/g,'')
                    
 const acs = await axios.get(
                     'https://www.api.bscspotter.com/price/'+contractaddress)
                     const acs_data = JSON.stringify(acs.data)
                     const acs_value =acs_data.replace(/"/g,'')
                     document.getElementById("zpro/BNB").innerHTML =acs_value
                     
 
 
  
 var TokenUS = bnb_value * acs_value
     
 
 var tokenUS_fixed = (parseFloat(TokenUS).toFixed(2))
 if (TokenUS<0.01) { 
 
   function expo(x, f) {
       return Number.parseFloat(TokenUS).toExponential(f);
     }
    document.getElementById("zproiUSD").innerHTML =    
  usd.bold()+ (expo(TokenUS, 2)) }
   
   else { document.getElementById("zproiUSD").innerHTML =    
   usd.bold()+ form2.format(tokenUS_fixed)}
 
 
 var total_supply = supply
 
 if(total_supply<9999999999)
 {
   var commas =  total_supply.toLocaleString("en-US")
   let mcap_string =  JSON.stringify(commas)
 let mcap_final = mcap_string.replace(/[{<p id="BNB/U$SD"></p$>/g]/g, '')
 document.getElementById("supply").innerHTML = mcap_final
 }
 else{
  function expo(x, f) {
       return Number.parseFloat(total_supply).toExponential(f);
     }
    document.getElementById("supply").innerHTML =    
 (expo(total_supply, 2))
 
  
 }
 
 
 var mcap_total = total_supply * TokenUS
 
 var mcap_fixed = parseFloat(mcap_total).toFixed(2)
 var mcap_form= form2.format(mcap_fixed)
 
 document.getElementById("mcap_zpro").innerHTML =  usd.bold()+ mcap_form
 
   const testing_sup = document.getElementById("supply").innerHTML
   console.log(testing_sup)
 
  var wallet_address= wallet
 const liq = await axios.get(
                     'https://www.api.bscspotter.com/liquidity/'+wallet_address)
 var liqdata=liq.data
 
 var liqvalue = JSON.stringify(liqdata)
 
 var liq_rep = liqvalue.replace(/[{"val[ue":}]/g, '');
 
 var liq_rep2= liq_rep.replace(/]/g, '')
 
 
 var liq_usd = liq_rep2 * bnb_value *2
 
 var liq_fixed = (parseFloat(liq_usd).toFixed(2))
 
 var liq_format = form2.format(liq_fixed)
 
 document.getElementById("zpro_liq_val").innerHTML = await usd.bold()+  liq_format
 
 
 
 
   const response2 = await axios.get(
                 'https://www.api.bscspotter.com/chart/'+contractaddress)
 
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
             
 
                 
                const bnb_ohlc_response= await axios.get('https://www.api.bscspotter.com/bnb_ohlc')
                var bnb_ohlc_data = bnb_ohlc_response.data
                let A = bitquery_unix
                const findNumber = (array, number) => 
   array.flatMap((sub, idx) => 
   sub.indexOf(number) > -1 ? [idx] : []) 
   var bnb_ohlc_block = (findNumber(bnb_ohlc_data, A));
     var bnb_ohlc=bnb_ohlc_data[bnb_ohlc_block][2] 
    
 
     var ath_usd = x_max_string*bnb_ohlc
    
   var usd = "$"
   var percent = "%"
     if (ath_usd<0.01){
         function expo(x, f) {
             return Number.parseFloat(ath_usd).toExponential(f);
           }
           let final_ath = expo(ath_usd,2)
           document.getElementById("zpro_ath_price").innerHTML = await (usd.bold()+final_ath)
     }else{let final_ath= (    
         (parseFloat(ath_usd).toFixed(3))) 
         document.getElementById("zpro_ath_price").innerHTML = await (usd.bold()+final_ath)}
 
 
 const response_summary = await axios.get('https://www.api.bscspotter.com/summary_bitquery/'+contractaddress)
 const data_summary = response_summary.data
 if (data_summary.length > 0) {
   var summary_data_yesterday = data_summary[0].quotePrice
 var summary_yesterday_date = data_summary[0].date.date
 
   
 var unix_summary_yesterday = new Date(summary_yesterday_date).getTime() / 1000
 
 
 
  const yesterday_bnb_price = (findNumber(bnb_ohlc_data, unix_summary_yesterday));
   const bnb_ohlc_yesterday = bnb_ohlc_data[yesterday_bnb_price][2] 
 
 const usd_yesterday = summary_data_yesterday*bnb_ohlc_yesterday
 const usd_today = TokenUS
 
 const percent_change = ((usd_today - usd_yesterday)/usd_yesterday)*100
 
 console.log(percent_change)
 console.log(usd_today, usd_yesterday)
 
 
 var percent_fixed =  parseFloat(percent_change).toFixed(2)+percent
 document.getElementById("zpro_summary_val").innerHTML = await percent_fixed
 if (percent_change<0){
    document.getElementById("zpro_summary_val").style.color = "#EA3943"
   
   
 }
 
 
 }
 else {
   document.getElementById("zpro_summary_val").innerHTML = "0"+percent
 }
 
 
 
   var logo_link = logo_link_api
 
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
   var percent_change = document.getElementById('zpro_summary_val').innerHTML
 axios.post( 'https://www.api.bscspotter.com/token_home/'+contractaddress, {
 'liquidity': liq_usd,
 'contract_address': contractaddress,
 'price': TokenUS,
 'logo': logo_link,
 'rating': final_score_gems,
 'mcap': mcap_total,
 'percent_change': percent_change,
 'name': name,
 'symbol': symbol,
 
 },
 {headers: {
  'content-type': 'application/x-www-form-urlencoded',
  
 }})
 .then((response) => {
  console.log(response);
 }, (error) => {
  console.log(error);
 });}, "7000")
     
 
 
 
 
 }
 
 
 asyncCall()
 
   
 
 
 
 </script>
 
 <style scoped> 
 
 i {
 padding: 8px;
 bottom: 0px
 }
 .icons_div{
   position: absolute;
   bottom: 0px
 }
 #icon_tel{
   color:'#FFFFFF'
 }
 
 #buyToken2{
   overflow: hide;
   position: static
 }
 #right_text{
   float:right;
  
   font-size: clamp(15px, 1.5vw, 19px)
 }
 th, p, h1, h2{  background-color: #ffffff;
     background-image: linear-gradient(45deg, #f3ec78, #af4261);
     background-size: 100%;
     -webkit-background-clip: text;
     -moz-background-clip: text;
     background-clip: text;
     -webkit-text-fill-color: transparent; 
     line-height: 180%;
     -moz-text-fill-color: transparent;}
 
 
 .desc{
    font-family: 'Goldman';
    font-size: clamp(15px, 1.5vw, 19px)
    ;
 }
 
 @import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,600;1,700&display=swap');
  div,p {text-align: center;
  font-family: 'Goldman'}
 table {
   border-collapse: collapse;
   width: 100%;
   position: center
 }
 .table-text-link{
  color: blue;
 
 }
 .table_shape, th, td {
   text-align: left;
   padding: 7px;
   font-family: 'Goldman';
   font-size: clamp(15px, 1.5vw, 23px)
 }
 .content_token_page{
 max-width: 1700px;
     margin: auto;
   padding-bottom: 70px;
 
 }
     /* Set additional styling options for the columns */
     .column {
  
     float: left;
     width: 100%;
     border-radius: 15px;
     padding: 15px
     }
 #switch_box{
   background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
   border-radius: 15px;
   padding: 10px;
 }
     /* Set width length for the left, right and middle columns */
     .left {
     width: 20%;
     background-color: #537895;
 background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
 height: auto;
     }
 
     .middle {
     width: 50%;
     background-color: #537895;
 background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
 height: auto;
     }
     
     .right {
     width: 30%;
     background-color: #537895;
 background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
 height: auto;
     }
 
     .tokenPage:after {
     content: "";
     display: table;
     clear: both;
     background-color: #537895;
 background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
 height: auto;
     }
 .left2{
     width: 65%;
    
     height: auto;
 }
 
  .right4{width:35%;
 overflow: hidden;
  position: relative;
 height: 51%;
 background-color: #537895;
 background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
 padding-top:10px;
 height: auto;
 }
 .right2{
   background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
   width: 100%;
   padding: 10px;
   
 }
 .right3{
   width:35%;
 overflow: hidden;
  position: relative;
 height: 51%;
 
 padding-top:10px;
 height: auto;
 }
 
 
     
 
 
 
 
 
 .separator {
   display: flex;
   align-items: center;
   text-align: center;
 }
 
 .separator::before,
 .separator::after {
   content: '';
   flex: 1;
   border-bottom: 1px solid #ddd;
 }
 
 .separator:not(:empty)::before {
   margin-right: .25em;
 }
 
 .separator:not(:empty)::after {
   margin-left: .25em;
 }
 .tokenPage, .row_chart{
   position: center;
   display:flex;
 column-gap:20px;
 padding: 15px;
   padding-left: 95px;
   clear: both;
   content: "";}
 .TVChartContainer {
     position: absolute;
     width: 55%;
     height: 65%;
     font-family: 'Goldman';
 }
 .row_blank{
   display:flex;
 column-gap:20px;
 padding: 15px}
 
 .row_blank, .BNB_USD {opacity: 0}
 
 .switch {
   position: relative;
   display: inline-block;
   width: 150px;
   height: 34px;
 }
 
 .switch input { 
   opacity: 0;
   width: 0;
   height: 0;
 }
 
 .slider {
   position: absolute;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #ccc;
   -webkit-transition: .4s;
   transition: .4s;
 }
 
 .slider:before {
   position: absolute;
   content: "";
   height: 26px;
   width: 26px;
   left: 4px;
   bottom: 4px;
   background-color: white;
   -webkit-transition: .4s;
   transition: .4s;
 }
 
 input:checked + .slider {
   background-color: #2196F3;
 }
 
 input:focus + .slider {
   box-shadow: 0 0 1px #2196F3;
 }
 
 input:checked + .slider:before {
   -webkit-transform: translateX(115px);
   -ms-transform: translateX(115px);
   transform: translateX(115px);
 }
 
 /* Rounded sliders */
 .slider.round {
   border-radius: 34px;
 }
 
 .slider.round:before {
   border-radius: 50%;
 }
 
 .switch {
   position: relative;
   display: inline-block;
   width: 150px;
   height: 34px;
 }
 
 .switch input { 
   opacity: 0;
   width: 0;
   height: 0;
 }
 
 .slider {
   position: absolute;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #ccc;
   -webkit-transition: .4s;
   transition: .4s;
 }
 
 .slider:before {
   position: absolute;
   content: "";
   height: 26px;
   width: 26px;
   left: 4px;
   bottom: 4px;
   background-color: white;
   -webkit-transition: .4s;
   transition: .4s;
 }
 
 input:checked + .slider {
   background-color: #2196F3;
 }
 
 input:focus + .slider {
   box-shadow: 0 0 1px #2196F3;
 }
 
 input:checked + .slider:before {
   -webkit-transform: translateX(115px);
   -ms-transform: translateX(115px);
   transform: translateX(115px);
 }
 
 /* Rounded sliders */
 .slider.round {
   border-radius: 34px;
 }
 
 .slider.round:before {
   border-radius: 50%;
 }
 
 #buyToken2{
   display:none
 }
 #text_title{
   padding: 5px;
   font-family: 'Goldman';
 }
 #logo {
   width: 100%;
   height: auto;
 max-height: 250px;
 float: center;
 margin-top: 10px
 }
 
 @media (max-width: 768px) {
   .left {
     float: right;
   }
 }
 
 @media (min-width: 769px) {
   .right {
     float: right;
   }
 }
 #content_page{
 padding-bottom: 0px;
 padding-right: 10px;
 }
 
 </style>