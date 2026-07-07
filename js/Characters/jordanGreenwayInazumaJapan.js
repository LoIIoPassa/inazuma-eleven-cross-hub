import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "jordanGreenwayInazumaJapan");

export const charData = {
    ...baseInfo,
    name: "Jordan Greenway",
    romanizedName: "Midorikawa Ryūji",
    japaneseName: "緑川 リュウジ",

    tags: [
        "img/TagTitle/Icon_Tag_Team_InazumaJapan.png",
        "img/TagTitle/Icon_Tag_Ability_Playmaker.png",
        "img/TagTitle/Icon_Tag_Title_InaEle3.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 40, lv300: 3018, icon: "img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 49, lv300: 3760, icon: "img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 30, lv300: 2080, icon: "img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 21, lv300: 1394, icon: "img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 6, lv300: 6, icon: "img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["アストロブレイク", "ライトニングアクセル"],

    // 100000201 è la Tecnica + base (già in memoria)
    // 100000501 è il Max TP + base (già in memoria)
    myBasicPassivesIds: ["100000201", "103013001", "103013003"],
    myRarityPassivesIds: ["100000501", "103013004"]
};