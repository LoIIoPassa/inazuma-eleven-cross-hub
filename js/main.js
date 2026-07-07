import { techniquesLibrary } from './Techniques/library.js';
import { passivesLibrary } from './Passive/library.js';

let db = {};

async function init() {
    console.log("Inizializzazione database...");

    // 1. Prendi il percorso (es: /characters/judeSharpIEJapan)
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p);

    // 2. Prova a identificare il personaggio dall'URL
    let charId = null;
    if (pathParts[0] === 'characters' && pathParts[1]) {
        charId = pathParts[1];
    }

    // 3. Se non trovato nell'URL, pesca dalla memoria o default
    if (!charId) {
        charId = localStorage.getItem('selectedChar') || 'axelBlazeIEJapan';
    }

    try {
        const module = await import(`./Characters/${charId}.js`);
        const charData = module.charData;

        db = {
            ...charData,
            techniques: Object.fromEntries(
                Object.entries(techniquesLibrary).filter(([key]) => charData.myTechniques.includes(key))
            ),
            passives: passivesLibrary.filter(p => charData.myPassivesIds.includes(p.id))
        };

        // Render (assicurati che gli ID nel tuo HTML siano corretti)
        document.getElementById('char-name').textContent = db.name;
        document.getElementById('char-img').src = db.characterImg || db.thumb;
        document.getElementById('element-icon').src = db.element;
        document.getElementById('position-icon').src = db.position;

        document.getElementById('tags-container').innerHTML = db.tags.map(t => `<img src="${t}" style="height: 38px;" alt="Tag">`).join('');

        document.getElementById('btn-lv1').addEventListener('click', () => renderStats('lv1'));
        document.getElementById('btn-lv300').addEventListener('click', () => renderStats('lv300'));

        renderStats('lv1');
        renderTechniques();
        renderPassives();

    } catch (err) {
        console.error("Errore caricamento personaggio:", err);
    }
}

// (Le funzioni renderStats, renderTechniques, renderPassives rimangono INVARIATE)
document.addEventListener('DOMContentLoaded', init);
