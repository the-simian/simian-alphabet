import {
  letterWidth,
  letterHeight,
  halfWayWidth,
  unit
} from './lettering'




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


const s = (() => {
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

export {S, s}
