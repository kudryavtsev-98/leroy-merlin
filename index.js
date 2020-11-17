var infObj = `{
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}`

class Product {

    constructor(props) {
        this.displayedName = props.displayedName;
        this.stock = props.stock;
    }

    getName() {
        //TODO: Возвращает наименование товара
        return (this.displayedName.displayedName.value[0])
    }

    getInStock() {
        //TODO: Возвращает массив номеров магазинов, в которых есть товары в наличии
        let marketArr = [];
        let regMarkets = Object.values(this.stock.stocks)[0];
        for (let key in regMarkets) {
            if (regMarkets[key] !== '0') {
                marketArr.push(key);
            }
        } 
        return marketArr;
    }

    getMax() {
        //TODO: Возвращает максимальное количество товара в регионе, вернуть это количество и номер магазина
        // Возвращает объект, содержащий 1 свойство - максимальное количество товара в регионе, значение которого представляет собой массив из номеров магазинов, имеющих данное количество товара.
        let returnObj = {};
        let regMarkets = Object.values(this.stock.stocks)[0];
        let maxQuant = 0;
        let maxMarkets = [];
        for (let market in regMarkets) {
            let quant = Number(regMarkets[market]);
            if ( quant > maxQuant) {
                maxQuant = quant;
                maxMarkets = [market];
            } else if (quant === maxQuant) {
                maxMarkets.push(market);
            }
        }
        returnObj[maxQuant] = maxMarkets;
        return returnObj;   
    }
}

const product = new Product (JSON.parse(infObj));

console.log(product.getName())

console.log(product.getInStock())

console.log(product.getMax())