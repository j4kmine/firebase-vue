import Listing from './components/List.vue'
import Add from './components/Add.vue'
import singleBlog from './components/singleBlog.vue'
export default[
  {path: '/', component: Listing},
  {path: '/add', component: Add},
  {path: '/blog/:id', component: singleBlog}
]
