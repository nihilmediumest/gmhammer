// ===================================================================================
// --- GUAMAHAMMER MODULAR ARMY BUILDER - PRINT MODULE ---
// ===================================================================================
// Last Updated: 2025-10-03 @ 12:30 - Refactored for new parent-child data model.
// This module is responsible for generating the HTML for the army list printout.

/**
 * Generates the HTML for a single unit card in the print view.
 */
function generatePrintUnitHtml(unit, currentArmyData) {
    if (unit.isManual) { // This is a child unit
        return `
            <div class="unit-card">
                <h4>${unit.name} (${unit.points} pts)</h4>
                <div class="unit-details">
                    <p><b>Reglas:</b> ${unit.displayOptions.find(o => !o.includes('Vía'))?.replace(/<i>|<\/i>/g, '') || 'Sin detalles.'}</p>
                    <p>${unit.displayOptions.find(o => o.includes('Vía')) || ''}</p>
                </div>
            </div>
        `;
    }

    const unitData = currentArmyData.unitsDB[unit.name];
    if (!unitData) return '';

    let allProfiles = [...(unitData.perfiles || [])];
    
    if (unit.selections.mount) {
        const mountData = currentArmyData.mountsDB[unit.selections.mount.name];
        if (mountData && mountData.perfiles) {
            allProfiles.push(...mountData.perfiles);
        }
    }
    
    if(unit.selections.specialAddons) {
        Object.entries(unit.selections.specialAddons).forEach(([name, qty]) => {
            if (name === 'points' || qty === 0) return;
            const addonData = unitData.specialAddons.find(a => a.name === name);
            if(addonData && currentArmyData.specialProfilesDB[addonData.profileKey]) {
                const profile = currentArmyData.specialProfilesDB[addonData.profileKey].perfiles[0];
                allProfiles.push({ ...profile, nombre: `${qty}x ${profile.nombre}` });
            }
        });
    }
    
    const profileHeaders = allProfiles.length > 0 ? Object.keys(allProfiles[0].stats) : [];
    const profileRows = allProfiles.map(p => `
        <tr>
            <td style="text-align: left; font-weight: bold; font-size: 8px;">${p.nombre}</td>
            ${profileHeaders.map(h => `<td>${p.stats[h]}</td>`).join('')}
        </tr>
    `).join('');

    const upgradesHtml = unit.displayOptions.length 
        ? `<ul>${unit.displayOptions.map(opt => `<li>${opt.replace(/<i>/g, '(').replace(/<\/i>/g, ')')}</li>`).join('')}</ul>`
        : 'Ninguna';
    
    let title;
    if (unit.label) {
        title = `"${unit.label}"`;
    } else if (typeof unit.qty === 'object') {
        const comp = unitData.composition;
        title = `${unit.qty.primary}x ${comp.primary.name} & ${unit.qty.secondary}x ${comp.secondary.name}`;
    } else {
        title = `${unit.qty > 1 || unit.qty === 0 ? unit.qty + 'x ' : ''}${unit.name}`;
    }

    let rulesText = unitData.reglasEspeciales || '';
    if (unit.selections.mount) {
        const mountData = currentArmyData.mountsDB[unit.selections.mount.name];
        if (mountData.reglasEspeciales) {
            rulesText += `, ${mountData.reglasEspeciales}`;
        }
    }

    return `
        <div class="unit-card">
            <h4>${title} (${unit.points} pts)</h4>
            
            ${allProfiles.length > 0 ? `<table class="profile-table">
                <thead>
                    <tr>
                        <th style="text-align: left;"></th>
                        ${profileHeaders.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${profileRows}
                </tbody>
            </table>` : ''}
            
            <div class="unit-details">
                <p><b>Equipo:</b> ${unitData.equipo}</p>
                <p><b>Reglas:</b> ${rulesText}</p>
                <div>
                    <b>Mejoras:</b>
                    ${upgradesHtml}
                </div>
            </div>
        </div>
    `;
}


/**
 * The main exported function. It takes all necessary data and opens a new window with the print view.
 */

// REPLACE this function in print.js
export function generatePrintView(armyList, currentArmyData, armyListName, totalPoints, battlePoints, focPoints, mainHostFaction, chaosHostData, resolvedArmyList) {
    // --- THIS IS THE FIX ---
    // The broken "const resolvedArmyList = getResolvedArmyList();" line has been removed.
    // The function now receives "resolvedArmyList" as an argument.
    const characters = resolvedArmyList.filter(u => u.resolvedFoc === 'Lord' || u.resolvedFoc === 'Hero');
    const troops = resolvedArmyList.filter(u => u.resolvedFoc !== 'Lord' && u.resolvedFoc !== 'Hero');
    // --- END OF FIX ---
    
    const charactersHtml = characters.map(unit => generatePrintUnitHtml(unit, currentArmyData, resolvedArmyList)).join('');

    const focOrder = ['Core', 'Special', 'Rare'];
    let troopsHtml = '';
    
    const groupedTroops = {};
    focOrder.forEach(foc => groupedTroops[foc] = []);

    troops.forEach(unit => {
        if(groupedTroops[unit.resolvedFoc]) {
            groupedTroops[unit.resolvedFoc].push(unit);
        }
    });

    focOrder.forEach(foc => {
        const unitsInFoc = groupedTroops[foc];
        if (unitsInFoc.length > 0) {
            troopsHtml += `<h2>${currentArmyData.FOC_CONFIG[foc].label.toUpperCase()}</h2>`;
            troopsHtml += unitsInFoc.map(unit => generatePrintUnitHtml(unit, currentArmyData, resolvedArmyList)).join('');
        }
    });
    
    let focSummaryPrintHtml = `<table style="width: 100%; font-size: 8px; border-collapse: collapse; margin-bottom: 10px;"><tr>`;
    const personajesPoints = (focPoints.Lord || 0) + (focPoints.Hero || 0);
    const personajesPerc = battlePoints > 0 ? (personajesPoints / battlePoints * 100).toFixed(0) : 0;
    focSummaryPrintHtml += `<td style="border: 1px solid #ccc; padding: 2px;"><b>Per:</b> ${personajesPoints} (${personajesPerc}%)</td>`;
    
    ['Lord', 'Hero', 'Core', 'Special', 'Rare'].forEach(foc => {
        const points = focPoints[foc] || 0;
        const perc = battlePoints > 0 ? (points / battlePoints * 100).toFixed(0) : 0;
        const label = { Lord: 'Com', Hero: 'Hér', Core: 'Bás', Special: 'Esp', Rare: 'Sin' }[foc];
        focSummaryPrintHtml += `<td style="border: 1px solid #ccc; padding: 2px;"><b>${label}:</b> ${points} (${perc}%)</td>`;
    });
    focSummaryPrintHtml += `<td style="border: 1px solid #ccc; padding: 2px; text-align: right;"><b>Total: ${totalPoints} / ${battlePoints}</b></td>`;
    focSummaryPrintHtml += `</tr></table>`;
    
    let hostSummaryPrintHtml = '';
    if (mainHostFaction) {
        let mainHostPoints = armyList.filter(u => u.faction === mainHostFaction).reduce((sum, u) => sum + (u.points || 0), 0);
        let supportHostPoints = totalPoints - mainHostPoints;
        const mainPerc = battlePoints > 0 ? (mainHostPoints / battlePoints * 100).toFixed(0) : 0;
        const supportPerc = battlePoints > 0 ? (supportHostPoints / battlePoints * 100).toFixed(0) : 0;
        hostSummaryPrintHtml = `<p style="font-size: 8px; text-align: center; margin-bottom: 10px;"><b>Hueste Principal:</b> ${mainHostPoints} pts (${mainPerc}%) / <b>Huestes de Apoyo:</b> ${supportHostPoints} pts (${supportPerc}%)</p>`;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>${armyListName}</title>
                <style>
                    body { font-family: Arial, sans-serif; color: #333; font-size: 8px; }
                    .header { text-align: center; border-bottom: 1px solid #333; padding-bottom: 4px; margin-bottom: 8px; }
                    h1 { margin: 0; font-size: 14px; }
                    h2 { border-bottom: 1px solid #333; padding-bottom: 2px; margin-top: 8px; margin-bottom: 4px; font-size: 11px; }
                    h4 { margin: 4px 0; background-color: #eee; padding: 2px 4px; border-left: 2px solid #333; font-size: 9px; }
                    .unit-card { border: 1px solid #ccc; padding: 5px; margin-bottom: 5px; break-inside: avoid; }
                    .profile-table { width: 100%; border-collapse: collapse; margin-bottom: 5px; }
                    .profile-table th, .profile-table td { border: 1px solid #ccc; padding: 2px; text-align: center; font-size: 8px; }
                    .profile-table th { background-color: #f2f2f2; }
                    .unit-details p { margin: 0 0 2px 0; }
                    .unit-details ul { margin: 0; padding-left: 15px; list-style-type: none;}
                    .unit-details li { margin-bottom: 1px; }
                    .troops-container { column-count: 2; column-gap: 15px; }
                    @media print {
                        body { -webkit-print-color-adjust: exact; }
                        h4 { background-color: #eee !important; }
                        .profile-table th { background-color: #f2f2f2 !important; }
                    }
                </style>
            </head>
            <body>
                <div class="header"><h1>${armyListName}</h1></div>
                ${focSummaryPrintHtml}
                ${hostSummaryPrintHtml}
                <div class="characters-container">
                    ${characters.length > 0 ? '<h2>PERSONAJES</h2>' + charactersHtml : ''}
                </div>
                <div class="troops-container">
                    ${troopsHtml}
                </div>
            </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 250);
}
