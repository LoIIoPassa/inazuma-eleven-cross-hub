import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "byronLoveZeus");

export const charData = {
    ...baseInfo,
    name: "Byron Love",
    romanizedName: "Afuro Terumi",
    japaneseName: "亜風炉 照美",

    tags: [
        "img/TagTitle/Icon_Tag_Team_Zeus.png",
        "img/TagTitle/Icon_Tag_Ability_Playmaker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle1.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 53, lv300: 4114, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 64, lv300: 5094, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 36, lv300: 2538, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 25, lv300: 1694, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 6, lv300: 6, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["ゴッドノウズ", "ヘブンズタイム"],
    myBasicPassivesIds: ["100000201", "101164001", "101164003"],
    myRarityPassivesIds: ["100000501", "101164004"]
};