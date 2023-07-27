import avatar from "/avatar.png"
import dribble from "/dribble.png"
import twitter from "/twitter.png"
import youtube from "/youtube.png"
import telegram from '/telegram.svg'
import github from '/github.svg'
import linkedin from '/linkedin.svg'
import ng from '/NGsuperwide.svg'
// import ng from '/NGwide.svg'
import { motion } from "framer-motion"
import { useState } from "react"
import { useMediaQuery } from "../util/useMediaQuery"
import ThemeToggle from "./ThemeToggle"

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
}
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
}
const navLinks = [
  { name: "Home", href: "/", id: 1 },
  { name: "Projects", href: "/projects", id: 2 },
  { name: "Contact", href: "/contact", id: 3 },
]

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean
  className: string
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
        className={`${isMobile ? "text-4xl" : "text-md"} text-black dark:text-white`}
      >
        {name}
      </motion.a>
    ))}
  </div>
)

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery("(min-width: 1280px)")
  return (
    <nav className="h-24 fixed top-0 bg-stone-200 dark:bg-stone-800 bg-opacity-50 backdrop-blur-md w-full px-8 flex z-20 items-center justify-between pb-8 shadow-md pt-8 font-medium md:px-16 lg:px-32">
      {/* <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2  "
        width="250"
        height="4"
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          initial={{ pathLength: 0, opacity: 0 }}
          transition={{ delay: 1, duration: 0.75 }}
          d="M2 2L428 1.99996"
          stroke="#282828"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg> */}

      {/* <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12"
      >
        <motion.div className="hidden items-center gap-12 xl:flex">
          <img src={telegram} alt="telegram" />
          <img src={github} alt="github" />
          <img src={linkedin} alt="linkedin" />
        </motion.div>
      </motion.div> */}
      {/* Title */}

      <motion.a
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }} 
        href="/"
      >
        {/* <img src={ng} alt='NG' className=" h-5" /> */}
        <svg className="h-5 w-min" width="332" height="95" viewBox="0 0 332 95" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.8 92V2.39999H22.176L171.04 70.624V2.39999H192.8V92H171.296L22.56 24.032V92H0.8ZM331.065 42.464V58.208C331.065 82.016 314.425 94.304 281.785 94.304H265.145C230.841 94.304 213.305 78.304 213.305 47.2C213.305 16.096 230.841 0.095993 265.145 0.095993H281.785C314.553 0.095993 331.193 11.232 331.065 33.12H308.153C308.281 23.52 298.041 18.656 277.945 18.656H268.985C247.353 18.656 235.961 28.384 235.961 47.2C235.961 66.016 247.353 75.744 268.985 75.744H277.945C297.785 75.744 308.025 69.984 308.153 58.72V58.464H263.225V42.464H331.065Z" className="fill-black dark:fill-white"/>
        </svg>
      </motion.a>

      {/* Nav Items animating in  */}
      {toggled && !matches && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-stone-200 dark:bg-stone-800 opacity-80 text-2xl font-bold"
        >
          <NavLinks
            className=" flex flex-col gap-24 text-lg "
            isMobile={true}
          />
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   "
      >
        <NavLinks className="flex gap-12" isMobile={false} />
        <ThemeToggle />
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="z-50 xl:hidden flex gap-10 items-center"
      >
        <ThemeToggle />
        <div 
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden`}
        >
          <motion.span
            animate={{ 
              rotateZ: toggled ? 45 : 0, 
              y: toggled ? 8 : 0, 
              width: toggled ? 24 : 24, }}
            className="line-1 block h-0.5 w-6 bg-content bg-black dark:bg-white"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="line-2 block h-0.5 w-6 bg-content bg-black dark:bg-white"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 24 : 24,
            }}
            className="line-3 block h-0.5 w-6 bg-content bg-black dark:bg-white"
          ></motion.span>
        </div>
      </motion.div>
    </nav>
  )
}