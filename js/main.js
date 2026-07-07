import { techniquesLibrary } from './Techniques/library.js';
import { passivesLibrary } from './Passive/library.js';

let db = {};

async function init() {
    // Legge il percorso es: /characters/judeSharpIEJapan
    const path = window.location.pathname; 
    const pathParts = path.split('/').filter(p => p); 
    
    // Se l'URL è /characters/nome, prendi il nome
    let charId = (pathParts[0] === 'characters' && pathParts[1]) ? pathParts[1] : null;

    // Se non sei in una pagina personaggio (es. home), controlla se c'è un ID nel localStorage o il default
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
