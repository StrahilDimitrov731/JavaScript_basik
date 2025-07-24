function calculatorDeposit(input) {
    let depositeSum = Number(input[0]);
    let monthDeposite = Number(input[1]);
    let yearPercent = Number(input[2]);

    let accruedInterest = depositeSum * yearPercent / 100;
    let accruedInterestPerMonth = accruedInterest / 12;
    let sum = depositeSum + monthDeposite * accruedInterestPerMonth;

    console.log(sum);
}

calculatorDeposit(
    [
        "2350",
        "6",
        "7"
    ]
)