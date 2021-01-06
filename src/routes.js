import Home from './views/Home.svelte'
//import Login from './views/Login.svelte'
import Registrace from './views/Registrace.svelte'
import NotFound from './views/NotFound.svelte'
import Kosik from './views/Kosik.svelte'

export default {
  '/': Home,
  //'/prihlaseni': Login,
  '/registrace': Registrace,
  '/kosik': Kosik,
  '*': NotFound,

}
