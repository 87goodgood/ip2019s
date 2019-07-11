/*

*/


function start(e) {
    var name = [
    {
        char: '何',
        big5: 'A6F3',
        cns: '1-4874',
        unicode: '4F55'
    },
    {
        char: '洺',
        big5: 'CF79',
        cns: '2-2B5B',
        unicode:'6D3A'
    },
    {
        char:'宇',
        big5:'A674',
        cns:'1-4775',
        unicode:'5B87'
    }
    ];
    var ele=document.getElementById("div1");
    
    for(var i = 0;i < 3;i++){
        ele.innerHTML += name[i].char;
        ele.innerHTML += 'big5=';
        ele.innerHTML += name[i].big5
        ele.innerHTML += 'cns=';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += 'unicode=';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }
}
/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
