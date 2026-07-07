import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "markEvansJapanNationalTeam2026");

export const charData = {
    ...baseInfo,
    tags: [
        "img/TagTitle/Icon_Tag_Team_JapanNationalTeam2026.png",
        "img/TagTitle/Icon_Tag_Ability_Playmaker.png",
        "img/TagTitle/Icon_Tag_Title_Cross.png"
    ],
    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 46, lv300: 3548, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 57, lv300: 4422, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 34, lv300: 2448, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 25, lv300: 1638, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 6, lv300: 6, icon: "img/Status/Icon_Status_Speed.png" }
    },
    myTechniques: ["サムライショット", "サムライフェイント"],
    // Riutilizzo delle passive esistenti
    myBasicPassivesIds: ["100000201", "1010004001", "1010004003"],
    myRarityPassivesIds: ["100000501", "1010004004"]
};