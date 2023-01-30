import Header from '@components/Header/Header'
import React, {FunctionComponent} from 'react'

import '@styles/global.scss'
import Main from '@sections/Main/Main'
import HowToGet from '@sections/HowToGet/HowToGet'
import Statistics from '@sections/Statistics/Statistics'
import Reviews from '@sections/Reviews/Reviews'
import About from '@sections/About/About'
import FAQ from '@sections/FAQ/FAQ'
import Footer from '@components/Footer/Footer'
import Fade from 'react-reveal/Fade'

const App: FunctionComponent = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Fade bottom>
        <HowToGet/>
      </Fade>
      <Fade bottom>
        <Statistics/>
      </Fade>
      <Fade bottom>
        <Reviews/>
      </Fade>
      <Fade bottom>
        <About/>
      </Fade>
      <Fade bottom>
        <FAQ/>
      </Fade>
      <Footer/>
    </>
  )
}

export default App
