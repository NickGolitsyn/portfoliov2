import ng from '/NGsuperwide.svg'
import darkng from '/darkNGsuperwide.svg'
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
      {/* Title */}

      <motion.a
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }} 
        href="/"
      >
        <img src={ng} alt='NG' className="dark:hidden h-5" />
        <img src={darkng} alt='NG' className="hidden dark:block h-5" />
      </motion.a>

      {/* Nav Items animating in  */}
      {toggled && !matches && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center overflow-scroll gap-24 bg-stone-200 dark:bg-stone-800 opacity-80 text-2xl font-bold"
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
        className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg   "
      >
        <NavLinks className="flex gap-12" isMobile={false} />
        <ThemeToggle />
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="z-50 xl:hidden flex gap-5 items-center"
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