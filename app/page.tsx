import CareerAreas from '@/components/about/career/career-areas'
import CareerHero from '@/components/about/career/career-hero'
import EmployeeBenefits from '@/components/about/career/employee_benefits'
import HiringProcess from '@/components/about/career/hiring-process'
import JoinUs from '@/components/about/career/join-us'
import Lifeatcoders from '@/components/about/career/lifeatcoders'
import ValuesSection from '@/components/about/career/values'
import Brands from '@/components/reusable/brands'
import FloatingContactButton from '@/components/reusable/floating-contact-button'
import React from 'react'

function CareersPage() {
  return (
    <div>
        <CareerHero />
        <Brands />
        <JoinUs />
        <ValuesSection />
        <Lifeatcoders />
        <EmployeeBenefits />
        <HiringProcess />
        <CareerAreas />
        <FloatingContactButton />
    </div>
  )
}

export default CareersPage