(function(){
  window.importAll = async function(...imports) {
    for(const i of imports) {
      let url = '';
      if (typeof i !== 'string') {
        continue;
      }
      if (i.startsWith('http')) {
        url = i;
      } else if (i.startsWith('stru:')) {
        const [_, path] = i.split('stru:');
        url = 'https://stru.fazibear.me/' + path;
      } else {
        url = 'https://stru.fazibear.me/' + i;
      }
      logger('[importAll] Importing ' + url + ' ...');
      await import(url)
    };
  }
})();
