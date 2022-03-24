import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-3-socket.io'
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

app.use(router);
app.use(new VueSocketIO({
	debug: true,
	connection: SocketIO(process.env.VUE_APP_WSURL)
}))
app.mount('#app')
