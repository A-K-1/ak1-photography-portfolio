// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import {
  PageTemplate,
  Navbar,
  Footer,
  HeroSection,
  PortfolioGrid,
  Testimonials,
  AboutGrid,
  Inquiries,
  SocialGrid,
} from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      navbar={<Navbar />}
      hero={<HeroSection />}
      footer={<Footer />}
    >
      <PortfolioGrid />
      <Testimonials />
      <AboutGrid />
      <Inquiries />
      <SocialGrid />
    </PageTemplate>
  )
}

export default HomePage
