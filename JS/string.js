function extractString(){
    var text = 'I Love My Country!';
    document.getElementById('demo').innerHTML = text.slice(2,6) +
    '\n' + text.substr(2, 5) +'\n'+ text.substring(2,6);
}

function replace(){
    var text = 'Please, visit Microsoft!';
    document.getElementById('demo1').innerHTML = text.replace('Microsoft', 'JUST');
}

function trimText(){
    var text ='Plaese, visit w3school!';
    document.getElementById('demo2').innerHTML = text.trim()
}

function splitText(){
    var text = 'I Love My Country';
    text = text.split("");
    text[0] = 'He'
    var k = ''
    for(let i=0; i<text.length; i++){
        k = k + text[i]
    }
    document.getElementById('demo3').innerHTML = k;
}