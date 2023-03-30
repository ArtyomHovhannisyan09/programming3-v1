



const socket = io()
var side = 30




let clientMatrix = []

function setup() {
    frameRate(7)
    createCanvas(50 * side, 50 * side)


}


function ChangeColors(matrix) {
scolors =["green","yellow","gray"]
SumColors=["#baff1e","#40f700","#d6ffc8"]
    for (let y = 0; y < matrix.length; y++) {
        clientMatrix[y] = []
        for (let x = 0; x < matrix[y].length; x++) {
            clientMatrix[y].push(matrix[y][x])
            var tobot = side - side * 0.1
            textSize(tobot)


            if (matrix[y][x] == 1) {
                fill(scolors[0])
                rect(x * side, y * side, side, side)
                text("🌿", x * side, y * side + tobot)
            } else if (matrix[y][x] == 2) {
                fill(scolors[1])
                rect(x * side, y * side, side, side)
                text("😊", x * side, y * side + tobot)
            } else if (matrix[y][x] == 0) {
                fill(scolors[2])
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





socket.on ("send datas", function(counts){
    
    document.getElementById("grass").innerHTML = counts.grass;
    document.getElementById("grassEater").innerHTML = counts.grassEater;
    document.getElementById("predator").innerHTML = counts.predator;
    document.getElementById("man").innerHTML = counts.man;
    document.getElementById("mushroom").innerHTML = counts.mushroom;
    document.getElementById("poisonedGrass").innerHTML = counts.poisonedGrass;
    document.getElementById("barrier").innerHTML = counts.barrier;
    document.getElementById("builder").innerHTML = counts.builder;
    document.getElementById("restarter").innerHTML = counts.restarter;
    document.getElementById("researcher").innerHTML = counts.researcher;
    document.getElementById("police").innerHTML = counts.police;

   
    
   
})
