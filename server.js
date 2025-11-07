// ===================================================================================
// --- GUAMAHAMMER PERSISTENT SERVER (server.js) ---
// --- Handles file I/O for Admin Editor and serves static content ---
// ===================================================================================
const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const os = require('os');
const url = require('url');

const app = express();
const PORT = process.env.PORT || 8080; // Use environment port for deployment

// --- Middleware ---
// Allows Express to read JSON data from POST requests.
app.use(express.json()); 
// Serves all your static files (index.html, main.js, /armies folder, etc.) from the root directory.
app.use(express.static(path.join(__dirname))); 

// --- API Routes ---

/**
 * [POST] /api/save-army
 * Handles saving the entire army data object back to its respective .js file.
 * This enables the Admin Editor's functionality.
 */
// server.js

// REPLACE the entire app.post('/api/save-army', ...) route
app.post('/api/save-army', async (req, res) => {
    try {
        // The client now sends the factionId and the pre-formatted content
        const { factionId, fileContent } = req.body;

        if (!factionId || !fileContent) {
            return res.status(400).json({ message: 'Faction ID or file content is missing.' });
        }
        
        // --- THIS IS A CRITICAL FIX FOR SAVING comun.js ---
        // Determine the correct file path. 'comun' is a special case.
        let filePath;
        if (factionId === 'comun') {
            // It saves to the root directory
            filePath = path.join(__dirname, 'comun.js'); 
        } else {
            // All other armies save to the /armies/ directory
            filePath = path.join(__dirname, 'armies', `${factionId}.js`);
        }

        // The fileContent is already perfectly formatted by the client,
        // so we just write it directly.
        await fs.writeFile(filePath, fileContent);

        console.log(`Successfully saved ${factionId}.js to ephemeral storage.`);
        return res.status(200).json({ message: `${factionId} saved successfully.` });

    } catch (error) {
        console.error("Error saving file:", error);
        return res.status(500).json({ message: `Error saving file: ${error.message}` });
    }
});

/**
 * [GET] /api/get-army
 * Handles loading army data by reading the .js file and parsing it into a JSON object.
 * This powers the Army Builder's (main.js) data loading.
 */
app.get('/api/get-army', async (req, res) => {
    const { faction: factionId } = req.query; // Use factionId for consistency
    if (!factionId) {
        return res.status(400).json({ message: 'Faction ID is required.' });
    }

    const commonItemsFilePath = path.join(__dirname, 'comun.js');
    const armyFilePath = path.join(__dirname, 'armies', `${factionId}.js`);

    try {
        // --- SPECIAL CASE: Client is asking for the common magic items directly ---
        if (factionId === 'comun') {
            const commonContent = await fs.readFile(commonItemsFilePath, 'utf-8');
            // Dynamically import the content directly, without creating a temp file
            const commonModule = await import(`data:text/javascript,${encodeURIComponent(commonContent)}`);
            
            // The admin editor expects data in a consistent format. 
            // We wrap the named export into a structure the editor understands.
            const responseData = {
                magicItemsDB: commonModule.commonMagicItemsDB,
                // Add FACTION_ID so the editor knows what it has loaded
                FACTION_ID: 'comun' 
            };
            return res.json(responseData);
        }

        // --- STANDARD CASE: Client is asking for a normal army file ---
        let armyFileContent = await fs.readFile(armyFilePath, 'utf-8');

        // To make the file runnable in Node.js, we can't have the browser-style import.
        // Instead of deleting the line, we replace it with a harmless variable declaration.
        // This is more robust than the old regex.
        armyFileContent = armyFileContent.replace(/import.*?from '..\/comun.js';/, 'const commonMagicItemsDB = {};');

        // Dynamically import the modified army file content
        const armyModule = await import(`data:text/javascript,${encodeURIComponent(armyFileContent)}`);
        const armyData = armyModule.default; // This is the main army object

        // Now, load the REAL common items and attach them for the editor's filtering logic
        const commonItemsContent = await fs.readFile(commonItemsFilePath, 'utf-8');
        const commonModule = await import(`data:text/javascript,${encodeURIComponent(commonItemsContent)}`);
        
        // This key 'COMMON_MAGIC_ITEMS' is used by the editor to know which items are shared
        armyData.COMMON_MAGIC_ITEMS = commonModule.commonMagicItemsDB;

        res.json(armyData);

    } catch (error) {
        console.error(`Error processing file for faction: ${factionId}`, error);
        return res.status(500).json({ message: `Server error while processing file for ${factionId}.` });
    }
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});