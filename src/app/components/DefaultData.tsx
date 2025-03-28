// Create a file for default data
export interface Record {
  name: string;
  role: string;
  email: string;
  phone: string;
  course: string;
  status: string;
}

export const defaultRecords: Record[] = [
  {
    name: "John Doe",
    role: "Front-end Developer",
    email: "john@example.com",
    phone: "555-123-4567",
    course: "Web Dev",
    status: "Placed"
  },
  {
    name: "Sarah Smith",
    role: "UI/UX Designer",
    email: "sarah@example.com",
    phone: "555-987-6543",
    course: "UI/UX",
    status: "Placed"
  },
  {
    name: "Michael Johnson",
    role: "Data Analyst",
    email: "michael@example.com",
    phone: "555-222-3333",
    course: "Data Science",
    status: "Unplaced"
  },
  {
    name: "Emily Chen",
    role: "Security Specialist",
    email: "emily@example.com",
    phone: "555-444-5555",
    course: "Cybersecurity",
    status: "On Hold"
  },
  {
    name: "Alex Rodriguez",
    role: "React Developer",
    email: "alex@example.com",
    phone: "555-777-8888",
    course: "React Basics",
    status: "Unplaced"
  }
]