var btn1 = document.getElementById('choose-btn1');
var btn2 = document.getElementById('choose-btn2');
var btn3 = document.getElementById('choose-btn3');
var btn4 = document.getElementById('choose-btn4');

var pb1 = document.getElementById('plans-border-1');
var pb2 = document.getElementById('plans-border-2');
var pb3 = document.getElementById('plans-border-3');
var pb4 = document.getElementById('plans-border-4');

var price1 = document.getElementById('price1');
var price2 = document.getElementById('price2');
var price3 = document.getElementById('price3');
var price4 = document.getElementById('price4');


btn1.addEventListener("click", function(){
    if(btn1.innerHTML == "CHOOSE"){
        btn1.innerHTML = "CONFIRM";
        btn1.style.backgroundColor = "rgb(19,141,255)";
        btn1.style.boxShadow = "rgba(39, 69, 77, 0.77) 0px 54px 55px, rgba(39, 69, 77, 0.77) 0px -12px 30px, rgba(39, 69, 77, 0.77) 0px 4px 6px, rgba(39, 69, 77, 0.77) 0px 12px 13px, rgba(39, 69, 77, 0.77) 0px -3px 5px";
        btn2.style.boxShadow = "none";
        btn3.style.boxShadow = "none";
        btn4.style.boxShadow = "none";
        btn2.style.backgroundColor = "rgb(26,28,41)";
        btn3.style.backgroundColor = "rgb(26,28,41)";
        btn4.style.backgroundColor = "rgb(26,28,41)";
        pb1.style.border = "5px solid rgb(5,106,200)";
        pb1.style.borderTop = "none";
        pb2.style.border = "5px solid rgb(26,28,41)";
        pb2.style.borderTop = "none";
        pb3.style.border = "5px solid rgb(26,28,41)";
        pb3.style.borderTop = "none";
        pb4.style.border = "5px solid rgb(26,28,41)";
        pb4.style.borderTop = "none";
        price1.style.color = "rgb(5,106,200)";
        price2.style.color = "white";
        price3.style.color = "white";
        price4.style.color = "white";
    }else{
        btn1.innerHTML = "CHOOSE";
        btn1.style.backgroundColor = "rgb(26,28,41)";
        btn1.style.boxShadow = "none";
        pb1.style.border = "5px solid rgb(26,28,41)";
        pb1.style.borderTop = "none";
        price1.style.color = "white";
    }
    btn2.innerHTML = "CHOOSE";
    btn3.innerHTML = "CHOOSE";
    btn4.innerHTML = "CHOOSE";
});

btn2.addEventListener("click", function(){
    btn1.innerHTML = "CHOOSE";
    if(btn2.innerHTML == "CHOOSE"){
        btn2.innerHTML = "CONFIRM";
        btn2.style.backgroundColor = "rgb(19,141,255)";
        btn2.style.boxShadow = "rgba(39, 69, 77, 0.77) 0px 54px 55px, rgba(39, 69, 77, 0.77) 0px -12px 30px, rgba(39, 69, 77, 0.77) 0px 4px 6px, rgba(39, 69, 77, 0.77) 0px 12px 13px, rgba(39, 69, 77, 0.77) 0px -3px 5px";
        btn1.style.boxShadow = "none";
        btn3.style.boxShadow = "none";
        btn4.style.boxShadow = "none";
        btn1.style.backgroundColor = "rgb(26,28,41)";
        btn3.style.backgroundColor = "rgb(26,28,41)";
        btn4.style.backgroundColor = "rgb(26,28,41)";
        pb2.style.border = "5px solid rgb(5,106,200)";
        pb2.style.borderTop = "none";
        pb1.style.border = "5px solid rgb(26,28,41)";
        pb1.style.borderTop = "none";
        pb3.style.border = "5px solid rgb(26,28,41)";
        pb3.style.borderTop = "none";
        pb4.style.border = "5px solid rgb(26,28,41)";
        pb4.style.borderTop = "none";
        price2.style.color = "rgb(5,106,200)";
        price1.style.color = "white";
        price3.style.color = "white";
        price4.style.color = "white";
    }else{
        btn2.innerHTML = "CHOOSE";
        btn2.style.backgroundColor = "rgb(26,28,41)";
        btn2.style.boxShadow = "none";
        pb2.style.border = "5px solid rgb(26,28,41)";
        pb2.style.borderTop = "none";
        price2.style.color = "white";
    }
    btn3.innerHTML = "CHOOSE";
    btn4.innerHTML = "CHOOSE";
});

btn3.addEventListener("click", function(){
    btn1.innerHTML = "CHOOSE";
    btn2.innerHTML = "CHOOSE";
    if(btn3.innerHTML == "CHOOSE"){
        btn3.innerHTML = "CONFIRM";
        btn3.style.backgroundColor = "rgb(19,141,255)";
        btn3.style.boxShadow = "rgba(39, 69, 77, 0.77) 0px 54px 55px, rgba(39, 69, 77, 0.77) 0px -12px 30px, rgba(39, 69, 77, 0.77) 0px 4px 6px, rgba(39, 69, 77, 0.77) 0px 12px 13px, rgba(39, 69, 77, 0.77) 0px -3px 5px";
        btn1.style.boxShadow = "none";
        btn2.style.boxShadow = "none";
        btn4.style.boxShadow = "none";
        btn2.style.backgroundColor = "rgb(26,28,41)";
        btn1.style.backgroundColor = "rgb(26,28,41)";
        btn4.style.backgroundColor = "rgb(26,28,41)";
        pb3.style.border = "5px solid rgb(5,106,200)";
        pb3.style.borderTop = "none";
        pb1.style.border = "5px solid rgb(26,28,41)";
        pb1.style.borderTop = "none";
        pb2.style.border = "5px solid rgb(26,28,41)";
        pb2.style.borderTop = "none";
        pb4.style.border = "5px solid rgb(26,28,41)";
        pb4.style.borderTop = "none";
        price3.style.color = "rgb(5,106,200)";
        price2.style.color = "white";
        price1.style.color = "white";
        price4.style.color = "white";
    }else{
        btn3.innerHTML = "CHOOSE";
        btn3.style.backgroundColor = "rgb(26,28,41)";
        btn3.style.boxShadow = "none";
        pb3.style.border = "5px solid rgb(26,28,41)";
        pb3.style.borderTop = "none";
        price3.style.color = "white";
    }
    btn4.innerHTML = "CHOOSE";
});

btn4.addEventListener("click", function(){
    btn1.innerHTML = "CHOOSE";
    btn2.innerHTML = "CHOOSE";
    btn3.innerHTML = "CHOOSE";
    if(btn4.innerHTML == "CHOOSE"){
        btn4.innerHTML = "CONFIRM";
        btn4.style.backgroundColor = "rgb(19,141,255)";
        btn4.style.boxShadow = "rgba(39, 69, 77, 0.77) 0px 54px 55px, rgba(39, 69, 77, 0.77) 0px -12px 30px, rgba(39, 69, 77, 0.77) 0px 4px 6px, rgba(39, 69, 77, 0.77) 0px 12px 13px, rgba(39, 69, 77, 0.77) 0px -3px 5px";
        btn1.style.boxShadow = "none";
        btn2.style.boxShadow = "none";
        btn3.style.boxShadow = "none";
        btn2.style.backgroundColor = "rgb(26,28,41)";
        btn3.style.backgroundColor = "rgb(26,28,41)";
        btn1.style.backgroundColor = "rgb(26,28,41)";
        pb4.style.border = "5px solid rgb(5,106,200)";
        pb4.style.borderTop = "none";
        pb1.style.border = "5px solid rgb(26,28,41)";
        pb1.style.borderTop = "none";
        pb3.style.border = "5px solid rgb(26,28,41)";
        pb3.style.borderTop = "none";
        pb2.style.border = "5px solid rgb(26,28,41)";
        pb2.style.borderTop = "none";
        price4.style.color = "rgb(5,106,200)";
        price2.style.color = "white";
        price3.style.color = "white";
        price1.style.color = "white";
    }else{
        btn4.innerHTML = "CHOOSE";
        btn4.style.backgroundColor = "rgb(26,28,41)";
        btn4.style.boxShadow = "none";
        pb4.style.border = "5px solid rgb(26,28,41)";
        pb4.style.borderTop = "none";
        price4.style.color = "white";
    }
});
