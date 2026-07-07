import { techniquesLibrary } from './Techniques/library.js';
import { passivesLibrary } from './Passive/library.js';

let db = {};

async function init() {
    console.log("Inizializzazione database...");

    const urlParams = new URLSearchParams(window.location.search);
    let charId = urlParams.get('id');

    if (!charId) {
        charId = localStorage.getItem('selectedChar');
    }

    if (!charId) {
        charId = 'axelBlazeIEJapan';
    }

    try {
        const module = await import(`./Characters/${charId}.js`);
        const charData = module.charData;

        db = {
            ...charData,
            techniques: Object.fromEntries(
                Object.entries(techniquesLibrary).filter(([key]) => charData.myTechniques.includes(key))
            ),
            basicPassives: passivesLibrary.filter(p => charData.myBasicPassivesIds.includes(p.id)),
            rarityPassives: passivesLibrary.filter(p => charData.myRarityPassivesIds.includes(p.id))
        };

        document.getElementById('char-name-main').textContent = `${db.name} (${db.romanizedName})`;
        document.getElementById('char-name-jp').textContent = db.japaneseName;
        document.getElementById('char-img').src = db.characterImg || db.thumb;
        document.getElementById('element-icon').src = db.element;
        document.getElementById('position-icon').src = db.position;
        document.getElementById('tags-container').innerHTML = db.tags.map(t => `<img src="${t}" style="height: 38px;" alt="Tag">`).join('');

        document.getElementById('btn-lv1').addEventListener('click', () => renderStats('lv1'));
        document.getElementById('btn-lv300').addEventListener('click', () => renderStats('lv300'));

        renderStats('lv1');
        // --- ORDINE INVERTITO: PASSIAMO PRIMA LE PASSIVE POI LE TECNICHE ---
        renderPassives();
        renderTechniques();
    } catch (err) {
        console.error("Errore caricamento:", err);
    }
}

function renderStats(level) {
    const statsList = document.getElementById('stats-list');
    statsList.innerHTML = '';
    document.getElementById('btn-lv1').classList.toggle('active', level === 'lv1');
    document.getElementById('btn-lv300').classList.toggle('active', level === 'lv300');

    Object.entries(db.stats).forEach(([key, data]) => {
        statsList.innerHTML += `
            <li class="d-flex justify-content-between align-items-center p-2 rounded mb-1" style="background: rgba(0,0,0,0.3); border-left: 3px solid #0dcaf0;">
                <div class="d-flex align-items-center gap-2">
                    <img src="${data.icon}" style="height: 24px;" alt="${key}">
                    <span class="text-light fw-bold">${key}</span>
                </div>
                <span class="text-info fw-bold">${data[level]}</span>
            </li>`;
    });
}

function renderTechniques() {
    const tecContainer = document.getElementById('tecniche-container');
    if (!tecContainer) return;
    tecContainer.innerHTML = '';
    Object.values(db.techniques).forEach((t, tIdx) => {
        let tabs = '', content = '';
        for (let i = 0; i < 10; i++) {
            const active = i === 0 ? 'active' : '';
            tabs += `<li class="nav-item"><button class="nav-link ${active}" data-bs-toggle="tab" data-bs-target="#t-${tIdx}-lv-${i}">Lv. ${i + 1}</button></li>`;
            let rows = t.details.map(d => `<tr><td class="text-info" style="width:40%">${d.label}</td><td>${d.values[i]}</td></tr>`).join('');
            content += `<div class="tab-pane fade ${i === 0 ? 'show active' : ''}" id="t-${tIdx}-lv-${i}"><table class="table table-dark table-sm mt-2 mb-0"><tbody>${rows}</tbody></table></div>`;
        }
        tecContainer.innerHTML += `
        <div class="card bg-dark border-secondary mb-4 shadow">
            <div class="card-header bg-secondary text-white d-flex align-items-center gap-2">
                <img src="${t.icon}" style="height: 28px;" alt="Tipo">
                <img src="${t.elementIcon}" style="height: 28px;" alt="Elemento">
                <h5 class="mb-0 ms-2">${t.name}</h5>
            </div>
            <div class="card-body"><ul class="nav nav-tabs border-secondary">${tabs}</ul><div class="tab-content p-2">${content}</div></div>
        </div>`;
    });
}

function renderPassives() {
    const passContainer = document.getElementById('passive-container');
    if (!passContainer) return;

    passContainer.innerHTML = '';

    const drawGroup = (title, passiveList) => {
        if (passiveList.length === 0) return;

        passContainer.innerHTML += `<h3 class="mb-4 mt-5 text-info">${title}</h3>`;

        passiveList.forEach((p) => {
            let tabs = '', content = '';
            p.levels.forEach((lv, lvIdx) => {
                const active = lvIdx === 0 ? 'active' : '';
                const tabId = `p-${p.id}-${lvIdx}`;

                // --- NUOVA LOGICA DI SOSTITUZIONE ---
                let descrizione = p.template;

                // Sostituiamo ogni valore se esiste nel livello attuale
                if (lv.val !== undefined) descrizione = descrizione.replace('{VAL}', lv.val);
                if (lv.val2 !== undefined) descrizione = descrizione.replace('{VAL2}', lv.val2);
                if (lv.power !== undefined) descrizione = descrizione.replace('{POWER}', lv.power);
                if (lv.dist !== undefined) descrizione = descrizione.replace('{DIST}', lv.dist);
                if (lv.crt !== undefined) descrizione = descrizione.replace('{CRT}', lv.crt);
                if (lv.tp !== undefined) descrizione = descrizione.replace('{TP}', lv.tp);
                // ------------------------------------

                tabs += `<li class="nav-item"><button class="nav-link text-info ${active}" data-bs-toggle="tab" data-bs-target="#${tabId}">Lv. ${lvIdx + 1}</button></li>`;
                content += `
                    <div class="tab-pane fade ${lvIdx === 0 ? 'show active' : ''}" id="${tabId}">
                        <div class="mb-2 mt-2"><span class="badge bg-dark border border-info text-info">${lv.req}</span></div>
                        <div class="p-3 bg-black bg-opacity-25 rounded border border-secondary text-white">
                            <p class="mb-0" style="color: #ffffff !important; font-size: 1.05rem; line-height: 1.5;">${descrizione}</p>
                        </div>
                    </div>`;
            });
            passContainer.innerHTML += `
                <div class="card bg-dark border-secondary mb-4 shadow">
                    <div class="card-header bg-secondary text-white d-flex justify-content-between">
                        <strong>${p.title}</strong><small class="text-light opacity-75">ID: ${p.id}</small>
                    </div>
                    <div class="card-body">
                        <ul class="nav nav-tabs border-secondary mb-3">${tabs}</ul>
                        <div class="tab-content">${content}</div>
                    </div>
                </div>`;
        });
    };

    drawGroup("Passive di Livello", db.basicPassives);
    drawGroup("Passive di Risveglio", db.rarityPassives);
}
document.addEventListener('DOMContentLoaded', init);