import React from 'react'

import { PageTemplate, Navbar, Footer, Heading } from 'components'

const NotFoundPage = () => {
  return (
    <PageTemplate navbar={<Navbar />} footer={<Footer />}>
      <Heading>404 Not Found</Heading>
    </PageTemplate>
  )
}

export default NotFoundPage
