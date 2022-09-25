<template>
     <div id="search_div">    
            <div>  <div id="searchWrapper">
             <button id="toggle"> <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Search..."
                /></button>
                <div id="third">   <div id="click_search">
                    <button id="toggle_close"><i class='fa fa-times-circle' style='font-size: 35px;color:#DBAC04'></i></button>
           <ul id="tokenlist"></ul>
            </div> 

            </div> </div>
          
            </div>

            
            </div>
</template>

<script>

import icon from "@/assets/icons/icon.vue";
import axios from 'axios'
export default {
        name: 'searchbar',
        components:{
            icon
        }

}

window.addEventListener('load', async function (){
    const targetDiv = document.getElementById("third");
    
    const btn = document.getElementById("toggle");
    const search_bar = document.getElementById("search_box");
    const btn_close = document.getElementById("toggle_close");
    const click_search = document.getElementById("click_search");
    btn.onclick = function () {
        
    
        targetDiv.style.display = "block";
        click_search.style.display="block";
    };
      btn_close.onclick = function () {
       
        const searchBar = document.getElementById("searchBar");
        searchBar.value = "";
        btn.display="none";
        search_bar.style.display = "none";
        click_search.style.display = "none";
    }})
  
function open_search ( ){
async function get_listings (){
  const data= await axios.get('https://www.api.bscspotter.com/listings')
  const data_json=data.data

const tokenlist = document.getElementById('tokenlist');
const searchBar = document.getElementById('searchBar');
let tokens = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
if(searchString==""){displayCharacters()
}
    const filteredCharacters = tokens.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.token.toLowerCase().includes(searchString) ||
            character.symbol.toLowerCase().includes(searchString)||
            character.token.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://www.api.bscspotter.com/listings/');
        tokens = await res.json();
     
 
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <a href="https://www.bscspotter.com/ token/${character.symbol}"> <li >
           <table>
            <tr>
<td data-v-7bf2700b class = 'table_logo' id="gain_lsogo_1" class="links"><a href="https://www.bscspotter.com/ token/${character.symbol}"><img data-v-7bf2700b src="${character.logo_link}" alt="logo_project" class="gainers_icon"></a></td>
<td data-v-7bf2700b class = 'table_name' id="gain_nasme_1" class="links">${character.name}</td>
<td data-v-7bf2700b class = 'table_symbol' id="gain_symbol_1" class="links">${character.symbol}</td>

<td data-v-7bf2700b class = 'table_symbol' id="gain_symbol_1" class="links">${character.token}</td>

   </tr>
               
             
             </table>
            </li></a>
        `;
        })
        .join('');
    tokenlist.innerHTML = htmlString;
};

const displayempty = (characters) => {
   
            return `
           
        `;
      
   
};


loadCharacters();


}get_listings ()



}
open_search()


</script>

<style scoped>
  #searchWrapper{
    margin: auto;
  width: 50%;

z-index: 20;
 
   
  }
  @media (max-width: 750px) {
    #searchWrapper{
      width: 100% !important;
    }
    
  }
  @media (max-width: 500px) {
    #click_search{
      width: 220px !important;
      height: 200px !important;

    }
    input[type="text"]{
      width: 220px !important;
    }
  }
button {
background-color: Transparent;
background-repeat:no-repeat;
border: none;
}
#third{
    display:none;
}
.listing_logo{
 width: 100%;
  height: auto;
max-height: 80px;
max-width: 70px;




}
.gainers_icon{
 
  height: auto;
max-height: 80px;
max-width: 50px;

}
#toggle_close{
      cursor: pointer;
      float: right;
      padding: 5px
}

#gain_symbol_1{
  display: none;
}
.icon_0{
  width: 6%;
  transform: translate(90%,4%);
}
ul {
list-style-type: none;
}

input[type="text"], textarea{
    background-color:#35353b ;
  z-index: 9;
    color: #fff;;
    width: 320px;
}
.table_logo{
        width: 100%;
    height: auto;
    max-height: 80px;
    max-width: 70px;
    padding: 15px;
}
#click_search{
      background-color: #35353b;
   
  margin: auto;
width: 322px;
height: 400px;
overflow-y:auto;
  border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
 z-index: 20;
 position: absolute;
  left: 0%;
  right: 0%;
 

  



}
#tokenlist{
    font-size: 30px !important;
    max-width: 120px !important;
   
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2e2d2d; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(65, 63, 63); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>