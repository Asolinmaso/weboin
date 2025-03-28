'use client'

import { useState } from 'react'
import FormComponent from '../components/FormComponent'
import CardList from '../components/CardList'
import { defaultRecords, Record } from '../components/DefaultData'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FormPage() {
  const [records, setRecords] = useState<Record[]>(defaultRecords)
  
  const handleAddRecord = (newRecord: Record) => {
    setRecords([...records, newRecord])
  }
  
  const handleDeleteRecord = (indexToDelete: number) => {
    setRecords(records.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className="text-white mt-20">
      <Navbar />
      <FormComponent onSubmit={handleAddRecord} />
      <CardList records={records} onDelete={handleDeleteRecord} />
      <Footer />
    </div>
  )
}