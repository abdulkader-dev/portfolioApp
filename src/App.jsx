/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Main from './components/Main'




const App = () => {
  return (
   <>
   
   <div className="font-sans leading-normal tracking-normal">
     <Header/>
     <main>
      <About/>
      <Projects/>
      <Contact/>
     </main>
    </div>

   </>
  )
}

export default App