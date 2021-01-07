import Home from './views/Home.svelte'
import Registrace from './views/Registrace.svelte'
import NotFound from './views/NotFound.svelte'
import Kosik from './views/Kosik.svelte'

export default {
  '/': Home,
  '/registrace': Registrace,
  '/kosik': Kosik,
  '*': NotFound,

}
