---
---
(function(){
  const DRUMS_MIDI_MAP = {
    'GM': {
      'bd': 'c2',
      'sd': 'd2',

      'hc': 'f#2',
      'ho': 'a#2',
      'hp': 'g#2',

      't1': 'f2',
      't2': 'g3',
      't3': 'a3',
      't4': 'b2',
      't5': 'c3',
      't6': 'd3',

      'cr': 'c#3',
      'ri': 'd#3',
      'rb': 'f3',
      'ch': 'e3',
    }
  };

  const OTHER = {
    '~~': '~',
    '~~~': '~',
    '~~~~': '~',

  }

  register('drums', (pats) => {
    return pats.fmap(pat => {
      return {note: DRUMS_MIDI_MAP[window.DRUMS_MIDI][pat.note] || OTHER[pat.note] || pat.note};
    });
  });

  window.DRUMS_MIDI = 'GM';

  window.drums = function(n) {
    return note(n).drums()
  }
})();

