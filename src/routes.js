import Home from './pages/Home.svelte'
import NotFound from './pages/NotFound.svelte'

const routes = [
  { name: '/', component: Home},
  { name: '*', component: NotFound}
]

export { routes }
