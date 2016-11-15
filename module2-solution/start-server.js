var bs = require('browser-sync').create();

bs.init({
    server: './',

});

bs.watch('*.html').on('change', bs.reload);