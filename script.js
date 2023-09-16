// const grid = document.querySelectorAll(".item-3-grid");
// grid.forEach(function (i) {
//   i.addEventListener("click", function () {
//     i.style.backgroundColor = "#7a0000";
//   });
// });

// const last = document.querySelector(".last");
// last.addEventListener("click", () => {
//   grid.forEach(function (i) {
//     if ((i.style.backgroundColor = "#7a0000")) {
//       i.style.backgroundColor = "#00407a";
//     }
//   });
// });

const header = document.querySelector(".header");
const button = document.querySelector(".btn-mobile-nav");
button.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const squares = document.querySelectorAll(".item-3-grid");
const originalColors = [];
const clickedSquares = [];

squares.forEach((square, index) => {
  originalColors.push(square.style.backgroundColor);

  square.addEventListener("click", () => {
    square.style.backgroundColor = "#7a0000";
    clickedSquares.push(index);

    if (index === squares.length - 1) {
      clickedSquares.forEach((clickedSquareIndex, i) => {
        setTimeout(() => {
          squares[clickedSquareIndex].classList.add("reset");
          squares[clickedSquareIndex].style.backgroundColor =
            originalColors[clickedSquareIndex];

          if (i === clickedSquares.length - 1) {
            clickedSquares.length = 0;
          }
        }, i * 1000);
      });
    }
  });
});
