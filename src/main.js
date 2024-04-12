import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

// Add PrimeVue
import PrimeVue from "primevue/config";

// Add PrimeVue Components
import Card         from "primevue/card";
import Button       from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Sidebar      from "primevue/sidebar";
import Avatar       from "primevue/avatar";
import Menu         from "primevue/menu";
import Menubar      from "primevue/menubar";
import Toolbar      from "primevue/toolbar";

// Add PrimeFlex
import "primeflex/primeflex.css";

// Add PrimeIcons
import 'primeicons/primeicons.css';

// Add App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import i18n from "./i18n.js";


const app = createApp(App);

// Add PrimeVue Plugin
app.use(PrimeVue, { ripple: true})
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar);

// Add i18n Plugin
app.use(i18n);

// Mount app
app.mount('#app')
