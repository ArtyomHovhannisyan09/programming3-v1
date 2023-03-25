
// function matrixGenerator(matrixSize, grass, grassEater, predator, man, poisonedGrass, builder, restarter, researcher, Police) {
//     var matrix = []

//     for (var i = 0; i < matrixSize; i++) {
//         matrix.push([])
//         for (j = 0; j < matrixSize; j++) {
//             matrix[i].push(0)

//         }
//     }


//     for (let i = 0; i < grass; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 1

//     }

//     for (let i = 0; i < grassEater; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2

//     }



//     for (let i = 0; i < predator; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3


//     }

//     for (let i = 0; i < man; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4


//     }


//     for (let i = 0; i < matrixSize; i++) {
//         for (let j = 0; j < matrixSize; j++) {

//             if (i == j || i + j == matrix.length - 1) {
//                 matrix[i][j] = 5
//             }
//         }

//     }


//     // for (let i = 0; i < mushroom; i++) {

//     //     var x = Math.floor(Math.random() * matrixSize)
//     //     var y = Math.floor(Math.random() * matrixSize)

//     //     matrix[y][x] = 5


//     // }


//     for (let i = 0; i < poisonedGrass; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 6

//     }
//     for (let i = 0; i < matrixSize; i++) {
//         for (let j = 0; j < matrixSize; j++) {

//             if (i == j || i + j == matrix.length > 1) {
//                 matrix[i][j] = 7
//             }
//         }

//     }
//     for (let i = 0; i < builder; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 8

//     }

//     for (let i = 0; i < restarter; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 9

//     }

//     for (let i = 0; i < researcher; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 10

//     }
//     for (let i = 0; i < Police; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 11

//     }


//     return matrix
// }







// var matrix = matrixGenerator(30, 40, 5, 8, 8, 40, 7, 10, 7, 15)
var side = 30


// var grassArr = []
// var grassEaterArr = []
// var predatorArr = []
// var manArr = []
// var mushroomArr = []
// var poisonedGrassArr = []
// var barrierArr = []
// var builderArr = []
// var restarterArr = []
// var researcherArr = []
// var policeArr = []



function setup() {
    frameRate(7)
    createCanvas(matrix[0].length * side, matrix.length * side)

    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {

    //         if (matrix[y][x] == 1) {
    //             var gr = new Grass(x, y)
    //             grassArr.push(gr)
    //         } else if (matrix[y][x] == 2) {
    //             var grEat = new GrassEater(x, y)
    //             grassEaterArr.push(grEat)
    //         } else if (matrix[y][x] == 3) {
    //             var pred = new Predator(x, y)
    //             predatorArr.push(pred)
    //         } else if (matrix[y][x] == 4) {
    //             var ma = new Man(x, y)
    //             manArr.push(ma)
    //         }
    //         else if (matrix[y][x] == 5) {
    //             var mush = new Mushroom(x, y)
    //             mushroomArr.push(mush)
    //         } else if (matrix[y][x] == 6) {
    //             var poGa = new PoisonedGrass(x, y)
    //             poisonedGrassArr.push(poGa)
    //         } else if (matrix[y][x] == 7) {
    //             var ba = new Barrier(x, y)
    //             barrierArr.push(ba)
    //         } else if (matrix[y][x] == 8) {
    //             var bu = new Builder(x, y)
    //             builderArr.push(bu)
    //         } else if (matrix[y][x] == 9) {
    //             var re = new restarter(x, y)
    //             restarterArr.push(re)
    //         } else if (matrix[y][x] == 10) {
    //             var res = new Researcher(x, y)
    //             researcherArr.push(res)
    //         } else if (matrix[y][x] == 11) {
    //             var pol = new Police(x, y)
    //             policeArr.push(pol)
    //         }
    //     }

    // }
}


function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            var tobot = side - side * 0.1
            textSize(tobot)


            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                text("🌿", x * side, y * side + tobot)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                text("😊", x * side, y * side + tobot)
            } else if (matrix[y][x] == 0) {
                fill("gray")
                rect(x * side, y * side, side, side)

            } else if (matrix[y][x] == 3) {

                fill("red")
                rect(x * side, y * side, side, side)
                text("🐕", x * side, y * side + tobot)
            }
            else if (matrix[y][x] == 4) {
                fill("#fce5cd")
                rect(x * side, y * side, side, side)
                text("👨", x * side, y * side + tobot)
            }
            else if (matrix[y][x] == 5) {
                fill("#783f04")
                rect(x * side, y * side, side, side)
                text("🍄", x * side, y * side + tobot)
            } else if (matrix[y][x] == 6) {

                fill("#bf9e13")
                rect(x * side, y * side, side, side)
                text("🦠", x * side, y * side + tobot)
            } else if (matrix[y][x] == 7) {

                fill("#111111")
                rect(x * side, y * side, side, side)
                text("🚧", x * side, y * side + tobot)
            } else if (matrix[y][x] == 8) {
                fill("#6fa8dc")
                rect(x * side, y * side, side, side)
                text("👷", x * side, y * side + tobot)
            } else if (matrix[y][x] == 9) {
                fill("#4dff00")
                rect(x * side, y * side, side, side)
                text("☢️ ", x * side, y * side + tobot)
            } else if (matrix[y][x] == 10) {
                fill("White")
                rect(x * side, y * side, side, side)
                text("🔬 ", x * side, y * side + tobot)
            } else if (matrix[y][x] == 11) {
                fill("blue")
                rect(x * side, y * side, side, side)
                text("👮 ", x * side, y * side + tobot)
            }



        }

    }

    // for (let i in grassArr) {
    //     grassArr[i].mul()
    // }

    // for (let i in grassEaterArr) {
    //     grassEaterArr[i].eat()

    // }



    // for (let i in predatorArr) {
    //     predatorArr[i].eat()
    // }


    // for (let f in manArr) {
    //     manArr[f].eat()
    // }

    // for (let i in poisonedGrassArr) {
    //     poisonedGrassArr[i].mul()
    // }
    // for (let i in builderArr) {
    //     builderArr[i].destroy()
    // } for (let i in researcherArr) {
    //     researcherArr[i].destroy()
    // } for (let i in policeArr) {
    //     policeArr[i].arrest()
    // }

   
}



function addChar(n,ob,arr) {
    let x = Math.floor(Math.random() * side)
    let y = Math.floor(Math.random() * side)
    matrix[y][x] = n
    let gr = new ob(x,y)
    arr.push(gr)
}

function reset(){
    window.location.reload();
}
