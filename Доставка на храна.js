function foodDelivery(input) {
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegetableMenuPrice = 8.15;

    let numberChickenMenu = Number(input[0]);
    let numberFishMenu = Number(input[1]);
    let numberVegetableMenu = Number(input[2]);

    let sumChicken = numberChickenMenu * chickenMenuPrice;
    let sumFish = numberFishMenu * fishMenuPrice;
    let sumVegetable = numberVegetableMenu * vegetableMenuPrice;

    let price = sumChicken + sumFish + sumVegetable;
    let sumDesert = price * 0.20;

    let sum = price + sumDesert + 2.50;

    console.log(sum);
}

foodDelivery(
    [
        "9",
        "2",
        "6"
    ]
)