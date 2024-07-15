const fs = require('fs-extra');

// Async with promises:
fs.copy('.loki', 'public')
    .then(() => console.log('Files copied successfully!'))
    .catch((err) => console.error(err));
