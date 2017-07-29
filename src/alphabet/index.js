import * as d3 from "d3";

import {
  kerning,
  unit,
  letterHeight
} from './simianfont/lettering'

import simianfont from './simianfont'

const width = 960;
const height = 500;
const pad = 10;
const letterDelay = 1250;
const beamDelay = 250;

let svg;

function update(letters) {

  svg = svg || d3.select('svg')

  function connectDots(d, index) {
    return d3
      .line()
      .x((d, i) => {
        return (d.x + pad) + (index * kerning)
      })
      .y((d, i) => {
        return (d.y + pad)
      })
  }

  let _letters = svg.selectAll('.letter').data(letters)


  let _letterEnter = _letters
    .enter()
    .append('g')
    .attr('class', 'letter');

  _letters.exit().remove()


  function letterToShape(letter, index){

    let _this = d3.select(this);


    let _runes = _this.selectAll('.rune').data(letter.runes)


    _runes
        .attr('fill', (d, i) => `rgba(${10},${255},${255},0.8)`)

    _runes
        .enter()
        .append('circle')
        .attr('class', `rune`)


    _runes.attr('class', `rune`)

    let _runesEnter = _runes
      .enter()
        .append('g')
          .attr('class', `rune`)

      _runesEnter
          .append('circle')
            .attr('r', `${unit/4}`)
            .attr('fill', (d, i) => `rgba(${10},${255},${255},0.8)`)
            .attr('opacity', 0)
            .transition()
            .delay((d, i) => {return ((letterDelay / 2) / letter.runes.length) * i})
            .attr('opacity', 1)

      _runesEnter
          .merge(_runes)
          .attr('transform', (d) => `translate(${(index*kerning) + pad},${letterHeight + pad})`)
          .transition()
          .delay((d, i) => {return ((letterDelay) / letter.runes.length) * i})
          .duration((letterDelay) / letter.runes.length)
          .attr('transform', (d) => `translate(${d.x + (index*kerning) + pad},${d.y + pad})`)

      _runes
        .transition()
        .delay((d, i) => {return ((letterDelay) / letter.runes.length) * i})
        .duration((letterDelay) / letter.runes.length)
        .attr('transform', (d) => `translate(${d.x + (index*kerning) + pad},${d.y + pad})`)

    _runes.exit().transition().attr('opacity', 0).remove()

    let _beams = _this.selectAll(`.beam`).data(letter.beams);

    let _beamsEnter = _beams
      .enter()
      .append('g')
      .attr('class', `beam`)
      .append('path')
      .attr('d', connectDots(letter.beams, index))
      .style('strike-width', 2)
      .style("stroke", (d, i) => `rgba(${255},${255},${255},0.8)`)
      .style("fill", "none")
      .style('opacity', 0)

    _beamsEnter
      .transition()
      .delay((d, i) => {
        return letterDelay + (i * beamDelay)
      })
      .duration(beamDelay)
      .style('opacity', 1)

    _beams.exit().remove()

  }

  _letterEnter.each(letterToShape);

}

function alphabetize(word) {
  let _name = word.split('').map((char) => {
    return simianfont[char];
  });
  update(_name);
}


export default alphabetize;

export {
  alphabetize
}
