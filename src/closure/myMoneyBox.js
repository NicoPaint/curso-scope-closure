function moneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log(`My MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const anaMoneyBox = moneyBox();
anaMoneyBox(20);
anaMoneyBox(10);
anaMoneyBox(5);

//Otra forma de declara la funcion

function moneyBox(){
    let saveCoins = 0;

    return function countCoins(coins){
        saveCoins += coins;
        console.log(`My MoneyBox: $${saveCoins}`);
    }
}

const pedroMoneyBox = moneyBox();
pedroMoneyBox(15);
pedroMoneyBox(15);
pedroMoneyBox(15);