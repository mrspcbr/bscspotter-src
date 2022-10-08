<template>
 
<div>

 <div id="hide_test" ></div>
        <div class="column_right22" >
           
<div class="progress_section">
<div class="progress_bar_2" role="progressbar_2"  aria-valuemin="0" aria-valuemax="100" ></div>

<h1 class="rating_desc_2">Gems Rating</h1>
<div class="icons_under">
   
<div class = 'ratingIcons'><box-icon name='coin-stack' type='solid' color="white"  > </box-icon><span class="iconText2" id="liq"> LP: <span id='liq_score'>{{liq_score}}</span>/100</span></div>&nbsp;


<div class = 'ratingIcons'><box-icon name='id-card' type='solid' color="white" ></box-icon><span class="iconText2" id="KYC">KYC: <a target="_blank" rel="noopener noreferrer" id="kyc_link" :href=kyc_link> {{kyc_status}}</a></span></div>&nbsp;&nbsp;&nbsp;
<div class = 'ratingIcons'><box-icon type='solid' color='white' name='wrench' ></box-icon><span class="iconText2" id="Token_Type">Utility: {{utility}}</span></div>&nbsp;&nbsp;&nbsp;
<div class = 'ratingIcons'><box-icon name='group' type='solid' color="white"  ></box-icon><span class="iconText2" id="Dox">Team: {{team}}</span></div>&nbsp;&nbsp;&nbsp;</div>


</div>

        </div>
        
    </div>
 

  
</template>

<script>
import 'boxicons'
import axios from "axios"



export default {
        name: 'Rating',
  props:[
   'kyc_status', 
   'utility', 
   'team',
   'wallettAddressRating',
   'kyc_link',
   'liq_score',
  ], 
  return: {
    liq_usd:''
  
  },
 async mounted(){

  {


var liq_score = Number(document.getElementById('liq_score').innerHTML)




var kyc_html = document.querySelector('#kyc_link').innerHTML 

let y = " Verified"

if (kyc_html==y){
var kyc_score = 30
}

else {
var kyc_score = -5
}


var utility_html = document.querySelector('#Token_Type').innerHTML 

let L3 = 'Utility: L3'
let L2 = 'Utility: L2'
let L1 = 'Utility: L1'
let meme_coin = 'Utility: Meme Coin'

 if (utility_html==L1){
var utility_score = 100
}


else if (utility_html==L2){
var utility_score = 90
}

else if (utility_html==L3){
var utility_score = 30
}



else {
var utility_score = 10
}


var team_html=document.querySelector('#Dox').innerHTML 
const doxxed = "Team: Doxxed"

if (team_html==doxxed){
var team_score=20
}
else{
var team_score=-10
}

var progress_html = document.querySelector(".progress_bar_2")

var addition = ((team_score+utility_score+kyc_score+liq_score)/220)

if (addition>100){
  var final_score =100
}
else{var final_score=Math.round((addition)*100)}

var progress = await final_score
console.log(final_score>100)

if (final_score>100){
  progress_html.style=`--primary:#036b18; --value:100`
}
else if (final_score>80){
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

document.getElementById('hide_test').innerHTML = final_score

  }
}}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,600;1,700&display=swap');
.column_right22{ border-radius: 45px;
  width:100%;
overflow: hidden;
 position: relative;
height: 300px;


display: flex;
justify-content: center;
  align-items: center;
  padding: 10px
}
#hide, #hide_test{opacity: 0}
@keyframes progress {
  0% { --percentage: 0; }
  100% { --percentage: var(--value); }
}


[role="progressbar_2"] {
  --percentage: var(--value);
  
  --secondary: #adf;
  --size: clamp(0px, 60vw, 300px);
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

[role="progressbar_2"]::before {
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

[role="progressbar_2"]::after {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
  font-family: 'Goldman';
  font-size: calc(var(--size) / 5);
  color: var(--primary);
}




.rating_desc_2{
  font-size: 22px;
   padding: 5px;
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

.ratingIcons .iconText2 {
  visibility: hidden;
  width: 150px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: -90%;
  left: 55%;
  margin-left: -80px;
}



.ratingIcons .iconText2:after {
  content: " ";
  position: absolute;
  bottom: 105%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 7px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.ratingIcons:hover .iconText2 {
  visibility: visible;
}
.progress_section{
  overflow: show
}
</style>