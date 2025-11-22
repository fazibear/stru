(function(){
  window.importAll = async function(...imports) {
    for(const i in imports) {
      let url = '';
      if (typeof url !== 'string') {
        continue;
      }

      if (url.startsWith('http')) {
        path = url;
      } else if (url.startsWith('stru:')) {
        const [_, path] = url.split('stru:');
        url = 'https://stru.fazibear.me/' + path;
      } else {
        url = 'https://stru.fazibear.me/' + url;
      }
      logger('[importAll] Importing ' + url + ' ...');
      import(url)
    };
  }
})();
