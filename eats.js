let x = 0;
const orderName = [];
const orderSection = [];
let aClick = null;
let bClick = null;
let cClick = null;
let aPrice = null;
let bPrice = null;
let cPrice = null;
let price = 0;

function selectOrder(select) {
    //Selecionar o ID do botao selecionado, tirar o numero para encontrar a classe respectiva no CSS e adiocionar borda//
    const idSelected = select.id;
    const idClassSelected = idSelected.substring(0, idSelected.length - (idSelected.length-15));

    //Selecionar o ID do Ion-icon do botão selecionado//
    const nameSelected = idSelected.substring(0, idSelected.length - (idSelected.length-6));
    const numberSelected = parseInt(idSelected.substring(15, idSelected.length));
    const ionSelectIon = document.getElementById(nameSelected + numberSelected);

    //Se já tiver algo selecionado, precisa tirar a seleçao antes de escolher outro
    const deselectButton = document.querySelector("." + idClassSelected);
    const deselectIon = document.querySelector(".show-icon-" + nameSelected);

    const order = document.querySelectorAll("."+nameSelected+"-order");
    const price = document.querySelectorAll("."+nameSelected+"-price");
    let orderCorrect = null;

    if(deselectButton !== null) {
    //Tirar classe do botao e do ION-icon//
        deselectButton.classList.remove(idClassSelected);
        deselectIon.classList.remove("show-icon-" + nameSelected);
    //Armazenar pratos e precos selecionados//
        if (nameSelected == "main00") {
            //Nome do prato//
             for(let j =0; j<order.length; j++) {
                 if ((j+1) == numberSelected) {
                     orderCorrect = order[j];
                 }
             }
             aClick = orderCorrect.innerHTML;
             //Preço do prato//
             for(let k =0; k<price.length; k++) {
                if ((k+1) == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            aPrice = orderCorrect.innerHTML;
        } else if (nameSelected=="drink0"){
            //Nome do prato//
             for(let j =0; j<order.length; j++) {
                 if ((j+1) == numberSelected) {
                     orderCorrect = order[j];
                 }
             }
             bClick = orderCorrect.innerHTML;
             //Preço do prato//
             for(let k =0; k<price.length; k++) {
                if ((k+1) == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            bPrice = orderCorrect.innerHTML;            
        } else if (nameSelected=="desert") {
            //Nome do prato//
             for(let j =0; j<order.length; j++) {
                 if ((j+1) == numberSelected) {
                     orderCorrect = order[j];
                 }
             }
             cClick = orderCorrect.innerHTML;
            //Preço do prato//
            for(let k =0; k<price.length; k++) {
                if ((k+1) == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            cPrice = orderCorrect.innerHTML;
        }
        //Armazenar pratos e precos selecionados//
    }
    //Se é a primeira vez escolhendo sobe o contador para habilitar o botao de pedir comida
    else {
        x++;

        //Armazenar pratos e precos selecionados//
        if (nameSelected == "main00") {
            //Nome do prato//
             for(let j =0; j<order.length; j++) {
                 if ((j+1) == numberSelected) {
                     orderCorrect = order[j];
                 }
             }
             aClick = orderCorrect.innerHTML;
             //Preço do prato//
             for(let k =0; k<price.length; k++) {
                if ((k+1) == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            aPrice = orderCorrect.innerHTML;
        } else if (nameSelected=="drink0"){
            //Nome do prato//
             for(let j =0; j<order.length; j++) {
                 if ((j+1) == numberSelected) {
                     orderCorrect = order[j];
                 }
             }
             bClick = orderCorrect.innerHTML;
             //Preço do prato//
             for(let k =0; k<price.length; k++) {
                if ((k+1) == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            bPrice = orderCorrect.innerHTML;            
        } else if (nameSelected=="desert") {
            //Nome do prato//
             for(let j =0; j<order.length; j++) {
                 if ((j+1) == numberSelected) {
                     orderCorrect = order[j];
                 }
             }
             cClick = orderCorrect.innerHTML;
            //Preço do prato//
            for(let k =0; k<price.length; k++) {
                if ((k+1) == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            cPrice = orderCorrect.innerHTML;
        }
        //Armazenar pratos e precos selecionados//
    }

    //adiciona a classe ao botao selecionado//
    select.classList.add(idClassSelected);
    ionSelectIon.classList.add("show-icon-" + nameSelected);

    //Habilita botao ao chegar em 3 o contador
    if (x==3) {
        const buttonOn = document.getElementById("close-order");
        document.getElementById("close-order").disabled = false;
        buttonOn.classList.add("on");
        buttonOn.innerHTML = "Fechar Pedido";
        x++;
    }
}

function closeOrder() {

    price = (parseFloat(aPrice.replace(',','.')) + parseFloat(bPrice.replace(',','.')) + parseFloat(cPrice.replace(',','.'))).toFixed(2);

    const texto = aClick + " + " + bClick + " + " + cClick + " total = " + price + " reais";

    alert(texto);
}