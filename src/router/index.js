import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import movies from '@/view/movies/movies'
import music from '@/view/music/music'
import book from '@/view/book/book'


Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
    {
       path: '/',
      name: 'movies',
      component: movies 
    },{
       path: '/music',
      name: 'music',
      component: music 
    },{
       path: '/book',
      name: 'book',
      component: book 
    }
  ]
})
