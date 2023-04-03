



const socket = io()
var side = 30




let clientMatrix = []




let ses =[]
function Seson(seson){
   
 if(seson==1){
    scolors =["#e1e96b","#ffd966","#ddc785"]
 }else if(seson ==2){
    scolors =["#7c5c00","#ffc210","#fce5cd"]
 }else if(seson ==3){
    scolors =["#0087ff","#003564","#cfe2f3"]
 }else if(seson ==4){
    scolors =["#43ff00","#1a5f02","#d9ead3"]
 }else if (seson ==0) {
       scolors =["green","yellow","gray"]
 }
 ses=scolors

 return ses
}

Seson(0)

setInterval(Seson,300)
function setup() {
 

    frameRate(7)
    createCanvas(50 * side, 50 * side)

    const data = {
        labels: [
          'grass',
          'grassEater',
          'predator',
          'man',
          'mushroom',
          'poisonedGrass',
          'barrier',
          'builder',
          'restarter',
          'researcher',
          'police'
       
          
        ],
        datasets: [{
          label: 'Chart of game',
          data: [30, 40, 10, 8, 8, 40, 7, 10, 7, 15],
          backgroundColor: [
            ses[0],
            ses[1],
            'red',
            '#fce5cd',
            '#783f04',
            '#bf9e13',
            'black',
            ' #6fa8dc',
            
            'lightgreen',
            'rgb(255, 255, 255)',
            'blue'
          ],
         hoverOffset: 4
        }]
      };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#fff'
                    }
                }
            }
        }
      };
      myChart = new Chart(
        document.getElementById('myChart'),
        config
      
      );
      
}   


function ChangeColors(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        clientMatrix[y] = []
        for (let x = 0; x < matrix[y].length; x++) {
            clientMatrix[y].push(matrix[y][x])
            var tobot = side - side * 0.1
            textSize(tobot)


            if (matrix[y][x] == 1) {
                fill(ses[0])
                rect(x * side, y * side, side, side)
                text("🌿", x * side, y * side + tobot)
            } else if (matrix[y][x] == 2) {
                fill(ses[1])
                rect(x * side, y * side, side, side)
                text("😊", x * side, y * side + tobot)
            } else if (matrix[y][x] == 0) {
                fill(ses[2])
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
ButtonForAddChar[4].addEventListener("click", function () {
    socket.emit("send button", 77);
})

ButtonForAddChar[5].addEventListener("click", function () {
    socket.emit("send button", 66);
})
ButtonForAddChar[6].addEventListener("click", function () {
    socket.emit("send button", 77);
})


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

    myChart.data.datasets[0].data = [counts.grass, counts.grassEater, counts.predator, counts.man, counts.mushroom,counts.poisonedGrass,counts.barrier,counts.builder,counts.restarter,counts.researcher,counts.police];
    myChart.update();
    
   
})
const body = document.getElementsByTagName("body");


   



const BCH =document.getElementById("changeB")
const dic =document.getElementById("dico")

BCH.addEventListener("click" ,function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
  
  const btn =  document.getElementsByTagName("button")
    console.log(btn);
    document.body.style.backgroundColor="#"+randomColor;
  
  
})

