import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'

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

const A = (() => {

  let r = [{
    x: 0,
    y: letterHeight
  }, {
    x: 0,
    y: 0
  }, {
    x: letterWidth - unit,
    y: letterHeight
  }, {
    x: halfWayWidth - unit,
    y: (letterHeight / 2) + unit
  }]

  return {
    beams: [
      //   [r[0], r[1]],
      [r[1], r[2]],
    ],
    runes: r
  }
})();


export {a, A}
