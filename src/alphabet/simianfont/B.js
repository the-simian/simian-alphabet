import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'

const b = (() => {

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

const B = (() => {

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


export {B, b}
