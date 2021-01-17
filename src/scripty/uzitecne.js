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