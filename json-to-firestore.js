const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAIta1S6V7qGJtuIMXFlZriMPo9aKUWmEg",
  authDomain: "acnh-fish-guide.firebaseapp.com",
  databaseURL: "https://acnh-fish-guide.firebaseio.com",
  projectId: "acnh-fish-guide",
  storageBucket: "acnh-fish-guide.appspot.com",
  messagingSenderId: "866984317668",
  appId: "1:866984317668:web:24999bfdfd3f1d560a52f1",
  measurementId: "G-W90H0D0YQN"
});

const db = firebase.firestore();

var fish =[
  {
    "id":1,
    "name":"Bitterling",
    "ImgUrl":"https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_1_i.png",
    "location": "river",
    "price":900,
    "n-month": [11,12,1,2,3],
    "s-month": [5,6,7,8,9],
    "shadow": "small",
    "time": "all day",
    "rarity": "very common"
  },
  {
    "id":2,
    "name":"Pale chub",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_2_i.png",
    "location": "river",
    "price":200,
    "n-month": [0],
    "s-month": [0],
    "shadow": "very small",
    "time": "9am - 4pm",
    "rarity": "very common"
  },
  {
    "id":3,
    "name":"Crucian carp",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_3_i.png",
    "location": "river",
    "price":160,
    "n-month": [0],
    "s-month": [0],
    "shadow": "small",
    "time": "all day",
    "rarity": "very common"
  },
  {
    "id":4,
    "name":"Dace",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_4_i.png",
    "location": "river",
    "price":240,
    "n-month": [0],
    "s-month": [0],
    "shadow": "medium",
    "time": "4pm - 9am",
    "rarity": "very common"
  },
  {
    "id":12,
    "name":"Soft-shelled turtle",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_12_i.png",
    "location": "river",
    "price":3750,
    "n-month": [8,9],
    "s-month": [2,3],
    "shadow": "large",
    "time": "4pm - 9am",
    "rarity": "common"
  },
  {
    "id":13,
    "name":"Snapping turtle",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_13_i.png",
    "location": "river",
    "price":5000,
    "n-month": [4,5,6,7,8,9,10],
    "s-month": [10,11,12,1,2,3,4],
    "shadow": "large",
    "time": "9pm - 4am",
    "rarity": "Uncommon"
  },
  {
    "id":16,
    "name":"Freshwater goby",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_16_i.png",
    "location": "river",
    "price": 400,
    "n-month": [0],
    "s-month": [0],
    "shadow": "small",
    "time": "4pm - 9am",
    "rarity": "Common"
  },
  {
    "id":17,
    "name":"Loch",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_17_i.png",
    "location": "river",
    "price": 400,
    "n-month": [3,4,5],
    "s-month": [9,10,11],
    "shadow": "small",
    "time": "all day",
    "rarity": "Very common"
  },
  {
    "id":20,
    "name":"Bluegill",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_20_i.png",
    "location": "river",
    "price": 180,
    "n-month": [0],
    "s-month": [0],
    "shadow": "small",
    "time": "9am - 4pm",
    "rarity": "Very common"
  },
  {
    "id":21,
    "name":"Yellow perch",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_21_i.png",
    "location": "river",
    "price": 300,
    "n-month": [10,11,12,1,2,3],
    "s-month": [4,5,6,7,8,9],
    "time": "all day",
    "shadow": "medium",
    "rarity": "Very common"
  },
  {
    "id":22,
    "name":"Black bass",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_22_i.png",
    "location": "river",
    "price": 400,
    "n-month": [0],
    "s-month": [0],
    "time": "all day",
    "shadow": "large",
    "rarity": "Very common"
  },
  {
    "id":23,
    "name":"Tilapia",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_23_i.png",
    "location": "river",
    "price": 400,
    "n-month": [6,7,8,9,10],
    "s-month": [12,1,2,3,4],
    "time": "all day",
    "shadow": "medium",
    "rarity": "common"
  },
  {
    "id":24,
    "name":"Pike",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_24_i.png",
    "location": "river",
    "price": 1800,
    "n-month": [9,10,11,12],
    "s-month": [3,4,5,6],
    "time": "all day",
    "shadow": "Large",
    "rarity": "Uncommon"
  },
  {
    "id":25,
    "name":"Pond smelt",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_25_i.png",
    "location": "river",
    "price": 400,
    "n-month": [12,1,2],
    "s-month": [6,7,8],
    "time": "all day",
    "shadow": "Very small",
    "rarity": "Very common"
  },
  {
    "id":26,
    "name":"Sweetfish",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_26_i.png",
    "location": "river",
    "price": 900,
    "n-month": [7,8,9],
    "s-month": [1,2,3],
    "time": "all day",
    "shadow": "Medium",
    "rarity": "Common"
  },
  {
    "id":33,
    "name":"Mitten crab",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_33_i.png",
    "location": "river",
    "price": 2000,
    "n-month": [9,10],
    "s-month": [3,4,5],
    "time": "4pm - 9am",
    "shadow": "small",
    "rarity": "uncommon"
  },
  {
    "id":34,
    "name":"Guppy",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_34_i.png",
    "location": "river",
    "price": 1300,
    "n-month": [4,5,6,7,8,9,10,11],
    "s-month": [10,11,12,1,2,3,4,5],
    "time": "9am - 4pm",
    "shadow": "very small",
    "rarity": "Common"
  },
  {
    "id":35,
    "name":"Nibble fish",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_35_i.png",
    "location": "river",
    "price": 1500,
    "n-month": [5,6,7,8,9],
    "s-month": [11,12,1,2,3],
    "time": "9am - 4pm",
    "shadow": "very small",
    "rarity": "Common"
  },
  {
    "id":36,
    "name":"Angelfish",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_36_i.png",
    "location": "river",
    "price": 3000,
    "n-month": [5,6,7,8,9,10],
    "s-month": [11,12,1,2,3,4],
    "time": "4pm - 9am",
    "shadow": "very small",
    "rarity": "Uncommon"
  },
  {
    "id":37,
    "name":"Betta",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_37_i.png",
    "location": "river",
    "price": 2500,
    "n-month": [5,6,7,8,9,10],
    "s-month": [11,12,1,2,3,4],
    "time": "9am - 4pm",
    "shadow": "small",
    "rarity": "Rare"
  },
  {
    "id":38,
    "name":"Neon tetra",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_38_i.png",
    "location": "river",
    "price": 500,
    "n-month": [4,5,6,7,8,9,10,11],
    "s-month": [10,11,12,1,2,3,4],
    "time": "9am - 4pm",
    "shadow": "small",
    "rarity": "common"
  },
  {
    "id":39,
    "name":"Rainbow fish",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_39_i.png",
    "location": "river",
    "price": 800,
    "n-month": [5,6,7,8,9,10],
    "s-month": [10,11,12,1,2,3,4],
    "time": "9am - 4pm",
    "shadow": "small",
    "rarity": "common"
  },
  {
    "id":40,
    "name":"Piranha",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_40_i.png",
    "location": "river",
    "price": 2500,
    "n-month": [6,7,8,9],
    "s-month": [12,1,2,3],
    "time": "9am - 4pm, 9pm - 4am",
    "shadow": "small",
    "rarity": "common"
  },
  {
    "id":41,
    "name":"Arowana",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_41_i.png",
    "location": "river",
    "price": 10000,
    "n-month": [6,7,8,9],
    "s-month": [12,1,2,3],
    "time": "4pm - 9am",
    "shadow": "large",
    "rarity": "Uncommon"
  },
  {
    "id":42,
    "name":"Dorado",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_42_i.png",
    "location": "river",
    "price": 15000,
    "n-month": [6,7,8,9],
    "s-month": [12,1,2,3],
    "time": "4pm - 9am",
    "shadow": "large",
    "rarity": "Rare"
  },
  {
    "id":44,
    "name":"Arapaima",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_44_i.png",
    "location": "river",
    "price": 10000,
    "n-month": [6,7,8,9],
    "s-month": [12,1,2,3],
    "time": "4pm - 9am",
    "shadow": "Huge",
    "rarity": "Uncommon"
  },
  {
    "id":45,
    "name":"Saddled bichir",
    "ImgUrl": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_45_i.png",
    "location": "river",
    "price": 4000,
    "n-month": [6,7,8,9],
    "s-month": [12,1,2,3],
    "time": "9am - 4pm",
    "shadow": "large",
    "rarity": "Uncommon"
  },
];

fish.forEach(function(obj) {
  db.collection("fish").add({
    id: obj.id,
    name: obj.name,
    ImgUrl: obj.ImgUrl,
    location: obj.location,
    price: obj.price,
    n_month: obj['n-month'],
    s_month: obj['s-month'],
    time: obj.time,
    shadow: obj.shadow,
    rarity: obj.rarity
  }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});
