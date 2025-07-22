# Validaciòn.

Este es un cotizador que utliliza principalmente Javascript para su funcionalidad.
<div align="center">
<img src="img/Captura de pantalla (4).png" width="800">
</div>


***



## Archivos.

- `index.html`: El archivo principal HTML contiene la estructura del cotizador.

- `index.css`: El archivo CSS contiene los estilos del cotizador. (index.html)

- `cotizador.js`: El archivo Javascript es el que contiene la logistica del cotizador.

## Funcion Cotizador.

Aqui el como se valida los datos enviados:

```python
form.addEventListener('submit', async e =>{
    e.preventDefault();
    const coinSelected = [...coin.children].find((option) => option.selected).value;
    const cryptoSelected = [...crypto.children].find((option) => option.selected).value;
    const amountValue = amount.value;
    try {
        coinInfo.innerHTML =`
        <div class="loader"></div>`
     const respuesta = await (await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`)
    ).json();  
```