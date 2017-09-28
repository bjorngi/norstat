import * as d3 from 'd3';

import './accumulatedStyle.css';

import { getMaxAccumulatedSum } from '../logic';

class BarAccumulatedPerCompany {
  constructor(div, height, width) {
    this.div = div;
    this.width = width;
  }

  render(data, height, width) {
    var scale = d3.scaleLinear()
        .domain([0, getMaxAccumulatedSum(data).akkumulertSum])
        .range([0, width]);

    const sortedData = data.sort((a, b) => {
      return b.akkumulertSum - a.akkumulertSum ;
    });

    const t1 = d3.select(this.div)
      .selectAll("div")
      .data(sortedData)
      .enter()
      .append("div")
      .attr("class", "background")
      .on("mouseover", (d) => {
        d3.select(this)
          .style("opacity", 0.1)
      });


    t1
      .append("div")
      .attr("class", "text")
      .text((d) => { return `${d.stottemottakerNavn} (${d.akkumulertSum} kr.)`; });

    t1
      .append("div")
      .attr("class", "bar")
      .style("width", function(d) {
        return scale(d.akkumulertSum) + "px";
      })
      .style("height", "2em")
  }
}

export default BarAccumulatedPerCompany;
