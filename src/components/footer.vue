<template>
   
  
  
  <div>

<div class="row_foot" id="row_foot_LargeDis">
  <div class="column_foot" >
  
    <div class="legal_text">Nothing in the Site comprises proficient or monetary counsel, nor does any data on the Site establish an exhaustive or complete assertion of the issues talked about or the law relating thereto.
Contact a financial advisor before making investing decisions.<br>©Copyright BSC Spotter 20222</div>

  </div>
  <div class="column_foot" >
    
    <p>Quick Links:</p>
    <div id="footer_menu" class="">
 
  <a href="https://www.bscspotter.com/">Dashboard</a>
  <br>
  <a href="https://www.ultragamerz.com/">News</a>
  <br>
  <a href="https://www.bscspotter.com/ submit_token">Submit Token</a>
  <br>
  <a href="https://www.bscspotter.com/ contact">Contact Us</a>
</div>
  </div>
  <div class="column_foot" id="colun_left">
  <div>
    <img data-v-fae5bece="" id="site_logo" src="https://i.ibb.co/X8Fv4jC/Logo.png" class="site_logo"></div>
<div>
   <span id="icons_footer"> <a href = 'https://t.me/BSCSpotter'><i  class="fa fa-telegram" aria-hidden="true" size=""></i>&nbsp;</a> <a href = 'https://twitter.com/BscSpotter'><i class="fa fa-twitter"   aria-hidden="true"></i></a> &nbsp; <a href = 'mailto:contact@bscspotter.com'><i class="fa fa-envelope"  aria-hidden="true"></i></a></span></div>
  </div>
</div>
   
<div clas="row_foot" id="row_foot_SmallDis"> 
  <div class="column_foot" >
  
  <div class="legal_text" style="font-size: 14px;">All content on BSC Spotter is inteded to give general information, NOT FINANCIAL ADVICE.
 <br>
   
 
   </div>

</div>
<div class="column_foot" >
  

   <p>Quick Links:</p>
    <div id="footer_menu" class="">
 
  <a href="https://www.bscspotter.com/">Dashboard</a>
  <br>
  <a href="https://www.ultragamerz.com/">News</a>
  <br>
  <a href="https://www.bscspotter.com/ submit_token">Submit Token</a>
  <br>
  <a href="https://www.bscspotter.com/ contact">Contact Us</a>
</div>


  
</div>
<div class="column_foot" >

  <img data-v-fae5bece="" id="site_logo" src="https://i.ibb.co/X8Fv4jC/Logo.png" class="site_logo">
  <br>
  <div class="legal_text"> ©BSC Spotter 2022
   
 
   </div>
  
</div>
</div>





   

  </div>
  
 
  
</template>

<script>
    export default {
        name: 'bottom',
    }
</script>

<style >
  #icons_footer{
    font-size: 20px;

  }
  #footer_menu a:hover {
opacity: .8;
  }
  #footer_menu{
    line-height: 200%;
  }
  @media (max-width: 750px){
    #colun_left{
      
    }
#row_foot_SmallDis{
  position: absolute;
  display: block !important;
  background-color: #13111d;

}
#row_foot_LargeDis{
  display: none;

}
  }
  #row_foot_SmallDis{
    display: none;
  }

@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,600;1,700&display=swap');
 .column_foot {
 font-family: 'Poppins';
 color: rgb(255, 254, 254);
  font-size: 15px;
 }



/* Create three equal columns that floats next to each other */
.column_foot {
  float: left;
  width: 33.33%;
  padding: 10px;

}

/* Clear floats after the columns */
.row_foot:after {
  content: "";
  display: table;
  clear: both;
}


.legal_text{
   
    font-family: Arial;
    opacity: .2
}

</style>