
import * as d3 from "d3";

const width = 960;
const height = 500;

const unit = 15;

const letterWidth = unit * 5;
const letterHeight = unit * 10;
const halfWayWidth = letterWidth / 2
const pad = 10;

const letterDelay = 1250;
const beamDelay = 250;

const S = (() => {
  let _runes = [{
    x: halfWayWidth,
    y: 0
  }, {
    x: 0 + unit,
    y: (letterHeight / 2) - unit
  }, {
    x: letterWidth - unit,
    y: (letterHeight / 2) + unit
  }, {
    x: letterWidth * 0.5,
    y: letterHeight
  }];
  return {
    beams: [
      [_runes[0], _runes[1]],
      [_runes[2], _runes[3]]
    ],
    runes: _runes
  };
})();

const i = (() => {
  let _runes = [{
    x: halfWayWidth,
    y: (letterHeight / 2) - unit
  }, {
    x: halfWayWidth,
    y: (letterHeight / 2) + unit
  }, {
    x: halfWayWidth,
    y: letterHeight
  }]
  return {
    beams: [
      [_runes[1], _runes[2]]
    ],
    runes: _runes
  }
})();

const m = (() => {

  let r = [{
    x: 0,
    y: letterHeight
  }, {
    x: 0,
    y: (letterHeight / 2) + unit
  }, {
    x: halfWayWidth,
    y: letterHeight
  }, {
    x: halfWayWidth,
    y: (letterHeight / 2) + unit
  }, {
    x: letterWidth,
    y: letterHeight
  }]

  return {
    beams: [
      [r[0], r[1]],
      [r[1], r[2]],
      [r[3], r[4]]
    ],
    runes: r
  }
})();


const a = (() => {

  let r = [{
    x: 0,
    y: letterHeight
  }, {
    x: 0,
    y: (letterHeight / 2) + unit
  }, {
    x: halfWayWidth,
    y: letterHeight
  }]

  return {
    beams: [
      //   [r[0], r[1]],
      [r[1], r[2]],
    ],
    runes: r
  }
})();

const n = (() => {

  let r = [{
    x: 0,
    y: letterHeight
  }, {
    x: 0,
    y: (letterHeight / 2) + unit
  }, {
    x: halfWayWidth,
    y: letterHeight
  }, {
    x: halfWayWidth,
    y: (letterHeight / 2) + unit
  }]

  return {
    beams: [
      [r[0], r[1]],
      [r[1], r[2]],
    ],
    runes: r
  }
})();

const simianfont = {
  S,
  i,
  m,
  a,
  n
}

let svg;

function update(letters) {

  svg = svg || d3.select('svg')

  console.log(svg)

  console.log(letters)

  let kerning = letterWidth * 1.1;

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
