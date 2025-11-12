import { StaticImageData } from "next/image";

export interface IBlogDT {
  id: number;
  img?: StaticImageData;
  images?: StaticImageData[];
  coverImage?: StaticImageData;
  title: string;
  date: string;
  category: string;
  author: string;
  videoId?: string;
  avatar?: StaticImageData;
  blogQuote?: boolean;
  video?: boolean;
  imgSlider?: boolean;
  blogQuoteTwo?: boolean;
  blogHeroSlider?: boolean;
  trending?: boolean;
  desc?: string;
}
