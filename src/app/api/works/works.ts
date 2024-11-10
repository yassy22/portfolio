// clubSofa
import hearder from "../../public/assets/images/clubSofa/headeri0.png";
import clubsofa_i1 from "../../public/assets/images/clubSofa/clubsofa_i1.png";
import clubsofa_i4 from "../../public/assets/images/clubSofa/clubsofa_i4.png";
import clubsofa_i5 from "../../public/assets/images/clubSofa/clubsofa_i5.png";
import clubsofa_i6 from "../../public/assets/images/clubSofa/clubsofa_i6.png";
import clubsofa_i7 from "../../public/assets/images/clubSofa/clubsofa_i7.png";
import clubsofa_i8 from "../../public/assets/images/clubSofa/clubsofa_i8.png";
import clubsofa_iphone from "../../public/assets/images/clubSofa/clubsofa_iphone.png";

import clubsofa_gif_1 from "../../public/assets/images/clubSofa/gifs/workiV1.gif";

import inTheBeginning_gif_1 from "../../public/assets/images/thebeginnig/gif/begining_gif1.gif";
// import inTheBeginning_gif_2 from "../../public/assets/images/thebeginnig/begining_i2.png";
import inTheBeginning_full from "../../public/assets/images/thebeginnig/begining_i3_full.png";
import inTheBeginning_header from "../../public/assets/images/thebeginnig/Header_mockup.png";
import inTheBeginning_Moodboard from "../../public/assets/images/thebeginnig/Moodboard.jpg";
import Wiframe_inthebegining from "../../public/assets/images/thebeginnig/Wiframe_inthebegining.png";
import inhebegining_design_1 from "../../public/assets/images/thebeginnig/inhebegining_design_1.png";
import macbookHeader from "../../public/assets/images/thebeginnig/header_in_the_begining.png";

// scapino
import scapino_header from "../../public/assets/images/scapino/header_scapino.png";
import scapino_i1 from "../../public/assets/images/scapino/i1.png";
import scapino_i2 from "../../public/assets/images/scapino/concept.png";
import scapino_i3 from "../../public/assets/images/scapino/styleboard.png";
import scapino_i4 from "../../public/assets/images/scapino/insta.png";
import scapino_i5 from "../../public/assets/images/scapino/imga1.png";

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
    description: `
This was my first experience designing a subscription-based app, where I focused on creating an intuitive yet visually engaging interface to make the ordering process straightforward and enjoyable.

It was also my first deep dive into app design, where I learned the importance of balancing functionality with aesthetics and gained valuable experience in crafting an intuitive user flow that enhances the customer experience.
`,
    image: [
      clubsofa_gif_1,
      clubsofa_i6,
      clubsofa_i7,
      clubsofa_i1,
      clubsofa_i8,
      clubsofa_i4,
      clubsofa_i5,
    ], // Drie afbeeldingen
    imageHeader: [clubsofa_iphone, hearder],
    roles: ["creative direction", "app design"],
  },
  {
    id: 2,
    slug: "beginning",
    title: "the beginning",
    description:
      "For Train World, I designed an interactive website to enhance their online experience. I chose the theme In the Beginning and developed a one-pager that takes visitors back to the early days of train travel.\n\nFocusing on storytelling and an intuitive interface, I crafted an engaging user experience that further sharpened my skills in UX design and front-end development.",

    image: [
      inTheBeginning_gif_1,
      inTheBeginning_Moodboard,
      inhebegining_design_1,
      inTheBeginning_full,
    ], //
    imageHeader: [inTheBeginning_header, macbookHeader],
    roles: ["creative direction", "web design", "web development", "ux design"],
  },
  {
    id: 3,
    slug: "Muij",
    title: "Muij",
    description: `
For this project, I created a 3D promotional header for Muji with a 'Back to School' theme using Blender. The concept featured a minimalist, interactive mini machine showcasing Muji’s products, with subtle animations to bring the scene to life.

This project helped me refine my skills in 3D modeling and animation while aligning with Muji’s clean, functional aesthetic.
`,
    image: [moodboard_muji, styleMuij, i1_muji, i2_muji],
    imageHeader: [muiji_header],
    roles: ["creative direction", "3D modeling", "animation"],
  },

  {
    id: 4,
    slug: "scapino",
    title: "Scapino",
    description: `
As a team, we designed a digital experience for Scapino Ballet Rotterdam to connect with young adults and attract them to modern dance. The challenge was to create an engaging, interactive one-pager that captures the energy of Scapino’s performances, using storytelling to draw in a younger audience.

This project allowed us to blend creativity with functionality, enhancing my skills in UX design and front-end development while collaborating closely with my teammates to deliver a cohesive result.
`,

    image: [scapino_i1, scapino_i2, scapino_i3, scapino_i4, scapino_i5],
    imageHeader: [scapino_header],
    roles: ["frontend", "backend", "web design", "ux design"],
  },

  {
    id: 5,
    slug: "GoldGold",
    title: "Gold + Gold",
    description: "Gold + Gold",
    image: [moodboardGold, textureGold, FinalGold],
    imageHeader: [header2],
    roles: ["creative direction"],
  },
];

export default works;
