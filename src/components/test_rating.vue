<template>
 
<div>
 
        <div class="column_right22" style="background-color:#005a68;">
           

<div class="progress_bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" ></div>

<h1 class="rating_desc">Gems Rating</h1>
<div class="icons_under">
   
<div class = 'ratingIcons'><box-icon name='coin-stack' type='solid' color="white"  > </box-icon><span class="iconText" id="liq">ACS/BNB LP:</span></div>&nbsp;


<div class = 'ratingIcons'><box-icon name='id-card' type='solid' color="white" ></box-icon><span class="iconText" id="KYC">KYC: &nbsp; {{kyc_status}}</span></div>&nbsp;&nbsp;&nbsp;
<div class = 'ratingIcons'><box-icon type='solid' color='white' name='wrench' ></box-icon><span class="iconText" id="Token_Type">Utility: &nbsp; {{utility}}</span></div>&nbsp;&nbsp;&nbsp;
<div class = 'ratingIcons'><box-icon name='group' type='solid' color="white"  ></box-icon><span class="iconText" id="Dox">Team: &nbsp; {{team}}</span></div>&nbsp;&nbsp;&nbsp;</div>




        </div>
        
    </div>
 

  
</template>

<script>
import 'boxicons'
import axios from "axios"


window.addEventListener('load', async function (){
 
   var progress_html = document.querySelector(".progress_bar")

const bnb = await axios.get(
                    'https://www.api.bscspotter.com/bnb')
                    const bnb_data = JSON.stringify(bnb.data)
                    const bnb_value =bnb_data.replace(/"/g,'')
                   
   var contract_address= sessionStorage.getItem('acs_contract_address')
const liq = await axios.get(
                    'https://www.api.bscspotter.com/liquidity/'+contract_address)
var liqdata=liq.data
var liqvalue = JSON.stringify(liqdata)

var liq_rep = liqvalue.replace(/[{"val[ue":}]/g, '');

var liq_rep2= liq_rep.replace(/]/g, '')


var liq_usd = liq_rep2 * bnb_value *2

var liq_fixed = (parseFloat(liq_usd).toFixed(2))


var liq_html= liq_fixed
console.log(liq_html)
const liq_json = await JSON.parse(liq_html)
if (liq_json>=40000)
{
  document.getElementById("liq").innerHTML = 'LP: 100%'
}
if(16000<=liq_json<=40000){
var liq_ammount = (liq_json/40000)
var liq_score = liq_ammount*100
var liq_score_final =  parseFloat(liq_score).toFixed(0)
   document.getElementById("liq").innerHTML = 'LP: &nbsp'+liq_score_final+'/100'
}
if(liq_json<16000){
var liq_ammount = (liq_json/60000)
var liq_score = liq_ammount*100
var liq_score_final =  parseFloat(liq_score).toFixed(0)
   document.getElementById("liq").innerHTML = 'LP: &nbsp'+liq_score_final+'/100'
}



var kyc_html = document.querySelector('#KYC').innerHTML 
console.log(kyc_html)
let y = "KYC: Verified"

if (kyc_html==y){
  var kyc_score = 50
  }

else {
  var kyc_score = 0
}
console.log(kyc_score)

var utility_html = document.querySelector('#Token_Type').innerHTML 
let L3 = 'Utility: L3'
let L2 = 'Utility: L2'
let L1 = 'Utility: L1'
let meme_coin = 'Utility: None'
if (utility_html==L3){
  var utility_score = 30
}

if (utility_html==L2){
 var utility_score = 70
}

if (utility_html==L1){
 var utility_score = 100
}
if (utility_html==meme_coin){
  var utility_score = 0
}
console.log(utility_score)

var team_html=document.querySelector('#Dox').innerHTML 
const doxxed = "Team: Doxxed"

if (team_html==doxxed){
  var team_score=20
}
else{
  var team_score=-20
}
console.log(team_score)

var addition = ((team_score+utility_score+kyc_score+liq_score)/270)
var final_score=Math.round((addition)*100)
console.log(team_score+utility_score+kyc_score+liq_score)
console.log(final_score)
var progress = final_score
if (final_score>80){
  progress_html.style=`--primary:#036b18; --value:${progress}`
}
if(60<=final_score && final_score<=80){
   progress_html.style=`--primary:#d9bd0b; --value:${progress}`
}
if(40<=final_score && final_score<=60){
 progress_html.style=`--primary:#d99b0b; --value:${progress}`
}
if(20<=final_score && final_score<=40){
 progress_html.style=`--primary:#d96b0b; --value:${progress}`
}
if(final_score<=20){
   progress_html.style=`--primary:#c41212; --value:${progress}`
}




});



export default {
        name: 'Rating',
  props:[
   'kyc_status', 
   'utility', 
   'team',
  ], 
}



</script>
<style>

.column_right22{ border-radius: 15px;
  width:100%;
overflow: hidden;
 position: relative;
height: 300px;
background-color: #537895;
background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);

  align-items: center;
  padding: 10px
}

@keyframes progress {
  0% { --percentage: 0; }
  100% { --percentage: var(--value); }
}

@property --percentage {
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}
.progress_bar{
  left: 40px;
  top: 30px;
  padding:10px;
  place-items: center;
  
 
}
[role="progressbar"] {
  --percentage: var(--value);
  
  --secondary: #adf;
  --size: 300px;
  animation: progress 2s 0.5s forwards;
  width: var(--size);
  aspect-ratio: 2 / 1;
  border-radius: 50% / 100% 100% 0 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

[role="progressbar"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(from 0.75turn at 50% 100%, var(--primary) calc(var(--percentage) * 1% / 2), var(--secondary) calc(var(--percentage) * 1% / 2 + 0.1%));
  mask: radial-gradient(at 50% 100%, white 55%, transparent 55.5%);
  mask-mode: alpha;
  -webkit-mask: radial-gradient(at 50% 100%, #0000 55%, #000 55.5%);
  -webkit-mask-mode: alpha;
}

[role="progressbar"]::after {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--primary);
}




.rating_desc{
  font-size: 22px;
   padding: 10px;
}
.circle_rating{
   margin: 0 auto;
   position: relative;

}

.ratingIcons{
  position: relative;
  display: inline-block;
 padding:5px
}

.ratingIcons .iconText {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: -90%;
  left: 50%;
  margin-left: -60px;
}



.ratingIcons .iconText:after {
  content: " ";
  position: absolute;
  bottom: 105%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.ratingIcons:hover .iconText {
  visibility: visible;
}
</style>