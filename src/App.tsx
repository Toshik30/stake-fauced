import Header from '@components/Header/Header'
import React, {FunctionComponent} from 'react'

import '@styles/global.scss'
import Main from '@sections/Main/Main'
import HowToGet from '@sections/HowToGet/HowToGet'
import Statistics from '@sections/Statistics/Statistics'
import Reviews from '@sections/Reviews/Reviews'
import About from '@sections/About/About'
import FAQ from '@sections/FAQ/FAQ'

const App: FunctionComponent = () => {
  return (
    <>
      <Header/>
      <Main/>
      <HowToGet/>
      <Statistics/>
      <Reviews/>
      <About/>
      <FAQ/>
    </>
  )
}

export default App
