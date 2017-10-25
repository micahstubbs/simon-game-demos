const width = 960;
const height = 500;

const margin = { top: 10, left: 10, bottom: 10, right: 10 };
const gutter = 10;

const buttonsData = [
  { color: 'green', x: 100, y: 100 },
  { color: 'red', x: 300, y: 100 },
  { color: 'yellow', x: 100, y: 300 },
  { color: 'blue', x: 300, y: 300 }
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
const xOffset = margin.left + baseSide;
const yOffset = margin.top;
const buttonSide = 100;
const buttonsG = svg
  .append('g')
  .selectAll('rect')
  .data(buttonsData)
  .enter()
  .append('rect')
  .attr('x', (d, i) => xOffset + d.x)
  .attr('y', d => yOffset + d.y)
  .attr('width', buttonSide)
  .attr('height', buttonSide)
  .style('fill', d => d.color);
