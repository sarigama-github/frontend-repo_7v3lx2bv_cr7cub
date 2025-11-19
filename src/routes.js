import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Shop from './views/Shop.vue'
import Search from './views/Search.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import Account from './views/Account.vue'
import Sell from './views/Sell.vue'
import Dashboard from './views/Dashboard.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/product/:id', name: 'product', component: Product },
  { path: '/shop/:id', name: 'shop', component: Shop },
  { path: '/search', name: 'search', component: Search },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/checkout', name: 'checkout', component: Checkout },
  { path: '/account', name: 'account', component: Account },
  { path: '/sell', name: 'sell', component: Sell },
  { path: '/dashboard', name: 'dashboard', component: Dashboard }
]
