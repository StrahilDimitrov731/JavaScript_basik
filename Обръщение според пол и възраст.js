function genderAddress(input) {
    let year = Number(input[0]);
    let gender = input[1];

    switch (gender) {
        case "m":
            if (year >= 16) {
                console.log("Mr.");
            }
            else {
                console.log("Master");
            }
            break;
        case "f":
            if (year >= 16) {
                console.log("Ms.");
            }
            else {
                console.log("Miss")
            }
            break;
    }
}

genderAddress(
    [
        "13.5",
        "m"
    ]
)