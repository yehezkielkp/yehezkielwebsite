import { IBlogDT } from "@/types/blog-d-t";

// blog images

// home 5
import blog_1 from "@/assets/img/home-05/blog/blog-1.jpg";
import blog_2 from "@/assets/img/home-05/blog/blog-2.jpg";
import blog_3 from "@/assets/img/home-05/blog/blog-3.jpg";
import blog_4 from "@/assets/img/home-05/blog/blog-4.jpg";
// blog modern 
import b_m_1 from "@/assets/img/inner-blog/blog-standard/blog-1.jpg";
import b_m_2 from "@/assets/img/inner-blog/blog-standard/blog-2.jpg";
import b_m_3 from "@/assets/img/inner-blog/blog-standard/blog-3.jpg";
import b_m_4 from "@/assets/img/inner-blog/blog-standard/blog-4.jpg";
import b_m_5 from "@/assets/img/inner-blog/blog-standard/blog-5.jpg";
import b_m_6 from "@/assets/img/inner-blog/blog-standard/blog-6.jpg";
import b_m_7 from "@/assets/img/inner-blog/blog-standard/blog-7.jpg";

// avatar
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-1.jpg";

// blog postbox img
import blog_post_1 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-1.jpg';
import blog_post_2 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-2.jpg';
import blog_post_3 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-3.jpg';
import blog_post_4 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-4.jpg';

// blog list images
import blog_list_1 from '@/assets/img/inner-blog/blog-right-sidebar/blog-1.jpg';
import blog_list_2 from '@/assets/img/inner-blog/blog-right-sidebar/blog-2.jpg';
import blog_list_3 from '@/assets/img/inner-blog/blog-right-sidebar/blog-3.jpg';
import blog_list_4 from '@/assets/img/inner-blog/blog-right-sidebar/blog-4.jpg';
import blog_list_5 from '@/assets/img/inner-blog/blog-right-sidebar/blog-5.jpg';



export const blog_home_five: IBlogDT[] = [
  {
    id: 1,
    img: blog_1,
    title: "Technical SEO: The Foundation of Organic Search Success",
    date: '15. JAN. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 2,
    img: blog_2,
    title: "On-Page SEO Best Practices for 2025",
    date: '22. JAN. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 3,
    img: blog_3,
    title: "Content Strategy That Actually Ranks on Google",
    date: '28. JAN. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 4,
    img: blog_4,
    title: "Keyword Research Strategy for Indonesian Market",
    date: '12. FEB. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  }
];


export const blog_modern: IBlogDT[] = [
  {
    id: 5,
    img: b_m_1,
    title: 'Technical SEO: The Foundation of Organic Search Success',
    date: '15. JAN. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 6,
    img: b_m_2,
    title: 'On-Page SEO Best Practices for 2025',
    date: '22. JAN. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 7,
    img: b_m_3,
    title: 'Content Strategy That Actually Ranks on Google',
    date: '28. JAN. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 8,
    img: b_m_4,
    title: 'How to Optimize Website Loading Speed for Better SEO',
    date: '05. FEB. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 9,
    img: b_m_5,
    title: 'Keyword Research Strategy for Indonesian Market',
    date: '12. FEB. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 10,
    img: b_m_6,
    title: 'Local SEO for Indonesian Businesses',
    date: '25. FEB. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 11,
    img: b_m_7,
    title: 'Link Building Strategies That Actually Work in 2025',
    date: '08. MAR. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },

  {
    id: 12,
    img: b_m_2,
    title: 'Mobile-First Indexing: Optimize Your Site for Mobile SEO',
    date: '15. MAR. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 13,
    img: b_m_5,
    title: 'SEO Analytics: Measuring What Matters',
    date: '22. MAR. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 14,
    img: b_m_4,
    title: 'Schema Markup: Boost Your Search Visibility',
    date: '29. MAR. 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
];


export const blog_classic: IBlogDT[] = [
  {
    id: 15,
    title: "Technical SEO: The Foundation of Organic Search Success",
    date: '15 JANUARY, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
    avatar: avatar,
    blogHeroSlider: true,
    coverImage: b_m_1,
  },
  {
    id: 16,
    title: "On-Page SEO Best Practices for 2025",
    date: '22 JANUARY, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
    avatar: avatar,
    blogHeroSlider: true,
    coverImage: b_m_2,
  },
  {
    id: 16.5,
    title: "Content Strategy That Actually Ranks on Google",
    date: '28 JANUARY, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
    avatar: avatar,
    blogHeroSlider: true,
    coverImage: b_m_3,
  },
  {
    id: 17,
    img: blog_post_1,
    title: "How to Optimize Website Loading Speed for Better SEO",
    desc: 'Website speed is a critical ranking factor. Learn proven techniques to improve Core Web Vitals, reduce page load time, and boost your search engine rankings.',
    date: '05 FEBRUARY, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 18,
    img: blog_post_2,
    title: "Keyword Research Strategy for Indonesian Market",
    desc: 'Master the art of keyword research specifically for the Indonesian market. Discover tools, techniques, and strategies to find high-value keywords that drive traffic.',
    date: '12 FEBRUARY, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
    video: true,
    videoId: 'rVHxkxJM3rY'
  },
  {
    id: 19,
    blogQuoteTwo: true,
    title: "GREAT SEO IS NOT ABOUT TRICKS, IT'S ABOUT CREATING VALUE FOR USERS",
    desc: 'Focus on user intent, quality content, and technical excellence. SEO success comes from understanding what your audience truly needs.',
    date: '18 FEBRUARY, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 20,
    imgSlider: true,
    images: [blog_post_1, blog_post_2, blog_post_3],
    title: "Local SEO for Indonesian Businesses",
    desc: 'Dominate local search results with proven local SEO strategies. Learn how to optimize Google Business Profile, local citations, and location-based content.',
    date: '25 FEBRUARY, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 21,
    blogQuote: true,
    title: "YEHEZKIEL KRISTAMA, DIGITAL MARKETING EXPERT",
    desc: 'Data-driven strategies focused on ROI and sustainable business growth through comprehensive SEO implementation.',
    date: '02 MARCH, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 22,
    img: blog_post_4,
    title: "Link Building Strategies That Actually Work in 2025",
    desc: 'Discover white-hat link building techniques that deliver real results. Learn how to earn high-quality backlinks and improve your domain authority.',
    date: '08 MARCH, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
];


export const blog_lists: IBlogDT[] = [
  {
    id: 23,
    img: blog_list_1,
    title: "Technical SEO: The Foundation of Organic Search Success",
    date: '15 JAN, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 24,
    img: blog_list_2,
    title: "On-Page SEO Best Practices for 2025",
    date: '22 JAN, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 25,
    img: blog_list_3,
    title: "Content Strategy That Actually Ranks on Google",
    date: '28 JAN, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 26,
    img: blog_list_4,
    title: "Keyword Research Strategy for Indonesian Market",
    date: '12 FEB, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 27,
    img: blog_list_5,
    title: "Local SEO for Indonesian Businesses",
    date: '25 FEB, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
  {
    id: 28,
    img: blog_list_2,
    title: "Link Building Strategies That Actually Work in 2025",
    date: '08 MAR, 2025',
    category: 'SEO',
    author: 'Yehezkiel Kristama',
  },
];

export const blog_data: IBlogDT[] = [
  ...blog_lists,
  ...blog_home_five,
  ...blog_modern,
  ...blog_classic,
]

