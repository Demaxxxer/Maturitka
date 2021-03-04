import {readable, writable} from 'svelte/store';

export const cats = readable({
  activ: 'Akční hry',
  logic: 'Logické hry',
  sim: 'Simulátory',
  strat: 'Strategické hry',
  rpg: 'RPG hry',
  race: 'Závodní hry'
})

export const uzivatel = writable(false)
export const loginPopup = writable(false);
export const registracePopup = writable(false);
export const alertContent = writable(false);
export const potvrzeni = writable(false);
export const cart = writable({});
export const cartState = writable('kosik');
export const cartUser = writable({
  fname: '',
  sname: '',
  email: '',
  payment: 'karta'
})
export const orderInfo = writable({});

export const polozkyTOP = writable(
    [
        {
            id:"1",
            nazev:"polozka1 fadfgwfghg fdjhsghf dshfghgfhsg",
            cena:"111",
            kusy:"25",
            imgUrl:"/images/obrazek1.png",
            skladem:true,
        },


    ]
);

export const objednavka = writable(
    [
        {
            id:"1",
            datum:"2.3.2021",
            kusy:"5",
            cena:"2121",

        },
        {
            id:"2",
            datum:"1.2.2021",
            kusy:"12",
            cena:"111",
        },
    ]
);
