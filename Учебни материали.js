function schoolMaterails(input) {
    let pensPackagePrice = 5.80;
    let markersPackagePrice = 7.20;
    let preparationPerLiterPrice = 1.20;

    let numberPensPackage = Number(input[0]);
    let numberMarkersPackage = Number(input[1]);
    let preparationLiters = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let sumPens = numberPensPackage * pensPackagePrice;
    let sumMarkers = numberMarkersPackage * markersPackagePrice;
    let sumPreparation = preparationLiters * preparationPerLiterPrice;

    let sum = sumPens + sumMarkers + sumPreparation;
    let needSum = sum - (sum * percentDiscount / 100);

    console.log(needSum);
}

schoolMaterails(
    [
        "4",
        "2",
        "5",
        "13"
    ]
)