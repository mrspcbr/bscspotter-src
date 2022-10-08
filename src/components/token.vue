<template>
  <div id="loading">

   <div id="loading_box"></div>

 <div id="bodies">
    <body id="largeDis">
      <div class="hide" id="wallet_address">{{token_page.wallet}}</div>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
      <div class = "content_token_page">
         <div id='content_page'>
       <div class="row tokenPage" >
           <div class="column left" >
               
               <div id="puss_logo"><img id="image_logo" :src="token_page.logo_link_api"> </div>
            
           </div>
           <div class="column middle" style="background-color:#005a68;">
              <div class="separator" style = "color:#dbac04" ><a :href="token_page.bscscan" id="separator"><cryptoicon symbol="bnb" size="40" /></a> &nbsp;  &nbsp;<span id="text_title"><b>{{token_page.name}}</b></span></div>
             
            <div ><span class = "desc"  style = "color: white" id="desc" > {{token_page.desc}} </span></div> 
               <br><div  id="puss_icons">
              <br > <a id='telegram' class="socials" :href="token_page.telegram"><i class="fa fa-telegram" style="font-size:clamp(24px, 2vw, 36px);color:#DBAC04"></i> </a>
              <a id="whitepaper" class="socials" :href="token_page.whitepaper"><i class="fa fa-file-text" style="font-size:clamp(24px, 2vw, 30px); color:#DBAC04"></i></a>
              <a id='twitter' class="socials" :href="token_page.twitter"><i class="fa fa-twitter" style="font-size:clamp(26px, 2.32vw, 36px); color:#DBAC04"></i></a>
   
               <a id="site" class="socials" :href="token_page.website"><i class="fa fa-chrome" style="font-size:clamp(24px, 2vw, 36px);color:#DBAC04"></i></a></div>
             
               
           </div>
           
           <div class="column right" style="background-color:#005a68;
           display: flex;
align-items: center;
justify-content: center;">
           
             <table class="center" style=" color:blue, border:1px solid black; ">
         
     <tr>
       
       <th>
         
   <p style="color:white;" class = "table-text">Listing Date</p></th>
       <td><p style="color:white;" class = "table-text" id="listing">{{token_page.date}}</p> </td>
     </tr>
     <tr>
       <th><p style="color:white;" class = "table-text">Launch Date</p>	</th>
       <td><p style="color:white;" class = "table-text" id="launch">{{token_page.launch_date}}</p></td>
     </tr>
     <tr>
       <th><p style="color:white;" class = "table-text">Token Type</p></th>
       <td><p style="color:white;" class = "table-text" id="layer">{{token_page.utility}}</p></td>
     </tr>
     <tr>
       <th>
   <p style="color:white;" class = "table-text">Contract</p></th>
       <td><p style="color:white;" class = "table-text-link" >   <a id="puss_contract" :href="token_page.bscscan">BSC Scan</a></p></td>
      
     </tr>
   </table >
           </div>
       </div>
      
       <div class="hide" id="contract_div"></div>
   
       <div class="row_blank" >
           
           
           </div>         
         
     <div class="row_chart" >
           <div class="column left2" id="puss_graph" >
                <TVChartContainer   v-if="isMounted" :symbol="'BSC Spotter'" :interval="'60'" :contractAddress="contractaddress"></TVChartContainer>
     <br><br>
                <div id="banner_under_graph">  <a href="https://www.bscspotter.com/contact">  <img src="@/assets/images/ads/your_ad_here.png" alt="pancakeswap" width="500" height="120"></a></div>
           </div>
           <div id="hide" class="hide"></div>
           <div class="column right3" >
             <div v-if="is_rating_mounted" id="switch_box">
           <p class ='table_shape'><b>Price </b><b id ='right_text'>Rating</b></p>
      
   
   <label class="switch">
     <input  type="checkbox" name="checkbox"  />
     <span class="slider round"> </span>
   </label></div>  <div id=""   >
       
         <span  >
      
    <Rating  v-if="is_rating_mounted" v-bind:kyc_status="kyc_status" :kyc_link="kyc_link" v-bind:utility="utility" v-bind:team="team" v-bind:wallettAddressRating="wallettAddressRating"  :liq_score="liq_score" id ="buyToken2" class="column right2" ></Rating></span>
           <div class="column right2" id="right2_hide" >
            
              <h2 id="table_price_title" style="color: white;">Token Price</h2>
   
   <table  class = 'token_price' style="width:100%">
     <tr>
       <th  style="color: white;" id="price">{{token_page.symbol}} </th>
   
      <td   style="color: white;"><p id="USD">${{token_page_price.token_us_final_send}}</p></td>
   
     </tr >
     <tr >
       <th  style="color: white;" id="table_bnb">{{token_page.symbol}}/BNB</th>
       <td   style="color: white;"><p id="/BNB">{{token_page_price.acs_value}}</p></td>
   
     </tr>
         <th  style="color: white;" id="mcap">Total MCAP </th>
   
      <td  style="color: white;"><p id="mcap">${{token_page_price.mcap_form}}</p></td>
     <tr >
     <th style="color:white">Daily Change</th>
     
     <td style="color:white" ><p id="summary_val">{{token_page_price.percent_fixed}}</p></td>
   
     </tr>
   </table>
   
           </div>
         
           <div  class="column right2" >
              <h2 style="color: white;">Additional Information</h2>   <table >
   
    <tr>
    
   
     </tr>
     <tr>
       <th style="color: white;">Total Supply</th>
       <td style="color: white;"><p id="supply">{{token_page_price.supply_fixing_final}}</p></td>
   
     </tr>
     <tr>
       <th style="color: white;">Total Liquidty </th>
      <td ><p  id = "liq_val">${{token_page_price.liq_bold}}</p></td>
   
     </tr>
      <tr>
       <th style="color: white;">ATH Price </th>
      <td ><p  id = "ath_price">${{token_page_price.final_ath_send}}</p></td>
   
     </tr>
    
   
              </table>     </div>
       </div>
   <div class = 'buyToken'>
       
     
   </div>
   
     </div>
           </div>
           <div class="row_chart" >
             <div id="desc_long" >
             <h2  class="desc_title" id = "desc_title" style=" "> What is {{token_page.name}} </h2>
           <div class="text_paragraph_div"> <span id="what_is_project" class="what_is_project">{{token_page.what_is_project}}</span></div> 
           <div class="separator_paragraphs" style = "color:#dbac04" id="puss_separator"></div>
   <h2 class="desc_title" id = "desc_title_token" style=" "> What Does ${{token_page.symbol}} Do?</h2>
   
   <div class="text_paragraph_div"><span id="what_is_token" class="what_is_project">{{token_page.what_is_token}}</span></div> 
   <h2 class="desc_title" id = "desc_title_token_puss" style=" "> </h2>
   <div class="separator_paragraphs" style = "color:#dbac04" id="puss_separator"></div>
   <h2 class="desc_title" style=" ">Future Plans </h2>
   <div class="text_paragraph_div"><span id="future_plans" class="what_is_project" >{{token_page.future_plans}}</span></div> 
   
           </div>
         <div class="column right4">  <div class="column left_twitter"><div class = "twit" id="twitter_widget">
      
  
           </div></div>
      
   
           <div class="column right2">  <div id="pancake_swap_buy" >
   <h2>Buy Now:</h2>
   <a id="pancake_swap_href" :href="'https://pancakeswap.finance/swap?outputCurrency='+token_page.contractaddress" target="_blank" rel="noopener noreferrer"><img src="@/assets/images/logos/pancakeswap_logo/full/color-black.svg" alt="pancakeswap" width="300" height="100"></a>
           </div></div>
           <div class="column right_ad">  <div id="banner_ad_bottom_right" >
             <a href="https://www.bscspotter.com/contact">  <img src="@/assets/images/ads/your_ad_here.png" alt="pancakeswap" width="300" height="100"></a>
           </div></div>
         </div>
    
           </div >
          

   
      
       </div></div>
    
      <router-view></router-view>
   
    </body>
  
<div id="smallDis">

<div class="row full">

  <div class=" full_col" style="background-color:#005a68;">
    <Flicking :options="{ circular: true }" :plugins="plugins">
      <div style="width:100%">
              <div class="separator" style = "color:#dbac04" > 
                <div class="container">
      <div class="image">
        <img :src="token_page.logo_link_api">
      </div>
      <div class="text">
        <h2>{{token_page.name}}</h2>
      </div>
    </div>
              
              </div>
             
           
               <span class = "desc" style = "color: white" id="desc" > {{token_page.desc}} </span>
               <br><div  id="puss_icons">
              <br > <a id='telegram' class="socials" :href="token_page.telegram"><i class="fa fa-telegram" style="font-size:clamp(24px, 2vw, 36px);color:#DBAC04"></i> </a>
              <a id="whitepaper" class="socials" :href="token_page.whitepaper"><i class="fa fa-file-text" style="font-size:clamp(24px, 2vw, 30px); color:#DBAC04"></i></a>
              <a id='twitter' class="socials" :href="token_page.twitter"><i class="fa fa-twitter" style="font-size:clamp(26px, 2.32vw, 36px); color:#DBAC04"></i></a>
   
               <a id="site" class="socials" :href="token_page.website"><i class="fa fa-chrome" style="font-size:clamp(24px, 2vw, 36px);color:#DBAC04"></i></a></div>
             
              </div>
              <div style="width:100%; display: flex;
align-items: center;
justify-content: center;">
              <div id="token_info_center" >
                <table class="center" id="table_info_center" style=" color:blue, border:1px solid black; ">
         
         <tr>
           
           <th>
             
       <p style="color:white;" class = "table-text">Listing Date</p></th>
           <td><p style="color:white;" class = "table-text" id="listing">{{token_page.date}}</p> </td>
         </tr>
         <tr>
           <th><p style="color:white;" class = "table-text">Launch Date</p>	</th>
           <td><p style="color:white;" class = "table-text" id="launch">{{token_page.launch_date}}</p></td>
         </tr>
         <tr>
           <th><p style="color:white;" class = "table-text">Token Type</p></th>
           <td><p style="color:white;" class = "table-text" id="layer">{{token_page.utility}}</p></td>
         </tr>
         <tr>
           <th>
       <p style="color:white;" class = "table-text">Contract</p></th>
           <td><p style="color:white;" class = "table-text-link" >   <a id="puss_contract" :href="token_page.bscscan">BSC Scan</a></p></td>
          
         </tr>
       </table ></div>
              

              </div>
              <div slot="viewport" class="flicking-pagination"></div>
              </Flicking>
           </div>
       
           <div id="chart_mobile">

<TVChart_mobile   v-if="isMounted" :symbol="'BSC Spotter'" :interval="'60'" :contractAddress="contractaddress"></TVChart_mobile>
<br>
<div class="full_col" id="full_col_price" ><Flicking :options="{ circular: true }" :plugins="plugins2" >
  <div style="width: 100%;">
    
            
            <h2 id="table_price_title" style="color: white;">Token Price</h2>
 
 <table  class = 'token_price' style="width:100%">
   <tr>
     <th  style="color: white;" id="price">{{token_page.symbol}} </th>
 
    <td   style="color: white;"><p id="USD">${{token_page_price.token_us_final_send}}</p></td>
 
   </tr >
   <tr >
     <th  style="color: white;" id="table_bnb">{{token_page.symbol}}/BNB</th>
     <td   style="color: white;"><p id="/BNB">{{token_page_price.acs_value}}</p></td>
 
   </tr>
       <th  style="color: white;" id="mcap">Total MCAP </th>
 
    <td  style="color: white;"><p id="mcap">${{token_page_price.mcap_form}}</p></td>
   <tr >
   <th style="color:white">Daily Change</th>
   
   <td style="color:white" ><p id="summary_val">{{token_page_price.percent_fixed}}</p></td>
 
   </tr>
 </table>
 

  </div>
  <div style="width: 100%;">
  
  

              <h2 style="color: white;">Additional Information</h2>   <table class="token_price">
   
    <tr>
    
   
     </tr>
     <tr>
       <th style="color: white;">Total Supply</th>
       <td style="color: white;"><p id="supply">{{token_page_price.supply_fixing_final}}</p></td>
   
     </tr>
     <tr>
       <th style="color: white;">Total Liquidty </th>
      <td ><p  id = "liq_val">${{token_page_price.liq_bold}}</p></td>
   
     </tr>
      <tr>
       <th style="color: white;">ATH Price </th>
      <td ><p  id = "ath_price">${{token_page_price.final_ath_send}}</p></td>
   
     </tr>
    
   
              </table>     
  </div>
  <div slot="viewport" class="flicking-pagination"></div>
</Flicking> </div>
<div id="banner_under_graph">  <a href="https://www.bscspotter.com/contact">  <img src="@/assets/images/ads/your_ad_here.png" alt="pancakeswap" width="500" height="120"></a></div>
</div> 

<div class="full_col" id="full_col_price"  >
      
      <Rating_small  v-if="is_rating_mounted" v-bind:kyc_status="kyc_status" :kyc_link="kyc_link" v-bind:utility="utility" v-bind:team="team" v-bind:wallettAddressRating="wallettAddressRating"  :liq_score="liq_score" id ="" class="" ></Rating_small></div>
    
</div>

<div class="">  <div id="banner_ad_bottom_right" >
             <a href="https://www.bscspotter.com/contact">  <img src="@/assets/images/ads/your_ad_here.png" alt="pancakeswap" width="300" height="100"></a>
           </div></div>
<div class="paragraphs">
           <div id="desc_long" >
             <h2  class="desc_title" id = "desc_title" style=" "> What is {{token_page.name}} </h2>
           <div class="text_paragraph_div"> <span id="what_is_project" class="what_is_project">{{token_page.what_is_project}}</span></div> 
           <div class="separator_paragraphs" style = "color:#dbac04" id="puss_separator"></div>
   <h2 class="desc_title" id = "desc_title_token" style=" "> What Does ${{token_page.symbol}} Do?</h2>
   
   <div class="text_paragraph_div"><span id="what_is_token" class="what_is_project">{{token_page.what_is_token}}</span></div> 
   <h2 class="desc_title" id = "desc_title_token_puss" style=" "> </h2>
   <div class="separator_paragraphs" style = "color:#dbac04" id="puss_separator"></div>
   <h2 class="desc_title" style=" ">Future Plans </h2>
   <div class="text_paragraph_div"><span id="future_plans" class="what_is_project" >{{token_page.future_plans}}</span></div> 
   
           </div></div>
</div>
  <div></div>
  
  </div></div>
   </template>

<script>




import TVChartContainer from "./TVChartContainer.vue";
import Rating from  "@/components/Rating.vue";
import TVChart_mobile from "./TVChart_mobile.vue";
import axios from "axios"
import Rating_small from "@/components/Rating_small.vue";

import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

    export default {
        name: 'Page1',

        components: {TVChartContainer, Rating, TVChart_mobile, Rating_small}, 
        
        data () {
        
           return {
            plugins: [new Pagination({ type: 'bullet' })],
            plugins2: [new Pagination({ type: 'bullet' })],
            isMounted: false,
            is_rating_mounted: false,
            id: this.$route.params.id,
          token_page_price:{},
          token_page: {},
 kyc_status:'',
        utility:'' ,
        team:'',
        wallettAddressRating:'',
        name: '',
        symbol: '',
       logo: '' ,
        contractaddress: '', 
        twitter_link: '',
        kyc_link: '',
          liq_score: '',
          desc: '',
           }
        },
       async created(){
      const response = await axios.get('https://api.bscspotter.com/listings_symbol')
       var response_data = response.data
       var found = false;
       var str = this.id.split('_').join(' ')
    
       const arr2 = str.split(" ");

for (var i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i].charAt(0).toUpperCase() + arr2[i].slice(1);

}

const str2 = arr2.join(" ");


var id_fix = str2

let obj = await response_data.find(o => o.name == id_fix);

if (obj !== undefined){
const loading_box = document.getElementById('loading_box')
loading_box.style.display='none'
const listing_response = await axios.get ('https://api.bscspotter.com/get_token_info/'+id_fix)

           const listing_response_data = listing_response.data
           this.token_page=(listing_response_data)
           this.logo = listing_response_data.logo_link_api
      
           const contract_address = listing_response_data.token
        const symbol = listing_response_data.symbol
        this.wallettAddressRating = listing_response_data.wallet
        this.utility = listing_response_data.utility
        this.kyc_status = listing_response_data.kyc
        this.name = listing_response_data.name
        this.symbol = listing_response_data.symbol
        this.kyc_status = listing_response_data.kyc
        this.utility = listing_response_data.utility
        this.contractaddress = listing_response_data.contractaddress
        const twitter = listing_response_data.twitter
        var banner_data_graph = listing_response_data.banner_data_grpah
     var banner_data_right =listing_response_data.banner_data_right
     this.contractaddress = listing_response_data.token
      this.team = listing_response_data.team
      this.twitter_link = listing_response_data.twitter
      this.kyc_link = listing_response_data.kyc_link
    this.desc = listing_response_data.desc
const twitter_screen_name = twitter.substring(20)


document.getElementById("contract_div").innerHTML = listing_response_data.contractaddress

      if (banner_data_right.length > 0){
        document.getElementById("banner_ad_bottom_right").innerHTML = '<a href="'+banner_data_right[0].website+'"><img src="'+banner_data_right[0].banner+'" width="300" height="100"></a>'
        
      }
      if (banner_data_graph.length > 0){
        document.getElementById("banner_under_graph").innerHTML = '<a href="'+banner_data_graph[0].website+'"><img src="'+banner_data_graph[0].banner+'" width="300" height="100"></a>'
        
      } 
        var arr = []
  

this.isMounted =  true

var view_count =  await axios.get('https://api.bscspotter.com/token_views/'+symbol)

var views = Number(view_count.data.views)
var view_number = views+1







    axios.get('https://api.bscspotter.com/get_token_page/'+id_fix).then(response => {
      this.token_page_price = response.data
   var liq_usd = response.data.liq_usd
   var liq_fixed = (parseFloat(liq_usd).toFixed(2))


var liq_html= liq_fixed

const liq_json =  JSON.parse(liq_html)
if(liq_json>85000){
  var liq_score = 100
  this.liq_score =100
}
 else if(liq_json>16000){
var liq_ammount = (liq_json/85000)
var liq_score = liq_ammount*100

var liq_score_final =  parseFloat(liq_score).toFixed(0)
this.liq_score =liq_score_final

}
else if(liq_json<=16000){
var liq_ammount = (liq_json/60000)
var liq_score = liq_ammount*100
var liq_score_final =  parseFloat(liq_score).toFixed(0)
this.liq_score =liq_score_final

}

      this.is_rating_mounted = true

      

      twttr.widgets.createTimeline(
  {
    
    sourceType: "list",
    sourceType: "profile",
    screenName: twitter_screen_name,
 


  },
  document.getElementById("twitter_widget"),
  {
    height: 400,
    theme: "dark",
  }
);
     

    
   

setTimeout(() => {
        const twitter_widget_user_name = twitter


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




 

})}, "1000")
    
    
    
   
var contractaddress = response.data.contractaddress
var liq = response.data.liq_usd

var TokenUS = (response.data.token_price_raw)
var logo_link = response.data.logo_link_api
var mcap_total = (response.data.mcap_total)
var percent_change = (response.data.percent_fixed)
var name = response.data.name
var symbol = response.data.symbol
const wallet_address = response.data.wallet

document.getElementById("hide").innerHTML = wallet_address


  

      setTimeout(() => {

        
axios.post( 'https://api.bscspotter.com/token_views/', {
  
  'symbol': symbol,
  'views': view_number,
  'name' : name,
  'logo_link' : logo_link,
  'contractaddress' : contractaddress,
 
  
  },
  {headers: {
   'content-type': 'application/x-www-form-urlencoded',
   
  }})
  .then((response) => {
  
  }, (error) => {
   console.log(error);
  })

  var final_score_gems= document.getElementById('hide_test').innerHTML

axios.post( 'https://api.bscspotter.com/token_home/'+contractaddress, {
  
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

}, (error) => {
 console.log(error);
})











;}, "5000")
    })
}
else {

  this.$router.push('/not_found')
}
          
        },
     metaInfo(){
      return{
      
        title: `${this.symbol} | BSC Spotter `,
        meta: [
{
  name: 'description',
  content: this.desc.slice(0,150),
},


{name: 'og:title', content:`${this.name} | BSC Spotter `},
{name: 'og:description', content:`${this.name} is live on BSC Spotter, Check it out today!`},
{name: 'og:image', content: this.logo},
{name: 'og:url', content: `https://bscspotter.com/token/${this.name}`},
{name: 'og:type', content: 'website'},
{name: 'og:site_name', content: 'BSC Spotter'},
{name: 'twitter:image', content: this.logo},
{name: 'twitter:description', content: `${this.name} is live on BSC Spotter, Check it out today!`},
          {name: 'twitter:title', content: `${this.name} | BSC Spotter`},
        ]
      }
     }
    }

      
       
      
window.addEventListener('load', async function (){  {


}})
  
  

</script>

<style scoped>
  #center_desc{
    margin-top: auto;
  }
  #image_logo{
    border-radius: 350px;
  }
  .flicking-pagination {
    transform: translate(0px,10px);
  }
  #loading_box{
    position:fixed;
    z-index: 99999;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
    background:#123;
  }
.paragraphs{
  padding-bottom: 30px;
  
}
  #banner_ad_bottom_right{
    padding-top: 50px !important;
    padding-bottom: 20px !important;
  
   margin: auto !important;
  }
  #token_info_center{
   
   
    font-size: 20px !important;
  }
  th, td {
    font-size: clamp( 1rem, 2vw, 1.2rem);
  }
  td{
    text-align: center;
  }
  th {
    text-align: center;
  }
#full_col_price, #full_col_price_info{
  margin-bottom: 10px ;
}

  .image{
    width: 40px;
  
  }

  #logo_link_mobile{
    width: 20%
  }

.hide{
  display: none;
}
#chart_mobile{
  margin-top: 20px;
  margin-bottom: 20px;
}
  .full_col{
  border-radius: 25px;
  padding: 10px;
    background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  }
  .full{
    transform: translateY(2%);
   width: 95%;
   margin:auto;
  }
    table.center {
    margin-left:auto; 
    margin-right:auto;
  }
  .socials{
    padding: 10px
  }
  #twitter_widget{
    margin: auto;
   padding-right: 9px;
  }
 #pancake_swap_buy, #banner_ad_bottom_right{
  cursor: pointer
}
#desc_title, .desc_title{
  font-family: 'Goldman';
text-align: center;

}
.text_paragraph_div{
  padding-left: 10px;
}
.what_is_project{
  font-size: clamp(15px, 1.5vw, 19px);
  color:white;
  text-align: left;
  font-family: 'Titillium Web';
  font-weight: 600;
 
  
}
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
.hide{
  display: none
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
   font-size: clamp(15px, 1.5vw, 19px);
   line-height: 130%;
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
  font-size: clamp(12px, 1.5vw, 23px)


}
@media (max-width: 850px){
  .desc {
    font-size: clamp( .8rem, 1.3vw, 1.2rem) !important;

  }
}
@media (max-width: 750px){
  #text_title{
  transform: translate(10%, 0%)
}
  h2 {
    font-size: clamp( 1.5rem, 2vw, 1.2rem) !important;
  }

#smallDis{
  padding-left: 15px;
    padding-right: 15px;
}
  #desc_long{
    max-width: 100%;
    margin: auto;
   border-radius: 25px !important;
   line-height: 180% !important;
   padding-right: 10px !important;
   
  }

  th, td {
    font-size: clamp( 1rem, 2vw, 1.2rem) !important;
  }
.column{
  float: center !important;

}
  #largeDis{
    display: none
  }
  #smallDis{
    display: block !important;
  }
  #logo_mobile{
   width: 20%;
    display: inline !important;
    margin-left: auto;
    margin-right: auto;
  }

  #tv_chart_mobile {
    position: absolute;
   
    font-family: 'Goldman';
}

}
#smallDis{
    display: none
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
#puss_icons{
  margin-top: auto;
}
    .middle {
 
    width: 50%;
    display: flex;
  flex-direction: column;
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
.left_twitter{
  width: 100%;
   margin: auto;
   height: 400px;
   padding-left: 30px;
   
}
 .right4{width:35%;
overflow: hidden;
 position: relative;
height: 51%;

padding-top:10px;
height: auto;
}
.right2{
  background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  
}
.right_ad{
 
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  
}
.right3{
  width:35%;
overflow: hidden;
 position: relative;
height: 51%;

padding-top:10px;
height: auto;
}
.right4{
  width:55%;
overflow: hidden;
 position: relative;
float: center;

height: auto;
}



    





.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
}

.separator_paragraphs{
  display: flex;
  align-items: center;
  text-align: center;
}
.separator_paragraphs::before,
.separator_paragraphs::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.separator_paragraphs:not(:empty)::before {
  margin-right: .25em;
}

.separator_paragraphs:not(:empty)::after {
  margin-left: .25em;
}
.separator_paragraphs::before,
.separator_paragraphs::after {
  content: '';
  flex: 1;
  border-bottom: 3px solid rgb(247, 247, 247);
  opacity: 0.1;
}

.separator_paragraphs:not(:empty)::before {
  margin-right: .25em;
}

.separator_paragraphs:not(:empty)::after {
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

  .container {
        display: flex;
        align-items: center;
        justify-content: center
      }
      img {
        max-width: 100%
      }
    
      .text {
        font-size: 20px;
        padding-left: 5px;
      }


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
#desc_long{
text-align: left;
width:110%; 

background-image:linear-gradient(315deg, #537895 8%, #09203f 57%);
 border-radius: 15px; 
 line-height: 300%;

}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #5a5c7c; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(28, 35, 99); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
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
#puss_logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
 
}

img{
  width: 100%;
  border-radius: 25px;
}
#buyToken2{
  display:none
}
#text_title{
  padding: 0px !important;
  background-color: #ffffff;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 180%;

  font-family: 'Goldman';
}
#logo {
  width: 100%;
  height: auto;
max-height: 250px;
float: center;
margin-top: 10px
}

@media (max-width: 769px) {

 

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
#loader_div{
  width: 1700px;
  margin: auto;

}
.loader {
  left: 50%;
  top: 50%;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: auto;
  position: absolute;
  z-index: 9
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>