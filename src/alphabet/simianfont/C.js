import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'

const c = (() => {

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

const C = (() => {

  let r = [{
    x: letterWidth - unit,
    y: 0
  }, {
    x: 0 + unit,
    y: (letterHeight / 2)
  },{
    x: letterWidth - unit,
    y: letterHeight
  }]

  return {
    beams: [
      [r[0], r[1]],
      [r[1], r[2]],
    ],
    runes: r
  }
})();


export {C, c}
