import { StaticImageData } from "next/image";

export interface IWork {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string | StaticImageData[];
  imageHeader: string | StaticImageData[];
  roles: string[] | string;
}

export interface Gold {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string | StaticImageData[];
  imageHeader: string | StaticImageData[];
  roles: string[] | string;
}

export interface Home {
  title: string;
  description: string;
  image: string | StaticImageData[];
  details: string | StaticImageData[];
}

export interface Gallery {
  collomn1: string | StaticImageData[];
  collomn2: string | StaticImageData[];
}


export interface IAbout {
  id: number;
  imageHeader: string | StaticImageData[];
  image: string | StaticImageData[];
}
