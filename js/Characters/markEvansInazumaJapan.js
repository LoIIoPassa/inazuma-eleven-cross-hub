import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "markEvansInazumaJapan");

export const charData = {
    ...baseInfo,
    name: "Mark Evans",
    romanizedName: "Endō Mamoru",
    japaneseName: "円堂 守",

    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Buffer.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 34, lv300: 2528, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 33, lv300: 2338, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 41, lv300: 3120, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 57, lv300: 4470, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 2, lv300: 2, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["ゴッドハンド", "怒りの鉄槌"],

    myBasicPassivesIds: ["100000401", "103001001", "103001003"],
    myRarityPassivesIds: ["100000501", "103001004"]
};