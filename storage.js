// ===================================================================================
// --- GUAMAHAMMER MODULAR ARMY BUILDER - STORAGE MODULE ---
// ===================================================================================
// Last Updated: 2025-10-01 @ 10:15 - Created module for all save/load logic.
// This module handles saving to and loading from localStorage and local files.

const AUTOSAVE_KEY = 'guamahammer_autosave_session';

/**
 * Saves the provided application state to the browser's localStorage.
 * @param {object} state - The complete application state object.
 */
export function saveStateToLocalStorage(state) {
    try {
        const stateString = JSON.stringify(state);
        localStorage.setItem(AUTOSAVE_KEY, stateString);
        console.log("Session auto-saved to localStorage.");
    } catch (error) {
        console.error("Failed to save state to localStorage:", error);
    }
}

/**
 * Loads the application state from localStorage.
 * @returns {object|null} The parsed state object, or null if no state is found.
 */
export function loadStateFromLocalStorage() {
    try {
        const stateString = localStorage.getItem(AUTOSAVE_KEY);
        if (stateString) {
            console.log("Previous session found in localStorage.");
            return JSON.parse(stateString);
        }
    } catch (error) {
        console.error("Failed to load state from localStorage:", error);
    }
    return null;
}

/**
 * Clears any auto-saved session from localStorage.
 */
export function clearLocalStorage() {
    localStorage.removeItem(AUTOSAVE_KEY);
    console.log("Auto-saved session cleared.");
}

/**
 * Triggers a browser download of the current state as a JSON file.
 * @param {object} state - The complete application state object.
 */
export function saveStateToFile(state) {
    try {
        const armyName = state.armyListName || state.currentArmyData.ARMY_NAME || 'ArmyList';
        const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
        const filename = `${armyName.replace(/[^a-z0-9]/gi, '_')}_${date}.json`;

        const stateString = JSON.stringify(state, null, 2); // Pretty-print the JSON
        const blob = new Blob([stateString], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log(`Saving army list to file: ${filename}`);
    } catch (error) {
        console.error("Failed to save state to file:", error);
    }
}

/**
 * Reads a user-selected file and parses it into a state object.
 * @param {File} file - The file selected by the user.
 * @returns {Promise<object>} A promise that resolves with the parsed state object.
 */
export function loadFileAsState(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            return reject(new Error("No file provided."));
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const state = JSON.parse(event.target.result);
                // Basic validation to ensure it's a valid state file
                if (state && state.armyList && state.armyId) {
                    console.log("Successfully loaded and parsed army list file.");
                    resolve(state);
                } else {
                    reject(new Error("Invalid file format."));
                }
            } catch (error) {
                console.error("Error parsing file:", error);
                reject(new Error("Could not parse file. It may be corrupted."));
            }
        };
        reader.onerror = (error) => {
            console.error("Error reading file:", error);
            reject(new Error("Could not read the selected file."));
        };
        reader.readAsText(file);
    });
}
