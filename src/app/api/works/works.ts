// clubSofa
import hearder from "../../public/assets/images/clubSofa/headeri0.png";
import clubsofa_i1 from "../../public/assets/images/clubSofa/clubsofa_i1.png";
import clubsofa_i4 from "../../public/assets/images/clubSofa/clubsofa_i4.png";
import clubsofa_i5 from "../../public/assets/images/clubSofa/clubsofa_i5.png";
import clubsofa_iphone from "../../public/assets/images/clubSofa/clubsofa_iphone.png";

import clubsofa_gif_1 from "../../public/assets/images/clubSofa/gifs/workiV1.gif";

// import inTheBeginning_gif_1 from "../../public/assets/images/thebeginnig/gif/begining_gif1.gif";
// import inTheBeginning_gif_2 from "../../public/assets/images/thebeginnig/begining_i2.png";
import inTheBeginning_full from "../../public/assets/images/thebeginnig/begining_i3_full.png";
import inTheBeginning_header from "../../public/assets/images/thebeginnig/Header_mockup.png";
import inTheBeginning_Moodboard from "../../public/assets/images/thebeginnig/Moodboard.jpg";
import Wiframe_inthebegining from "../../public/assets/images/thebeginnig/Wiframe_inthebegining.png";
import inhebegining_design_1 from "../../public/assets/images/thebeginnig/inhebegining_design_1.png";
import macbookHeader from "../../public/assets/images/thebeginnig/header_in_the_begining.png";

// scapino
import test from "../../public/assets/images/scapino/text_scapino.png";
import scapino_header from "../../public/assets/images/scapino/header_scapino.png";

// Gold + Gold
// import goldHeader from "../../public/assets/images/gold/header_gold.png";
// import header1 from "../../public/assets/images/gold/header_1.png";
import header2 from "../../public/assets/images/gold/Header_hands.png";

import moodboardGold from "../../public/assets/images/gold/Moodboard.png";
import textureGold from "../../public/assets/images/gold/Texture.png";
import FinalGold from "../../public/assets/images/gold/i1.png";

// muiji
import muiji_header from "../../public/assets/images/muij/muij_header.png";
import i1_muji from "../../public/assets/images/muij/i1.png";
import i2_muji from "../../public/assets/images/muij/i2.png";
import moodboard_muji from "../../public/assets/images/muij/moodboard.png";
import styleMuij from "../../public/assets/images/muij/style.png";

// details

import { IWork } from "../../data/type";

const works: IWork[] = [
  {
    id: 1,
    slug: "sofa-club",
    title: "Sofa Club",
    description: "Gold + Gold",
    image: [clubsofa_gif_1, clubsofa_i1,  clubsofa_i4], // Drie afbeeldingen
    imageHeader: [clubsofa_iphone, hearder, clubsofa_i5],
    roles: ["frontend", "backend", "creative direction", "web design"],
  },
  {
    id: 2,
    slug: "beginning",
    title: "the beginning",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texteLe Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte",

    image: [
      Wiframe_inthebegining,
      inTheBeginning_Moodboard,
      inhebegining_design_1,
      inTheBeginning_full,
    ], //
    imageHeader: [inTheBeginning_header, macbookHeader],
    roles: ["frontend", "backend", "creative direction", "web design"],
  },
  {
    id: 3,
    slug: "Muij",
    title: "Muij",
    description: "Gold + Gold",
    image: [moodboard_muji, styleMuij, i1_muji, i2_muji],
    imageHeader: [muiji_header],
    roles: ["frontend", "backend", "creative direction", "web design"],
  },

  {
    id: 4,
    slug: "scapino",
    title: "Scapino",
    description: "Gold + Gold",
    image: [test],
    imageHeader: [scapino_header],
    roles: ["frontend", "backend", "creative direction", "web design"],
  },

  {
    id: 5,
    slug: "GoldGold",
    title: "Gold + Gold",
    description: "Gold + Gold",
    image: [moodboardGold, textureGold, FinalGold],
    imageHeader: [header2],
    roles: ["frontend", "backend", "creative direction", "web design"],
  },
];

export default works;
