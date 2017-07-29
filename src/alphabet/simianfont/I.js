import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'


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

export {i}
