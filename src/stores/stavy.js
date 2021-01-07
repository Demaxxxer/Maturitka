import {readable, writable} from 'svelte/store';

export const loginPopup = writable(false);

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
    {
        id:"3",
        nazev:"polozka3",
        cena:"333",
        kusy:"3",
        imgUrl:"/images/obrazek3.png",
        skladem:false,
    },        


]
);
