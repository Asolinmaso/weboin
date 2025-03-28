'use client'

import { useState } from 'react'
import { Record } from './DefaultData'

interface FormProps {
  onSubmit: (record: Record) => void;
}

export default function FormComponent({ onSubmit }: FormProps) {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [course, setCourse] = useState('')
  const [status, setStatus] = useState('Unplaced')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newRecord = { name, role, email, phone, course, status }
    onSubmit(newRecord)

    // Reset form
    setName('')
    setRole('')
    setEmail('')
    setPhone('')
    setCourse('')
    setStatus('Unplaced')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-3xl text-[#c9fd02]">
      <h2 className="font-bold text-center mb-8">
        Fill This Form
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Column */}
        <div className="space-y-6 text-3xl">
          {/* Name */}
          <div>
            <label className="block font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-100 text-black text-lg rounded-md py-3 px-3 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 text-black text-lg rounded-md py-3 px-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Course */}
          <div>
            <label className="block font-bold mb-2">
              Course:
            </label>
            <select
              className="w-full bg-gray-100 text-black text-lg rounded-md py-3 px-3 outline-none"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="" hidden>
                Select course
              </option>
              <option value="UI/UX">UI/UX</option>
              <option value="Web Dev">Web Dev</option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="React Basics">React Basics</option>
            </select>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 text-3xl">
          {/* Role */}
          <div>
            <label className="block font-bold mb-2">
              Role:
            </label>
            <input
              type="text"
              placeholder="Enter your role"
              className="w-full bg-gray-100 text-black text-lg rounded-md py-3 px-3 outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-bold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-gray-100 text-black text-lg rounded-md py-3 px-3 outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Status */}
          <div>
            <label className="block font-bold mb-2">
              Status:
            </label>
            <select
              className="w-full bg-gray-100 text-black text-lg rounded-md py-3 px-3 outline-none"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Unplaced">Unplaced</option>
              <option value="Placed">Placed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-2 flex text-lg justify-end mt-4">
          <button
            type="submit"
            className="border-2 border-white text-white rounded-full px-5 py-2 hover:bg-white hover:text-black transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}