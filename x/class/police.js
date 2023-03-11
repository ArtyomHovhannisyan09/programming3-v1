class Police {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCoordinates();
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



    destroy() {
        let emptyCell = this.chooseCell(8);
        let newCell = random(emptyCell)

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
        let newCell = random(emptyCell)

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
