import React, { FC } from 'react'
import { FirstScreen } from '@/components/templates/first-screen'
import { Advantages } from '@/components/templates/advantages'
import { Free } from '@/components/templates/free'
import Formats from '@/components/templates/formats/formats'
import { About } from '@/components/templates/about'

const HomePage: FC = () => {
  return (
    <section>
      <FirstScreen />
      <Free />
      <Advantages />
      <About />
      <Formats />
    </section>
  )
}
export default HomePage
