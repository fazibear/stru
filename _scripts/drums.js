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

      't1': 'd3',
      't2': 'c3',
      't3': 'g3',

      'cr': 'c#3',
      'ri': 'd#3',
    }
  };

  register('drums', (pats) => {
    return pats.fmap(pat => {
      return {note: DRUMS_MIDI_MAP[window.DRUMS_MIDI][pat.note] || pat.note};
    });
  });

  window.DRUMS_MIDI = 'GM';

  window.drums = function(n) {
    return note(n).drums()
  }
})();

