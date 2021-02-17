import Home from '../pages/Home';
import Cart from '@/pages/Cart';
import Products from '@/pages/Products';


const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
    },

    {
        path: '/carrinho',
        component: Cart,
        name: 'cart',
    },

    {
        path: '/loja',
        component: Products,
        name: 'products',
    },

]

export default routes