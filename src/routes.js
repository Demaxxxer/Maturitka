import Home from './views/Home.svelte'
import NotFound from './views/NotFound.svelte'
import Kosik from './views/Kosik.svelte'
import Platba from './views/Platba.svelte'
import Souhrn from './views/Souhrn.svelte'
import Polozka from './views/Polozka.svelte'
import Dokoncit from './views/Dokoncit.svelte'


export default {
  '/': Home,
  '/kosik': Kosik,
  '/platba': Platba,
  '/souhrn': Souhrn,
  '/polozka': Polozka,
  '/dokoncit': Dokoncit,
  '*': NotFound,
}
