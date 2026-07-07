import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "thorStoutbergInazumaJapan");

export const charData = {
    ...baseInfo,
    name: "Thor Stoutberg",
    romanizedName: "Hijikata Raiden",
    japaneseName: "土方 雷電",

    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Shootblocker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "/img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 21, lv300: 1312, icon: "/img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 38, lv300: 2748, icon: "/img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 49, lv300: 3760, icon: "/img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 36, lv300: 2602, icon: "/img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 4, lv300: 4, icon: "/img/Status/Icon_Status_Speed.png" }
    },
    myTechniques: ["スーパー四股踏み", "ブレードアタック"],
    myBasicPassivesIds: ["100000201", "103012001", "103012003"],
    myRarityPassivesIds: ["100000501", "103012004"]
};