# Validaciòn.

Este es un cotizador que utliliza principalmente Javascript para su funcionalidad.

***
<div align="center">
<img src="img/Captura de pantalla (5).png" width="800">
</div>


***
Se utiliza una API para obtener los datos a tiempo real de los cambios de las CryptoMonedas.
Cuando le das click al boton se realiza un evento de tipo 'submit' en el cual se encuentran las opciones seleccionadas y el monto ingresado luego se pintan en pantalla el precio mas alto, mas bajo, su variación en las ultimas 24 horas en que se encuentra la crypto seleccionada con la moneda que se selecciono por ultimo cuantas cryptos puedes comprar con el monto que se registro.


## Archivos.

- `index.html`: El archivo principal HTML contiene la estructura del cotizador.

- `index.css`: El archivo CSS contiene los estilos del cotizador. (index.html)

- `cotizador.js`: El archivo Javascript es el que contiene la logistica del cotizador.

## Funcion Cotizador.

Aqui el como se valida los datos enviados con los recibidos de la API:

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

     const price = respuesta.DISPLAY[cryptoSelected][coinSelected].PRICE;
```