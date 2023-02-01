function showError(){
    let x = document.getElementById('text1').value;
    try{
        if(x.trim() == '')throw 'empty';
        else if(isNaN(x))throw 'Not Number';
        else if(Number(x)>10) throw 'too high';
        else throw 'too low';
    }
    catch(err){
        document.getElementById('demo').innerHTML = err;
    }
    finally{
        document.getElementById('text1').value = '';
    }
    
}