import {readable, writable} from 'svelte/store';

export const loginPopup = writable(false);
export const registracePopup = writable(false);
export const kosik = writable(
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
    ]
);
export const platba = writable({
    jmeno:"",
    prijmeni:"",
    email:"",
    platba:"",
})/*
export const uzivatel = writable({
    jmeno:"",
    prijmeni:"",
    email:"",
    perms:false,

})*/
export const uzivatel = writable({
    jmeno:"Jan",
    prijmeni:"Pastierčin",
    email:"demaxer@seznam.cz",
    perms:true,

})/*
export const uzivatel = writable({
    jmeno:"Jan",
    prijmeni:"Pastierčin",
    email:"demaxer@seznam.cz",
    perms:false,

})
export const uzivatel = writable(false)*/
