
let Hedgehog = (function () {
    const speed = Symbol();
    class Hedgehog {
        constructor(name) {
            this.name = name;
            this[speed] = 1000; // this is not directly accessible
        }

        zoom() {
            console.log(`${this.name} zooms with the speed of ${this[speed]} miles per second!`);
        }
    }

    return Hedgehog;
})();

export default Hedgehog;