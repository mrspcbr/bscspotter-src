import token from '@/components/token'

import Home from '@/views/Home'
import contact from '@/views/contact'
import acs_token from '@/components/tokens/acs_token'
import submit_token from '@/views/new_token.vue'
import page_not_found from '@/views/page_not_found.vue'
export default[    
{
           
    path: "/",
    name: "Home",
    component: Home
},
{
path: "/contact",
name:"Contact",
component: contact
},
{
    path: '/token/:id',
    component: token
  
},

{
    path: '/submit_token',
    component: submit_token
},
{
    path: '*',
    component: page_not_found
}


]
  
    

    
