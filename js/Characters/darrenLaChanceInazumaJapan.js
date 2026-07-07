import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "darrenLaChanceInazumaJapan");

export const charData = {
    ...baseInfo,
    name: "Darren LaChance",
    romanizedName: "Tachimukai Yūki",
    japaneseName: "立向居 勇気",

    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Keeper.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "/img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 33, lv300: 2338, icon: "/img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 33, lv300: 2350, icon: "/img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 44, lv300: 3346, icon: "/img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 57, lv300: 4422, icon: "/img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 2, lv300: 2, icon: "/img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["ゴッドハンド2", "ムゲン・ザ・ハンド"],
    myBasicPassivesIds: ["100000401", "103020001", "103020003"],
    myRarityPassivesIds: ["100000501", "103020004"]
};