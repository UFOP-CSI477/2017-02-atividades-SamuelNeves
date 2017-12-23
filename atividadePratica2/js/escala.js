/**
 * Created by samuel on 23/12/17.
 */
function calculaMagnitude(amplitude, intervalo) {
    var result = Math.log10(amplitude) + 3 * Math.log10(8 * intervalo) - 2.92;
    return result;
}
function verificaCampo1(n1) {
    if (isNaN(n1)) {
        $("#grupoV1").addClass("has-error");
        $("#alertaV1").slideDown();
        $("input[name='valor1']").val("");
        $("input[name='valor1']").focus();
        return false;
    }

    $("#grupoV1").removeClass("has-error");
    $("#alertaV1").slideUp();
    return true
}

function verificaCampo2(n2) {
    if (isNaN(n2)) {
        $("#grupoV2").addClass("has-error");
        $("#alertaV2").slideDown();
        $("input[name='valor2']").val("");
        $("input[name='valor2']").focus();
        return false;
    }
    $("#grupoV2").removeClass("has-error");
    $("#alertaV2").slideUp();
    return true
}

function exibeMagnitude(magnitude) {
    if(magnitude<=3.5){
        textomagnitude="Efeito não spode ser sentido";
    }else if(magnitude> 3.5 && magnitude<=5.4){
        textomagnitude="Efeito as vezes sentido!";
    }else if(magnitude> 5.5 && magnitude<=6.0){
        textomagnitude="Pode causar pequenos danos a predios e etc!";
    }else if(magnitude> 6.1 && magnitude<6.9){
        textomagnitude="Pode ser destrutivo, cuidado.";
    }else if(magnitude> 7.0&& magnitude<=7.9){
        textomagnitude="Grande Terremoto.";
    }else if(magnitude> 8.0){
        textomagnitude="Enorme Terremoto";
    }
    $("input[name='result']").val(magnitude);
    $("#alertaV3").slideDown();
    $("#tipoMagnitude").text(textomagnitude);

}
$(document).ready(function () {

    $("button[name='calcula']").click(function () {
        console.log("clicado")
        var n1 = parseFloat($("input[name='amplitude']").val());
        var n2 = parseFloat($("input[name='intervalo']").val());
        if (verificaCampo1(n1) && verificaCampo2(n2)) {
            console.log("clicado")

            var result= calculaMagnitude(n1,n2);
            exibeMagnitude(result);
        }
    })
});