import fs from 'fs-extra';
import Papa from 'papaparse';

const csvFilePath = './public/data/Complaints.csv';
const jsonFilePath = './src/data/officerData.json';

// Function to convert CSV to JSON
const generateJSONFromCSV = () => {
    const csvFile = fs.readFileSync(csvFilePath, 'utf-8');
    Papa.parse(csvFile, {
        header: true,
        complete: (result) => {
            const jsonData = result.data;
            fs.writeJsonSync(jsonFilePath, jsonData, { spaces: 2 });
            console.log('CSV data successfully converted to JSON');
        },
        error: (error) => {
            console.error('Error parsing CSV file:', error);
        },
    });
};

// Generate the JSON file
generateJSONFromCSV();
