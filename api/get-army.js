// /api/get-army.js

import fs from 'fs/promises';
import path from 'path';

// This is the handler function Vercel will run for any request to /api/get-army
export default async function handler(request, response) {
    // Vercel uses 'request.query', Express used 'req.query'
    const { faction: factionId } = request.query;

    if (!factionId) {
        // Vercel uses 'response', Express used 'res'
        return response.status(400).json({ message: 'Faction ID is required.' });
    }

    // On Vercel, process.cwd() reliably points to the project's root directory.
    const commonItemsFilePath = path.join(process.cwd(), 'comun.js');
    const armyFilePath = path.join(process.cwd(), 'armies', `${factionId}.js`);

    try {
        // --- SPECIAL CASE: Client is asking for the common magic items directly ---
        if (factionId === 'comun') {
            const commonContent = await fs.readFile(commonItemsFilePath, 'utf-8');
            const commonModule = await import(`data:text/javascript,${encodeURIComponent(commonContent)}`);
            const responseData = {
                magicItemsDB: commonModule.commonMagicItemsDB,
                FACTION_ID: 'comun'
            };
            return response.status(200).json(responseData);
        }

        // --- STANDARD CASE: Client is asking for a normal army file ---
        // This logic is copied directly from your server.js
        let armyFileContent = await fs.readFile(armyFilePath, 'utf-8');
        armyFileContent = armyFileContent.replace(/import.*?from '..\/comun.js';/, 'const commonMagicItemsDB = {};');
        
        const armyModule = await import(`data:text/javascript,${encodeURIComponent(armyFileContent)}`);
        const armyData = armyModule.default;

        const commonItemsContent = await fs.readFile(commonItemsFilePath, 'utf-8');
        const commonModule = await import(`data:text/javascript,${encodeURIComponent(commonItemsContent)}`);
        
        armyData.COMMON_MAGIC_ITEMS = commonModule.commonMagicItemsDB;

        return response.status(200).json(armyData);

    } catch (error) {
        console.error(`Error processing file for faction: ${factionId}`, error);
        return response.status(500).json({ message: `Server error while processing file for ${factionId}.` });
    }
}
