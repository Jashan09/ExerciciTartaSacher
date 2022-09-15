function crearRajolaDeXocolata(){


    //Agafa les dades del formulari de la finestra filla
    let coordenadaX = document.getElementById("n").value;
    let coordenadaY = document.getElementById("m").value;

    let totalPecesDemanades = document.getElementById("r").value;

    let finestraPare = this.opener;

    if(finestraPare){

        console.log(coordenadaX);
        console.log(coordenadaY);

        let textProva = "";

        for (let x = 0; x < coordenadaX; x++) {
            textProva += "🟫 ";
        }

        console.log(textProva);

        let totalPecesCoordenadaX = textProva;

        textProva += '\n';

        console.log(textProva);

        for (let y = 0; y < coordenadaY-1; y++) {
            textProva += totalPecesCoordenadaX;
            textProva += "\n";
        }

        console.log(textProva);

        let xocolataFinal = textProva;


        let paragrafFinal = finestraPare.document.getElementById("paragrafDeLaFinestraPare");
        paragrafFinal.innerText = "";



        let pecesEnUnaSolaXocolata = coordenadaX*coordenadaY;

        let boolProva = pecesEnUnaSolaXocolata;




        if(totalPecesDemanades<boolProva){
            console.log("no entra");
            paragrafFinal.innerText += textProva;
        }


        if(totalPecesDemanades>boolProva){


            //9 9 9

        do{
            textProva += "\n";
            textProva += xocolataFinal;
            paragrafFinal.innerText += textProva;
            boolProva += pecesEnUnaSolaXocolata;
            console.log("Entra");
        }while(totalPecesDemanades>boolProva);

        }


        console.log("final")
        console.log(textProva);

        let pecesQueSobren = totalPecesDemanades-pecesEnUnaSolaXocolata;

        let textInfo = finestraPare.document.getElementById("textInfo");
        textInfo.innerText = "";


        textInfo.innerText += "Vols " + totalPecesDemanades
            + " peces amb rajoles de " + coordenadaX + "x" + coordenadaY + " (" + pecesEnUnaSolaXocolata + " peces en una sola rajola)";



        console.log("final2")
        console.log(xocolataFinal);



//window.close();





    }



}
