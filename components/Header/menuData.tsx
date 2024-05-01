import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Google Business Seo ",
        newTab: false,
        path: "/service/GoogleMyBusinessSeo",
      },
      {
        id: 34,
        title: "Search Engine Optimiztion",
        newTab: false,
        path: "/service/SearchEngineoptimization",
      },
      {
        id: 35,
        title: "Website Devlopment",
        newTab: false,
        path: "/service/WebsiteDevlopment",
      },
      {
        id: 35,
        title: "White Label Seo Partners",
        newTab: false,
        path: "/service/WhitelableSEOPartners",

      },
     
    ],
  },   
  {
    id: 3,
    title: "About US",
    newTab: false,
    path: "/about",
  
  },
  // {
  //   id: 2.1,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },
  {
    id: 2.3,
    title: "Contact",  
    newTab: false,
    path: "/support",
  }, 

  
  


 
];

export default menuData;
