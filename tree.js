/* eslint-disable */

// const d3 = require('d3');
// import * as d3 from './d3/d3';
// import * as flare from './flare';


document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  //  ----- creates svg/canvas -----
  const svg = d3.select('body')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 1000)
    .append('g')
    .attr('transform', 'translate(50, 50)');
  //  ----- create svg ends -----


  // heirarchy replaces tree.layout aka this creates the root
  // still would have to create layout, but it's 2 step process in d3v5
  const root = d3.hierarchy(flare);  
  console.log(root);
  // console.log(root.data.children[0].name);
  // console.log(root.leaves());

  //  ----- this creates the tree layout -----
  //  which generates x, y coordinate
  let tree = d3.tree()
    .size([900, 900]);
  tree(root);  // have to invoke it to get the x, y coordinates
  //  ----- tree layout ends ----- 


  //  ----- this creates the nodes
  const nodes = root.descendants();
  console.log(nodes);

  const node = svg.selectAll('.node')
    .data(nodes)
    .enter()
    .append('g')
    .attr('class', 'node')
    // .attr('cx', (d) =>  d.x )
    // .attr('cy', (d) =>  d.y )
    // .attr('transform', (d) => {
    //   return  'translate(' + d.x + ',' + d.y + ')' 
    //   })
    .attr('transform', (d) => {
      return `translate(${(d.x)}, ${(d.y)})` 
      })
    // if using transform, then we need to manipulate the text spacing somehow

  node.append('circle')
    .attr('r', 5)
    // .attr('fill', 'steelblue')
    // .attr('cx', (d) =>  d.x )
    // .attr('cy', (d) =>  d.y );

  node.append('text')
    .text((d) => {
      // console.log(d.data.name);
      return d.data.name;
    })
    .attr('x', 10)
    .attr('y', 3);
    // .attr('x', (d) =>  d.x + 12 )
    // .attr('y', (d) =>  d.y );


  
  //  ----- create nodes ends -----


  // ----- this creates the links -----
  const links = root.links();
  console.log(links)

  const link = svg.selectAll('.link')
    .data(links)
    .join('path')
    .attr('class', 'link')

    .attr('d', d3.linkVertical()
      .x(d => d.x)
      .y(d => d.y))
    // below are jus styling
    // bc the curve line is made w/ 2 parallel lines & curved between, use none
    .attr("fill", "none") 
    // .attr("stroke", "#e8e888")
    // stroke dictates the color of the curve
    // .attr("stroke", "green")
    // .attr("stroke-opacity", 0.4)
    // .attr("stroke-width", 1.5)
  // ---------- path links above ----------


  

});

console.log('hello world');
// console.log(flare);
// export default tree;
