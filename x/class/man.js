let LivingCreature =require("./LivingCreature")



module.exports =class Man  extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 20;

    }
  
    chooseCell(char,charColl1) {
       super.getNewCoordinates();
        let found = [];

        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == charColl1) {
                    found.push(this.directions[i]);
                }
            }


        }

        return found;
    }
    //բազմանալ
    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell && this.energy > 5) {
            let newX = newCell[0];
            let newY = newCell[1];

            let ma = new Man(newX, newY);
            matrix[newY][newX] = 4;
            manArr.push(ma);

            this.energy = 20;
        }
    }


    //ուտել
    eat() {
        let emptyCell = this.chooseCell(3,5);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
            for (let i = 0; i < mushroomArr.length; i++) {
                if (mushroomArr[i].x == newX && mushroomArr[i].y == newY) {
                    mushroomArr.splice(i, 1)
                    break;
                }
            }
            

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;


            if (this.energy > 50) {
                this.mul()
            }
        }



        else {
            this.move()
        }
    }

    //քայլել
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }

    



    die() {
        for (let i = 0; i < manArr.length; i++) {
            if (manArr[i].x == this.x && manArr[i].y == this.y) {
                manArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

