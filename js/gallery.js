import { characterRegistry } from './Characters/registry.js';

function renderGallery() {
    const grid = document.getElementById('character-grid');
    if (!grid) return;

    grid.innerHTML = characterRegistry.map(char => {
        const starsHTML = Array(char.stars).fill(
            `<img src="img/Frm_GachaIcon/Icon_GradeStar.png" class="star-icon">`
        ).join('');

        return `
        <div class="col-6 col-md-3 col-lg-2 mb-4 d-flex flex-column align-items-center">
            <!-- CAMBIA QUESTO href: punta al file vero .html con il parametro ?id= -->
            <a href="character.html?id=${char.id}" onclick="localStorage.setItem('selectedChar', '${char.id}')" style="text-decoration: none; color: inherit;">                
                <div class="gacha-icon-wrapper">
                    <div class="rarity-bg-layer" style="background-image: url('${char.background}');">
                        <img src="${char.thumb}" class="personaje-imagen" alt="char">
                    </div>
                    <img src="${char.frame}" class="frame-overlay">
                    <div class="hud-top-left">
                        <img src="${char.element}" class="atributo-tag">
                        <img src="${char.position}" class="posicion-tag">
                    </div>
                    <div class="stars-curved-container">${starsHTML}</div>
                </div>
                <div class="personaje-nombre d-flex flex-column justify-content-center">
                    <span>${char.name}</span>
                </div>
            </a>
        </div>`;
    }).join('');
}
document.addEventListener('DOMContentLoaded', renderGallery);
