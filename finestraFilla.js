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


        let pecesEnUnaSolaXocolata = coordenadaX*coordenadaY;

        let boolProva = pecesEnUnaSolaXocolata;


        do{
            textProva += "\n";
            textProva += xocolataFinal;
            paragrafFinal.innerText += textProva;
            boolProva += pecesEnUnaSolaXocolata;
        }while(totalPecesDemanades>boolProva);

        console.log('arriba');

        console.log(textProva);











    }



}
