function showList(){
    const cars = ['Volvo', 'Toyota', 'BMW', 'Hunduyi'];
    var text = '<h3>Car List</h3><ul>';
    for (let key in cars){
        text += '<li>'+cars[key]+'</li>';
    }
    document.getElementById('demo').innerHTML = text+'</ul>';
}

function showList1(){
    const cars = ['Volvo', 'Toyota', 'BMW', 'Hunduyi'];
    var text1 = '<h3>Car List</h3><ul>';
    cars.forEach(function(value){
        text1 += '<li>' + value + '</li>';
    });
    document.getElementById('demo1').innerHTML = text1 +'</ul>';
}
