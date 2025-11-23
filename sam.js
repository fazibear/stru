await (async function(){
  await import('https://unpkg.com/sam-js');
  function createSamSpeechDataUrl(text, options = {}) {
    const sam = new SamJs({
      singmode: false,
      pitch: 32,
      speed: 70,
      mouth: 145,
      throat: 145,
      ...options,
    });

    const wav = sam.wav(text);
    const part = new Uint8Array(wav);
    return URL.createObjectURL(new Blob([part],{type:'audio/wav'}));
  }
  window.sam = async function(sentences, options) {
    const urlMap = {};
    for(const name in sentences) {
      logger('[sam] Creating '+name+' with: '+sentences[name]);
      urlMap[name] = createSamSpeechDataUrl(sentences[name],options);
    }
    await samples(urlMap);
  }
})();
