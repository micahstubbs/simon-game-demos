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
const offset = margin.left + baseSide + gutter;
const buttonSide = 100;
const buttonsG = svg
  .append('g')
  .selectAll('rect')
  .data(buttons)
  .enter()
  .append('rect')
  .attr('x', (d, i) => offset + (buttonSide + gutter) * i)
  .attr('y', margin.top)
  .attr('width', buttonSide)
  .attr('height', buttonSide)
  .style('fill', d => d.color);
