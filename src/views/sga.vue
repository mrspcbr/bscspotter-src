<template>
<div> 

<div id="navbar">
  <nav class="links" style="--items: 5;">
    <a href="#">Home</a>
    <a href="#">Verified Projects</a>
    <a ><searchbar></searchbar></a>
    <a href="#">Blog</a>
        <a href="#">Add Token</a>
    <span class="line"></span>
  </nav></div>

 <div id="container_home">

  <crypto_widget/>
  <gainers_widget/>
<div class="container">

<div class ='token_table_div'>

<table class="token_table" id="table_home">
 <thead><tr class="HomePage">
    
   <th><span id ="reset_button"></span></th>
    <th id = 'token_name'>Token</th>
    <th >Price </th>
    <th id = 'token_rating_sort'><b>Rating</b></th>
    <th id = 'token_mcap_sort'><b>MCAP</b></th>
    <th id = 'token_liq_sort'><b>Liquidity</b></th>
 <th><b><div class="dropdown" id="dropdown_color">
  <th  class="dropbtn" id="dropdown_test">Filter</th>
  <div id="myDropdown" class="dropdown-content">
    <p id="verified_drop">Verified</p>
    <p id="doxxed_drop">Doxxed</p>
  </div>
</div></b></th>
  
  </tr></thead>
    <tr height="10px" class="Home_Page">
   
    <ul id="tokenlist_home"></ul>

 
</tr>


  <span><div class="separator_table" style = "color:#dbac04"></div></span>
  

 
 </table>
</div>
  
</div>

</div>
</div>
</template>

<script>

import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import icon from "@/assets/icons/icon.vue";
import searchbar from "@/components/searchbar.vue";
import axios from 'axios'
import crypto_widget from '@/components/crypto_widget.vue'
import gainers_widget from '@/components/gainers.vue'
export default {
    name: "Home",
   components:{
    VueSidebarMenuAkahon,
    icon,
   searchbar,
    crypto_widget,
    gainers_widget
    },
    data(){
      return{
       
      }
    },
       mounted() {
    if (sessionStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        sessionStorage.removeItem('reloaded');
        console.log('not reload')
    } else {
        // Set a flag so that we know not to reload the page twice.
        sessionStorage.setItem('reloaded', '1');
        location.reload();
        console.log('reload')
    }
}
    
}


async function create_table(){

   try {
       const listing_all = await axios.get('https://api.bscspotter.com/listings/');
        const Array_data = listing_all.data;
     buildTable(Array_data)
	 function buildTable(data){
		var table = document.getElementById('table_home')

		for (var i = 0; i < data.length; i++){
			var row = `
    
      <tr data-v-fae5bece>
							         <td data-v-fae5bece class="icon_0_big" id="icon_${data[i].symbol}">  </td>
    <td data-v-fae5bece >  <a id='link_${data[i].symbol}_name' href=""><p class='name' id="name_${data[i].symbol}">   &nbsp;</p></a> </td>
    <td data-v-fae5bece class='price' Id="price_${data[i].symbol}">  </td>
    <td data-v-fae5bece class="rating" id="rating_${data[i].symbol}" >  </td>
    <td data-v-fae5bece class="mcap" id="MCAP_${data[i].symbol}" ></td>
    <td data-v-fae5bece class="liquidity" id="liquidity_${data[i].symbol}"> </td>
    <td data-v-fae5bece class="info" id="info_${data[i].symbol}"><span id="doxxed_${data[i].symbol}"></span><span id="kyc_${data[i].symbol}"></span> </td>
					  </tr>
               <tr height="10px" class="Home_Page"></tr>`
			table.innerHTML += row

{{ async function get_token_info (){
const Verified = "Verified"
const doxxed = "Doxxed"
  var contract_address = data[i].token

  const listing = await axios.get('https://api.bscspotter.com/listings/'+contract_address)
const listing_data = listing.data
const listing_name = listing_data.name
const listing_symbol = listing_data.symbol
const kyc =(listing_data.kyc)
const team = (listing_data.team)
const logo_link_api = (listing_data.logo_link)
var symbol = listing_data.symbol
document.getElementById('name_'+symbol).innerHTML=listing_name
document.getElementById('link_'+symbol+ '_name').href="https://www.bscspotter.com/#/token/"+listing_symbol
document.getElementById('icon_'+symbol).innerHTML='<img data-v-fae5bece src="'+logo_link_api+ '" class="listing_logo">'

if (kyc==Verified){
  document.getElementById('kyc_'+symbol).innerHTML="<i class='fa fa-id-card' style='font-size: 25px;color:#DBAC04'></i>"
}
if (team ==doxxed){
 document.getElementById('doxxed_'+symbol).innerHTML="<i class='fa fa-users' style='font-size: 25px;color:#DBAC04'></i>"
}

 axios.get('https://api.bscspotter.com/token_home_price/'+contract_address)
.then(function (response) {

var data_response = response.data;
 
  
var liquidity = data_response.liquidity
var price=data_response.price
var logo=data_response.logo
var rating=data_response.rating
var mcap=data_response.mcap
var symbol = data_response.symbol
 var form2 = Intl.NumberFormat('en-US')
var usd = '$'
document.getElementById('rating_'+symbol).innerHTML=rating

 
var tokenUS_fixed = (parseFloat(price).toFixed(2))
if (price<0.01) { 

  function expo(x, f) {
      return Number.parseFloat(price).toExponential(f);
    }
   document.getElementById("price_"+symbol).innerHTML =    
 usd.bold()+ (expo(price, 2)) }
  
  else { document.getElementById("price_"+symbol).innerHTML =    
  usd.bold()+ form2.format(tokenUS_fixed)}

var liq_fixed = (parseFloat(liquidity).toFixed(2))

var liq_format = form2.format(liq_fixed)

document.getElementById("liquidity_"+symbol).innerHTML =  usd.bold()+  liq_format

var mcap_fixed = parseFloat(mcap).toFixed(0)
var mcap_form= form2.format(mcap_fixed)
console.log("test 1", symbol)
document.getElementById("MCAP_"+symbol).innerHTML =  usd.bold()+ mcap_form
var progress_html = document.querySelector("#rating_"+symbol)
console.log(progress_html)
if (rating>80){
  progress_html.style=`color:#036b18`
}
if(60<=rating && rating<=80){
   progress_html.style=`color:#d9bd0b`
}
if(40<=rating && rating<=60){
 progress_html.style=`color:#d99b0b`
}
if(20<=rating && rating<40){
 progress_html.style=`color:#d96b0b`
}
if(rating<=20){
   progress_html.style=`color:#c41212`
}





})}get_token_info()}}
		}
	}


    } catch (err) {
        console.error(err);
    }

}create_table()






window.addEventListener('load',  function (){
 console.log("window loaded")
var dropbtn = document.getElementById("dropdown_test")
dropbtn.addEventListener("click", function() {
 
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("dropdown_color").style.backgroundColor = "#212122";

  console.log("clicked")
}
)


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
     document.getElementById("dropdown_color").style.backgroundColor = "";
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
         document.getElementById("dropdown_color").style.backgroundColor = "";
      }
    }
  }
}

var name_sort = document.getElementById("token_name");
name_sort.addEventListener("click", function sortTable(){
{
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table_home");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      console.log(x,y)
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          
            document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
             document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
         
                      document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
          document.getElementById("token_name").innerHTML='<b>Token<i class="fa fa-arrow-up" style="font-size: 15px; color: white;" aria-hidden="true"></i></b>'
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
            document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
             document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
        
                      document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
           document.getElementById("token_name").innerHTML='<b>Token<i class="fa fa-arrow-down" style="font-size: 15px; color: white;" aria-hidden="true"></i></b>'
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
})

var rating_sort = document.getElementById("token_rating_sort");
rating_sort.addEventListener("click", function(){
 console.log("clicked")
{
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table_home");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      console.log(x,y)
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
           document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
          
             document.getElementById("token_name").innerHTML='<b>Token</b>'
                      document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
         
         document.getElementById("token_rating_sort").innerHTML='<b>Rating<i class="fa fa-arrow-up" style="font-size: 15px; color: white;" aria-hidden="true"></i></b>'
  shouldSwitch = true;
  break;
}
      } else if (dir == "desc") {
        
        if (Number(x.innerHTML) >Number(y.innerHTML)) { 
            document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
   
             document.getElementById("token_name").innerHTML='<b>Token</b>'
                      document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
          document.getElementById("token_rating_sort").innerHTML='<b>Rating<i class="fa fa-arrow-down" style="font-size: 15px; color: white;" aria-hidden="true"></i></b>'
  shouldSwitch = true;
  break;
}
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

}
)


var mcap_sort = document.getElementById("token_mcap_sort");
mcap_sort.addEventListener("click", function(){
  console.log("clicked")

{
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table_home");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
  
  var x = rows[i].getElementsByTagName("TD")[4]

    var  y = rows[i + 1].getElementsByTagName("TD")[4]
console.log(x.innerHTML,y)

      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
      if (Number(x.innerHTML.replace(/\D/g,'')) < Number(y.innerHTML.replace(/\D/g,''))) {
         document.getElementById("token_mcap_sort").innerHTML='<b>MCAP<i class="fa fa-arrow-up" style="font-size: 15px; color: white;" aria-hidden="true"></i></b>'
                   document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
             document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
             document.getElementById("token_name").innerHTML='<b>Token</b>'
                
  shouldSwitch = true;
  break;
}
      } else if (dir == "desc") {
        if (Number(x.innerHTML.replace(/\D/g,'')) >Number(y.innerHTML.replace(/\D/g,''))) {
           document.getElementById("token_mcap_sort").innerHTML='<b>MCAP<i class="fa fa-arrow-down" style="font-size: 15px; color: white;" aria-hidden="true"></i></b>'
            document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
             document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
             document.getElementById("token_name").innerHTML='<b>Token</b>'
                     
  shouldSwitch = true;
  
  break;
}
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

}
)


var liq_sort = document.getElementById("token_liq_sort");
liq_sort.addEventListener("click", function(){

{
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table_home");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
  
  var x = rows[i].getElementsByTagName("TD")[5]

    var  y = rows[i + 1].getElementsByTagName("TD")[5]
console.log(x.innerHTML,y)

      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
      if (Number(x.innerHTML.replace(/\D/g,'')) < Number(y.innerHTML.replace(/\D/g,''))) {
      document.getElementById("token_liq_sort").innerHTML='<b>Liquidity<i class="fa fa-arrow-up" style="font-size: 15px; color: white;" aria-hidden="true"></i></b>'
   
             document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
             document.getElementById("token_name").innerHTML='<b>Token</b>'
                      document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
  
  shouldSwitch = true;
  break;
}
      } else if (dir == "desc") {
        if (Number(x.innerHTML.replace(/\D/g,'')) >Number(y.innerHTML.replace(/\D/g,''))) {
         
             document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
             document.getElementById("token_name").innerHTML='<b>Token</b>'
                      document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
              document.getElementById("token_liq_sort").innerHTML='<b>Liquidity<i class="fa fa-arrow-down" style="font-size: 15px; color: white;" aria-hidden="true"></i></b>'
  shouldSwitch = true;
  break;
}
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
}
)



var input_test = document.getElementById("verified_drop");
input_test.addEventListener("click", function (){
 {document.getElementById("reset_button").innerHTML="<button class='button' id='Reset' style='cursor: pointer;  background-color: #212122;   border-radius:20px; color: white;'>Reset</button>"
   document.getElementById("reset_button").style.display="block"
   console.log("onkeyup")
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = "fa fa-id-card"
  table = document.getElementById("table_home");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
  
    if (td) {
      txtValue =  td.innerHTML;
      console.log(td.innerHTML)
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
})

var input_doxxed = document.getElementById("doxxed_drop");
input_doxxed.addEventListener("click", function (){
 { document.getElementById("reset_button").style.display="block"
  console.log("onkeyup")
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = "fa fa-users"
  table = document.getElementById("table_home");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
  
    if (td) {
      txtValue =  td.innerHTML;
      console.log(td.innerHTML)
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
})

var reset_button = document.getElementById("reset_button");
reset_button.addEventListener("click", function (){
 {console.log("onkeyup")
  var filter, table, tr, td, i, txtValue;

  filter = ""
  table = document.getElementById("table_home");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
  
    if (td) {
      txtValue =  td.innerHTML;
      console.log(td.innerHTML)
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
reset_button.style.display="none";

})

})

</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,600;1,700&display=swap');

.dropbtn {
 float: center;
color: white;

  cursor: pointer;
}

/* Dropdown button on hover & focus */

/* The container <div> - needed to position the dropdown content */


/* Dropdown Content (Hidden by Default) */
.dropdown{
  float: center;
  position: relative;

  
}



.dropdown-content {
 
  display: none;
  position: absolute;
  background-color: #212122;
width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
    transform: translate(-0%, -5%);
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
}


.dropdown-content a:hover {background-color: #ddd}


.show {display:block;}
a {
  text-decoration: none;
 
}

p{  background-color: #ffffff;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; 
    line-height: 180%;
    -moz-text-fill-color: transparent;}

.container {
  position: center;
  width: 93%;
  height: 100%;
 
  margin-left:90px;
   border-radius: 30px;
}
#rating_0{
  text-align:center
}
/* If you want text inside of the container */
.text {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

#container_home{
   margin: auto;
  padding-bottom: 70px;
max-width: 1700px;
}

.token_table tbody > tr:last-child  {
  border-width: 0;
}
.token_table {

  font-family: 'Goldman';
  border-collapse: collapse;
  width: 100%;

}




.token_table+td, th {
  border: collapse;
  text-align: left;
  padding: 5px;
  color: white;
  
}
.name{
  text-align:center;
  font-size: clamp(15px, 1.2vw, 21px);
  padding: -10px

}

.token_table_div{
  padding-left: 20px;
  padding-right:50px;
  border-radius: 20px;
    background-image: linear-gradient(315deg, #184263 0%, #0f2546 74%);
}
.Home_Page{
   max-height: 50px
   

}
.info{
  transform: translate(-40%, 0%);
}
#icons{
text-align:center


 
}
.price, .rating, .mcap, .liquidity{
   font-size: clamp(16px, 1.3vw, 25px);

}

table.token_table td{
  text-align: center;
  color: white
}
table.token_table th{
  text-align: center;
  
}
.listing_logo{
 width: 100%;
  height: auto;
max-height: 80px;
max-width: 70px;




}


.icon_0{
  width: 6%;
  transform: translate(90%,4%);
}

.icon_0_big{
    width: 6%;
  transform: translate(90%,4%);
}
 body {background: #434343 }

.links {
  margin: auto;
 max-width: 1700px;
    padding-left: 20px;
	background-image: linear-gradient(to bottom, #0003, transparent);
	border-bottom: 1px solid #0003;
	box-shadow: 0 0 32px #0003;
	font-size: 1em;
	font-weight: 300;
}
#navbar{
  	background-color: #123;
}
.links > a {
	color: #9ab;
	padding: .75em;
	text-align: center;
	text-decoration: none;
	transition: all .5s;
}
.links > a:hover {
	background: #ffffff06;
	color: #adf;
}


/* The Magic */

.links {
	display: grid;
	grid-template-columns: repeat(var(--items), 1fr);
	position: relative;
}
.links > .line {
	opacity: 0;
	transition: all .5s;
	position: absolute;
	bottom: 0;
	left: var(--left, calc(100% / var(--items) * (var(--index) - 1)));
	width: var(--width, calc(100% / var(--items)));
	--index: 0;
}
.links > a:hover ~ .line {
	opacity: 1;
}

.links > a:nth-of-type(1):hover ~ .line { --index: 1; }
.links > a:nth-of-type(2):hover ~ .line { --index: 2; }
.links > a:nth-of-type(3):hover ~ .line { --index: 3; }
.links > a:nth-of-type(4):hover ~ .line { --index: 4; }
.links > a:nth-of-type(5):hover ~ .line { --index: 5; }
.links > a:nth-of-type(6):hover ~ .line { --index: 6; }
.links > a:nth-of-type(7):hover ~ .line { --index: 7; }
.links > a:nth-of-type(8):hover ~ .line { --index: 8; }
.links > a:nth-of-type(9):hover ~ .line { --index: 9; }
.links > a:nth-of-type(10):hover ~ .line { --index: 10; }
.links > a:last-of-type:hover ~ .line { --index: var(--items); }

 #token_name, #token_rating_sort, #token_mcap_sort, #token_liq_sort, #verified_drop, #doxxed_drop{
  cursor: pointer;
}


</style>