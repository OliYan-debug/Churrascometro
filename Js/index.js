const $form = document.querySelector("#form");
const $result = document.querySelector("#result");

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    $result.innerHTML = '';
    let adults = parseInt(document.querySelector('#adults').value);
    let children = parseInt(document.querySelector('#children').value);
    let hours = parseInt(document.querySelector('#hours').value);
    let timeLimit = 6;
    let meatForPerson = 0.4;
    let beersForPerson = 1.2;
    let waterOrSodaForPerson = 1;
    if(hours < timeLimit){
        let meat = (adults * meatForPerson) + (children * (meatForPerson / 2));
        let beer = adults * beersForPerson;
        let waterOrSoda = (adults * waterOrSodaForPerson) + (children * (waterOrSodaForPerson / 2));

        $result.innerHTML =  `

            <p>Carne: Precisa de ${meat.toFixed(2)}kg </p>
            <p>Cervejas: Precisa de ${beer.toFixed(2)} litros </p>
            <p>Bebidas: Precisa de  ${waterOrSoda.toFixed(2)} litros </p>
        
        `;
    }else{
        meatForPerson = 0.65;
        beersForPerson = 2;
        waterOrSodaForPerson = 1.5;
        let meat = (adults * meatForPerson) + (children * (meatForPerson / 2));
        let beer = adults * beersForPerson;
        let waterOrSoda = (adults * waterOrSodaForPerson) + (children * (waterOrSodaForPerson / 2));

        $result.innerHTML =  `

            <p>Carne: Precisa de ${meat.toFixed(2)}kg </p>
            <p>Cervejas: Precisa de ${beer.toFixed(2)} litros </p>
            <p>Bebidas: Precisa de  ${waterOrSoda.toFixed(2)} litros </p>
        
        `;
    }

} )