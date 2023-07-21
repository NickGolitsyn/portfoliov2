import { motion } from "framer-motion"
import back from '/back.svg'

// interface ProjNavProps {
//   link: any;
// }

export default function ProjNav({ link }) {
  const css = `
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
  `
  return (
    <div className="sticky top-28 mt-36 mb-10 mx-8 flex justify-between md:mx-16 lg:mx-32">
      <style>
        {css}
      </style>
      <motion.a
        href="/projects"
        className="flex items-center gap-1 md:gap-2 back-btn"
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
      >
        <span className="back-arrow">
          <img src={back} alt="back button" className="w-8 md:w-12" />
        </span>
        <span>
          <p className="font-bold back-text text-xs md:text-lg">BACK</p>
        </span>
      </motion.a>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }} 
        className="bg-white w-fit rounded-full"
      >
        <a className="py-3 px-5 block font-bold text-xs md:text-base href={link}" target="_blank">Visit the website</a>
      </motion.div>
  </div>
  )
}