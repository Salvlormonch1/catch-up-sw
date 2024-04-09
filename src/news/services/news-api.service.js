 // News API Service

 // axios import for connectivity
 import axios from "axios";
 import {LogoApiService} from "../../shared/services/logo-api.service.js";

// create axios instance with predefined properties
 const http = axios.create({
     baseURL: 'https://newsapi.org/v2',
 });

 export class NewsApiService {
     apiKey = '04facc1270f04efa9bd883bbec9a9c7a';
     logoApi = new LogoApiService();

     getSources() {
         return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
     }

     getArticlesForSource(sourceId) {
         return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
     }

     getUrlToLogo(source){
         return this.logoApi.getUrlToLogo(source);
     }
 }