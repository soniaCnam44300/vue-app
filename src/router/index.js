import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Composant from '../views/composantTest.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/composant',
      name: 'Composant',
      component: Composant,
    },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    beforeEnter: (to, from, next) => {
      console.log("ok");
      console.log(to.query)
      let nom = to.query.login
      let mdp = to.query.password
      if (to.query.login === "admin" && to.query.password === "admin") {
          sessionStorage.setItem('nom',nom)
          sessionStorage.setItem('mdp', mdp)
          // console.log(nom)
          // console.log(mdp)
        next ();
      }
      else {
        alert ("Vous n'êtes pas connecté")
        next("/login")
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login ,
    
  }
]

const router = new VueRouter({
  routes
})

export default router
