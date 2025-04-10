import { useEffect, useState } from "react"

const Extensions = ({ title, about, image, active,setExtension }) => {
  const [checked, setChecked] = useState(active)
  
  
  const removeExtension = () => {
    let tempData = localStorage.getItem('extensions')
    tempData = JSON.parse(tempData)

    const filteredExtensions = tempData.filter(data => data.name !== title)
    setExtension(filteredExtensions)
    localStorage.setItem('extensions',JSON.stringify(filteredExtensions))
  }

  const handleToggle = (e) => {
    let tempData = localStorage.getItem('extensions')
    tempData = JSON.parse(tempData)

    const activeChange = tempData.map((extension) => {
      return extension.name === title ? {...extension,isActive:e.target.checked} : extension
    })
    
    localStorage.setItem('extensions',JSON.stringify(activeChange))
    setChecked(e.target.checked)
  }

  useEffect(() => {
    
  },[checked])

  return (
    <div className="flex flex-col gap-4 bg-primary-0 dark:bg-primary-800 shadow-sm p-5 rounded-2xl dark:border dark:border-primary-600">
      <div className="flex gap-3 items-start">
        <img src={image} alt="snapshot" />
        <div>
          <p className="font-bold pb-2">{title}</p>
          <p className="text-sm leading-6">{about}</p>
        </div>
        </div>
        <div className="flex items-center justify-between mt-8">
        <button
          onClick={removeExtension}
          className="text-sm text-center font-bold px-3.5 py-1 rounded-4xl dark:bg-primary-700 border border-primary-300 dark:border-primary-600 dark:focus-within:border-secondary-200 cursor-pointer"
        >Remove</button>
          <div>
            <label className="group relative block w-8 h-4 rounded-[3rem] bg-primary-300 dark:bg-primary-600 has-[:checked]:bg-secondary-300 dark:has-[:checked]:bg-secondary-100 dark:focus-within:border dark:focus:border-secondary-200 cursor-pointer">
              <input type="checkbox" name="toggle" onChange={handleToggle} checked={checked} className="hidden" />
              <span className="w-3 h-3 rounded-full bg-primary-0 absolute left-0.5 top-1/2 -translate-y-1/2 group-has-[:checked]:left-[55%]"></span>
            </label>
          </div>
        </div>
    </div>
  )
}

export default Extensions