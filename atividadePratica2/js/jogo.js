/**
 * Created by samuel on 23/12/17.
 */
$(document).ready(function () {
    chaveFendaSelected = false;
    algodaoDoceSelected = false;
    maquinaLavarSelected = false;
    saboneteSelected = false;
    console.log('#someButton was clicked');
    $("#verificaRespostas").click(function () {
        if(chaveFendaSelected && algodaoDoceSelected && maquinaLavarSelected && saboneteSelected){
            alert("Parabens, voce acertou todas as respostas!");
        } else{
            alert("Hum, parace que voce nao selecionou todos os elementos incorretos! Selecione e tente novamente!");
        }
    });
    $("img").imgCheckbox({
    // radio:true,
        "styles": {
            "span.imgCheckbox.imgChked img": {
                // It's important to note that overriding the "filter" property will remove grayscaling
                "filter": "blur(5px)",
                "radio": true,
                // This is just css: remember compatibility
                "-webkit-filter": "blur(5px)",

                // Let's change the amount of scaling from the default of "0.8"
                "transform": "scale(0.9)"
            }
        },

        onclick: function (el) {
            console.log('AQUI');
            var isChecked = el.hasClass("imgChked");
            var imgEl = el.children()[0];  // the img element
            if (imgEl.name == "fenda") {
                chaveFendaSelected = isChecked;
            } else if (imgEl.name == "sabonete") {
                saboneteSelected = isChecked;
            } else if (imgEl.name == "maqlavar") {
                maquinaLavarSelected = isChecked;
            } else if (imgEl.name == "algdoce") {
                algodaoDoceSelected = isChecked;
            }
            console.log(isChecked+ " " +chaveFendaSelected + " " + saboneteSelected + " " + maquinaLavarSelected + " " + algodaoDoceSelected);
        }


    });

});

