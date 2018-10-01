//arguments object - no longer bound with arrow functions

// const add = function (a, b){
//     console.log(arguments);
//     return a + b;
// }

//console.log(add(55, 1, 1001));

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
  
}

//this keyword - no longer bound with arrow functions

const user = {
    name: 'Paula',
    cities: ['Austin', 'St. Louis', 'Houston', 'Chicago'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city + '.')
        // });
    }
};

console.log(user.printPlacesLived());

 // printPlacesLived: function (){
    //     console.log(this.name);
    //     console.log(this.cities);

    //     this.cities.forEach(function(city){
    //         console.log(this.name + ' has lived in ' + city);
    //     });
    // }

    const multiplier = {
        numbers: [1, 2, 3, 4, 5],
        multiplyBy: 5,
        multiply(){
            return this.numbers.map((number) =>  number * this.multiplyBy
            );

        }
    }

    console.log(multiplier.multiply());