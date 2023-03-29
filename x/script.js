



const socket = io()
var side = 30




let clientMatrix = []

function setup() {
    frameRate(7)
    createCanvas(50 * side, 50 * side)


}


function ChangeColors(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        clientMatrix[y] = []
        for (let x = 0; x < matrix[y].length; x++) {
            clientMatrix[y].push(matrix[y][x])
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
                text("🤢", x * side, y * side + tobot)
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
}






socket.on("send matrix", ChangeColors)


console.log(clientMatrix);

const ButtonForAddChar = document.getElementsByClassName("   button-arounder")


ButtonForAddChar[0].addEventListener("click", function () {

    socket.emit("send button", 3);
})

ButtonForAddChar[1].addEventListener("click", function () {

    socket.emit("send button", 2);
})

ButtonForAddChar[3].addEventListener("click", function () {

    socket.emit("send button", 1);
})
ButtonForAddChar[2].addEventListener("click", function () {

    socket.emit("send button", 7);
})
// ButtonForAddChar[4].addEventListener("click", function () {

// })


// function Sesons(Seson) {

//     for (let y = 0; y < clientMatrix.length; y++) {
//         for (let x = 0; x < clientMatrix[y].length; x++) {
//            tobot=side-side*0,1
//            textSize(tobot)

//             if (1 == 1) {

//                 if (clientMatrix[y][x] == 1) {
//                     fill("#baff1e")
//                     rect(x * side, y * side, side, side)
//                     text("🌿", x * side, y * side + tobot)
//                 } else if (clientMatrix[y][x] == 2) {
//                     fill("#40f700")
//                     rect(x * side, y * side, side, side)
//                     text("😊", x * side, y * side + tobot)
//                 } else if (clientMatrix[y][x] == 0) {
//                     fill("#d6ffc8")
//                     rect(x * side, y * side, side, side)

//                 }
//             } else if (Seson == 2) {
//                 if (clientMatrix[y][x] == 1) {
//                     fill("#5c4604")
//                     rect(x * side, y * side, side, side)
//                     text("🌿", x * side, y * side + tobot)
//                 } else if (clientMatrix[y][x] == 2) {
//                     fill("#ffd799")
//                     rect(x * side, y * side, side, side)
//                     text("😊", x * side, y * side + tobot)
//                 } else if (clientMatrix[y][x] == 0) {
//                     fill("#b29362")
//                     rect(x * side, y * side, side, side)

//                 }
//             } else if (Seson == 3) {
//                 if (clientMatrix[y][x] == 1) {
//                     fill("#16537e")
//                     rect(x * side, y * side, side, side)
//                     text("🌿", x * side, y * side + tobot)
//                 } else if (clientMatrix[y][x] == 2) {
//                     fill("#cfe2f3")
//                     rect(x * side, y * side, side, side)
//                     text("😊", x * side, y * side + tobot)
//                 } else if (clientMatrix[y][x] == 0) {
//                     fill("#b29362")
//                     rect(x * side, y * side, side, side)

//                 }
//             } else if (Seson == 4) {
//                 if (clientMatrix[y][x] == 1) {
//                     fill("#fba0d0")
//                     rect(x * side, y * side, side, side)
//                     text("🌿", x * side, y * side + tobot)
//                 } else if (clientMatrix[y][x] == 2) {
//                     fill("#f4cccc")
//                     rect(x * side, y * side, side, side)
//                     text("😊", x * side, y * side + tobot)
//                 } else if (clientMatrix[y][x] == 0) {
//                     fill("#b5e89f")
//                     rect(x * side, y * side, side, side)

//                 }
//             }
//         }
//     }
// }


function summer() {

    for (let y = 0; y < clientMatrix.length; y++) {
        for (let x = 0; x < clientMatrix[y].length; x++) {
            tobot = side - side * 0, 1
            textSize(tobot)



            if (clientMatrix[y][x] == 1) {
                fill("#baff1e")
                rect(x * side, y * side, side, side)
                text("🌿", x * side, y * side + tobot)
            } else if (clientMatrix[y][x] == 2) {
                fill("#40f700")
                rect(x * side, y * side, side, side)
                text("😊", x * side, y * side + tobot)
            } else if (clientMatrix[y][x] == 0) {
                fill("#d6ffc8")
                rect(x * side, y * side, side, side)

            }
        }
    }
}

const ButtonForAddSesons = document.getElementsByClassName("button-64")
ButtonForAddSesons[0].addEventListener("click", summer)