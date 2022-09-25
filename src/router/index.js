import Vue from 'vue'
import Router from 'vue-router'
import token from '@/components/token'
import test_token from '@/components/test_token'
import Home from '../views/Home'
import VueRouter from 'vue-router';
import acs_token from '@/components/tokens/acs_token'
import zat_project from '@/components/tokens/zat_project'
import GoCryptoMe from '@/components/tokens/gmce.vue'
import cent from '@/components/tokens/cent.vue'
import forge from '@/components/tokens/forge.vue'
import puss from '@/components/tokens/puss.vue'
import contact from '../views/contact'
Vue.use(VueRouter)



export default({
  
    Routes: [
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
            path: '/test/:id',
            component: test_token
          
        },
        {
            path:'/cent',
            component: cent
        }
    ],
    

})