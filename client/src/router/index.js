import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Content from '@/components/Content'
import AddContent from '@/components/AddContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'history',
      path: '/',
      component: List,
      children: [
        {
          path: ':id',
          name: 'Content',
          component: Content,
          props: true
        },
        {
          path: 'add',
          name: 'AddContent',
          component: AddContent,
          props: true
        }
      ]
    }
  ]
})
