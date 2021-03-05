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

const obj = {
  "details": {
    "fname": "Chrobat",
    "sname": "Nagrutil",
    "email": "e@g.c",
    "payment": "karta"
  },
  cost: 56440,
  "content": [
    {
      "name": "Warcart #1",
      "cost": 1800,
      "count": 2
    }
  ],
  "createdAt": "2021-03-04T17:02:27.050Z",
  "user": "k1zMOpLLnyFuFQxV",
  "_id": "mwow6LBe6ZSWvMNu"
}

export const orderInfo = writable(obj);

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
