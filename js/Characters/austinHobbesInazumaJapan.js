import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "austinHobbesInazumaJapan");

export const charData = {
    ...baseInfo,
    name: "Austin Hobbes",
    romanizedName: "Utsunomiya Toramaru",
    japaneseName: "宇都宮 虎丸",

    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_SecondTop.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 49, lv300: 3678, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 40, lv300: 3042, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 32, lv300: 2226, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 23, lv300: 1474, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 4, lv300: 4, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["ひとりワンツー", "タイガードライブ"],

    // 100000101 è Tiro + base (già registrato)
    // 100000501 è Max TP + base (già registrato)
    myBasicPassivesIds: ["100000101", "103011001", "103011003"],
    myRarityPassivesIds: ["100000501", "103011004"]
};