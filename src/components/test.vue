<template>
 
<div>




    





<div class="row_chart" >
        <div class="column left2" >
           
        </div>
        
        <div class="column right2" style="background-color:#005a68;">
           
&nbsp;
<vue-ellipse-progress class="circle_rating" 
  :data="circles"                    
  :progress= "progress"
  :angle="0"
  :color="gradient"
  :colorFill="colorFillGradient"
  emptyColor="#8ec5fc"
  :emptyColorFill="emptyColorFillGradient"                      
  :size="280"
  :thickness="20"
  emptyThickness="1%"
  lineMode="in 10"
  :legend="true"
  legendClass="legend-custom-style"
  dash="60 0.9"
  animation=" 1000 500"
  :noData="false"
  :loading="false"                      
  fontColor="white"
  :half="true"
  :gap="1"
 
  fontSize="2.4rem">
  
  <span slot="legend-value">/100</span>
  <p slot="legend-caption" class = 'rating_caption'><b>GEMS RATING</b>
  



</p>
 
</vue-ellipse-progress>
<div class="icons_under">
   
<div class = 'ratingIcons'><box-icon name='coin-stack' type='solid' color="white"  > </box-icon><span class="iconText">Liquidity Pool</span></div>&nbsp;


<div class = 'ratingIcons'><box-icon name='id-card' type='solid' color="white" ></box-icon><span class="iconText">KYC:</span></div>&nbsp;&nbsp;&nbsp;
<div class = 'ratingIcons'><box-icon type='solid' color='white' name='wrench' ></box-icon><span class="iconText">L3 Token:</span></div>&nbsp;&nbsp;&nbsp;
<div class = 'ratingIcons'><box-icon name='group' type='solid' color="white"  ></box-icon><span class="iconText">Doxxed Team</span></div>&nbsp;&nbsp;&nbsp;</div>




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
 

           </table>     </div>
        
    </div>
  <div>

  <div class ="ratingIcons">
    hover here buddy<span class="iconText">Liquidity Pool:</span>
  </div>
  </div>


<div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>

  </div>
  
</template>

<script>
import 'boxicons'



export default {
        name: 'Rating',
  data() {
    return {
    
    
      progress: 90,
     
    };
  },
progress:{
    type: Number,
  require: true,
  
}
}



</script>
<style>
.icons_under{
position: relative;
top: -53px;
left: -1px

}

.rating_caption{
  font-size: 22px
}
.circle_rating{
   margin: 0 auto;
   position: relative;
top: 50px;
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