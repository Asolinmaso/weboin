'use client'

import { Record } from './DefaultData'

interface CardListProps {
  records: Record[];
  onDelete: (index: number) => void;
}

export default function CardList({ records, onDelete }: CardListProps) {
  return (
    <div className="max-w-screen mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {records.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                {item.name.charAt(0)}
              </div>
              <div className="ml-4">
                <div className="text-lg font-semibold">{item.name}</div>
              </div>
            </div>
            <p className="mb-1">Role: {item.role}</p>
            <p className="mb-1">Email: {item.email}</p>
            <p className="mb-1">Phone: {item.phone}</p>
            <p className="mb-1">Course: {item.course || '—'}</p>
            <p className="mb-1">Status: {item.status}</p>
            
            {/* Delete button */}
            <button 
              onClick={() => onDelete(index)}
              className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}