import Nav from "./components/Nav"
import Extensions from "./components/Extensions"
import data from '../data.json'
import { useEffect, useState } from "react";

function App() {
  const [extensions, setExtension] = useState(data)
  const [selected, setSelected] = useState('all')
  let tempData = localStorage.getItem('extensions')
  tempData = JSON.parse(tempData)
  
  const currentSelectection = (e) => {
    let selection = null

    if (e.target.value === 'active') {
      selection = tempData.filter(extension => extension.isActive === true)
    }
    if (e.target.value === 'inactive') {
      selection = tempData.filter(extension => extension.isActive === false)
    }
    if (e.target.value === 'all') {
      selection = tempData
    }

    setExtension(selection)
    setSelected(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('extensions',JSON.stringify(data))
  },[])
  
  return (
    <main className="bg-primary-200 dark:bg-primary-900 min-h-screen py-8 text-primary-900 dark:text-primary-0">
      <Nav />
      <section className="wrapper my-14">
        <section>
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">Extensions List</div>
            <div className="flex items-center gap-2 text-sm text-center *:px-3.5 *:py-1 *:rounded-4xl *:shadow-xs *:bg-primary-0 dark:*:bg-primary-700 *:has-[:checked]:bg-secondary-200 dark:*:has-[:checked]:bg-secondary-200  dark:*:border *:border-primary-600 *:has-[:checked]:text-primary-0 dark:*:has-[:checked]:text-primary-900 *:has-[:checked]:font-bold dark:*:focus-within:border-secondary-200 *:cursor-pointer">
              <label htmlFor="" className="relative">
                <input onChange={currentSelectection} className="absolute inset-0 opacity-0 z-20 cursor-pointer" type="radio" name='status' value='all' checked={selected === 'all'} />All
              </label>
              <label htmlFor="" className="relative">
                <input onChange={currentSelectection} className="absolute inset-0 opacity-0 z-20 cursor-pointer" type="radio" name='status' value='active' checked={selected === 'active'} />Active
              </label>
              <label htmlFor="" className="relative">
                <input onChange={currentSelectection} className="absolute inset-0 opacity-0 z-20 cursor-pointer" type="radio" name='status' value='inactive' checked={selected === 'inactive'} />Inactive
              </label>
            </div>
          </div>
        </section>
        <section className="mt-6">
          <div className="grid grid-cols-3 gap-4">
            {extensions.map((extension) => (
              <Extensions
                key={extension.name}
                image={extension.logo}
                title={extension.name}
                about={extension.description}
                active={extension.isActive}
                setExtension={setExtension}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
