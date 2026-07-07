import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "judeSharpInazumaJapan");

export const charData = {
    ...baseInfo,
    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Playmaker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 43, lv300: 3196, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 58, lv300: 4518, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 38, lv300: 2742, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 24, lv300: 1600, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 6, lv300: 6, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["イリュージョンボール", "皇帝ペンギン2号"],
    myBasicPassivesIds: ["100000201", "103014001", "103014003"],
    myRarityPassivesIds: ["100000501", "103014004"]
};