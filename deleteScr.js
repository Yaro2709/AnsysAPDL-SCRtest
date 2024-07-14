const fs = require('fs').promises;
const path = require('path');

async function removeAllFilesAsync(directory) {
    const files = await fs.readdir(directory);

    // eslint-disable-next-line no-restricted-syntax
    for (const file of files) {
        const filePath = path.join(directory, file);
        const fileExtension = path.extname(file).toLowerCase();
        if (fileExtension === '.jpg' || fileExtension === '.png') {
            // eslint-disable-next-line no-await-in-loop
            await fs.unlink(filePath);
        }
    }
}

// Call the function
removeAllFilesAsync('src/entities/AnsysProject/Project')
    .then(() => console.log('All files have been removed asynchronously.'))
    .catch(console.error);
