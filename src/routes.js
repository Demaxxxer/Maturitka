import Home from './views/Home.svelte'
import NotFound from './views/NotFound.svelte'
import Kosik from './views/Kosik.svelte'
import Platba from './views/Platba.svelte'
import Souhrn from './views/Souhrn.svelte'

export default {
  '/': Home,
  '/kosik': Kosik,
  '/platba': Platba,
  '/souhrn': Souhrn,
  '*': NotFound,
}
