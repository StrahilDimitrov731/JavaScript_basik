function aquarium(input) {
    let lengthInSM = Number(input[0]);
    let widthInSM = Number(input[1]);
    let heightInSM = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = lengthInSM * widthInSM * heightInSM;
    let volumeInLiters = aquariumVolume / 1000;
    let needLiters = volumeInLiters * (1 - percent / 100);

    console.log(needLiters);
}

aquarium(
    [
        "105",
        "77",
        "89",
        "18.5"
    ]
)