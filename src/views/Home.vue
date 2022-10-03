<template>
  <div> 
  
  
  
   <div id="container_home">
    <span id="crypto_widget">
    <crypto_widget v-if="isMounted"/></span>
    <div class="divider" id="divider_small_dis">divider</div>
   <span id="gainers_widget" v-if="isMounted"><gainers_widget/></span> 
  <div class="divider">divider</div>
  <div class="container">
  


  <div class ='token_table_div'>
   
  <table class="token_table" id="table_home">
   <thead><tr class="HomePage" id="HomePage">
      
     <th class="header_top" style=" min-width: 0px;"><span id ="reset_button"></span></th>
      <th id = 'token_name' class="top">Token</th>
      <th class="top">Price </th>
    <th class='rating_column '  id=""><div id="background_color_rating" class="dropdown"><p><b id = 'token_rating_sort'>Rating</b><i class="fa fa-bars rating" id='rating_dropdown' aria-hidden="true">
        
      </i>  </p> <div id="dropdown_rating" class="dropdown-rating">
          <p id="high_rated" class="rating_dropdown_button">High</p>
          <p id="med_high_rated" class="rating_dropdown_button">Medium </p>
          <p id="low_rated" class="rating_dropdown_button">Low</p>
     
     
    </div></div>
    
</th>
      <th id = 'token_mcap_sort' class="top"><b>MCAP</b></th>
      <th id = 'token_liq_sort' class="top"><b>Liquidity</b></th>
   <th id="drop_down_th"><b><div class="dropdown" id="dropdown_color">
    <p  class="dropbtn" id="dropdown_test">Filter</p>
    <div id="myDropdown" class="dropdown-content">
      <p id="verified_drop">KYC'd</p>
      <p id="doxxed_drop">Doxxed</p>
    </div>
  </div></b></th>
    
    </tr></thead>
  
     
      <span id="tokenlist_home"></span>
  
  
    <span><div class="separator_table" style = "color:#dbac04"></div></span>
    
  
   
   </table>
   <div id="pagination_buttons">
    <span  id="pagination_left2" class='pag2 pagination_others' style="display:none">&laquo;</span>
    <span  id="pagination_left3" class="pag3 pagination_others" style="display:none">&laquo;</span>
    <span  id="pagination_left4" class="pag4 pagination_others" style="display:none">&laquo;</span>
    <span  id="pagination_left5" class="pag5 pagination_others" style="display:none">&laquo;</span>
    <span  id="pagination_left6" class="pag6 pagination_others" style="display:none">&laquo;</span>
    <span id="pagination_left" class="pagination_reset">&laquo;</span>
    <span class="pagination pagination_reset" id="pagination"></span>
    <span class="pagination pag2 pagination_others" id="pagination2"></span>
    <span class="pagination pag3 pagination_others" id="pagination3"></span>
    <span class="pagination pag4 pagination_others" id="pagination4"></span>
    <span class="pagination pag5 pagination_others" id="pagination5"></span>
    <span class="pagination pag6 pagination_others" id="pagination6"></span>
    <span id="pagination_right" class="pagination_reset"  >&raquo;</span>
    <span id="pagination_right2" class='pag2 pagination_others'  style="display:none">&raquo;</span>
    <span id="pagination_right3" class="pag3 pagination_others" style="display:none">&raquo;</span>
    <span id="pagination_right4" class="pag4 pagination_others" style="display:none">&raquo;</span>
    <span id="pagination_right5" class="pag5 pagination_others" style="display:none">&raquo;</span>
    <span id="pagination_right6" class="pag6 pagination_others" style="display:none">&raquo;</span>
  
  
  
  </div>
  </div>
    <table id="table_home_2"></table>
  </div>
  <div id="banner_ad_bottom_right" >
             <a href="http://www.bscspotter.com/contact">  <img src="@/assets/images/ads/your_ad_here.png" alt="pancakeswap" width="300" height="100"></a>
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
          isMounted: false
        }
      },
    mounted(){
      var count = 0
      this.isMounted = true

      async function create_table(){
  
  try {
      const listing_all = await axios.get('https://www.api.bscspotter.com/promoted_listing');
       var Array_data = listing_all.data;
       const chunkSize = 30;
       var arr_chunk=[]
for (let i = 0; i < Array_data.length; i += chunkSize) {
   const chunk = Array_data.slice(i, i + chunkSize);
   arr_chunk.push(chunk)
}


for (var b = 0; b < arr_chunk.length; b++){
var pagination_buttons = document.getElementById('pagination');
 var pagination = `
 <a  data-v-fae5bece class="pagination_function ${b}" href="#">${b+1}</a>
 `
 pagination_buttons.innerHTML += pagination;


 buildTable(arr_chunk[b])
    
    function buildTable(data){
     var table = document.getElementById('table_home')

     for (var i = 0; i < arr_chunk[b].length; i++){
       var row = `
        <tr data-v-fae5bece height="80px" class="Home_Page_${b}">
    
                      <td data-v-fae5bece class="icon_0_big"  style="text-align: center" id="icon_${data[i].token}">  </td>
     <td data-v-fae5bece class='header'>  <a id='link_${data[i].token}_name' href=""><p class='name' id="name_${data[i].token}">   &nbsp;</p></a> </td>
     <td data-v-fae5bece class='price' Id="price_${data[i].token}">  </td>
     <td data-v-fae5bece class="rating" id="rating_${data[i].token}" >  </td>
     <td data-v-fae5bece class="mcap" id="MCAP_${data[i].token}" ></td>
     <td data-v-fae5bece class="liquidity" id="liquidity_${data[i].token}"> </td>
     <td data-v-fae5bece class="info" id="info_${data[i].token}"><span id="doxxed_${data[i].token}"></span><span id="kyc_${data[i].token}"></span> </td>
   </tr >
     `
       table.innerHTML += row
 var arr_testing = []
 
 {{ async function get_token_info (){
  
 const Verified = "Verified"
 const doxxed = "Doxxed"
   var contract_address = data[i].token
 
   const listing = await axios.get('https://www.api.bscspotter.com/listings/'+contract_address)
 const listing_data = listing.data
 const listing_name = listing_data.name
 const listing_symbol = listing_data.symbol
 const kyc =(listing_data.kyc)
 const team = (listing_data.team)
 const logo_link_api = (listing_data.logo_link)
 var symbol = listing_data.symbol
 const token = listing_data.token

 document.getElementById('name_'+token).innerHTML=listing_name
 document.getElementById('link_'+token+ '_name').href="http://www.bscspotter.com/token/"+listing_name
 document.getElementById('icon_'+token).innerHTML='<img data-v-fae5bece src="'+logo_link_api+ '" class="listing_logo">'
 
 if (kyc==Verified){
   document.getElementById('kyc_'+token).innerHTML="<i class='fa fa-id-card' style='font-size: clamp(20px, 2.4vw, 30px);color:#DBAC04'></i>"
 }
 if (team ==doxxed){
  document.getElementById('doxxed_'+token).innerHTML="<i class='fa fa-users' style='font-size: clamp(20px, 2.4vw, 30px);color:#DBAC04'></i>"
 }
 
  axios.get('https://www.api.bscspotter.com/token_home_price/'+contract_address)
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
 document.getElementById('rating_'+token).innerHTML=rating
 
  arr_testing.push(liquidity)
  
 var tokenUS_fixed = (parseFloat(price).toFixed(2))
 if (price<0.01) { 
 
   function expo(x, f) {
       return Number.parseFloat(price).toExponential(f);
     }
    document.getElementById("price_"+token).innerHTML =    
  usd.bold()+ (expo(price, 2)) }
   
   else { document.getElementById("price_"+token).innerHTML =    
   usd.bold()+ form2.format(tokenUS_fixed)}
 
 var liq_fixed = (parseFloat(liquidity).toFixed(2))
 
 var liq_format = form2.format(liq_fixed)
 
 document.getElementById("liquidity_"+token).innerHTML =  usd.bold()+  liq_format
 
 var mcap_fixed = parseFloat(mcap).toFixed(0)
 var mcap_form= form2.format(mcap_fixed)

 document.getElementById("MCAP_"+token).innerHTML =  usd.bold()+ mcap_form
 var progress_html = document.querySelector("#rating_"+token)
 
 if (rating>80){
   progress_html.style=`color:#036b18`
   progress_html.classList.add("highly_rated")
 }
 if(60<=rating && rating<=80){
    progress_html.style=`color:#d9bd0b`
    progress_html.classList.add("med_high_rated")
 }
 if(40<=rating && rating<=60){
  progress_html.style=`color:#d99b0b`
  progress_html.classList.add("med_rated")
 }
 if(20<=rating && rating<40){
  progress_html.style=`color:#d96b0b`
  progress_html.classList.add("low_rated")
 }
 if(rating<=20){
    progress_html.style=`color:#c41212`
    progress_html.classList.add("low_rated")
 }


 
 


 {

 
 
  
 var dropbtn = document.getElementById("dropdown_test")
 dropbtn.addEventListener("click", function() {
  
   document.getElementById("myDropdown").style.display="block";
   document.getElementById("dropdown_color").style.backgroundColor = "#212122";
 

 }
 )  
 const rating_dropdown=  document.getElementById('rating_dropdown')

 rating_dropdown.addEventListener('click', function () {
  document.getElementById("background_color_rating").style.backgroundColor = "#212122";

  document.getElementById("dropdown_rating").style.display="block";
 




})
 
 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
  if (!event.target.matches('.rating')) {
     
    document.getElementById("dropdown_rating").style.display="none";
    document.getElementById("background_color_rating").style.backgroundColor = "";
    
    
   }
   if (!event.target.matches('.dropbtn')) {
  
     var dropdowns = document.getElementsByClassName("dropdown-content");
      document.getElementById("dropdown_color").style.backgroundColor = "";
      document.getElementById("myDropdown").style.display="none";
    
 
   }
 }
 
 var name_sort = document.getElementById("token_name");
 name_sort.addEventListener("click", function sortTable(){
 {
   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
   table = document.getElementById("table_home");
   const tr = table.getElementsByTagName("tr");

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
     for (i = 1; i < (rows.length -1); i++) {
       //start by saying there should be no switching:
       shouldSwitch = false;
       /*Get the two elements you want to compare,
       one from current row and one from the next:*/
       x = rows[i].getElementsByTagName("TD")[1];
       y = rows[i + 1].getElementsByTagName("TD")[1];
    
       /*check if the two rows should switch place,
       based on the direction, asc or desc:*/
       if (dir == "asc") {
         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
           //if so, mark as a switch and break the loop:
           
             document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
              document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
          
                       document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
           document.getElementById("token_name").innerHTML='<b>Token<i class="fa fa-arrow-up" style=" color: white;" aria-hidden="true"></i></b>'
           shouldSwitch= true;
           break;
         }
       } else if (dir == "desc") {
         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
           //if so, mark as a switch and break the loop:
             document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
              document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
         
                       document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
            document.getElementById("token_name").innerHTML='<b>Token<i class="fa fa-arrow-down" style=" color: white;" aria-hidden="true"></i></b>'
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
     for (i = 1; i < (rows.length -1); i++) {
       //start by saying there should be no switching:
       shouldSwitch = false;
       /*Get the two elements you want to compare,
       one from current row and one from the next:*/
       x = rows[i].getElementsByTagName("TD")[3];
       y = rows[i + 1].getElementsByTagName("TD")[3];
 
       /*check if the two rows should switch place,
       based on the direction, asc or desc:*/
       if (dir == "asc") {
       if (Number(x.innerHTML) < Number(y.innerHTML)) {

            document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
           
              document.getElementById("token_name").innerHTML='<b>Token</b>'
                       document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
          
          document.getElementById("token_rating_sort").innerHTML='<b>Rating<i class="fa fa-arrow-up" style=" color: white;" aria-hidden="true"></i></b>'
   shouldSwitch = true;
   break;
 }
       } else if (dir == "desc") {
     
         if (Number(x.innerHTML) >Number(y.innerHTML)) { 
             document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
    
              document.getElementById("token_name").innerHTML='<b>Token</b>'
                       document.getElementById("token_mcap_sort").innerHTML='<b>MCAP</b>'
           document.getElementById("token_rating_sort").innerHTML='<b>Rating<i class="fa fa-arrow-down" style=" color: white;" aria-hidden="true"></i></b>'
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

       /*check if the two rows should switch place,
       based on the direction, asc or desc:*/
       if (dir == "asc") {
       if (Number(x.innerHTML.replace(/\D/g,'')) < Number(y.innerHTML.replace(/\D/g,''))) {
          document.getElementById("token_mcap_sort").innerHTML='<b>MCAP<i class="fa fa-arrow-up" style=" color: white;" aria-hidden="true"></i></b>'
                    document.getElementById("token_liq_sort").innerHTML='<b>Liquidity</b>'
              document.getElementById("token_rating_sort").innerHTML='<b>Rating</b>'
              document.getElementById("token_name").innerHTML='<b>Token</b>'
                 
   shouldSwitch = true;
   break;
 }
       } else if (dir == "desc") {
         if (Number(x.innerHTML.replace(/\D/g,'')) >Number(y.innerHTML.replace(/\D/g,''))) {
            document.getElementById("token_mcap_sort").innerHTML='<b>MCAP<i class="fa fa-arrow-down" style=" color: white;" aria-hidden="true"></i></b>'
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

 
       /*check if the two rows should switch place,
       based on the direction, asc or desc:*/
       if (dir == "asc") {
       if (Number(x.innerHTML.replace(/\D/g,'')) < Number(y.innerHTML.replace(/\D/g,''))) {
       document.getElementById("token_liq_sort").innerHTML='<b>Liquidity<i class="fa fa-arrow-up" style=" color: white;" aria-hidden="true"></i></b>'
    
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
               document.getElementById("token_liq_sort").innerHTML='<b>Liquidity<i class="fa fa-arrow-down" style=" color: white;" aria-hidden="true"></i></b>'
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
 
 
 
 
 
 }
 
 })}
 
 
 get_token_info()}}
     }
   }

   const pagination_function= document.querySelectorAll('.pagination_function');

   
   pagination_function.forEach(pagination_function => {


  const table_rows= document.querySelectorAll('.Home_Page_'+pagination_function.innerHTML-1);


const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");


  pagination_function.setAttribute('id', 'pagination_function_active');
  tr.forEach(Home_Page => {
    if (Home_Page.classList.contains('Home_Page_0')) {
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      const pagnigation = document.getElementById('pagination')
const pagnigation_a = pagnigation.getElementsByTagName('a')


pagnigation_a[0].id= 'active'

    } 
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    }

    

  });

  



}


);

   
pagination_function.forEach(pagination_function => {

 pagination_function.addEventListener('click', function handleClick(event) {
 
   const table_rows= document.querySelectorAll('.Home_Page_'+(pagination_function.innerHTML-1));


  
const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagnigation = document.getElementById('pagination')
const pagnigation_a = pagnigation.getElementsByTagName('a')

pagnigation_a.forEach (pagnigation_a => {
pagnigation_a.id= ''
})
   pagination_function.setAttribute('id', 'active');

   tr.forEach(Home_Page => {
     if (Home_Page.classList.contains('Home_Page_'+(pagination_function.innerHTML-1))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';

  
   
     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });

   

 });

}


);

var pagination_left = document.getElementById('pagination_left');
var pagination_right = document.getElementById('pagination_right');


const pagnigation = document.getElementById('pagination')
const pagnigation_a = pagnigation.getElementsByTagName('a')






pagnigation_a.forEach (pagnigation_a => {
pagination_left.addEventListener('click', function handleClick(event) {


if (pagnigation_a.id== 'active' && pagnigation_a.innerHTML-1 > 0) {

const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
tr.forEach(Home_Page => {

 pagination_function.forEach(pagination_function => {

    if (Home_Page.classList.contains('Home_Page_'+(pagnigation_a.innerHTML-2))) {
 
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      pagnigation_a.id= ''
       pagnigation_a.previousElementSibling.id= 'active'
 
    } 
    
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    
    }})})


}
})


})

}

var pagination_right = document.getElementById('pagination_right');
pagination_right.addEventListener('click', function handleClicks(event) {
const pagnigation = document.getElementById('pagination')
const pagnigation_a = pagnigation.getElementsByTagName('a')


const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagination_current = document.getElementById('active')


const pagination_number = pagination_current.innerHTML

if (pagnigation_a.length != pagination_number){

 const pagination_next = pagination_current.nextElementSibling

pagination_current.setAttribute('id', 'not_active')
pagination_next.setAttribute('id', 'active')


tr.forEach(Home_Page => {
     if (Home_Page.classList.contains('Home_Page_'+(pagination_number))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';
    
     var arr_home_page = []
     arr_home_page.push(Home_Page)
  
   
     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });}


})

function move_left (classlist, active, pagination){
const pagnigation = pagination
const pagnigation_a = pagnigation.getElementsByTagName('a')


const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagination_current = document.getElementById(`${active}`)


const pagination_number = pagination_current.innerHTML

if (pagnigation_a.length != pagination_number){

 const pagination_next = pagination_current.nextElementSibling

pagination_current.setAttribute('id', 'not_active4')
pagination_next.setAttribute('id', `${active}`)


tr.forEach(Home_Page => {
     if (Home_Page.classList.contains(`${classlist}`+(pagination_number))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';
    
     var arr_home_page = []
     arr_home_page.push(Home_Page)
  
   
     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });}
}


var pagination_right4 = document.getElementById('pagination_right4');
pagination_right4.addEventListener('click', function handleClicks(event) {
  const pagnigation = document.getElementById('pagination4')
const active = 'active4'
const classlist = 'filtered_high_rated_'
  move_left (classlist, active, pagnigation )


})
var pagination_right6 = document.getElementById('pagination_right6');
pagination_right6.addEventListener('click', function handleClicks(event) {
  const pagnigation = document.getElementById('pagination6')
const active = 'active6'
const classlist = 'filteredList_low_rated_'
move_left (classlist, active, pagnigation )

})
var pagination_right5 = document.getElementById('pagination_right5');
pagination_right5.addEventListener('click', function handleClicks(event) {
  const pagnigation = document.getElementById('pagination5')
const active = 'active5'
const classlist = 'filteredList_med_rated_'
move_left (classlist, active, pagnigation )

})
var filter_rating_high = document.getElementById('high_rated');
filter_rating_high.addEventListener('click', function(){
  document.getElementById('pagination5').innerHTML = '';
document.getElementById('pagination6').innerHTML = '';
document.getElementById('pagination4').innerHTML = '';
document.getElementById('pagination3').innerHTML = '';
document.getElementById('pagination2').innerHTML = '';
var pag1 = document.querySelectorAll('.pagination_reset')
pag1.forEach(pag1 => {
  pag1.style.display='none';
})
  var pag2 = document.querySelectorAll('.pag2')
  pag2.forEach(pag2 => {
    pag2.style.display='none';})
    var pag3 = document.querySelectorAll('.pag3')
  pag3.forEach(pag2 => {
    pag2.style.display='none';})
    var pag4 = document.querySelectorAll('.pag4')
  pag4.forEach(pag2 => {
    pag2.style.display='';})
    var pag5 = document.querySelectorAll('.pag5')
  pag5.forEach(pag2 => {
    pag2.style.display='none';})
    var pag6 = document.querySelectorAll('.pag6')
  pag6.forEach(pag2 => {
    pag2.style.display='none';})
  
   const pagination_button = document.getElementById("pagination")
   pagination_button.style.display="none"

   
  {document.getElementById("reset_button").innerHTML="<button class='button' id='Reset' style='cursor: pointer;  background-color: #1b1829; font-size: clamp(10px, 3vw, 13px);  border-radius:20px; color: #adf ; border-color: ; -webkit-text-fill-color: initial; padding: 3px'>Reset</button>"
    document.getElementById("reset_button").style.display="block"

   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = "highly_rated"
   table = document.getElementById("table_home");
   tr = table.getElementsByTagName("tr");

document.getElementById('pagination4').style.display=''
   var chunkSize = 30;
   var Array_data= []
       var arr_chunk=[]
   


   for (i = 0; i < tr.length; i++) {
   
  
     td = tr[i].getElementsByTagName("td")[3];
     if (tr[i].classList.contains("filteredList_doxxed")){
  tr[i].classList.remove("filteredList_doxxed")


}
if (tr[i].classList.contains("filteredList_kyc")){
  tr[i].classList.remove("filteredList_kyc")


}
     if (td) {
       txtValue =  td.classList[1];
   
       if (txtValue.indexOf(filter) > -1) {
         tr[i].style.display = "";
        
         tr[i].classList.add("filteredList_highly_rated")
         
       } else {
         tr[i].style.display = "none";
       }
     }       
   }
 }
 for (let j = 0; j < tr.length; j++) {
      if (tr[j].classList.contains('filteredList_highly_rated')){
      
        Array_data.push(tr[j])
     
      }
    }
       
      
for (let i = 0; i < Array_data.length; i += chunkSize) {
 
   const chunk = Array_data.slice(i, i + chunkSize);
   
 
   arr_chunk.push(chunk)

}
for ( let i = 0; i < arr_chunk.length; i++){
  arr_chunk[i].forEach(arr_chunk => {
    arr_chunk.classList.add('filtered_high_rated_'+i)
  })
}
for (var b = 0; b < arr_chunk.length; b++){
var pagination_buttons = document.getElementById('pagination4');
 var pagination = `
 <a  data-v-fae5bece class="pagination_function_filtered_top_rating filtered_rating_high_${b}" href="#">${b+1}</a>
 `
 pagination_buttons.innerHTML += pagination;}

 const pagination_function= document.querySelectorAll('.pagination_function_filtered_top_rating');

   
   pagination_function.forEach(pagination_function => {


  const table_rows= document.querySelectorAll('.Home_Page_'+pagination_function.innerHTML-1);


const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");


  pagination_function.setAttribute('id', '');
  tr.forEach(Home_Page => {
    if (Home_Page.classList.contains('filtered_high_rated_0')) {
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      const pagnigation = document.getElementById('pagination4')
const pagnigation_a = pagnigation.getElementsByClassName('pagination_function_filtered_top_rating')


pagnigation_a[0].id= 'active4'

    } 
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    }

    

  });

  



}


);

   
pagination_function.forEach(pagination_function => {

 pagination_function.addEventListener('click', function handleClick(event) {
 
   const table_rows= document.querySelectorAll('.Home_Page_'+(pagination_function.innerHTML-1));


  
const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagnigation = document.getElementById('pagination4')
const pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
pagnigation_a.id= ''
})
   pagination_function.setAttribute('id', 'active4');

   tr.forEach(Home_Page => {

     if (Home_Page.classList.contains('filtered_high_rated_'+(pagination_function.innerHTML-1))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';

  
   
     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });

   

 });

}


);



var pagination_right4 = document.getElementById('pagination_right4');
var pagination_left4 = document.getElementById('pagination_left4');
var pagnigation = document.getElementById('pagination4')
var pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
  pagination_left4.addEventListener('click', function handleClick(event) {


  
  
if (pagnigation_a.id== 'active4' && pagnigation_a.innerHTML-1 > 0) {

const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
tr.forEach(Home_Page => {

 pagination_function.forEach(pagination_function => {

    if (Home_Page.classList.contains('filtered_high_rated_'+(pagnigation_a.innerHTML-2))) {
 
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      pagnigation_a.id= ''
       pagnigation_a.previousElementSibling.id= 'active4'
 
    } 
    
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    
    }})})


}
})


})

})
 



var filtered_low_rated = document.getElementById('low_rated');
 filtered_low_rated.addEventListener('click', function(){
  document.getElementById('pagination5').innerHTML = '';
document.getElementById('pagination6').innerHTML = '';
document.getElementById('pagination4').innerHTML = '';
document.getElementById('pagination3').innerHTML = '';
document.getElementById('pagination2').innerHTML = '';

  document.getElementById('pagination6').innerHTML='';
  document.getElementById('pagination6').style.display='';

  document.getElementById("pagination_left6").style.display='';
  document.getElementById("pagination_right6").style.display='';
var pag1 = document.querySelectorAll('.pagination_reset')
pag1.forEach(pag1 => {
  pag1.style.display='none';
})
  var pag2 = document.querySelectorAll('.pag2')
  pag2.forEach(pag2 => {
    pag2.style.display='none';})
    var pag3 = document.querySelectorAll('.pag3')
  pag3.forEach(pag2 => {
    pag2.style.display='none';})
    var pag4 = document.querySelectorAll('.pag4')
  pag4.forEach(pag2 => {
    pag2.style.display='none';})
    var pag5 = document.querySelectorAll('.pag5')
  pag5.forEach(pag2 => {
    pag2.style.display='none';})
    var pag6 = document.querySelectorAll('.pag6')
  pag6.forEach(pag2 => {
    pag2.style.display='';})

   const pagination_button = document.getElementById("pagination")
   pagination_button.style.display="none"

   
  {document.getElementById("reset_button").innerHTML="<button class='button' id='Reset' style='cursor: pointer; font-size: clamp(10px, 3vw, 13px);  background-color: #1b1829;   border-radius:20px; color: #adf ; border-color: ; -webkit-text-fill-color: initial; padding: 3px'>Reset</button>"
    document.getElementById("reset_button").style.display="block"

   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = "low_rated"
   table = document.getElementById("table_home");
   tr = table.getElementsByTagName("tr");

document.getElementById('pagination5').style.display=''
   var chunkSize = 30;
   var Array_data= []
       var arr_chunk=[]
   


   for (i = 0; i < tr.length; i++) {
   
  
     td = tr[i].getElementsByTagName("td")[3];
     if (tr[i].classList.contains("filteredList_doxxed")){
  tr[i].classList.remove("filteredList_doxxed")


}
if (tr[i].classList.contains("filteredList_kyc")){
  tr[i].classList.remove("filteredList_kyc")


}
if (tr[i].classList.contains("medium_rated")){
  tr[i].classList.remove("medium_rated")


}
if (tr[i].classList.contains("highly_rated")){
  tr[i].classList.remove("highly_rated")


}

     if (td) {
       txtValue =  td.classList[1];
   
       if (txtValue.indexOf(filter) > -1) {
         tr[i].style.display = "";
        
         tr[i].classList.add("filteredList_low_rated")
         
       } else {
         tr[i].style.display = "none";
       }
     }       
   }
 }
 for (let j = 0; j < tr.length; j++) {
      if (tr[j].classList.contains('filteredList_low_rated')){
      
        Array_data.push(tr[j])
    
      
      }
    }
       
      
for (let i = 0; i < Array_data.length; i += chunkSize) {
 
   const chunk = Array_data.slice(i, i + chunkSize);

 
   arr_chunk.push(chunk)

}
for ( let i = 0; i < arr_chunk.length; i++){
  arr_chunk[i].forEach(arr_chunk => {
    arr_chunk.classList.add('filteredList_low_rated_'+i)
  })
}
for (var b = 0; b < arr_chunk.length; b++){
var pagination_buttons = document.getElementById('pagination6');
 var pagination = `
 <a  data-v-fae5bece class="pagination_function_filtered_low_rating filtered_low_rated${b}" href="#">${b+1}</a>
 `
 pagination_buttons.innerHTML += pagination;}

 const pagination_function= document.querySelectorAll('.pagination_function_filtered_low_rating');

   
   pagination_function.forEach(pagination_function => {


 


const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");


  pagination_function.setAttribute('id', '');
  tr.forEach(Home_Page => {
    if (Home_Page.classList.contains('filteredList_low_rated_0')) {
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      const pagnigation = document.getElementById('pagination6')
const pagnigation_a = pagnigation.getElementsByClassName('pagination_function_filtered_low_rating')


pagnigation_a[0].id= 'active6'

    } 
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    }

    

  });

  



}


);

   
pagination_function.forEach(pagination_function => {

 pagination_function.addEventListener('click', function handleClick(event) {
 
  


  
const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagnigation = document.getElementById('pagination6')
const pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
pagnigation_a.id= ''
})
   pagination_function.setAttribute('id', 'active6');

   tr.forEach(Home_Page => {
   
     if (Home_Page.classList.contains('filteredList_low_rated_'+(pagination_function.innerHTML-1))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';

  
   
     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });

   

 });

}


);



var pagination_right4 = document.getElementById('pagination_right4');

var pagination_left6 = document.getElementById('pagination_left6');
var pagnigation = document.getElementById('pagination6')
var pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
  pagination_left6.addEventListener('click', function handleClick(event) {


if (pagnigation_a.id== 'active6' && pagnigation_a.innerHTML-1 > 0) {

const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
tr.forEach(Home_Page => {

 pagination_function.forEach(pagination_function => {

    if (Home_Page.classList.contains('filteredList_low_rated_'+(pagnigation_a.innerHTML-2))) {
 
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      pagnigation_a.id= ''
       pagnigation_a.previousElementSibling.id= 'active6'
 
    } 
    
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    
    }})})


}
})


})

})

var filtered_rating_med = document.getElementById('med_high_rated');
filtered_rating_med.addEventListener('click', function(){

document.getElementById('pagination5').innerHTML = '';
document.getElementById('pagination6').innerHTML = '';
document.getElementById('pagination4').innerHTML = '';
document.getElementById('pagination3').innerHTML = '';
document.getElementById('pagination2').innerHTML = '';


  var pag1 = document.querySelectorAll('.pagination_reset')
pag1.forEach(pag1 => {
  pag1.style.display='none';
})
  var pag2 = document.querySelectorAll('.pag2')
  pag2.forEach(pag2 => {
    pag2.style.display='none';})
    var pag3 = document.querySelectorAll('.pag3')
  pag3.forEach(pag2 => {
    pag2.style.display='none';})
    var pag4 = document.querySelectorAll('.pag4')

  pag4.forEach(pag2 => {
    pag2.style.display='none';})
    var pag5 = document.querySelectorAll('.pag5')
  pag5.forEach(pag2 => {
    pag2.style.display='';})
    var pag6 = document.querySelectorAll('.pag6')
  pag6.forEach(pag2 => {
    pag2.style.display='none';})
   const pagination_button = document.getElementById("pagination")
   pagination_button.style.display="none"

   
  {document.getElementById("reset_button").innerHTML="<button class='button' id='Reset' style='cursor: pointer; font-size: clamp(10px, 3vw, 13px);  background-color: #1b1829;   border-radius:20px; color: #adf ; border-color: ; -webkit-text-fill-color: initial; padding: 3px'>Reset</button>"
    document.getElementById("reset_button").style.display="block"

   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = "med_high_rated"
   table = document.getElementById("table_home");
   tr = table.getElementsByTagName("tr");

document.getElementById('pagination5').style.display=''
   var chunkSize = 30;
   var Array_data= []
       var arr_chunk=[]
   


   for (i = 0; i < tr.length; i++) {
   
  
     td = tr[i].getElementsByTagName("td")[3];
     if (tr[i].classList.contains("filteredList_doxxed")){
  tr[i].classList.remove("filteredList_doxxed")


}
if (tr[i].classList.contains("filteredList_kyc")){
  tr[i].classList.remove("filteredList_kyc")


}
if (tr[i].classList.contains("medium_rated")){
  tr[i].classList.remove("medium_rated")


}
     if (td) {
       txtValue =  td.classList[1];
   
       if (txtValue.indexOf(filter) > -1) {
         tr[i].style.display = "";
        
         tr[i].classList.add("filteredList_med_rated")
         
       } else {
         tr[i].style.display = "none";
       }
     }       
   }
 }
 for (let j = 0; j < tr.length; j++) {
      if (tr[j].classList.contains('filteredList_med_rated')){
      
        Array_data.push(tr[j])
    
      }
    }
       
      
for (let i = 0; i < Array_data.length; i += chunkSize) {
 
   const chunk = Array_data.slice(i, i + chunkSize);

 
   arr_chunk.push(chunk)

}
for ( let i = 0; i < arr_chunk.length; i++){
  arr_chunk[i].forEach(arr_chunk => {
    arr_chunk.classList.add('filteredList_med_rated_'+i)
  })
}
for (var b = 0; b < arr_chunk.length; b++){
var pagination_buttons = document.getElementById('pagination5');
 var pagination = `
 <a  data-v-fae5bece class="pagination_function_filtered_med_rating filtered_med_rated${b}" href="#">${b+1}</a>
 `
 pagination_buttons.innerHTML += pagination;}

 const pagination_function= document.querySelectorAll('.pagination_function_filtered_med_rating');

   
   pagination_function.forEach(pagination_function => {


 


const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");


  pagination_function.setAttribute('id', '');
  tr.forEach(Home_Page => {
    if (Home_Page.classList.contains('filteredList_med_rated_0')) {
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      const pagnigation = document.getElementById('pagination5')
const pagnigation_a = pagnigation.getElementsByClassName('pagination_function_filtered_med_rating')


pagnigation_a[0].id= 'active5'

    } 
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    }

    

  });

  



}


);

   
pagination_function.forEach(pagination_function => {

 pagination_function.addEventListener('click', function handleClick(event) {
 
  


  
const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagnigation = document.getElementById('pagination5')
const pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
pagnigation_a.id= ''
})
   pagination_function.setAttribute('id', 'active5');

   tr.forEach(Home_Page => {

     if (Home_Page.classList.contains('filteredList_med_rated_'+(pagination_function.innerHTML-1))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';

  
   
     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });

   

 });

}


);



var pagination_right4 = document.getElementById('pagination_right4');

var pagination_left5 = document.getElementById('pagination_left5');
var pagnigation = document.getElementById('pagination5')
var pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
  pagination_left5.addEventListener('click', function handleClick(event) {

if (pagnigation_a.id== 'active5' && pagnigation_a.innerHTML-1 > 0) {

const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
tr.forEach(Home_Page => {

 pagination_function.forEach(pagination_function => {

    if (Home_Page.classList.contains('filteredList_med_rated_'+(pagnigation_a.innerHTML-2))) {
 
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      pagnigation_a.id= ''
       pagnigation_a.previousElementSibling.id= 'active5'
 
    } 
    
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    
    }})})


}
})


})

})
var input_test = document.getElementById("verified_drop");
 input_test.addEventListener("click", function (){
  document.querySelectorAll('.pagination_others').forEach(e => e.style.display = 'none');

  document.getElementById("pagination2").innerHTML='';
  document.getElementById("pagination_right").style.display='none';
  document.getElementById("pagination_left").style.display='none';
  document.getElementById("pagination_right2").style.display='';
  document.getElementById("pagination_left2").style.display='';
  document.getElementById("pagination_right3").style.display='none';
  document.getElementById("pagination_left3").style.display='none';
  document.getElementById("pagination3").innerHTML='';
   const pagination_button = document.getElementById("pagination")
   pagination_button.style.display="none"


  {document.getElementById("reset_button").innerHTML="<button class='button' id='Reset' style='cursor: pointer; font-size: clamp(10px, 3vw, 13px);  background-color: #1b1829;   border-radius:20px; color: #adf ; border-color: ; -webkit-text-fill-color: initial; padding: 3px'>Reset</button>"
    document.getElementById("reset_button").style.display="block"

   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = "fa fa-id-card"
   table = document.getElementById("table_home");
   tr = table.getElementsByTagName("tr");

document.getElementById('pagination2').style.display=''
   var chunkSize = 30;
   var Array_data= []
       var arr_chunk=[]
   


   for (i = 0; i < tr.length; i++) {
   
  
     td = tr[i].getElementsByTagName("td")[6];
     if (tr[i].classList.contains("filteredList_doxxed")){
  tr[i].classList.remove("filteredList_doxxed")


}

     if (td) {
       txtValue =  td.innerHTML;
   
       if (txtValue.indexOf(filter) > -1) {
         tr[i].style.display = "";
        
         tr[i].classList.add("filteredList_kyc")
         
       } else {
         tr[i].style.display = "none";
       }

     }       
   }
 }
 for (let j = 0; j < tr.length; j++) {
      if (tr[j].classList.contains('filteredList_kyc')){
      
        Array_data.push(tr[j])
    
      }
    }
       
      
for (let i = 0; i < Array_data.length; i += chunkSize) {
 
   const chunk = Array_data.slice(i, i + chunkSize);

 
   arr_chunk.push(chunk)

}
for ( let i = 0; i < arr_chunk.length; i++){
  arr_chunk[i].forEach(arr_chunk => {
    arr_chunk.classList.add('filtered_kyc_'+i)
  })
}
for (var b = 0; b < arr_chunk.length; b++){
var pagination_buttons = document.getElementById('pagination2');
 var pagination = `
 <a  data-v-fae5bece class="pagination_function_filtered filtered_${b}" href="#">${b+1}</a>
 `
 pagination_buttons.innerHTML += pagination;}

 const pagination_function= document.querySelectorAll('.pagination_function_filtered');

   
   pagination_function.forEach(pagination_function => {


  const table_rows= document.querySelectorAll('.Home_Page_'+pagination_function.innerHTML-1);


const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");


  pagination_function.setAttribute('id', '');
  tr.forEach(Home_Page => {
    if (Home_Page.classList.contains('filtered_kyc_0')) {
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      const pagnigation = document.getElementById('pagination2')
const pagnigation_a = pagnigation.getElementsByClassName('pagination_function_filtered')


pagnigation_a[0].id= 'active2'

    } 
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    }

    

  });

  



}


);

   
pagination_function.forEach(pagination_function => {

 pagination_function.addEventListener('click', function handleClick(event) {
 
   const table_rows= document.querySelectorAll('.Home_Page_'+(pagination_function.innerHTML-1));


  
const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagnigation = document.getElementById('pagination2')
const pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
pagnigation_a.id= ''
})
   pagination_function.setAttribute('id', 'active2');

   tr.forEach(Home_Page => {
     if (Home_Page.classList.contains('filtered_kyc_'+(pagination_function.innerHTML-1))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';

  
   
     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });

   

 });

}


);



var pagination_right2 = document.getElementById('pagination_right2');
var pagination_left2 = document.getElementById('pagination_left2');
var pagnigation = document.getElementById('pagination2')
var pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
  pagination_left2.addEventListener('click', function handleClick(event) {


if (pagnigation_a.id== 'active2' && pagnigation_a.innerHTML-1 > 0) {

const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
tr.forEach(Home_Page => {

 pagination_function.forEach(pagination_function => {

    if (Home_Page.classList.contains('filtered_kyc_'+(pagnigation_a.innerHTML-2))) {
 
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      pagnigation_a.id= ''
       pagnigation_a.previousElementSibling.id= 'active2'
 
    } 
    
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    
    }})})


}
})


})

 })
 
 var input_doxxed = document.getElementById("doxxed_drop");
 input_doxxed.addEventListener("click", function (){

  document.querySelectorAll('.pagination_others').forEach(e => e.style.display = 'none');





  document.getElementById("pagination2").innerHTML='';
  document.getElementById("pagination_right").style.display='none';
  document.getElementById("pagination_left").style.display='none';
  document.getElementById("pagination_right2").style.display='none';
  document.getElementById("pagination_left2").style.display='none';

  document.getElementById("pagination3").innerHTML='';
  document.getElementById("pagination_right3").style.display='';
  document.getElementById("pagination_left3").style.display='';

   const pagination_button = document.getElementById("pagination")
   pagination_button.style.display="none"
  {document.getElementById("reset_button").innerHTML="<button class='button' id='Reset' style='cursor: pointer; font-size: clamp(10px, 3vw, 13px);  background-color: #1b1829;   border-radius:20px; color: #adf ; border-color: ; -webkit-text-fill-color: initial; padding: 3px'>Reset</button>"
    document.getElementById("reset_button").style.display="block"
    document.getElementById('pagination_left3').innerHTML='«'
  document.getElementById('pagination_right3').innerHTML='»'
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = "fa fa-users"
   table = document.getElementById("table_home");
   tr = table.getElementsByTagName("tr");

document.getElementById('pagination3').style.display=''
   var chunkSize = 30;
   var Array_data= []
       var arr_chunk=[]
   


   for (i = 0; i < tr.length; i++) {
   
  
     td = tr[i].getElementsByTagName("td")[6];

     if (td) {
       txtValue =  td.innerHTML;
   
       if (txtValue.indexOf(filter) > -1) {
         tr[i].style.display = "";
         tr[i].classList.add("filteredList_doxxed")
         
       } else {
         tr[i].style.display = "none";
       }
     }       
   }
 }
 for (let j = 0; j < tr.length; j++) {
      if (tr[j].classList.contains('filteredList_doxxed')){
      
        Array_data.push(tr[j])
      
      }
    }
       
      
for (let i = 0; i < Array_data.length; i += chunkSize) {
 
   const chunk = Array_data.slice(i, i + chunkSize);

 
   arr_chunk.push(chunk)

}
for ( let i = 0; i < arr_chunk.length; i++){
  arr_chunk[i].forEach(arr_chunk => {
    arr_chunk.classList.add('filteredList_doxxed_'+i)
  })
}
for (var b = 0; b < arr_chunk.length; b++){
var pagination_buttons = document.getElementById('pagination3');
 var pagination = `
 <a  data-v-fae5bece class="pagination_function_doxxed filtered_${b}" href="#">${b+1}</a>
 `
 pagination_buttons.innerHTML += pagination;}

 const pagination_function= document.querySelectorAll('.pagination_function_doxxed');

   
   pagination_function.forEach(pagination_function => {


  const table_rows= document.querySelectorAll('.Home_Page_'+pagination_function.innerHTML-1);


const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");


  pagination_function.setAttribute('id', '');
  tr.forEach(Home_Page => {
    if (Home_Page.classList.contains('filteredList_doxxed_0')) {
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      const pagnigation = document.getElementById('pagination3')
const pagnigation_a = pagnigation.getElementsByClassName('pagination_function_doxxed')


pagnigation_a[0].id= 'active3'

    } 
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    }

    

  });

  



}


);

   
pagination_function.forEach(pagination_function => {

 pagination_function.addEventListener('click', function handleClick(event) {
 
   const table_rows= document.querySelectorAll('.Home_Page_'+(pagination_function.innerHTML-1));


  
const rows = document.getElementsByTagName("tr");
const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagnigation = document.getElementById('pagination3')
const pagnigation_a = pagnigation.getElementsByTagName('a')



pagnigation_a.forEach (pagnigation_a => {
pagnigation_a.id= ''
})
   pagination_function.setAttribute('id', 'active3');

   tr.forEach(Home_Page => {
     if (Home_Page.classList.contains('filteredList_doxxed_'+(pagination_function.innerHTML-1))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';

  
   
     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });

   

 });

}


);



var pagination_right2 = document.getElementById('pagination_right2');
var pagination_left2 = document.getElementById('pagination_left2');
var pagnigation = document.getElementById('pagination2')
var pagnigation_a = pagnigation.getElementsByTagName('a')


pagnigation_a.forEach (pagnigation_a => {
  pagination_left2.addEventListener('click', function handleClick(event) {


if (pagnigation_a.id== 'active2' && pagnigation_a.innerHTML-1 > 0) {

const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
tr.forEach(Home_Page => {

 pagination_function.forEach(pagination_function => {

    if (Home_Page.classList.contains('filtered_kyc_'+(pagnigation_a.innerHTML-2))) {
 
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      pagnigation_a.id= ''
       pagnigation_a.previousElementSibling.id= 'active2'
 
    } 
    
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    
    }})})


}
})


})
var pagnigation = document.getElementById('pagination3')
var pagnigation_a = pagnigation.getElementsByTagName('a')
var pagination_right3 = document.getElementById('pagination_right3');
var pagination_left3 = document.getElementById('pagination_left3');
    

pagnigation_a.forEach (pagnigation_a => {
pagination_left3.addEventListener('click', function handleClick(event) {

if (pagnigation_a.id== 'active3' && pagnigation_a.innerHTML-1 > 0) {


const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
tr.forEach(Home_Page => {

 pagination_function.forEach(pagination_function => {

    if (Home_Page.classList.contains('filteredList_doxxed_'+(pagnigation_a.innerHTML-2))) {
 
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      pagnigation_a.id= ''
       pagnigation_a.previousElementSibling.id= 'active3';
      
 
    } 
    
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    
    }})})



}
})})







 })
 
 var reset_button = document.getElementById("reset_button");
 reset_button.addEventListener("click", function (){

count++ 


  {

  const paginatons_others = document.querySelectorAll('.pagination_others')

  paginatons_others.forEach(paginatons_others => {
    paginatons_others.style.display="none"
   
});
const pagination_home = document.querySelectorAll(".pagination_reset")
pagination_home.forEach(pagination_home => {
  pagination_home.style.display=""
 

})
  const pagination_function= document.querySelectorAll('.pagination_function');
   
  const pagination_button = document.getElementById("pagination_buttons")
   pagination_button.style.display=""
   
   pagination_function.forEach(pagination_function => {
     
  const table_rows= document.querySelectorAll('.Home_Page_'+pagination_function.innerHTML-1);
const rows_filtered = document.querySelectorAll('.filteredList');


const rows = document.getElementsByTagName("tr");

const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");


  pagination_function.setAttribute('id', 'pagination_function_active');
  tr.forEach(Home_Page => {
    Home_Page.classList.remove("filteredList_doxxed_0")
    Home_Page.classList.remove("filtered_kyc_0")
    Home_Page.classList.remove("filteredList_doxxed_1")
    Home_Page.classList.remove("filtered_kyc_1")
    Home_Page.classList.remove("filteredList_doxxed_2")
    Home_Page.classList.remove("filtered_kyc_2")
    Home_Page.classList.remove("filteredList_doxxed_3")
    Home_Page.classList.remove("filtered_kyc_3")
    Home_Page.classList.remove("filteredList_doxxed_4")
    Home_Page.classList.remove("filtered_kyc_4")
    Home_Page.classList.remove("filteredList_doxxed_5")
    Home_Page.classList.remove("filtered_kyc_5")
    if(Home_Page.classList.contains('filteredList_doxxed')){
     
      Home_Page.classList.remove("filteredList_doxxed")
    }
    if(Home_Page.classList.contains('filteredList_kyc')){
     
     Home_Page.classList.remove("filteredList_kyc")
   }
    if (Home_Page.classList.contains('Home_Page_0')) {
      Home_Page.style.display = 'table-row';
      tr[0].style.display='table-row';
      const pagnigation = document.getElementById('pagination')
const pagnigation_a = pagnigation.getElementsByTagName('a')


pagnigation_a[0].id= 'active'

    } 
    else{
      Home_Page.style.display = 'none';  tr[0].style.display='table-row';
    }

    

  });

  



})
 }
 reset_button.style.display="none";
 
 })




   } catch (err) {
       console.error(err);
   }
 


}create_table()



const pagnigation = document.getElementById('pagination3')
const pagnigation2 = document.getElementById('pagination2')
const pagnigation_a = pagnigation.getElementsByTagName('a')
const pagnigation_a2 = pagnigation2.getElementsByTagName('a')
const pagination_right3 = document.getElementById('pagination_right3');
const pagination_left3 = document.getElementById('pagination_left3');
const pagination_right2 = document.getElementById('pagination_right2');
pagination_right3.addEventListener('click', function () {

let counter = document.getElementById('active3').innerHTML


var x = document.getElementsByClassName('filtered_'+counter)[0]
var y = document.getElementsByClassName('filtered_'+(counter-1))[0]


x.id='active3'
y.id='not_active'



const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagination_current = document.getElementById('active3')


const pagination_number = pagination_current.innerHTML

if (pagnigation_a.length != pagination_number-1){

 const pagination_next = pagination_current.nextElementSibling

 


tr.forEach(Home_Page => {
     if (Home_Page.classList.contains('filteredList_doxxed_'+(pagination_number-1))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';
    
     var arr_home_page = []
     arr_home_page.push(Home_Page)

   counter++;

     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });}
 
})


pagination_right2.addEventListener('click', function () {


  let counter2 = document.getElementById('active2').innerHTML
  


var x = document.getElementsByClassName('filtered_'+counter2)[0]
var y = document.getElementsByClassName('filtered_'+(counter2-1))[0]


x.id='active2'
y.id='not_active'


const table = document.getElementById("table_home");
const tr = table.getElementsByTagName("tr");
const pagination_current = document.getElementById('active2')


const pagination_number = pagination_current.innerHTML

if (pagnigation_a2.length != pagination_number-1){



 


tr.forEach(Home_Page => {
     if (Home_Page.classList.contains('filtered_kyc_'+(pagination_number-1))) {
       Home_Page.style.display = 'table-row';
       tr[0].style.display='table-row';
    
   counter2++;

     } 
     else{
       Home_Page.style.display = 'none';  tr[0].style.display='table-row';
     
     }

     

   });}


})



    },
    metaInfo(){
      return{
		logo:  'https://upcdn.io/kW15aw3WhQr9pTYxePdsemy',
        title: `BSC Spotter`,
        meta: [
        {
  name: 'description',
  content: 'Use the tools on BSC Spotter to find Low-Cap Crypto Gems on Binance Smart Chain'
},
{name: 'og:title', content:` Dashboard | BSC Spotter `},
{name: 'og:description', content:`Find low-cap crypto gems on the Binance Smart Chain with BSC Spotter.`},
{name: 'og:image', content:"https://upcdn.io/kW15aw3WhQr9pTYxePdsemy"},
{name: 'og:url', content: `https://www.bscspotter.com/`},
{name: 'og:type', content: 'website'},
{name: 'og:site_name', content: 'BSC Spotter'},

        ]
      }
     }
  
  
  }
  
  



   

  
  </script>
  <style scoped>
    .top{
      min-width: 80px;
    }
    #background_color_rating{
      color: white
    }
    .rating_column{
      min-width: 130px;
      position: relative;
      
    }
 
.rating_dropdown_button{
  cursor: pointer;
}
    .divider{
      opacity: 0;
    }
  #container_home{
    padding: 10px;
  }
    #dropdown_test{
      padding-left: 20px
    }
  #pagination_buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
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
    
    position: relative;
  
    
  }
  .pagination a {
  color: white;
  float: center;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
}


.pagination a#active {
  background-color: dodgerblue;
  color: white;
}
#active2, #active3, #active4, #active5, #active6{
  background-color: dodgerblue;
  color: white;
}
#pagination_left, #pagination_left2, #pagination_left3, #pagination_left4, #pagination_left5, #pagination_left6{
  margin-right: 10px;
  font-size: 25px;
  color: white;
  cursor: pointer;
}
#pagination_right, #pagination_right2, #pagination_right3, #pagination_right4, #pagination_right5, #pagination_right6{
  margin-left: 10px;
  font-size: 25px;
  color: white;
cursor: pointer;
}
.pagination a:hover:not(.active) {background-color: #ddd;}

  .dropdown-content {
   
    display: none;
    position: absolute;
    background-color: #212122;
  width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
      transform: translate(-0%, -.4%);
  }
  .dropdown-rating {
    padding: 10px;
    display: none;
    position: absolute;
    background-color: #212122;
width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
      
  }
  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-rating a {
    color: black;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {background-color: #ddd}
  .dropdown-rating a:hover {background-color: #ddd}
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
    transform: translate(0%, 0%);
    font-family: 'Goldman';
    border-collapse: collapse;
    width: 100%;
   
    
  }
  
  
  tr{
     border: solid;
    border-width: 0.4px 0;
    color: rgb(86, 97, 160);
  
   
  }
  tr:first-child {
    border-top: none !important;
    
  
  }
  

  .token_table+td, th {
  
    border: collapse;
    text-align: left;
    padding: 5px;
    color: white;
    
  }
  .name{
    text-align:center;
    font-size: clamp(12px, 1.2vw, 21px);
    padding: -10px
  
  }
  .token_table_div{
    padding-left: 20px;
    padding-right:50px;
       border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      padding-top: 20px;
      margin: auto !important;
      min-height: 600px;
  }
  i {
    font-size: 15px;
  }
  .Home_Page_1{
     max-height: 50px;
    
  
  }
  .token_table{
    background-image: linear-gradient(315deg, #184263 0%, #0f2546 74%);
    border-radius: 25px;
   
    padding: 40px 80px;
   
    box-shadow: 0px 0px 50px rgba(163, 173, 26, 0.15);
  }

  #drop_down_th, #dropdown_test{
 padding-right: 18px;
  }
  #icons{
  text-align:center
  
  
   
  }
  .price, .rating, .mcap, .liquidity{
     font-size: clamp(12px, 1.4vw, 21px);
  
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
  max-height: 110px;
  max-width: 80px;
  border-radius: 330px;
  
  
  
  }
 
  .HomePage {
   

    transition: .1s;
    position: static;
    
    border-radius: 45px;
                        /* Background color */
                        background-color: #123456;

                        /* Stick to the top */
                        position: sticky;
                        top: 0px;

                        /* Displayed on top of other rows when scrolling */
                        z-index: 9999;
                    }
#divider_small_dis{
  display: none;
}
#banner_ad_bottom_right{
  display: none;
}
  @media (max-width:1000px){
   
    
    .row_gainers{
      padding-top: 15px !important;
   
  }}
@media (max-width: 400px){
  #Reset{
    font-size: clamp(10px, 3vw, 13px);
  }
  #container_home{
    padding-bottom: 10px;
  }
  #banner_ad_bottom_right{
    display: block !important;
  margin-top: 10px;
}
.container{
  padding-bottom: 20px
}
#divider_small_dis{
  display: block !important;
}
  .token_table_div{
      overflow-y: auto;
        height: 500px;
  }
}
  @media (max-width:750px){
    #gainers_widget{
    padding-bottom: 20px !important;
  }
.HomePage{
  top: -20px !important;
}
    .header_top {
      border: none;
    }
    #token_rating_sort{
      width:  100px;

    }
    .icon_0_big{
      background-color: #283c5a;
    }
    .header {
   opacity: 0.95;
 
                        /* Background color */
                        background-color: #283c5a;

                        /* Stick to the left */
                        left: 0;
                        position: sticky;

                        /* Displayed on top of other rows when scrolling */
                        z-index: 99;
                    }
   
 
    .token_table_div{
border-radius: 0px;
overflow:auto ;
padding-right: 0px;
padding-left: 0px;
    }
#table_home{
  background-color: #0f2546 !important;
}
    .container{
      width: 100%;
   
      margin: auto;
    }
    .icon_0_big{
      width: 3%!important;
      height: auto;
      transform: translate(0%,0%) !important;
    }
    .listing_logo{
      width: auto !important;
      max-width: 40px !important;
    }
    #pagination_buttons{
      transform: translate(0%,0%) !important;
    }
#table_home td, th {
  font-size: clamp(10px, 3vw, 13px);

}
.name{
  font-size: 2vw;
}

#table_home{
  box-shadow: 0 0 0px;
  border-radius: 25px;
}
.fa-arrow-up {
  font-size: 1px
}
  }

@media (max-width:500px){

}

  .icon_0{
    width: 6%;
    transform: translate(90%,4%);
  }
  
  .icon_0_big{
      width: 6%;
      transform: translate(60%,4%);
     padding-right: 10px;
  }
   body {background: #434343 }
  
  .links {
  margin:auto;
   max-width: 1700px;
  
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
  .menu_text{
   margin: auto;
    text-align: center;
    padding: 10px;
    transform: translate(0%,30%);
  
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
  table {border-collapse: collapse;}
  tbody{
    border: solid;
    border-width: 1px, 0px;
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