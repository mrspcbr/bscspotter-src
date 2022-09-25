<template>
  

     <body>
        <h1>Add tokens here</h1>
        <div id="form">
        <form action="https://www.api.bscspotter.com/add_request" method="post" id="token_form">
          <h2> Contract Address (BSC): </h2>
            <input type="text" name="token" placeholder="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"> <br>
           
            <h2> Total Supply: </h2>
            <input type="text" name="supply" placeholder="1000000000"> <br>
           
            <input type="text" name="bscscan" placeholder="bscscan link" id="bscscan">
            <h2> Liquidity Wallet Address </h2> 
            <input type="text" name="wallet" placeholder="0xabc00991cba40ddd67f6fcb74fe8d8062320f7cd">
            <br>
          <h2>KYC Status: </h2>
            <select id="kyc" name="kyc">
              <option value="Not Verified">No KYC</option>
              <option value="Verified">Verified</option>
            </select>
            <input type="text" name="kyc_link" placeholder="Proof of KYC (url)" id="kyc_link">
            <br>
            <h2>Upload Logo: </h2>
            <input v-if="progress === null" type="file" @change="uploadFile" />
  <div v-else-if="fileUrl !== null"><p>Logo Successfully Uploaded</p></div>
  <div v-else-if="error !== null"><p>Error: {{ error }}</p></div>
  <div v-else><p>Progress: {{ progress }}%</p></div>
            <input :value=fileUrl id= 'logo_link_form' type="text" name="logo_link" placeholder="Link to Logo">
            <br>
            <h2>
              Token Name:</h2>
            <input type="text" name="name" placeholder="Token Name">
            <br>
            <h2>Token Symbol:</h2>
            <input type="text" name="symbol" placeholder="Token Symbol">
            <br>
         
         
         
        
       
            <h2>Link to Telegram Group:</h2>
            <input type="text" name="telegram" placeholder="https://t.me/...">
            
            <br>
            <h2>Link to Whitepaper:</h2>
            <input type="text" name="whitepaper" placeholder="https://bscspotter.com/whitepaper"> <br>
            <h2>Link to Twitter:</h2>
            <input type="text" name="twitter" placeholder="https://twitter.com/...">
            <br>
            <h2>Link to Project's Website:</h2>
            <input type="text" name="website" placeholder="website">
           
            
          
            
          
            <br>
           
            <h2>Token Type:</h2>
            <select id="utility" name="utility">
              <option value="L3">Layer 3</option>
              <option value="L2">Layer 2</option>
              <option value="L1">Layer 1</option>
            </select>
            <br>
            <h2>Team Information:</h2>
            <select id="team" name="team">
              <option value="Not Doxxed">Not Doxxed</option>
              <option value="Doxxed">Doxxed</option>
            
            </select> 
            
            <input type="text" name="team_link" placeholder="Proof of Dox" id="dox_link">
            <br>
            <h2>Current Date:</h2>
            <input type="text" name="date" placeholder="(MM/DD/YYYY)"> <br>
            <h2>Date of Token Launch:</h2>
            <input type="text" name="launch_date" placeholder="(MM/DD/YYYY)">
           
            <h2>Brief Description of Project:</h2>
          
            <TextArea  data-placeholder="Edit me" class ='what_is' id = 'description' form="token_form" name="description" contenteditable="true" maxlength="220"  placeholder="Brief Description (MAX 220 characters)" > </TextArea >
            <br>
            <h2>Describe the Project:</h2>
         <TextArea  data-placeholder="Edit me" class ='what_is' id = 'what_is_project' form="token_form" name="what_is_project" contenteditable="true" maxlength="300" placeholder="Describe Project (MAX 380 Characters)"> </TextArea >

        <br>
        <h2>Describe the Token's Utility:</h2>
         <TextArea  data-placeholder="Edit me" class ='what_is' id = 'what_is_token' form="token_form"  name='what_is_token' contenteditable="true" maxlength="300" placeholder="Describe Token's Utility (MAX 380 Characters)"> </TextArea >
         <br>
         <h2>Describe Future Plans:</h2>
         <TextArea  data-placeholder="Edit me" class ='what_is' id = 'future_plans' form="token_form" name="future_plans" contenteditable="true" maxlength="300"  placeholder="Describe Future Plans (MAX 380 Characters)"> </TextArea >
         
         <br>
         <h2>Contact Information:</h2>
         <input type="text" name="team_contact" placeholder="EMAIL/Telegram">
            <input type="submit" value="Add">
        </form></div>
    </body>


</template>

<script>
  ///https://www.api.bscspotter.com/add_request
import emailjs from '@emailjs/browser';
import { Upload } from "upload-js";
const upload = new Upload({ apiKey: "free" });
export default ({
  data() {
    return {
      error:    null,
      progress: null,
      fileUrl:  null,
    };
  },
        mounted(){
          document.getElementById("kyc").addEventListener("change", function(){
        if (this.value == "Verified"){
            document.getElementById("kyc_link").style.display = "inline";
        } else {
            document.getElementById("kyc_link").style.display = "none";
        }
    });
 document.getElementById("team").addEventListener("change", function(){
        if (this.value == "Doxxed"){
            document.getElementById("dox_link").style.display = "inline";
        } else {
            document.getElementById("dox_link").style.display = "none";
        }
    });
 
    const edit_what_is = document.querySelectorAll('.what_is');
    edit_what_is.forEach((what_is) => {
      const ele = what_is
       // Get the placeholder attribute
const placeholder = ele.getAttribute('placeholder');




ele.innerHTML === '' && (ele.innerHTML = placeholder);

ele.addEventListener('focus', function (e) {
    const value = e.target.innerHTML;
    value === placeholder && (e.target.innerHTML = '');
});

ele.addEventListener('blur', function (e) {
    const value = e.target.innerHTML;
    value === '' && (e.target.innerHTML = placeholder);
});
    });
  

    function isEmpty(str) {
    return !str.trim().length;
}

        },
        methods: {
    uploadFile(event) {
      upload.createFileInputHandler({
        onBegin:    ({ cancel })   => (this.progress = 0),
        onProgress: ({ progress }) => (this.progress = progress),
        onUploaded: ({ fileUrl })  => (this.fileUrl = fileUrl),
        onError:    (error)        => (this.error = error.message),
     
      })(event);
    }
  }
})
  

   
   

window.addEventListener("load", function(){



});


</script>
<style scoped>
  #logo_link_form{
    display: none;
  }
  div [placeholder]{
color: gray;

  }
  textarea{
    width: 100%;
    font-size: 1em;
  }
  .editable:empty:before {
    content: attr(data-placeholder);
}
@media (max-width: 800px){
      #form{
        width: 100% !important;
        padding: 5px !important;
      }
    }

    @media (min-width: 801px) and (max-width: 1000px){
      #form{
        width: 70% !important;
        padding: 20px !important;
      }
    }
  .what_is{
    max-height: 40em;
    min-height: 8em;
    max-width: 100%;
  overflow-y: auto;
  overflow-wrap: break-word;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  Font-family: arial;
  }
  input[name="what_is_project"]{
width: 200px;
height: 200px
  }
  #kyc_link, #dox_link, #bscscan{
    display: none;
  }
h3{
  background-color: #ffffff;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 180%;
    -moz-text-fill-color: transparent;
}
#form {
  width: 60%;
  max-width: 900px;
  margin: auto;
  border: 1px solid rgb(219, 172, 4);
    padding: 40px 80px;
    border-radius: 10px;
    box-shadow: 0px 0px 50px rgb(26 173 46 / 15%);
}
input[type=text], select {
  max-width: 700px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 20px;
  background: #123;
  padding: 20px;
text-align: left;
}
p {
  text-align: left
}
body{
  border-radius: 5px;
  
  padding: 20px;
}

</style>