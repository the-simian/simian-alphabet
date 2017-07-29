
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

  console.log(svg)

  console.log(letters)



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

  letters.map((letter, index) => {
    let _beams = svg.selectAll(`.beam-${index}`).data(letter.beams)
    let _beamsEnter =
      _beams
      .enter()
      .append('g')
      .attr('class', `beam-${index}`)
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

    let _runes = svg.selectAll(`.rune-${index}`).data(letter.runes)

    let _runesEnter = _runes
      .enter()
      .append('g')
      .attr('class', `rune-${index}`)
      .attr('transform', (d) => `translate(${(index*kerning) + pad},${letterHeight + pad})`)

    _runesEnter
      .append('circle')
      .attr('r', `${unit/4}`)
      .attr('fill', (d, i) => `rgba(${i * 10},${255},${255},0.8)`)
      .attr('opacity', 0)
      .transition()
      .delay((d, i) => {
        return ((letterDelay / 2) / letter.runes.length) * i
      })
      .attr('opacity', 1)

    _runesEnter
      .transition()
      .delay((d, i) => {
        return ((letterDelay) / letter.runes.length) * i
      })
      .duration((letterDelay) / letter.runes.length)
      .attr('transform', (d) => `translate(${d.x + (index*kerning) + pad},${d.y + pad})`)

    _runes.exit().remove();
  })

}


function alphabetize(word){

  console.log(word)

  let _name = word.split('').map((char) => {
    return simianfont[char]
  });

  let makeLetters = [];

  function drawChars(elapsed){
    if (_name.length) {
      makeLetters.push(_name.shift())
      update(makeLetters)
    }
  }

  d3.interval(drawChars, letterDelay)
}


export default alphabetize;

export {alphabetize}
