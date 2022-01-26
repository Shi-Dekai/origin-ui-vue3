import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/switch.vue'
import Button from '../components/button.vue'
import Tabs from '../components/tabs.vue'
import Dialog from '../components/dialog.vue'
import DocDefault from '../components/docDefault.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', component: DocDefault},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'tabs', component: Tabs},
        {path: 'dialog', component: Dialog},
      ]
    }
  ]
})
router.afterEach((to) => {
  console.log(to)
})