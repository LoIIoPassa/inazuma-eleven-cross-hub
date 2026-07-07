import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "josephKingRoyaleAcademy");

export const charData = {
    ...baseInfo,
    name: "Joseph King",
    romanizedName: "Genda Kōjirō",
    japaneseName: "源田 幸次郎",

    tags: [
        "img/TagTitle/Icon_Tag_Team_RoyaleAcademy.png",
        "img/TagTitle/Icon_Tag_Ability_Keeper.png",
        "img/TagTitle/Icon_Tag_Title_InaEle1.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 30, lv300: 2074, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 30, lv300: 2058, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 38, lv300: 2780, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 49, lv300: 3680, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 2, lv300: 2, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["パワーシールド", "フルパワーシールド"],

    myBasicPassivesIds: ["100000401", "101017001", "101017003"],
    myRarityPassivesIds: ["100000501", "101017004"]
};