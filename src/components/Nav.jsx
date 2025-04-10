import { useEffect, useState } from "react";

const Nav = () => {
  const [isDark,setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])
  
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(newTheme === 'dark')
  }

  return (
    <section className="wrapper">
      <nav className="bg-primary-0 shadow-md dark:bg-primary-700 px-4 py-2 rounded-2xl">
        <div className="flex justify-between items-center">
          <img src="../assets/images/logo.svg" alt="logo" />
          <div onClick={toggleTheme} className="flex-to-center bg-primary-200 dark:bg-primary-600 px-3 py-3 rounded-xl cursor-pointer">
            <img src={isDark ? '../assets/images/icon-sun.svg' : '../assets/images/icon-moon.svg'} alt="dark" />
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Nav