import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "jackWallsideInazumaJapan");

export const charData = {
    ...baseInfo,
    name: "Jack Wallside",
    romanizedName: "Kabeyama Heigorō",
    japaneseName: "壁山 塀吾郎",

    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Shootblocker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 24, lv300: 1542, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 41, lv300: 3078, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 58, lv300: 4566, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 41, lv300: 3070, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 4, lv300: 4, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["ザ・ウォール", "ザ・マウンテン"],

    // 100000501 è l'ID di Max TP che hai già in memoria
    myBasicPassivesIds: ["100000301", "103003001", "103003003"],
    myRarityPassivesIds: ["100000501", "103003004"]
};