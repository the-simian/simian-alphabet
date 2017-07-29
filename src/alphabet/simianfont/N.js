import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'

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

const N = (() => {

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

export {N,n}
