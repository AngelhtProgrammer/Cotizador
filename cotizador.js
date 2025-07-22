// Selectores

const form = document.querySelector('#coinForm')
//  console.log(form);
const coin = document.querySelector('#coin')
// console.log(coin);
const crypto = document.querySelector('#crypto')
// console.log(crypto);
const amount = document.querySelector('#amount')
//  console.log(amount)
const coinInfo = document.querySelector('#coinInfo')


// form.addEventListener('input', e =>{      validar a tiempo real en input
//     console.log(e.target.value);
    
// })
form.addEventListener('submit', async e =>{
    e.preventDefault();                              //  [...] operador de propagacion
    const coinSelected = [...coin.children].find((option) => option.selected).value;
    const cryptoSelected = [...crypto.children].find((option) => option.selected).value;
    const amountValue = amount.value;
    try {
        coinInfo.innerHTML =`
        <div class="loader"></div>`
     const respuesta = await (await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`)
    ).json();   //El fetch devuelve una respuesta de la API     .json convierte los datos en un objeto de javascript

    // [] son dinamicas(variables)

     const price = respuesta.DISPLAY[cryptoSelected][coinSelected].PRICE;
     const higher = respuesta.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR;
     const lower = respuesta.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR;
     const variation = respuesta.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR;
     

    //    console.log(price);
// console.log(price, '\n' , higher,'\n', lower,'\n', variation,'%','\n',amountValue / priceNumber);

           if (amountValue != '') {
             const result = Number(amountValue) / respuesta.RAW[cryptoSelected][coinSelected].PRICE;
               coinInfo.innerHTML = ` <p class="info">El precio es de: <span class="price">${price}</span></p>
                    <p class="info">El precio mas alto es de: <span class="price">${higher}</span></p>
                    <p class="info">El precio mas bajo es de: <span class="price">${lower}</span></p>
                    <p class="info">Variación 24h: <span class="price">${variation} %</span></p>
                    <p class="info">Puede comprar: <span class="price">${result.toFixed(4)} ${cryptoSelected}</span></p>
                    `;
                   
                    // console.log(price, '\n' , higher,'\n', lower,'\n', variation,'%','\n', result);
                   
           } else {
               coinInfo.innerHTML = ` <p class="info">El precio es de: <span class="price">${price}</span></p>
                    <p class="info">El precio mas alto es de: <span class="price">${higher}</span></p>
                    <p class="info">El precio mas bajo es de: <span class="price">${lower}</span></p>
                    <p class="info">Variación 24h: <span class="price">${variation} %</span></p>
                    `;
           }

    } catch(error) {
        console.log(error);
    }
    // console.log(coinSelected, cryptoSelected, amountValue);
    
})

//  console.log(price, '\n' , higher,'\n', lower,'\n', variation,'%','\n', result);


// let https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR

//Objetos
// clave = a:
// valor = [a]



//   console.log(respuesta.DISPLAY[cryptoSelected][coinSelected].PRICE);   // [] son dinamicas(variables)
    //   console.log(respuesta.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR);
    //   console.log(respuesta.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR);
    //   console.log(respuesta.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR);