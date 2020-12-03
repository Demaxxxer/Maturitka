import Home from './views/Home.svelte'
import NotFound from './views/NotFound.svelte'

export default {
  '/': Home,
  '*': NotFound
}
