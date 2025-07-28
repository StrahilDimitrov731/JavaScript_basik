function figuresArea(input){
    let figuresType = input[0];
    let area = 0;

    if(figuresType == "square"){
        let size = Number(input[1]);
        area = size * size;
    }
    else if(figuresType == "rectangle"){
        let sizeA = Number(input[1]);
        let sizeB = Number(input[2]);
        area = sizeA * sizeB;
    }
    else if(figuresType == "circle"){
        let radius = Number(input[1]);
        area = Math.PI * radius * radius;
    }
    else if(figuresType == "triangle"){
        let size = Number(input[1]);
        let heigth = Number(input[2]);
        area = 1/2 * size * heigth;
    }

    console.log(area.toFixed(3));
}

figuresArea(
    [
        "square",
        "5",
    ]
)