import { characterRegistry } from './registry.js';

const baseInfo = characterRegistry.find(char => char.id === "judeSharpJapanNationalTeam2026");

export const charData = {
    ...baseInfo,
    name: "Jude Sharp",
    romanizedName: "Kidō Yūto",
    japaneseName: "鬼道 有人",

    tags: [
        "img/TagTitle/Icon_Tag_Team_JapanNationalTeam2026.png",
        "img/TagTitle/Icon_Tag_Ability_Playmaker.png",
        "img/TagTitle/Icon_Tag_Title_Cross.png"
    ],

    stats: {
        "TP": { lv1: 100, lv300: 100, icon: "/img/Status/Icon_Status_TP.png" },
        "Tiro": { lv1: 45, lv300: 3446, icon: "/img/Status/Icon_Status_Kick.png" },
        "Tecnica": { lv1: 56, lv300: 4326, icon: "/img/Status/Icon_Status_Technic.png" },
        "Blocco": { lv1: 36, lv300: 2570, icon: "/img/Status/Icon_Status_Block.png" },
        "Parata": { lv1: 26, lv300: 1714, icon: "/img/Status/Icon_Status_Catch.png" },
        "Velocità": { lv1: 6, lv300: 6, icon: "/img/Status/Icon_Status_Speed.png" }
    },

    myTechniques: ["サムライペンギン2号", "ブルーサイクロン"],

    myBasicPassivesIds: ["100000201", "1010005001", "1010005003"],
    myRarityPassivesIds: ["100000501", "1010005004"]
};