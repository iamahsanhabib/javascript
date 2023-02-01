function show()
{
    class Car{
        constructor(name, year){
            this.name = name;
            this.year = year;
        }

        age(){
            let date = new Date();
            return date.getFullYear() - this.year;
        }
    }

    let car1 = new Car('Toyota', 2014);
    let car2 = new Car("Audi", 2019);
    document.getElementById('demo').innerHTML = 'Age of ' + car1.name + ' is ' + car1.age() + '<br>'+
    'Age of ' + car2.name + ' is ' + car2.age();

}

let birthdate = new Date().getFullYear();