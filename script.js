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
    const idClassSelected = idSelected.substring(
        0,
        idSelected.length - (idSelected.length - 15)
    );

    //Selecionar o ID do Ion-icon do botão selecionado//
    const nameSelected = idSelected.substring(
        0,
        idSelected.length - (idSelected.length - 6)
    );
    const numberSelected = parseInt(
        idSelected.substring(15, idSelected.length)
    );
    const ionSelectIon = document.getElementById(nameSelected + numberSelected);

    //Se já tiver algo selecionado, precisa tirar a seleçao antes de escolher outro
    const deselectButton = document.querySelector("." + idClassSelected);
    const deselectIon = document.querySelector(".show-icon-" + nameSelected);

    const order = document.querySelectorAll("." + nameSelected + "-order");
    const price = document.querySelectorAll("." + nameSelected + "-price");
    let orderCorrect = null;

    if (deselectButton !== null) {
        //Tirar classe do botao e do ION-icon//
        deselectButton.classList.remove(idClassSelected);
        deselectIon.classList.remove("show-icon-" + nameSelected);
        //Armazenar pratos e precos selecionados//
        if (nameSelected == "main00") {
            //Nome do prato//
            for (let j = 0; j < order.length; j++) {
                if (j + 1 == numberSelected) {
                    orderCorrect = order[j];
                }
            }
            aClick = orderCorrect.innerHTML;
            //Preço do prato//
            for (let k = 0; k < price.length; k++) {
                if (k + 1 == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            aPrice = orderCorrect.innerHTML;
        } else if (nameSelected == "drink0") {
            //Nome do prato//
            for (let j = 0; j < order.length; j++) {
                if (j + 1 == numberSelected) {
                    orderCorrect = order[j];
                }
            }
            bClick = orderCorrect.innerHTML;
            //Preço do prato//
            for (let k = 0; k < price.length; k++) {
                if (k + 1 == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            bPrice = orderCorrect.innerHTML;
        } else if (nameSelected == "desert") {
            //Nome do prato//
            for (let j = 0; j < order.length; j++) {
                if (j + 1 == numberSelected) {
                    orderCorrect = order[j];
                }
            }
            cClick = orderCorrect.innerHTML;
            //Preço do prato//
            for (let k = 0; k < price.length; k++) {
                if (k + 1 == numberSelected) {
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
            for (let j = 0; j < order.length; j++) {
                if (j + 1 == numberSelected) {
                    orderCorrect = order[j];
                }
            }
            aClick = orderCorrect.innerHTML;
            //Preço do prato//
            for (let k = 0; k < price.length; k++) {
                if (k + 1 == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            aPrice = orderCorrect.innerHTML;
        } else if (nameSelected == "drink0") {
            //Nome do prato//
            for (let j = 0; j < order.length; j++) {
                if (j + 1 == numberSelected) {
                    orderCorrect = order[j];
                }
            }
            bClick = orderCorrect.innerHTML;
            //Preço do prato//
            for (let k = 0; k < price.length; k++) {
                if (k + 1 == numberSelected) {
                    orderCorrect = price[k];
                }
            }
            bPrice = orderCorrect.innerHTML;
        } else if (nameSelected == "desert") {
            //Nome do prato//
            for (let j = 0; j < order.length; j++) {
                if (j + 1 == numberSelected) {
                    orderCorrect = order[j];
                }
            }
            cClick = orderCorrect.innerHTML;
            //Preço do prato//
            for (let k = 0; k < price.length; k++) {
                if (k + 1 == numberSelected) {
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
    if (x == 3) {
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

    const priceA = parseFloat(aPrice.replace(",", "."));
    const priceB = parseFloat(bPrice.replace(",", "."));
    const priceC = parseFloat(cPrice.replace(",", "."));
    priceT = (priceA + priceB + priceC).toFixed(2);

    const htmlA = document.getElementById("show-main-order");
    htmlA.innerHTML = aClick;
    const htmlB = document.getElementById("show-drink-order");
    htmlB.innerHTML = bClick;
    const htmlC = document.getElementById("show-desert-order");
    htmlC.innerHTML = cClick;

    const htmlPriceA = document.getElementById("show-main-price");
    htmlPriceA.innerHTML = priceA.toFixed(2).replace(".", ",");
    const htmlPriceB = document.getElementById("show-drink-price");
    htmlPriceB.innerHTML = priceB.toFixed(2).replace(".", ",");
    const htmlPriceC = document.getElementById("show-desert-price");
    htmlPriceC.innerHTML = priceC.toFixed(2).replace(".", ",");

    const htmlPriceT = document.getElementById("show-total-price");
    htmlPriceT.innerHTML = priceT.replace(".", ",");
}

function cancelOrder() {
    const showHidden = document.querySelector(".confirm-order-container");
    showHidden.classList.add("hidden");
}

function closeOrder() {
    const texto =
        aClick +
        " + " +
        bClick +
        " + " +
        cClick +
        " total = " +
        priceT.replace(".", ",") +
        " reais";
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
    x = 0;
    priceT = 0;
}

const foodMain = [
    {
        url: `"https://bn02pap001files.storage.live.com/y4mQlJRkiqal38H4-Gb8cmq8Y4kdhOUwWhLdCzODqqf1wZJ4pFToyJ0txv8PeHiGGabiKfjRyDXmncrPoT2rYVT1Ip_ecAl4BBhbqJlenVhimMHnXHtJTo7DvqSep82J_2uQY3fus4jlOVUckN6cvJJbefxFhs8LzKgdTmFiTCqnXIZounGJYtC3CRsm8ELomMa?width=3120&height=4160&cropmode=none" width="3120" height="4160"`,
        title: "Pizza",
        description: "Perfeita para um casal em um jantar romântico",
        price: "19,90",
        style: "50% 35%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4maqu8N3zGWyXlGSEThRuZcWR4ku3uoktSMPLKE6yuFQSdgplPk1qLpz0yPWZFL0IGnhq8jw0BuoB9-55jKBglcDHNO6dNakcwK6v2oAG47RE1nAEGkFrzUGwD2q4UtZcuCoVmI9ov366DCZQ_DtDDlNtZ_sOVmHdXQle0vLTYQmJrjuyXZ8DD0mX25d9BcWvo?width=3120&height=4160&cropmode=none" width="3120" height="4160"`,
        title: "Temaki Supremo",
        description: "Tamanho perfeito para saciar sua fome",
        price: "18,90",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4m0HHhbjtkvX1OLkailb0rpEn08uye0OZ9MPwo77cLKHQG_5Y5CqmoXoIw0Szy64sUMqhvlLvrrv3LrT_0N57Nvv3CI3yvjD-6DJbJFuSlfokxxONLhu4gGrpol-SuYDUQDWag-wg0wreRsXQ6crdf5-KJ9p4e2lFi_lAjeMKsSL6epWeuitQV4tw_FMyiAPYq?width=3000&height=4000&cropmode=none" width="3000" height="4000"`,
        title: "Fondue",
        description: "Queijo com pão e batata",
        price: "39,90",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mF-w9XxIaoG_GyTQbqzQXV6YTkRV3OuC81vNa1W2Eca2pbB8uDXfVl4TZ0aGbpc3sAYkN6WXTmjh020mJd2BbQaGLB5PYNA1o7GQYqGGuSZdlW8fFz9FMe2adv0-tFCIoHYRuupP99ky_M4Lqd5HWNuaLwaptNM8Oizr8QxkokFyGEP_uYha9wLir7iyBsbY8?width=3000&height=4000&cropmode=none" width="3000" height="4000"`,
        title: "Hamburguer",
        description: "X-Burguer com pão e carne caseira",
        price: "16,90",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mN8ZXaHKdGam9pewWdnKVrorpS54LHY_YkiKSzgrhRyO4HDWEXqa-HdJHufAiOwqviM8xZw8cr8h6Y8qxcUu8giYTmKc7KMd_LXl2hhAHiSEMnANj91N1aNm4aayYbU4zXulFIXXb0BRaNb7P6d_6O3VOPkb-OPmQFshTIHSq2N9n8s0VVH5-KcckDUi4iu8G?width=144&height=87&cropmode=none" width="144" height="87"`,
        title: "Frango Ying Yang",
        description: "Um pouco de batata, um pouco de salada",
        price: "14,90",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4m3QcYxqfRshiEsoAYrUlf0n3dLR_cjAkWtG4C6hNlQ1BVT8I7f4PUWbU_PyOvDRlVjI0gyp2ZdBZmGoVoRJ9pGb1-gVKL0q6QfWmxLDlzN0sJVPHZ5Z5Cneutavdo6kqM1k_etIklDqWNY6KNMtrzIaCLZHOwKwxNFXSRe8g3IPN68XcbIAMN78glbJ3sIYOM?width=3000&height=4000&cropmode=none" width="3000" height="4000"`,
        title: "Carbonara",
        description: "Ingredientes na medida certa",
        price: "24,90",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4miWVMRU3D6Fwj6bsBoagMRfw8AIo-G-hAG0d5qGOfQfdSdBhey8ma9OQtv_-_VIB25c2FdbvY4MgwAx6AlEsE6CGbASI4N3D8u1Zc-GL63Zu-PNNmMpa15c0hAOQnKkCzGxuyb4VeDFizkF3xPdyWZq1zG7icf7Yio-mNXfv7ONzkbVtOq-MoKj5Sz5v0hxr3?width=3000&height=4000&cropmode=none" width="3000" height="4000"`,
        title: "Costelinha",
        description: "Não esqueca de postar e nos marcar no instagram",
        price: "22,90",
        style: "50% 50%",
    },
];
const foodDrink = [
    {
        url: `"https://bn02pap001files.storage.live.com/y4mMeeIzlITE2QHyc1RsC-12pfYfbQprINnjNGN-t3xk8-udbDwMbX9Zi19LMvRxcU5NOeNvBFDrGvsU-VZf4YT6wTlTrwtzczH1lQwUBXYy124yATrIQLu5A2WBGsXmC7bJj_2EKEikD07kOPZs8vv-S6fhtsdazTFmtUGClJSdcHg3eF3WSVDUzcRW806omWO?width=584&height=1040&cropmode=none"`,
        title: "Light Drink",
        description: "Vokda e morango",
        price: "12,70",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mIa_XmL3POpiZpVApeJgRsskF_iAAliOfvzc6GNhrvXyTqQtFcTGzeBugJL2ny2IsrhRKiAR06b_1YBKGRny3Cu9pA9Ij8aGdrobA972XJtx-euNUNPusuU9erLLIDcJ4rYMsV2Q2mfpyjvZQcLvZqUYOrxI_CkLl72gTOBbHcSV81-Hz6hANGJw-ND6CTBas?width=3000&height=4000&cropmode=none"`,
        title: "Vinho do Vale",
        description: "cabernet sauvignon seco",
        price: "23,20",
        style: "50% 30%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mBKQBxmZXyp4ezKFQl7GYI5wkuGGEzCmIo3EM6Vr-konzMNTrYypTGdxG-BFs8z8TlZ02nNHyvZ4Dx-1L5RhKrdBC78az46loSASqdxb3tPtX9pPFoy1ox3LCWr4U63zay2eQaLW3wEHbo3eKavOiqnhRRY8KC9iZkQ26Z2HV6NkBjFyMTJocb1AW9phsaIMg?width=3120&height=4160&cropmode=none"`,
        title: "Caipiroska",
        description: "Kiwi com morango",
        price: "18,70",
        style: "40% 70%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mnYugca-CO9vPdiAMuZIWL1x9IVQq9Fr57A2SphKRDg6JZoYSaJYANxBzfvZZ2UZkBZHcHVnjeZY9svKbnYXvdjD7H7y3cOl5PWMKzP49SMsTnAQmvhjTit4ua26AbNkkQ7uOBL3kNYL2ZBYcemsvTU8fuoWRUkiVtpiDSECKuTGHJ_FwyE_WqMH9sQvqmLBu?width=2592&height=1944&cropmode=none"`,
        title: "Drink da casa",
        description: "Consultar o cardapio do dia",
        price: "22,20",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4ms-WftHS80RVfKuBKqqTVZU7AIubInTH855WVNi3NG_nQadquvE48Kcq26vQBqAXEr22n9w4JoAPxjmPuY3JJNqEIo8LZYrfonl_POggGlgw4DC64pUXop2NJoed3vcOQR-2GHdsC24PO6iAwjVCxYdKqpAA4VxZGgqb9xGW-HKfH_-IYZ3F_F1ZjUhdE53SN?width=144&height=87&cropmode=none"`,
        title: "Coca Gelada",
        description: "Lata 350ml",
        price: "4,70",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mk-aaYxAsfeNZIdlmLap1MevN4XLD7li_Lpv54moALEDLYhwAoROiWHUWyu42czyljTlX4ruKKJSQk25Lk74uwWSTz8om-OaR4p2lkD_sYAD9-WC3CI-3WN2zq-0Zd_FOFTFAqrn8zr_ywtwZWSKWwDsn2guC4v8HMWXHzOphlrRFojb0XgtdxS_XX6udiER6?width=1536&height=2560&cropmode=none"`,
        title: "Rum",
        description: " Melhor mistura de rum da cidade",
        price: "15,20",
        style: "50% 30%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mbpyrYmQ_Aueh9-DXnfChi9tksYHNPlgVJoY7Ajr-vdMAFLDHB6zjV2R5mCPfJ-DgYxeCLbhcm5Qtkl28yHZiwIDEX9O5-PqgFiba8Loj7n15i7-c8lM2ekR6qr2-aDnuhWn3u-av-e_s5Kg8yuq-tqfVWh7Htx5n3n1J6tv91P4ZgC4S9pUtbxAGn0WZa8e2?width=3120&height=4160&cropmode=none"`,
        title: "Heineken",
        description: "Garrafa 600ml",
        price: "9,90",
        style: "50% 50%",
    },
];
const foodDesert = [
    {
        url: `"https://bn02pap001files.storage.live.com/y4mNVN2nlPKiEfk76-Yx6Zl3X360nVbkN7Igd9mKqYeccJB4kmqCouLcXd7E5AaCMJ5ii5mwlAlfomfG9PsL4qVJhkqVGaVkl9Xx86rEto9Kt1xfGC6eBsGE7DG5RsI9wSUsBZDRNi8NIPY0OF2y_3I6tsiG0qmEivjSK6klpqsh7Gx0QWD-Z0-s3dKulxvEMH4?width=1860&height=3488&cropmode=none"`,
        title: "Explosão",
        description: "Chocolate da melhor qualidade",
        price: "18,50",
        style: "50% 25%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4m0HHhbjtkvX1OLkailb0rpEn08uye0OZ9MPwo77cLKHQG_5Y5CqmoXoIw0Szy64sUMqhvlLvrrv3LrT_0N57Nvv3CI3yvjD-6DJbJFuSlfokxxONLhu4gGrpol-SuYDUQDWag-wg0wreRsXQ6crdf5-KJ9p4e2lFi_lAjeMKsSL6epWeuitQV4tw_FMyiAPYq?width=3000&height=4000&cropmode=none"`,
        title: "Fondue Chocolate",
        description: "Mashmallows, morango e uva",
        price: "59,90",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mRM3Ci9vfKaV0y2r5M1GnekOkTZv3bBVV4NsqlegeZGnYSCFMkV6MmYJD9dXgKdcQPn-5pYdahkIDnxxPRDm327RZ3dQmJNrxPTadVAqnxGq5EvWHFT4e3SC3SFUMP0CHALvWoCCtOe_sIRw2uK6R3xseqo1H2BppUHB6CXXaSMAXCqunCEA20Q8DAef8-8s4?width=3120&height=4160&cropmode=none"`,
        title: "Bolo Temático",
        description: " Especial de GameOfThrones",
        price: "12,50",
        style: "50% 45%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mbXSPU3m_dl1VF00RPO99AI669P_W07dh1b7x_M0KpSkgUKerKUmV55fnO5TacNzJi_oE-IW8xkKXTOjX57v4FzIDI49G04nQGl1jbj0zyHz9BrOxqHsXjGf5RXvsuXVqPD2EJTeROKxgm-fzMMWuvJEc2wD6h2jiCxN-foYqqHM8FliQWDv8M_uV67AhfHlp?width=3120&height=4160&cropmode=none"`,
        title: "Capuccino",
        description: "Acompanhado de Nutella e paçoca",
        price: "10,80",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4m-lYH_LhiWd6QLOCnrYBGGstlerjDBbiOb75ALNKBHNLmCx3-YZuY5BWF49oakvQkOmkRqI1OueUvtGeaGCRucRKTc2AdbAKWWP-PkWuv-goi8vzqX5wA5m8XnN66jnLuvUxBvIp75_3wHDVpSjoUSYvkhRIzJx8aQ4Izq63alCnj-DeBrDe35kr8WhP4YFid?width=720&height=1033&cropmode=none"`,
        title: "Café gelado",
        description: "Escolha o nome no copo",
        price: "13,50",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4mzMPSgIuKemwEGgEv4GVEfFi5I4MjGNUQgOBTh7m9SREkGROZHoTECkzH3GyLBjQclHRq8crDaWQ76fnMKZQxgwJB359AJ7EpsuUR23PXDzly10zst9aj17oPhllanE3zSDSDUif-N_cAO7Pbunl4GBtstbZCAZjL_Y41LDQbyss3OWtdeDAbtSF4LzhwO59L?width=144&height=82&cropmode=none"`,
        title: "Pudim",
        description: "Apenas pudim",
        price: "7,00",
        style: "50% 50%",
    },
    {
        url: `"https://bn02pap001files.storage.live.com/y4miWVMRU3D6Fwj6bsBoagMRfw8AIo-G-hAG0d5qGOfQfdSdBhey8ma9OQtv_-_VIB25c2FdbvY4MgwAx6AlEsE6CGbASI4N3D8u1Zc-GL63Zu-PNNmMpa15c0hAOQnKkCzGxuyb4VeDFizkF3xPdyWZq1zG7icf7Yio-mNXfv7ONzkbVtOq-MoKj5Sz5v0hxr3?width=3000&height=4000&cropmode=none" width="3000" height="4000"`,
        title: "Costelinha",
        description: "Não esqueca de postar e nos marcar no instagram",
        price: "22,90",
        style: "50% 50%",
    },
];

window.onload = () => {
    const containerMain = document.querySelector(".container.main");
    const containerDrink = document.querySelector(".container.drink");
    const containerDesert = document.querySelector(".container.desert");

    for (let i = 0; i < foodMain.length; i++) {
        containerMain.innerHTML += `
                <button id="${"main00"}-selected${
            i + 1
        }" class="order-button" onclick="selectOrder(this)">
                    <div class="food-container">
                        <img style="object-position: ${
                            foodMain[i].style
                        }" src=${foodMain[i].url} height="4160" />
                        <h3 class="${"main00"}-order">${foodMain[i].title}</h3>
                        <p class="food-description">${
                            foodMain[i].description
                        }</p>
                        <div class="flex">
                            <p class="${"main00"}-price">${
            foodMain[i].price
        }</p>
                            <ion-icon id="${"main00"}${
            i + 1
        }" name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                </button> 
                    </div>
                </button>`;
    }

    for (let i = 0; i < foodDrink.length; i++) {
        containerDrink.innerHTML += `
                <button id="${"drink0"}-selected${
            i + 1
        }" class="order-button" onclick="selectOrder(this)">
                    <div class="food-container">
                        <img style="object-position: ${
                            foodDrink[i].style
                        }" src=${foodDrink[i].url} height="4160" />
                        <h3 class="${"drink0"}-order">${foodDrink[i].title}</h3>
                        <p class="food-description">${
                            foodDrink[i].description
                        }</p>
                        <div class="flex">
                            <p class="${"drink0"}-price">${
            foodDrink[i].price
        }</p>
                            <ion-icon id="${"drink0"}${
            i + 1
        }" name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                </button> <!-- MODELO DE PEDIDO EM CADA SESSÃO -->
                    </div>
                </button>`;
    }

    for (let i = 0; i < foodDesert.length; i++) {
        containerDesert.innerHTML += `
                <button id="${"desert"}-selected${
            i + 1
        }" class="order-button" onclick="selectOrder(this)">
                    <div class="food-container">
                        <img style="object-position: ${
                            foodDesert[i].style
                        }" src=${foodDesert[i].url} height="4160" />
                        <h3 class="${"desert"}-order">${
            foodDesert[i].title
        }</h3>
                        <p class="food-description">${
                            foodDesert[i].description
                        }</p>
                        <div class="flex">
                            <p class="${"desert"}-price">${
            foodDesert[i].price
        }</p>
                            <ion-icon id="${"desert"}${
            i + 1
        }" name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                </button> <!-- MODELO DE PEDIDO EM CADA SESSÃO -->
                    </div>
                </button>`;
    }
};
