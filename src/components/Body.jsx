import React from 'react'
import CentralTexas from './CentralTexas'
import FeaturedOptions from './FeaturedOptions'
import MemberStories from './MemberStories'

const Body = () => {
  return (
    <main className="container  ">
      <CentralTexas/>
      <FeaturedOptions />
      <MemberStories />
    </main>
  )
}

export default Body