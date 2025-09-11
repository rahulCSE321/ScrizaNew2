import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Calendar, IdCard, Briefcase } from 'lucide-react'

export const metadata = {
  title: 'Employee Details | Scriza Private Limited',
  description: 'Directory of Scriza employees with roles, contact information, and departments.'
}

const employees = [
  {
    id: 'EMP-001',
    name: 'Tushar Sharma',
    role: 'Software Engineer',
    department: 'Engineering',
    email: 'tushar@scriza.in',
    phone: '+91 90000 00001',
    location: 'Noida, IN',
    joined: '2023-04-12'
  },
  {
    id: 'EMP-002',
    name: 'Ananya Gupta',
    role: 'Product Manager',
    department: 'Product',
    email: 'ananya@scriza.in',
    phone: '+91 90000 00002',
    location: 'Noida, IN',
    joined: '2022-11-03'
  },
  {
    id: 'EMP-003',
    name: 'Rohit Verma',
    role: 'UI/UX Designer',
    department: 'Design',
    email: 'rohit@scriza.in',
    phone: '+91 90000 00003',
    location: 'Remote',
    joined: '2024-02-20'
  },
  {
    id: 'EMP-004',
    name: 'Priya Singh',
    role: 'QA Engineer',
    department: 'Quality Assurance',
    email: 'priya@scriza.in',
    phone: '+91 90000 00004',
    location: 'Noida, IN',
    joined: '2023-08-18'
  },
  {
    id: 'EMP-005',
    name: 'Aman Khan',
    role: 'DevOps Engineer',
    department: 'Platform',
    email: 'aman@scriza.in',
    phone: '+91 90000 00005',
    location: 'Noida, IN',
    joined: '2022-06-10'
  },
  {
    id: 'EMP-006',
    name: 'Neha Patel',
    role: 'Account Manager',
    department: 'Sales',
    email: 'neha@scriza.in',
    phone: '+91 90000 00006',
    location: 'Mumbai, IN',
    joined: '2021-12-01'
  }
]

function InitialAvatar({ name }) {
  const initial = name?.charAt(0)?.toUpperCase() || '?'
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#38857a] to-[#FF914C] flex items-center justify-center text-white text-lg font-semibold">
      {initial}
    </div>
  )
}

export default function EmployeeDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header currentPage="about" />

      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Employee Directory</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse team members, their roles, departments, and contact information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((emp) => (
              <Card key={emp.id} className="bg-white border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <InitialAvatar name={emp.name} />
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg text-gray-900 truncate">{emp.name}</CardTitle>
                    <CardDescription className="text-gray-600 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#38857a]" />
                      <span>{emp.role}</span>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <IdCard className="w-4 h-4 text-[#38857a]" />
                    <span className="font-medium">{emp.id}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail className="w-4 h-4 text-[#38857a]" />
                    <a href={`mailto:${emp.email}`} className="hover:text-[#38857a]">{emp.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4 text-[#38857a]" />
                    <a href={`tel:${emp.phone}`} className="hover:text-[#38857a]">{emp.phone}</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-[#38857a]" />
                    <span>{emp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-[#38857a]" />
                    <span>Joined {emp.joined}</span>
                  </div>
                  <div className="pt-2">
                    <Badge className="text-xs" style={{ backgroundColor: '#FF914C' }}>{emp.department}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">All Employees</h2>
            <p className="text-gray-600">Comprehensive list with key attributes.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id}>
                    <TableCell className="font-medium">{emp.id}</TableCell>
                    <TableCell>{emp.name}</TableCell>
                    <TableCell>{emp.role}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-2">
                        <span>{emp.department}</span>
                      </span>
                    </TableCell>
                    <TableCell>{emp.location}</TableCell>
                    <TableCell>
                      <a href={`mailto:${emp.email}`} className="text-[#38857a] hover:underline">{emp.email}</a>
                    </TableCell>
                    <TableCell>
                      <a href={`tel:${emp.phone}`} className="text-[#38857a] hover:underline">{emp.phone}</a>
                    </TableCell>
                    <TableCell>{emp.joined}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


