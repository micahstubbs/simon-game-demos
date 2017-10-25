const width = 960;
const height = 500;

const margin = { top: 10, left: 10, bottom: 10, right: 10 };
const gutter = 10;

const buttons = [
  { color: 'green' },
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

const svg = d3
  .select('body')
  .append('svg')
  .attr('height', height)
  .attr('width', width);

// draw the large square
const baseSide = 500;
svg
  .append('rect')
  .attr('x', margin.left)
  .attr('y', margin.top)
  .attr('width', baseSide)
  .attr('height', baseSide)
  .style('fill', 'black');

// draw the simon board
// composed of the 4 small squares
// which we call buttons
function squareGridLayout(data, cellSide, gutter) {
  gridSide = Math.ceil(Math.sqrt(data.length));
  console.log('gridSide', gridSide);
  let currentRow = 0;
  let rowOffset = 0;
  data.forEach((d, i) => {
    d.x = gutter + (gutter + cellSide) * (i - currentRow);
    d.y = gutter + (gutter + cellSide) * i;
    if (i % gridSide === 0) currentRow += 1;
    console.log(`i ${i} currentRow ${currentRow} mod ${i % gridSide}`)
  })
  return data;
}

const xOffset = margin.left + baseSide;

const buttonSide = 100;
const buttonsG = svg
  .append('g')
  .selectAll('rect')
  .data(squareGridLayout(buttons, buttonSide, gutter))
  .enter()
  .append('rect')
  .attr('x', (d, i) => xOffset + d.x)
  .attr('y', d => d.y)
  .attr('width', buttonSide)
  .attr('height', buttonSide)
  .style('fill', d => d.color);