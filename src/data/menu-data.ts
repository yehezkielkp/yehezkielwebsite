import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Services',
    link: '/service',
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio-standard',
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog-classic',
  },
  {
    id: 5,
    title: 'About',
    link: '/about-us',
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact',
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id:1,
    title: 'Home',
    link: '/',
    dropdown_menus:[]
  },
  {
    id: 2,
    title: 'Services',
    link: '/service',
    dropdown_menus:[
      { title: 'Our Services', link: '/service' },
      { title: 'Service Details', link: '/service-details' },
    ]
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio-standard',
    dropdown_menus:[
      { title: 'Portfolio Standard', link: '/portfolio-standard' },
      { title: 'Portfolio Grid 2 Col', link: '/portfolio-grid-col-2' },
      { title: 'Portfolio Grid 3 Col', link: '/portfolio-grid-col-3' },
      { title: 'Portfolio Grid 4 Col', link: '/portfolio-grid-col-4' },
      { title: 'Portfolio Details', link: '/portfolio-details-1' },
    ]
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog-classic',
    dropdown_menus:[
      { title: 'Blog Classic', link: '/blog-classic' },
      { title: 'Blog List', link: '/blog-list' },
      { title: 'Blog Details', link: '/blog-details/1' },
    ]
  },
  {
    id: 5,
    title: 'About',
    link: '/about-us',
    dropdown_menus:[
      { title: 'About Us', link: '/about-us' },
      { title: 'FAQ', link: '/faq' },
    ]
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact',
    dropdown_menus:[]
  }
]
