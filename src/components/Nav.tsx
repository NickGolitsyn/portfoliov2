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
        className={isMobile ? "text-4xl text-white" : "text-md text-white" }
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
    <nav className="h-24 fixed top-0 bg-stone-800 bg-opacity-50 backdrop-blur-md w-full px-8 flex z-20 items-center justify-between pb-8 shadow-md pt-8 font-medium md:px-16 lg:px-32">
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

      <motion.h1 animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }} className="text-2xl font-bold font-logo">
        <a href="/">
          <img src={ng} alt='NG' className=" h-5" />
        </a>
      </motion.h1>
      <ThemeToggle />

      {/* Nav Items animating in  */}
      {toggled && !matches && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-stone-800 opacity-80 text-2xl font-bold"
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
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
      >
        <motion.span
          animate={{ 
            rotateZ: toggled ? 45 : 0, 
            y: toggled ? 8 : 0, 
            width: toggled ? 24 : 24, }}
          className="line-1 block h-0.5 w-6 bg-content bg-white"
        ></motion.span>

        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="line-2 block h-0.5 w-6 bg-content bg-white"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 24 : 24,
          }}
          className="line-3 block h-0.5 w-6 bg-content bg-white"
        ></motion.span>
      </motion.div>
    </nav>
  )
}