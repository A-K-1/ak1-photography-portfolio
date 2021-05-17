// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Footer, Paragraph } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Paragraph>This is a test paragraph</Paragraph>
    </PageTemplate>
  )
}

export default HomePage
