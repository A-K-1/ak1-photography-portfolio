// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import {
  PageTemplate,
  Navbar,
  Footer,
  Paragraph,
  HeroSection,
} from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      navbar={<Navbar />}
      hero={<HeroSection />}
      footer={<Footer />}
    ></PageTemplate>
  )
}

export default HomePage
