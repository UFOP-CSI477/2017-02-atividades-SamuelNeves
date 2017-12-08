/**
 * Created beight samuel on 07/12/17.
 */
function exibePesoIdeal(altura) {
    if (!isNaN(altura)) {
        limiarMenor = 18.6 * (altura * altura)
        limiarMaior = 24.9 * (altura * altura)
        document.getElementById("pesoIdeal").innerHTML = "O seu peso ideal deve estar entre " + limiarMenor.toFixed(2) + " Kg e " + limiarMaior.toFixed(2) + " Kg";
    }
}
function exibeIMC(imc) {
    if(imc<=18.5){
        textoIMC="Abaixo do Peso!";
    }else if(imc> 18.5 && imc<=24.9){
        textoIMC="Peso Ideal!";
    }else if(imc> 24.9 && imc<=29.9){
        textoIMC="Sobrepeso!";
    }else if(imc> 29.9 && imc<34.9){
        textoIMC="Obesidade Grau I";
    }else if(imc> 34.9&& imc<=40){
        textoIMC="Obesidade Grau II";
    }else if(imc> 40){
        textoIMC="Obesidade Grau III";
    }
    document.getElementById("tipoIMC").innerHTML = textoIMC;

}
function calcuIMC(altura, peso) {
    return peso / (altura * altura);
}
function somaUsandoInputs() {
    var weight = parseFloat(document.dados.weight.value.replace(",", "."));
    var eight = parseFloat(document.dados.height.value.replace(",", "."));
    if (document.dados.weight.length === 0 || isNaN(weight)) {
        document.getElementById("grupoV1").classList.add("has-error");
        document.getElementById("alertaV1").style.display = "block";
        document.getElementById("alertaV3").style.display = "none";
        document.dados.weight.value = "";
        document.dados.weight.focus();
        return;
    }
    document.getElementById("grupoV1").classList.remove("has-error");
    document.getElementById("alertaV1").style.display = "none";
    if (document.dados.height.length === 0 || isNaN(eight)) {
        // window.alert("Informe o segundo valor corretamente!");
        document.getElementById("grupoV2").classList.add("has-error");
        document.getElementById("alertaV2").style.display = "block";
        document.getElementById("alertaV3").style.display = "none";
        document.dados.height.value = "";
        document.dados.height.focus();
        return;
    }


    document.getElementById("grupoV2").classList.remove("has-error");
    document.getElementById("alertaV2").style.display = "none";
    document.getElementById("alertaV3").style.display = "block";
    imc = calcuIMC(eight, weight).toFixed(2);
    document.dados.result.value = calcuIMC(eight, weight).toFixed(2);


    exibeIMC(imc);
    exibePesoIdeal(eight);
}