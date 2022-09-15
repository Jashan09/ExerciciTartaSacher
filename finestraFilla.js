function crearRajolaDeXocolata(){


    //Agafa les dades del formulari de la finestra filla
    let coordenadaX = document.getElementById("n").value;
    let coordenadaY = document.getElementById("m").value;


    let finestraPare = this.opener;

    if(finestraPare){


        let paragrafFinal = finestraPare.document.getElementById("paragrafDeLaFinestraPare");
        paragrafFinal.innerText = "";


        /*
X X
X X
X X
X X
         */



        let div1 = finestraPare.document.createElement("div")
        finestraPare.document.body.appendChild(div1);
        div1.class="text";


        finestraPare.document.getElementById("childrenAge").innerHTML
            =`Diu que es diu <strong>${age}</strong>`;
        finestraPare.document.getElementById("childrenName").innerHTML
            =`Diu que es diu <strong>${name}</strong>`;


    }



}
