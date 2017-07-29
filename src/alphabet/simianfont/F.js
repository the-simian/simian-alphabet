import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'

const f = (() => {

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

const F = (() => {

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


export {F, f}
