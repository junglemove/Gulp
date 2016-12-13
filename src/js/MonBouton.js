/**
 * Created by Administrateur on 13/12/2016.
 */
const math = require('./math.js');
class MonBouton{

    constructor(){
        this.cpt = 0;
    }

    toString(){
            return `<button>${this.cpt}</button>`;
    }

    click(){
        this.cpt = math.increment(this.cpt);

    }

}

module.exports = MonBouton; //