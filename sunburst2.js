/* eslint-disable */



var radius = 150;

// -----------

var partitionLayout = d3.partition()
  .size([2 * Math.PI, radius]);

  var rootNode = d3.hierarchy(flare)
console.log('rootnode descendants: ', rootNode.descendants());
rootNode.sum(function(d) {
  return d.value;
});
partitionLayout(rootNode);

// -----------

var arcGenerator = d3.arc()
  .startAngle(function(d) { return d.x0; })
  .endAngle(function(d) { return d.x1; })
  .innerRadius(function(d) { return d.y0; })
  .outerRadius(function(d) { return d.y1; });



const width = 932;

const svg = d3.select('body')
  .append('svg')
  .attr("viewBox", [0, 0, width, width])
  .style("font", "10px sans-serif");

const g = svg.append("g")
  .attr("transform", `translate(${width / 2},${width / 2})`);

const path = g.append('g')
  .selectAll('path')
  .data(rootNode.descendants())
  .enter()
  .append('path')
  .attr('d', arcGenerator);