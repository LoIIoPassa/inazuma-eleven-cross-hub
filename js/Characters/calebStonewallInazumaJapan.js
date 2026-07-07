import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "calebStonewallInazumaJapan");

export const charData = {
    ...baseInfo,
    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Playmaker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],
    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "/img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 44, lv300: 3346, icon: "/img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 58, lv300: 4566, icon: "/img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 34, lv300: 2486, icon: "/img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 25, lv300: 1658, icon: "/img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 6, lv300: 6, icon: "/img/Status/Icon_Status_Speed.png" }
    },
    myTechniques: ["ジャッジスルー2", "キラーフィールズ"],
    myBasicPassivesIds: ["100000201", "103008001", "103008003"],
    myRarityPassivesIds: ["100000501", "103008004"]
};