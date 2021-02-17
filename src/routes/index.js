import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes.map'

Vue.use(VueRouter)



// Cria uma variavel constante do tipo VueRouter
const router = new VueRouter({
    routes
})

// Exporta a variavel constante router
export default router