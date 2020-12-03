import Home from './views/Home.svelte'
import Login from './views/Login.svelte'
import NotFound from './views/NotFound.svelte'

export default {
  '/': Home,
  '/prihlaseni': Login,
  '*': NotFound
}
