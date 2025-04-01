// app/page.tsx

import Link from "next/link";

export default function SemiFooter() {
    return (
      <main className=" text-white flex flex-col">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
            <div className="font-bold" style={{ fontSize: '3rem', lineHeight: '1' }}>
              <div className="mb-2">
                Empower your future with cutting-edge skills
              </div>
              <div className="mb-2">
                New, Embrace innovation, master technology, &amp; shape the digital world
              </div>
              <div>
                Your journey to success starts here.
              </div>
            </div>
  
            {/* Right: Paragraph */}
            <div className="flex flex-col items-center md:pl-3 mt-8 md:mt-0 max-w-md mx-auto">
              <p className="leading-relaxed text-lg">
                Join our course with a proven track record of success,
                where learning isn&apos;t just about gaining skills;
                it&apos;s about growing them. Join us, learn with confidence,
                and watch your skills soar.
              </p>
              <div className="flex flex-row items-center justify-center gap-4 mt-12 text-sm w-full">
                {/* Total Students */}
                <div className="text-center flex-1">
                  <p className="bg-yellow-400 text-black font-semibold py-2 px-2 rounded-full mb-2 text-sm whitespace-nowrap">
                    Total Students
                  </p>
                  <p className="text-4xl font-bold">10</p>
                </div>
  
                {/* Placed Students */}
                <div className="text-center flex-1">
                  <p className="bg-yellow-400 text-black font-semibold py-2 px-2 rounded-full mb-2 text-sm whitespace-nowrap">
                    Placed Students
                  </p>
                  <p className="text-4xl font-bold">5</p>
                </div>
  
                {/* Unplaced Students */}
                <div className="text-center flex-1">
                  <p className="bg-yellow-400 text-black font-semibold py-2 px-2 rounded-full mb-2 text-sm whitespace-nowrap">
                    Unplaced Students
                  </p>
                  <p className="text-4xl font-bold">5</p>
                </div>
              </div>
            </div>
            
          </div>
  
          {/* Stats Row */}
          
        </div>
  
        
      </main>
    )
  }
