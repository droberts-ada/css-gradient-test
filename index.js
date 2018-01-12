const ROWS = 30;
const COLS = 30;

const COLORS = [
  "darkgrey",
  "darkgoldenrod",
  "darkorange",
  "darkgreen",
  "turquoise",
  "navy",
  "mediumvioletred",
  "salmon",
  "red",
];

const render = function render(mouseRow, mouseCol) {
  const renderStartTime = window.performance.now();
  requestAnimationFrame(() => {
    const delta = window.performance.now() - renderStartTime;
    console.log(`render to RAF: ${delta} ms`);
  });

  // console.log(`Rendering ${mouseRow}-${mouseCol}`);
  const main = $('#main');
  main.empty();
  for (let r = 0; r < ROWS; r++) {
    const row = $('<div class="row"></div>');
    for (let c = 0; c < COLS; c++) {
      let color;
      if (r == mouseRow && c == mouseCol) {
        color = 'selected';
      } else {
        color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }
      const square = $(`<div class="square ${color}"></div>`);
      square.on('click', (e) => render(r, c));
      row.append(square);
    }
    main.append(row);
  }

  const delta = window.performance.now() - renderStartTime;
  console.log(`render top to bottom: ${delta} ms`);
};

$(document).ready(() => {
  $('#switch-styles').on('click', (e) => {
    const main = $('#main');
    main.toggleClass('gradient');
    main.toggleClass('solid');
  });
  render();
});
