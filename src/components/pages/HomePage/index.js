// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import {
  PageTemplate,
  Navbar,
  Footer,
  HeroSection,
  PortfolioGrid,
} from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      navbar={<Navbar />}
      hero={<HeroSection />}
      footer={<Footer />}
    >
      <PortfolioGrid />
    </PageTemplate>
  )
}

export default HomePage
