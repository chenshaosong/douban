import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../pages/movie'
import Book from '../pages/book'
import Radio from '../pages/radio'
import Steam from '../pages/steam'
import Search from '../pages/search'
import Result from '../pages/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/steam',
      name: 'Steam',
      component: Steam
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
