import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import mymodulo  from './components/Header.js';
import container from './components/container.js';
import img from './components/img.js';
import main from './main.js'

let app = createApp(main);
app.component(mymodulo.name,mymodulo)
app.component(container.name, container)
app.component(img.name,img)
app.mount("#app");