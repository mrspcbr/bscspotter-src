<template>
  <div>
<div class="row_gainers" id="row_gainers_big">
    <div class="column_gainersC">
<span class="gainers_header"><b><i class="fa fa-clock-o" aria-hidden="true"></i>Newly Added</b></span>
<table id="Newly_Added" style="width: 80%;" >
   <tr>
<td class = 'table_logo' id="new_logo_0"></td>
<td class = 'table_name' id="new_name_0"></td>
<td class = 'table_element' id="new_symbol_0"></td>
   </tr>
   
     <tr >
<td class = 'table_logo' id="new_logo_1" ></td>
<td class = 'table_name' id="new_name_1"></td>
<td class = 'table_element' id="new_symbol_1"></td>
   </tr>

     <tr>
<td class = 'table_logo' id="new_logo_2"></td>
<td class = 'table_name' id="new_name_2"></td>
<td class = 'table_element' id="new_symbol_2"></td>
   </tr>


</table>
    </div> 

 <div class="column_gainersC">
  <span class="gainers_header"><b><i class="fa fa-users" aria-hidden="true"></i>Tredning</b></span>
<table id="treding" style="width: 80%;" >
  <tr>
<td class = 'table_logo' id="trending_logo_0"></td>
<td class = 'table_name' id="trending_name_0"></td>
<td class = 'table_element ' id="trending_symbol_0"></td>
   </tr>
   <tr>
<td class = 'table_logo' id="trending_logo_1"></td>
<td class = 'table_name' id="trending_name_1"></td>
<td class = 'table_element' id="trending_symbol_1"></td>
   </tr>
   <tr>
<td class = 'table_logo' id="trending_logo_2"></td>
<td class = 'table_name' id="trending_name_2"></td>
<td class = 'table_element' id="trending_symbol_2"></td>
   </tr>
   


</table>
</div>

 <div class="column_gainersC">
 <span class="gainers_header"><b><i class="fa fa-arrow-up" aria-hidden="true"></i>Top Gainers</b></span>
 <table id="top_gains" style="width: 80%;" >
 <tr>
<td class = 'table_logo' id="gain_logo_1"></td>
<td class = 'table_name' id="gain_name_1"></td>
<td class = 'table_element' id="gain_perc_1"></td>
   </tr>

 <tr>
<td class = 'table_logo' id="gain_logo_2"></td>
<td class = 'table_name' id="gain_name_2"></td>
<td class = 'table_element' id="gain_perc_2"></td>
   </tr>

 <tr>
<td class = 'table_logo' id="gain_logo_3"></td>
<td class = 'table_name' id="gain_name_3"></td>
<td class = 'table_element' id="gain_perc_3"></td>
   </tr>


</table>
</div>

</div><div id="gainers_smallDis">
<Flicking :options="{ circular: true }" :plugins="plugins">
  <div class="column_gainersC" style="width:100%">
<span class="gainers_header"><b><i class="fa fa-clock-o" aria-hidden="true"></i>Newly Added</b></span>
<table id="Newly_Added" style="width: 80%;" >
   <tr>
<td class = 'table_logo' id="new_logo_0_smallDis"></td>
<td class = 'table_name' id="new_name_0_smallDis"></td>
<td class = 'table_element' id="new_symbol_0_smallDis"></td>
   </tr>
   
     <tr>
<td class = 'table_logo' id="new_logo_1_smallDis" ></td>
<td class = 'table_name' id="new_name_1_smallDis"></td>
<td class = 'table_element' id="new_symbol_1_smallDis"></td>
   </tr>

     <tr>
<td class = 'table_logo' id="new_logo_2_smallDis"></td>
<td class = 'table_name' id="new_name_2_smallDis"></td>
<td class = 'table_element' id="new_symbol_2_smallDis"></td>
   </tr>


</table>
    </div> 
    <div style="width:100%">
      <div class="column_gainersC">
  <span class="gainers_header"><b><i class="fa fa-users" aria-hidden="true"></i>Tredning</b></span>
<table id="treding" style="width: 80%;" >
   <tr>
<td class = 'table_logo' id="trending_logo_0_smallDis"></td>
<td class = 'table_name' id="trending_name_0_smallDis"></td>
<td class = 'table_element ' id="trending_symbol_0_smallDis"></td>
   </tr>
   <tr>
<td class = 'table_logo' id="trending_logo_1_smallDis"></td>
<td class = 'table_name' id="trending_name_1_smallDis"></td>
<td class = 'table_element' id="trending_symbol_1_smallDis"></td>
   </tr>
   <tr>
<td class = 'table_logo' id="trending_logo_2_smallDis"></td>
<td class = 'table_name' id="trending_name_2_smallDis"></td>
<td class = 'table_element' id="trending_symbol_2_smallDis"></td>
   </tr>
   <tr></tr>
   <tr></tr>
   


</table>
</div>
</div>
<div style="width:100%">
  <div class="column_gainersC">
 <span class="gainers_header"><b><i class="fa fa-arrow-up" aria-hidden="true"></i>Top Gainers</b></span>
 <table id="top_gains" style="width: 80%;" >
 <tr>
<td class = 'table_logo' id="gain_logo_1_smallDis"></td>
<td class = 'table_name' id="gain_name_1_smallDis"></td>
<td class = 'table_element' id="gain_perc_1_smallDis"></td>
   </tr>

 <tr>
<td class = 'table_logo' id="gain_logo_2_smallDis"></td>
<td class = 'table_name' id="gain_name_2_smallDis"></td>
<td class = 'table_element' id="gain_perc_2_smallDis"></td>
   </tr>

 <tr>
<td class = 'table_logo' id="gain_logo_3_smallDis"></td>
<td class = 'table_name' id="gain_name_3_smallDis"></td>
<td class = 'table_element' id="gain_perc_3_smallDis"></td>
   </tr>


</table>
</div>
</div>
<div slot="viewport" class="flicking-pagination"></div>

</Flicking>
</div>


<div class="row_gainers_smallDis"></div></div>

</template>

<script>

import axios from 'axios'


import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
export default {
        name: 'gainers_widget',
        components:{
            
         
         
        },
        data (){
          return {
            plugins: [new Pagination({ type: 'bullet' })]
          }
        },
        mounted (){
          async function recent_add(){
  const data= await axios.get('https://www.api.bscspotter.com/listings')

  const data_json=data.data
  
  const data_slice= data_json.slice(Math.max(data_json.length - 3, 1))
  const data_reverse = data_slice.reverse()


document.getElementById('new_logo_0').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[0].symbol+'"><img data-v-760eefb2 src="'+data_reverse[0].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('new_name_0').innerHTML= '<a href="https://www.bscspotter.com/token/'+data_reverse[0].symbol+'">'+data_reverse[0].name+'</a>'
document.getElementById('new_symbol_0').innerHTML=data_reverse[0].symbol

document.getElementById('new_logo_1').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[1].symbol+'"><img data-v-760eefb2 src="'+data_reverse[1].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('new_symbol_1').innerHTML=data_reverse[1].symbol
document.getElementById('new_name_1').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[1].symbol+'">'+data_reverse[1].name+'</a>'

document.getElementById('new_logo_2').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[2].symbol+'"><img data-v-760eefb2 src="'+data_reverse[2].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('new_name_2').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[2].symbol+'">'+data_reverse[2].name+'</a>'
document.getElementById('new_symbol_2').innerHTML=data_reverse[2].symbol



document.getElementById('new_logo_0_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[0].symbol+'"><img data-v-760eefb2 src="'+data_reverse[0].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('new_name_0_smallDis').innerHTML= '<a href="https://www.bscspotter.com/token/'+data_reverse[0].symbol+'">'+data_reverse[0].name+'</a>'
document.getElementById('new_symbol_0_smallDis').innerHTML=data_reverse[0].symbol

document.getElementById('new_logo_1_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[1].symbol+'"><img data-v-760eefb2 src="'+data_reverse[1].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('new_symbol_1_smallDis').innerHTML=data_reverse[1].symbol
document.getElementById('new_name_1_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[1].symbol+'">'+data_reverse[1].name+'</a>'

document.getElementById('new_logo_2_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[2].symbol+'"><img data-v-760eefb2 src="'+data_reverse[2].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('new_name_2_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_reverse[2].symbol+'">'+data_reverse[2].name+'</a>'
document.getElementById('new_symbol_2_smallDis').innerHTML=data_reverse[2].symbol


}recent_add()

async function top_gainers(){
//_smallDis
const data = await axios.get('https://www.api.bscspotter.com/top_gainers')
const data_json=data.data


document.getElementById('gain_logo_1').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'"><img data-v-760eefb2 src="'+data_json[2].logo+ '"class="gainers_icon"></a>'
document.getElementById('gain_name_1').innerHTML= '<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'">'+data_json[2].symbol+'</a>'
document.getElementById('gain_perc_1').innerHTML=data_json[2].percent_change


document.getElementById('gain_logo_2').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'"><img data-v-760eefb2 src="'+data_json[1].logo+ '"class="gainers_icon"></a>'
document.getElementById('gain_name_2').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'">'+data_json[1].symbol+'</a>'
document.getElementById('gain_perc_2').innerHTML=data_json[1].percent_change


document.getElementById('gain_logo_3').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'"><img data-v-760eefb2 src="'+data_json[0].logo+ '"class="gainers_icon"></a>'
document.getElementById('gain_name_3').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'">'+data_json[0].symbol+'</a>'
document.getElementById('gain_perc_3').innerHTML=data_json[0].percent_change

document.getElementById('gain_logo_1_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'"><img data-v-760eefb2 src="'+data_json[2].logo+ '"class="gainers_icon"></a>'
document.getElementById('gain_name_1_smallDis').innerHTML= '<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'">'+data_json[2].symbol+'</a>'
document.getElementById('gain_perc_1_smallDis').innerHTML=data_json[2].percent_change


document.getElementById('gain_logo_2_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'"><img data-v-760eefb2 src="'+data_json[1].logo+ '"class="gainers_icon"></a>'
document.getElementById('gain_name_2_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'">'+data_json[1].symbol+'</a>'
document.getElementById('gain_perc_2_smallDis').innerHTML=data_json[1].percent_change


document.getElementById('gain_logo_3_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'"><img data-v-760eefb2 src="'+data_json[0].logo+ '"class="gainers_icon"></a>'
document.getElementById('gain_name_3_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'">'+data_json[0].symbol+'</a>'
document.getElementById('gain_perc_3_smallDis').innerHTML=data_json[0].percent_change

}top_gainers()


async function trending(){

const data = await axios.get('https://www.api.bscspotter.com/token_views/')
const data_reverse = data.data.reverse()
const data_json=data_reverse

document.getElementById('trending_logo_0').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'"><img data-v-760eefb2 src="'+data_json[2].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('trending_symbol_0').innerHTML= '<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'">'+data_json[2].symbol+'</a>'
document.getElementById('trending_name_0').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'">'+data_json[2].name+'</a>'


document.getElementById('trending_logo_1').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'"><img data-v-760eefb2 src="'+data_json[1].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('trending_symbol_1').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'">'+data_json[1].symbol+'</a>'
document.getElementById('trending_name_1').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'">'+data_json[1].name+'</a>'


document.getElementById('trending_logo_2').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'"><img data-v-760eefb2 src="'+data_json[0].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('trending_symbol_2').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'">'+data_json[0].symbol+'</a>'
document.getElementById('trending_name_2').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'">'+data_json[0].name+'</a>'

document.getElementById('trending_logo_0_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'"><img data-v-760eefb2 src="'+data_json[2].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('trending_symbol_0_smallDis').innerHTML= '<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'">'+data_json[2].symbol+'</a>'
document.getElementById('trending_name_0_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[2].symbol+'">'+data_json[2].name+'</a>'


document.getElementById('trending_logo_1_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'"><img data-v-760eefb2 src="'+data_json[1].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('trending_symbol_1_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'">'+data_json[1].symbol+'</a>'
document.getElementById('trending_name_1_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[1].symbol+'">'+data_json[1].name+'</a>'


document.getElementById('trending_logo_2_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'"><img data-v-760eefb2 src="'+data_json[0].logo_link+ '"class="gainers_icon"></a>'
document.getElementById('trending_symbol_2_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'">'+data_json[0].symbol+'</a>'
document.getElementById('trending_name_2_smallDis').innerHTML='<a href="https://www.bscspotter.com/token/'+data_json[0].symbol+'">'+data_json[0].name+'</a>'

} trending()
        }

}



//'<a href="https://www.bscspotter.com/#/token/'+data_reverse[2].symbol+'">'+data_reverse[2].name+'</a>'
</script>


<style scoped>
  .flicking-pagination{
    position: absolute;
    z-index: 5;
transform: translate(0px, 9px) !important;
  }
h3{
  color: white;
}
#gainers_smallDis{
    display: none;
}
p{
  color: white !important;
}
a {
    text-decoration: none !important;
    color: rgb(255, 255, 255);
}
.gainers_icon{
   width: 100%;
  height: auto;
max-height: 250px;
float: center;

}
#new_name_2 a:link {
  text-decoration: none;

   background-color: none;
}
a {
  text-decoration: none !important;
}
#Newly_Added, #treding, #top_gains{
    position:center;
   transform: translate(11%,0%);
   
}


.table_element{
 font-size:  clamp(10px, 1vw, 15px);
  color: white;
}
.table_logo{
  width: 18%;
}
.table_name{
  font-size:  clamp(8px, 1vw, 13px);
  color:white
}
.gainers_header{
    font-family: 'Goldman';
    background-color: #ffffff;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
   
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; 
   
    -moz-text-fill-color: transparent;
    font-size:  clamp(15px, 1.5vw, 25px)
    
}
.column_gainersC{
   float: left;
   width: 33.33%;
       background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
       border-radius: 15px;
      max-height: 265px
       
}
@media (max-width: 750px){
 
  #row_gainers_big{
    display: none !important;
  }
  #gainers_smallDis{
    display: block !important;
  }

  .column_gainersC{
    overflow: visible;
  float: initial !important;
   width: 80% !important;
   max-width: 350px;
   margin: auto !important;; 
       background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
       border-radius: 15px;
      max-height: 350px}
}

i {
padding: 8px;
bottom: 0px
}
.row_gainers:after{
   
        content: "";
    display: table;
    clear: both;
    background-color: #537895;
background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
height: auto;
}
.row_gainers{
     width: 100%;
 position: center;
  display:flex;
column-gap:20px;
padding-bottom:  25px;
  padding-left: 130px;
  padding-right: 60px;
  clear: both;
  content: "";
}
@media screen and (max-width: 600px) {
  .column_gainersC {
    width: 100%;
  }
}

.name_gainers{

  color:white
}
</style>