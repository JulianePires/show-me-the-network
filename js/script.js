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

    document.getElementById("contador").innerHTML = dias + "d" + horas + "h" + minutos + "m" + segundos + "s";

    //SE A CONTAGEM CHEGAR AO FINAL, IMPRIME UMA MENSAGEM

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "Tempo Esgotado";
    }
}, 1000);

// Exit intent
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

// Exit intent trigger
addEvent(document, 'mouseout', function(evt) {

    if (evt.toElement == null && evt.relatedTarget == null ) {
        $('.lightbox').slideDown();
    };

});

// Closing the Popup Box
$('a.close').click(function(){
    $('.lightbox').slideUp();
});

