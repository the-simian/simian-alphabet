import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'


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


export {m}
