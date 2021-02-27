export function nf(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function soucet(items){
    let cena = 0;
    items.forEach(polozka => {
        cena += polozka.cena * polozka.kusy;

    });
    return cena;
}

/* Toto na linuxu asi fungovat nebude sa obávám */
export function getImgUrl(path){
  const arr = path.split('\\');
  return '/api/uploads/' + arr[1];
}
