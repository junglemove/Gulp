/**
 * Created by Administrateur on 13/12/2016.
 */
const MonBouton = require('./Monbouton.js');    // si c'est un module que l'on a créé, indiquer l'arboressence (../ ou ./ etc.)
                                                // les module node.js ou importés par npm sont automatiquement proposés par ctrl+space
let myBtn = new MonBouton();

myBtn.click();
myBtn.click();
myBtn.click();

console.log(myBtn.toString()); // <button>3</button>