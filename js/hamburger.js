'use strict';
class Hamburger {
    constructor(burger, stuffing, supplement = []) {
        this.burger = burger;
        this.stuffing = stuffing;
        this.supplement = supplement;

        this._fetchHamburgers();
    }
    calculatePrice() { // Узнать стоимость
        const burger = this.burgerList[this.burger].price;
        const stuffing = this.stuffingList[this.stuffing].price;
        let supplement = 0;
        for (const iterator of this.supplement) {
            supplement += this.supplementList[iterator].price;
        }
        return burger + stuffing + supplement;
    }
    calculateCalories() { // Узнать калорийность
        const burger = this.burgerList[this.burger].ccal;
        const stuffing = this.stuffingList[this.stuffing].ccal;
        let supplement = 0;
        for (const iterator of this.supplement) {
            supplement += this.supplementList[iterator].ccal;
        }
        return burger + stuffing + supplement;
    }

    _fetchHamburgers() {
        this.burgerList = {
            small: { price: 50, ccal: 20, },
            large: { price: 100, ccal: 40, },
        };
        this.stuffingList = {
            cheese: { price: 10, ccal: 20, },
            salad: { price: 20, ccal: 5 },
            potato: { price: 15, ccal: 10, },
        };
        this.supplementList = {
            spice: { price: 15, ccal: 0, },
            mayo: { price: 20, ccal: 5, },
        }
    }
}

const hamburger1 = new Hamburger('small', 'salad', ['spice', 'mayo']);
console.log(`цена = ${hamburger1.calculatePrice()}`);
console.log(`калории = ${hamburger1.calculateCalories()}`);

const hamburger2 = new Hamburger('large', 'potato', ['mayo']);
console.log(`цена = ${hamburger2.calculatePrice()}`);
console.log(`калории = ${hamburger2.calculateCalories()}`);

const hamburger3 = new Hamburger('small', 'salad');
console.log(`цена = ${hamburger3.calculatePrice()}`);
console.log(`калории = ${hamburger3.calculateCalories()}`);