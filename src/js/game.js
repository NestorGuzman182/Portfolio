export class TicTacToeGame {
    constructor() {
        this.board = Array(9).fill("");
        this.currentPlayer = 'X';
    }

    init() {
        this.cells = document.querySelectorAll(".board__cell");
        this.resultDiv = document.getElementById("result");
        this.boardContainer = document.querySelector(".board");
        this.cells.forEach(cell => cell.addEventListener("click", (event) => this.handleCellClick(event)));
    }

    handleCellClick(event) {
        const index = event.target.dataset.index;

        if (!this.board[index] && !this.boardContainer.classList.contains("disabled") && this.currentPlayer === "X") {
            this.board[index] = this.currentPlayer;
            event.target.innerHTML = '<i class="fa fa-times"></i>';
            event.target.classList.add("x");

            if (!this.checkWinner()) {
                this.currentPlayer = "O";
                setTimeout(() => this.cpuMove(), 700)
            }
        }
    }

    cpuMove() {
        const bestMove = this.getBestMove();

        if (bestMove !== null) {
            this.board[bestMove] = "O";
            this.cells[bestMove].innerHTML = '<i class="far fa-circle"></i>';
            this.cells[bestMove].classList.add("o");
            this.checkWinner();
            this.currentPlayer = "X";
        }
    }

    getBestMove() {
        const emptyCells = this.board.map((cell, i) => (cell === "" ? i : null)).filter(i => i !== null);

        for (let index of emptyCells) {
            this.board[index] = "O";
            if (this.checkWinningMove("O")) {
                this.board[index] = "";
                return index;
            }
            this.board[index] = "";
        }

        for (let index of emptyCells) {
            this.board[index] = "X";
            if (this.checkWinningMove("X")) {
                this.board[index] = "";
                return index;
            }
            this. board[index] = "";
        }

        if (board[4] === "") return 4;

        let corners = [0, 2, 6, 8].filter(i => board[i] === "");
        if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];


        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    checkWinningMove(player) {
        const winPatterns = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
          [0, 4, 8], [2, 4, 6]            // Diagonales
        ];
        return winPatterns.some(([a, b, c]) => this.board[a] === player && this.board[b] === player && this.board[c] === player);
    }

    checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (const [a, b, c] of winPatterns) {
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.resultDiv.innerHTML = `¡Ganó ${this.board[a]}! 🎉`;
                this.boardContainer.classList.add("disabled");
                return true;
            }
        }
        if (!this.board.includes("")) {
            this.resultDiv.innerHTML = "¡Empate!";
            this.boardContainer.classList.add("disabled");
            return true;
        }
        return false;
    }

    resetGame() {
        this.board.fill("");
        this.currentPlayer = "X";
        this.resultDiv.innerHTML = "";
        console.log('board-cont 2=> ', this.boardContainer);
        this.boardContainer.classList.remove("disabled");
        this.cells.forEach(cell => {
            cell.innerHTML = "";
            cell.classList.remove("x", "o");
        });
    }

    //cells.forEach(cell => cell.addEventListener("click", this.handleCellClick));
   //.resetGame = resetGame;
}