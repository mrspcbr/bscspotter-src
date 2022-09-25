<template> <div id="container">
    <div id="page_not_found_conainer">
    <div class="full_col"> 
        <span id="page_not_found">
            <br>
            Error
        </span>
        <h1>
The page you are looking for does not exist.
        </h1>
<br>
<span id="page_not_found_p">If you believe this is a mistake, please contact us to resolve it.</span>
<br>
        <span id="go_home">
            <a href="/">Go Home</a></span>
    </div>
    
    
    <br>
    </div></div>
</template>

<script>

export default {
    name: 'page_not_found',
  }
</script>
<style scoped>
    #page_not_found_p{
        font-size: 20px;
        color: white;
        font-family: 'Roboto', sans-serif;
        line-height: 150%;
    }
    #page_not_found{
        font-family: 'Goldman';
        font-size: 10vw;
        background-color: #ffffff;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    
        
    }
    #container{
        width: 100%;
        padding-bottom: 40px;
    }
.full_col{
   
   width: 80%;
    margin: auto;
border-radius: 25px;
}
#page_not_found_conainer{
    position: relative;
left:0;
width:100%;
    padding: 10px;
}
#go_home{
    font-size: 40px;
    color: rgb(112, 133, 37) !important;
  line-height: 500%;
}
</style>