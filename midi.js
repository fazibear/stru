(function(){
  register('tomidi', (chan, pats) => {
    return pats
      .midichan(chan)
      .midi()
  });

  window.MIDI1 = function(n) { return n.tomidi(1) }
  window.MIDI2 = function(n) { return n.tomidi(2) }
  window.MIDI3 = function(n) { return n.tomidi(3) }
  window.MIDI4 = function(n) { return n.tomidi(4) }
  window.MIDI5 = function(n) { return n.tomidi(5) }
  window.MIDI6 = function(n) { return n.tomidi(6) }
  window.MIDI7 = function(n) { return n.tomidi(7) }
  window.MIDI8 = function(n) { return n.tomidi(8) }
  window.MIDI9 = function(n) { return n.tomidi(9) }
  window.MIDI10 = function(n) { return n.mtomidi(10) }
  window.MIDI11 = function(n) { return n.mtomidi(11) }
  window.MIDI12 = function(n) { return n.mtomidi(12) }
  window.MIDI13 = function(n) { return n.mtomidi(13) }
  window.MIDI14 = function(n) { return n.mtomidi(14) }
  window.MIDI15 = function(n) { return n.mtomidi(15) }
})();
