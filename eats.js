let x = 0;
const orderName = [];
const orderSection = [];
let aClick = null;
let bClick = null;
let cClick = null;
let aPrice = null;
let bPrice = null;
let cPrice = null;
let priceT = 0;

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

function reviewOrder() {

const showHidden = document.querySelector(".hidden");
showHidden.classList.remove("hidden");

const priceA = parseFloat(aPrice.replace(',','.'));
const priceB = parseFloat(bPrice.replace(',','.'));
const priceC = parseFloat(cPrice.replace(',','.'));
priceT = (priceA + priceB + priceC).toFixed(2);

const htmlA = document.getElementById("show-main-order");
htmlA.innerHTML = aClick;
const htmlB = document.getElementById("show-drink-order");
htmlB.innerHTML = bClick;
const htmlC = document.getElementById("show-desert-order");
htmlC.innerHTML = cClick;

const htmlPriceA = document.getElementById("show-main-price");
htmlPriceA.innerHTML = ((priceA.toFixed(2)).replace('.',','));
const htmlPriceB = document.getElementById("show-drink-price");
htmlPriceB.innerHTML = ((priceB.toFixed(2)).replace('.',','));
const htmlPriceC = document.getElementById("show-desert-price");
htmlPriceC.innerHTML = ((priceC.toFixed(2)).replace('.',','));

const htmlPriceT = document.getElementById("show-total-price");
htmlPriceT.innerHTML = (priceT.replace('.',','));
  
}

function cancelOrder() {
    const showHidden = document.querySelector(".confirm-order-container");
    showHidden.classList.add("hidden");
}

function closeOrder() {
    const texto = aClick + " + " + bClick + " + " + cClick + " total = " + (priceT.replace('.',',')) + " reais";
    alert(texto);
    const showHidden = document.querySelector(".confirm-order-container");
    showHidden.classList.add("hidden");

    const buttonOn = document.getElementById("close-order");
    document.getElementById("close-order").disabled = true;
    buttonOn.classList.remove("on");
    buttonOn.innerHTML = "Selecione os 3 itens <br>para fechar o pedido";

    const removeSelection = document.querySelector(".show-icon-main00");
    const removeSelection2 = document.querySelector(".show-icon-drink0");
    const removeSelection3 = document.querySelector(".show-icon-desert");

    removeSelection.classList.remove("show-icon-main00");
    removeSelection2.classList.remove("show-icon-drink0");
    removeSelection3.classList.remove("show-icon-desert");

    const removeSelection4 = document.querySelector(".main00-selected");
    const removeSelection5 = document.querySelector(".drink0-selected");
    const removeSelection6 = document.querySelector(".desert-selected");

    removeSelection4.classList.remove("main00-selected");
    removeSelection5.classList.remove("drink0-selected");
    removeSelection6.classList.remove("desert-selected");
}
