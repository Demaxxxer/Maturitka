import {readable, writable} from 'svelte/store';

export const cats = readable({
  activ: 'Akční hry',
  logic: 'Logické hry',
  sim: 'Simulátory',
  strat: 'Strategické hry',
  rpg: 'RPG hry',
  race: 'Závodní hry'
})

export const loginPopup = writable(false);
export const registracePopup = writable(false);
export const alertContent = writable(false);
export const potvrzeni = writable(false);

export const cart = writable({});

export const kosik = writable(
    [
        {
            id:"1",
            nazev:"Forza Horizon 4",
            cena:"1200",
            kusy:"1",
            imgUrl:"/images/obrazek1.png",
            skladem:true,
        },
        {
            id:"2",
            nazev:"Eurotruck Simulator 2",
            cena:"200",
            kusy:"2",
            imgUrl:"/images/obrazek2.png",
            skladem:true,
        },
        {
            id:"3",
            nazev:"Grand Theft Auto V",
            cena:"500",
            kusy:"1",
            imgUrl:"/images/obrazek1.png",
            skladem:true,
        },
    ]
);
export const polozky = writable(
    [
        {
            id:"1",
            nazev:"polozka1 fadfgwfghg fdjhsghf dshfghgfhsg",
            cena:"111",
            kusy:"25",
            imgUrl:"/images/obrazek1.png",
            skladem:true,
        },
        {
            id:"2",
            nazev:"polozka2",
            cena:"5099",
            kusy:"2",
            imgUrl:"/images/obrazek2.png",
            skladem:true,
        },
        {
            id:"3",
            nazev:"polozka1 fadfgwfghg fdjhsghf dshfghgfhsg",
            cena:"111",
            kusy:"25",
            imgUrl:"/images/obrazek1.png",
            skladem:true,
        },
        {
            id:"4",
            nazev:"polozka2",
            cena:"5099",
            kusy:"2",
            imgUrl:"/images/obrazek2.png",
            skladem:true,
        },
        {
            id:"5",
            nazev:"polozka1 fadfgwfghg fdjhsghf dshfghgfhsg",
            cena:"111",
            kusy:"25",
            imgUrl:"/images/obrazek1.png",
            skladem:true,
        },
        {
            id:"6",
            nazev:"polozka2",
            cena:"5099",
            kusy:"2",
            imgUrl:"/images/obrazek2.png",
            skladem:true,
        },

    ]
);
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
export const toppolozky = writable(
    [
        {
            id:"1",
            nazev:"polozka1 fadfgwfghg fdjhsghf dshfghgfhsg",
            cena:"111",
            kusy:"25",
            imgUrl:"/images/obrazek1.png",
            skladem:true,
        },
        {
            id:"2",
            nazev:"polozka2",
            cena:"5099",
            kusy:"2",
            imgUrl:"/images/obrazek2.png",
            skladem:true,
        },
        {
            id:"3",
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

export const platba = writable({
    jmeno:"",
    prijmeni:"",
    email:"",
    platba:"",
})
/*
export const uzivatel = writable({
    id:"1",
    jmeno:"Jan",
    prijmeni:"Pastierčin",
    email:"jan.pastiercin@seznam.cz",
    perms:true,

})
export const uzivatel = writable({
    id:"2",
    jmeno:"Jan",
    prijmeni:"Pastierčin",
    email:"demaxer@seznam.cz",
    perms:false,
})
*/
export const uzivatel = writable(false)
