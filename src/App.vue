<template>

    <div id="app">
	


		<div id="top_div_mobile">


<span class="search_span"><span id="search_check_mobile" class="fa-stack fa-lg" style="color:#DBAC04">
  <span class="fa fa-circle-thin fa-stack-2x" style="color:#DBAC04"></span>
  <span class="fa  fa-search  fa-stack-1x" style="color:#DBAC04"></span></span>
</span>


<div class="float_left" style="float:right;"><span style="cursor:pointer" id="openNav">&#9776; </span></div>


</div>
        <div id="navbar">
			
  <nav class="links" style="--items: 5;">
	<a href="https://www.bscspotter.com/"> <div  class="menu_text"><span>Dashboard</span></div></a>
 <a href="https://www.ultragamerz.com/"  target="_blank"> <div  class="menu_text"><span>News Partners</span></div></a>
 <a ><div><span id="site_logo_menu"> '  <img  data-v-fae5bece  id="site_logo" src="@/assets/images/logos/bscspotter_logo/Logo.png" class="site_logo">' </span>

	<span class="menu_text"></span></div> </a>
    <a href="https://www.bscspotter.com/submit_token"> <div  class="menu_text"><span>Submit Token</span></div></a>


       <a><div  class="menu_text"><a href="https://www.bscspotter.com/contact"><span id="span_a" style="color: #9ab " >Contact Us</span></a></div> 	<span class="search_span"><span id="search_check" class="fa-stack fa-lg" style="color:#DBAC04; font-size: clamp(10px, 1.3vw, 18px);">
  <span class="fa fa-circle-thin fa-stack-2x" style="color:#DBAC04"></span>
  <span class="fa  fa-search  fa-stack-1x" style="color:#DBAC04"></span></span>
</span></a>
    <span class="line"></span>
  </nav>




</div>

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" id="closeNav">&times;</a>
  <a href="https://www.bscspotter.com/">Dashboard</a>
  <a href="https://www.ultragamerz.com/">News Partners</a>
  <a href="https://www.bscspotter.com/submit_token">Submit Token</a>
  <a href="https://www.bscspotter.com/contact">Contact Us</a>
</div>

<div id="search_box" style="display: none;"><searchbar></searchbar></div>
  <div class = "search_div_app"><div id="search_box" style="display: none;"><searchbar></searchbar></div></div>
       <router-view />
   <contract_address></contract_address>
    <bottom class = 'bottom'> </bottom>

    </div>
    
</template>

<script>
	//	<i class='fa fa-search circle-icon' style='font-size: 25px;color:#DBAC04'></i>
import bottom from "./components/footer.vue"
import contract_address from './components/contract_address.vue'


import VueAgile from 'vue-agile'

Vue.use(VueAgile)
import searchbar from "@/components/searchbar.vue";
export default {
    name: 'App',
    components:{
    bottom,
    contract_address,
	
    searchbar
    },
	
};
window.addEventListener('load', (event) => {
	var opennav = document.getElementById("openNav");
	var closenav = document.getElementById("closeNav");

	opennav.addEventListener('click', openNav_mobile)
	closenav.addEventListener('click', closeNav_mobile)

	function openNav_mobile(){
		document.getElementById("mySidenav").style.width = "100%";
	}
	function closeNav_mobile (){
		document.getElementById("mySidenav").style.width = "0";
	}

var serach_button = document.getElementById('search_check')
var search_box = document.getElementById('search_box')
var search_mobile = document.getElementById('search_check_mobile')
var serach_box = document.getElementById('click_search')
var search_bar = document.getElementById('searchBar')
search_mobile.addEventListener('click', openSearch)
serach_button.addEventListener('click', openSearch)
function openSearch(){
	var x = document.getElementById("search_box");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
	serach_box.style.display="none"
    x.style.display = "none";
	search_bar.value = ""
  }

}

});

</script>

<style>
	@media(min-width:600px){
::-webkit-scrollbar {
  width: 10px;
  border-radius: 20px;
  border-radius: 20px;
}



::-webkit-scrollbar-thumb {
  background: transparent;
  background:  linear-gradient(to bottom, #3753a7 0%, #bebe5d 100%);
 
  border-radius: 20px;
  max-width: 50px !important;
}}
	#nav_menu_div{
		width: 100%;
	}
#nav_menu{
	display: none;
	z-index: 100;
	position: absolute;
	margin:auto;
	
	background:#123;
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
}
#nav_top{
	display: none;
}
.token_table_div{
	padding-top: 20px;
}
	@media (max-width: 750px){
		#navbar{
			display: none;
		}
		.bottom{
			padding-left: 0px !important;
	


		}



#openNav{
	display: initial !important;
margin-right: 20px;
color: white;
font-size: 18px
}


#search_check_mobile{
	display: inline-block !important;
	
}

#top_div_mobile{
	display: block !important
}

	}

	@media (max-width: 1000px){
		.search_span{
		float: right;
		margin-right: 22px;
		margin-top: -20px !important;
	}
	}
	@media (max-width: 750px){
		
		.search_span {
		float: initial !important;
		margin-right: 0px !important;
		margin-top: 0px !important;
		
	}
	}
	.site_logo{
  width: 120px;
  height: 110px;
margin: -20px;
transform: translate(0%,4%);
}

	.search_span{
		float: right;
		margin-right: 22px;
		margin-top: -27px;
	}

#top_div_mobile{
	display: none;
	
	width: 100%;
	
	background-color: #123;
}
#openNav{
	display: none;
	
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align:center;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

}

.sidenav a:hover{
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

	#search_check{
		cursor: pointer;
		padding: 0;
		font-size: 15px;
		
	}
	#search_check_mobile{
		cursor: pointer;
		padding: 0;
		font-size: 15px;
		display: none;
	}
	.circle-icon {
    background: #ffc0c0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    text-align: center;
    line-height: 10px;
    vertical-align: middle;
    padding: 30px;
}
.bottom{background-color: #13111d;

 bottom: 0px
}


body {background: #434343 }

.links {
margin:auto;
 max-width: 1700px;

	background-image: linear-gradient(to bottom, #0003, transparent);
	border-bottom: 1px solid #0003;
	box-shadow: 0 0 32px #0003;
	font-size: clamp(10px, 1.3vw, 17px);
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

#span_a:hover{
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

</style>
