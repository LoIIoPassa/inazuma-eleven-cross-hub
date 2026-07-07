import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "nathanSwiftInazumaJapan");

export const charData = {
    ...baseInfo,
    name: "Nathan Swift",
    romanizedName: "Kazemaru Ichirōta",
    japaneseName: "風丸 一郎太",

    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_SideBack.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 24, lv300: 1542, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 43, lv300: 3232, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 57, lv300: 4422, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 41, lv300: 3060, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 4, lv300: 4, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["疾風ダッシュ", "風神の舞"],
    myBasicPassivesIds: ["100000301", "103002001", "103002003"],
    myRarityPassivesIds: ["100000501", "103002004"]
};