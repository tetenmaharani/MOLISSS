/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'

import { computed } from 'vue'


//import css
import './assets/css/app.css'

//import router
import router from './router'

//import axios
import axios from 'axios';


import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'
import Pagination from 'v-pagination-3';
import paginate from 'vuejs-paginate';

import {  registerLicense } from '@syncfusion/ej2-base';
registerLicense("  ")

import togglebutton from './pages/components/togglebutton.vue'

import dealertable from './pages/components/dealertable'


const instance = axios.create({
  baseURL: 'http://localhost:3000',
});
 
const app = createApp(App);
app.config.unwrapInjectedRef =true

app.use(router);
    app.mount('#app')

app.component
app.component('dealertable',dealertable)
app.component('paginate', paginate)
app.component('FwbPagination', FwbPagination)
app.component('ref', ref)
app.component('pagination', Pagination);
app.component('togglebutton', togglebutton)

