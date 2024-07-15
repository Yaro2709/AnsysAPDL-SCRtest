const fs = require('fs');

// File "destination.txt" will be created or overwritten by default.
fs.copyFile('.loki/report.html', 'public/report.html', (err) => {
    if (err) { throw err; }
    console.log('source.txt was copied to destination.txt');
});
