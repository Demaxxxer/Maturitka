import Home from './views/Home.svelte'
import NotFound from './views/NotFound.svelte'
import Kosik from './views/Kosik.svelte'
import Platba from './views/Platba.svelte'
import Souhrn from './views/Souhrn.svelte'
import Polozka from './views/Polozka.svelte'
import Dokoncit from './views/Dokoncit.svelte'
import Edit from './views/Edit.svelte'
import Seznam from './views/Seznam.svelte'
import Vyhledani from './views/Vyhledani.svelte'
import Profil from './views/Profil.svelte'

export default {
  '/': Home,
  '/kosik': Kosik,
  '/platba': Platba,
  '/souhrn': Souhrn,
  '/polozka': Polozka,
  '/dokoncit': Dokoncit,
  '/edit': Edit,
  '/seznam': Seznam,
  '/vyhledani': Vyhledani,
  '/profil': Profil,
  '*': NotFound,
}
