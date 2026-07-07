import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "archerHawkinsInazumaJapan");

export const charData = {
    ...baseInfo,
    name: "Archer Hawkins",
    romanizedName: "Tobitaka Seiya",
    japaneseName: "飛鷹 征矢",

    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Shootblocker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 21, lv300: 1386, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 37, lv300: 2682, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 49, lv300: 3678, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 37, lv300: 2676, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 4, lv300: 4, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["真空魔", "ジャッジスルー"],
    myBasicPassivesIds: ["100000301", "103007001", "103007003"],
    myRarityPassivesIds: ["100000501", "103007004"]
};