<template>
  <div>
 <div id="body">
<div class="container_contact">

<div class="contact_page">
  <div class="col left_contact"><h1>Contact Us Today</h1>
<div id="ul">
    <ul><li>Advertising</li> 

<li>Update Token Info</li> 
<li>Report Projects</li> 
<li>New Token Listing</li> 
<li>And More</li></ul></div>
  </div>
  
  <div class="col right_contact">
        <div id="form" class="container">

            <div id="form_div">
        <form ref="form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
          
            name="user_name"
            placeholder="Your Name/Company Name"
          >
          <label>Email</label>
          <input 
            type="email" 
         
            name="user_email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
           
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div></div></div></div>
   </div>
  <div class="contact_page">
    <div class="col left_contact" id="column_email2">
      <p style="font-size:25px">contact@bscspotter.com</p>
    <a href="mailto:contact@bscspotter.com">  <i class='fa fa-envelope' style='font-size: 40px;color:#DBAC04'></i></a>
    </div>
    <div class="col left_contact" id="column_email"><p style="font-size:20px">Basic Listing Requierments 
    <br>&
  <br>Requisites for KYC/Doxxed Badge</p></div>
  </div>
  
  </div>

  <div id="mobile">
    <div class="container_contact">
      <div class="col left_contact"><h1>Contact Us Today</h1>
<div id="ul">
    <ul><li>Advertising</li> 

<li>Update Token Info</li> 
<li>Report Projects</li> 
<li>New Token Listing</li> 
<li>And More</li></ul></div>
  </div>
<div class="contact_page">
 
  
  <div class="col right_contact">
        <div id="form" class="container">

            <div id="form_div">
        <form ref="form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
          
            name="user_name"
            placeholder="Your Name/Company Name"
          >
          <label>Email</label>
          <input 
            type="email" 
         
            name="user_email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
           
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div></div>
    <div class="col left_contact" id="column_email2">
      <p style="font-size:25px">contact@bscspotter.com</p>
    <a href="mailto:contact@bscspotter.com">  <i class='fa fa-envelope' style='font-size: 40px;color:#DBAC04'></i></a>
    </div>
  </div>
  
  
  </div>

   </div>

  </div>

</div>

  </template>
  
  <script>
  import emailjs from '@emailjs/browser';
  
  export default {
    methods: {
      sendEmail() {
        emailjs.sendForm('service_2bpukqs', 'template_lkab4eg', this.$refs.form, 'lLvwjfQnQao7oBkwc')
          .then((result) => {
              alert('SUCCESS!', result.text);
          }, (error) => {
              alert('FAILED...', error.text);
          });
      }
    },
    metaInfo(){
      return{
       
        title: `Contact Us | BSC Spotter`,
        meta: [
        {name: 'twitter:image', content: 'https://upcdn.io/kW15aw3WhQr9pTYxePdsemy'},
        {name:"twitter:card", content:"summary_large_image"},
{name: 'twitter:title', content: 'Contact Us | BSC Spotter'},
{name: 'twitter:description', content: 'Contact us today for Advertising, Token listing, and more.'},
{
  name: 'description',
  content: 'Contact us today for Advertising, Token listing, and more.'
}
        ]
      }
     },
  
  }
  </script>

  <style scoped>
@media (max-width: 750px){
  #form{
    margin-bottom: 20px;
  }
  #body{
    display: none !important;

  }
  #mobile{
    display: block !important;
  }
  .right_contact {
    width: 100% !important;
    float: center;
  }
  .left_contact{
    margin: auto !important;
  width: 100% !important;
  border-radius: 25px !important; 

  
    
  }
  .container_contact{
    padding: 10px !important;
  }
}
 #mobile{
  display: none;
 }
#body{
  
  
  max-width: 70%;
  margin: auto;
}
    .col {
      float: left;
  width: 50%;
    }
.contact_page{
  display: flex;
  padding: 20px;
}
.left_contact{
  border: 1px solid rgb(219, 172, 4);
    padding: 40px 80px;
    border-radius: 10px;
    box-shadow: 0px 0px 50px rgb(26 173 46 / 15%);
  background-color: #123;
  padding: 20px;
  border-radius: 5px;
}
  .left_contact li {
    margin: 15px;
    text-align: left;
    color: white;
    background-color: #ffffff;
    background-image: linear-gradient(177deg, #f3ec78, #af4261);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
   font-size: 25px;
  
  }

   * {box-sizing: border-box;}
.container_whole{
   margin-top: 50px;
}
.container {
  display: block;
  margin:auto;

  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 90%;
 
}
#costumize_contact{
  background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
    border-radius: 25px;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
#column_email, #column_email2{   text-align: center;
  margin: 10px;
  border-radius: 20px;
  background-image: linear-gradient(315deg, #537895 0%, #09203f 71%)}
    </style>