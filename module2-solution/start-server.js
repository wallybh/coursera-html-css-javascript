var bs = require('browser-sync').create();

bs.init({
    server: './',

});

bs.watch(['*.html','*/*.css']).on('change', bs.reload);