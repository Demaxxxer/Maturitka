import {readable, writable} from 'svelte/store';

export const cats = readable({
  activ: 'Akční hry',
  logic: 'Logické hry',
  sim: 'Simulátory',
  strat: 'Strategické hry',
  rpg: 'RPG hry',
  race: 'Závodní hry'
})

export const scrollEvent = writable(false);
export const uzivatel = writable(false);
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

export const orderInfo = writable(false);
