// taken from https://github.com/switchangel/strudel-scripts/blob/main/allscripts.js
await import('https://stru.fazibear.me/fill.js')
register('trancegate', (density, seed, length, x) => {
  return x.struct(rand.mul(density).round().seg(16).rib(seed, length)).fill().clip(.7)
})
