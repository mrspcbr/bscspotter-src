<template>
 
 <body>
   
     
   <router-view></router-view>
 </body>
</template>

<script >
 


</script>

<style > 

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

    /* Set additional styling options for the columns */
    .column {
 
    float: left;
    width: 100%;
    border-radius: 15px;
    padding: 15px
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

.right2, .right3, .right4{width:35%;
overflow: hidden;
 position: relative;
height: 51%;


padding-top:10px;
height: auto;
}
    body {background:  #1d1c1c;

    max-width:100%
    


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
    position: flex;
   
   
    font-family: 'Goldman';
    overflow: show;
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
#menue{
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
#tv_chart_container{
  height: 500px;
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
  font-size: clamp(20px, 1.5vw, 30px)
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
a {
  color: white;
  text-decoration: none;
  font-family: 'Goldman';

}
#table_home> tbody{
  border: solid;
  border-width: 0.4px 0;
  color: rgb(86, 97, 160);
  border-collapse: collapse;
}
#table_home>  tbody:first-child {
  border-top: none;
  

}

#table_home>  tbody {
border-bottom: none;
}
</style>