import{j as t,m as a}from"./jsx-runtime.ab9e603e.js";import"./index.03be2d59.js";const e="/back.svg";function o({link:i}){const s=`
    .back-btn:is(:hover, :focus-within) .back-arrow {
      transition: transform 0.5s ease-out;
      transform: translateX(-5px);
    }
    .back-btn:is(:hover, :focus-within) .back-text {
      transition: transform 0.5s ease-out;
      transform: translateX(3px);
    }
    .link-box::hover {
      transition: transform 0.5s ease-out;
      transform: scale(1.05);
    }
  `;return t.jsxs("div",{className:"sticky top-28 mt-36 mb-10 mx-8 flex justify-between md:mx-16 lg:mx-32",children:[t.jsx("style",{children:s}),t.jsxs(a.a,{href:"/projects",className:"flex items-center gap-1 md:gap-2 back-btn",animate:{opacity:1,x:0},initial:{opacity:0,x:-25},transition:{delay:.35},children:[t.jsx("span",{className:"back-arrow",children:t.jsx("img",{src:e,alt:"back button",className:"w-8 md:w-12"})}),t.jsx("span",{children:t.jsx("p",{className:"font-bold back-text text-xs md:text-lg",children:"BACK"})})]}),t.jsx(a.div,{animate:{opacity:1,x:0},initial:{opacity:0,x:25},transition:{delay:.35},className:"bg-white w-fit rounded-full",children:t.jsx("a",{className:"py-3 px-5 block font-bold text-xs md:text-base href={link}",target:"_blank",children:"Visit the website"})})]})}export{o as default};
