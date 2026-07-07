import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "axelBlazeInazumaJapan");

export const charData = {
    ...baseInfo,
    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Striker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 58, lv300: 4566, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 45, lv300: 3424, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 36, lv300: 2570, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 25, lv300: 1698, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 4, lv300: 4, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["ファイアトルネード", "爆熱スクリュー"],
    myBasicPassivesIds: ["100000101", "103010001", "103010003"],
    myRarityPassivesIds: ["100000501", "103010004"]
};