var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
app.get("/info", function(req,res) {
    res.sendFile(__dirname + "/info.html");
});
const port =3002
server.listen(port, () => {
    console.log('connected');
});
function matrixGenerator(matrixSize, grass, grassEater, predator, man, poisonedGrass, builder, restarter, researcher, Police) {
    var matrix = []

    for (var i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3


    }

    for (let i = 0; i < man; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4


    }


    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {

            if (i == j || i + j == matrix.length - 1) {
                matrix[i][j] = 5
            }
        }

    }


    // for (let i = 0; i < mushroom; i++) {

    //     var x = Math.floor(Math.random() * matrixSize)
    //     var y = Math.floor(Math.random() * matrixSize)

    //     matrix[y][x] = 5


    // }


    for (let i = 0; i < poisonedGrass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6

    }
    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {

            if (i == j || i + j == matrix.length > 1) {
                matrix[i][j] = 7
            }
        }

    }
    for (let i = 0; i < builder; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 8

    }

    for (let i = 0; i < restarter; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 9

    }

    for (let i = 0; i < researcher; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 10

    }
    for (let i = 0; i < Police; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 11

    }

    io.emit("send matrix", matrix)
    return matrix
}
matrix = matrixGenerator(30, 40, 5, 8, 8, 40, 7, 10, 7, 15)

grassArr = []
grassEaterArr = []
predatorArr = []
manArr = []
mushroomArr = []
poisonedGrassArr = []
barrierArr = []
builderArr = []
restarterArr = []
researcherArr = []
policeArr = []

const Grass = require("./class/grass")
const GrassEater = require("./class/grassEater")
const Predator = require("./class/predator")
const Man = require("./class/man")
const Mushroom = require("./class/mushroom")
const PoisonedGrass = require("./class/poisonedGrass")
const Barrier = require("./class/barrier")
const Builder = require("./class/builder")
const restarter = require("./class/restarter")
const Researcher = require("./class/researcher")
const Police = require("./class/police")


function CreatObj() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var ma = new Man(x, y)
                manArr.push(ma)
            }
            else if (matrix[y][x] == 5) {
                var mush = new Mushroom(x, y)
                mushroomArr.push(mush)
            } else if (matrix[y][x] == 6) {
                var poGa = new PoisonedGrass(x, y)
                poisonedGrassArr.push(poGa)
            } else if (matrix[y][x] == 7) {
                var ba = new Barrier(x, y)
                barrierArr.push(ba)
            } else if (matrix[y][x] == 8) {
                var bu = new Builder(x, y)
                builderArr.push(bu)
            } else if (matrix[y][x] == 9) {
                var re = new restarter(x, y)
                restarterArr.push(re)
            } else if (matrix[y][x] == 10) {
                var res = new Researcher(x, y)
                researcherArr.push(res)
            } else if (matrix[y][x] == 11) {
                var pol = new Police(x, y)
                policeArr.push(pol)
            }
        }

    }
    io.emit("send matrix", matrix)
}
CreatObj()
function GameMove() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }



    for (let i in predatorArr) {
        predatorArr[i].eat()
    }


    for (let f in manArr) {
        manArr[f].eat()
    }

    for (let i in poisonedGrassArr) {
        poisonedGrassArr[i].mul()
    }
    // for (let i in builderArr) {
    //     builderArr[i].destroy()
    // } 
    for (let i in researcherArr) {
        researcherArr[i].destroy()
    } for (let i in policeArr) {
        policeArr[i].arrest()
    }
    io.emit("send matrix", matrix)
}



function addChar(n) {

    console.log(n);
    let x = Math.floor(Math.random() * 30)
    let y = Math.floor(Math.random() * 30)
    matrix[y][x] = n
    if (n == 1) {
        var gr = new Grass(x, y)
        grassArr.push(gr)
    }
    else if (n == 2) {
        var grEat = new GrassEater(x, y)
        grassEaterArr.push(grEat)
    }
    else if (n == 3) {
        var pred = new Predator(x, y)
        predatorArr.push(pred)
    }
}




io.on('connection', function (socket) {

    socket.on("send button", addChar);
})

function alldatas() {
    countd = {
        grass: grassArr.length,
        grassEater: grassEaterArr.length,
        predator: predatorArr.length,
        man: manArr.length,
        mushroom: mushroomArr.length,
        poisonedGrass: poisonedGrassArr.length,
        barrier: barrierArr.length,
        builder: builderArr.length,
        restarter: restarterArr.length,
        researcher: researcherArr.length,
        police: policeArr.length,

  
    }
    fs.writeFile("state.json", JSON.stringify(countd), function () {
   io.emit("send datas", countd)
    })

}
setInterval(alldatas, 300);

setInterval(GameMove, 300)