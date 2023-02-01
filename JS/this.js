function showObject(){
    var person = {
        firstName: 'Ahsan',
        lastName: 'Habib',
        age: 25,
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
    }
    document.getElementById('demo').innerHTML = person.fullName();
};



function showObject1()
{
    const person1 = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const person2 = {
        firstName:"Habib",
        lastName: "Ahsan",
        age: 25,
        id: 170111
      }
    document.getElementById('demo1').innerHTML = person1.fullName.call(person2);
}

function showObject2(){
    const person = {
        firstName: 'Ahsan',
        lastName: 'Habib',
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
    }

    const member = {
        firstName: 'Abdur',
        lastName: 'Rahim',
        age: 26,
        id: 167253
    }

    document.getElementById('demo2').innerHTML = person.fullName.bind(member)();
}