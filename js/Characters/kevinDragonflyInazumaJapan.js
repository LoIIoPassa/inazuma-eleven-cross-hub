import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "kevinDragonflyInazumaJapan");

export const charData = {
    ...baseInfo,
    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Striker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],
    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "/img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 56, lv300: 4326, icon: "/img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 47, lv300: 3578, icon: "/img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 36, lv300: 2618, icon: "/img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 26, lv300: 1734, icon: "/img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 4, lv300: 4, icon: "/img/Status/Icon_Status_Speed.png" }
    },
    myTechniques: ["ドラゴンクラッシュ", "ドラゴンスレイヤー"],
    myBasicPassivesIds: ["100000101", "103017001", "103017003"],
    myRarityPassivesIds: ["100000501", "103017004"]
};