class PoisonedGrass extends LivingCreature{
    constructor(x, y) {
        super(x,y)
            this.multiply = 0
         

    }

    chooseCell(char) {
        super.getNewCoordinates();
            let found = []

            for (let i in this.directions) {
                    var x = this.directions[i][0]
                    var y = this.directions[i][1]
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                            if (matrix[y][x] == char) {
                                    found.push(this.directions[i])
                            }
                    }
            }

            return found
    }

    mul() {
            this.multiply++
            var emptyCell = this.chooseCell(0)
            var newCell = random(emptyCell)

            if (this.multiply >= 26 && newCell) {
                    var newX = newCell[0]
                    var newY = newCell[1]

                    matrix[newY][newX] = 6

                    var poGr = new PoisonedGrass(newX, newY)
                    poisonedGrassArr.push(poGr)
                    this.multiply = 0
            }

    }
}