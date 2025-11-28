---
---
(function(){
  const MIDI_DRUMS = {
    'GM': {
      'bd': 'c2',
      'sd': 'd2',

      'hhc': 'f#2',
      'hho': 'a#2',
      'hhp': 'g#2',

      't1': 'd3',
      't2': 'c3',
      't3': 'g3',

      'crash': 'c#3',
      'ride': 'd#3',
    }
  };

  register('drums', (pats) => {
    return pats.fmap(pat => {
      return {note: MIDI_DRUMS['GM'][pat.note] || pat.note};
    });
  });

  window.drums = function(n) {
    return note(n).ssd()
  }
})();

