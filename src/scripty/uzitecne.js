export function nf(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function soucet(cart,items){
    let cena = 0;
    if(!cart || items.length < 1)return cena;
    for (const i of items) {
      cena += i.cost * cart[i._id];
    }
    return cena;
}

/* Toto na linuxu asi fungovat nebude sa obávám */
export function getImgUrl(path){
  if(path){
    const arr = path.split('\\');
    return '/api/uploads/' + arr[1];
  }
  return '';
}

export function addZero(num){
  if (num < 10) return '0' + num;
  return num;
}

/*

Níže jsou funkce na manipulaci s cookies

*/

export function getCookie(cname){
  let name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function deleteCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}
