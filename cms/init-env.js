const fs = require('fs');

const envFilePath = './.env';
const envExampleFilePath = './.env.example';

// Check if the .env file exists
if (!fs.existsSync(envFilePath)) {
    // If it doesn't exist, create it
    fs.writeFileSync(envFilePath, '');
}

// Read the contents of the .env.example file
const envExampleContent = fs.readFileSync(envExampleFilePath, 'utf8');

// Write the contents of the .env.example file to the .env file
fs.writeFileSync(envFilePath, envExampleContent);

