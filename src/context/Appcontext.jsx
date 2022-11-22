import { useToast } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()
const AllData={
    "Makeup":[
    {
        id:1,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Swng-(1).jpg",
    "selection2":"LIT Liquid Matte Lipstick",
    "selection2_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-swinger.html",
    "selection3":"Moringa Oil Enriched Matte Lipstick",
    "selection3_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-swinger.html",
    "selection4": 395,
    "selection4_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-swinger.html"
    },
    {
        id:2,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_2.jpg",
    "selection2":"POPxo Makeup - Mini Lip Kit",
    "selection2_url":"https://www.myglamm.com/product/popxo-makeup-no-drama-3-color-mini-lipstick-set.html",
    "selection3":"Mini Lipstick kit with 3 creamy-matte nude lipsticks",
    "selection3_url":"https://www.myglamm.com/product/popxo-makeup-no-drama-3-color-mini-lipstick-set.html",
    "selection4": 279,
    "selection4_url":"https://www.myglamm.com/product/popxo-makeup-no-drama-3-color-mini-lipstick-set.html"
    },
    {
        id:3,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Tom-Collins_6.jpg",
    "selection2":"LIT Creamy Matte Lipstick",
    "selection2_url":"https://www.myglamm.com/product/lit-creamy-matte-lipstick-tom-collins.html",
    "selection3":"Precision Perfect Matte Slimstick",
    "selection3_url":"https://www.myglamm.com/product/lit-creamy-matte-lipstick-tom-collins.html",
    "selection4": 386,
    "selection4_url":"https://www.myglamm.com/product/lit-creamy-matte-lipstick-tom-collins.html"
    },
    {
        id:4,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Melon-Squeeze-(1).jpg",
    "selection2":"K.Play Flavoured Lipstick",
    "selection2_url":"https://www.myglamm.com/product/kplay-flavoured-lipstick-melon-squeeze.html",
    "selection3":"Melon Flavoured Vitamin E-enriched Creamy Lipstick",
    "selection3_url":"https://www.myglamm.com/product/kplay-flavoured-lipstick-melon-squeeze.html",
    "selection4": 408,
    "selection4_url":"https://www.myglamm.com/product/kplay-flavoured-lipstick-melon-squeeze.html"
    },
    {
        id:4,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Hi-Shine-Post-1-Regal-Crimson_1.jpg",
    "selection2":"Manish Malhotra Hi-Shine Lipstick",
    "selection2_url":"https://www.myglamm.com/product/manish-malhotra-hi-shine-lipstick-regal-crimson.html",
    "selection3":"Lightweight, Long-wear Lipsticks",
    "selection3_url":"https://www.myglamm.com/product/manish-malhotra-hi-shine-lipstick-regal-crimson.html",
    "selection4":760,
    "selection4_url":"https://www.myglamm.com/product/manish-malhotra-hi-shine-lipstick-regal-crimson.html"
    },
    {
        id:5,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Liquid-Matte-Lipstick-post-1-Wild-Queen.jpg",
    "selection2":"Manish Malhotra Liquid Matte Lipstick",
    "selection2_url":"https://www.myglamm.com/product/manish-malhotra-liquid-matte-lipstick-wild-queen.html",
    "selection3":"Long-stay Velvet Matte Lip Colour",
    "selection3_url":"https://www.myglamm.com/product/manish-malhotra-liquid-matte-lipstick-wild-queen.html",
    "selection4": 646,
    "selection4_url":"https://www.myglamm.com/product/manish-malhotra-liquid-matte-lipstick-wild-queen.html"
    },
    {
        id:6,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/game-of-throne.jpg",
    "selection2":"LIT Satin Matte Lipstick",
    "selection2_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-game-of-thrones.html",
    "selection3":"Hi-Wattage 3D Satin Matte Finish Lipstick With Intense Colour Payoff",
    "selection3_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-game-of-thrones.html",
    "selection4": 321,
    "selection4_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-game-of-thrones.html"
    },
    {
        id:7,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/PechPnk-(1).jpg",
    "selection2":"POSE HD Lipstick",
    "selection2_url":"https://www.myglamm.com/product/pose-hd-lipstick-peach-pink.html",
    "selection3":"HD Long-wear Matte Lipstick",
    "selection3_url":"https://www.myglamm.com/product/pose-hd-lipstick-peach-pink.html",
    "selection4": 599,
    "selection4_url":"https://www.myglamm.com/product/pose-hd-lipstick-peach-pink.html"
    },
    {
        id:8,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/stargazer-7.jpeg",
    "selection2":"LIT 2 in 1 Liquid Matte Lipstick",
    "selection2_url":"https://www.myglamm.com/product/lit-2-in-1-liquid-matte-lipstick-stargazer.html",
    "selection3":"Intense, transfer-proof, long-lasting liquid lipstick duos",
    "selection3_url":"https://www.myglamm.com/product/lit-2-in-1-liquid-matte-lipstick-stargazer.html",
    "selection4": 408,
    "selection4_url":"https://www.myglamm.com/product/lit-2-in-1-liquid-matte-lipstick-stargazer.html"
    },
    {
        id:9,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Promiscious-(1).jpg",
    "selection2":"Ultimatte Long-Stay Matte Lipstick",
    "selection2_url":"https://www.myglamm.com/product/ultimatte-long-stay-matte-lipstick-promiscuous.html",
    "selection3":"Hyaluronic Acid-enriched, Moisturising, Matte Slim Lipstick",
    "selection3_url":"https://www.myglamm.com/product/ultimatte-long-stay-matte-lipstick-promiscuous.html",
    "selection4": 454,
    "selection4_url":"https://www.myglamm.com/product/ultimatte-long-stay-matte-lipstick-promiscuous.html"
    },
    {
        id:10,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Mocha.jpg",
    "selection2":"Ultimatte Long Lasting Liquid Lipstick",
    "selection2_url":"https://www.myglamm.com/product/utlimatte-long-stay-matte-liquid-lipstick-mocha-icon.html",
    "selection3":"Vitamin E Enriched Non-Drying Formula | Up To 8 Hours Stay",
    "selection3_url":"https://www.myglamm.com/product/utlimatte-long-stay-matte-liquid-lipstick-mocha-icon.html",
    "selection4": 479,
    "selection4_url":"https://www.myglamm.com/product/utlimatte-long-stay-matte-liquid-lipstick-mocha-icon.html"
    },
    {
        id:11,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Soft-Matte-post-1-Romantic-Rouge.jpg",
    "selection2":"Manish Malhotra Soft Matte Lipstick",
    "selection2_url":"https://www.myglamm.com/product/manish-malhotra-soft-matte-lipstick-romantic-rouge.html",
    "selection3":"Hydrating Long-wear Lipstick",
    "selection3_url":"https://www.myglamm.com/product/manish-malhotra-soft-matte-lipstick-romantic-rouge.html",
    "selection4": 617,
    "selection4_url":"https://www.myglamm.com/product/manish-malhotra-soft-matte-lipstick-romantic-rouge.html"
    },
    {
        id:12,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/JOMO-cop.jpg",
    "selection2":"LIT Liquid Matte Lipstick Set Of 4",
    "selection2_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-set-of-4.html",
    "selection3":"Moringa Oil Enriched Matte Lipstick",
    "selection3_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-set-of-4.html",
    "selection4": 869,
    "selection4_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-set-of-4.html"
    },
    {
        id:13,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/LB-FB-copy_1.jpg",
    "selection2":"LIT Liquid Matte Lipstick ",
    "selection2_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-lit-velvet-matte-liquid-lipstick.html",
    "selection3":"Moringa Oil Enriched Matte Lipstick & Hydrating, Velvet Matte Liquid Lipcolour",
    "selection3_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-lit-velvet-matte-liquid-lipstick.html",
    "selection4": 434,
    "selection4_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-lit-velvet-matte-liquid-lipstick.html"
    },
    {
        id:14,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Kuwtk-(1)-(1)_4.jpg",
    "selection2":"LIT Satin Matte Lipstick ",
    "selection2_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-lit-creamy-matte-lipstick-ultimatte-long-stay-matte-lipstick.html",
    "selection3":"LIT Satin Matte Lipstick + LIT Creamy Matte Lipstick + Ultimatte Long-Stay Matte Lipstick",
    "selection3_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-lit-creamy-matte-lipstick-ultimatte-long-stay-matte-lipstick.html",
    "selection4": 983,
    "selection4_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-lit-creamy-matte-lipstick-ultimatte-long-stay-matte-lipstick.html"
    },
    {
        id:15,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/ORGLG-(1)-(1).jpg",
    "selection2":"K.Play Flavoured Lipgloss ",
    "selection2_url":"https://www.myglamm.com/product/kplay-flavoured-lipgloss-kplay-flavoured-lipstick.html",
    "selection3":"Vitamin E Enriched High Shine Lipgloss & Vitamin E-enriched Creamy Lipstick",
    "selection3_url":"https://www.myglamm.com/product/kplay-flavoured-lipgloss-kplay-flavoured-lipstick.html",
    "selection4": 627,
    "selection4_url":"https://www.myglamm.com/product/kplay-flavoured-lipgloss-kplay-flavoured-lipstick.html"
    },
    {
        id:16,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Kuwtk-(1)-1.jpg",
    "selection2":"LIT Satin Matte Lipstick Set of 2",
    "selection2_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-set-of-2.html",
    "selection3":"Hi-Wattage 3D Satin Matte Finish Lipstick With Intense Colour Payoff",
    "selection3_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-set-of-2.html",
    "selection4": 544,
    "selection4_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-set-of-2.html"
    },
    {
        id:17,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Kuwtk-(1)-(1)_2.jpg",
    "selection2":"LIT Velvet Matte Liquid Lipstick ",
    "selection2_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-lit-satin-matte-lipstick-lit-creamy-matte-lipstick.html",
    "selection3":"LIT Velvet Matte Liquid Lipstick + LIT Satin Matte Lipstick + LIT Creamy Matte Lipstick",
    "selection3_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-lit-satin-matte-lipstick-lit-creamy-matte-lipstick.html",
    "selection4": 816,
    "selection4_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-lit-satin-matte-lipstick-lit-creamy-matte-lipstick.html"
    },
    {
        id:18,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Thku-(1)_3.jpg",
    "selection2":"LIT Velvet Matte Liquid Lipstick l",
    "selection2_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-superfoods-kajal.html",
    "selection3":"Hydrating, Velvet Matte Liquid Lipcolour & Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
    "selection3_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-superfoods-kajal.html",
    "selection4": 434,
    "selection4_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-superfoods-kajal.html"
    },
    {
        id:19,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/W-L-1-1.jpg",
    "selection2":"LIT Liquid Matte Lipstick ",
    "selection2_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-lit-velvet-matte-liquid-lipstick-lit-satin-matte-lipstick.html",
    "selection3":"LIT Liquid Matte Lipstick + LIT Velvet Matte Liquid Lipstick + LIT Satin Matte Lipstick",
    "selection3_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-lit-velvet-matte-liquid-lipstick-lit-satin-matte-lipstick.html",
    "selection4": 706,
    "selection4_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-lit-velvet-matte-liquid-lipstick-lit-satin-matte-lipstick.html"
    },
    {
        id:20,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/sq-(1).png",
    "selection2":"Everyday Glamm",
    "selection2_url":"https://www.myglamm.com/product/everyday-glamm.html",
    "selection3":"A gift set of an intense black kajal & yummy caramel brown lipstick @₹499!",
    "selection3_url":"https://www.myglamm.com/product/everyday-glamm.html",
    "selection4": 434,
    "selection4_url":"https://www.myglamm.com/product/everyday-glamm.html"
    },
    {
        id:21,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Tea-(1).jpg",
    "selection2":"Clean Beauty Cocoa Butter Lip & Cheek Pencil",
    "selection2_url":"https://www.myglamm.com/product/clean-beauty-cocoa-butter-lip-and-cheek-pencil-tea-rose.html",
    "selection3":"Moisturising and Nourishing 2 in 1 Lip & Cheek Jumbo Pencil",
    "selection3_url":"https://www.myglamm.com/product/clean-beauty-cocoa-butter-lip-and-cheek-pencil-tea-rose.html",
    "selection4": 513,
    "selection4_url":"https://www.myglamm.com/product/clean-beauty-cocoa-butter-lip-and-cheek-pencil-tea-rose.html"
    },
    {
        id:22,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/LB-FB-copy_2.jpg",
    "selection2":"LIT Liquid Matte Lipstick ",
    "selection2_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-superfoods-kajal-lit-velvet-matte-liquid-lipstick.html",
    "selection3":"Moringa Oil Enriched Matte Lipstick & Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts & Hydrating, Velvet Matte Liquid Lipcolour",
    "selection3_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-superfoods-kajal-lit-velvet-matte-liquid-lipstick.html",
    "selection4": 592,
    "selection4_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-superfoods-kajal-lit-velvet-matte-liquid-lipstick.html"
    },
    {
        id:23,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Kuwtk-(1)-(1).jpg",
    "selection2":"LIT Satin Matte Lipstick",
    "selection2_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-lit-matte-lipliner-pencil.html",
    "selection3":"Hi-Wattage 3D Satin Matte Finish Lipstick With Intense Colour Payoff & Intensely Pigmented, Defining Lipliner",
    "selection3_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-lit-matte-lipliner-pencil.html",
    "selection4": 517,
    "selection4_url":"https://www.myglamm.com/product/lit-satin-matte-lipstick-lit-matte-lipliner-pencil.html"
    },
    {
        id:24,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Thku-(1)_3.jpg",
    "selection2":"LIT Velvet Matte Liquid Lipstick ",
    "selection2_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-superfoods-kajal.html",
    "selection3":"Hydrating, Velvet Matte Liquid Lipcolour & Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
    "selection3_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-superfoods-kajal.html",
    "selection4": 434,
    "selection4_url":"https://www.myglamm.com/product/lit-velvet-matte-liquid-lipstick-superfoods-kajal.html"
    },
    {
        id:25,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/re1.jpg",
    "selection2":"LIT Liquid Matte Lipstick ",
    "selection2_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-superfoods-kajal.html",
    "selection3":"Moringa Oil Enriched Matte Lipstick & Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
    "selection3_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-superfoods-kajal.html",
    "selection4": 434,
    "selection4_url":"https://www.myglamm.com/product/lit-liquid-matte-lipstick-superfoods-kajal.html"
    },
    {
        id:26,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Possessed-(1).jpg",
    "selection2":"Butterlicious",
    "selection2_url":"https://www.myglamm.com/product/butterlicious-possessed.html",
    "selection3":"Shea Butter Creamy Matte Lipstick",
    "selection3_url":"https://www.myglamm.com/product/butterlicious-possessed.html",
    "selection4": 581,
    "selection4_url":"https://www.myglamm.com/product/butterlicious-possessed.html"
    },
    {
        id:27,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/sensual-9.jpeg",
    "selection2":"Manish Malhotra Metallic Lipstick",
    "selection2_url":"https://www.myglamm.com/product/manish-malhotra-metallic-lipstick-sensual.html",
    "selection3":"Limited Edition Metallic Matte Lipstick",
    "selection3_url":"https://www.myglamm.com/product/manish-malhotra-metallic-lipstick-sensual.html",
    "selection4": 577,
    "selection4_url":"https://www.myglamm.com/product/manish-malhotra-metallic-lipstick-sensual.html"
    },
    {
        id:28,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/Mai-tai-with-Swatch.jpg",
    "selection2":"LIT Creamy Matte Lipstick Set Of 2",
    "selection2_url":"https://www.myglamm.com/product/lit-creamy-matte-lipstick-set-of-2.html",
    "selection3":"Precision Perfect Matte Slimstick",
    "selection3_url":"https://www.myglamm.com/product/lit-creamy-matte-lipstick-set-of-2.html",
    "selection4": 654,
    "selection4_url":"https://www.myglamm.com/product/lit-creamy-matte-lipstick-set-of-2.html"
    },
    {
        id:29,
        qty:1,
    "image":"https://files.myglamm.com/site-images/800x800/org-(1)-1.jpg",
    "selection2":"K.Play Flavoured Lipstick Set Of 2",
    "selection2_url":"https://www.myglamm.com/product/kplay-flavoured-lipstick-set-of-2.html",
    "selection3":"Orange Flavoured Vitamin E-enriched Creamy Lipstick",
    "selection3_url":"https://www.myglamm.com/product/kplay-flavoured-lipstick-set-of-2.html",
    "selection4": 545,
    "selection4_url":"https://www.myglamm.com/product/kplay-flavoured-lipstick-set-of-2.html"
    }
    ]
    ,
    "Shampoo":[
        {
            id:30,
            qty:1,
        "image":"https://files.myglamm.com/site-images/800x800/Artboard-1-(1).jpg",
        "selection2":"MyGlamm SUPERFOODS Onion & Moringa Shampoo",
        "selection2_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-shampoo.html",
        "selection3":"For Hair Fall Control",
        "selection3_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-shampoo.html",
        "selection4": 164,
        "selection4_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-shampoo.html",
        "selection5":"₹ 299",
        "selection5_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-shampoo.html"
        },
        {
            id:31,
            qty:1,
        "image":"https://files.myglamm.com/site-images/800x800/SHP-(1).jpg",
        "selection2":"MyGlamm SUPERFOODS Cacao, Coffee & Coconut Shampoo",
        "selection2_url":"https://www.myglamm.com/product/superfoods-cacao-coffee-coconut-shampoo.html",
        "selection3":"Anti-Dandruff & Moisturising Hair Cleanser",
        "selection3_url":"https://www.myglamm.com/product/superfoods-cacao-coffee-coconut-shampoo.html",
        "selection4": 219,
        "selection4_url":"https://www.myglamm.com/product/superfoods-cacao-coffee-coconut-shampoo.html",
        "selection5":"₹ 399",
        "selection5_url":"https://www.myglamm.com/product/superfoods-cacao-coffee-coconut-shampoo.html"
        },
        {
            id:32,
            qty:1,
        "image":"https://files.myglamm.com/site-images/800x800/Passion-Fruit--Rosemary-Shampoo.jpg",
        "selection2":"MyGlamm SUPERFOODS Passion Fruit & Rosemary Shampoo",
        "selection2_url":"https://www.myglamm.com/product/superfoods-passion-fruit-rosemary-shampoo.html",
        "selection3":"Nourishing & Cleansing Shampoo with extracts from natural superfoods",
        "selection3_url":"https://www.myglamm.com/product/superfoods-passion-fruit-rosemary-shampoo.html",
        "selection4": 299,
        "selection4_url":"https://www.myglamm.com/product/superfoods-passion-fruit-rosemary-shampoo.html",
        "selection5":"₹ 499",
        "selection5_url":"https://www.myglamm.com/product/superfoods-passion-fruit-rosemary-shampoo.html"
        },
        {
            id:33,
            qty:1,
        "image":"https://files.myglamm.com/site-images/800x800/Passion-Fruit--Rosemary-Shampoo.jpg",
        "selection2":"MyGlamm SUPERFOODS Passion Fruit & Rosemary Shampoo",
        "selection2_url":"https://www.myglamm.com/product/superfoods-passion-fruit-rosemary-shampoo.html",
        "selection3":"Nourishing & Cleansing Shampoo with extracts from natural superfoods",
        "selection3_url":"https://www.myglamm.com/product/superfoods-passion-fruit-rosemary-shampoo.html",
        "selection4": 299,
        "selection4_url":"https://www.myglamm.com/product/superfoods-passion-fruit-rosemary-shampoo.html",
        "selection5":"₹ 499",
        "selection5_url":"https://www.myglamm.com/product/superfoods-passion-fruit-rosemary-shampoo.html"
        },
        {
            id:34,
            qty:1,
        "image":"https://files.myglamm.com/site-images/800x800/Product-1_13.jpg",
        "selection2":"MyGlamm SUPERFOODS Onion & Moringa Shampoo - Flat Price",
        "selection2_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-shampoo-flat-price.html",
        "selection3":"For Hair Fall Control",
        "selection3_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-shampoo-flat-price.html",
        "selection4": 199,
        "selection4_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-shampoo-flat-price.html",
        "selection5":"₹ 299",
        "selection5_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-shampoo-flat-price.html"
        },
        {
            id:35,
            qty:1,
        "image":"https://files.myglamm.com/site-images/800x800/SMP-(1).jpg",
        "selection2":"MyGlamm SUPERFOODS Cacao, Coconut & Coffee Shampoo with SUPERFOODS Pouch",
        "selection2_url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-shampoo-with-superfoods-pouch.html",
        "selection3":"Anti-Dandruff & Moisturising Hair Cleanser",
        "selection3_url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-shampoo-with-superfoods-pouch.html",
        "selection4": 278,
        "selection4_url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-shampoo-with-superfoods-pouch.html",
        "selection5":"₹ 464",
        "selection5_url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-shampoo-with-superfoods-pouch.html"
        },
        {
            id:36,
            qty:1,
        "image":"https://files.myglamm.com/site-images/800x800/SF--Hair-Fall-Control-2.jpg",
        "selection2":"MyGlamm SUPERFOODS Hair Fall Control Combo",
        "selection2_url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html",
        "selection3":"Hair Fall Control With Extracts From Natural Superfoods",
        "selection3_url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html",
        "selection4": 359,
        "selection4_url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html",
        "selection5":"₹ 598",
        "selection5_url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html"
        },
        {
            id:37,
            qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Artboard-1-(2).jpg",
            "url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner.html",
            "selection2":"MyGlamm SUPERFOODS Onion & Moringa Conditioner",
            "selection2_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner.html",
            "selection3":"For Hair Fall Control",
            "selection3_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner.html",
            "selection4": 179,
            "selection4_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner.html",
            "selection5":"₹ 299",
            "selection5_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner.html"
            },
            {
                id:38,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Passion-Fruit---Olive-Conditioner-1_1.jpg",
            "url":"https://www.myglamm.com/product/superfoods-passion-fruit-olive-conditioner.html",
            "selection2":"MyGlamm SUPERFOODS Passion Fruit & Olive Conditioner",
            "selection2_url":"https://www.myglamm.com/product/superfoods-passion-fruit-olive-conditioner.html",
            "selection3":"Nourishing & Moisturizing Conditioner with nourishing extracts from superfoods",
            "selection3_url":"https://www.myglamm.com/product/superfoods-passion-fruit-olive-conditioner.html",
            "selection4":239,
            "selection4_url":"https://www.myglamm.com/product/superfoods-passion-fruit-olive-conditioner.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-passion-fruit-olive-conditioner.html"
            },
            {
                id:39,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/CNDTR-(1).jpg",
            "url":"https://www.myglamm.com/product/superfoods-cacao-coconut-coffee-conditioner.html",
            "selection2":"MyGlamm SUPERFOODS Cacao, Coconut & Coffee Conditioner",
            "selection2_url":"https://www.myglamm.com/product/superfoods-cacao-coconut-coffee-conditioner.html",
            "selection3":"Smoothening & Softening Hair Conditioner",
            "selection3_url":"https://www.myglamm.com/product/superfoods-cacao-coconut-coffee-conditioner.html",
            "selection4": 219,
            "selection4_url":"https://www.myglamm.com/product/superfoods-cacao-coconut-coffee-conditioner.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-cacao-coconut-coffee-conditioner.html"
            },
            {
                id:40,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/SF--Hair-Fall-Control-2.jpg",
            "url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html",
            "selection2":"MyGlamm SUPERFOODS Hair Fall Control Combo",
            "selection2_url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html",
            "selection3":"Hair Fall Control With Extracts From Natural Superfoods",
            "selection3_url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html",
            "selection4": 359,
            "selection4_url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html",
            "selection5":"₹ 598",
            "selection5_url":"https://www.myglamm.com/product/myglamm-superfoods-hair-fall-control-combo.html"
            },
            {
                id:41,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/CNNN-(1).jpg",
            "url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-conditioner-with-superfoods-pouch.html",
            "selection2":"MyGlamm SUPERFOODS Cacao, Coconut & Coffee Conditioner with SUPERFOODS Pouch",
            "selection2_url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-conditioner-with-superfoods-pouch.html",
            "selection3":"Smoothening & Softening Hair Conditioner",
            "selection3_url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-conditioner-with-superfoods-pouch.html",
            "selection4": 278,
            "selection4_url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-conditioner-with-superfoods-pouch.html",
            "selection5":"₹ 464",
            "selection5_url":"https://www.myglamm.com/product/myglamm-superfoods-cacao-coconut-coffee-conditioner-with-superfoods-pouch.html"
            },
            {
                id:42,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Product-1-2.jpg",
            "url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner-flat-price.html",
            "selection2":"MyGlamm SUPERFOODS Onion & Moringa Conditioner - Flat Price",
            "selection2_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner-flat-price.html",
            "selection3":"For Hair Fall Control",
            "selection3_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner-flat-price.html",
            "selection4": 199,
            "selection4_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner-flat-price.html",
            "selection5":"₹ 299",
            "selection5_url":"https://www.myglamm.com/product/myglamm-superfoods-onion-moringa-conditioner-flat-price.html"
            }
        ],
        "SkinCare":[
            {
                id:43,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/No.-1-Sheet-Mask---Open-product-final.png",
            "selection2":"POPxo De-Tan Jam Instant Brightening Yoghurt Sheet Mask",
            "selection2_url":"https://www.myglamm.com/product/popxo-detan-jam-instant-brightening-yoghurt-sheet-mask.html",
            "selection3":"Sheet Mask For a Post-sun Glow Up",
            "selection3_url":"https://www.myglamm.com/product/popxo-detan-jam-instant-brightening-yoghurt-sheet-mask.html",
            "selection4":"₹ 99",
            "selection4_url":"https://www.myglamm.com/product/popxo-detan-jam-instant-brightening-yoghurt-sheet-mask.html"
            },
            {
                id:44,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/BRSGt-(1).jpg",
            "selection2":"K.Play Sheet Mask",
            "selection2_url":"https://www.myglamm.com/product/kplay-mandarin-brightening-sheet-mask.html",
            "selection3":"Mandarin-infused Brightening Sheet Mask",
            "selection3_url":"https://www.myglamm.com/product/kplay-mandarin-brightening-sheet-mask.html",
            "selection4": 73,
            "selection4_url":"https://www.myglamm.com/product/kplay-mandarin-brightening-sheet-mask.html",
            "selection5":"₹ 145",
            "selection5_url":"https://www.myglamm.com/product/kplay-mandarin-brightening-sheet-mask.html"
            },
            {
                id:45,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Beach-bum-(1)_1.png",
            "selection2":"POPxo Beach Bum Ultra-Light Sunscreen Spray SPF 50 PA+++ 50ml",
            "selection2_url":"https://www.myglamm.com/product/popxo-beach-bum-ultra-light-sunscreen-spray-spf-50.html",
            "selection3":"Sunscreen For Girls On The Go",
            "selection3_url":"https://www.myglamm.com/product/popxo-beach-bum-ultra-light-sunscreen-spray-spf-50.html",
            "selection4": 297,
            "selection4_url":"https://www.myglamm.com/product/popxo-beach-bum-ultra-light-sunscreen-spray-spf-50.html",
            "selection5":"₹ 349",
            "selection5_url":"https://www.myglamm.com/product/popxo-beach-bum-ultra-light-sunscreen-spray-spf-50.html"
            },
            {
                id:46,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Facewash_3.jpg",
            "selection2":"WIPEOUT Germ Killing Face Wash",
            "selection2_url":"https://www.myglamm.com/product/wipeout-germ-killing-face-wash.html",
            "selection3":"Tea Tree Oil & Vitamin E-infused Face Wash",
            "selection3_url":"https://www.myglamm.com/product/wipeout-germ-killing-face-wash.html",
            "selection4": 71,
            "selection4_url":"https://www.myglamm.com/product/wipeout-germ-killing-face-wash.html",
            "selection5":"₹ 119",
            "selection5_url":"https://www.myglamm.com/product/wipeout-germ-killing-face-wash.html"
            },
            {
                id:47,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/1-(1)_3.jpg",
            "selection2":"GLOW Iridescent Brightening Sheet Mask",
            "selection2_url":"https://www.myglamm.com/product/glow-iridescent-brightening-sheet-mask.html",
            "selection3":"Rosehip Oil-infused Brightening Sheet Mask",
            "selection3_url":"https://www.myglamm.com/product/glow-iridescent-brightening-sheet-mask.html",
            "selection4": 129,
            "selection4_url":"https://www.myglamm.com/product/glow-iridescent-brightening-sheet-mask.html",
            "selection5":"₹ 199",
            "selection5_url":"https://www.myglamm.com/product/glow-iridescent-brightening-sheet-mask.html"
            },
            {
                id:48,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Body-lotion.jpg",
            "selection2":"WIPEOUT Germ Killing Body Lotion",
            "selection2_url":"https://www.myglamm.com/product/wipeout-germ-killing-body-lotion.html",
            "selection3":"Tea Tree Oil-infused Moisturizing Body Lotion",
            "selection3_url":"https://www.myglamm.com/product/wipeout-germ-killing-body-lotion.html",
            "selection4": 120,
            "selection4_url":"https://www.myglamm.com/product/wipeout-germ-killing-body-lotion.html",
            "selection5":"₹ 219",
            "selection5_url":"https://www.myglamm.com/product/wipeout-germ-killing-body-lotion.html"
            },
            {
                id:49,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/13-Sheet-Mask-post-1-Sandalwood-&-Saffron.jpg",
            "selection2":"Manish Malhotra Sheet Mask",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-sandalwood-saffron-sheet-mask.html",
            "selection3":"Brightening Sheet Mask made with Bamboo Fibers for glowing, clear skin",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-sandalwood-saffron-sheet-mask.html",
            "selection4": 174,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-sandalwood-saffron-sheet-mask.html",
            "selection5":"₹ 249",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-sandalwood-saffron-sheet-mask.html"
            },
            {
                id:50,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/MMHG-(1).jpg",
            "selection2":"MyGlamm MyGlamm Wipeout Germ Killing Face Wash - Lavender & Neem",
            "selection2_url":"https://www.myglamm.com/product/wipeout-germ-killing-face-wash-lavender-neem.html",
            "selection3":"Lavender & Neem Infused Purifying Face Wash",
            "selection3_url":"https://www.myglamm.com/product/wipeout-germ-killing-face-wash-lavender-neem.html",
            "selection4": 89,
            "selection4_url":"https://www.myglamm.com/product/wipeout-germ-killing-face-wash-lavender-neem.html",
            "selection5":"₹ 119",
            "selection5_url":"https://www.myglamm.com/product/wipeout-germ-killing-face-wash-lavender-neem.html"
            },
            {
                id:51,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/No.-1-Sheet-Mask---Open-product-final.png",
            "selection2":"POPxo De-Tan Jam Instant Brightening Yoghurt Sheet Mask",
            "selection2_url":"https://www.myglamm.com/product/popxo-detan-jam-instant-brightening-yoghurt-sheet-mask.html",
            "selection3":"Sheet Mask For a Post-sun Glow Up",
            "selection3_url":"https://www.myglamm.com/product/popxo-detan-jam-instant-brightening-yoghurt-sheet-mask.html",
            "selection4": 84,
            "selection4_url":"https://www.myglamm.com/product/popxo-detan-jam-instant-brightening-yoghurt-sheet-mask.html",
            "selection5":"₹ 99",
            "selection5_url":"https://www.myglamm.com/product/popxo-detan-jam-instant-brightening-yoghurt-sheet-mask.html"
            },
            {
                id:52,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/LLVB-(1).jpg",
            "selection2":"MyGlamm Wipeout Germ Killing Face Scrub - Lavender & Neem",
            "selection2_url":"https://www.myglamm.com/product/wipeout-germ-killing-lavender-neem-face-scrub.html",
            "selection3":"Lavender & Neem Infused Purifying Face scrub",
            "selection3_url":"https://www.myglamm.com/product/wipeout-germ-killing-lavender-neem-face-scrub.html",
            "selection4": 84,
            "selection4_url":"https://www.myglamm.com/product/wipeout-germ-killing-lavender-neem-face-scrub.html",
            "selection5":"₹ 129",
            "selection5_url":"https://www.myglamm.com/product/wipeout-germ-killing-lavender-neem-face-scrub.html"
            },
            {
                id:53,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Product-shot-01_4.jpg",
            "selection2":"MyGlamm 10% Niacinamide Clarifying Serum",
            "selection2_url":"https://www.myglamm.com/product/myglamm-10-niacinamide-clarifying-serum-enriched-with-moringa-tiger-grass.html",
            "selection3":"Clinically Tested, Highly Concentrated Face Serum with Niacinamide & Natural Extracts",
            "selection3_url":"https://www.myglamm.com/product/myglamm-10-niacinamide-clarifying-serum-enriched-with-moringa-tiger-grass.html",
            "selection4": 419,
            "selection4_url":"https://www.myglamm.com/product/myglamm-10-niacinamide-clarifying-serum-enriched-with-moringa-tiger-grass.html",
            "selection5":"₹ 699",
            "selection5_url":"https://www.myglamm.com/product/myglamm-10-niacinamide-clarifying-serum-enriched-with-moringa-tiger-grass.html"
            },
            {
                id:54,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/VFFD-(1).jpg",
            "selection2":"MyGlamm Wipeout Germ Killing Face Scrub - Rose & Honey",
            "selection2_url":"https://www.myglamm.com/product/wipeout-germ-killing-rose-honey-face-scrub.html",
            "selection3":"Rose & Honey Infused Germ-killing & Purifying Face scrub",
            "selection3_url":"https://www.myglamm.com/product/wipeout-germ-killing-rose-honey-face-scrub.html",
            "selection4":77,
            "selection4_url":"https://www.myglamm.com/product/wipeout-germ-killing-rose-honey-face-scrub.html",
            "selection5":"₹ 129",
            "selection5_url":"https://www.myglamm.com/product/wipeout-germ-killing-rose-honey-face-scrub.html"
            },
            {
                id:55,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/17-Amla-Moisturising-Gel-Post-1-01.jpg",
            "selection2":"Manish Malhotra Amla Moisturising Gel",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-amla-moisturising-gel.html",
            "selection3":"Gel-based Natural Moisturiser",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-amla-moisturising-gel.html",
            "selection4": 425,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-amla-moisturising-gel.html",
            "selection5":"₹ 945",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-amla-moisturising-gel.html"
            },
            {
                id:56,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Product-shot-01_2.jpg",
            "selection2":"MyGlamm 3% Hyaluronic Acid Hydrating Serum",
            "selection2_url":"https://www.myglamm.com/product/myglamm-3-hyaluronic-acid-hydrating-serum-enriched-with-kakadu-plum-marine-algae.html",
            "selection3":"Clinically Tested, Highly Concentrated Face Serum with Hyaluronic Acid & Natural Extracts",
            "selection3_url":"https://www.myglamm.com/product/myglamm-3-hyaluronic-acid-hydrating-serum-enriched-with-kakadu-plum-marine-algae.html",
            "selection4": 419,
            "selection4_url":"https://www.myglamm.com/product/myglamm-3-hyaluronic-acid-hydrating-serum-enriched-with-kakadu-plum-marine-algae.html",
            "selection5":"₹ 699",
            "selection5_url":"https://www.myglamm.com/product/myglamm-3-hyaluronic-acid-hydrating-serum-enriched-with-kakadu-plum-marine-algae.html"
            },
            {
                id:57,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Blueberry---Strawberry-Face-Cream-1_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Blueberry & Strawberry Face Cream",
            "selection2_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection3":"Brightening & hydrating face cream with natural extracts from natural superfoods",
            "selection3_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection4": 259,
            "selection4_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html"
            },
            {
                id:58,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/GLWFCMS-(1).jpg",
            "selection2":"MyGlamm SUPERFOODS Cacao Glow Face Mask",
            "selection2_url":"https://www.myglamm.com/product/superfoods-cacao-glow-face-mask.html",
            "selection3":"Nourishing & Brightening Face Mask",
            "selection3_url":"https://www.myglamm.com/product/superfoods-cacao-glow-face-mask.html",
            "selection4": 244,
            "selection4_url":"https://www.myglamm.com/product/superfoods-cacao-glow-face-mask.html",
            "selection5":"₹ 349",
            "selection5_url":"https://www.myglamm.com/product/superfoods-cacao-glow-face-mask.html"
            },
            {
                id:59,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/FCCD-(1)_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Cacao & Berry Face Wash",
            "selection2_url":"https://www.myglamm.com/product/superfoods-cacao-berry-face-wash.html",
            "selection3":"Nourishing & Brightening Face Cleanser",
            "selection3_url":"https://www.myglamm.com/product/superfoods-cacao-berry-face-wash.html",
            "selection4": 164,
            "selection4_url":"https://www.myglamm.com/product/superfoods-cacao-berry-face-wash.html",
            "selection5":"₹ 299",
            "selection5_url":"https://www.myglamm.com/product/superfoods-cacao-berry-face-wash.html"
            },
            {
                id:60,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/LP1_4.png",
            "selection2":"POPxo First Kiss Lip Balm SPF 15",
            "selection2_url":"https://www.myglamm.com/product/popxo-first-kiss-lip-balm-spf-15.html",
            "selection3":"Lip Balm For Sun Lovers",
            "selection3_url":"https://www.myglamm.com/product/popxo-first-kiss-lip-balm-spf-15.html",
            "selection4": 110,
            "selection4_url":"https://www.myglamm.com/product/popxo-first-kiss-lip-balm-spf-15.html",
            "selection5":"₹ 129",
            "selection5_url":"https://www.myglamm.com/product/popxo-first-kiss-lip-balm-spf-15.html"
            },
            {
                id:61,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Blueberry---Strawberry-Face-Cream-1_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Blueberry & Strawberry Face Cream",
            "selection2_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection3":"Brightening & hydrating face cream with natural extracts from natural superfoods",
            "selection3_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection4": 299,
            "selection4_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html"
            },
            {
                id:62,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Blueberry---Strawberry-Face-Cream-1_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Blueberry & Strawberry Face Cream",
            "selection2_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection3":"Brightening & hydrating face cream with natural extracts from natural superfoods",
            "selection3_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection4": 299,
            "selection4_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-blueberry-strawberry-face-cream.html"
            },
            {
                id:63,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/BDDYYLLTT-(1).jpg",
            "selection2":"MyGlamm SUPERFOODS Cacao & Berries Body Lotion",
            "selection2_url":"https://www.myglamm.com/product/superfoods-cacao-berries-body-lotion.html",
            "selection3":"Nourishing & Repairing Body Lotion",
            "selection3_url":"https://www.myglamm.com/product/superfoods-cacao-berries-body-lotion.html",
            "selection4": 249,
            "selection4_url":"https://www.myglamm.com/product/superfoods-cacao-berries-body-lotion.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-cacao-berries-body-lotion.html"
            },
            {
                id:64,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Watermelon---Aloe-Body-Lotion-1_2.jpg",
            "selection2":"MyGlamm SUPERFOODS Watermelon & Aloe Body Lotion",
            "selection2_url":"https://www.myglamm.com/product/superfoods-watermelon-aloe-vera-body-lotion.html",
            "selection3":"Moisture-boosting, antioxidant-rich body lotion",
            "selection3_url":"https://www.myglamm.com/product/superfoods-watermelon-aloe-vera-body-lotion.html",
            "selection4": 209,
            "selection4_url":"https://www.myglamm.com/product/superfoods-watermelon-aloe-vera-body-lotion.html",
            "selection5":"₹ 349",
            "selection5_url":"https://www.myglamm.com/product/superfoods-watermelon-aloe-vera-body-lotion.html"
            },
            {
                id:65,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Watermelon---Aloe-Body-Lotion-1_2.jpg",
            "selection2":"MyGlamm SUPERFOODS Watermelon & Aloe Body Lotion",
            "selection2_url":"https://www.myglamm.com/product/superfoods-watermelon-aloe-vera-body-lotion.html",
            "selection3":"Moisture-boosting, antioxidant-rich body lotion",
            "selection3_url":"https://www.myglamm.com/product/superfoods-watermelon-aloe-vera-body-lotion.html",
            "selection4": 209,
            "selection4_url":"https://www.myglamm.com/product/superfoods-watermelon-aloe-vera-body-lotion.html",
            "selection5":"₹ 349",
            "selection5_url":"https://www.myglamm.com/product/superfoods-watermelon-aloe-vera-body-lotion.html"
            },
            {
                id:66,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/FAce-(1).png",
            "selection2":"Manish Malhotra Illuminating Golden Sheet Mask",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-illuminating-golden-sheet-mask.html",
            "selection3":"Ultra-Indulgent Golden Mesh Sheet Mask With Tangerine Peel Extract",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-illuminating-golden-sheet-mask.html",
            "selection4": 227,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-illuminating-golden-sheet-mask.html",
            "selection5":"₹ 349",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-illuminating-golden-sheet-mask.html"
            },
            {
                id:67,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Product-shot-01_3.jpg",
            "selection2":"MyGlamm 1% Multi-Peptide Collagen Boosting Serum",
            "selection2_url":"https://www.myglamm.com/product/myglamm-1-multi-peptide-collagen-boosting-serum-enriched-with-sweet-almond-marula.html",
            "selection3":"Clinically Tested, Highly Concentrated Face Serum with Multi-Peptide & Natural Extracts",
            "selection3_url":"https://www.myglamm.com/product/myglamm-1-multi-peptide-collagen-boosting-serum-enriched-with-sweet-almond-marula.html",
            "selection4": 384,
            "selection4_url":"https://www.myglamm.com/product/myglamm-1-multi-peptide-collagen-boosting-serum-enriched-with-sweet-almond-marula.html",
            "selection5":"₹ 699",
            "selection5_url":"https://www.myglamm.com/product/myglamm-1-multi-peptide-collagen-boosting-serum-enriched-with-sweet-almond-marula.html"
            },
            {
                id:68,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/BCHBU.png",
            "selection2":"POPxo Beach Bum Multi-use Sunscreen Spray SPF 50 PA+++ 50ml",
            "selection2_url":"https://www.myglamm.com/product/popxo-beach-bum-ultra-light-sunscreen-spray-spf-50.html",
            "selection3":"Sunscreen For Girls On The Go",
            "selection3_url":"https://www.myglamm.com/product/popxo-beach-bum-ultra-light-sunscreen-spray-spf-50.html",
            "selection4": 297,
            "selection4_url":"https://www.myglamm.com/product/popxo-beach-bum-ultra-light-sunscreen-spray-spf-50.html",
            "selection5":"₹ 349",
            "selection5_url":"https://www.myglamm.com/product/popxo-beach-bum-ultra-light-sunscreen-spray-spf-50.html"
            },
            {
                id:69,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Kiwi---Coconut-Sunscreen-1_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Kiwi & Coconut Sunscreen",
            "selection2_url":"https://www.myglamm.com/product/superfoods-kiwi-coconut-sunscreen.html",
            "selection3":"Broad-Spectrum, Lightweight & Non-greasy Sunscreen With SPF 30 PA+++",
            "selection3_url":"https://www.myglamm.com/product/superfoods-kiwi-coconut-sunscreen.html",
            "selection4": 279,
            "selection4_url":"https://www.myglamm.com/product/superfoods-kiwi-coconut-sunscreen.html",
            "selection5":"₹ 499",
            "selection5_url":"https://www.myglamm.com/product/superfoods-kiwi-coconut-sunscreen.html"
            },
            {
                id:70,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Eye-Cream-swatch.jpg",
            "selection2":"YOUTHfull Hydrating Eye Cream With Water Bank Technology",
            "selection2_url":"https://www.myglamm.com/product/youthfull-hydrating-eye-cream-with-water-bank-technology.html",
            "selection3":"Marine Triple-Action Nourishing, Hydrating & Firming Eye Cream",
            "selection3_url":"https://www.myglamm.com/product/youthfull-hydrating-eye-cream-with-water-bank-technology.html",
            "selection4": 492,
            "selection4_url":"https://www.myglamm.com/product/youthfull-hydrating-eye-cream-with-water-bank-technology.html",
            "selection5":"₹ 895",
            "selection5_url":"https://www.myglamm.com/product/youthfull-hydrating-eye-cream-with-water-bank-technology.html"
            },
            {
                id:71,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Watermelon---Raspberry-Face-Wash-1_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Watermelon & Raspberry Face Wash",
            "selection2_url":"https://www.myglamm.com/product/superfoods-watermelon-raspberry-face-wash.html",
            "selection3":"Hydrating & Brightening Facial Cleanser",
            "selection3_url":"https://www.myglamm.com/product/superfoods-watermelon-raspberry-face-wash.html",
            "selection4": 164,
            "selection4_url":"https://www.myglamm.com/product/superfoods-watermelon-raspberry-face-wash.html",
            "selection5":"₹ 299",
            "selection5_url":"https://www.myglamm.com/product/superfoods-watermelon-raspberry-face-wash.html"
            },
            {
                id:72,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/eyeeee-(1).png",
            "selection2":"Manish Malhotra Revitalising Golden Eye Mask",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-revitalising-golden-eye-mask.html",
            "selection3":"Ultra-Indulgent Golden Mesh Eye Mask With Almond and Carrot Extracts",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-revitalising-golden-eye-mask.html",
            "selection4": 89,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-revitalising-golden-eye-mask.html",
            "selection5":"₹ 149",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-revitalising-golden-eye-mask.html"
            },
            {
                id:73,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Artboard-1-3.jpg",
            "selection2":"Avacado & Aloe Eye Cream",
            "selection2_url":"https://www.myglamm.com/product/superfoods-avocado-aloe-vera-eye-cream.html",
            "selection3":"Soothing, Nourishing Antioxidant-rich Eye Cream",
            "selection3_url":"https://www.myglamm.com/product/superfoods-avocado-aloe-vera-eye-cream.html",
            "selection4": 299,
            "selection4_url":"https://www.myglamm.com/product/superfoods-avocado-aloe-vera-eye-cream.html",
            "selection5":"₹ 499",
            "selection5_url":"https://www.myglamm.com/product/superfoods-avocado-aloe-vera-eye-cream.html"
            },
            {
                id:74,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Product-shot-01_1.jpg",
            "selection2":"MyGlamm 15% Vitamin C Brightening Serum",
            "selection2_url":"https://www.myglamm.com/product/myglamm-15-vitamin-c-brightening-serum-enriched-with-pomegranate-and-licorice.html",
            "selection3":"Clinically Tested, Highly Concentrated Face Serum with Vitamin C & Natural Extracts",
            "selection3_url":"https://www.myglamm.com/product/myglamm-15-vitamin-c-brightening-serum-enriched-with-pomegranate-and-licorice.html",
            "selection4": 479,
            "selection4_url":"https://www.myglamm.com/product/myglamm-15-vitamin-c-brightening-serum-enriched-with-pomegranate-and-licorice.html",
            "selection5":"₹ 799",
            "selection5_url":"https://www.myglamm.com/product/myglamm-15-vitamin-c-brightening-serum-enriched-with-pomegranate-and-licorice.html"
            },
            {
                id:75,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/16-Kesar-Face-Pack-Gel-Post-1-01.jpg",
            "selection2":"Manish Malhotra Kesar Face Pack Gel",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-kesar-face-pack-gel.html",
            "selection3":"Gel-based Natural Face Pack",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-kesar-face-pack-gel.html",
            "selection4": 425,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-kesar-face-pack-gel.html",
            "selection5":"₹ 945",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-kesar-face-pack-gel.html"
            },
            {
                id:76,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/18-Cinnamon-Ginger-Night-Gel-Post-1-01.jpg",
            "selection2":"Manish Malhotra Cinnamon Ginger Night Gel",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-cinnamon-ginger-night-gel.html",
            "selection3":"Gel-based Natural Night Treatment",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-cinnamon-ginger-night-gel.html",
            "selection4": 425,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-cinnamon-ginger-night-gel.html",
            "selection5":"₹ 945",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-cinnamon-ginger-night-gel.html"
            },
            {
                id:77,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Foam-Cleanser-Swatch.jpg",
            "selection2":"YOUTHfull Hydrating Foam Cleanser With Water Bank Technology",
            "selection2_url":"https://www.myglamm.com/product/youthfull-hydrating-foam-cleanser-with-water-bank-technology.html",
            "selection3":"Marine Hydrating & pH-Balancing Foaming Cleanser",
            "selection3_url":"https://www.myglamm.com/product/youthfull-hydrating-foam-cleanser-with-water-bank-technology.html",
            "selection4": 358,
            "selection4_url":"https://www.myglamm.com/product/youthfull-hydrating-foam-cleanser-with-water-bank-technology.html",
            "selection5":"₹ 795",
            "selection5_url":"https://www.myglamm.com/product/youthfull-hydrating-foam-cleanser-with-water-bank-technology.html"
            },
            {
                id:78,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/21-Rose-Lip-Moisturising-Gel-Post-1-01.jpg",
            "selection2":"Manish Malhotra Rose Lip Moisturising Gel",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-rose-lip-moisturising-gel.html",
            "selection3":"Gel-based Natural Lip Treatment",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-rose-lip-moisturising-gel.html",
            "selection4": 335,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-rose-lip-moisturising-gel.html",
            "selection5":"₹ 745",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-rose-lip-moisturising-gel.html"
            },
            {
                id:79,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/LIP-(3).png",
            "selection2":"Manish Malhotra Hydrating Golden Lip Mask",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-hydrating-golden-lip-mask.html",
            "selection3":"Ultra-Indulgent Golden Mesh Lip Mask With Blueberry and Açaíberry Extracts",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-hydrating-golden-lip-mask.html",
            "selection4": 119,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-hydrating-golden-lip-mask.html",
            "selection5":"₹ 149",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-hydrating-golden-lip-mask.html"
            },
            {
                id:79,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/23-Tulsi-Cleansing-Foam-Gel-Post-1-01.jpg",
            "selection2":"Manish Malhotra Tulsi Cleansing Foam Gel",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-tulsi-cleansing-foam-gel.html",
            "selection3":"Gel-based Natural Foaming Cleanser",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-tulsi-cleansing-foam-gel.html",
            "selection4": 403,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-tulsi-cleansing-foam-gel.html",
            "selection5":"₹ 895",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-tulsi-cleansing-foam-gel.html"
            },
            {
                id:80,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/MSTCRM-(1).jpg",
            "selection2":"GLOW Iridescent Brightening Moisturising Cream",
            "selection2_url":"https://www.myglamm.com/product/glow-iridescent-brightening-moisturising-cream.html",
            "selection3":"Rosehip Oil-infused Daily Moisturising Cream",
            "selection3_url":"https://www.myglamm.com/product/glow-iridescent-brightening-moisturising-cream.html",
            "selection4":638,
            "selection4_url":"https://www.myglamm.com/product/glow-iridescent-brightening-moisturising-cream.html",
            "selection5":"₹ 1595",
            "selection5_url":"https://www.myglamm.com/product/glow-iridescent-brightening-moisturising-cream.html"
            },
            {
                id:81,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/22-Haldi-Eye-Gel-post-1-01.jpg",
            "selection2":"Manish Malhotra Haldi Eye Gel",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-haldi-eye-gel.html",
            "selection3":"Gel-based Natural Eye Treatment",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-haldi-eye-gel.html",
            "selection4": 335,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-haldi-eye-gel.html",
            "selection5":"₹ 745",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-haldi-eye-gel.html"
            },
            {
                id:82,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/GGL1-(4)_1.png",
            "selection2":"POPxo Glow Goals Illuminating Sunscreen SPF 30 PA+++ 30g",
            "selection2_url":"https://www.myglamm.com/product/popxo-glow-goals-illuminating-sunscreen-spf-30.html",
            "selection3":"Sunscreen For Sun-chasers",
            "selection3_url":"https://www.myglamm.com/product/popxo-glow-goals-illuminating-sunscreen-spf-30.html",
            "selection4": 297,
            "selection4_url":"https://www.myglamm.com/product/popxo-glow-goals-illuminating-sunscreen-spf-30.html",
            "selection5":"₹ 349",
            "selection5_url":"https://www.myglamm.com/product/popxo-glow-goals-illuminating-sunscreen-spf-30.html"
            },
            {
                id:83,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/DDCF-(1)_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Cacao & Berries SPF Day Cream",
            "selection2_url":"https://www.myglamm.com/product/superfoods-cacao-berries-day-cream-with-spf.html",
            "selection3":"Nourishing & Protecting Day Cream With SPF",
            "selection3_url":"https://www.myglamm.com/product/superfoods-cacao-berries-day-cream-with-spf.html",
            "selection4": 279,
            "selection4_url":"https://www.myglamm.com/product/superfoods-cacao-berries-day-cream-with-spf.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-cacao-berries-day-cream-with-spf.html"
            },
            {
                id:84,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/SF5_1.png",
            "selection2":"POPxo Selfie-Ready Tinted Sunscreen SPF 50 PA+++ 30g",
            "selection2_url":"https://www.myglamm.com/product/popxo-selfie-ready-tinted-sunscreen-spf-50.html",
            "selection3":"Sunscreen For Selfies",
            "selection3_url":"https://www.myglamm.com/product/popxo-selfie-ready-tinted-sunscreen-spf-50.html",
            "selection4": 424,
            "selection4_url":"https://www.myglamm.com/product/popxo-selfie-ready-tinted-sunscreen-spf-50.html",
            "selection5":"₹ 499",
            "selection5_url":"https://www.myglamm.com/product/popxo-selfie-ready-tinted-sunscreen-spf-50.html"
            },
            {
                id:85,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Blueberry---Kakadu-Plum-Sleeping-Mask-1_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Blueberry & Kakadu Plum Sleeping Mask",
            "selection2_url":"https://www.myglamm.com/product/superfoods-blueberry-kakadu-plum-sleeping-mask.html",
            "selection3":"Brightening & skin repairing Sleeping Mask with natural extracts from natural superfoods",
            "selection3_url":"https://www.myglamm.com/product/superfoods-blueberry-kakadu-plum-sleeping-mask.html",
            "selection4": 299,
            "selection4_url":"https://www.myglamm.com/product/superfoods-blueberry-kakadu-plum-sleeping-mask.html",
            "selection5":"₹ 499",
            "selection5_url":"https://www.myglamm.com/product/superfoods-blueberry-kakadu-plum-sleeping-mask.html"
            },
            {
                id:86,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Blueberry---Kakadu-Plum-Sleeping-Mask-1_1.jpg",
            "selection2":"MyGlamm SUPERFOODS Blueberry & Kakadu Plum Sleeping Mask",
            "selection2_url":"https://www.myglamm.com/product/superfoods-blueberry-kakadu-plum-sleeping-mask.html",
            "selection3":"Brightening & skin repairing Sleeping Mask with natural extracts from natural superfoods",
            "selection3_url":"https://www.myglamm.com/product/superfoods-blueberry-kakadu-plum-sleeping-mask.html",
            "selection4": 299,
            "selection4_url":"https://www.myglamm.com/product/superfoods-blueberry-kakadu-plum-sleeping-mask.html",
            "selection5":"₹ 499",
            "selection5_url":"https://www.myglamm.com/product/superfoods-blueberry-kakadu-plum-sleeping-mask.html"
            },
            {
                id:87,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/SCRmk-(1).jpg",
            "selection2":"SUPERFOODS Cacao & Berries 2-In-1 Scrub Mask",
            "selection2_url":"https://www.myglamm.com/product/superfoods-cacao-berries-2-in-1-scrub-mask.html",
            "selection3":"Nourishing & Brightening 2-in-1 Exfoliating Mask",
            "selection3_url":"https://www.myglamm.com/product/superfoods-cacao-berries-2-in-1-scrub-mask.html",
            "selection4": 219,
            "selection4_url":"https://www.myglamm.com/product/superfoods-cacao-berries-2-in-1-scrub-mask.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-cacao-berries-2-in-1-scrub-mask.html"
            },
            {
                id:88,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/SCRmk-(1).jpg",
            "selection2":"SUPERFOODS Cacao & Berries 2-In-1 Scrub Mask",
            "selection2_url":"https://www.myglamm.com/product/superfoods-cacao-berries-2-in-1-scrub-mask.html",
            "selection3":"Nourishing & Brightening 2-in-1 Exfoliating Mask",
            "selection3_url":"https://www.myglamm.com/product/superfoods-cacao-berries-2-in-1-scrub-mask.html",
            "selection4": 219,
            "selection4_url":"https://www.myglamm.com/product/superfoods-cacao-berries-2-in-1-scrub-mask.html",
            "selection5":"₹ 399",
            "selection5_url":"https://www.myglamm.com/product/superfoods-cacao-berries-2-in-1-scrub-mask.html"
            },
            {
                id:89,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/20-Methi-Face-Scrub-Gel-post-1-01.jpg",
            "selection2":"Manish Malhotra Methi Face Scrub Gel",
            "selection2_url":"https://www.myglamm.com/product/manish-malhotra-methi-face-scrub-gel.html",
            "selection3":"Gel-based Natural Face Scrub",
            "selection3_url":"https://www.myglamm.com/product/manish-malhotra-methi-face-scrub-gel.html",
            "selection4": 425,
            "selection4_url":"https://www.myglamm.com/product/manish-malhotra-methi-face-scrub-gel.html",
            "selection5":"₹ 945",
            "selection5_url":"https://www.myglamm.com/product/manish-malhotra-methi-face-scrub-gel.html"
            },
            {
                id:90,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/Product-shot-01.jpg",
            "selection2":"MyGlamm 1% Retinol Age-Defying Serum",
            "selection2_url":"https://www.myglamm.com/product/myglamm-1-retinol-age-defying-serum-enriched-with-caffeine-and-aloe-leaf-extract.html",
            "selection3":"Clinically Tested, Highly Concentrated Face Serum with Retinol & Natural Extracts",
            "selection3_url":"https://www.myglamm.com/product/myglamm-1-retinol-age-defying-serum-enriched-with-caffeine-and-aloe-leaf-extract.html",
            "selection4": 479,
            "selection4_url":"https://www.myglamm.com/product/myglamm-1-retinol-age-defying-serum-enriched-with-caffeine-and-aloe-leaf-extract.html",
            "selection5":"₹ 799",
            "selection5_url":"https://www.myglamm.com/product/myglamm-1-retinol-age-defying-serum-enriched-with-caffeine-and-aloe-leaf-extract.html"
            },
            {
                id:91,
                qty:1,
            "image":"https://files.myglamm.com/site-images/800x800/HHDR-(4).png",
            "selection2":"POPxo H2O Booster Sunscreen Gel SPF 30 PA+++ 30g",
            "selection2_url":"https://www.myglamm.com/product/popxo-h20-booster-sunscreen-gel-spf-30.html",
            "selection3":"Sunscreen For Dew Lovers",
            "selection3_url":"https://www.myglamm.com/product/popxo-h20-booster-sunscreen-gel-spf-30.html",
            "selection4": 279,
            "selection4_url":"https://www.myglamm.com/product/popxo-h20-booster-sunscreen-gel-spf-30.html",
            "selection5":"₹ 349",
            "selection5_url":"https://www.myglamm.com/product/popxo-h20-booster-sunscreen-gel-spf-30.html"
            }
            ],
            "SanitizingCare":[

                {
                    id:92,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/5-sanitizing-wipes.jpg",
                "selection2":"WIPEOUT Sanitizing Wipes",
                "selection2_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes.html",
                "selection3":"Eucalyptus & Lemon Wipes That Sanitize & Moisturize",
                "selection3_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes.html",
                "selection4": 52,
                "selection4_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes.html",
                "selection5":"₹ 69",
                "selection5_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes.html"
                },
                {
                    id:93,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/Cleansing-towels-(2).jpg",
                "selection2":"WIPEOUT Cleansing Towels",
                "selection2_url":"https://www.myglamm.com/product/wipeout-cleansing-towels.html",
                "selection3":"Neem & Lemon pH Balanced Towels That Sanitize & Moisturise",
                "selection3_url":"https://www.myglamm.com/product/wipeout-cleansing-towels.html",
                "selection4": 137,
                "selection4_url":"https://www.myglamm.com/product/wipeout-cleansing-towels.html",
                "selection5":"₹ 249",
                "selection5_url":"https://www.myglamm.com/product/wipeout-cleansing-towels.html"
                },
                {
                    id:94,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/Cleansing-towe.jpg",
                "selection2":"WIPEOUT Cleansing Towels Set Of 2",
                "selection2_url":"https://www.myglamm.com/product/wipeout-cleansing-towels-set-of-2.html",
                "selection3":"Neem & Lemon pH Balanced Towels That Sanitize & Moisturise",
                "selection3_url":"https://www.myglamm.com/product/wipeout-cleansing-towels-set-of-2.html",
                "selection4": 299,
                "selection4_url":"https://www.myglamm.com/product/wipeout-cleansing-towels-set-of-2.html",
                "selection5":"₹ 498",
                "selection5_url":"https://www.myglamm.com/product/wipeout-cleansing-towels-set-of-2.html"
                },
                {
                    id:95,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/MM-Face-Wipes-1-2-(1).jpg",
                "selection2":"Manish Malhotra Antimicrobial Facial Wipes - Flat Price",
                "selection2_url":"https://www.myglamm.com/product/manish-malhotra-antimicrobial-facial-wipes-flat-price.html",
                "selection3":"Oud Oil Cleansing & Makeup Removing Facial Wipes",
                "selection3_url":"https://www.myglamm.com/product/manish-malhotra-antimicrobial-facial-wipes-flat-price.html",
                "selection4": 199,
                "selection4_url":"https://www.myglamm.com/product/manish-malhotra-antimicrobial-facial-wipes-flat-price.html",
                "selection5":"₹ 349",
                "selection5_url":"https://www.myglamm.com/product/manish-malhotra-antimicrobial-facial-wipes-flat-price.html"
                },
                {
                    id:96,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/Sanitizing-spray-(1).jpg",
                "selection2":"WIPEOUT Sanitizing Spray + WIPEOUT Cleansing Towels",
                "selection2_url":"https://www.myglamm.com/product/wipeout-sanitizing-spray-wipeout-cleansing-towels.html",
                "selection3":"Lemongrass, Neem & Lemon Spray To Sanitize & Refresh & Neem & Lemon pH Balanced Towels That Sanitize & Moisturise",
                "selection3_url":"https://www.myglamm.com/product/wipeout-sanitizing-spray-wipeout-cleansing-towels.html",
                "selection4": 269,
                "selection4_url":"https://www.myglamm.com/product/wipeout-sanitizing-spray-wipeout-cleansing-towels.html",
                "selection5":"₹ 448",
                "selection5_url":"https://www.myglamm.com/product/wipeout-sanitizing-spray-wipeout-cleansing-towels.html"
                },
                {
                    id:97,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/Cleansing-towels-(1).jpg",
                "selection2":"WIPEOUT Cleansing Towels - Flat Price",
                "selection2_url":"https://www.myglamm.com/product/wipeout-cleansing-towels-flat-price.html",
                "selection3":"Neem & Lemon pH Balanced Towels That Sanitize & Moisturise",
                "selection3_url":"https://www.myglamm.com/product/wipeout-cleansing-towels-flat-price.html",
                "selection4": 199,
                "selection4_url":"https://www.myglamm.com/product/wipeout-cleansing-towels-flat-price.html",
                "selection5":"₹ 249",
                "selection5_url":"https://www.myglamm.com/product/wipeout-cleansing-towels-flat-price.html"
                },
                {
                    id:98,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/25-sanitizing-wipes-(3).jpg",
                "selection2":"WIPEOUT Sanitizing Wipes 25 Wipes Pack Set Of 3",
                "selection2_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack-set-of-3.html",
                "selection3":"Eucalyptus & Lemon Wipes That Sanitize & Moisturize",
                "selection3_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack-set-of-3.html",
                "selection4": 286,
                "selection4_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack-set-of-3.html",
                "selection5":"₹ 477",
                "selection5_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack-set-of-3.html"
                },
                {
                    id:99,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/25-sanitizing-wipes.jpg",
                "selection2":"WIPEOUT Sanitizing Wipes 25 Wipes Pack",
                "selection2_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack.html",
                "selection3":"Eucalyptus & Lemon Wipes That Sanitize & Moisturize",
                "selection3_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack.html",
                "selection4": 127,
                "selection4_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack.html",
                "selection5":"₹ 159",
                "selection5_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack.html"
                },
                {
                    id:100,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/5-sanitizing-wipes_1.jpg",
                "selection2":"WIPEOUT Sanitizing Wipes Set Of 3",
                "selection2_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-3.html",
                "selection3":"Eucalyptus & Lemon Wipes That Sanitize & Moisturize",
                "selection3_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-3.html",
                "selection4": 135,
                "selection4_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-3.html",
                "selection5":"₹ 207",
                "selection5_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-3.html"
                },
                {
                    id:101,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/27-Antimicrobial-Facial-Wipes-Post-1-Sanitizing-Spray.jpg",
                "selection2":"Manish Malhotra Antimicrobial Facial Wipes",
                "selection2_url":"https://www.myglamm.com/product/manish-malhotra-antimicrobial-facial-wipes.html",
                "selection3":"Oud Oil Cleansing & Makeup Removing Facial Wipes",
                "selection3_url":"https://www.myglamm.com/product/manish-malhotra-antimicrobial-facial-wipes.html",
                "selection4": 209,
                "selection4_url":"https://www.myglamm.com/product/manish-malhotra-antimicrobial-facial-wipes.html",
                "selection5":"₹ 349",
                "selection5_url":"https://www.myglamm.com/product/manish-malhotra-antimicrobial-facial-wipes.html"
                },
                {
                    id:102,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/25-sanitizing-wipes-(3)_1.jpg",
                "selection2":"WIPEOUT Sanitizing Wipes 25 Wipes Pack Set Of 2",
                "selection2_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack-set-of-2.html",
                "selection3":"Eucalyptus & Lemon Wipes That Sanitize & Moisturize",
                "selection3_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack-set-of-2.html",
                "selection4": 207,
                "selection4_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack-set-of-2.html",
                "selection5":"₹ 318",
                "selection5_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-25-wipes-pack-set-of-2.html"
                },
                {
                    id:103,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/5-sanitizing-wipes_1.jpg",
                "selection2":"WIPEOUT Sanitizing Wipes Set Of 3",
                "selection2_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-3.html",
                "selection3":"Eucalyptus & Lemon Wipes That Sanitize & Moisturize",
                "selection3_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-3.html",
                "selection4": 135,
                "selection4_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-3.html",
                "selection5":"₹ 207",
                "selection5_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-3.html"
                },
                {
                    id:104,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/Baby-wipes_1.jpg",
                "selection2":"WIPEOUT Baby Safety Wipes Set Of 2",
                "selection2_url":"https://www.myglamm.com/product/wipeout-baby-safety-wipes-set-of-2.html",
                "selection3":"Aloe Vera & Chamomile pH Balanced Wipes That Sanitize & Moisturise",
                "selection3_url":"https://www.myglamm.com/product/wipeout-baby-safety-wipes-set-of-2.html",
                "selection4": 359,
                "selection4_url":"https://www.myglamm.com/product/wipeout-baby-safety-wipes-set-of-2.html",
                "selection5":"₹ 598",
                "selection5_url":"https://www.myglamm.com/product/wipeout-baby-safety-wipes-set-of-2.html"
                },
                {
                    id:105,
                qty:1,
                "image":"https://files.myglamm.com/site-images/800x800/5-sanitizing-wipes_2.jpg",
                "selection2":"WIPEOUT Sanitizing Wipes Set Of 2",
                "selection2_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-2.html",
                "selection3":"Eucalyptus & Lemon Wipes That Sanitize & Moisturize",
                "selection3_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-2.html",
                "selection4": 97,
                "selection4_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-2.html",
                "selection5":"₹ 138",
                "selection5_url":"https://www.myglamm.com/product/wipeout-sanitizing-wipes-set-of-2.html"
                }
                ],
                "CollectionProducts":[
                    {
                        id:106,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Noir-(1).jpg",
                    "selection2":"Jet Set Eyes Kajal Eyeliner - Noir",
                    "selection3":"Long-wear Kohl Pencil",
                    "selection4":750
                    },
                    {
                        id:107,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Bleu-(1).jpg",
                    "selection2":"Jet Set Eyes Kajal Eyeliner - Bleu",
                    "selection3":"Long-wear Kohl Pencil",
                    "selection4": 750
                    },
                    {
                        id:108,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/pool-(1).jpg",
                    "selection2":"MyGlamm Two of your kind Nail Enamel Set - Poolside Soiree",
                    "selection3":"Long-Lasting Gel Finish Nail Enamel Set",
                    "selection4":192,
                    "selection5":"₹ 295"
                    },
                    {
                        id:109,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Promiscious-(1).jpg",
                    "selection2":"Ultimatte Long-Stay Matte Lipstick - Promiscuous",
                    "selection3":"Hyaluronic Acid-enriched, Moisturising, Matte Slim Lipstick",
                    "selection4": 419,
                    "selection5":"₹ 699"
                    },
                    {
                        id:110,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Twstr-(1).jpg",
                    "selection2":"Twist It Mascara",
                    "selection3":"Volumising and Curling Mascara",
                    "selection4":"₹ 387",
                    "selection5":"₹ 645"
                    },
                    {
                        id:111,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Frolc-(1)_1.jpg",
                    "selection2":"Tint It Up - Frolic",
                    "selection3":"Lip & Cheek Stain",
                    "selection4": 313,
                    "selection5":"₹ 695"
                    },
                    {
                        id:112,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Product-shot-01_4.jpg",
                    "selection2":"MyGlamm 10% Niacinamide Clarifying Serum enriched with Moringa & Tiger Grass",
                    "selection3":"Clinically Tested, Highly Concentrated Face Serum with Niacinamide & Natural Extracts",
                    "selection4": 419,
                    "selection5":"₹ 699"
                    },
                    {
                        id:113,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Product-shot-01_2.jpg",
                    "selection2":"MyGlamm 3% Hyaluronic Acid Hydrating Serum enriched with Kakadu Plum & Marine Algae",
                    "selection3":"Clinically Tested, Highly Concentrated Face Serum with Hyaluronic Acid & Natural Extracts",
                    "selection4": 419,
                    "selection5":"₹ 699"
                    },
                    {
                        id:114,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Product-shot-01_1.jpg",
                    "selection2":"MyGlamm 15% Vitamin C Brightening Serum enriched with Pomegranate and Licorice",
                    "selection3":"Clinically Tested, Highly Concentrated Face Serum with Vitamin C & Natural Extracts",
                    "selection4": 479,
                    "selection5":"₹ 799"
                    },
                    {
                        id:115,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Product-shot-01.jpg",
                    "selection2":"MyGlamm 1% Retinol Age-Defying Serum enriched with Caffeine and Aloe Leaf Extract",
                    "selection3":"Clinically Tested, Highly Concentrated Face Serum with Retinol & Natural Extracts",
                    "selection4": 479,
                    "selection5":"₹ 799"
                    },
                    {
                        id:116,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/HND1.jpg",
                    "selection2":"Wipeout Germ Killing Hand Wash - Tea Tree - 200ml",
                    "selection3":"Tea Tree Infused Moisturising Hand Wash",
                    "selection4": 119,
                    "selection5":"₹ 149"
                    },
                    {
                        id:117,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Laguna-Beach-(1).jpg",
                    "selection2":"Wanderlust Chrome Matte Nail Polish - Laguna Beach",
                    "selection3":"Long-lasting Chrome Matte Nail Polish",
                    "selection4": 137,
                    "selection5":"₹ 249"
                    },
                    {
                        id:118,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Tntd-Prfctn-Prmr-(1).jpg",
                    "selection2":"Tinted Perfection Face Primer",
                    "selection3":"Base Primer & Pore Minimiser",
                    "selection4": 438,
                    "selection5":"₹ 1095"
                    },
                    {
                        id:119,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/GGM-(1).jpg",
                    "selection2":"Glow to Glamour Shimmer And Fixing Powder",
                    "selection3":"2 in 1 Shimmer and Fixing Powder",
                    "selection4": 478,
                    "selection5":"₹ 1195"
                    },
                    {
                        id:120,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Eclairs-(1).jpg",
                    "selection2":"Wanderlust Sand Matte Nail Polish - Eclairs",
                    "selection3":"Long-lasting Sand Matte Nail Polish",
                    "selection4": 162,
                    "selection5":"₹ 249"
                    },
                    {
                        id:121,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Honey-(1).jpg",
                    "selection2":"Total Makeover FF Cream Foundation Palette - Honey",
                    "selection3":"5 in 1 Primer-Concealer-Foundation-Compact with SPF 30 & Skin Tone Corrector Palette",
                    "selection4": 580,
                    "selection5":"₹ 1450"
                    },
                    {
                        id:122,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Snksed-(1).jpg",
                    "selection2":"Spotlight Illuminating Liquid - Sunkissed",
                    "selection3":"Shimmer Liquid Bronzer",
                    "selection4": 478,
                    "selection5":"₹ 1195"
                    },
                    {
                        id:123,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/staydefined.jpeg",
                    "selection2":"Stay Defined Liquid Eyeliner Brow Powder - Ebony & Walnut",
                    "selection3":"2 in 1 Waterproof Matte Eyeliner + HD Brow Powder",
                    "selection4": 438,
                    "selection5":"₹ 1095"
                    },
                    {
                        id:124,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Stydfnd-(1).jpg",
                    "selection2":"Stay Defined Liquid Eyeliner Brow Powder - Nutmeg & Espresso",
                    "selection3":"2 in 1 Waterproof Matte Eyeliner + HD Brow Powder",
                    "selection4": 438,
                    "selection5":"₹ 1095"
                    },
                    {
                        id:125,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/Chisel-It-Contour-Kit--Slate-01.jpg",
                    "selection2":"Chisel It Contour Kit - Poker Face",
                    "selection3":"3 in 1 Highlighter + Blush + Bronzer",
                    "selection4": 500,
                    "selection5":"₹ 1250"
                    },
                    {
                        id:126,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/flat-foundation-brush-2.jpeg",
                    "selection2":"Flat Foundation Brush",
                    "selection3":"Liquid & Cream Foundation Brush",
                    "selection4": 460,
                    "selection5":"₹ 1150"
                    },
                    {
                        id:127,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/AmpereLip-(1).jpg",
                    "selection2":"Perfect Curves Matte Lip Crayon - Ampere",
                    "selection3":"Moisturising Matte Lipstick",
                    "selection4": 489,
                    "selection5":"₹ 695"
                    },
                    {
                        id:128,
                qty:1,
                    "image":"https://files.myglamm.com/site-images/400x400/eye-tapered-blender-brush-2.jpeg",
                    "selection2":"Eye Tapered Blender Brush",
                    "selection3":"Tapered Eyeshadow Blending Brush",
                    "selection4": 420,
                    "selection5":"₹ 1050"
                    }
                    ]
    }


    export const AppContextProvider = ({ children }) => {
        const [isAuth, setIsAuth] = useState(false);
        const[userName,setUser]=useState('')
        const [cartData, setCartData] = useState([]);
        const [TotalPrice, setTotalPrice] = useState(0);
        const[quantity,settotalQuntity]=useState(0)
        const toast = useToast()

        const LoginUser = (name)=>{
            console.log("APP CONTEXC")
            setIsAuth(true)
            setUser(name)
        }

        const LogOutUser = ()=>{
            setIsAuth(false)
            setUser("")
        }


        const handleCart = (data) => {
          if (cartData.indexOf(data) !== -1) {
            toast({
                title: 'Already Added',
                description: "",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
            //  console.log(cartData.indexOf(data));
            return;
          }
      
          toast({
            title: 'Added To Cart',
            description: "",
            status: 'success',
            duration: 1500,
            isClosable: true,
          })
          setCartData([...cartData, data]);
      
          //  console.log(cartData.indexOf(data));
        };

        const handleRemove = (id) => {
            const arr = cartData.filter((item) => item.id !== id);
            setCartData(arr);
            handlePrice();
            handleQty()
          };
        
          const handleChnage = (item, D) => {
            const idx = cartData.indexOf(item);
            const arr = cartData;
            arr[idx].qty += D;
        
            if (arr[idx].qty === 0) {
              arr[idx].qty = 1;
            }
        
            setCartData([...arr]);
          };
        
          const handlePrice = () => {
            let endprice = 0;
        
            cartData.map((el) => {
              endprice += el.qty * Number(el.selection4);
            });
        
            setTotalPrice(endprice);
            console.log(endprice);
          };
          const handleQty = () => {
            let qty = 0;
        
            cartData.map((el) => {
              qty += Number(el.qty) 
            });
        
            settotalQuntity(qty);
            console.log(qty);
          };
        
          useEffect(() => {
            handlePrice();
            handleQty()
          });
        
        return (
          <AppContext.Provider value={{ AllData,
            handleRemove,isAuth,
          handleChnage,
          quantity,
          setCartData,
          cartData,
          handleCart,userName,
          TotalPrice ,LoginUser,
LogOutUser}} >
      
            {children}
      
          </AppContext.Provider>
        )
      }
      
      export default AppContext
      
