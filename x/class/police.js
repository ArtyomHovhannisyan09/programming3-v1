let LivingCreature =require("./LivingCreature")



module.exports =class Police extends LivingCreature{
    constructor(x, y) {
        super(x,y)

     
    }
   
    chooseCell(char) {
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




        }

        return found;
    }



 arrest() {
        let emptyCell = this.chooseCell(8);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            this.minerals += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < barrierArr.length; i++) {
                if (barrierArr[i].x == newX && barrierArr[i].y == newY) {
                    barrierArr.splice(i, 1)
                    break;
                }
            }


            matrix[newY][newX] = 11;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;


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

            matrix[newY][newX] = 11;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;




        }
    }
}
