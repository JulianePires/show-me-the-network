//CONTADOR
//DEFINE A DATA PARA QUAL ESTAMOS CONTANDO
var dataContador = new Date("Jul 9, 2020 20:00:00").getTime();

//ATUALIZA O CONTADOR A CADA 1 SEGUNDO
var x = setInterval(function() {

    //RETORNA O TEMPO ATUAL
    var agora = new Date().getTime();

    //ENCONTRA A DISTANCIA ENTRE AGORA E A DATA FINAL
    var distancia = dataContador - agora;

    //CALCULOS DE TEMPO PARA DIAS, HORAS, MINUTOS E SEGUNDOS

    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    //IMPRIME O RESULTADO NO ELEMENTO COM A id="contador"
    document.getElementById("d").innerHTML = dias;
    document.getElementById("h").innerHTML = horas;
    document.getElementById("m").innerHTML = minutos;
    document.getElementById("s").innerHTML = segundos;

    //SE A CONTAGEM CHEGAR AO FINAL, IMPRIME UMA MENSAGEM

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "Estamos ao vivo!";
    }
}, 1000);

function closePopUpAndGoToForm(event) {
    // Hide the popup
    document.getElementById("sad-news").style.display = "none";
    location.href = "https://www.youtube.com/watch?v=aK2KbOVYIHc";
}
function closePopUp(event) {
    // Hide the popup
    document.getElementById("sad-news").style.display = "none";
}

function onMouseOut(event) {
    // If the mouse is near the top of the window, show the popup
    // Also, do NOT trigger when hovering or clicking on selects
    if (
        event.clientY < 50 &&
        event.relatedTarget == null &&
        event.target.nodeName.toLowerCase() !== 'select') {
        // Remove this event listener
        document.removeEventListener("mouseout", onMouseOut);

        // mostra o pop up
        document.getElementById("sad-news").style.display = "block";
    }
}
// ação do evento
document.addEventListener("mouseout", onMouseOut); 

// Exit intent
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

function redirectTo() {
    location.href = "https://www.youtube.com/watch?v=aK2KbOVYIHc";
};
