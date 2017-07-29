import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'

const r = (() => {

  let r = [{
    x: 0,
    y: letterHeight
  }, {
    x: 0,
    y: (letterHeight / 2) + unit
  }, {
    x: halfWayWidth,
    y: letterHeight - (unit*2)
  }]

  return {
    beams: [
      [r[0], r[1]],
      [r[1], r[2]],
    ],
    runes: r
  }
})();

const R = (() => {

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


export {R, r}
