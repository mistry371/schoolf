/* CampusOS — Northstar International School CRM Client Demo */

const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  wallet: '<rect x="2" y="5" width="20" height="15" rx="2"/><path d="M2 9h20M16 15h2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  bus: '<rect x="3" y="4" width="18" height="15" rx="2"/><path d="M3 12h18M7 19v2m10-2v2M7 8h3m4 0h3"/>',
  headset: '<path d="M3 13v-2a9 9 0 0 1 18 0v2M3 13h3v7H5a2 2 0 0 1-2-2v-5zm18 0h-3v7h1a2 2 0 0 0 2-2v-5zM18 20a6 6 0 0 1-6 2"/>',
  chart: '<path d="M3 3v18h18M7 16l4-5 3 2 5-7"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.12 2.12-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1 1.57V21h-3v-.09a1.7 1.7 0 0 0-1-1.57 1.7 1.7 0 0 0-1.88.34l-.06.06-2.12-2.12.06-.06A1.7 1.7 0 0 0 7 15.68a1.7 1.7 0 0 0-1.57-1H5v-3h.09a1.7 1.7 0 0 0 1.57-1A1.7 1.7 0 0 0 6.32 8.8l-.06-.06L8.38 6.6l.06.06A1.7 1.7 0 0 0 10.32 7a1.7 1.7 0 0 0 1-1.57V5h3v.09a1.7 1.7 0 0 0 1 1.57 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.12 2.12-.06.06A1.7 1.7 0 0 0 19 10.32a1.7 1.7 0 0 0 1.57 1H21v3h-.09A1.7 1.7 0 0 0 19.4 15z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  download: '<path d="M12 3v12m-4-4 4 4 4-4M4 17v3h16v-3"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  graduation: '<path d="m2 10 10-5 10 5-10 5-10-5zM6 12v5c4 3 8 3 12 0v-5M22 10v7"/>',
  filter: '<path d="M4 6h16M7 12h10m-7 6h4"/>',
  printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>'
};

const icon = (name) => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.grid}</svg>`;
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const initial = {
  leads: [
    { id: 'AD-2401', name: 'Aarav Shah', grade: 'Grade 6', parent: 'Riya Shah', phone: '98250 12340', source: 'Website', stage: 'New enquiry', owner: 'Neha Patel', next: 'Today, 11:30 AM', campus: 'Main Campus' },
    { id: 'AD-2402', name: 'Diya Mehta', grade: 'Grade 3', parent: 'Kunal Mehta', phone: '98790 44221', source: 'Instagram', stage: 'Contacted', owner: 'Neha Patel', next: 'Today, 2:00 PM', campus: 'Main Campus' },
    { id: 'AD-2403', name: 'Vihaan Desai', grade: 'Grade 9', parent: 'Priya Desai', phone: '98980 33011', source: 'Referral', stage: 'School visit', owner: 'Arjun Rao', next: 'Tomorrow, 10:00 AM', campus: 'Main Campus' },
    { id: 'AD-2404', name: 'Myra Patel', grade: 'Grade 1', parent: 'Hiren Patel', phone: '98251 22778', source: 'Walk-in', stage: 'Application', owner: 'Neha Patel', next: 'Docs pending', campus: 'West Campus' },
    { id: 'AD-2405', name: 'Kabir Joshi', grade: 'Grade 8', parent: 'Anita Joshi', phone: '99090 18362', source: 'Website', stage: 'Admitted', owner: 'Arjun Rao', next: 'Onboarding', campus: 'Main Campus' },
    { id: 'AD-2406', name: 'Anaya Vyas', grade: 'Grade 5', parent: 'Dhruv Vyas', phone: '98240 44680', source: 'Instagram', stage: 'New enquiry', owner: 'Neha Patel', next: 'Today, 4:30 PM', campus: 'West Campus' },
    { id: 'AD-2407', name: 'Reyansh Jain', grade: 'Grade 2', parent: 'Meera Jain', phone: '99790 22881', source: 'Referral', stage: 'School visit', owner: 'Arjun Rao', next: 'Friday, 11:00 AM', campus: 'West Campus' }
  ],
  students: [
    { id: 'ST-1024', name: 'Aanya Patel', grade: 'Grade 8', section: 'A', roll: '08', parent: 'Kiran Patel', phone: '98251 12345', status: 'Active', campus: 'Main Campus', attendance: '96%', balance: 0 },
    { id: 'ST-1030', name: 'Kabir Patel', grade: 'Grade 4', section: 'B', roll: '14', parent: 'Kiran Patel', phone: '98251 12345', status: 'Active', campus: 'Main Campus', attendance: '94%', balance: 4500 },
    { id: 'ST-1025', name: 'Dev Shah', grade: 'Grade 8', section: 'A', roll: '12', parent: 'Nisha Shah', phone: '98981 54120', status: 'Active', campus: 'Main Campus', attendance: '89%', balance: 12500 },
    { id: 'ST-1026', name: 'Ishita Mehta', grade: 'Grade 8', section: 'A', roll: '18', parent: 'Rohan Mehta', phone: '98796 36120', status: 'Active', campus: 'Main Campus', attendance: '98%', balance: 0 },
    { id: 'ST-1027', name: 'Rudra Desai', grade: 'Grade 8', section: 'A', roll: '24', parent: 'Jinal Desai', phone: '98256 41145', status: 'Active', campus: 'Main Campus', attendance: '92%', balance: 8500 },
    { id: 'ST-1028', name: 'Sara Khan', grade: 'Grade 8', section: 'A', roll: '27', parent: 'Farah Khan', phone: '98250 84961', status: 'Active', campus: 'Main Campus', attendance: '94%', balance: 0 },
    { id: 'ST-1104', name: 'Mihir Joshi', grade: 'Grade 5', section: 'B', roll: '09', parent: 'Disha Joshi', phone: '98988 24014', status: 'Active', campus: 'West Campus', attendance: '97%', balance: 4000 },
    { id: 'ST-1105', name: 'Kiara Vyas', grade: 'Grade 3', section: 'A', roll: '16', parent: 'Jay Vyas', phone: '98254 91927', status: 'Active', campus: 'West Campus', attendance: '95%', balance: 0 },
    { id: 'ST-1106', name: 'Aryan Trivedi', grade: 'Grade 10', section: 'B', roll: '05', parent: 'Hemal Trivedi', phone: '98794 12680', status: 'Active', campus: 'Main Campus', attendance: '91%', balance: 16500 }
  ],
  fees: [
    { id: 'INV-2026-301', student: 'Aanya Patel', grade: 'Grade 8', type: 'Term 2 tuition', amount: 18500, paid: 18500, due: '2026-11-15', status: 'Paid', campus: 'Main Campus' },
    { id: 'INV-2026-302', student: 'Dev Shah', grade: 'Grade 8', type: 'Term 2 tuition', amount: 18500, paid: 6000, due: '2026-11-20', status: 'Overdue', campus: 'Main Campus' },
    { id: 'INV-2026-303', student: 'Rudra Desai', grade: 'Grade 8', type: 'Transport + tuition', amount: 20500, paid: 12000, due: '2026-11-28', status: 'Partial', campus: 'Main Campus' },
    { id: 'INV-2026-304', student: 'Mihir Joshi', grade: 'Grade 5', type: 'Term 2 tuition', amount: 16000, paid: 12000, due: '2026-11-30', status: 'Partial', campus: 'West Campus' },
    { id: 'INV-2026-305', student: 'Aryan Trivedi', grade: 'Grade 10', type: 'Term 2 tuition', amount: 22500, paid: 6000, due: '2026-11-18', status: 'Overdue', campus: 'Main Campus' },
    { id: 'INV-2026-306', student: 'Ishita Mehta', grade: 'Grade 8', type: 'Term 2 tuition', amount: 18500, paid: 18500, due: '2026-11-15', status: 'Paid', campus: 'Main Campus' },
    { id: 'INV-2026-307', student: 'Kabir Patel', grade: 'Grade 4', type: 'Term 2 tuition & sports', amount: 16500, paid: 12000, due: '2026-11-30', status: 'Partial', campus: 'Main Campus' }
  ],
  staff: [
    { id: 'EMP-101', name: 'Priya Nair', role: 'Principal', department: 'Leadership', phone: '98250 77119', email: 'priya@northstar.demo', status: 'Active', campus: 'Main Campus' },
    { id: 'EMP-102', name: 'Neha Patel', role: 'Admissions Counsellor', department: 'Admissions', phone: '98250 77120', email: 'neha@northstar.demo', status: 'Active', campus: 'Main Campus' },
    { id: 'EMP-103', name: 'Arjun Rao', role: 'Admissions Executive', department: 'Admissions', phone: '98250 77121', email: 'arjun@northstar.demo', status: 'Active', campus: 'West Campus' },
    { id: 'EMP-104', name: 'Kavita Iyer', role: 'Class Teacher', department: 'Academics', phone: '98250 77122', email: 'kavita@northstar.demo', status: 'Active', campus: 'Main Campus' },
    { id: 'EMP-105', name: 'Harsh Soni', role: 'Accountant', department: 'Finance', phone: '98250 77123', email: 'harsh@northstar.demo', status: 'Active', campus: 'Main Campus' },
    { id: 'EMP-106', name: 'Meera Singh', role: 'Transport Manager', department: 'Transport', phone: '98250 77124', email: 'meera@northstar.demo', status: 'On leave', campus: 'West Campus' }
  ],
  tickets: [
    { id: 'SUP-118', subject: 'Bus pickup timing request', student: 'Mihir Joshi', category: 'Transport', priority: 'Normal', owner: 'Meera Singh', status: 'Open', due: 'Today', campus: 'West Campus' },
    { id: 'SUP-119', subject: 'Fee receipt clarification', student: 'Dev Shah', category: 'Finance', priority: 'High', owner: 'Harsh Soni', status: 'In progress', due: 'Today', campus: 'Main Campus' },
    { id: 'SUP-120', subject: 'Library card replacement', student: 'Sara Khan', category: 'Student services', priority: 'Normal', owner: 'Office', status: 'Resolved', due: 'Completed', campus: 'Main Campus' },
    { id: 'SUP-121', subject: 'Classroom projector issue', student: 'Grade 8 A', category: 'Facilities', priority: 'High', owner: 'Office', status: 'Open', due: 'Tomorrow', campus: 'Main Campus' }
  ],
  messages: [
    { id: 'MSG-301', subject: 'Term 2 parent meeting reminder', audience: 'Grade 8 parents', channel: 'Email', sent: '24 Nov 2026', status: 'Sent', campus: 'Main Campus' },
    { id: 'MSG-302', subject: 'Annual sports day circular', audience: 'All parents', channel: 'In-app', sent: '22 Nov 2026', status: 'Sent', campus: 'All campuses' },
    { id: 'MSG-303', subject: 'Transport route update', audience: 'Route 3 parents', channel: 'SMS', sent: '21 Nov 2026', status: 'Sent', campus: 'West Campus' }
  ],
  transport: [
    { id: 'RT-01', route: 'Adajan – Athwa', driver: 'Mahesh Solanki', vehicle: 'GJ 05 AB 4721', students: 38, capacity: 45, status: 'On time', campus: 'Main Campus' },
    { id: 'RT-02', route: 'Vesu – Piplod', driver: 'Rakesh Parmar', vehicle: 'GJ 05 CD 2826', students: 42, capacity: 45, status: 'On time', campus: 'Main Campus' },
    { id: 'RT-03', route: 'Pal – Rander', driver: 'Imran Sheikh', vehicle: 'GJ 05 EF 7392', students: 31, capacity: 40, status: 'Delayed', campus: 'West Campus' },
    { id: 'RT-04', route: 'Althan – Bhimrad', driver: 'Sanjay Chaudhary', vehicle: 'GJ 05 GH 1834', students: 26, capacity: 35, status: 'On time', campus: 'West Campus' }
  ],
  events: [],
  library: [
    { id: 'LIB-101', title: 'The Blue Umbrella', student: 'Aanya Patel', issued: '2026-11-18', due: '2026-12-02', status: 'Issued', campus: 'Main Campus' },
    { id: 'LIB-102', title: 'A Brief History of Time', student: 'Dev Shah', issued: '2026-11-10', due: '2026-11-24', status: 'Due today', campus: 'Main Campus' },
    { id: 'LIB-103', title: 'Wings of Fire', student: 'Kiara Vyas', issued: '2026-11-05', due: '2026-11-19', status: 'Overdue', campus: 'West Campus' }
  ],
  assets: [
    { id: 'AST-101', item: 'Projector · Room 204', category: 'IT equipment', assigned: 'Academics', condition: 'Working', next: '2026-12-15', status: 'Active', campus: 'Main Campus' },
    { id: 'AST-102', item: 'Science lab microscope', category: 'Lab equipment', assigned: 'Science lab', condition: 'Service required', next: '2026-11-29', status: 'Maintenance', campus: 'Main Campus' },
    { id: 'AST-103', item: 'Library tablets · 12 units', category: 'IT equipment', assigned: 'Library', condition: 'Working', next: '2026-12-10', status: 'Active', campus: 'West Campus' }
  ],
  compliance: [
    { id: 'GOV-101', item: 'Fire safety certificate renewal', owner: 'Administration', due: '2026-12-15', evidence: 'Certificate file', status: 'In progress', campus: 'Main Campus' },
    { id: 'GOV-102', item: 'Transport vehicle fitness review', owner: 'Transport Manager', due: '2026-11-30', evidence: 'Inspection checklist', status: 'Open', campus: 'West Campus' },
    { id: 'GOV-103', item: 'Staff document audit', owner: 'HR Office', due: '2026-11-20', evidence: 'Personnel files', status: 'Completed', campus: 'Main Campus' }
  ],
  exams: [
    { id: 'EX-201', title: 'Mathematics unit test', grade: 'Grade 8 A', date: '2026-11-27', max: '40 marks', teacher: 'Kavita Iyer', status: 'Scheduled', campus: 'Main Campus' },
    { id: 'EX-202', title: 'Science practical', grade: 'Grade 10 B', date: '2026-11-29', max: '30 marks', teacher: 'R. Menon', status: 'Scheduled', campus: 'Main Campus' },
    { id: 'EX-203', title: 'English reading assessment', grade: 'Grade 5 B', date: '2026-11-22', max: '20 marks', teacher: 'S. Desai', status: 'Completed', campus: 'West Campus' }
  ],
  tasks: [
    { id: 'T-1', title: 'Call Diya Mehta’s parent', meta: 'Admissions · Due 2:00 PM', done: false },
    { id: 'T-2', title: 'Review Grade 8 attendance', meta: 'Academics · Due today', done: false },
    { id: 'T-3', title: 'Approve term fee receipts', meta: 'Finance · Due today', done: false },
    { id: 'T-4', title: 'Prepare parent meeting agenda', meta: 'Principal · Tomorrow', done: true }
  ],
  
  // 1. Parent Communication Models
  messageTemplates: [
    { id: 'TPL-01', title: 'Severe Weather / Rain Advisory', subject: 'Urgent: Campus Early Closure & Heavy Rain Advisory', channel: 'WhatsApp & SMS', body: 'Dear Parent, due to heavy waterlogging warnings issued by municipal authorities, school will dismiss at 12:30 PM today. School buses will depart at 12:45 PM. Please monitor live bus tracking in the Parent App.' },
    { id: 'TPL-02', title: 'Term Fee Due Reminder', subject: 'Friendly Reminder: Term 2 Fee Payment Due Date', channel: 'WhatsApp & Email', body: 'Dear {parent_name}, this is a gentle reminder that Term 2 fees for {student_name} ({class}) are due on {due_date}. You can review the itemized breakdown and pay with zero transaction fee directly via UPI/Cards in the Parent Portal.' },
    { id: 'TPL-03', title: 'Transit Delay Notification', subject: 'Bus Transit Notice: 15-Minute Delay on {route_name}', channel: 'SMS & WhatsApp', body: 'Dear Parent, Bus {route_name} is currently experiencing a 15-minute delay due to municipal road repair near Ring Road. All students are safe and accompanied by the conductor. Expected arrival at your stop is updated live in the app.' },
    { id: 'TPL-04', title: 'Parent-Teacher Meeting (PTM)', subject: 'Invitation: Term 1 Scholastic Assessment PTM Schedule', channel: 'WhatsApp & Email', body: 'Dear Parents, we invite you to the Term 1 Parent-Teacher Conference on Saturday, 05 Dec 2026. Please log in to your Parent Portal to view your one-on-one consultation time slot with the class teacher.' }
  ],

  // 2. Staff Substitutions Model
  substitutions: [
    { id: 'SUB-101', teacherOnLeave: 'Mrs. Kavita Iyer', role: 'Class Teacher 8A', period: 'Period 1 (08:30 – 09:15 AM)', class: 'Grade 8 A', subject: 'Mathematics', room: 'Room 205', substituteTeacher: 'Mr. Arjun Rao', status: 'Cover Confirmed' },
    { id: 'SUB-102', teacherOnLeave: 'Mrs. Kavita Iyer', role: 'Class Teacher 8A', period: 'Period 3 (10:45 – 11:30 AM)', class: 'Grade 8 A', subject: 'Mathematics', room: 'Room 205', substituteTeacher: 'Mrs. Sunita Sharma', status: 'Cover Confirmed' },
    { id: 'SUB-103', teacherOnLeave: 'Ms. S. Desai', role: 'Faculty English', period: 'Period 4 (11:30 – 12:15 PM)', class: 'Grade 5 B', subject: 'English Reading', room: 'Room 108', substituteTeacher: 'Unassigned', status: 'Needs Substitute' }
  ],

  // 3. Transport Stop Manifests & Fleet Models
  routeStops: {
    'RT-01': [
      { stopName: 'NIS Main Campus', pickupTime: '07:00 AM', dropTime: '02:00 PM', students: [] },
      { stopName: 'City Light Circle', pickupTime: '07:15 AM', dropTime: '02:15 PM', students: [{ name: 'Kabir Patel', grade: 'Grade 4 B', phone: '98251 12345', boarded: true }, { name: 'Mihir Joshi', grade: 'Grade 5 B', phone: '98988 24014', boarded: true }] },
      { stopName: 'Athwa Gate Junction', pickupTime: '07:30 AM', dropTime: '02:30 PM', students: [{ name: 'Diya Mehta', grade: 'Grade 3 A', phone: '98790 44221', boarded: true }] }
    ],
    'RT-02': [
      { stopName: 'NIS Main Campus', pickupTime: '07:00 AM', dropTime: '02:00 PM', students: [] },
      { stopName: 'Vesu Cross Road', pickupTime: '07:12 AM', dropTime: '02:15 PM', students: [{ name: 'Dev Shah', grade: 'Grade 8 A', phone: '98981 54120', boarded: true }] },
      { stopName: 'Althan Crossing', pickupTime: '07:18 AM', dropTime: '02:25 PM', students: [{ name: 'Rudra Desai', grade: 'Grade 8 A', phone: '98256 41145', boarded: true }] },
      { stopName: 'Green Valley Gate 2', pickupTime: '07:22 AM', dropTime: '02:45 PM', students: [{ name: 'Aanya Patel', grade: 'Grade 8 A', phone: '98251 12345', boarded: true }, { name: 'Sara Khan', grade: 'Grade 8 A', phone: '98250 84961', boarded: true }] },
      { stopName: 'Piplod Terminus', pickupTime: '07:35 AM', dropTime: '02:55 PM', students: [{ name: 'Aryan Trivedi', grade: 'Grade 10 B', phone: '98794 12680', boarded: true }] }
    ]
  },
  fleetCompliance: [
    { vehicle: 'GJ 05 AB 4721', route: 'RT-01', fcExpiry: '2027-04-15', insuranceExpiry: '2027-02-28', pucExpiry: '2026-12-30', speedGovernor: 'Certified 40 km/h', cctvStatus: 'Active & Recording', fireExt: 'Valid (Inspected Nov 2026)' },
    { vehicle: 'GJ 05 CD 2826', route: 'RT-02', fcExpiry: '2027-06-20', insuranceExpiry: '2027-03-15', pucExpiry: '2026-12-18', speedGovernor: 'Certified 40 km/h', cctvStatus: 'Active & Recording', fireExt: 'Valid (Inspected Nov 2026)' },
    { vehicle: 'GJ 05 EF 7392', route: 'RT-03', fcExpiry: '2026-12-10', insuranceExpiry: '2027-01-15', pucExpiry: '2026-11-28', speedGovernor: 'Certified 40 km/h', cctvStatus: 'Service Required', fireExt: 'Refill Due' },
    { vehicle: 'GJ 05 GH 1834', route: 'RT-04', fcExpiry: '2027-08-14', insuranceExpiry: '2027-05-10', pucExpiry: '2027-01-15', speedGovernor: 'Certified 40 km/h', cctvStatus: 'Active & Recording', fireExt: 'Valid (Inspected Oct 2026)' }
  ],

  // 4. Library OPAC Catalog & Fines Models
  libraryCatalog: [
    { id: 'CAT-101', isbn: '978-0143330837', title: 'The Blue Umbrella', author: 'Ruskin Bond', category: 'Classic Literature', dewey: '823.914', rack: 'Rack B2 · Shelf 1', totalCopies: 5, availableCopies: 4, coverColor: '#1d4ed8' },
    { id: 'CAT-102', isbn: '978-0553380163', title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'STEM & Cosmology', dewey: '523.1', rack: 'Rack S1 · Shelf 3', totalCopies: 4, availableCopies: 2, coverColor: '#7c3aed' },
    { id: 'CAT-103', isbn: '978-8173711466', title: 'Wings of Fire', author: 'Dr. A.P.J. Abdul Kalam', category: 'Biography & Leadership', dewey: '923.154', rack: 'Rack L4 · Shelf 2', totalCopies: 6, availableCopies: 3, coverColor: '#059669' },
    { id: 'CAT-104', isbn: '978-0143428800', title: 'Malgudi Days', author: 'R.K. Narayan', category: 'Indian Fiction', dewey: '823.912', rack: 'Rack B1 · Shelf 4', totalCopies: 5, availableCopies: 5, coverColor: '#d97706' },
    { id: 'CAT-105', isbn: '978-0670087792', title: 'The Discovery of India', author: 'Jawaharlal Nehru', category: 'History & Heritage', dewey: '954.04', rack: 'Rack H3 · Shelf 2', totalCopies: 3, availableCopies: 2, coverColor: '#dc2626' },
    { id: 'CAT-106', isbn: '978-0743273565', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'World Classics', dewey: '813.52', rack: 'Rack W2 · Shelf 3', totalCopies: 4, availableCopies: 3, coverColor: '#0284c7' }
  ],
  libraryFines: [
    { id: 'FN-101', student: 'Dev Shah', grade: 'Grade 8 A', book: 'A Brief History of Time', daysOverdue: 4, dailyRate: 5, fineAmount: 20, status: 'Unpaid' },
    { id: 'FN-102', student: 'Kiara Vyas', grade: 'Grade 3 A', book: 'Wings of Fire', daysOverdue: 7, dailyRate: 5, fineAmount: 35, status: 'Unpaid' }
  ],

  // 5. Assets & Facilities Models (Venues, Reservations, Work Orders, PPM)
  facilityVenues: [
    { id: 'VEN-01', name: 'Dr. Vikram Sarabhai Auditorium', capacity: 550, type: 'A/V Theatre', equipment: 'Digital Dolby Audio, 4K Cinema Projector, Motorized Curtains, Stage Lighting', campus: 'Main Campus', image: 'auditorium' },
    { id: 'VEN-02', name: 'Atal Tinkering STEM & Robotics Lab', capacity: 45, type: 'Innovation Lab', equipment: '3D Printers, Arduino Stations, Robotic Arms, Soldering Benches', campus: 'Main Campus', image: 'stem' },
    { id: 'VEN-03', name: 'Audio-Visual Seminar Hall', capacity: 120, type: 'Conference', equipment: 'Interactive Touch Display, Acoustic Wall Paneling, Wireless Mic Array', campus: 'West Campus', image: 'seminar' },
    { id: 'VEN-04', name: 'Olympic-Grade Synthetic Sports Ground', capacity: 800, type: 'Outdoor Athletics', equipment: '400m Track, Floodlights, Football Turf, Spectator Pavilion', campus: 'Main Campus', image: 'sports' }
  ],
  venueBookings: [
    { id: 'VB-101', venueId: 'VEN-01', venueName: 'Dr. Vikram Sarabhai Auditorium', date: '2026-11-27', start: '10:00 AM', end: '12:00 PM', purpose: 'Grade 8 Inter-House Parliamentary Debate Competition', organizer: 'Mrs. Kavita Iyer', status: 'Confirmed' },
    { id: 'VB-102', venueId: 'VEN-02', venueName: 'Atal Tinkering STEM & Robotics Lab', date: '2026-11-27', start: '01:30 PM', end: '03:30 PM', purpose: 'Robotics Micro-Sensor Prototyping Workshop', organizer: 'Mr. R. Menon', status: 'Confirmed' },
    { id: 'VB-103', venueId: 'VEN-04', venueName: 'Olympic-Grade Synthetic Sports Ground', date: '2026-11-27', start: '03:30 PM', end: '05:00 PM', purpose: 'Senior Wing Inter-Campus Football League Practice', organizer: 'Coach Rajesh Rana', status: 'Confirmed' }
  ],
  workOrders: [
    { id: 'WO-301', item: 'Ceiling Projector & HDMI Line', location: 'Room 204 (Grade 8 A)', priority: 'High', technician: 'Suresh Kumar (IT Tech)', cost: 1200, reportedBy: 'Mrs. Kavita Iyer', status: 'In Progress', reportedOn: '2026-11-25', issue: 'Intermittent signal flicker during digital board projection.' },
    { id: 'WO-302', item: 'Fume Hood Ventilation Exhaust', location: 'Chemistry Lab 2', priority: 'Urgent Safety', technician: 'Pravin Solanki (HVAC)', cost: 3500, reportedBy: 'Dr. S. K. Banerjee', status: 'Assigned', reportedOn: '2026-11-26', issue: 'Exhaust blower bearing vibrating loudly; needs immediate grease and fan belt replacement.' },
    { id: 'WO-303', item: 'RO Water Plant Filter Cartridge', location: 'Ground Floor Dining Hall', priority: 'Normal', technician: 'AquaCare Services', cost: 2200, reportedBy: 'Campus Supervisor', status: 'Resolved', reportedOn: '2026-11-22', issue: 'Semi-annual membrane replacement and TDS recalibration completed.' }
  ],
  ppmChecklists: [
    { id: 'PPM-01', equipment: 'Campus Fire Hydrant & Hose System', frequency: 'Monthly', nextDue: '2026-12-15', vendor: 'Surat Fire & Safety Corp', status: 'Certified Safe' },
    { id: 'PPM-02', equipment: '250 kVA Cummins Diesel Generator', frequency: 'Quarterly', nextDue: '2026-12-05', vendor: 'Cummins Power Systems', status: 'Scheduled' },
    { id: 'PPM-03', equipment: 'Passenger Elevators (Main Wing & Admin)', frequency: 'Bi-Monthly', nextDue: '2026-12-20', vendor: 'Otis Elevators India', status: 'Certified Safe' },
    { id: 'PPM-04', equipment: 'Commercial Reverse Osmosis Drinking Plant', frequency: 'Monthly', nextDue: '2026-12-10', vendor: 'AquaCare Industrial', status: 'Tested (TDS 85 ppm)' }
  ],
  attendance: {
    'ST-1024': ['Present', 'Present', 'Present', 'Present', 'Present'],
    'ST-1025': ['Present', 'Absent', 'Present', 'Late', 'Present'],
    'ST-1026': ['Present', 'Present', 'Present', 'Present', 'Present'],
    'ST-1027': ['Present', 'Present', 'Absent', 'Present', 'Present'],
    'ST-1028': ['Present', 'Present', 'Present', 'Present', 'Present'],
    'ST-1030': ['Present', 'Present', 'Late', 'Present', 'Present']
  },
  homework: [
    { id: 'HW-801', studentId: 'ST-1024', grade: 'Grade 8 A', subject: 'Mathematics', title: 'Chapter 7: Linear Equations in Two Variables (Ex 7.2)', due: 'Tomorrow, 08:30 AM', teacher: 'Mrs. Kavita Iyer', status: 'Pending', description: 'Complete problems 1 to 8 in homework notebook. Show full algebraic steps.' },
    { id: 'HW-802', studentId: 'ST-1024', grade: 'Grade 8 A', subject: 'General Science', title: 'Cell Structure & Microorganisms Lab Observation Worksheet', due: '28 Nov 2026', teacher: 'Mr. R. Menon', status: 'Submitted', description: 'Draw plant vs animal cell with organelles labeled neatly.' },
    { id: 'HW-803', studentId: 'ST-1024', grade: 'Grade 8 A', subject: 'English Literature', title: 'The Merchant of Venice – Act II Scene 2 Character Analysis', due: '29 Nov 2026', teacher: 'Ms. S. Desai', status: 'Graded (A)', description: 'Write a 250-word qualitative reflection on Shylock’s monologue.' },
    { id: 'HW-401', studentId: 'ST-1030', grade: 'Grade 4 B', subject: 'Mathematics', title: 'Fractions & Decimals Visual Grid Worksheet (Page 44)', due: 'Tomorrow, 08:30 AM', teacher: 'Mrs. Ananya Sen', status: 'Pending', description: 'Color grid blocks representing 3/4 and 5/8.' },
    { id: 'HW-402', studentId: 'ST-1030', grade: 'Grade 4 B', subject: 'Environmental Studies', title: 'Water Conservation at Home Activity Log', due: '28 Nov 2026', teacher: 'Mrs. Ananya Sen', status: 'Submitted', description: 'Record 3 daily habits to save water in your household.' }
  ],
  leaveRequests: [
    { id: 'LR-101', studentId: 'ST-1024', studentName: 'Aanya Patel', type: 'Medical / Health', from: '2026-11-12', to: '2026-11-13', days: 2, reason: 'Viral fever; prescribed bed rest by Dr. Mehta.', status: 'Approved', approver: 'Mrs. Kavita Iyer (Class Teacher)', appliedOn: '2026-11-11' },
    { id: 'LR-102', studentId: 'ST-1030', studentName: 'Kabir Patel', type: 'Family Event', from: '2026-12-05', to: '2026-12-06', days: 2, reason: 'Attending cousin’s wedding ceremony in Ahmedabad.', status: 'Pending', approver: 'Mrs. Ananya Sen (Class Teacher)', appliedOn: '2026-11-24' }
  ],
  consents: [
    { id: 'CS-801', studentId: 'ST-1024', title: 'Grade 8 Science Discovery Excursion to Nehru Science Centre', date: '04 Dec 2026', fee: '₹650 (Covers transport & planetarium entry)', signed: false, description: 'Day excursion for hands-on physics & robotics exhibits. Departure 08:00 AM, return 04:00 PM.' },
    { id: 'CS-401', studentId: 'ST-1030', title: 'Grade 4 Nature Trail & Botanical Garden Exploration', date: '08 Dec 2026', fee: '₹350 (Covers bus & guided tour)', signed: true, signedBy: 'Kiran Patel', signedAt: '2026-11-23 18:40', description: 'Interactive botanical exploration & plant specimen collection.' }
  ],
  guardians: [
    { name: 'Kiran Patel', relation: 'Father', phone: '+91 98251 12345', authorized: true, primary: true },
    { name: 'Sunita Patel', relation: 'Mother', phone: '+91 98251 67890', authorized: true, primary: false },
    { name: 'Ramesh Patel', relation: 'Grandfather', phone: '+91 98250 11223', authorized: true, primary: false }
  ],
  settings: {
    school: 'Northstar International School',
    year: '2026–27',
    email: 'hello@northstar.demo',
    phone: '+91 261 400 1122',
    address: 'Surat, Gujarat',
    theme: 'Indigo'
  }
};

const clone = (o) => JSON.parse(JSON.stringify(o));
let db;
try {
  let stored = localStorage.getItem('campusos-demo-v3');
  if (stored) {
    db = JSON.parse(stored);
  } else {
    db = clone(initial);
  }
} catch {
  db = clone(initial);
}

// Ensure all DB keys exist
for (let k in initial) {
  if (db[k] === undefined) db[k] = clone(initial[k]);
}
if (!db.students.find(s => s.id === 'ST-1030')) {
  let kp = initial.students.find(s => s.id === 'ST-1030');
  if (kp) db.students.push(clone(kp));
}
if (!db.fees.find(f => f.student === 'Kabir Patel')) {
  let kf = initial.fees.find(f => f.student === 'Kabir Patel');
  if (kf) db.fees.push(clone(kf));
}
if (!db.attendance['ST-1030']) {
  db.attendance['ST-1030'] = ['Present', 'Present', 'Late', 'Present', 'Present'];
}

// Background sync from backend database if running
if (typeof fetch !== 'undefined') {
  fetch('/api/sync')
    .then(r => r.json())
    .then(res => {
      if (res && res.success && res.data && Array.isArray(res.data.students) && res.data.students.length > 0) {
        db = res.data;
        for (let k in initial) {
          if (db[k] === undefined) db[k] = clone(initial[k]);
        }
        if (!Array.isArray(db.events)) db.events = [];
        if (!db.attendanceMeta) db.attendanceMeta = {};
        if (typeof ensureAllClassStudents === 'function') {
          ensureAllClassStudents(db);
        }
        if (typeof ensureAllClassExams === 'function') {
          ensureAllClassExams(db);
        }
        syncBalances();
        localStorage.setItem('campusos-demo-v3', JSON.stringify(db));
        render();
      }
    })
    .catch(() => {});
}


// ============================================================================
// CLIENT-SIDE HASH ROUTING & PAGE PERSISTENCE
// ============================================================================
const VALID_PAGES = [
  'overview', 'admissions', 'students', 'attendance', 'academics',
  'fees', 'timetable', 'parent', 'library', 'assets', 'compliance',
  'communication', 'staff', 'transport', 'helpdesk', 'reports', 'settings'
];

function parsePageFromHash() {
  try {
    if (typeof window === 'undefined' || !window.location || !window.location.hash) return null;
    let raw = window.location.hash.replace(/^#\/?/, '').trim();
    if (!raw) return null;
    let clean = raw.split('?')[0].split('#')[0].replace(/\/+$/, '');
    let page = clean.split('/')[0];
    if (VALID_PAGES.includes(page)) {
      return page;
    }
  } catch (e) {}
  return null;
}

function getInitialPage() {
  // 1. First priority: current URL hash (#/attendance, #/staff, #/transport, etc.)
  const fromHash = parsePageFromHash();
  if (fromHash) return fromHash;

  // 2. Second priority: localStorage saved active page
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('campusos_active_page');
      if (saved && VALID_PAGES.includes(saved)) return saved;
    }
  } catch (e) {}

  // 3. Fallback to overview
  return 'overview';
}

const state = {
  page: getInitialPage(),
  view: 'list',
  filter: 'All',
  query: '',
  globalQuery: '',
  showGlobalSearch: false,
  campus: 'All campuses',
  role: 'Admin',
  attClass: (function() { try { return localStorage.getItem('campusos_att_class') || 'Grade 8 A'; } catch (e) { return 'Grade 8 A'; } })(),
  attWing: 'All',
  attView: 'matrix',
  attDayIdx: 0,
  attFilter: 'All',
  timetableWing: 'All',
  examClass: 'Grade 8 A',
  examWing: 'All',
  examView: 'gradebook', // 'gradebook' or 'schedule'
  examSeries: 'Term 1 Mid-Term', // 'Term 1 Mid-Term', 'Periodic Test 2', 'Annual Board Mocks'
  examSubject: 'All',
  examFilter: 'All',
  overlay: null,
  mobile: false,
  toast: null,
  hasUnreadNotifs: true,
  parentStudentId: 'ST-1024',
  parentDeviceView: (function() { try { return localStorage.getItem('campusos_parent_device') || 'mobile'; } catch (e) { return 'mobile'; } })(), // 'mobile' or 'desktop'
  parentActiveTab: (function() { try { return localStorage.getItem('campusos_parent_tab') || 'home'; } catch (e) { return 'home'; } })(), // 'home', 'academics', 'fees', 'attendance', 'transport'
  parentTimetableDay: 'Wed',
  parentGatePin: '4819',

  commFilter: (function() { try { return localStorage.getItem('campusos_comm_filter') || 'All'; } catch (e) { return 'All'; } })(),
  staffView: (function() { try { return localStorage.getItem('campusos_staff_view') || 'directory'; } catch (e) { return 'directory'; } })(), // 'directory', 'substitutions', 'workload'
  transportView: (function() { try { return localStorage.getItem('campusos_transport_view') || 'overview'; } catch (e) { return 'overview'; } })(), // 'overview', 'manifest', 'compliance'
  transportSelectedRoute: (function() { try { return localStorage.getItem('campusos_transport_route') || 'RT-02'; } catch (e) { return 'RT-02'; } })(),
  libraryView: (function() { try { return localStorage.getItem('campusos_library_view') || 'opac'; } catch (e) { return 'opac'; } })(), // 'opac', 'loans', 'fines'
  assetsView: (function() { try { return localStorage.getItem('campusos_assets_view') || 'venues'; } catch (e) { return 'venues'; } })(), // 'inventory', 'venues', 'workorders'

};

const save = () => {
  localStorage.setItem('campusos-demo-v3', JSON.stringify(db));
  if (typeof fetch !== 'undefined') {
    fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: db })
    }).catch(() => {});
  }
};

const money = (v) => '₹' + Number(v || 0).toLocaleString('en-IN');
const prettyDate = (v) => {
  if (!v) return '—';
  const d = new Date(v + 'T12:00:00');
  return Number.isNaN(d.getTime()) ? v : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};
const initials = (s) => String(s || 'N').split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase();
const avatar = (name, variant = '') => `<span class="avatar ${variant}">${esc(initials(name))}</span>`;

const pill = (s) => {
  let c = /paid|active|present|admitted|resolved|completed|on time|sent/i.test(s) ? 'green' :
          /overdue|absent|delayed|high|urgent/i.test(s) ? 'red' :
          /partial|late|pending|open|new enquiry/i.test(s) ? 'orange' :
          /progress|visit|application|contacted/i.test(s) ? 'purple' : '';
  return `<span class="pill ${c}">${esc(s)}</span>`;
};

// Compute dynamic balance for a student based on fees
function getStudentBalance(studentName) {
  return db.fees
    .filter(f => f.student.trim().toLowerCase() === (studentName || '').trim().toLowerCase())
    .reduce((sum, f) => sum + Math.max(0, (+f.amount || 0) - (+f.paid || 0)), 0);
}

// Compute dynamic attendance rate
function getStudentAttendance(studentId, fallback = '95%') {
  let marks = db.attendance[studentId];
  if (!marks || !marks.length) return fallback;
  let marked = marks.filter(m => m !== 'Unmarked');
  if (!marked.length) return fallback;
  let score = 0;
  marked.forEach(m => {
    if (m === 'Present') score += 100;
    else if (m === 'Late') score += 75;
    else if (m === 'Excused') score += 90;
  });
  return Math.round(score / marked.length) + '%';
}

const ALL_CLASSES = [
  // Primary Wing (Grades 1 - 5)
  { id: 'Grade 1 A', name: 'Grade 1 A', wing: 'Primary', campus: 'West Campus', room: 'Room 101', teacher: 'P. Joshi', avatar: '1A' },
  { id: 'Grade 1 B', name: 'Grade 1 B', wing: 'Primary', campus: 'West Campus', room: 'Room 102', teacher: 'M. Nambiar', avatar: '1B' },
  { id: 'Grade 2 A', name: 'Grade 2 A', wing: 'Primary', campus: 'West Campus', room: 'Room 103', teacher: 'Neha Patel', avatar: '2A' },
  { id: 'Grade 2 B', name: 'Grade 2 B', wing: 'Primary', campus: 'West Campus', room: 'Room 104', teacher: 'Anita Joshi', avatar: '2B' },
  { id: 'Grade 3 A', name: 'Grade 3 A', wing: 'Primary', campus: 'West Campus', room: 'Room 105', teacher: 'Jay Vyas', avatar: '3A' },
  { id: 'Grade 3 B', name: 'Grade 3 B', wing: 'Primary', campus: 'West Campus', room: 'Room 106', teacher: 'Disha Joshi', avatar: '3B' },
  { id: 'Grade 4 A', name: 'Grade 4 A', wing: 'Primary', campus: 'Main Campus', room: 'Room 107', teacher: 'Sunita Rao', avatar: '4A' },
  { id: 'Grade 4 B', name: 'Grade 4 B', wing: 'Primary', campus: 'Main Campus', room: 'Room 108', teacher: 'Kunal Mehta', avatar: '4B' },
  { id: 'Grade 5 A', name: 'Grade 5 A', wing: 'Primary', campus: 'Main Campus', room: 'Room 109', teacher: 'S. Desai', avatar: '5A' },
  { id: 'Grade 5 B', name: 'Grade 5 B', wing: 'Primary', campus: 'West Campus', room: 'Room 110', teacher: 'Neha Patel', avatar: '5B' },

  // Middle School (Grades 6 - 8)
  { id: 'Grade 6 A', name: 'Grade 6 A', wing: 'Middle', campus: 'Main Campus', room: 'Room 201', teacher: 'Kavita Iyer', avatar: '6A' },
  { id: 'Grade 6 B', name: 'Grade 6 B', wing: 'Middle', campus: 'Main Campus', room: 'Room 202', teacher: 'R. Menon', avatar: '6B' },
  { id: 'Grade 7 A', name: 'Grade 7 A', wing: 'Middle', campus: 'Main Campus', room: 'Room 203', teacher: 'Dr. Vikram S.', avatar: '7A' },
  { id: 'Grade 7 B', name: 'Grade 7 B', wing: 'Middle', campus: 'Main Campus', room: 'Room 204', teacher: 'Arjun Rao', avatar: '7B' },
  { id: 'Grade 8 A', name: 'Grade 8 A', wing: 'Middle', campus: 'Main Campus', room: 'Room 205', teacher: 'Kavita Iyer', avatar: '8A' },
  { id: 'Grade 8 B', name: 'Grade 8 B', wing: 'Middle', campus: 'Main Campus', room: 'Room 206', teacher: 'S. Desai', avatar: '8B' },

  // Secondary School (Grades 9 - 10)
  { id: 'Grade 9 A', name: 'Grade 9 A', wing: 'Secondary', campus: 'Main Campus', room: 'Room 301', teacher: 'R. Menon', avatar: '9A' },
  { id: 'Grade 9 B', name: 'Grade 9 B', wing: 'Secondary', campus: 'Main Campus', room: 'Room 302', teacher: 'Sunita Rao', avatar: '9B' },
  { id: 'Grade 10 A', name: 'Grade 10 A', wing: 'Secondary', campus: 'Main Campus', room: 'Room 303', teacher: 'Kavita Iyer', avatar: '10A' },
  { id: 'Grade 10 B', name: 'Grade 10 B', wing: 'Secondary', campus: 'Main Campus', room: 'Room 304', teacher: 'R. Menon', avatar: '10B' },

  // Senior Secondary (Grades 11 - 12)
  { id: 'Grade 11 Science', name: 'Grade 11 Science', wing: 'Senior', campus: 'Main Campus', room: 'Lab 1 / Rm 401', teacher: 'Dr. Vikram S.', avatar: '11S' },
  { id: 'Grade 11 Commerce', name: 'Grade 11 Commerce', wing: 'Senior', campus: 'Main Campus', room: 'Room 402', teacher: 'Harsh Soni', avatar: '11C' },
  { id: 'Grade 12 Science', name: 'Grade 12 Science', wing: 'Senior', campus: 'Main Campus', room: 'Lab 2 / Rm 403', teacher: 'R. Menon', avatar: '12S' },
  { id: 'Grade 12 Commerce', name: 'Grade 12 Commerce', wing: 'Senior', campus: 'Main Campus', room: 'Room 404', teacher: 'Harsh Soni', avatar: '12C' }
];

function ensureAllClassStudents(targetDb) {
  if (!targetDb || !Array.isArray(targetDb.students)) return;
  if (!targetDb.attendance) targetDb.attendance = {};
  if (!targetDb.attendanceMeta) targetDb.attendanceMeta = {};

  const FIRST_NAMES = [
    'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan', 'Krishna', 'Ishaan',
    'Shaurya', 'Atharv', 'Dhruv', 'Kabir', 'Rudra', 'Ananya', 'Diya', 'Aadhya', 'Pari', 'Saanvi',
    'Myra', 'Sara', 'Isha', 'Riya', 'Kiara', 'Aanya', 'Navya', 'Avani', 'Prisha', 'Tanvi'
  ];
  const LAST_NAMES = [
    'Sharma', 'Patel', 'Verma', 'Mehta', 'Desai', 'Shah', 'Joshi', 'Trivedi', 'Rao', 'Iyer',
    'Menon', 'Nair', 'Chopra', 'Malhotra', 'Gupta', 'Bhatia', 'Singh', 'Kapoor', 'Reddy', 'Choudhary'
  ];

  let studentIdCounter = 1200;

  ALL_CLASSES.forEach((cls, cIdx) => {
    let existing = targetDb.students.filter(s => `${s.grade} ${s.section}`.trim() === cls.name.trim());
    if (existing.length >= 5) {
      existing.forEach(s => {
        if (!targetDb.attendance[s.id] || targetDb.attendance[s.id].length < 5) {
          targetDb.attendance[s.id] = ['Present', 'Present', 'Present', 'Present', 'Present'];
        }
      });
      return;
    }

    let parts = cls.name.split(' ');
    let grade = parts.slice(0, 2).join(' ');
    let section = parts.slice(2).join(' ') || 'A';
    let needed = 5 - existing.length;

    for (let i = 0; i < needed; i++) {
      let stId = `ST-${studentIdCounter++}`;
      while (targetDb.students.some(s => s.id === stId)) {
        stId = `ST-${studentIdCounter++}`;
      }
      let fn = FIRST_NAMES[(cIdx * 5 + i * 3) % FIRST_NAMES.length];
      let ln = LAST_NAMES[(cIdx * 7 + i * 2) % LAST_NAMES.length];
      let studentName = `${fn} ${ln}`;
      let parentName = `${ln} ${fn.startsWith('A') || fn.startsWith('D') ? 'Rajesh' : 'Suresh'}`;
      let roll = String(existing.length + i + 1).padStart(2, '0');
      let phone = `9825${(cIdx * 13 + i * 7) % 80 + 10} ${10000 + ((cIdx * 451 + i * 197) % 89999)}`;

      let defaultMarks = ['Present', 'Present', 'Present', 'Present', 'Present'];
      let pattern = (cIdx * 3 + i) % 8;
      if (pattern === 1) {
        defaultMarks[1] = 'Absent';
        targetDb.attendanceMeta[stId + '_1'] = { reason: 'Medical / Viral Fever', remarks: 'Parent called: doctor visit', arrivalTime: '' };
      } else if (pattern === 2) {
        defaultMarks[0] = 'Late';
        targetDb.attendanceMeta[stId + '_0'] = { reason: 'School Bus / Transport Delay', remarks: 'Route 2 bus delay in traffic', arrivalTime: '08:42 AM' };
      } else if (pattern === 3) {
        defaultMarks[2] = 'Excused';
        targetDb.attendanceMeta[stId + '_2'] = { reason: 'Authorized School Sports / Olympiad', remarks: 'District chess championship', arrivalTime: '' };
      } else if (pattern === 4) {
        defaultMarks[0] = 'Present';
        defaultMarks[2] = 'Late';
        targetDb.attendanceMeta[stId + '_2'] = { reason: 'Doctor / Dental Appointment', remarks: 'Arrived at 9:15 AM', arrivalTime: '09:15 AM' };
      } else if (pattern === 7 && i === needed - 1) {
        defaultMarks[0] = 'Absent';
        defaultMarks[2] = 'Absent';
        defaultMarks[4] = 'Late';
        targetDb.attendanceMeta[stId + '_0'] = { reason: 'Family Emergency / Personal Leave', remarks: 'Out of town wedding', arrivalTime: '' };
      }

      let newStudent = {
        id: stId,
        name: studentName,
        grade: grade,
        section: section,
        roll: roll,
        parent: parentName,
        phone: phone,
        status: 'Active',
        campus: cls.campus,
        attendance: '95%',
        balance: (cIdx + i) % 4 === 0 ? 15000 : 0
      };

      targetDb.students.push(newStudent);
      targetDb.attendance[stId] = defaultMarks;
    }
  });
}

function exportAttendanceCsv(className) {
  let students = db.students.filter(x => `${x.grade} ${x.section}`.trim() === className.trim());
  let days = ['Mon 23 Nov', 'Tue 24 Nov', 'Wed 25 Nov', 'Thu 26 Nov', 'Fri 27 Nov'];
  let headers = ['Student ID', 'Roll No', 'Student Name', 'Parent Name', 'Phone', 'Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27', 'Attendance %'];
  let rows = students.map(s => {
    let marks = db.attendance[s.id] || ['Unmarked', 'Unmarked', 'Unmarked', 'Unmarked', 'Unmarked'];
    return [
      s.id,
      s.roll || '',
      s.name,
      s.parent || '',
      s.phone || '',
      marks[0] || 'Unmarked',
      marks[1] || 'Unmarked',
      marks[2] || 'Unmarked',
      marks[3] || 'Unmarked',
      marks[4] || 'Unmarked',
      s.attendance || getStudentAttendance(s.id)
    ];
  });
  let csv = [
    headers.join(','),
    ...rows.map(r => r.map(k => `"${String(k ?? '').replace(/"/g, '""')}"`).join(','))
  ].join('\r\n');

  let blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `attendance-${className.replace(/\s+/g, '_')}-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast(`Exported attendance CSV for ${className}`);
}

function calculateGrade(theory, practical, maxTheory = 80, maxPractical = 20, passMarks = 40, status = 'Present') {
  const maxTotal = maxTheory + maxPractical;
  if (status === 'Absent') {
    return { theory: 0, practical: 0, total: 0, maxTotal, pct: 0, grade: 'AB', gradePoint: 0.0, tier: 'grade-ab', passed: false, status: 'Absent', remark: 'Candidate absent from assessment' };
  }
  if (status === 'Medical') {
    return { theory: 0, practical: 0, total: 0, maxTotal, pct: 0, grade: 'ML', gradePoint: 0.0, tier: 'grade-ml', passed: false, status: 'Medical', remark: 'Approved medical leave exemption' };
  }
  if (status === 'Malpractice') {
    return { theory: 0, practical: 0, total: 0, maxTotal, pct: 0, grade: 'UFM', gradePoint: 0.0, tier: 'grade-ufm', passed: false, status: 'Malpractice', remark: 'Unfair Means (UFM) under board scrutiny' };
  }

  let t = Math.max(0, Math.min(maxTheory, Math.round(Number(theory) || 0)));
  let p = Math.max(0, Math.min(maxPractical, Math.round(Number(practical) || 0)));
  let total = t + p;
  let pct = maxTotal > 0 ? Math.round((total / maxTotal) * 1000) / 10 : 0;
  let grade = 'E';
  let gradePoint = 0.0;
  let tier = 'grade-e';
  let remark = 'Remedial intervention & counseling required';

  if (pct >= 91) {
    grade = 'A1'; gradePoint = 10.0; tier = 'grade-a1'; remark = 'Outstanding concept mastery & analytical rigor';
  } else if (pct >= 81) {
    grade = 'A2'; gradePoint = 9.0; tier = 'grade-a2'; remark = 'Excellent performance with high computational accuracy';
  } else if (pct >= 71) {
    grade = 'B1'; gradePoint = 8.0; tier = 'grade-b1'; remark = 'Very good comprehension and structured reasoning';
  } else if (pct >= 61) {
    grade = 'B2'; gradePoint = 7.0; tier = 'grade-b2'; remark = 'Good concept clarity with steady academic progress';
  } else if (pct >= 51) {
    grade = 'C1'; gradePoint = 6.0; tier = 'grade-c'; remark = 'Satisfactory performance; encourage deeper revision';
  } else if (pct >= 41) {
    grade = 'C2'; gradePoint = 5.0; tier = 'grade-c'; remark = 'Average grasp; recommend targeted practice in problem solving';
  } else if (pct >= 33) {
    grade = 'D'; gradePoint = 4.0; tier = 'grade-d'; remark = 'Marginal pass; needs focused concept reinforcement';
  } else {
    grade = 'E'; gradePoint = 0.0; tier = 'grade-e'; remark = 'Remedial intervention & peer counseling recommended';
  }

  let passed = total >= passMarks && pct >= 33;
  return {
    theory: t,
    practical: p,
    total,
    maxTotal,
    pct,
    grade,
    gradePoint,
    tier,
    passed,
    status: passed ? 'Passed' : 'Remedial',
    remark
  };
}

function ensureAllClassExams(targetDb) {
  if (!targetDb) return;
  if (!Array.isArray(targetDb.exams)) targetDb.exams = [];
  if (!targetDb.examMarks) targetDb.examMarks = {};
  if (!Array.isArray(targetDb.examSeriesList)) {
    targetDb.examSeriesList = ['Term 1 Mid-Term', 'Periodic Test 2', 'Annual Board Mocks'];
  }

  ALL_CLASSES.forEach((cls, cIdx) => {
    let subjects = [];
    if (cls.wing === 'Senior') {
      if (cls.name.includes('Science')) {
        subjects = [
          { sub: 'Physics', code: 'PHY', maxT: 70, maxP: 30, date: '2026-11-23' },
          { sub: 'Chemistry', code: 'CHE', maxT: 70, maxP: 30, date: '2026-11-25' },
          { sub: 'Mathematics', code: 'MAT', maxT: 80, maxP: 20, date: '2026-11-27' },
          { sub: 'English Core', code: 'ENG', maxT: 80, maxP: 20, date: '2026-11-29' },
          { sub: 'Computer Science', code: 'CSC', maxT: 70, maxP: 30, date: '2026-12-01' }
        ];
      } else {
        subjects = [
          { sub: 'Accountancy', code: 'ACC', maxT: 80, maxP: 20, date: '2026-11-23' },
          { sub: 'Business Studies', code: 'BST', maxT: 80, maxP: 20, date: '2026-11-25' },
          { sub: 'Economics', code: 'ECO', maxT: 80, maxP: 20, date: '2026-11-27' },
          { sub: 'English Core', code: 'ENG', maxT: 80, maxP: 20, date: '2026-11-29' },
          { sub: 'Applied Mathematics', code: 'APM', maxT: 80, maxP: 20, date: '2026-12-01' }
        ];
      }
    } else if (cls.wing === 'Secondary') {
      subjects = [
        { sub: 'Mathematics', code: 'MAT', maxT: 80, maxP: 20, date: '2026-11-23' },
        { sub: 'Science & Technology', code: 'SCI', maxT: 80, maxP: 20, date: '2026-11-25' },
        { sub: 'English Language & Lit', code: 'ENG', maxT: 80, maxP: 20, date: '2026-11-27' },
        { sub: 'Social Science', code: 'SST', maxT: 80, maxP: 20, date: '2026-11-29' },
        { sub: 'Information Technology', code: 'IT', maxT: 50, maxP: 50, date: '2026-12-01' }
      ];
    } else if (cls.wing === 'Middle') {
      subjects = [
        { sub: 'Mathematics', code: 'MAT', maxT: 80, maxP: 20, date: '2026-11-23' },
        { sub: 'General Science', code: 'SCI', maxT: 80, maxP: 20, date: '2026-11-25' },
        { sub: 'English Literature', code: 'ENG', maxT: 80, maxP: 20, date: '2026-11-27' },
        { sub: 'Social Studies', code: 'SST', maxT: 80, maxP: 20, date: '2026-11-29' },
        { sub: 'Hindi / Second Language', code: 'HIN', maxT: 80, maxP: 20, date: '2026-12-01' }
      ];
    } else {
      subjects = [
        { sub: 'Mathematics', code: 'MAT', maxT: 60, maxP: 40, date: '2026-11-23' },
        { sub: 'Environmental Studies', code: 'EVS', maxT: 60, maxP: 40, date: '2026-11-25' },
        { sub: 'English Language', code: 'ENG', maxT: 60, maxP: 40, date: '2026-11-27' },
        { sub: 'Hindi', code: 'HIN', maxT: 60, maxP: 40, date: '2026-11-29' },
        { sub: 'Computer Basics & Art', code: 'ART', maxT: 50, maxP: 50, date: '2026-12-01' }
      ];
    }

    let classStudents = (targetDb.students || []).filter(s => `${s.grade} ${s.section}`.trim() === cls.name.trim());

    subjects.forEach((subj, sIdx) => {
      let examId = `EX-${cls.id.replace(/\s+/g, '')}-${subj.code}`;
      let existingExam = targetDb.exams.find(e => e.id === examId);
      if (!existingExam) {
        existingExam = {
          id: examId,
          title: subj.sub,
          subjectCode: subj.code,
          grade: cls.name,
          wing: cls.wing,
          series: 'Term 1 Mid-Term',
          date: subj.date,
          time: '09:00 AM – 12:00 PM',
          room: cls.room || 'Examination Hall A',
          maxTheory: subj.maxT,
          maxPractical: subj.maxP,
          max: `${subj.maxT + subj.maxP} marks`,
          passMarks: Math.round((subj.maxT + subj.maxP) * 0.4),
          teacher: cls.teacher,
          invigilator: cls.teacher,
          status: 'Marks Open',
          campus: cls.campus
        };
        targetDb.exams.push(existingExam);
      }

      classStudents.forEach((student, stIdx) => {
        let markKey = `${student.id}_${examId}`;
        if (!targetDb.examMarks[markKey]) {
          let theoryRatio = 0.8;
          let practicalRatio = 0.85;
          let studentStatus = 'Present';
          let customRemark = '';

          // Realistic distribution across the 5 students of each class
          if (stIdx === 0) {
            // Topper (92% - 96%)
            theoryRatio = 0.92 + ((cIdx + sIdx) % 5) * 0.01;
            practicalRatio = 0.95;
            customRemark = 'Exemplary concept clarity; consistent class topper.';
          } else if (stIdx === 1) {
            // High Achiever (82% - 88%)
            theoryRatio = 0.82 + ((cIdx + sIdx) % 6) * 0.01;
            practicalRatio = 0.90;
            customRemark = 'Strong analytical precision and consistent homework.';
          } else if (stIdx === 2) {
            // Above Average (71% - 78%)
            theoryRatio = 0.72 + ((cIdx + sIdx) % 5) * 0.01;
            practicalRatio = 0.85;
            customRemark = 'Good comprehension; recommend practicing timed mock tests.';
          } else if (stIdx === 3) {
            // Average (58% - 66%)
            theoryRatio = 0.58 + ((cIdx + sIdx) % 6) * 0.01;
            practicalRatio = 0.80;
            customRemark = 'Satisfactory progress; needs focused revision in formulas.';
          } else {
            // Student 4: Variable to ensure genuine remedial cases in demonstrable classes!
            if (cIdx % 3 === 0 && (sIdx === 0 || sIdx === 1)) {
              // Remedial in Math or Science (28% - 35%)
              theoryRatio = 0.28;
              practicalRatio = 0.50;
              customRemark = 'Struggling with fundamentals; assigned to remedial study circle.';
            } else if (cIdx % 4 === 1 && sIdx === 2) {
              // Medical leave on 1 exam
              studentStatus = 'Medical';
              customRemark = 'Absent on verified medical grounds (certificate filed).';
            } else {
              theoryRatio = 0.52;
              practicalRatio = 0.75;
              customRemark = 'Average conceptual grasp; encourage extra doubt sessions.';
            }
          }

          let theoryVal = Math.round(subj.maxT * theoryRatio);
          let practicalVal = Math.round(subj.maxP * practicalRatio);

          targetDb.examMarks[markKey] = {
            theory: theoryVal,
            practical: practicalVal,
            status: studentStatus,
            remarks: customRemark,
            coscholastic: {
              workEdu: 'A',
              artEdu: stIdx === 0 ? 'A' : 'B',
              healthPhy: 'A',
              discipline: studentStatus === 'Present' ? 'A' : 'B'
            }
          };
        }
      });
    });

    // Also ensure any pre-existing or custom scheduled exams for this class have marks
    let allClassExams = targetDb.exams.filter(e => (e.grade || '').trim().toLowerCase() === cls.name.trim().toLowerCase());
    allClassExams.forEach(ex => {
      let maxT = ex.maxTheory || 80;
      let maxP = ex.maxPractical || 20;
      classStudents.forEach((student, stIdx) => {
        let markKey = `${student.id}_${ex.id}`;
        if (!targetDb.examMarks[markKey]) {
          let ratio = stIdx === 0 ? 0.92 : stIdx === 1 ? 0.84 : stIdx === 2 ? 0.74 : stIdx === 3 ? 0.62 : 0.52;
          targetDb.examMarks[markKey] = {
            theory: Math.round(maxT * ratio),
            practical: Math.round(maxP * (ratio > 0.8 ? 0.9 : 0.75)),
            status: 'Present',
            remarks: 'Consistent concept mastery and application.',
            coscholastic: { workEdu: 'A', artEdu: 'A', healthPhy: 'A', discipline: 'A' }
          };
        }
      });
    });
  });
}

function getClassExams(className, seriesName = 'Term 1 Mid-Term') {
  if (!Array.isArray(db.exams)) return [];
  return db.exams.filter(e => {
    let matchClass = (e.grade || '').trim().toLowerCase() === (className || '').trim().toLowerCase();
    let matchSeries = !e.series || (e.series || '').trim().toLowerCase() === (seriesName || '').trim().toLowerCase();
    return matchClass && matchSeries;
  });
}

function getExamMarks(studentId, examId) {
  let markKey = `${studentId}_${examId}`;
  let m = db.examMarks && db.examMarks[markKey];
  let exam = (db.exams || []).find(e => e.id === examId) || {};
  let maxT = exam.maxTheory || 80;
  let maxP = exam.maxPractical || 20;
  let passM = exam.passMarks || 40;

  if (!m) {
    let defGrade = calculateGrade(0, 0, maxT, maxP, passM, 'Present');
    return {
      ...defGrade,
      theory: 0,
      practical: 0,
      status: 'Present',
      remarks: '',
      coscholastic: { workEdu: 'A', artEdu: 'A', healthPhy: 'A', discipline: 'A' }
    };
  }

  let gradeCalc = calculateGrade(m.theory, m.practical, maxT, maxP, passM, m.status || 'Present');
  return {
    ...gradeCalc,
    status: m.status || 'Present',
    remarks: m.remarks || gradeCalc.remark,
    coscholastic: m.coscholastic || { workEdu: 'A', artEdu: 'A', healthPhy: 'A', discipline: 'A' }
  };
}

function getClassMarksheet(className, seriesName = 'Term 1 Mid-Term') {
  let exams = getClassExams(className, seriesName);
  let students = (db.students || []).filter(s => `${s.grade} ${s.section}`.trim().toLowerCase() === (className || '').trim().toLowerCase());

  let matrix = students.map(s => {
    let subjectMarks = exams.map(ex => {
      let markInfo = getExamMarks(s.id, ex.id);
      return { exam: ex, markInfo };
    });

    let totalMarks = subjectMarks.reduce((acc, sm) => acc + sm.markInfo.total, 0);
    let totalMax = subjectMarks.reduce((acc, sm) => acc + sm.markInfo.maxTotal, 0);
    let pct = totalMax > 0 ? Math.round((totalMarks / totalMax) * 1000) / 10 : 0;
    let gpa = totalMax > 0 ? Math.round((subjectMarks.reduce((acc, sm) => acc + sm.markInfo.gradePoint, 0) / (subjectMarks.length || 1)) * 10) / 10 : 0;
    let overallGrade = calculateGrade(totalMarks, 0, totalMax, 0, Math.round(totalMax * 0.4)).grade;
    let hasRemedial = subjectMarks.some(sm => sm.markInfo.status === 'Remedial' || sm.markInfo.grade === 'E');
    let hasMedicalOrAbsent = subjectMarks.some(sm => sm.markInfo.status === 'Medical' || sm.markInfo.status === 'Absent');

    return {
      student: s,
      subjectMarks,
      totalMarks,
      totalMax,
      pct,
      gpa,
      overallGrade,
      hasRemedial,
      hasMedicalOrAbsent,
      passed: pct >= 33 && !hasRemedial
    };
  });

  // Calculate statistics
  let totalStudents = matrix.length;
  let classAvg = totalStudents > 0 ? Math.round((matrix.reduce((acc, m) => acc + m.pct, 0) / totalStudents) * 10) / 10 : 0;
  let classGrade = calculateGrade(classAvg, 0, 100, 0, 40).grade;
  let passedCount = matrix.filter(m => m.passed).length;
  let passRate = totalStudents > 0 ? Math.round((passedCount / totalStudents) * 1000) / 10 : 0;
  let remedialList = matrix.filter(m => m.hasRemedial || m.pct < 40);
  let remedialCount = remedialList.length;

  // Sorted toppers
  let sorted = [...matrix].sort((a, b) => b.pct - a.pct);
  let topper = sorted[0] || null;

  // Grade Distribution Counts
  let distribution = { A1: 0, A2: 0, B1: 0, B2: 0, C: 0, Remedial: 0 };
  matrix.forEach(m => {
    if (m.pct >= 91) distribution.A1++;
    else if (m.pct >= 81) distribution.A2++;
    else if (m.pct >= 71) distribution.B1++;
    else if (m.pct >= 61) distribution.B2++;
    else if (m.pct >= 40) distribution.C++;
    else distribution.Remedial++;
  });

  return {
    exams,
    students,
    matrix,
    stats: {
      totalStudents,
      classAvg,
      classGrade,
      passRate,
      remedialCount,
      topper
    },
    distribution,
    remedialList
  };
}

function exportExamMarksheetCsv(className, seriesName = 'Term 1 Mid-Term') {
  let ms = getClassMarksheet(className, seriesName);
  let headers = ['Roll No', 'Student ID', 'Student Name', 'Class'];
  ms.exams.forEach(ex => {
    headers.push(`${ex.title} Theory (/80)`);
    headers.push(`${ex.title} Practical (/20)`);
    headers.push(`${ex.title} Total (/100)`);
    headers.push(`${ex.title} Grade`);
  });
  headers.push('Grand Total', 'Max Marks', 'Percentage %', 'Overall Grade', 'CGPA', 'Result Status');

  let rows = ms.matrix.map(m => {
    let row = [
      m.student.roll || '',
      m.student.id,
      m.student.name,
      `${m.student.grade} ${m.student.section}`.trim()
    ];
    m.subjectMarks.forEach(sm => {
      row.push(sm.markInfo.theory);
      row.push(sm.markInfo.practical);
      row.push(sm.markInfo.total);
      row.push(sm.markInfo.grade);
    });
    row.push(m.totalMarks, m.totalMax, `${m.pct}%`, m.overallGrade, m.gpa, m.passed ? 'PASSED' : 'REMEDIAL');
    return row;
  });

  let csv = [
    headers.join(','),
    ...rows.map(r => r.map(k => `"${String(k ?? '').replace(/"/g, '""')}"`).join(','))
  ].join('\r\n');

  let blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `marksheet-${className.replace(/\s+/g, '_')}-${seriesName.replace(/\s+/g, '_')}-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast(`Exported official marksheet CSV for ${className}`);
}

function syncBalances() {
  if (typeof ensureAllClassStudents === 'function') {
    ensureAllClassStudents(db);
  }
  if (typeof ensureAllClassExams === 'function') {
    ensureAllClassExams(db);
  }
  if (!db.attendanceMeta) db.attendanceMeta = {};
  if (!db.examMarks) db.examMarks = {};
  db.students.forEach(s => {
    s.balance = getStudentBalance(s.name);
    s.attendance = getStudentAttendance(s.id, s.attendance);
  });
}
syncBalances();

const navGroups = [
  ['WORKSPACE', [
    ['overview', 'Overview', 'grid'],
    ['admissions', 'Admissions', 'users'],
    ['students', 'Students', 'graduation'],
    ['attendance', 'Attendance', 'calendar'],
    ['academics', 'Academics & exams', 'book'],
    ['fees', 'Fees & payments', 'wallet'],
    ['timetable', 'Timetable', 'clock'],
    ['parent', 'Parent portal preview', 'user']
  ]],
  ['OPERATIONS', [
    ['communication', 'Communication', 'message'],
    ['staff', 'Staff & HR', 'briefcase'],
    ['transport', 'Transport', 'bus'],
    ['library', 'Library', 'book'],
    ['assets', 'Assets & facilities', 'briefcase'],
    ['compliance', 'Compliance tracker', 'shield'],
    ['helpdesk', 'Helpdesk', 'headset'],
    ['reports', 'Reports & insights', 'chart']
  ]],
  ['SYSTEM', [
    ['settings', 'Settings', 'settings']
  ]]
];

const names = {
  overview: 'Overview',
  admissions: 'Admissions',
  students: 'Students',
  attendance: 'Attendance',
  academics: 'Academics & exams',
  fees: 'Fees & payments',
  timetable: 'Timetable',
  parent: 'Parent portal preview',
  library: 'Library',
  assets: 'Assets & facilities',
  compliance: 'Compliance tracker',
  communication: 'Communication',
  staff: 'Staff & HR',
  transport: 'Transport',
  helpdesk: 'Helpdesk',
  reports: 'Reports & insights',
  settings: 'Settings'
};

const meta = {
  leads: {
    title: 'New enquiry',
    label: 'Enquiries',
    fields: [
      ['name', 'Student name', 'text', true],
      ['grade', 'Applying for', 'select', true, ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 5', 'Grade 6', 'Grade 8', 'Grade 9', 'Grade 10']],
      ['parent', 'Parent / guardian', 'text', true],
      ['phone', 'Phone number', 'tel', true],
      ['source', 'Source', 'select', true, ['Website', 'Instagram', 'Walk-in', 'Referral', 'Phone']],
      ['stage', 'Stage', 'select', true, ['New enquiry', 'Contacted', 'School visit', 'Application', 'Admitted']],
      ['owner', 'Assigned to', 'select', true, ['Neha Patel', 'Arjun Rao']],
      ['next', 'Next action', 'text', false],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  students: {
    title: 'Add student',
    label: 'Students',
    fields: [
      ['name', 'Student name', 'text', true],
      ['grade', 'Grade', 'select', true, ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 5', 'Grade 6', 'Grade 8', 'Grade 9', 'Grade 10']],
      ['section', 'Section', 'select', true, ['A', 'B', 'C']],
      ['roll', 'Roll number', 'text', true],
      ['parent', 'Parent / guardian', 'text', true],
      ['phone', 'Phone number', 'tel', true],
      ['status', 'Status', 'select', true, ['Active', 'Inactive']],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  fees: {
    title: 'Create invoice',
    label: 'Invoices',
    fields: [
      ['student', 'Student name', 'text', true],
      ['grade', 'Grade', 'text', true],
      ['type', 'Fee head', 'text', true],
      ['amount', 'Amount (₹)', 'number', true],
      ['paid', 'Paid (₹)', 'number', true],
      ['due', 'Due date', 'date', true],
      ['status', 'Status', 'select', true, ['Pending', 'Partial', 'Paid', 'Overdue']],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  staff: {
    title: 'Add staff member',
    label: 'Staff',
    fields: [
      ['name', 'Full name', 'text', true],
      ['role', 'Role', 'text', true],
      ['department', 'Department', 'select', true, ['Leadership', 'Admissions', 'Academics', 'Finance', 'Transport', 'Office']],
      ['phone', 'Phone', 'tel', true],
      ['email', 'Email', 'email', true],
      ['status', 'Status', 'select', true, ['Active', 'On leave', 'Inactive']],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  tickets: {
    title: 'Create support ticket',
    label: 'Tickets',
    fields: [
      ['subject', 'Subject', 'text', true],
      ['student', 'Student / class', 'text', true],
      ['category', 'Category', 'select', true, ['Transport', 'Finance', 'Student services', 'Facilities', 'Academics']],
      ['priority', 'Priority', 'select', true, ['Normal', 'High', 'Urgent']],
      ['owner', 'Assigned to', 'text', true],
      ['status', 'Status', 'select', true, ['Open', 'In progress', 'Resolved']],
      ['due', 'Due', 'text', true],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  messages: {
    title: 'Compose announcement',
    label: 'Messages',
    fields: [
      ['subject', 'Subject', 'text', true],
      ['audience', 'Audience', 'select', true, ['All parents', 'Grade 8 parents', 'Grade 5 parents', 'Route 3 parents', 'All staff']],
      ['channel', 'Channel', 'select', true, ['In-app', 'Email', 'SMS']],
      ['body', 'Message', 'textarea', true],
      ['campus', 'Campus', 'select', true, ['All campuses', 'Main Campus', 'West Campus']]
    ]
  },
  transport: {
    title: 'Add route',
    label: 'Routes',
    fields: [
      ['route', 'Route name', 'text', true],
      ['driver', 'Driver', 'text', true],
      ['vehicle', 'Vehicle number', 'text', true],
      ['students', 'Students', 'number', true],
      ['capacity', 'Capacity', 'number', true],
      ['status', 'Status', 'select', true, ['On time', 'Delayed', 'Inactive']],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  library: {
    title: 'Issue library book',
    label: 'Loans',
    fields: [
      ['title', 'Book title', 'text', true],
      ['student', 'Issued to', 'text', true],
      ['issued', 'Issue date', 'date', true],
      ['due', 'Return due', 'date', true],
      ['status', 'Status', 'select', true, ['Issued', 'Due today', 'Returned', 'Overdue']],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  assets: {
    title: 'Add school asset',
    label: 'Assets',
    fields: [
      ['item', 'Asset name', 'text', true],
      ['category', 'Category', 'select', true, ['IT equipment', 'Lab equipment', 'Furniture', 'Facilities', 'Sports']],
      ['assigned', 'Assigned to', 'text', true],
      ['condition', 'Condition', 'select', true, ['Working', 'Service required', 'Out of service']],
      ['next', 'Next service date', 'date', true],
      ['status', 'Status', 'select', true, ['Active', 'Maintenance', 'Retired']],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  compliance: {
    title: 'Add obligation',
    label: 'Obligations',
    fields: [
      ['item', 'Requirement', 'text', true],
      ['owner', 'Accountable owner', 'text', true],
      ['due', 'Due date', 'date', true],
      ['evidence', 'Evidence / document', 'text', true],
      ['status', 'Status', 'select', true, ['Open', 'In progress', 'Completed']],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  },
  exams: {
    title: 'Schedule assessment',
    label: 'Assessments',
    fields: [
      ['title', 'Assessment name', 'text', true],
      ['grade', 'Class / section', 'text', true],
      ['date', 'Date', 'date', true],
      ['max', 'Maximum marks', 'text', true],
      ['teacher', 'Teacher', 'text', true],
      ['status', 'Status', 'select', true, ['Scheduled', 'Completed', 'Results published']],
      ['campus', 'Campus', 'select', true, ['Main Campus', 'West Campus']]
    ]
  }
};

function generateId(key) {
  const cfg = {
    leads: { prefix: 'AD', min: 2400 },
    students: { prefix: 'ST', min: 1000 },
    fees: { prefix: `INV-${new Date().getFullYear()}`, min: 300 },
    staff: { prefix: 'EMP', min: 100 },
    tickets: { prefix: 'SUP', min: 100 },
    messages: { prefix: 'MSG', min: 300 },
    transport: { prefix: 'RT', min: 0, pad: 2 },
    library: { prefix: 'LIB', min: 100 },
    assets: { prefix: 'AST', min: 100 },
    compliance: { prefix: 'GOV', min: 100 },
    exams: { prefix: 'EX', min: 200 }
  }[key] || { prefix: 'ID', min: 100 };

  let maxNum = cfg.min;
  (db[key] || []).forEach(r => {
    let m = String(r.id || '').match(/(\d+)$/);
    if (m) {
      let num = parseInt(m[1], 10);
      if (num > maxNum) maxNum = num;
    }
  });
  let next = maxNum + 1;
  let formatted = cfg.pad ? String(next).padStart(cfg.pad, '0') : next;
  return `${cfg.prefix}-${formatted}`;
}

function getGlobalSearchResults(q) {
  let query = q.trim().toLowerCase();
  if (!query) return [];
  let res = [];

  // Students
  db.students.forEach(s => {
    if (s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query) || s.parent.toLowerCase().includes(query) || `${s.grade} ${s.section}`.toLowerCase().includes(query)) {
      res.push({ type: 'Student', key: 'students', id: s.id, title: s.name, badge: `${s.grade} ${s.section}`, sub: `Parent: ${s.parent} · ${s.campus}`, icon: 'graduation' });
    }
  });

  // Leads
  db.leads.forEach(l => {
    if (l.name.toLowerCase().includes(query) || l.id.toLowerCase().includes(query) || l.parent.toLowerCase().includes(query) || l.phone.includes(query)) {
      res.push({ type: 'Lead', key: 'leads', id: l.id, title: l.name, badge: l.stage, sub: `${l.grade} · Parent: ${l.parent}`, icon: 'users' });
    }
  });

  // Staff
  db.staff.forEach(st => {
    if (st.name.toLowerCase().includes(query) || st.role.toLowerCase().includes(query) || st.department.toLowerCase().includes(query)) {
      res.push({ type: 'Staff', key: 'staff', id: st.id, title: st.name, badge: st.role, sub: `${st.department} · ${st.campus}`, icon: 'briefcase' });
    }
  });

  // Fees
  db.fees.forEach(f => {
    if (f.id.toLowerCase().includes(query) || f.student.toLowerCase().includes(query) || f.type.toLowerCase().includes(query)) {
      res.push({ type: 'Invoice', key: 'fees', id: f.id, title: `${f.student} · ${f.type}`, badge: f.status, sub: `${f.id} · Balance: ${money(Math.max(0, +f.amount - +f.paid))}`, icon: 'wallet' });
    }
  });

  // Tickets
  db.tickets.forEach(t => {
    if (t.id.toLowerCase().includes(query) || t.subject.toLowerCase().includes(query) || t.student.toLowerCase().includes(query)) {
      res.push({ type: 'Ticket', key: 'tickets', id: t.id, title: t.subject, badge: t.priority, sub: `${t.id} · ${t.student} (${t.status})`, icon: 'headset' });
    }
  });

  return res.slice(0, 8);
}

function render() {
  syncBalances();
  const searchResults = state.showGlobalSearch && state.globalQuery.trim() ? getGlobalSearchResults(state.globalQuery) : [];

  document.getElementById('app').innerHTML = `
    <div class="app">
      <div class="mobile-backdrop ${state.mobile ? 'show' : ''}" data-action="mobile-close"></div>
      <aside class="sidebar ${state.mobile ? 'open' : ''}">
        <div class="brand">
          <div class="brand-name">campus<span style="color:#9badff">OS</span><small>SCHOOL OPERATIONS</small></div>
        </div>
        <div class="nav-scroll">
          ${navGroups.map(([label, items]) => `
            <div class="nav-label">${label}</div>
            ${items.map(([id, title, ico]) => `
              <button class="nav-item ${state.page === id ? 'active' : ''}" data-page="${id}">
                <span class="nav-icon">${icon(ico)}</span>${title}
                ${id === 'helpdesk' && db.tickets.filter(x => x.status === 'Open').length ? `<span class="nav-count">${db.tickets.filter(x => x.status === 'Open').length}</span>` : ''}
              </button>
            `).join('')}
          `).join('')}
        </div>
        <div class="sidebar-bottom">
          <div class="demo-note">
            <strong>Interactive client demo</strong>
            Sample records only · Changes are saved in this browser.
          </div>
          <div class="side-user">
            ${avatar('Priya Nair')}
            <div>
              <strong>${esc(db.settings.school)}</strong>
              <small>Academic year ${esc(db.settings.year)}</small>
            </div>
          </div>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div class="flex">
            <button class="icon-btn mobile-menu" data-action="mobile-toggle" aria-label="Open menu">${icon('menu')}</button>
            <div class="breadcrumb">
              <span>${esc(db.settings.school)}</span>
              <span>›</span>
              <strong>${esc(names[state.page])}</strong>
            </div>
          </div>
          <div class="top-actions">
            <div class="searchbox">
              ${icon('search')}
              <input id="global-search" placeholder="Search students, leads..." autocomplete="off" value="${esc(state.globalQuery)}" aria-label="Global search">
              ${state.globalQuery ? `<button class="search-clear" data-action="clear-global-search" aria-label="Clear search">×</button>` : ''}
              ${state.showGlobalSearch && state.globalQuery.trim().length > 0 ? `
                <div class="search-dropdown" id="search-dropdown">
                  ${searchResults.length ? `
                    <div class="search-group-title">Matches for "${esc(state.globalQuery)}"</div>
                    ${searchResults.map(r => `
                      <div class="search-item" data-open="${r.key}:${esc(r.id)}" data-action="close-search">
                        <div class="search-item-info">
                          <div class="flex">
                            <span class="search-item-icon">${icon(r.icon)}</span>
                            <strong>${esc(r.title)}</strong>
                            ${pill(r.badge)}
                          </div>
                          <small>${esc(r.sub)}</small>
                        </div>
                        ${icon('chevron')}
                      </div>
                    `).join('')}
                  ` : `
                    <div class="search-empty">No results found for "${esc(state.globalQuery)}"</div>
                  `}
                </div>
              ` : ''}
            </div>
            <select class="top-select" id="campus-select" aria-label="Select campus">
              <option ${state.campus === 'All campuses' ? 'selected' : ''}>All campuses</option>
              <option ${state.campus === 'Main Campus' ? 'selected' : ''}>Main Campus</option>
              <option ${state.campus === 'West Campus' ? 'selected' : ''}>West Campus</option>
            </select>
            <button class="icon-btn" data-action="notifications" aria-label="Notifications">
              ${icon('bell')}
              ${state.hasUnreadNotifs ? '<span class="dot"></span>' : ''}
            </button>
            ${avatar(state.role === 'Admin' ? 'Priya Nair' : state.role)}
          </div>
        </header>
        <div class="content">${pageContent()}</div>
      </main>
      ${state.overlay ? overlay() : ''}
      ${state.toast ? `<div class="toast" role="status">${esc(state.toast)}</div>` : ''}
    </div>
  `;

  let camp = document.getElementById('campus-select');
  if (camp) camp.value = state.campus;
  let role = document.getElementById('role-select');
  if (role) role.value = state.role;
  let cls = document.getElementById('attendance-class');
  if (cls) cls.value = state.attClass;
}

function head(title, sub, actions = '') {
  return `
    <div class="page-head">
      <div>
        <div class="eyebrow">${esc(db.settings.school.toUpperCase())} · ${esc(db.settings.year)}</div>
        <h1>${title}</h1>
        <p class="subtitle">${sub}</p>
      </div>
      <div class="head-actions">${actions}</div>
    </div>
  `;
}

function btn(label, action, kind = '', ico = '', type = 'button') {
  return `<button type="${type}" class="btn ${kind}" data-action="${action}">${ico ? icon(ico) : ''}${label}</button>`;
}

function pageContent() {
  switch (state.page) {
    case 'overview': return overview();
    case 'admissions': return admissions();
    case 'students': return students();
    case 'attendance': return attendance();
    case 'academics': return academics();
    case 'fees': return fees();
    case 'timetable': return timetable();
    case 'parent': return parentPortal();
    case 'library': return libraryPage();
    case 'assets': return assetsPage();
    case 'compliance': return compliancePage();
    case 'communication': return communication();
    case 'staff': return staff();
    case 'transport': return transport();
    case 'helpdesk': return helpdesk();
    case 'reports': return reports();
    case 'settings': return settings();
    default: return overview();
  }
}

function visible(list) {
  return list.filter(x => state.campus === 'All campuses' || x.campus === state.campus || x.campus === 'All campuses');
}

function kpi(label, value, foot, ico, variant = '') {
  return `
    <div class="card kpi">
      <div class="kpi-top">
        <span>${label}</span>
        <span class="kpi-icon ${variant}">${icon(ico)}</span>
      </div>
      <div class="kpi-value">${value}</div>
      <div class="kpi-foot">${foot}</div>
    </div>
  `;
}

function overview() {
  let active = visible(db.students).filter(x => x.status === 'Active').length;
  let open = visible(db.leads).filter(x => x.stage !== 'Admitted').length;
  let outstanding = visible(db.fees).reduce((n, x) => n + Math.max(0, +x.amount - +x.paid), 0);
  let focus = {
    Admin: ['School-wide operations', 'admissions'],
    Principal: ['Academic progress and school priorities', 'academics'],
    Admissions: ['Family follow-up and applications', 'admissions'],
    Teacher: ['Class attendance and assessments', 'attendance'],
    Finance: ['Collections and overdue accounts', 'fees']
  }[state.role] || ['School-wide operations', 'admissions'];

  return `
    ${head(`Good morning, ${state.role === 'Admin' ? 'Priya' : state.role} 👋`, 'Here is what is happening across your school today, 24 November 2026.', btn('Add enquiry', 'new:leads', 'primary', 'plus'))}
    <div class="role-banner">
      <span><strong>${esc(state.role)} focus:</strong> ${esc(focus[0])}. <button class="link" data-page="${focus[1]}">Open workspace</button></span>
      <select class="top-select" id="role-select">
        <option ${state.role === 'Admin' ? 'selected' : ''}>Admin</option>
        <option ${state.role === 'Principal' ? 'selected' : ''}>Principal</option>
        <option ${state.role === 'Admissions' ? 'selected' : ''}>Admissions</option>
        <option ${state.role === 'Teacher' ? 'selected' : ''}>Teacher</option>
        <option ${state.role === 'Finance' ? 'selected' : ''}>Finance</option>
      </select>
    </div>
    <div class="grid kpis">
      ${kpi('Active students', active, 'Across selected campus', 'graduation')}
      ${kpi('Open admissions', open, 'Leads awaiting conversion', 'users', 'purple')}
      ${kpi('Attendance today', '94.8%', 'Illustrative school-wide rate', 'calendar', 'green')}
      ${kpi('Fees outstanding', money(outstanding), 'Across demo invoices', 'wallet', 'orange')}
    </div>
    <div class="grid two-col">
      <div class="card card-pad">
        <div class="section-title">
          <h2>Admissions performance</h2>
          <button class="link" data-page="reports">View report</button>
        </div>
        <div class="chart-area">
          ${[[40, 51], [52, 68], [48, 60], [65, 77], [59, 72], [74, 84], [68, 92], [82, 95], [78, 90], [86, 98], [80, 94], [88, 100]].map(([a, b]) => `
            <div class="bar-group">
              <div class="bar" style="height:${a}%" title="Enquiries"></div>
              <div class="bar dark" style="height:${b}%" title="Admissions"></div>
            </div>
          `).join('')}
        </div>
        <div class="chart-labels">
          ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(x => `<span>${x}</span>`).join('')}
        </div>
        <div class="legend">
          <span>Enquiries</span>
          <span>Admissions</span>
          <small style="margin-left:auto">Illustrative trend · 2026</small>
        </div>
      </div>
      <div class="card card-pad">
        <div class="section-title">
          <h2>Admissions pipeline</h2>
          <button class="link" data-page="admissions">Open pipeline</button>
        </div>
        ${[
          ['New enquiry', visible(db.leads).filter(x => x.stage === 'New enquiry').length, ''],
          ['Contacted', visible(db.leads).filter(x => x.stage === 'Contacted').length, 'purple'],
          ['School visit', visible(db.leads).filter(x => x.stage === 'School visit').length, 'orange'],
          ['Application', visible(db.leads).filter(x => x.stage === 'Application').length, 'green'],
          ['Admitted', visible(db.leads).filter(x => x.stage === 'Admitted').length, 'green']
        ].map(([n, v, c]) => `
          <div class="progress-row">
            <div class="progress-meta"><span>${n}</span><b>${v} leads</b></div>
            <div class="progress-track"><div class="progress-fill ${c}" style="width:${Math.max(12, v * 20)}%"></div></div>
          </div>
        `).join('')}
        <div class="export-note">Real-time counts from current demo records</div>
      </div>
    </div>
    <div class="grid three-col">
      <div class="card card-pad">
        <div class="section-title">
          <h2>Today’s priorities</h2>
          <button class="link" data-action="new-task">Add task</button>
        </div>
        ${db.tasks.map(t => `
          <label class="task ${t.done ? 'done' : ''}">
            <input class="check" type="checkbox" data-task="${esc(t.id)}" ${t.done ? 'checked' : ''}>
            <span><strong>${esc(t.title)}</strong><small>${esc(t.meta)}</small></span>
          </label>
        `).join('')}
      </div>
      <div class="card card-pad">
        <div class="section-title">
          <h2>Needs attention</h2>
          <button class="link" data-page="helpdesk">View all</button>
        </div>
        <div class="activity" style="cursor:pointer" data-page="fees">
          <span class="activity-icon orange">${icon('wallet')}</span>
          <div>
            <strong>${visible(db.fees).filter(f => f.status === 'Overdue').length} overdue fee invoices</strong>
            <p>Finance follow-up queue</p>
          </div>
        </div>
        <div class="activity" style="cursor:pointer" data-page="attendance">
          <span class="activity-icon">${icon('calendar')}</span>
          <div>
            <strong>Attendance review</strong>
            <p>Grade 8 A · exceptions recorded this week</p>
          </div>
        </div>
        <div class="activity" style="cursor:pointer" data-page="helpdesk">
          <span class="activity-icon green">${icon('headset')}</span>
          <div>
            <strong>${visible(db.tickets).filter(t => t.status !== 'Resolved').length} open service requests</strong>
            <p>Assigned to school teams</p>
          </div>
        </div>
      </div>
      <div class="card card-pad">
        <div class="section-title">
          <h2>Upcoming events</h2>
          <button class="link" data-page="timetable">Timetable</button>
        </div>
        ${[
          ['27', 'NOV', 'Grade 8 mathematics test', '10:00 AM · Room 204'],
          ['29', 'NOV', 'Science practical', '11:30 AM · Lab 2'],
          ['02', 'DEC', 'Parent–teacher meeting', '9:00 AM · Main campus']
        ].map(([d, m, t, s]) => `
          <div class="calendar-box">
            <span class="calendar-date">${d}<small>${m}</small></span>
            <span><strong>${t}</strong><br><span class="muted">${s}</span></span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function tabs(items) {
  return `
    <div class="tabs">
      ${items.map(x => `<button class="tab ${state.filter === x ? 'active' : ''}" data-filter="${esc(x)}">${esc(x)}</button>`).join('')}
    </div>
  `;
}

function table(key, headers, rows, empty = 'No matching records found') {
  return `
    <div class="card">
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>${headers.map(x => `<th>${x}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows || `<tr><td colspan="${headers.length}" class="empty"><strong>${empty}</strong>Try adjusting your filter or search criteria.</td></tr>`}
          </tbody>
        </table>
      </div>
      <div class="table-footer">
        <span>Showing ${rows ? (rows.match(/<tr/g) || []).length : 0} records · ${esc(state.campus)}</span>
        <span>Click any row to view and edit details</span>
      </div>
    </div>
  `;
}

function filtered(key, field = 'status') {
  return visible(db[key]).filter(x => {
    let matchFilter = state.filter === 'All' || x[field] === state.filter;
    let matchQuery = !state.query || Object.values(x).some(v => String(v).toLowerCase().includes(state.query.toLowerCase()));
    return matchFilter && matchQuery;
  });
}

function toolbar(filters, customAction = '') {
  return `
    <div class="list-toolbar">
      ${tabs(filters)}
      <div class="toolbar-right">
        <div class="field-search-wrap">
          ${icon('search')}
          <input class="field-search" id="table-search" placeholder="Search records..." value="${esc(state.query)}" aria-label="Search records">
          ${state.query ? `<button class="field-search-clear" data-action="clear-table-search" title="Clear">×</button>` : ''}
        </div>
        ${customAction}
        <button class="btn small" data-action="export">${icon('download')} Export CSV</button>
      </div>
    </div>
  `;
}

function admissions() {
  let data = filtered('leads', 'stage');
  return `
    ${head('Admissions & enquiries', 'Track every family from first contact to enrolment.', `
      ${btn('New enquiry', 'new:leads', 'primary', 'plus')}
    `)}
    <div class="grid mini-grid">
      ${kpi('Open enquiries', visible(db.leads).filter(x => x.stage !== 'Admitted').length, 'Needs follow-up', 'users')}
      ${kpi('School visits', visible(db.leads).filter(x => x.stage === 'School visit').length, 'Scheduled', 'calendar', 'purple')}
      ${kpi('Admitted', visible(db.leads).filter(x => x.stage === 'Admitted').length, 'Enrolled cohort', 'graduation', 'green')}
    </div>
    ${toolbar(
      ['All', 'New enquiry', 'Contacted', 'School visit', 'Application', 'Admitted'],
      `<button class="btn small" data-action="toggle-view">${state.view === 'list' ? 'Pipeline view' : 'List view'}</button>`
    )}
    ${state.view === 'pipeline' ? `
      <div class="pipeline">
        ${['New enquiry', 'Contacted', 'School visit', 'Application', 'Admitted'].map(stage => {
          let stageLeads = visible(db.leads).filter(x => {
            let matchStage = x.stage === stage;
            let matchFilter = state.filter === 'All' || state.filter === stage;
            let matchQuery = !state.query || Object.values(x).some(v => String(v).toLowerCase().includes(state.query.toLowerCase()));
            return matchStage && matchFilter && matchQuery;
          });
          return `
            <div class="pipe-col">
              <div class="pipe-head">${stage}<b>${stageLeads.length}</b></div>
              ${stageLeads.map(x => `
                <div class="lead-card" data-open="leads:${esc(x.id)}">
                  <strong>${esc(x.name)}</strong>
                  <small>${esc(x.grade)} · ${esc(x.parent)}</small>
                  <div class="flex">
                    ${pill(x.source)}
                    <span class="muted">${esc(x.owner.split(' ')[0])}</span>
                  </div>
                </div>
              `).join('')}
              ${!stageLeads.length ? `<div class="empty-state" style="padding:16px 8px;font-size:11px">No leads</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    ` : table('leads', ['STUDENT', 'GRADE', 'PARENT / GUARDIAN', 'SOURCE', 'STAGE', 'OWNER', 'NEXT ACTION', ''], data.map(x => `
      <tr data-open="leads:${esc(x.id)}">
        <td>
          <div class="person">
            ${avatar(x.name, 'lilac')}
            <span><strong>${esc(x.name)}</strong><br>${esc(x.id)}</span>
          </div>
        </td>
        <td>${esc(x.grade)}</td>
        <td><strong>${esc(x.parent)}</strong><br>${esc(x.phone)}</td>
        <td>${esc(x.source)}</td>
        <td>${pill(x.stage)}</td>
        <td>${esc(x.owner)}</td>
        <td>${esc(x.next)}</td>
        <td><button class="row-btn" data-open="leads:${esc(x.id)}">View</button></td>
      </tr>
    `).join(''))}
  `;
}

function students() {
  let data = filtered('students');
  return `
    ${head('Students & families', 'A single place for enrolment, class details and parent contact.', btn('Add student', 'new:students', 'primary', 'plus'))}
    ${toolbar(['All', 'Active', 'Inactive'])}
    ${table('students', ['STUDENT', 'CLASS', 'ROLL NO.', 'PARENT / GUARDIAN', 'ATTENDANCE', 'FEE BALANCE', 'STATUS', ''], data.map(x => `
      <tr data-open="students:${esc(x.id)}">
        <td>
          <div class="person">
            ${avatar(x.name, 'mint')}
            <span><strong>${esc(x.name)}</strong><br>${esc(x.id)}</span>
          </div>
        </td>
        <td>${esc(x.grade)} ${esc(x.section)}</td>
        <td>${esc(x.roll)}</td>
        <td><strong>${esc(x.parent)}</strong><br>${esc(x.phone)}</td>
        <td>${pill(x.attendance || '—')}</td>
        <td><strong>${money(x.balance || 0)}</strong></td>
        <td>${pill(x.status)}</td>
        <td><button class="row-btn" data-open="students:${esc(x.id)}">Profile</button></td>
      </tr>
    `).join(''))}
  `;
}

const CLASS_SUBJECT_PLANS = {
  'Primary-Junior': {
    subjects: [
      { name: 'Phonics & Reading', teacher: 'Neha Patel', color: 'purple', room: 'Primary Wing' },
      { name: 'Early Mathematics', teacher: 'P. Joshi', color: 'blue', room: 'Primary Wing' },
      { name: 'Environmental Studies', teacher: 'Anita Joshi', color: 'green', room: 'Discovery Rm' },
      { name: 'Arts & Crafts', teacher: 'M. Nambiar', color: 'orange', room: 'Junior Studio' },
      { name: 'Storytelling & Speech', teacher: 'Neha Patel', color: 'purple', room: 'Primary Wing' },
      { name: 'Physical Activities', teacher: 'Arjun Rao', color: 'teal', room: 'Playground' },
      { name: 'Music & Rhymes', teacher: 'M. Nambiar', color: 'orange', room: 'Music Room' },
      { name: 'Creative Play & STEM', teacher: 'Jay Vyas', color: 'blue', room: 'Activity Hall' }
    ]
  },
  'Primary-Senior': {
    subjects: [
      { name: 'English Literature', teacher: 'S. Desai', color: 'purple', room: 'Primary Wing' },
      { name: 'Applied Mathematics', teacher: 'Kavita Iyer', color: 'blue', room: 'Primary Wing' },
      { name: 'General Science', teacher: 'Sunita Rao', color: 'green', room: 'Junior Lab' },
      { name: 'Social Studies', teacher: 'P. Joshi', color: 'rose', room: 'Primary Wing' },
      { name: 'ICT & Coding Basics', teacher: 'Rajesh Kumar', color: 'blue', room: 'Computer Lab 1' },
      { name: 'Physical Ed. & Games', teacher: 'Arjun Rao', color: 'teal', room: 'Sports Ground' },
      { name: 'Visual Arts & Craft', teacher: 'Ananya Sen', color: 'orange', room: 'Art Studio' },
      { name: 'Second Language', teacher: 'Neha Patel', color: 'purple', room: 'Language Room' }
    ]
  },
  'Middle': {
    subjects: [
      { name: 'Mathematics', teacher: 'Kavita Iyer', color: 'blue', room: 'Middle Wing' },
      { name: 'English Language', teacher: 'S. Desai', color: 'purple', room: 'Middle Wing' },
      { name: 'Integrated Science', teacher: 'R. Menon', color: 'green', room: 'Science Lab 1' },
      { name: 'World History', teacher: 'Dr. Vikram S.', color: 'rose', room: 'Middle Wing' },
      { name: 'Geography & Civics', teacher: 'Sunita Rao', color: 'rose', room: 'Middle Wing' },
      { name: 'Physical Ed. & Sports', teacher: 'Arjun Rao', color: 'teal', room: 'Sports Complex' },
      { name: 'Computer Science Lab', teacher: 'Rajesh Kumar', color: 'blue', room: 'Computer Lab 2' },
      { name: 'Art & Design Studio', teacher: 'Ananya Sen', color: 'orange', room: 'Art Studio' }
    ]
  },
  'Secondary': {
    subjects: [
      { name: 'Core Mathematics', teacher: 'Kavita Iyer', color: 'blue', room: 'Senior Wing' },
      { name: 'English Literature', teacher: 'S. Desai', color: 'purple', room: 'Senior Wing' },
      { name: 'Physics Theory & Lab', teacher: 'R. Menon', color: 'green', room: 'Physics Lab 1' },
      { name: 'Chemistry Practical', teacher: 'Sunita Rao', color: 'green', room: 'Chemistry Lab' },
      { name: 'Biology & Life Science', teacher: 'P. Joshi', color: 'green', room: 'Bio Lab' },
      { name: 'History & Global Econ', teacher: 'Dr. Vikram S.', color: 'rose', room: 'Senior Wing' },
      { name: 'Computer Applications', teacher: 'Rajesh Kumar', color: 'blue', room: 'IT Hall' },
      { name: 'Physical Ed. & Fitness', teacher: 'Arjun Rao', color: 'teal', room: 'Gymnasium' }
    ]
  },
  'Senior-Science': {
    subjects: [
      { name: 'Calculus & Vectors', teacher: 'Dr. Vikram S.', color: 'blue', room: 'Senior Hall' },
      { name: 'Physics & Optics', teacher: 'R. Menon', color: 'green', room: 'Adv. Physics Lab' },
      { name: 'Organic Chemistry', teacher: 'Sunita Rao', color: 'green', room: 'Adv. Chem Lab' },
      { name: 'Computer Science & AI', teacher: 'Rajesh Kumar', color: 'blue', room: 'Tech Lab 1' },
      { name: 'English Core', teacher: 'S. Desai', color: 'purple', room: 'Senior Hall' },
      { name: 'Physics Practicals', teacher: 'R. Menon', color: 'green', room: 'Adv. Physics Lab' },
      { name: 'Chemistry Practicals', teacher: 'Sunita Rao', color: 'green', room: 'Adv. Chem Lab' },
      { name: 'Physical Education', teacher: 'Arjun Rao', color: 'teal', room: 'Track & Field' }
    ]
  },
  'Senior-Commerce': {
    subjects: [
      { name: 'Financial Accounting', teacher: 'Harsh Soni', color: 'blue', room: 'Commerce Rm' },
      { name: 'Business Studies', teacher: 'Priya Nair', color: 'rose', room: 'Commerce Rm' },
      { name: 'Macroeconomics', teacher: 'Dr. Vikram S.', color: 'rose', room: 'Commerce Rm' },
      { name: 'Applied Mathematics', teacher: 'Kavita Iyer', color: 'blue', room: 'Commerce Rm' },
      { name: 'English Core', teacher: 'S. Desai', color: 'purple', room: 'Senior Hall' },
      { name: 'Financial Markets & FinTech', teacher: 'Harsh Soni', color: 'blue', room: 'Commerce Lab' },
      { name: 'Entrepreneurship Project', teacher: 'Priya Nair', color: 'orange', room: 'Seminar Hall' },
      { name: 'Physical Education', teacher: 'Arjun Rao', color: 'teal', room: 'Sports Complex' }
    ]
  }
};

function getClassPlan(classId) {
  let c = ALL_CLASSES.find(x => x.id === classId) || ALL_CLASSES.find(x => x.id === 'Grade 8 A');
  let planKey = 'Middle';
  if (c.wing === 'Senior') {
    planKey = classId.includes('Commerce') ? 'Senior-Commerce' : 'Senior-Science';
  } else if (c.wing === 'Secondary') {
    planKey = 'Secondary';
  } else if (c.wing === 'Middle') {
    planKey = 'Middle';
  } else if (classId.startsWith('Grade 4') || classId.startsWith('Grade 5')) {
    planKey = 'Primary-Senior';
  } else {
    planKey = 'Primary-Junior';
  }
  return { info: c, plan: CLASS_SUBJECT_PLANS[planKey] };
}

function attendance() {
  let currentClass = ALL_CLASSES.find(c => c.name === state.attClass) || ALL_CLASSES[0];
  // Filter students belonging to this class
  let classStudents = db.students.filter(x => `${x.grade} ${x.section}`.trim() === state.attClass.trim());
  let days = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'];
  let activeDayIdx = state.attDayIdx || 0;
  let activeDayName = days[activeDayIdx] || days[0];

  // Compute live intelligence metrics
  let totalPossibleMarks = classStudents.length * 5;
  let scoredMarks = 0;
  let markedCount = 0;
  let todayStats = { present: 0, absent: 0, late: 0, excused: 0, unmarked: 0 };
  let atRiskStudents = [];

  classStudents.forEach(s => {
    let marks = db.attendance[s.id] || Array(5).fill('Unmarked');
    marks.forEach(m => {
      if (m !== 'Unmarked') markedCount++;
      if (m === 'Present') scoredMarks += 100;
      else if (m === 'Late') scoredMarks += 75;
      else if (m === 'Excused') scoredMarks += 90;
    });
    let dayStatus = marks[activeDayIdx] || 'Unmarked';
    let key = dayStatus.toLowerCase();
    if (todayStats[key] !== undefined) todayStats[key]++;

    let rate = parseInt(s.attendance || getStudentAttendance(s.id), 10) || 100;
    if (rate < 85) atRiskStudents.push(s);
  });

  let classAttendanceRate = markedCount > 0 ? Math.round(scoredMarks / markedCount) : 96;

  // Filter students based on state.attFilter
  let filter = state.attFilter || 'All';
  let filteredStudents = classStudents.filter(s => {
    if (filter === 'All') return true;
    if (filter === 'At-Risk') {
      let r = parseInt(s.attendance || getStudentAttendance(s.id), 10) || 100;
      return r < 85;
    }
    let marks = db.attendance[s.id] || [];
    let dayMark = marks[activeDayIdx] || 'Unmarked';
    return dayMark.toLowerCase() === filter.toLowerCase();
  });

  return `
    ${head('Attendance management', 'Smart daily roll-call, 5-day weekly registers, parent SMS dispatches, and chronic absenteeism alerts.', `
      <div style="display:flex; gap:8px; flex-wrap:wrap">
        <button type="button" class="btn small" data-action="att-export-csv">${icon('download')} Export CSV</button>
        <button type="button" class="btn small" data-action="att-print">${icon('printer')} Print Register</button>
        <button type="button" class="btn small" data-action="att-notify-parents" style="background:#fff7ed; border-color:#fed7aa; color:#c2410c">${icon('message')} Notify Parents</button>
        <button type="button" class="btn small" data-action="att-fill-remaining" title="Fill unmarked records today as present">${icon('check')} Fill Unmarked</button>
        <button type="button" class="btn small primary" data-action="att-mark-all">${icon('check')} Mark All Present</button>
      </div>
    `)}

    <!-- Class Hero & Banner -->
    <div class="att-banner">
      <div class="att-banner-left">
        <div class="att-avatar-badge">${esc(currentClass.avatar || currentClass.name.slice(0, 3))}</div>
        <div>
          <h2 class="att-banner-title">
            ${esc(currentClass.name)}
            <span class="pill green" style="font-size:11px; font-weight:700">${classStudents.length} Students</span>
            <span class="pill purple" style="font-size:11px; font-weight:700">${esc(currentClass.wing)} Wing</span>
          </h2>
          <div class="att-banner-meta">
            <span>${icon('user')} Class Teacher: <strong>${esc(currentClass.teacher)}</strong></span>
            <span>·</span>
            <span>${icon('home')} ${esc(currentClass.room)}</span>
            <span>·</span>
            <span>${icon('map-pin')} ${esc(currentClass.campus)}</span>
          </div>
        </div>
      </div>
      <div class="att-banner-right" style="display:flex; align-items:center; gap:10px">
        <div style="text-align:right">
          <small style="display:block; color:#64748b; font-size:11px; font-weight:700">QUICK CLASS SWITCHER</small>
          <select class="top-select" id="attendance-class" style="min-width:220px; font-weight:700; padding:8px 12px; border-radius:8px">
            ${ALL_CLASSES.map(c => `
              <option value="${esc(c.id)}" ${state.attClass === c.id ? 'selected' : ''}>${esc(c.name)} · ${esc(c.campus)} (${esc(c.wing)})</option>
            `).join('')}
          </select>
        </div>
      </div>
    </div>

    <!-- Wing Filter Tabs & Quick Class Pills -->
    <div style="margin-bottom:16px">
      <div style="display:flex; gap:8px; align-items:center; margin-bottom:10px; flex-wrap:wrap">
        <span style="font-size:12px; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.5px">Filter Wing:</span>
        ${['All', 'Primary', 'Middle', 'Secondary', 'Senior'].map(w => {
          let count = w === 'All' ? ALL_CLASSES.length : ALL_CLASSES.filter(c => c.wing === w).length;
          let active = (state.attWing || 'All') === w;
          return `
            <button type="button" class="btn small ${active ? 'primary' : ''}" data-action="att-wing-select:${w}" style="border-radius:20px; padding:4px 14px; font-size:12px">
              ${w === 'All' ? 'All Wings' : w} (${count})
            </button>
          `;
        }).join('')}
      </div>
      <div style="display:flex; gap:6px; flex-wrap:wrap; background:#f8fafc; padding:8px 12px; border-radius:10px; border:1px solid #e2e8f0">
        ${ALL_CLASSES.filter(c => (state.attWing || 'All') === 'All' || c.wing === (state.attWing || 'All')).map(c => {
          let active = state.attClass === c.id;
          return `
            <button type="button" class="att-filter-pill ${active ? 'active' : ''}" data-action="att-class-select:${esc(c.id)}" style="cursor:pointer; font-weight:${active ? '800' : '600'}">
              ${esc(c.name)}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 4 Real-time Intelligence KPI Cards -->
    <div class="att-kpi-grid">
      <!-- Card 1: Attendance Rate Gauge -->
      <div class="att-kpi-card ${classAttendanceRate < 85 ? 'alert' : classAttendanceRate < 92 ? 'warning' : ''}">
        <div class="att-kpi-top">
          <span>CLASS ATTENDANCE RATE</span>
          <span class="kpi-icon ${classAttendanceRate >= 90 ? 'green' : classAttendanceRate >= 85 ? 'orange' : 'red'}">${icon('calendar')}</span>
        </div>
        <div class="att-kpi-value">
          ${classAttendanceRate}%
          <small style="margin-left:8px; font-weight:600; color:${classAttendanceRate >= 90 ? '#16a34a' : '#d97706'}">
            ${classAttendanceRate >= 90 ? '✓ Excellent' : classAttendanceRate >= 85 ? '⚠ Acceptable' : '✕ Needs Review'}
          </small>
        </div>
        <div class="att-kpi-foot">
          <span>${markedCount} / ${totalPossibleMarks} marks recorded this week</span>
        </div>
      </div>

      <!-- Card 2: Today's Exceptions -->
      <div class="att-kpi-card ${todayStats.absent > 0 ? 'warning' : ''}">
        <div class="att-kpi-top">
          <span>TODAY'S EXCEPTIONS (${activeDayName.toUpperCase()})</span>
          <span class="kpi-icon orange">${icon('clock')}</span>
        </div>
        <div class="att-kpi-value">
          ${todayStats.absent + todayStats.late + todayStats.excused}
          <small style="margin-left:8px">Exceptions</small>
        </div>
        <div class="att-kpi-foot" style="gap:6px">
          <span class="pill red" style="padding:2px 8px; font-size:10px">${todayStats.absent} Absent</span>
          <span class="pill orange" style="padding:2px 8px; font-size:10px">${todayStats.late} Late</span>
          <span class="pill" style="padding:2px 8px; font-size:10px; background:#eff6ff; color:#1d4ed8">${todayStats.excused} Excused</span>
        </div>
      </div>

      <!-- Card 3: Chronic Absenteeism Flag -->
      <div class="att-kpi-card ${atRiskStudents.length > 0 ? 'alert' : ''}">
        <div class="att-kpi-top">
          <span>AT-RISK STUDENTS (&lt;85%)</span>
          <span class="kpi-icon ${atRiskStudents.length > 0 ? 'red' : 'green'}">${icon('users')}</span>
        </div>
        <div class="att-kpi-value" style="color:${atRiskStudents.length > 0 ? '#b91c1c' : '#1e293b'}">
          ${atRiskStudents.length}
          <small style="margin-left:8px">${atRiskStudents.length === 1 ? 'Student flagged' : 'Students flagged'}</small>
        </div>
        <div class="att-kpi-foot">
          ${atRiskStudents.length > 0 ? `
            <span style="color:#b91c1c; font-weight:700">Needs pastoral / counseling follow-up</span>
          ` : `
            <span style="color:#16a34a; font-weight:600">Zero chronic absentees</span>
          `}
        </div>
      </div>

      <!-- Card 4: Parent Alert Dispatch Queue -->
      <div class="att-kpi-card ${todayStats.absent > 0 ? 'warning' : ''}">
        <div class="att-kpi-top">
          <span>PARENT ALERT DISPATCH QUEUE</span>
          <span class="kpi-icon purple">${icon('message')}</span>
        </div>
        <div class="att-kpi-value">
          ${todayStats.absent}
          <small style="margin-left:8px">Absentees to notify</small>
        </div>
        <div class="att-kpi-foot">
          ${todayStats.absent > 0 ? `
            <button type="button" class="btn small" data-action="att-notify-parents" style="padding:2px 10px; font-size:11px; background:#fff7ed; border-color:#fed7aa; color:#c2410c">
              Dispatch alerts now →
            </button>
          ` : `
            <span style="color:#16a34a; font-weight:600">All parents notified / No absentees</span>
          `}
        </div>
      </div>
    </div>

    <!-- Controls Toolbar -->
    <div class="att-toolbar">
      <!-- Row 1: Mode Switcher & Day Tabs -->
      <div class="att-toolbar-row1">
        <div style="display:flex; align-items:center; gap:12px">
          <span style="font-size:12px; font-weight:700; color:#475569; text-transform:uppercase">View Mode:</span>
          <div class="att-mode-toggle">
            <button type="button" class="att-mode-btn ${(state.attView || 'matrix') === 'matrix' ? 'active' : ''}" data-action="att-view-mode:matrix">
              ${icon('grid')} Weekly Matrix
            </button>
            <button type="button" class="att-mode-btn ${(state.attView || 'matrix') === 'daily' ? 'active' : ''}" data-action="att-view-mode:daily">
              ${icon('clock')} Daily Rapid Roll-Call
            </button>
          </div>
        </div>

        <!-- Day Tabs (Mon - Fri) -->
        <div style="display:flex; align-items:center; gap:10px">
          <span style="font-size:12px; font-weight:700; color:#475569; text-transform:uppercase">Active Day:</span>
          <div class="day-tabs">
            ${days.map((d, idx) => `
              <button type="button" class="day-tab ${(state.attDayIdx || 0) === idx ? 'active' : ''}" data-action="att-day-select:${idx}">
                ${d}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Row 2: Filter Pills & Fast Day Actions -->
      <div class="att-toolbar-row2">
        <div class="att-filters">
          <span style="font-size:12px; font-weight:700; color:#475569; text-transform:uppercase; margin-right:4px">Filter Roster:</span>
          ${['All', 'Present', 'Absent', 'Late', 'Excused', 'At-Risk'].map(f => {
            let active = (state.attFilter || 'All') === f;
            let isAtRisk = f === 'At-Risk';
            return `
              <button type="button" class="att-filter-pill ${active ? 'active' : ''} ${isAtRisk ? 'at-risk' : ''}" data-action="att-filter:${f}">
                ${f === 'At-Risk' ? '⚠ At-Risk (<85%)' : f}
              </button>
            `;
          }).join('')}
        </div>

        <div style="display:flex; gap:8px">
          <button type="button" class="btn small" data-action="att-mark-day-present:${activeDayIdx}" title="Mark all students present on ${activeDayName}">
            ${icon('check')} Mark ${activeDayName} Present
          </button>
          <button type="button" class="btn small" data-action="att-clear-day:${activeDayIdx}" style="color:#64748b" title="Clear marks for ${activeDayName}">
            Clear ${activeDayName}
          </button>
        </div>
      </div>
    </div>

    <!-- Main View Section -->
    ${(state.attView || 'matrix') === 'daily' ? `
      <!-- Daily Rapid Roll-Call Mode -->
      <div style="margin-bottom:12px; padding:10px 16px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:10px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px">
        <div style="font-size:13px; color:#166534; font-weight:700">
          📋 Rapid Roll-Call: <strong>${esc(state.attClass)}</strong> · ${activeDayName} · ${classStudents.length} Students Total
        </div>
        <div style="display:flex; gap:8px">
          <span class="pill green">${todayStats.present} Present</span>
          <span class="pill red">${todayStats.absent} Absent</span>
          <span class="pill orange">${todayStats.late} Late</span>
          <span class="pill" style="background:#eff6ff; color:#1d4ed8">${todayStats.excused} Excused</span>
          <span class="pill" style="background:#f1f5f9; color:#475569">${todayStats.unmarked} Remaining</span>
        </div>
      </div>

      <div class="daily-roster-grid">
        ${filteredStudents.length ? filteredStudents.map(s => {
          let marks = db.attendance[s.id] || Array(5).fill('Unmarked');
          let currentStatus = marks[activeDayIdx] || 'Unmarked';
          let metaKey = s.id + '_' + activeDayIdx;
          let meta = db.attendanceMeta ? db.attendanceMeta[metaKey] : null;

          return `
            <div class="daily-student-card">
              <div class="daily-card-header">
                <div style="display:flex; align-items:center; gap:12px">
                  <span class="roll-badge" style="width:34px; height:34px; font-size:13px">${esc(s.roll || '—')}</span>
                  <div>
                    <h3 style="margin:0; font-size:15px; font-weight:800; color:#1e293b">${esc(s.name)}</h3>
                    <p style="margin:2px 0 0; font-size:12px; color:#64748b">
                      ${esc(s.id)} · Parent: <strong>${esc(s.parent || '—')}</strong> (${esc(s.phone || '—')})
                    </p>
                  </div>
                </div>
                <div>
                  <span class="pill ${currentStatus === 'Present' ? 'green' : currentStatus === 'Absent' ? 'red' : currentStatus === 'Late' ? 'orange' : currentStatus === 'Excused' ? 'purple' : ''}">
                    ${currentStatus}
                  </span>
                </div>
              </div>

              <!-- 4 Fast Action Buttons -->
              <div class="daily-status-group">
                ${[
                  ['Present', 'present', '✓ Present'],
                  ['Absent', 'absent', '✕ Absent'],
                  ['Late', 'late', '⏰ Late'],
                  ['Excused', 'excused', '🛡 Excused']
                ].map(([st, clsName, label]) => `
                  <button type="button" class="daily-status-btn ${clsName} ${currentStatus === st ? 'active' : ''}" data-action="att-set-status:${esc(s.id)}:${activeDayIdx}:${st}">
                    ${label}
                  </button>
                `).join('')}
              </div>

              <!-- Meta / Notes row -->
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; padding-top:10px; border-top:1px dashed #e2e8f0; font-size:12px">
                <div>
                  ${meta && meta.reason ? `
                    <span class="pill purple" style="font-size:11px">Reason: ${esc(meta.reason)}</span>
                    ${meta.arrivalTime ? `<span class="pill orange" style="font-size:11px">Arrived: ${esc(meta.arrivalTime)}</span>` : ''}
                  ` : '<span class="muted">No absence excuse logged</span>'}
                </div>
                <button type="button" class="row-btn" data-action="open-att-modal:${esc(s.id)}:${activeDayIdx}">
                  ${meta && meta.reason ? 'Edit Excuse / Note' : '+ Add Note / Excuse'}
                </button>
              </div>
            </div>
          `;
        }).join('') : `
          <div class="empty-state" style="grid-column:1/-1; padding:40px; background:#fff; border:1px solid #e2e8f0; border-radius:12px">
            <strong>No students match the "${esc(state.attFilter)}" filter on ${activeDayName}</strong>
            <p>Try switching filter to "All" to view all ${classStudents.length} students in this class.</p>
            <button type="button" class="btn small primary mt16" data-action="att-filter:All">Show All Students</button>
          </div>
        `}
      </div>
    ` : `
      <!-- Weekly Matrix Mode -->
      <div class="card card-pad">
        <div class="table-wrap">
          <table class="attendance-matrix">
            <thead>
              <tr>
                <th style="width:70px">ROLL</th>
                <th style="min-width:200px">STUDENT</th>
                ${days.map((d, i) => `
                  <th class="${activeDayIdx === i ? 'current-day-col' : ''}">
                    ${d}
                    ${activeDayIdx === i ? '<span class="today-tag">ACTIVE</span>' : ''}
                  </th>
                `).join('')}
                <th style="width:120px; text-align:center">RATE</th>
                <th style="width:90px; text-align:center">DETAILS</th>
              </tr>
            </thead>
            <tbody>
              ${filteredStudents.length ? filteredStudents.map(s => {
                let marks = db.attendance[s.id] || Array(5).fill('Unmarked');
                let rate = s.attendance || getStudentAttendance(s.id);
                let rateNum = parseInt(rate, 10) || 100;
                let isAtRisk = rateNum < 85;

                return `
                  <tr>
                    <td><span class="roll-badge">${esc(s.roll || '—')}</span></td>
                    <td>
                      <div class="student-info-cell">
                        ${avatar(s.name, isAtRisk ? 'orange' : 'sky')}
                        <div>
                          <strong>${esc(s.name)}</strong>
                          <small>${esc(s.id)} · ${esc(s.parent || 'Parent')}</small>
                        </div>
                      </div>
                    </td>
                    ${days.map((d, i) => {
                      let status = marks[i] || 'Unmarked';
                      let metaKey = s.id + '_' + i;
                      let meta = db.attendanceMeta ? db.attendanceMeta[metaKey] : null;
                      return `
                        <td class="${activeDayIdx === i ? 'current-day-col' : ''}">
                          <div class="att-cell">
                            <button type="button" class="att-btn ${status.toLowerCase()}" data-att="${esc(s.id)}:${i}" aria-label="Mark ${esc(s.name)} on ${d}">
                              ${status}
                            </button>
                            ${meta && meta.reason ? `
                              <span class="att-reason-pill" data-action="open-att-modal:${esc(s.id)}:${i}" title="${esc(meta.reason)} - ${esc(meta.remarks || '')}">
                                ${esc(meta.reason.split('/')[0].trim())}
                              </span>
                            ` : ''}
                          </div>
                        </td>
                      `;
                    }).join('')}
                    <td style="text-align:center">
                      <span class="pill ${isAtRisk ? 'red' : rateNum >= 95 ? 'green' : 'orange'}" style="font-weight:700">
                        ${rate}
                      </span>
                      ${isAtRisk ? '<div style="font-size:9px; color:#b91c1c; font-weight:700; margin-top:2px">CHRONIC &lt;85%</div>' : ''}
                    </td>
                    <td style="text-align:center">
                      <button type="button" class="row-btn" data-action="open-att-modal:${esc(s.id)}:${activeDayIdx}" title="Log Reason & Remarks for ${esc(s.name)}">
                        Notes
                      </button>
                    </td>
                  </tr>
                `;
              }).join('') : `
                <tr>
                  <td colspan="9" style="text-align:center; padding:32px">
                    <div class="empty-state">
                      <strong>No students match the "${esc(state.attFilter)}" filter</strong>
                      <p>Try switching to "All" to view all ${classStudents.length} students in this class roster.</p>
                      <button type="button" class="btn small primary mt16" data-action="att-filter:All">Show All Students</button>
                    </div>
                  </td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `}

    <!-- Follow-up queue & Intelligence Summary -->
    <div class="card card-pad mt16">
      <div class="section-title">
        <h2>Follow-up & Parent Communications Queue</h2>
        <button type="button" class="link" data-action="att-notify-parents">Open Parent Dispatch Drawer</button>
      </div>
      ${classStudents.filter(s => {
        let m = (db.attendance[s.id] || [])[activeDayIdx] || 'Unmarked';
        return m === 'Absent' || m === 'Late';
      }).slice(0, 3).map(s => {
        let m = (db.attendance[s.id] || [])[activeDayIdx];
        let metaKey = s.id + '_' + activeDayIdx;
        let meta = db.attendanceMeta ? db.attendanceMeta[metaKey] : null;
        return `
          <div class="activity">
            <span class="activity-icon ${m === 'Absent' ? 'orange' : 'purple'}">${icon('user')}</span>
            <div style="flex:1">
              <strong>${esc(s.name)} · ${esc(state.attClass)} (${m} on ${activeDayName})</strong>
              <p>Parent: ${esc(s.parent)} · Phone: ${esc(s.phone)} · Reason: ${esc(meta ? meta.reason : 'Unexcused / Pending verification')}</p>
            </div>
            <button type="button" class="btn small" data-action="open-att-modal:${esc(s.id)}:${activeDayIdx}">Update Reason</button>
          </div>
        `;
      }).join('') || `
        <p class="muted">No unresolved absence flags for ${activeDayName}. All registered students are accounted for.</p>
      `}
    </div>
  `;
}

function academics() {
  let currentClass = state.examClass || 'Grade 8 A';
  let currentWing = state.examWing || 'All';
  let currentSeries = state.examSeries || 'Term 1 Mid-Term';
  let currentView = state.examView || 'gradebook';
  let currentFilter = state.examFilter || 'All';
  let currentSubject = state.examSubject || 'All';

  let clsInfo = ALL_CLASSES.find(c => c.name === currentClass) || ALL_CLASSES[0];
  let ms = getClassMarksheet(currentClass, currentSeries);

  let visibleClasses = currentWing === 'All' 
    ? ALL_CLASSES 
    : ALL_CLASSES.filter(c => c.wing === currentWing);

  // Filter student rows according to state.examFilter
  let filteredMatrix = ms.matrix.filter(m => {
    if (currentFilter === 'Passed') return m.passed;
    if (currentFilter === 'Remedial') return m.hasRemedial || m.pct < 40;
    if (currentFilter === 'Distinction') return m.pct >= 81;
    if (currentFilter === 'Absent') return m.hasMedicalOrAbsent;
    return true;
  });

  // Action header buttons
  let actionButtons = `
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button type="button" class="btn small" data-action="exam-export-csv">${icon('download')} Export CSV</button>
      <button type="button" class="btn small" data-action="exam-print-marksheet">${icon('printer')} Print Marksheet</button>
      <button type="button" class="btn small" data-action="exam-fill-benchmark" title="Auto-fill passing benchmark (40%)">${icon('check')} Fill Benchmark</button>
      <button type="button" class="btn small green-btn" data-action="exam-publish-results">${icon('message')} Publish Results</button>
      <button type="button" class="btn small primary" data-action="new:exams">${icon('plus')} Schedule Assessment</button>
    </div>
  `;

  // Grade distribution percentages for stacked progress bar
  let totalInDist = ms.matrix.length || 1;
  let pctA1 = Math.round((ms.distribution.A1 / totalInDist) * 100);
  let pctA2 = Math.round((ms.distribution.A2 / totalInDist) * 100);
  let pctB1 = Math.round((ms.distribution.B1 / totalInDist) * 100);
  let pctB2 = Math.round((ms.distribution.B2 / totalInDist) * 100);
  let pctC = Math.round((ms.distribution.C / totalInDist) * 100);
  let pctRem = Math.round((ms.distribution.Remedial / totalInDist) * 100);

  return `
    ${head('Academics & Examination Management', 'Unified assessment governance, digital gradebook, board grading & automated report cards.', actionButtons)}

    <!-- Exam Hero Banner -->
    <div class="exam-banner">
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <div class="exam-avatar-badge">${esc(clsInfo.avatar || initials(currentClass))}</div>
        <div>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:4px">
            <h2 style="margin:0;font-size:20px;font-weight:700;color:#1e293b">${esc(currentClass)} · ${esc(clsInfo.wing)} Wing</h2>
            <span class="pill green" style="font-weight:600">CBSE 9-Point Grading Scale Active</span>
            <span class="pill purple" style="font-weight:600">Term 1 Assessment Cycle</span>
          </div>
          <p style="margin:0;color:#64748b;font-size:13px">
            ${esc(clsInfo.campus)} · Assigned Room: <strong>${esc(clsInfo.room)}</strong> · Class Teacher: <strong>${esc(clsInfo.teacher)}</strong>
          </p>
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <label for="exam-class-dropdown" style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Quick Class Jump:</label>
        <select id="exam-class-dropdown" class="select-field" style="padding:7px 12px;border-radius:8px;border:1px solid #cbd5e1;font-weight:600;font-size:13px;background:#ffffff;cursor:pointer">
          <optgroup label="Primary Wing (Grades 1 – 5)">
            ${ALL_CLASSES.filter(c => c.wing === 'Primary').map(c => `
              <option value="${c.name}" ${c.name === currentClass ? 'selected' : ''}>${c.name} (${c.campus})</option>
            `).join('')}
          </optgroup>
          <optgroup label="Middle School (Grades 6 – 8)">
            ${ALL_CLASSES.filter(c => c.wing === 'Middle').map(c => `
              <option value="${c.name}" ${c.name === currentClass ? 'selected' : ''}>${c.name} (${c.campus})</option>
            `).join('')}
          </optgroup>
          <optgroup label="Secondary Wing (Grades 9 – 10)">
            ${ALL_CLASSES.filter(c => c.wing === 'Secondary').map(c => `
              <option value="${c.name}" ${c.name === currentClass ? 'selected' : ''}>${c.name} (${c.campus})</option>
            `).join('')}
          </optgroup>
          <optgroup label="Senior Wing (Grades 11 – 12)">
            ${ALL_CLASSES.filter(c => c.wing === 'Senior').map(c => `
              <option value="${c.name}" ${c.name === currentClass ? 'selected' : ''}>${c.name} (${c.campus})</option>
            `).join('')}
          </optgroup>
        </select>
      </div>
    </div>

    <!-- Wing & Class Selector Pills -->
    <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,0.03)">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px">
        <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">WING:</span>
        <div class="tabs" style="margin:0;border:none">
          ${['All', 'Primary', 'Middle', 'Secondary', 'Senior'].map(w => `
            <button type="button" class="tab ${currentWing === w ? 'active' : ''}" data-action="exam-wing-select:${w}">
              ${w === 'All' ? 'All Wings (24 Classes)' : `${w} Wing`}
            </button>
          `).join('')}
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">CLASS:</span>
        ${visibleClasses.map(c => `
          <button type="button" class="btn small ${c.name === currentClass ? 'primary' : ''}" data-action="exam-class-select:${c.name}" style="font-size:12px;padding:5px 10px">
            ${c.name}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Assessment Series Switcher -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;overflow-x:auto;padding-bottom:4px">
      <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">SERIES:</span>
      ${['Term 1 Mid-Term', 'Periodic Test 2', 'Annual Board Mocks'].map(ser => `
        <button type="button" class="btn small ${currentSeries === ser ? 'primary' : ''}" data-action="exam-series-select:${ser}" style="border-radius:20px;font-weight:600">
          ${ser === 'Term 1 Mid-Term' ? '📌 ' : ''}${ser}
        </button>
      `).join('')}
    </div>

    <!-- 4 Academic Intelligence KPI Cards -->
    <div class="exam-kpi-grid">
      <div class="exam-kpi-card">
        <div class="exam-kpi-icon" style="background:#eff6ff;color:#2563eb">${icon('chart')}</div>
        <div class="exam-kpi-content">
          <div class="exam-kpi-val">${ms.stats.classAvg}% · Grade ${ms.stats.classGrade}</div>
          <div class="exam-kpi-label">Class Average Score</div>
          <div class="exam-kpi-sub">Across ${ms.exams.length} scholastic subjects evaluated</div>
        </div>
      </div>

      <div class="exam-kpi-card">
        <div class="exam-kpi-icon" style="background:#ecfdf5;color:#059669">${icon('graduation')}</div>
        <div class="exam-kpi-content">
          <div class="exam-kpi-val" style="color:#059669">${ms.stats.passRate}% Pass Rate</div>
          <div class="exam-kpi-label">Cohort Benchmark Success</div>
          <div class="exam-kpi-sub">${ms.stats.totalStudents - ms.stats.remedialCount} of ${ms.stats.totalStudents} students meeting board standard</div>
        </div>
      </div>

      <div class="exam-kpi-card">
        <div class="exam-kpi-icon" style="background:${ms.stats.remedialCount > 0 ? '#fff7ed' : '#f0fdf4'};color:${ms.stats.remedialCount > 0 ? '#ea580c' : '#16a34a'}">${icon('clock')}</div>
        <div class="exam-kpi-content">
          <div class="exam-kpi-val" style="color:${ms.stats.remedialCount > 0 ? '#ea580c' : '#16a34a'}">
            ${ms.stats.remedialCount} ${ms.stats.remedialCount === 1 ? 'Student' : 'Students'}
          </div>
          <div class="exam-kpi-label">Remedial Watchlist (&lt;40%)</div>
          <div class="exam-kpi-sub">
            ${ms.stats.remedialCount > 0 ? 'Requires academic counseling & re-test' : 'All students achieving pass benchmark'}
          </div>
        </div>
      </div>

      <div class="exam-kpi-card">
        <div class="exam-kpi-icon" style="background:#f5f3ff;color:#7c3aed">${icon('shield')}</div>
        <div class="exam-kpi-content">
          <div class="exam-kpi-val" style="color:#7c3aed">
            ${ms.stats.topper ? esc(ms.stats.topper.student.name) : '—'}
          </div>
          <div class="exam-kpi-label">Class Topper · Rank #1</div>
          <div class="exam-kpi-sub">
            ${ms.stats.topper ? `Scored ${ms.stats.topper.pct}% · Grade ${ms.stats.topper.overallGrade} (GPA ${ms.stats.topper.gpa})` : 'Awaiting marks entry'}
          </div>
        </div>
      </div>
    </div>

    <!-- CBSE / ICSE 9-Point Cohort Grade Distribution Card -->
    <div class="grade-dist-card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px">
        <div>
          <strong style="font-size:14px;color:#1e293b">CBSE / ICSE 9-Point Cohort Grade Distribution</strong>
          <span style="font-size:12px;color:#64748b;margin-left:8px">Visual spread of student performance in ${esc(currentClass)}</span>
        </div>
        <span class="pill" style="font-weight:600">${ms.matrix.length} Students Assessed</span>
      </div>

      <div class="grade-dist-bar">
        ${pctA1 > 0 ? `<div class="grade-dist-seg seg-a1" style="width:${pctA1}%" title="A1 (91-100%): ${ms.distribution.A1} students (${pctA1}%)">A1 (${ms.distribution.A1})</div>` : ''}
        ${pctA2 > 0 ? `<div class="grade-dist-seg seg-a2" style="width:${pctA2}%" title="A2 (81-90%): ${ms.distribution.A2} students (${pctA2}%)">A2 (${ms.distribution.A2})</div>` : ''}
        ${pctB1 > 0 ? `<div class="grade-dist-seg seg-b1" style="width:${pctB1}%" title="B1 (71-80%): ${ms.distribution.B1} students (${pctB1}%)">B1 (${ms.distribution.B1})</div>` : ''}
        ${pctB2 > 0 ? `<div class="grade-dist-seg seg-b2" style="width:${pctB2}%" title="B2 (61-70%): ${ms.distribution.B2} students (${pctB2}%)">B2 (${ms.distribution.B2})</div>` : ''}
        ${pctC > 0 ? `<div class="grade-dist-seg seg-c" style="width:${pctC}%" title="C (41-60%): ${ms.distribution.C} students (${pctC}%)">C (${ms.distribution.C})</div>` : ''}
        ${pctRem > 0 ? `<div class="grade-dist-seg seg-rem" style="width:${pctRem}%" title="Remedial (<40%): ${ms.distribution.Remedial} students (${pctRem}%)">Rem (${ms.distribution.Remedial})</div>` : ''}
      </div>

      <div class="grade-dist-legend">
        <span class="legend-item"><span class="legend-dot" style="background:#16a34a"></span><strong>A1</strong> (91-100%): ${ms.distribution.A1}</span>
        <span class="legend-item"><span class="legend-dot" style="background:#22c55e"></span><strong>A2</strong> (81-90%): ${ms.distribution.A2}</span>
        <span class="legend-item"><span class="legend-dot" style="background:#0284c7"></span><strong>B1</strong> (71-80%): ${ms.distribution.B1}</span>
        <span class="legend-item"><span class="legend-dot" style="background:#38bdf8"></span><strong>B2</strong> (61-70%): ${ms.distribution.B2}</span>
        <span class="legend-item"><span class="legend-dot" style="background:#eab308"></span><strong>C1/C2</strong> (41-60%): ${ms.distribution.C}</span>
        <span class="legend-item"><span class="legend-dot" style="background:#ef4444"></span><strong>Remedial (E)</strong> (&lt;40%): ${ms.distribution.Remedial}</span>
      </div>
    </div>

    <!-- Controls Toolbar -->
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:10px 14px;margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase">VIEW MODE:</span>
        <button type="button" class="btn small ${currentView === 'gradebook' ? 'primary' : ''}" data-action="exam-view-mode:gradebook">
          📊 Interactive Gradebook
        </button>
        <button type="button" class="btn small ${currentView === 'schedule' ? 'primary' : ''}" data-action="exam-view-mode:schedule">
          📅 Exam Schedule & Date Sheet
        </button>

        ${currentView === 'gradebook' ? `
          <span style="font-size:12px;font-weight:700;color:#64748b;margin-left:8px;text-transform:uppercase">SUBJECT:</span>
          <select id="exam-subject-select" class="select-field" style="padding:5px 8px;font-size:12px;border-radius:6px;border:1px solid #cbd5e1;background:#fff">
            <option value="All" ${currentSubject === 'All' ? 'selected' : ''}>All Subjects (${ms.exams.length})</option>
            ${ms.exams.map(ex => `
              <option value="${ex.id}" ${currentSubject === ex.id ? 'selected' : ''}>${ex.title} (${ex.subjectCode})</option>
            `).join('')}
          </select>
        ` : ''}
      </div>

      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase">FILTER:</span>
        ${[
          ['All', `All (${ms.matrix.length})`],
          ['Passed', `Passed (${ms.matrix.filter(m => m.passed).length})`],
          ['Remedial', `Remedial (${ms.remedialList.length})`],
          ['Distinction', `Distinction (${ms.matrix.filter(m => m.pct >= 81).length})`],
          ['Absent', `Absent/ML (${ms.matrix.filter(m => m.hasMedicalOrAbsent).length})`]
        ].map(([fKey, fLabel]) => `
          <button type="button" class="btn small ${currentFilter === fKey ? 'primary' : ''}" data-action="exam-filter:${fKey}" style="font-size:12px;padding:4px 8px">
            ${fLabel}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Main Content Area: Dual Mode Switcher -->
    ${currentView === 'gradebook' ? `
      <!-- View 1: Interactive Gradebook Matrix Table -->
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.03);margin-bottom:24px">
        <table class="gradebook-matrix">
          <thead>
            <tr>
              <th style="min-width:130px">ROLL & STUDENT</th>
              <th style="min-width:110px">SUBJECT</th>
              <th style="text-align:center;width:75px">TH (/80)</th>
              <th style="text-align:center;width:75px">PR (/20)</th>
              <th style="text-align:center;width:80px">TOTAL</th>
              <th style="text-align:center;width:70px">SCORE %</th>
              <th style="text-align:center;width:80px">GRADE</th>
              <th style="text-align:center;width:75px">STATUS</th>
              <th style="min-width:140px;max-width:180px">TEACHER REMARK</th>
              <th style="text-align:right;width:150px">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${filteredMatrix.length === 0 ? `
              <tr>
                <td colspan="10" style="text-align:center;padding:36px;color:#64748b">
                  No student records match the active filter <strong>"${esc(currentFilter)}"</strong> in ${esc(currentClass)}.
                </td>
              </tr>
            ` : filteredMatrix.map(m => {
              // Determine which subjects to render for this student row
              let targetSubjects = currentSubject === 'All' 
                ? m.subjectMarks 
                : m.subjectMarks.filter(sm => sm.exam.id === currentSubject);

              if (targetSubjects.length === 0) targetSubjects = m.subjectMarks;

              return targetSubjects.map((sm, subIdx) => `
                <tr>
                  <td>
                    <div style="display:flex;align-items:center;gap:10px">
                      ${avatar(m.student.name)}
                      <div>
                        <strong>${esc(m.student.name)}</strong>
                        <div style="font-size:11px;color:#64748b">Roll: <strong>${esc(m.student.roll || '0' + (subIdx + 1))}</strong> · ${esc(m.student.id)}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <strong>${esc(sm.exam.title)}</strong>
                    <div style="font-size:11px;color:#64748b">${esc(sm.exam.subjectCode || 'SUB')} · ${prettyDate(sm.exam.date)}</div>
                  </td>
                  <td style="text-align:center">
                    <button type="button" class="score-badge-btn" data-action="open-marks-modal:${esc(m.student.id)}:${esc(sm.exam.id)}" title="Click to edit theory score">
                      ${sm.markInfo.theory}
                    </button>
                  </td>
                  <td style="text-align:center">
                    <button type="button" class="score-badge-btn" data-action="open-marks-modal:${esc(m.student.id)}:${esc(sm.exam.id)}" title="Click to edit practical score">
                      ${sm.markInfo.practical}
                    </button>
                  </td>
                  <td style="text-align:center">
                    <strong>${sm.markInfo.total}</strong> <small style="color:#64748b">/ ${sm.markInfo.maxTotal}</small>
                  </td>
                  <td style="text-align:center">
                    <strong style="color:${sm.markInfo.pct >= 75 ? '#16a34a' : sm.markInfo.pct >= 40 ? '#0284c7' : '#dc2626'}">${sm.markInfo.pct}%</strong>
                  </td>
                  <td style="text-align:center">
                    <span class="grade-pill ${sm.markInfo.tier}">${sm.markInfo.grade} <small>(${sm.markInfo.gradePoint.toFixed(1)})</small></span>
                  </td>
                  <td style="text-align:center">
                    ${sm.markInfo.status === 'Present' && sm.markInfo.passed ? '<span class="pill green">Passed</span>' :
                      sm.markInfo.status === 'Remedial' || sm.markInfo.grade === 'E' ? '<span class="pill red">Remedial</span>' :
                      sm.markInfo.status === 'Medical' ? '<span class="pill orange">Medical</span>' :
                      sm.markInfo.status === 'Absent' ? '<span class="pill red">Absent</span>' :
                      pill(sm.markInfo.status)}
                  </td>
                  <td style="font-size:12px;color:#475569;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(sm.markInfo.remarks)}">
                    <em>${esc(sm.markInfo.remarks || 'Standard progress achieved.')}</em>
                  </td>
                  <td style="text-align:right">
                    <div style="display:inline-flex;gap:4px">
                      <button type="button" class="btn small" data-action="open-marks-modal:${esc(m.student.id)}:${esc(sm.exam.id)}" title="Edit marks & pedagogical remarks" style="padding:4px 6px">
                        ✏️ Edit
                      </button>
                      <button type="button" class="btn small" data-action="open-report-card:${esc(m.student.id)}" title="View official branded report card" style="padding:4px 6px">
                        📜 Card
                      </button>
                      <button type="button" class="btn small" data-action="open-admit-card:${esc(m.student.id)}" title="Generate board hall ticket" style="padding:4px 6px">
                        🎫 Hall
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('');
            }).join('')}
          </tbody>
        </table>
      </div>
    ` : `
      <!-- View 2: Exam Schedule & Date Sheet Table -->
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.03);margin-bottom:24px">
        <table class="gradebook-matrix">
          <thead>
            <tr>
              <th style="min-width:120px">EXAM CODE</th>
              <th style="min-width:180px">SUBJECT & TITLE</th>
              <th>EXAM DATE</th>
              <th>TIME SLOT</th>
              <th>EXAMINATION HALL</th>
              <th style="text-align:center">MAX MARKS</th>
              <th>CHIEF INVIGILATOR</th>
              <th style="text-align:center">STATUS</th>
              <th style="text-align:right;min-width:160px">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${ms.exams.map(ex => `
              <tr>
                <td><strong>${esc(ex.id)}</strong></td>
                <td>
                  <strong>${esc(ex.title)}</strong>
                  <div style="font-size:11px;color:#64748b">Code: ${esc(ex.subjectCode || 'SUB')} · ${esc(ex.series || currentSeries)}</div>
                </td>
                <td><strong>${prettyDate(ex.date)}</strong></td>
                <td>${esc(ex.time || '09:00 AM – 12:00 PM')}</td>
                <td>${esc(ex.room || 'Examination Hall A')}</td>
                <td style="text-align:center">
                  <strong>${esc(ex.max || '100 marks')}</strong><br>
                  <small style="color:#64748b">Pass: ${esc(ex.passMarks || 40)}</small>
                </td>
                <td>${esc(ex.invigilator || ex.teacher || 'Faculty')}</td>
                <td style="text-align:center">
                  ${pill(ex.status || 'Marks Open')}
                </td>
                <td style="text-align:right">
                  <div style="display:inline-flex;gap:6px">
                    <button type="button" class="btn small primary" data-action="exam-view-mode:gradebook">
                      Enter Marks
                    </button>
                    <button type="button" class="btn small" data-action="open-admit-card:${esc(currentClass)}">
                      Hall Ticket
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `}

    <!-- Remedial Watchlist & Academic Counseling Queue Section -->
    <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.03)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px">
        <div>
          <h3 style="margin:0;font-size:16px;font-weight:700;color:#1e293b;display:flex;align-items:center;gap:8px">
            ${icon('clock')} Remedial Watchlist & Academic Counseling Queue
          </h3>
          <p style="margin:4px 0 0 0;font-size:13px;color:#64748b">
            Early intervention workflow for students scoring below the 40% passing benchmark in ${esc(currentClass)}.
          </p>
        </div>
        <span class="pill ${ms.remedialList.length > 0 ? 'orange' : 'green'}" style="font-weight:600">
          ${ms.remedialList.length} ${ms.remedialList.length === 1 ? 'Action Pending' : 'Actions Pending'}
        </span>
      </div>

      ${ms.remedialList.length > 0 ? `
        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:14px">
          ${ms.remedialList.map(m => {
            let deficientSubjects = m.subjectMarks.filter(sm => sm.markInfo.status === 'Remedial' || sm.markInfo.grade === 'E' || sm.markInfo.pct < 40);
            let subjNames = deficientSubjects.map(sm => `${sm.exam.title} (${sm.markInfo.pct}%)`).join(', ');

            return `
              <div style="border:1px solid #fed7aa;background:#fffaf5;border-radius:10px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;gap:12px">
                <div>
                  <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
                    ${avatar(m.student.name, 'orange')}
                    <div>
                      <strong style="color:#9a3412">${esc(m.student.name)}</strong>
                      <div style="font-size:11px;color:#c2410c">Roll: ${esc(m.student.roll)} · Agg. Score: <strong>${m.pct}%</strong></div>
                    </div>
                  </div>
                  <div style="font-size:12px;color:#7c2d12;margin-bottom:6px">
                    <strong>Deficient Subjects:</strong> ${esc(subjNames || 'Overall Aggregate < 40%')}
                  </div>
                  <div style="font-size:11px;color:#9a3412;line-height:1.4">
                    Teacher Remark: <em>${esc(deficientSubjects[0]?.markInfo?.remarks || 'Struggling with fundamental problem-solving concepts.')}</em>
                  </div>
                </div>

                <div style="display:flex;gap:6px;flex-wrap:wrap">
                  <button type="button" class="btn small" data-action="schedule-remedial:${esc(m.student.id)}:${esc(deficientSubjects[0]?.exam?.title || 'Core')}" style="background:#ffffff;border-color:#fed7aa;color:#c2410c;font-size:11px;flex:1">
                    📅 Schedule Remedial
                  </button>
                  <button type="button" class="btn small" data-action="notify-remedial-parent:${esc(m.student.id)}:${esc(deficientSubjects[0]?.exam?.title || 'Core')}" style="background:#ffffff;border-color:#fed7aa;color:#c2410c;font-size:11px;flex:1">
                    ✉️ Notify Parent
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;text-align:center;color:#166534;font-size:13px">
          🎉 <strong>Excellent Academic Standing:</strong> All students in ${esc(currentClass)} currently meet or exceed the 40% passing benchmark for ${esc(currentSeries)}.
        </div>
      `}
    </div>
  `;
}

function fees() {
  let data = filtered('fees');
  let due = visible(db.fees).reduce((a, x) => a + +x.amount, 0);
  let paid = visible(db.fees).reduce((a, x) => a + +x.paid, 0);

  return `
    ${head('Fees & payments', 'Invoice status, collection progress and follow-up in one view.', btn('Create invoice', 'new:fees', 'primary', 'plus'))}
    <div class="grid mini-grid">
      ${kpi('Amount invoiced', money(due), 'Across demo invoices', 'wallet')}
      ${kpi('Amount collected', money(paid), `${due ? Math.round(paid / due * 100) : 0}% of invoiced value`, 'check', 'green')}
      ${kpi('Outstanding', money(due - paid), `${visible(db.fees).filter(x => x.status === 'Overdue').length} overdue invoices`, 'clock', 'orange')}
    </div>
    ${toolbar(['All', 'Paid', 'Partial', 'Pending', 'Overdue'])}
    ${table('fees', ['INVOICE', 'STUDENT', 'FEE HEAD', 'AMOUNT', 'PAID', 'BALANCE', 'DUE', 'STATUS', ''], data.map(x => `
      <tr data-open="fees:${esc(x.id)}">
        <td><strong>${esc(x.id)}</strong></td>
        <td>${esc(x.student)}<br>${esc(x.grade)}</td>
        <td>${esc(x.type)}</td>
        <td>${money(x.amount)}</td>
        <td>${money(x.paid)}</td>
        <td><strong>${money(+x.amount - +x.paid)}</strong></td>
        <td>${prettyDate(x.due)}</td>
        <td>${pill(x.status)}</td>
        <td><button class="row-btn" data-open="fees:${esc(x.id)}">Manage</button></td>
      </tr>
    `).join(''))}
    <div class="notice mt16">
      <strong>Demo finance flow:</strong> Click any invoice to record a demo payment. Balances and student profiles update instantly with no backend reload.
    </div>
  `;
}

function timetable() {
  if (!Array.isArray(db.events)) db.events = [];
  let times = [
    { id: '08:30', period: 'Period 1', time: '08:30 – 09:25' },
    { id: '09:30', period: 'Period 2', time: '09:30 – 10:25' },
    { id: '10:45', period: 'Period 3', time: '10:45 – 11:40' },
    { id: '11:45', period: 'Period 4', time: '11:45 – 12:40' },
    { id: '13:15', period: 'Period 5', time: '13:15 – 14:10' },
    { id: '14:15', period: 'Period 6', time: '14:15 – 15:00' }
  ];
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  let currentClass = state.attClass || 'Grade 8 A';
  let currentWing = state.timetableWing || 'All';

  let classData = getClassPlan(currentClass);
  let classInfo = classData.info;
  let plan = classData.plan;

  let visibleClasses = currentWing === 'All' 
    ? ALL_CLASSES 
    : ALL_CLASSES.filter(c => c.wing === currentWing);

  let wingCounts = {
    'All': ALL_CLASSES.length,
    'Primary': ALL_CLASSES.filter(c => c.wing === 'Primary').length,
    'Middle': ALL_CLASSES.filter(c => c.wing === 'Middle').length,
    'Secondary': ALL_CLASSES.filter(c => c.wing === 'Secondary').length,
    'Senior': ALL_CLASSES.filter(c => c.wing === 'Senior').length
  };

  let eventsList = Array.isArray(db.events) ? db.events : [];

  return `
    ${head('Class timetable', 'A clear weekly schedule for teachers, rooms and students.', `
      <button type="button" class="btn small" data-action="print-timetable">${icon('printer')} Print Timetable</button>
      ${btn('Add class event', 'new-event', 'primary small', 'plus')}
    `)}

    <div class="timetable-toolbar">
      <div class="timetable-toolbar-top">
        <div class="timetable-class-label">
          ${icon('calendar')} SELECT CLASS
        </div>
        <div class="wing-tabs">
          ${['All', 'Primary', 'Middle', 'Secondary', 'Senior'].map(w => `
            <button type="button" class="wing-tab ${currentWing === w ? 'active' : ''}" data-action="timetable-wing:${w}">
              ${w === 'All' ? 'All Classes' : w + ' Wing'} (${wingCounts[w]})
            </button>
          `).join('')}
        </div>
        <div>
          <select id="timetable-class-select" class="class-select-dropdown" aria-label="Select class from list">
            <optgroup label="Primary Wing (Grades 1 – 5)">
              ${ALL_CLASSES.filter(c => c.wing === 'Primary').map(c => `
                <option value="${esc(c.id)}" ${currentClass === c.id ? 'selected' : ''}>${esc(c.name)} · ${esc(c.campus)}</option>
              `).join('')}
            </optgroup>
            <optgroup label="Middle School (Grades 6 – 8)">
              ${ALL_CLASSES.filter(c => c.wing === 'Middle').map(c => `
                <option value="${esc(c.id)}" ${currentClass === c.id ? 'selected' : ''}>${esc(c.name)} · ${esc(c.campus)}</option>
              `).join('')}
            </optgroup>
            <optgroup label="Secondary School (Grades 9 – 10)">
              ${ALL_CLASSES.filter(c => c.wing === 'Secondary').map(c => `
                <option value="${esc(c.id)}" ${currentClass === c.id ? 'selected' : ''}>${esc(c.name)} · ${esc(c.campus)}</option>
              `).join('')}
            </optgroup>
            <optgroup label="Senior Secondary (Grades 11 – 12)">
              ${ALL_CLASSES.filter(c => c.wing === 'Senior').map(c => `
                <option value="${esc(c.id)}" ${currentClass === c.id ? 'selected' : ''}>${esc(c.name)} · ${esc(c.campus)}</option>
              `).join('')}
            </optgroup>
          </select>
        </div>
      </div>

      <div class="class-pill-container">
        ${visibleClasses.map(c => `
          <button type="button" class="class-pill-btn filter-btn ${currentClass === c.id ? 'active' : ''}" data-action="timetable-class:${esc(c.id)}" title="${esc(c.name)} · ${esc(c.room)} (${esc(c.teacher)})">
            <span class="class-dot"></span>
            <span>${esc(c.name)}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <div class="class-info-banner">
      <div class="class-info-left">
        <div class="class-info-avatar">${esc(classInfo.avatar || 'TT')}</div>
        <div>
          <h3 class="class-info-title">${esc(classInfo.name)} <span class="pill">${esc(classInfo.wing)} Wing</span></h3>
          <div class="class-info-meta">
            <span><strong>Room:</strong> ${esc(classInfo.room)}</span>
            <span>·</span>
            <span><strong>Campus:</strong> ${esc(classInfo.campus)}</span>
            <span>·</span>
            <span><strong>Class Teacher:</strong> ${esc(classInfo.teacher)}</span>
            <span>·</span>
            <span><strong>Weekly Load:</strong> 30 periods (6/day)</span>
          </div>
        </div>
      </div>
      <div class="class-info-actions">
        <button type="button" class="btn small" data-action="print-timetable">${icon('printer')} Print</button>
        <button type="button" class="btn small primary" data-action="new-event">${icon('plus')} Add Event</button>
      </div>
    </div>

    <div class="card card-pad">
      <div class="table-wrap">
        <div class="timetable">
          <div class="day-label" style="background:transparent"></div>
          ${days.map(x => `<div class="day-label">${x}</div>`).join('')}
          ${times.map((t, i) => `
            <div class="time-label">
              <strong>${t.period}</strong>
              <small>${t.id}</small>
            </div>
            ${days.map((d, j) => {
              let charCodeSum = classInfo.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
              let subIdx = (i * 3 + j * 2 + (charCodeSum % 7)) % plan.subjects.length;
              let sObj = plan.subjects[subIdx];
              let subject = sObj.name;
              let color = sObj.color || 'blue';
              let teacher = sObj.teacher || classInfo.teacher;
              let room = (sObj.room.includes('Wing') || sObj.room.includes('Hall') || sObj.room.includes('Rm')) ? classInfo.room : sObj.room;
              return `
                <button type="button" class="class-slot ${color}" data-action="slot" data-sub="${esc(subject)}" data-day="${esc(d)}" data-time="${esc(t.time)}" data-period="${esc(t.period)}" data-class="${esc(classInfo.name)}" data-room="${esc(room)}" data-teacher="${esc(teacher)}" data-color="${esc(color)}">
                  <strong>${esc(subject)}</strong>
                  <small>
                    <span>${esc(room)}</span>
                    <span>${esc(teacher)}</span>
                  </small>
                </button>
              `;
            }).join('')}
          `).join('')}
        </div>
      </div>
    </div>

    <div class="card card-pad mt16">
      <div class="section-title"><h2>Scheduled Class Events & Substitutions</h2></div>
      ${eventsList.length ? eventsList.map(x => `
        <div class="calendar-box">
          <span class="calendar-date">${esc((x.day || 'MON').slice(0, 3).toUpperCase())}</span>
          <span><strong>${esc(x.title)}</strong><br><span class="muted">${esc(x.time || '10:30')} · ${esc(x.room || classInfo.room)} · ${esc(classInfo.name)}</span></span>
          <button type="button" class="row-btn" data-action="remove-event:${esc(x.id)}" style="margin-left:auto">Remove</button>
        </div>
      `).join('') : '<p class="muted">No custom events scheduled for this class. Click "Add class event" above to schedule revisions, workshops, or substitutions.</p>'}
    </div>
  `;
}


// ============================================================================
// 1. PARENT COMMUNICATION (OMNICHANNEL ENGAGEMENT HUB)
// ============================================================================
function communication() {
  let activeFilter = state.commFilter || 'All';
  let messages = db.messages || [];
  let templates = db.messageTemplates || [];

  let filteredMsgs = messages.filter(m => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'WhatsApp') return (m.channel || '').includes('WhatsApp') || (m.channel || '').includes('SMS');
    if (activeFilter === 'SMS') return (m.channel || '').includes('SMS');
    if (activeFilter === 'Circulars') return (m.channel || '').includes('Email') || (m.channel || '').includes('In-app');
    return true;
  });

  return `
    ${head('Parent communication', 'Keep circulars, updates and acknowledgements organised.', `
      <div style="display:flex;gap:8px">
        <button type="button" class="btn primary" data-action="comm-open-composer">
          ${icon('plus')} Compose Broadcast
        </button>
        <button type="button" class="btn btn-emergency" data-action="comm-emergency-blast">
          ⚡ Emergency School Alert
        </button>
      </div>
    `)}

    <!-- Top Communication KPIs -->
    <div class="grid kpis">
      ${kpi('Dispatched updates', messages.length, 'Omnichannel messages sent', 'message')}
      ${kpi('WhatsApp delivery', '98.4%', 'Verified Meta API gateway', 'users', 'green')}
      ${kpi('Parent read rate', '86.2%', 'Read receipts acknowledged', 'chart', 'purple')}
      ${kpi('Emergency gateway', 'Active', 'DLT priority bypass active', 'headset', 'orange')}
    </div>

    <!-- Communication Category Tabs -->
    <div class="toolbar" style="margin-bottom:14px">
      <div class="segmented">
        <button type="button" class="segment ${activeFilter === 'All' ? 'active' : ''}" data-action="comm-filter:All">All Dispatches</button>
        <button type="button" class="segment ${activeFilter === 'WhatsApp' ? 'active' : ''}" data-action="comm-filter:WhatsApp">WhatsApp & SMS</button>
        <button type="button" class="segment ${activeFilter === 'Circulars' ? 'active' : ''}" data-action="comm-filter:Circulars">Circulars & Slips</button>
      </div>
      <div class="toolbar-right">
        <span style="font-size:11.5px;color:#64748b;font-weight:600">Showing ${filteredMsgs.length} dispatches</span>
      </div>
    </div>

    <!-- Communication Dispatches Table -->
    <div class="card card-pad" style="padding:0">
      <table class="table">
        <thead>
          <tr>
            <th>SUBJECT & CAMPAIGN</th>
            <th>TARGET AUDIENCE</th>
            <th>DISPATCH CHANNELS</th>
            <th>DELIVERY & READ STATS</th>
            <th>SENT DATE</th>
            <th>STATUS</th>
            <th style="text-align:right">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          ${filteredMsgs.map(m => `
            <tr data-action="comm-view-analytics:${esc(m.id)}">
              <td>
                <strong>${esc(m.subject)}</strong>
                <div style="font-size:10.5px;color:#64748b">${esc(m.id)} · ${esc(m.campus || 'All campuses')}</div>
              </td>
              <td><span class="pill gray" style="font-weight:700">${esc(m.audience)}</span></td>
              <td>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${(m.channel || 'In-app').split('&').map(ch => `
                    <span class="pill ${ch.trim().includes('WhatsApp') ? 'green' : ch.trim().includes('SMS') ? 'blue' : 'purple'}" style="font-size:9.5px;font-weight:700">
                      ${ch.trim()}
                    </span>
                  `).join('')}
                </div>
              </td>
              <td>
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;height:5px;background:#e2e8f0;border-radius:3px;overflow:hidden;width:70px">
                    <div style="height:100%;background:#059669;width:92%"></div>
                  </div>
                  <span style="font-size:10.5px;color:#059669;font-weight:700">98% Deliv · 84% Read</span>
                </div>
              </td>
              <td>${esc(m.sent || 'Draft')}</td>
              <td>${pill(m.status)}</td>
              <td style="text-align:right">
                <button type="button" class="row-btn" data-action="comm-view-analytics:${esc(m.id)}">Analytics</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ============================================================================
// 2. STAFF & HR (FACULTY OPERATIONS & SUBSTITUTION MATRIX)
// ============================================================================
function staff() {
  let activeTab = state.staffView || 'directory'; // 'directory', 'substitutions', 'workload'
  let staffList = visible(db.staff) || [];
  let subs = db.substitutions || [];
  let teachersOnLeave = staffList.filter(x => x.status === 'On leave');

  return `
    ${head('Staff & HR', 'Faculty, operations teams, daily substitutions and period workloads.', `
      <div style="display:flex;gap:8px">
        <button type="button" class="btn primary" data-action="new:staff">
          ${icon('plus')} Add Staff Member
        </button>
      </div>
    `)}

    <!-- Top Staff KPIs -->
    <div class="grid kpis">
      ${kpi('Active faculty & staff', staffList.filter(x => x.status === 'Active').length, 'Teaching & operations team', 'briefcase')}
      ${kpi('Teachers on leave', teachersOnLeave.length, 'Daily substitution active', 'calendar', teachersOnLeave.length > 0 ? 'orange' : 'green')}
      ${kpi('Weekly period load', '24.6 / wk', 'Faculty teaching average', 'chart', 'purple')}
      ${kpi('Biometric punctuality', '96.8%', 'Morning punch-in compliance', 'clock', 'green')}
    </div>

    <!-- Staff View Tabs -->
    <div class="toolbar" style="margin-bottom:14px">
      <div class="segmented">
        <button type="button" class="segment ${activeTab === 'directory' ? 'active' : ''}" data-action="staff-tab:directory">
          ${icon('users')} Staff & Faculty Directory
        </button>
        <button type="button" class="segment ${activeTab === 'substitutions' ? 'active' : ''}" data-action="staff-tab:substitutions">
          🔄 Daily Substitution & Cover Matrix ${subs.filter(s => s.status === 'Needs Substitute').length > 0 ? '<span class="badge-count orange">1 Need</span>' : ''}
        </button>
      </div>
    </div>

    ${activeTab === 'substitutions' ? `
      <!-- Daily Substitution Matrix View -->
      <div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:12px;padding:14px 18px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <span class="pill orange" style="font-weight:700">DAILY ATTENDANCE EXCEPTION</span>
          <h3 style="font-size:15px;font-weight:800;color:#92400e;margin:4px 0 2px">2 Faculty Members On Approved Leave Today</h3>
          <p style="font-size:11.5px;color:#b45309;margin:0">Mrs. Kavita Iyer (Grade 8A Class Teacher · Medical) & Ms. S. Desai (Faculty English · Casual Leave)</p>
        </div>
        <span class="pill green" style="font-weight:700">2 of 3 Periods Covered</span>
      </div>

      <div class="card card-pad" style="padding:0">
        <table class="table">
          <thead>
            <tr>
              <th>TIMETABLE PERIOD</th>
              <th>CLASS & SUBJECT</th>
              <th>REGULAR FACULTY</th>
              <th>CLASSROOM</th>
              <th>SUBSTITUTE ASSIGNMENT</th>
              <th>STATUS</th>
              <th style="text-align:right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${subs.map(sub => `
              <tr>
                <td><strong>${esc(sub.period)}</strong></td>
                <td>
                  <strong>${esc(sub.class)}</strong>
                  <div style="font-size:10.5px;color:#64748b">${esc(sub.subject)}</div>
                </td>
                <td>${esc(sub.teacherOnLeave)}</td>
                <td><span class="pill gray">${esc(sub.room)}</span></td>
                <td>
                  ${sub.substituteTeacher === 'Unassigned' ? `
                    <span style="color:#dc2626;font-weight:700;font-size:12px">⚠️ Unassigned</span>
                  ` : `
                    <strong style="color:#059669;font-size:12px">${esc(sub.substituteTeacher)}</strong>
                  `}
                </td>
                <td>
                  <span class="pill ${sub.status === 'Cover Confirmed' ? 'green' : 'orange'}" style="font-weight:700">
                    ${esc(sub.status)}
                  </span>
                </td>
                <td style="text-align:right">
                  ${sub.substituteTeacher === 'Unassigned' ? `
                    <button type="button" class="btn-cover-assign" data-action="staff-open-sub-modal:${esc(sub.id)}">
                      Assign Cover
                    </button>
                  ` : `
                    <button type="button" class="btn-cover-change" data-action="staff-open-sub-modal:${esc(sub.id)}">
                      Change
                    </button>
                  `}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : `
      <!-- Faculty & Staff Directory View -->
      <div class="card card-pad" style="padding:0">
        <table class="table">
          <thead>
            <tr>
              <th>FACULTY / STAFF MEMBER</th>
              <th>DESIGNATION & ROLE</th>
              <th>DEPARTMENT</th>
              <th>QUALIFICATIONS & LOAD</th>
              <th>CAMPUS</th>
              <th>STATUS</th>
              <th style="text-align:right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${staffList.map(x => `
              <tr data-action="staff-open-profile:${esc(x.id)}">
                <td>
                  <div class="person">
                    ${avatar(x.name, 'sky')}
                    <span><strong>${esc(x.name)}</strong><br><small style="color:#64748b">${esc(x.id)} · ${esc(x.phone)}</small></span>
                  </div>
                </td>
                <td><strong>${esc(x.role)}</strong></td>
                <td><span class="pill blue">${esc(x.department)}</span></td>
                <td>
                  <div style="font-size:11.5px">
                    <strong>${x.department === 'Academics' ? 'M.Sc, B.Ed (24 periods/wk)' : 'Graduate (40 hrs/wk)'}</strong>
                    <div style="font-size:10px;color:#059669">Casual: 8 left · Medical: 10 left</div>
                  </div>
                </td>
                <td>${esc(x.campus)}</td>
                <td>${pill(x.status)}</td>
                <td style="text-align:right">
                  <button type="button" class="row-btn" data-action="staff-open-profile:${esc(x.id)}">Dossier</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `}
  `;
}

// ============================================================================
// 3. TRANSPORT & ROUTES (FLEET TELEMATICS & STOP MANIFEST)
// ============================================================================
function transport() {
  let activeTab = state.transportView || 'overview'; // 'overview', 'manifest', 'compliance'
  let routes = visible(db.transport) || [];
  let routeStops = db.routeStops || {};
  let fleet = db.fleetCompliance || [];
  let selectedRouteId = state.transportSelectedRoute || 'RT-02';

  return `
    ${head('Transport & routes', 'Monitor fleet telematics, student passenger manifests and road compliance.', `
      <div style="display:flex;gap:8px">
        <button type="button" class="btn primary" data-action="new:transport">
          ${icon('plus')} Add Bus Route
        </button>
        <button type="button" class="btn btn-warning-alert" data-action="transport-open-delay-modal:RT-02">
          📢 Broadcast Delay Alert
        </button>
      </div>
    `)}

    <!-- Top Transport KPIs -->
    <div class="grid kpis">
      ${kpi('Active fleet buses', routes.length, 'All GPS & Speed Governor active', 'bus')}
      ${kpi('Students transported', routes.reduce((n, x) => n + +x.students, 0), 'Registered daily riders', 'users', 'green')}
      ${kpi('Fleet adherence', '98.2%', 'On-time morning arrival', 'clock', 'purple')}
      ${kpi('Statutory fitness', '100% Valid', 'FC & Commercial Insurance checked', 'check', 'green')}
    </div>

    <!-- Transport Tabs -->
    <div class="toolbar" style="margin-bottom:14px">
      <div class="segmented">
        <button type="button" class="segment ${activeTab === 'overview' ? 'active' : ''}" data-action="transport-tab:overview">
          🚌 Fleet & Routes Overview
        </button>
        <button type="button" class="segment ${activeTab === 'manifest' ? 'active' : ''}" data-action="transport-tab:manifest">
          📍 Route Stop Passenger Manifests
        </button>
        <button type="button" class="segment ${activeTab === 'compliance' ? 'active' : ''}" data-action="transport-tab:compliance">
          📋 Vehicle Statutory Compliance (FC / PUC)
        </button>
      </div>
    </div>

    ${activeTab === 'manifest' ? `
      <!-- Route Manifest View -->
      <div class="card card-pad" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div>
            <span class="pill blue" style="font-weight:700">PASSENGER ROSTER</span>
            <h3 style="font-size:16px;font-weight:800;color:#0f172a;margin:2px 0 0">Select Route Manifest</h3>
          </div>
          <div class="segmented">
            ${routes.map(r => `
              <button type="button" class="route-pill-btn ${selectedRouteId === r.id ? 'active' : ''}" data-action="transport-select-route:${r.id}">
                ${r.id}: ${r.route.split('–')[0].trim()}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Stop by Stop Passenger Manifest -->
        <div style="display:flex;flex-direction:column;gap:12px">
          ${(routeStops[selectedRouteId] || []).map((stop, idx) => `
            <div style="border:1px solid #e2e8f0;border-radius:10px;padding:12px;background:#f8fafc">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <div style="display:flex;align-items:center;gap:8px">
                  <span class="pill gray" style="font-weight:800">STOP #${idx + 1}</span>
                  <strong style="font-size:13px;color:#0f172a">${stop.stopName}</strong>
                </div>
                <div style="font-size:11px;color:#64748b">
                  Morning Pickup: <strong>${stop.pickupTime}</strong> · Drop-off: <strong>${stop.dropTime}</strong>
                </div>
              </div>

              ${stop.students.length === 0 ? `
                <div style="font-size:11px;color:#94a3b8;font-style:italic">Campus Terminal Point (No passenger boarding)</div>
              ` : `
                <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(240px, 1fr));gap:8px">
                  ${stop.students.map(st => `
                    <div style="background:#ffffff;border:1px solid #cbd5e1;border-radius:8px;padding:8px 10px;display:flex;justify-content:space-between;align-items:center">
                      <div>
                        <strong style="font-size:12px;color:#0f172a">${st.name}</strong>
                        <div style="font-size:10.5px;color:#64748b">${st.grade} · Tel: ${st.phone}</div>
                      </div>
                      <span class="pill green" style="font-size:9.5px;font-weight:700">Boarded ✓</span>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          `).join('')}
        </div>
      </div>
    ` : activeTab === 'compliance' ? `
      <!-- Vehicle Statutory Compliance View -->
      <div class="card card-pad" style="padding:0">
        <table class="table">
          <thead>
            <tr>
              <th>VEHICLE REGISTRATION</th>
              <th>ASSIGNED ROUTE</th>
              <th>FITNESS (FC) EXPIRY</th>
              <th>COMMERCIAL INSURANCE</th>
              <th>POLLUTION (PUC)</th>
              <th>SPEED GOVERNOR</th>
              <th>SAFETY & CCTV</th>
            </tr>
          </thead>
          <tbody>
            ${fleet.map(v => `
              <tr>
                <td><strong>${esc(v.vehicle)}</strong></td>
                <td><span class="pill blue" style="font-weight:700">${esc(v.route)}</span></td>
                <td><span class="pill green" style="font-weight:700">${esc(v.fcExpiry)}</span></td>
                <td>${esc(v.insuranceExpiry)}</td>
                <td>
                  <span class="pill ${v.pucExpiry < '2026-12-01' ? 'orange' : 'green'}" style="font-weight:700">
                    ${esc(v.pucExpiry)} ${v.pucExpiry < '2026-12-01' ? '⚠️ Due' : ''}
                  </span>
                </td>
                <td><span class="pill green" style="font-weight:700">${esc(v.speedGovernor)}</span></td>
                <td>
                  <span class="pill ${v.cctvStatus.includes('Active') ? 'green' : 'orange'}" style="font-weight:700">
                    ${esc(v.cctvStatus)}
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : `
      <!-- Fleet & Routes Overview Table -->
      <div class="card card-pad" style="padding:0">
        <table class="table">
          <thead>
            <tr>
              <th>ROUTE TITLE</th>
              <th>PRIMARY DRIVER</th>
              <th>VEHICLE NO.</th>
              <th>STUDENT RIDERS</th>
              <th>SEAT CAPACITY</th>
              <th>CAMPUS</th>
              <th>STATUS</th>
              <th style="text-align:right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${routes.map(x => `
              <tr data-action="transport-open-manifest:${esc(x.id)}">
                <td>
                  <strong>${esc(x.route)}</strong>
                  <div style="font-size:10.5px;color:#64748b">${esc(x.id)} · GPS Telematics Active</div>
                </td>
                <td>${esc(x.driver)}</td>
                <td><strong>${esc(x.vehicle)}</strong></td>
                <td><strong>${esc(x.students)} riders</strong></td>
                <td>
                  <div style="display:flex;align-items:center;gap:6px">
                    <div style="flex:1;height:5px;background:#e2e8f0;border-radius:3px;overflow:hidden;width:60px">
                      <div style="height:100%;background:#0284c7;width:${Math.round(x.students / x.capacity * 100)}%"></div>
                    </div>
                    <span style="font-size:11px">${esc(x.capacity)} seats</span>
                  </div>
                </td>
                <td>${esc(x.campus)}</td>
                <td>${pill(x.status)}</td>
                <td style="text-align:right">
                  <button type="button" class="row-btn" data-action="transport-open-manifest:${esc(x.id)}">Manifest</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `}
  `;
}

// ============================================================================
// 4. SCHOOL LIBRARY (INTEGRATED ILS, OPAC & OVERDUE LEDGER)
// ============================================================================
function libraryPage() {
  let activeTab = state.libraryView || 'opac'; // 'opac', 'loans', 'fines'
  let catalog = db.libraryCatalog || [];
  let loans = visible(db.library) || [];
  let fines = db.libraryFines || [];

  return `
    ${head('School library', 'Issue books, manage the OPAC digital catalog and track overdue fines.', `
      <div style="display:flex;gap:8px">
        <button type="button" class="btn primary" data-action="library-open-issue">
          ${icon('plus')} Issue Book to Student
        </button>
      </div>
    `)}

    <!-- Top Library KPIs -->
    <div class="grid kpis">
      ${kpi('Total catalog volumes', '1,840 Vols', '1,420 unique indexed titles', 'book')}
      ${kpi('Active volumes on loan', loans.length, 'Circulating among students', 'users', 'blue')}
      ${kpi('Overdue books', fines.length, 'Penalty accruing @ ₹5/day', 'clock', fines.length > 0 ? 'orange' : 'green')}
      ${kpi('Top reading cohort', 'Grade 8 A', '142 volumes borrowed this term', 'star', 'purple')}
    </div>

    <!-- Library Tabs -->
    <div class="toolbar" style="margin-bottom:14px">
      <div class="segmented">
        <button type="button" class="segment ${activeTab === 'opac' ? 'active' : ''}" data-action="library-tab:opac">
          📖 Digital OPAC Catalog
        </button>
        <button type="button" class="segment ${activeTab === 'loans' ? 'active' : ''}" data-action="library-tab:loans">
          🔄 Circulation & Active Loans
        </button>
        <button type="button" class="segment ${activeTab === 'fines' ? 'active' : ''}" data-action="library-tab:fines">
          💰 Overdue Fines & Dues Ledger ${fines.length > 0 ? `<span class="badge-count orange">${fines.length}</span>` : ''}
        </button>
      </div>
    </div>

    ${activeTab === 'opac' ? `
      <!-- OPAC Catalog Grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:12px">
        ${catalog.map(b => `
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 1px 3px rgba(0,0,0,0.02)">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
                <span class="pill blue" style="font-size:9.5px;font-weight:700">${b.category}</span>
                <span style="font-size:10px;color:#64748b;font-family:monospace">Dewey: ${b.dewey}</span>
              </div>
              <h4 style="font-size:14px;font-weight:800;color:#0f172a;margin:0 0 2px">${b.title}</h4>
              <div style="font-size:11.5px;color:#475569">Author: <strong>${b.author}</strong></div>
              <div style="font-size:10.5px;color:#94a3b8;margin-top:4px">Location: <strong>${b.rack}</strong> · ISBN: ${b.isbn}</div>
            </div>

            <div style="margin-top:12px;padding-top:10px;border-top:1px dashed #e2e8f0;display:flex;justify-content:space-between;align-items:center">
              <div>
                <span style="font-size:11px;font-weight:700;color:${b.availableCopies > 0 ? '#059669' : '#dc2626'}">
                  ${b.availableCopies} of ${b.totalCopies} Available
                </span>
              </div>
              <button type="button" class="btn micro primary" data-action="library-quick-issue:${b.id}">
                Issue Book
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    ` : activeTab === 'fines' ? `
      <!-- Overdue Fines Ledger -->
      <div class="card card-pad" style="padding:0">
        <table class="table">
          <thead>
            <tr>
              <th>STUDENT BORROWER</th>
              <th>OVERDUE BOOK TITLE</th>
              <th>DAYS OVERDUE</th>
              <th>DAILY PENALTY</th>
              <th>TOTAL ACCRUED FINE</th>
              <th>STATUS</th>
              <th style="text-align:right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${fines.map(f => `
              <tr>
                <td><strong>${esc(f.student)}</strong><br><span style="font-size:10px;color:#64748b">${esc(f.grade)}</span></td>
                <td><strong>${esc(f.book)}</strong></td>
                <td><span class="pill orange" style="font-weight:700">${f.daysOverdue} days late</span></td>
                <td>₹${f.dailyRate} / day</td>
                <td><strong style="color:#dc2626;font-size:13px">₹${f.fineAmount}</strong></td>
                <td><span class="pill orange">${esc(f.status)}</span></td>
                <td style="text-align:right">
                  <button type="button" class="btn-sync-fine" data-action="library-sync-fine:${esc(f.id)}">
                    Sync to Fee Balance
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : `
      <!-- Active Loans Table -->
      <div class="card card-pad" style="padding:0">
        <table class="table">
          <thead>
            <tr>
              <th>BOOK TITLE</th>
              <th>STUDENT BORROWER</th>
              <th>ISSUED DATE</th>
              <th>DUE BACK</th>
              <th>STATUS</th>
              <th style="text-align:right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${loans.map(x => `
              <tr data-action="library-return-book:${esc(x.id)}">
                <td><strong>${esc(x.title)}</strong><br><span style="font-size:10px;color:#64748b">${esc(x.id)}</span></td>
                <td>${esc(x.student)}</td>
                <td>${prettyDate(x.issued)}</td>
                <td><strong>${prettyDate(x.due)}</strong></td>
                <td>${pill(x.status)}</td>
                <td style="text-align:right">
                  <button type="button" class="btn-checkin" data-action="library-return-book:${esc(x.id)}">Check In</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `}
  `;
}

// ============================================================================
// 5. ASSETS & FACILITIES (VENUE BOOKING & WORK ORDERS)
// ============================================================================
function assetsPage() {
  let activeTab = state.assetsView || 'venues'; // 'inventory', 'venues', 'workorders'
  let assetsList = visible(db.assets) || [];
  let venues = db.facilityVenues || [];
  let bookings = db.venueBookings || [];
  let workOrders = db.workOrders || [];
  let ppms = db.ppmChecklists || [];

  return `
    ${head('Assets & facilities', 'Track capital assets, clash-free venue reservations and maintenance work orders.', `
      <div style="display:flex;gap:8px">
        <button type="button" class="btn primary" data-action="assets-open-reserve-modal">
          ${icon('plus')} Reserve Facility Venue
        </button>
        <button type="button" class="btn btn-subtle-secondary" data-action="assets-open-wo-modal">
          🔧 Log Work Order
        </button>
      </div>
    `)}

    <!-- Top Assets KPIs -->
    <div class="grid kpis">
      ${kpi('Tracked capital assets', assetsList.length, 'Valuation ₹42.8 Lakhs', 'briefcase')}
      ${kpi('Venue reservations today', bookings.length, 'Clash-free booking active', 'calendar', 'purple')}
      ${kpi('Active work orders', workOrders.filter(w => w.status !== 'Resolved').length, 'Repairs in progress', 'clock', 'orange')}
      ${kpi('PPM statutory compliance', '100% Certified', 'Fire & safety tests up to date', 'check', 'green')}
    </div>

    <!-- Assets Tabs -->
    <div class="toolbar" style="margin-bottom:14px">
      <div class="segmented">
        <button type="button" class="segment ${activeTab === 'venues' ? 'active' : ''}" data-action="assets-tab:venues">
          📅 Facility & Venue Reservations
        </button>
        <button type="button" class="segment ${activeTab === 'workorders' ? 'active' : ''}" data-action="assets-tab:workorders">
          🔧 Work Orders & Maintenance Dispatch ${workOrders.filter(w => w.status !== 'Resolved').length > 0 ? '<span class="badge-count orange">2 Active</span>' : ''}
        </button>
        <button type="button" class="segment ${activeTab === 'inventory' ? 'active' : ''}" data-action="assets-tab:inventory">
          🏢 Capital Asset Inventory & PPM
        </button>
      </div>
    </div>

    ${activeTab === 'venues' ? `
      <!-- Venue Booking & Schedule Calendar -->
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:12px;margin-bottom:16px">
        ${venues.map(v => {
          let vBookings = bookings.filter(b => b.venueId === v.id);
          return `
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:14px;box-shadow:0 1px 3px rgba(0,0,0,0.02)">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
                <span class="pill blue" style="font-weight:700">${v.type}</span>
                <span class="pill gray">Cap: ${v.capacity} seats</span>
              </div>
              <h4 style="font-size:14px;font-weight:800;color:#0f172a;margin:0 0 2px">${v.name}</h4>
              <p style="font-size:11px;color:#64748b;margin:0 0 8px">${v.equipment}</p>

              <div style="border-top:1px dashed #e2e8f0;padding-top:8px">
                <span style="font-size:10px;font-weight:700;color:#475569;display:block;margin-bottom:4px">TODAY'S SCHEDULE:</span>
                ${vBookings.length === 0 ? `
                  <div style="font-size:11px;color:#059669;font-weight:700">✓ Fully Available for Booking</div>
                ` : vBookings.map(b => `
                  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:6px;margin-bottom:4px;font-size:11px">
                    <strong style="color:#1d4ed8">${b.start} – ${b.end}</strong>
                    <div style="color:#0f172a;font-weight:600">${b.purpose}</div>
                    <div style="font-size:10px;color:#64748b">Org: ${b.organizer}</div>
                  </div>
                `).join('')}
              </div>

              <button type="button" class="btn-venue-action" data-action="assets-open-reserve-modal:${v.id}">
                Book This Venue
              </button>
            </div>
          `;
        }).join('')}
      </div>
    ` : activeTab === 'workorders' ? `
      <!-- Maintenance Work Orders Table -->
      <div class="card card-pad" style="padding:0">
        <table class="table">
          <thead>
            <tr>
              <th>WORK ORDER</th>
              <th>LOCATION / ROOM</th>
              <th>PRIORITY</th>
              <th>ASSIGNED TECHNICIAN</th>
              <th>ESTIMATED COST</th>
              <th>STATUS</th>
              <th style="text-align:right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${workOrders.map(w => `
              <tr>
                <td>
                  <strong>${esc(w.item)}</strong>
                  <div style="font-size:10.5px;color:#64748b">${esc(w.id)} · ${esc(w.issue)}</div>
                </td>
                <td><strong>${esc(w.location)}</strong></td>
                <td>
                  <span class="pill ${w.priority.includes('Urgent') ? 'red' : w.priority === 'High' ? 'orange' : 'gray'}" style="font-weight:800">
                    ${esc(w.priority)}
                  </span>
                </td>
                <td>${esc(w.technician)}</td>
                <td><strong>${money(w.cost)}</strong></td>
                <td>
                  <span class="pill ${w.status === 'Resolved' ? 'green' : w.status === 'In Progress' ? 'blue' : 'orange'}" style="font-weight:700">
                    ${esc(w.status)}
                  </span>
                </td>
                <td style="text-align:right">
                  ${w.status !== 'Resolved' ? `
                    <button type="button" class="${w.status === 'Assigned' ? 'btn-wo-start' : 'btn-wo-resolve'}" data-action="assets-advance-wo:${esc(w.id)}">
                      ${w.status === 'Assigned' ? 'Start Repair' : 'Mark Resolved'}
                    </button>
                  ` : `
                    <span style="font-size:11px;color:#059669;font-weight:700">Closed ✓</span>
                  `}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : `
      <!-- Capital Asset Inventory & Preventive Maintenance (PPM) -->
      <div class="card card-pad" style="padding:0;margin-bottom:14px">
        <table class="table">
          <thead>
            <tr>
              <th>CAPITAL ASSET ITEM</th>
              <th>CATEGORY</th>
              <th>DEPARTMENT</th>
              <th>CONDITION</th>
              <th>NEXT SERVICE</th>
              <th>STATUS</th>
              <th style="text-align:right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${assetsList.map(x => `
              <tr data-open="assets:${esc(x.id)}">
                <td><strong>${esc(x.item)}</strong><br><span style="font-size:10px;color:#64748b">${esc(x.id)}</span></td>
                <td>${esc(x.category)}</td>
                <td>${esc(x.assigned)}</td>
                <td>${esc(x.condition)}</td>
                <td>${prettyDate(x.next)}</td>
                <td>${pill(x.status)}</td>
                <td style="text-align:right"><button class="row-btn" data-open="assets:${esc(x.id)}">Manage</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Preventive Maintenance Checklist -->
      <div class="card card-pad">
        <div class="section-title">
          <h2>Statutory Preventive Maintenance (PPM) Schedule</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:10px">
          ${ppms.map(p => `
            <div style="border:1px solid #e2e8f0;border-radius:8px;padding:10px;background:#f8fafc">
              <strong style="font-size:12.5px;color:#0f172a">${p.equipment}</strong>
              <div style="font-size:11px;color:#64748b;margin:2px 0 6px">Frequency: ${p.frequency} · Contractor: ${p.vendor}</div>
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:10.5px">
                <span>Next Due: <strong>${p.nextDue}</strong></span>
                <span class="pill green" style="font-weight:700">${p.status}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `}
  `;
}

function compliancePage() {
  let data = filtered('compliance');
  return `
    ${head('Compliance tracker', 'Make obligations, owners, due dates and evidence visible.', btn('Add obligation', 'new:compliance', 'primary', 'plus'))}
    <div class="notice">
      <strong>Workflow demo:</strong> Track tasks and documents here. Institutuional and regulatory obligations stay visible to leadership.
    </div>
    ${toolbar(['All', 'Open', 'In progress', 'Completed'])}
    ${table('compliance', ['REQUIREMENT', 'OWNER', 'DUE DATE', 'EVIDENCE', 'STATUS', ''], data.map(x => `
      <tr data-open="compliance:${esc(x.id)}">
        <td><strong>${esc(x.item)}</strong><br>${esc(x.id)}</td>
        <td>${esc(x.owner)}</td>
        <td>${prettyDate(x.due)}</td>
        <td>${esc(x.evidence)}</td>
        <td>${pill(x.status)}</td>
        <td><button class="row-btn" data-open="compliance:${esc(x.id)}">Manage</button></td>
      </tr>
    `).join(''))}
  `;
}


function parentPortal() {
  let currentStudentId = state.parentStudentId || 'ST-1024';
  let s = db.students.find(x => x.id === currentStudentId) || db.students.find(x => x.id === 'ST-1024') || db.students[0];
  let isAanya = s.id === 'ST-1024';

  let siblings = [
    { id: 'ST-1024', name: 'Aanya Patel', grade: 'Grade 8', section: 'A', roll: '08', wing: 'Middle Wing', avatar: 'AP', color: '#1d4ed8' },
    { id: 'ST-1030', name: 'Kabir Patel', grade: 'Grade 4', section: 'B', roll: '14', wing: 'Primary Wing', avatar: 'KP', color: '#059669' }
  ];

  let termGPA = isAanya ? '9.6 / 10.0' : '9.1 / 10.0';
  let termGrade = isAanya ? 'A1 (Outstanding)' : 'A2 (Distinction)';
  let termRank = isAanya ? 'Rank #1 · Class Topper' : 'Rank #3 · Top 10%';
  let classTeacher = isAanya ? 'Mrs. Kavita Iyer' : 'Mrs. Ananya Sen';
  let house = isAanya ? 'Tagore House (Red)' : 'Shivaji House (Blue)';
  let room = isAanya ? 'Room 205 (Middle Wing)' : 'Room 102 (Primary Wing)';

  let busRoute = isAanya ? {
    id: 'RT-02',
    name: 'Vesu – Piplod',
    vehicle: 'GJ 05 CD 2826',
    driver: 'Rakesh Parmar',
    phone: '+91 98982 77102',
    stop: 'Stop #4 · Green Valley Gate 2',
    pickup: '07:22 AM',
    drop: '02:45 PM',
    eta: '4 mins away',
    status: 'En route · Approaching Stop #4'
  } : {
    id: 'RT-01',
    name: 'Adajan – Athwa',
    vehicle: 'GJ 05 AB 4721',
    driver: 'Mahesh Solanki',
    phone: '+91 98250 44101',
    stop: 'Stop #2 · City Light Circle',
    pickup: '07:35 AM',
    drop: '02:30 PM',
    eta: '7 mins away',
    status: 'En route · On time'
  };

  let currentPeriod = isAanya ? {
    period: 'Period 3 · 10:45 AM – 11:30 AM',
    subject: 'Mathematics',
    room: 'Room 205',
    teacher: 'Mrs. Kavita Iyer',
    progress: 75,
    upNext: 'Period 4 · General Science Practical (Lab 2)'
  } : {
    period: 'Period 3 · 10:45 AM – 11:30 AM',
    subject: 'Environmental Studies',
    room: 'Room 102',
    teacher: 'Mrs. Ananya Sen',
    progress: 60,
    upNext: 'Period 4 · Junior Library & Reading Circle'
  };

  let subjectScores = isAanya ? [
    { subject: 'Mathematics', code: 'MAT-801', theory: 77, maxT: 80, prac: 19, maxP: 20, total: 96, grade: 'A1 (10.0)', pct: 96, remark: 'Exceptional analytical & algebraic clarity.' },
    { subject: 'General Science', code: 'SCI-802', theory: 70, maxT: 80, prac: 18, maxP: 20, total: 88, grade: 'A2 (9.0)', pct: 88, remark: 'Great experiment design and lab notes.' },
    { subject: 'English Literature', code: 'ENG-803', theory: 74, maxT: 80, prac: 18, maxP: 20, total: 92, grade: 'A1 (10.0)', pct: 92, remark: 'Eloquent writing and critical analysis.' },
    { subject: 'Social Studies', code: 'SST-804', theory: 72, maxT: 80, prac: 17, maxP: 20, total: 89, grade: 'A2 (9.0)', pct: 89, remark: 'In-depth historical comprehension.' },
    { subject: 'Hindi / 2nd Lang', code: 'HIN-805', theory: 75, maxT: 80, prac: 18, maxP: 20, total: 93, grade: 'A1 (10.0)', pct: 93, remark: 'Consistent grammar and rich vocabulary.' }
  ] : [
    { subject: 'Mathematics', code: 'MAT-401', theory: 46, maxT: 50, prac: 20, maxP: 20, total: 66, maxTot: 70, pct: 94, grade: 'A1 (10.0)', remark: 'Quick mental math and neat geometry.' },
    { subject: 'Environmental Studies', code: 'EVS-402', theory: 44, maxT: 50, prac: 18, maxP: 20, total: 62, maxTot: 70, pct: 89, grade: 'A2 (9.0)', remark: 'Enthusiastic observer of natural ecosystems.' },
    { subject: 'English', code: 'ENG-403', theory: 45, maxT: 50, prac: 19, maxP: 20, total: 64, maxTot: 70, pct: 91, grade: 'A1 (10.0)', remark: 'Creative storytelling and avid reader.' },
    { subject: 'Hindi', code: 'HIN-404', theory: 43, maxT: 50, prac: 18, maxP: 20, total: 61, maxTot: 70, pct: 87, grade: 'A2 (9.0)', remark: 'Good comprehension and handwriting.' }
  ];

  let fees = db.fees.filter(f => f.student === s.name);
  let feeBalance = s.balance !== undefined ? s.balance : 0;
  let homework = (db.homework || []).filter(h => h.studentId === s.id || h.grade.startsWith(s.grade));
  let leaves = (db.leaveRequests || []).filter(l => l.studentId === s.id);
  let consents = (db.consents || []).filter(c => c.studentId === s.id);

  let activeTab = state.parentActiveTab || 'home';
  let deviceView = state.parentDeviceView || 'mobile'; // 'mobile' or 'desktop'

  // Render content according to tab
  let tabContentHtml = renderParentTabBody(activeTab, s, isAanya, termGPA, termGrade, termRank, classTeacher, house, room, busRoute, currentPeriod, subjectScores, fees, feeBalance, homework, leaves, consents);

  return `
    <!-- Top Executive Toolbar: Sibling Switcher & Dual Device Mode Toggle -->
    <div class="parent-portal-header">
      <div class="parent-portal-header-left">
        <div style="display:flex;align-items:center;gap:10px">
          <div class="parent-brand-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <h1 class="parent-portal-title">Northstar Family Connect · Parent Portal</h1>
            <p class="parent-portal-subtitle">Dedicated family experience for academic monitoring, live transit tracking, fees, and teacher collaboration.</p>
          </div>
        </div>
      </div>

      <div class="parent-portal-header-right">
        <!-- Dual Device Simulator Toggle -->
        <div class="parent-device-toggle">
          <button type="button" class="parent-toggle-btn ${deviceView === 'mobile' ? 'active' : ''}" data-action="parent-device-view:mobile">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="3" ry="3"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            <span>Smartphone App</span>
          </button>
          <button type="button" class="parent-toggle-btn ${deviceView === 'desktop' ? 'active' : ''}" data-action="parent-device-view:desktop">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <span>Desktop Portal</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Sibling Multi-Ward Switcher Bar -->
    <div class="parent-sibling-strip">
      <div class="parent-sibling-label">
        <span class="pill blue" style="font-weight:700">FAMILY ACCOUNT</span>
        <strong>Mr. & Mrs. Kiran Patel</strong>
        <span style="font-size:11px;color:#64748b">Registered Mobile: +91 98251 12345 · Main Campus</span>
      </div>

      <div class="parent-sibling-cards">
        ${siblings.map(sib => {
          let isSel = sib.id === s.id;
          let sibStud = db.students.find(x => x.id === sib.id) || sib;
          let bal = sibStud.balance || 0;
          return `
            <div class="parent-sibling-card ${isSel ? 'active' : ''}" data-action="parent-select-student:${sib.id}">
              <div class="parent-sibling-avatar" style="background:${sib.color}">${sib.avatar}</div>
              <div class="parent-sibling-info">
                <div class="parent-sibling-name">${sib.name} ${isSel ? '<span class="parent-active-pill">ACTIVE WARD</span>' : ''}</div>
                <div class="parent-sibling-meta">${sib.grade} ${sib.section} · ${sib.wing}</div>
              </div>
              <div class="parent-sibling-status">
                ${bal > 0 ? `<span class="pill orange" style="font-size:10px;font-weight:700">Due ${money(bal)}</span>` : `<span class="pill green" style="font-size:10px;font-weight:700">Fees Settled ✓</span>`}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Main Container: Mobile Frame vs Desktop View -->
    ${deviceView === 'mobile' ? `
      <!-- SMARTPHONE SIMULATOR CONTAINER -->
      <div class="parent-phone-wrapper">
        <div class="parent-phone-bezel">
          <!-- Smartphone Hardware Details -->
          <div class="parent-phone-island">
            <span class="island-camera"></span>
            <span class="island-sensor"></span>
          </div>

          <!-- Phone Status Bar -->
          <div class="parent-phone-statusbar">
            <span class="phone-time">09:41</span>
            <div class="phone-icons">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
              <span style="font-size:10px;font-weight:700">5G</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/></svg>
            </div>
          </div>

          <!-- Mobile App Header -->
          <div class="parent-app-header">
            <div style="display:flex;align-items:center;gap:8px">
              <div class="app-crest-circle">NIS</div>
              <div>
                <div class="app-school-name">Northstar International</div>
                <div class="app-student-tag">${esc(s.name)} · ${esc(s.grade)} ${esc(s.section)}</div>
              </div>
            </div>
            <div class="app-header-actions">
              <button type="button" class="app-icon-btn" data-action="parent-open-msg-modal" title="Direct Message to Class Teacher">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </button>
              <button type="button" class="app-icon-btn" data-action="new:tickets" title="Family Helpdesk">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                <span class="app-badge-dot"></span>
              </button>
            </div>
          </div>

          <!-- Mobile Tab Navigation Bar (Top Pill Carousel) -->
          <div class="parent-mobile-tab-carousel">
            <button type="button" class="parent-tab-chip ${activeTab === 'home' ? 'active' : ''}" data-action="parent-tab:home">Home</button>
            <button type="button" class="parent-tab-chip ${activeTab === 'academics' ? 'active' : ''}" data-action="parent-tab:academics">Academics</button>
            <button type="button" class="parent-tab-chip ${activeTab === 'fees' ? 'active' : ''}" data-action="parent-tab:fees">Fees ${feeBalance > 0 ? `<span class="chip-alert">•</span>` : ''}</button>
            <button type="button" class="parent-tab-chip ${activeTab === 'attendance' ? 'active' : ''}" data-action="parent-tab:attendance">Attendance</button>
            <button type="button" class="parent-tab-chip ${activeTab === 'transport' ? 'active' : ''}" data-action="parent-tab:transport">Bus & Safety</button>
          </div>

          <!-- Scrollable Phone Screen -->
          <div class="parent-phone-screen">
            ${tabContentHtml}
          </div>

          <!-- Bottom Mobile App Bar -->
          <div class="parent-phone-bottom-bar">
            <button type="button" class="parent-bottom-tab ${activeTab === 'home' ? 'active' : ''}" data-action="parent-tab:home">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>Home</span>
            </button>
            <button type="button" class="parent-bottom-tab ${activeTab === 'academics' ? 'active' : ''}" data-action="parent-tab:academics">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              <span>Academics</span>
            </button>
            <button type="button" class="parent-bottom-tab ${activeTab === 'fees' ? 'active' : ''}" data-action="parent-tab:fees">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <span>Fees</span>
            </button>
            <button type="button" class="parent-bottom-tab ${activeTab === 'attendance' ? 'active' : ''}" data-action="parent-tab:attendance">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>Attendance</span>
            </button>
            <button type="button" class="parent-bottom-tab ${activeTab === 'transport' ? 'active' : ''}" data-action="parent-tab:transport">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <span>Bus</span>
            </button>
          </div>
        </div>
      </div>
    ` : `
      <!-- DESKTOP EXPANSIVE DASHBOARD CONTAINER -->
      <div class="parent-desktop-container">
        <!-- Desktop Student Hero Card -->
        <div class="parent-desktop-hero">
          <div class="desktop-hero-left">
            <div class="desktop-student-avatar" style="background:${isAanya ? '#1d4ed8' : '#059669'}">${initials(s.name)}</div>
            <div>
              <div style="display:flex;align-items:center;gap:8px">
                <h2 style="font-size:22px;font-weight:800;color:#0f172a;margin:0">${esc(s.name)}</h2>
                <span class="pill green" style="font-weight:700">Enrolled · Regular</span>
                <span class="pill purple" style="font-weight:700">${esc(house)}</span>
              </div>
              <div style="font-size:12px;color:#64748b;margin-top:4px">
                Class: <strong>${esc(s.grade)} ${esc(s.section)}</strong> · Roll No: <strong>${esc(s.roll)}</strong> · Student ID: <strong>${esc(s.id)}</strong> · Class Teacher: <strong>${esc(classTeacher)}</strong> · ${esc(room)}
              </div>
            </div>
          </div>
          <div class="desktop-hero-actions">
            <button type="button" class="btn small" data-action="open-report-card:${s.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              CBSE Report Card
            </button>
            <button type="button" class="btn small" data-action="open-admit-card:${s.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
              Board Hall Ticket
            </button>
            ${feeBalance > 0 ? `
              <button type="button" class="btn small primary" data-action="parent-open-pay-modal">
                Pay Fees (${money(feeBalance)})
              </button>
            ` : `
              <button type="button" class="btn small" data-action="parent-open-pay-modal">
                Advance Fee Payment
              </button>
            `}
          </div>
        </div>

        <!-- Desktop Navigation Tabs -->
        <div class="parent-desktop-tabs">
          <button type="button" class="parent-desk-tab ${activeTab === 'home' ? 'active' : ''}" data-action="parent-tab:home">
            ${icon('grid')} Overview Dashboard
          </button>
          <button type="button" class="parent-desk-tab ${activeTab === 'academics' ? 'active' : ''}" data-action="parent-tab:academics">
            ${icon('user')} Academic Progress & Exam Marksheets
          </button>
          <button type="button" class="parent-desk-tab ${activeTab === 'fees' ? 'active' : ''}" data-action="parent-tab:fees">
            ${icon('wallet')} Fee Ledger & Online Payments ${feeBalance > 0 ? `<span class="badge-count orange">${money(feeBalance)}</span>` : ''}
          </button>
          <button type="button" class="parent-desk-tab ${activeTab === 'attendance' ? 'active' : ''}" data-action="parent-tab:attendance">
            ${icon('calendar')} Attendance & Digital Leave Center
          </button>
          <button type="button" class="parent-desk-tab ${activeTab === 'transport' ? 'active' : ''}" data-action="parent-tab:transport">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            Bus Transit & Dismissal Safety Pass
          </button>
        </div>

        <!-- Desktop Tab Body -->
        <div class="parent-desktop-body">
          ${tabContentHtml}
        </div>
      </div>
    `}
  `;
}

// 2. Tab Content Renderer
function renderParentTabBody(activeTab, s, isAanya, termGPA, termGrade, termRank, classTeacher, house, room, busRoute, currentPeriod, subjectScores, fees, feeBalance, homework, leaves, consents) {
  if (activeTab === 'home') {
    return `
      <!-- Live Transit Status Alert Banner -->
      <div class="parent-live-transit-banner">
        <div class="transit-banner-left">
          <span class="pulsing-beacon"></span>
          <div>
            <strong>LIVE BUS TRANSIT: Route ${busRoute.id} (${busRoute.name})</strong>
            <p>${busRoute.status} · ETA ${busRoute.eta} at ${busRoute.stop}</p>
          </div>
        </div>
        <button type="button" class="btn micro" data-action="parent-tab:transport">Track Bus</button>
      </div>

      <!-- Currently in Class (Live Bell Progress) -->
      <div class="parent-live-bell-card">
        <div class="live-bell-head">
          <span class="bell-live-pill">CURRENTLY IN CLASS</span>
          <span class="bell-time-meta">${currentPeriod.period}</span>
        </div>
        <div class="live-bell-title">${currentPeriod.subject}</div>
        <div class="live-bell-sub">${currentPeriod.room} · Faculty: ${currentPeriod.teacher}</div>
        <div class="live-bell-progress-wrap">
          <div class="live-bell-progress-fill" style="width:${currentPeriod.progress}%"></div>
        </div>
        <div class="live-bell-next">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          ${currentPeriod.upNext}
        </div>
      </div>

      <!-- 4 Quick Actions Grid -->
      <div class="parent-quick-grid">
        <button type="button" class="parent-quick-action" data-action="open-report-card:${s.id}">
          <div class="quick-icon-wrap" style="background:#eff6ff;color:#1d4ed8">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <span class="quick-title">CBSE Report Card</span>
          <span class="quick-sub">View Signed</span>
        </button>

        <button type="button" class="parent-quick-action" data-action="open-admit-card:${s.id}">
          <div class="quick-icon-wrap" style="background:#f5f3ff;color:#7c3aed">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
          </div>
          <span class="quick-title">Board Admit Card</span>
          <span class="quick-sub">Hall Ticket</span>
        </button>

        <button type="button" class="parent-quick-action" data-action="parent-open-pay-modal">
          <div class="quick-icon-wrap" style="background:${feeBalance > 0 ? '#fff7ed;color:#ea580c' : '#f0fdf4;color:#16a34a'}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          </div>
          <span class="quick-title">Fee Payment</span>
          <span class="quick-sub">${feeBalance > 0 ? money(feeBalance) : 'Settled ✓'}</span>
        </button>

        <button type="button" class="parent-quick-action" data-action="parent-open-leave-modal">
          <div class="quick-icon-wrap" style="background:#fef2f2;color:#dc2626">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <span class="quick-title">Apply for Leave</span>
          <span class="quick-sub">Sick / Casual</span>
        </button>
      </div>

      <!-- Today's Homework Section -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <h3 class="parent-card-title">Active Homework & Assignments</h3>
            <p class="parent-card-subtitle">${homework.length} tasks scheduled for this week</p>
          </div>
          <span class="pill blue" style="font-size:10px;font-weight:700">Digital Diary</span>
        </div>
        <div class="parent-homework-list">
          ${homework.map(hw => `
            <div class="parent-homework-item">
              <div class="hw-item-left">
                <span class="pill gray" style="font-size:10px;font-weight:700">${hw.subject}</span>
                <strong class="hw-item-title">${hw.title}</strong>
                <p class="hw-item-desc">${hw.description}</p>
                <div class="hw-item-meta">
                  <span>Due: <strong>${hw.due}</strong></span> · 
                  <span>Faculty: ${hw.teacher}</span>
                </div>
              </div>
              <div class="hw-item-right">
                ${hw.status === 'Submitted' ? '<span class="pill green" style="font-weight:700">Submitted ✓</span>' : 
                  hw.status.startsWith('Graded') ? `<span class="pill purple" style="font-weight:700">${hw.status}</span>` : 
                  '<span class="pill orange" style="font-weight:700">Pending</span>'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Official Circular & Digital Event Consent -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <h3 class="parent-card-title">School Circulars & Permission Slips</h3>
            <p class="parent-card-subtitle">Official school notices & excursions requiring digital parental sign-off</p>
          </div>
        </div>
        ${consents.map(c => `
          <div class="parent-consent-banner">
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
                <span class="pill ${c.signed ? 'green' : 'orange'}" style="font-size:9.5px;font-weight:700">${c.signed ? 'CONSENT GRANTED ✓' : 'ACTION REQUIRED'}</span>
                <span style="font-size:11px;color:#64748b">Event Date: ${c.date}</span>
              </div>
              <strong style="font-size:13px;color:#0f172a">${c.title}</strong>
              <p style="font-size:11.5px;color:#475569;margin:3px 0 0">${c.description} (Fee: ${c.fee})</p>
            </div>
            <div>
              ${c.signed ? `
                <span style="font-size:11px;color:#059669;font-weight:700;display:flex;align-items:center;gap:4px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Signed by Kiran Patel
                </span>
              ` : `
                <button type="button" class="btn small primary" data-action="parent-open-consent-modal:${c.id}">
                  Review & Sign
                </button>
              `}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Afternoon Dismissal Gate Security Pass -->
      <div class="parent-gate-card">
        <div class="gate-card-header">
          <div>
            <span class="pill green" style="font-size:9.5px;font-weight:700">CAMPUS DISMISSAL PASS</span>
            <h4 style="font-size:14px;font-weight:800;color:#0f172a;margin:2px 0 0">Authorized Pickup Verification</h4>
          </div>
          <button type="button" class="btn micro" data-action="parent-gate-refresh-pin" title="Regenerate Security PIN">Refresh PIN</button>
        </div>

        <div class="gate-card-body">
          <div class="gate-qr-box">
            <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="#ffffff" rx="6"/>
              <path d="M10 10 H40 V40 H10 Z M18 18 V32 H32 V18 Z M22 22 H28 V28 H22 Z" fill="#0f172a"/>
              <path d="M60 10 H90 V40 H60 Z M68 18 V32 H82 V18 Z M72 22 H78 V28 H72 Z" fill="#0f172a"/>
              <path d="M10 60 H40 V90 H10 Z M18 68 V82 H32 V68 Z M22 72 H28 V78 H22 Z" fill="#0f172a"/>
              <rect x="50" y="50" width="10" height="10" fill="#0f172a"/>
              <rect x="70" y="50" width="10" height="10" fill="#0f172a"/>
              <rect x="60" y="70" width="20" height="10" fill="#0f172a"/>
              <rect x="80" y="80" width="10" height="10" fill="#0f172a"/>
            </svg>
            <div style="font-size:9px;color:#64748b;margin-top:2px;font-weight:600">Scan at Security Gate</div>
          </div>

          <div class="gate-info-box">
            <div class="gate-pin-badge">
              <span>DISMISSAL SECURITY PIN:</span>
              <strong class="gate-pin-digits">${state.parentGatePin || '4819'}</strong>
            </div>
            <div style="font-size:11px;color:#475569;margin-top:6px;line-height:1.4">
              Authorized Guardians: <strong>Kiran Patel (Father)</strong>, <strong>Sunita Patel (Mother)</strong>. Valid for today's dismissal at <strong>02:45 PM</strong>.
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (activeTab === 'academics') {
    return `
      <!-- Academic KPI Banner -->
      <div class="parent-academics-hero">
        <div class="academic-hero-stat">
          <span class="acad-stat-lbl">CURRENT TERM GPA</span>
          <div class="acad-stat-val" style="color:#1d4ed8">${termGPA}</div>
          <span class="acad-stat-sub">${termGrade}</span>
        </div>
        <div class="academic-hero-stat">
          <span class="acad-stat-lbl">CLASS PERCENTILE</span>
          <div class="acad-stat-val" style="color:#059669">${termRank}</div>
          <span class="acad-stat-sub">Across 32 Students</span>
        </div>
        <div class="academic-hero-stat">
          <span class="acad-stat-lbl">ATTENDANCE QUOTA</span>
          <div class="acad-stat-val" style="color:#7c3aed">${s.attendance || '96%'}</div>
          <span class="acad-stat-sub">CBSE Board Eligible ✓</span>
        </div>
      </div>

      <!-- Document Download Actions -->
      <div class="parent-doc-actions-row">
        <button type="button" class="btn primary" style="flex:1" data-action="open-report-card:${s.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          View Signed CBSE Report Card
        </button>
        <button type="button" class="btn" style="flex:1" data-action="open-admit-card:${s.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
          Download Board Hall Ticket
        </button>
      </div>

      <!-- Subject Score Performance Table -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <h3 class="parent-card-title">Scholastic Evaluation Matrix</h3>
            <p class="parent-card-subtitle">Official subject-wise marks, practical weights, and CBSE 9-point grades</p>
          </div>
          <span class="pill green" style="font-weight:700">Results Published</span>
        </div>

        <div class="parent-subject-grid">
          ${subjectScores.map(sub => `
            <div class="parent-subject-card">
              <div class="subj-card-head">
                <div>
                  <strong>${sub.subject}</strong>
                  <span style="font-size:10px;color:#64748b;margin-left:4px">(${sub.code})</span>
                </div>
                <span class="pill blue" style="font-weight:800">${sub.grade}</span>
              </div>
              <div class="subj-score-row">
                <div class="subj-score-box">
                  <span class="subj-sub-lbl">Theory</span>
                  <strong>${sub.theory} / ${sub.maxT}</strong>
                </div>
                <div class="subj-score-box">
                  <span class="subj-sub-lbl">Practical</span>
                  <strong>${sub.prac} / ${sub.maxP}</strong>
                </div>
                <div class="subj-score-box highlight">
                  <span class="subj-sub-lbl">Total</span>
                  <strong>${sub.total} / ${sub.maxT + sub.maxP}</strong>
                </div>
              </div>
              <div class="subj-progress-track">
                <div class="subj-progress-fill" style="width:${sub.pct || 90}%"></div>
              </div>
              <div class="subj-teacher-remark">
                <em>"${sub.remark}"</em>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Teacher Pedagogical Remarks -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <h3 class="parent-card-title">Class Teacher Pedagogical Evaluation</h3>
            <p class="parent-card-subtitle">Entered by ${classTeacher} for ${s.name}</p>
          </div>
        </div>
        <div class="parent-pedagogical-box">
          <p style="margin:0;font-size:13px;line-height:1.6;color:#1e293b">
            <em>"Aanya is an exceptionally focused learner who consistently exemplifies analytical excellence and peer support. She maintains meticulous lab observations and shows remarkable leadership during collaborative STEM symposiums. Highly recommended for the upcoming Inter-School Mathematics Olympiad."</em>
          </p>
          <div style="margin-top:10px;display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#64748b">
            <span>Evaluator: <strong>${classTeacher}</strong> (Class Teacher & Academic Coordinator)</span>
            <span>Attested on 24-Nov-2026</span>
          </div>
        </div>
      </div>
    `;
  }

  if (activeTab === 'fees') {
    return `
      <!-- Fee Balance Card -->
      <div class="parent-fee-hero ${feeBalance > 0 ? 'due' : 'settled'}">
        <div class="fee-hero-top">
          <div>
            <span class="fee-hero-badge">${feeBalance > 0 ? 'OUTSTANDING ACCOUNT BALANCE' : 'ACCOUNT SETTLED'}</span>
            <div class="fee-hero-amt">${money(feeBalance)}</div>
          </div>
          <div>
            ${feeBalance > 0 ? `
              <button type="button" class="btn primary" style="padding:10px 22px;font-weight:700" data-action="parent-open-pay-modal">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                Pay Outstanding Fees
              </button>
            ` : `
              <button type="button" class="btn small" data-action="parent-open-pay-modal">
                Pay Advance Fees
              </button>
            `}
          </div>
        </div>
        <div class="fee-hero-meta">
          <span>Billing Period: <strong>Term 2 (2026–27)</strong></span> · 
          <span>Next Due Date: <strong>30-Nov-2026</strong></span> · 
          <span>Payment Gateway: <strong>Verified UPI / NetBanking / Cards</strong></span>
        </div>
      </div>

      <!-- Itemized Fee Breakdown -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <h3 class="parent-card-title">Itemized Fee Structure · ${s.name}</h3>
            <p class="parent-card-subtitle">Approved school board fee schedule for ${s.grade}</p>
          </div>
          <span class="pill green" style="font-weight:700">Receipts Verified</span>
        </div>

        <table class="table" style="font-size:12px">
          <thead>
            <tr>
              <th>FEE HEAD / COMPONENT</th>
              <th>BILLING CYCLE</th>
              <th>INVOICED AMOUNT</th>
              <th>PAID AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Tuition & Academic Instructional Fee</strong></td>
              <td>Term 2 (Quarterly)</td>
              <td>₹12,000</td>
              <td>₹12,000</td>
              <td><span class="pill green">Settled</span></td>
            </tr>
            <tr>
              <td><strong>Science & Computer Laboratory Fee</strong></td>
              <td>Term 2 (Quarterly)</td>
              <td>₹2,500</td>
              <td>₹2,500</td>
              <td><span class="pill green">Settled</span></td>
            </tr>
            <tr>
              <td><strong>Air-Conditioned Bus Transport (Route 02)</strong></td>
              <td>Term 2 (Quarterly)</td>
              <td>₹3,500</td>
              <td>${feeBalance > 0 ? '₹0' : '₹3,500'}</td>
              <td><span class="pill ${feeBalance > 0 ? 'orange' : 'green'}">${feeBalance > 0 ? 'Pending' : 'Settled'}</span></td>
            </tr>
            <tr>
              <td><strong>Co-Curricular & Sports Training Fee</strong></td>
              <td>Term 2 (Quarterly)</td>
              <td>₹1,000</td>
              <td>${feeBalance > 0 ? '₹0' : '₹1,000'}</td>
              <td><span class="pill ${feeBalance > 0 ? 'orange' : 'green'}">${feeBalance > 0 ? 'Pending' : 'Settled'}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Fee Invoices & Payment History Ledger -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <h3 class="parent-card-title">Payment Receipts & Invoice Ledger</h3>
            <p class="parent-card-subtitle">Download official school fee payment receipts for tax and accounting</p>
          </div>
        </div>

        <div class="parent-receipts-list">
          ${fees.map(f => `
            <div class="parent-receipt-item">
              <div style="display:flex;align-items:center;gap:12px">
                <div class="receipt-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div>
                  <strong>${f.type} (${f.id})</strong>
                  <div style="font-size:11px;color:#64748b">Due: ${prettyDate(f.due)} · Campus: ${f.campus}</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:12px">
                <div style="text-align:right">
                  <strong>${money(f.paid)}</strong> / ${money(f.amount)}
                  <div>${pill(f.status)}</div>
                </div>
                <button type="button" class="btn small" data-action="parent-view-receipt:${f.id}">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Receipt
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (activeTab === 'attendance') {
    return `
      <!-- Attendance Metric Overview -->
      <div class="parent-att-hero">
        <div class="att-hero-left">
          <div class="att-radial-box">
            <span class="att-pct-big">${s.attendance || '96%'}</span>
            <span class="att-pct-lbl">OVERALL</span>
          </div>
          <div>
            <span class="pill green" style="font-weight:700">COMPLIANT WITH CBSE RULE</span>
            <h3 style="font-size:16px;font-weight:800;color:#0f172a;margin:4px 0 2px">Eligible for Term Board Examinations</h3>
            <p style="font-size:11.5px;color:#64748b;margin:0">Minimum threshold: 75.0% · Attended 92 of 96 instructional days</p>
          </div>
        </div>
        <button type="button" class="btn primary small" data-action="parent-open-leave-modal">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Apply for Leave
        </button>
      </div>

      <!-- Weekly Attendance Register Strip -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <h3 class="parent-card-title">Current Week Attendance Matrix</h3>
            <p class="parent-card-subtitle">Marked daily by Class Teacher ${classTeacher}</p>
          </div>
        </div>
        <div class="parent-week-att-strip">
          ${['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'].map((d, idx) => {
            let status = (db.attendance[s.id] || [])[idx] || 'Present';
            let color = status === 'Present' ? '#16a34a' : status === 'Late' ? '#d97706' : '#dc2626';
            return `
              <div class="parent-att-day-card">
                <div class="att-day-lbl">${d}</div>
                <div class="att-day-badge" style="background:${color}">${status[0]}</div>
                <div class="att-day-status" style="color:${color}">${status}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Leave Requests & Applications Log -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <h3 class="parent-card-title">Leave Applications & Approval Status</h3>
            <p class="parent-card-subtitle">Historical absence requests and approvals</p>
          </div>
          <button type="button" class="btn micro" data-action="parent-open-leave-modal">+ New Request</button>
        </div>

        <div class="parent-leave-list">
          ${leaves.length === 0 ? `
            <div style="padding:20px;text-align:center;color:#64748b;font-size:12px">No recent leave requests. Your ward has 100% regular attendance this fortnight.</div>
          ` : leaves.map(l => `
            <div class="parent-leave-item">
              <div style="flex:1">
                <div style="display:flex;align-items:center;gap:6px">
                  <span class="pill ${l.status === 'Approved' ? 'green' : 'orange'}" style="font-size:10px;font-weight:700">${l.status}</span>
                  <strong style="font-size:13px">${l.type} (${l.days} days)</strong>
                </div>
                <p style="font-size:12px;color:#475569;margin:3px 0 0">${l.reason}</p>
                <div style="font-size:10.5px;color:#94a3b8;margin-top:4px">
                  Dates: <strong>${l.from}</strong> to <strong>${l.to}</strong> · Approver: ${l.approver}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (activeTab === 'transport') {
    return `
      <!-- Bus Transit Route Hero Card -->
      <div class="parent-card">
        <div class="parent-card-header">
          <div>
            <span class="pill blue" style="font-weight:700">TRANSPORT SERVICE</span>
            <h3 class="parent-card-title" style="margin-top:2px">Route ${busRoute.id}: ${busRoute.name}</h3>
            <p class="parent-card-subtitle">Designated Stop: <strong>${busRoute.stop}</strong></p>
          </div>
          <span class="pill green" style="font-weight:700">${busRoute.status}</span>
        </div>

        <!-- Live Schematic Route Map Widget -->
        <div class="parent-route-map-box">
          <div class="route-map-header">
            <span>LIVE BUS PROGRESSION MAP</span>
            <span style="color:#059669;font-weight:700">GPS ACTIVE · 4 MINS TO YOUR STOP</span>
          </div>

          <div class="route-schematic">
            <div class="schematic-stop passed">
              <span class="stop-dot">✓</span>
              <span class="stop-name">NIS Campus (Departed 07:05 AM)</span>
            </div>
            <div class="schematic-line passed"></div>
            <div class="schematic-stop passed">
              <span class="stop-dot">✓</span>
              <span class="stop-name">Stop 1: City Light Circle</span>
            </div>
            <div class="schematic-line active"></div>
            <div class="schematic-stop current">
              <span class="stop-dot pulse">🚌</span>
              <span class="stop-name">Stop 2: Althan Crossing (Now Here)</span>
            </div>
            <div class="schematic-line"></div>
            <div class="schematic-stop target">
              <span class="stop-dot target">📍</span>
              <span class="stop-name"><strong>Stop 4: ${busRoute.stop} (Your Stop)</strong></span>
            </div>
            <div class="schematic-line"></div>
            <div class="schematic-stop">
              <span class="stop-dot">○</span>
              <span class="stop-name">Stop 5: Vesu Terminus</span>
            </div>
          </div>
        </div>

        <!-- Driver & Vehicle Details -->
        <div class="parent-driver-grid">
          <div class="driver-info-box">
            <span class="driver-lbl">VEHICLE NUMBER</span>
            <strong class="driver-val">${busRoute.vehicle}</strong>
            <span style="font-size:10px;color:#059669">Speed Governor & CCTV Active</span>
          </div>
          <div class="driver-info-box">
            <span class="driver-lbl">PRIMARY DRIVER</span>
            <strong class="driver-val">${busRoute.driver}</strong>
            <span style="font-size:10px;color:#64748b">Verified Heavy Vehicle License</span>
          </div>
          <div class="driver-info-box">
            <span class="driver-lbl">TIMINGS</span>
            <strong class="driver-val">Pickup ${busRoute.pickup} · Drop ${busRoute.drop}</strong>
            <span style="font-size:10px;color:#64748b">Strict 5-minute buffer</span>
          </div>
        </div>

        <div style="margin-top:12px;display:flex;gap:8px">
          <a href="tel:${busRoute.phone}" class="btn primary small" style="text-decoration:none;display:inline-flex;align-items:center;gap:6px">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Driver (${busRoute.driver})
          </a>
          <button type="button" class="btn small" data-action="new:tickets">
            Report Transit Delay
          </button>
        </div>
      </div>

      <!-- Campus Dismissal Security Pass -->
      <div class="parent-gate-card" style="margin-top:16px">
        <div class="gate-card-header">
          <div>
            <span class="pill green" style="font-size:9.5px;font-weight:700">AFTERNOON DISMISSAL PASS</span>
            <h4 style="font-size:14px;font-weight:800;color:#0f172a;margin:2px 0 0">Authorized Guardians & Security Gate PIN</h4>
          </div>
          <button type="button" class="btn micro" data-action="parent-gate-refresh-pin">New PIN</button>
        </div>

        <div class="gate-card-body">
          <div class="gate-qr-box">
            <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="#ffffff" rx="6"/>
              <path d="M10 10 H40 V40 H10 Z M18 18 V32 H32 V18 Z M22 22 H28 V28 H22 Z" fill="#0f172a"/>
              <path d="M60 10 H90 V40 H60 Z M68 18 V32 H82 V18 Z M72 22 H78 V28 H72 Z" fill="#0f172a"/>
              <path d="M10 60 H40 V90 H10 Z M18 68 V82 H32 V68 Z M22 72 H28 V78 H22 Z" fill="#0f172a"/>
              <rect x="50" y="50" width="10" height="10" fill="#0f172a"/>
              <rect x="70" y="50" width="10" height="10" fill="#0f172a"/>
              <rect x="60" y="70" width="20" height="10" fill="#0f172a"/>
              <rect x="80" y="80" width="10" height="10" fill="#0f172a"/>
            </svg>
            <div style="font-size:9px;color:#64748b;margin-top:2px;font-weight:600">Scan at Dismissal</div>
          </div>

          <div class="gate-info-box">
            <div class="gate-pin-badge">
              <span>SECURITY VERIFICATION PIN:</span>
              <strong class="gate-pin-digits">${state.parentGatePin || '4819'}</strong>
            </div>
            <div style="font-size:11px;color:#475569;margin-top:6px;line-height:1.4">
              Registered Guardians: <strong>Mr. Kiran Patel (Father)</strong>, <strong>Mrs. Sunita Patel (Mother)</strong>, <strong>Mr. Ramesh Patel (Grandfather)</strong>.
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return '';
}


function reports() {
  let total = visible(db.leads).length;
  let admit = visible(db.leads).filter(x => x.stage === 'Admitted').length;
  let inv = visible(db.fees).reduce((n, x) => n + +x.amount, 0);
  let paid = visible(db.fees).reduce((n, x) => n + +x.paid, 0);

  return `
    ${head('Reports & insights', 'An action-ready view for leadership and department heads.', btn('Download summary', 'export-report', '', 'download'))}
    <div class="grid kpis">
      ${kpi('Admission conversion', `${total ? Math.round(admit / total * 100) : 0}%`, 'Lead cohort conversion', 'chart')}
      ${kpi('Fee collection', `${inv ? Math.round(paid / inv * 100) : 0}%`, 'Collected / Invoiced', 'wallet', 'green')}
      ${kpi('Attendance rate', '94.8%', 'Weekly average', 'calendar', 'purple')}
      ${kpi('Open tickets', visible(db.tickets).filter(x => x.status !== 'Resolved').length, 'Unresolved service requests', 'headset', 'orange')}
    </div>
    <div class="grid two-col">
      <div class="card card-pad">
        <div class="section-title">
          <h2>Admission funnel</h2>
          <small>${esc(state.campus)} cohort</small>
        </div>
        ${['New enquiry', 'Contacted', 'School visit', 'Application', 'Admitted'].map((stage, i) => {
          let count = visible(db.leads).filter(x => x.stage === stage).length;
          let maxCount = Math.max(1, ...['New enquiry', 'Contacted', 'School visit', 'Application', 'Admitted'].map(z => visible(db.leads).filter(x => x.stage === z).length));
          return `
            <div class="progress-row">
              <div class="progress-meta"><span>${stage}</span><b>${count} records</b></div>
              <div class="progress-track">
                <div class="progress-fill ${['', 'purple', 'orange', 'green', 'green'][i]}" style="width:${Math.max(10, Math.round(count / maxCount * 100))}%"></div>
              </div>
            </div>
          `;
        }).join('')}
        <div class="insight-card">
          Data dynamically reflects your changes in Admissions. Real-time metrics recalculate automatically.
        </div>
      </div>
      <div class="card card-pad">
        <div class="section-title"><h2>Leadership actions</h2></div>
        <div class="activity" style="cursor:pointer" data-page="fees">
          <span class="activity-icon orange">${icon('wallet')}</span>
          <div>
            <strong>Review overdue accounts</strong>
            <p>${visible(db.fees).filter(x => x.status === 'Overdue').length} overdue invoices</p>
          </div>
        </div>
        <div class="activity" style="cursor:pointer" data-page="admissions">
          <span class="activity-icon">${icon('users')}</span>
          <div>
            <strong>Follow up new enquiries</strong>
            <p>${visible(db.leads).filter(x => x.stage === 'New enquiry').length} families awaiting first contact</p>
          </div>
        </div>
        <div class="activity" style="cursor:pointer" data-page="helpdesk">
          <span class="activity-icon green">${icon('headset')}</span>
          <div>
            <strong>Close parent requests</strong>
            <p>${visible(db.tickets).filter(x => x.status === 'Open').length} open tickets</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function settings() {
  let s = db.settings;
  return `
    ${head('School settings', 'Configure the demonstration identity and manage sample data.', btn('Reset demo data', 'reset', 'danger'))}
    <div class="grid two-col">
      <div class="card card-pad">
        <div class="section-title"><h2>School profile</h2></div>
        <form id="settings-form" class="form-grid">
          ${[
            ['school', 'School name'],
            ['year', 'Academic year'],
            ['email', 'School email'],
            ['phone', 'Contact number'],
            ['address', 'Location']
          ].map(([key, label]) => `
            <div class="form-field ${key === 'address' ? 'full' : ''}">
              <label for="set-${key}">${label}</label>
              <input id="set-${key}" name="${key}" value="${esc(s[key])}" required>
            </div>
          `).join('')}
          <div class="form-field full">
            <button class="btn primary" type="submit">Save profile</button>
          </div>
        </form>
      </div>
      <div class="card card-pad">
        <div class="section-title"><h2>Demo environment</h2></div>
        <div class="detail-row"><span>Data storage</span><b>SQLite Database & Local Cache</b></div>
        <div class="detail-row"><span>Academic year</span><b>${esc(s.year)}</b></div>
        <div class="detail-row"><span>Campuses</span><b>Main Campus + West Campus</b></div>
        <div class="detail-row"><span>Backend status</span><b style="color:#10b981">Node.js Express & SQLite Active</b></div>
        <div class="insight-card">
          Use <strong>Reset demo data</strong> anytime to return all sample records to their initial walkthrough state.
        </div>
      </div>
    </div>
  `;
}

function overlay() {
  let o = state.overlay;
  if (!o) return '';
  if (o.type === 'form') return formOverlay(o);
  if (o.type === 'detail') return detailOverlay(o);

  return `
    <div class="overlay modal-wrap">
      <div class="modal ${o.wide ? 'wide' : ''} ${o.docModal ? 'doc-modal' : ''}" role="dialog" aria-modal="true">
        ${o.noHead ? '' : `
        <div class="panel-head">
          <div>
            <div class="eyebrow">CAMPUSOS</div>
            <h2>${esc(o.title)}</h2>
          </div>
          <button type="button" class="icon-btn" data-action="close" aria-label="Close">${icon('close')}</button>
        </div>
        `}
        <div class="panel-body">${o.body}</div>
        ${o.noFoot ? '' : `
          <div class="panel-foot">
            <button type="button" class="btn" data-action="close">Close</button>
            ${o.action ? `<button type="button" class="btn primary" data-action="${o.action}">${esc(o.actionLabel || 'Continue')}</button>` : ''}
          </div>
        `}
      </div>
    </div>
  `;
}

function formOverlay(o) {
  let cfg = meta[o.key];
  if (!cfg) return '';
  let record = o.id ? (db[o.key] || []).find(x => x.id === o.id) || {} : {};
  let isNew = !o.id;

  let fields = cfg.fields.map(([key, label, type, required, options]) => {
    let val = record[key];
    if (val === undefined || val === null) {
      if (key === 'campus') {
        val = state.campus === 'All campuses' ? 'Main Campus' : state.campus;
      } else if (key === 'status') {
        val = options ? (options.includes('Active') ? 'Active' : options.includes('Open') ? 'Open' : options.includes('Pending') ? 'Pending' : options[0]) : 'Active';
      } else if (key === 'stage') {
        val = 'New enquiry';
      } else if (key === 'paid') {
        val = 0;
      } else if (type === 'date') {
        val = new Date().toISOString().slice(0, 10);
      } else if (key === 'due' && type === 'text') {
        val = 'Today';
      } else if (key === 'section') {
        val = 'A';
      } else if (key === 'grade') {
        val = options ? options[0] : 'Grade 8';
      } else if (key === 'source') {
        val = 'Website';
      } else if (key === 'owner') {
        val = 'Neha Patel';
      } else if (key === 'priority') {
        val = 'Normal';
      } else if (key === 'channel') {
        val = 'In-app';
      } else if (key === 'audience') {
        val = 'All parents';
      } else if (key === 'department') {
        val = 'Academics';
      } else {
        val = '';
      }
    }

    let inputHtml = '';
    if (type === 'select') {
      inputHtml = `
        <select id="field-${key}" name="${key}" ${required ? 'required' : ''}>
          ${options.map(v => `<option value="${esc(v)}" ${val === v ? 'selected' : ''}>${esc(v)}</option>`).join('')}
        </select>
      `;
    } else if (type === 'textarea') {
      inputHtml = `
        <textarea id="field-${key}" name="${key}" ${required ? 'required' : ''} placeholder="Enter ${label.toLowerCase()}...">${esc(val)}</textarea>
      `;
    } else {
      let extraAttrs = type === 'number' ? 'min="0" step="any"' : '';
      let listAttr = (o.key === 'fees' && key === 'student') ? 'list="student-fee-list"' : '';
      inputHtml = `
        <input id="field-${key}" name="${key}" type="${type}" value="${esc(val)}" ${required ? 'required' : ''} ${extraAttrs} ${listAttr} placeholder="Enter ${label.toLowerCase()}">
      `;
    }

    return `
      <div class="form-field ${type === 'textarea' ? 'full' : ''}">
        <label for="field-${key}">${label}${required ? ' *' : ''}</label>
        ${inputHtml}
      </div>
    `;
  }).join('');

  return `
    <div class="overlay">
      <div class="drawer" role="dialog" aria-modal="true">
        <div class="panel-head">
          <div>
            <div class="eyebrow">${isNew ? 'CREATE RECORD' : 'EDIT RECORD'}</div>
            <h2>${isNew ? cfg.title : 'Edit ' + cfg.title.toLowerCase()}</h2>
          </div>
          <button type="button" class="icon-btn" data-action="close" aria-label="Close">${icon('close')}</button>
        </div>
        <form id="record-form" data-key="${o.key}" data-id="${esc(o.id || '')}">
          <div class="panel-body">
            <div class="form-grid">${fields}</div>
            ${o.key === 'fees' ? `
              <datalist id="student-fee-list">
                ${db.students.map(s => `<option value="${esc(s.name)}">${esc(s.grade)} ${esc(s.section)} · ${esc(s.campus)}</option>`).join('')}
              </datalist>
            ` : ''}
          </div>
          <div class="panel-foot">
            <button type="button" class="btn" data-action="close">Cancel</button>
            <button class="btn primary" type="submit">${isNew ? 'Create record' : 'Save changes'}</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function detailOverlay(o) {
  let r = (db[o.key] || []).find(x => x.id === o.id);
  if (!r) return '';

  let display = r.name || r.subject || r.title || r.student || r.route || r.item || 'Details';
  let rows = Object.entries(r).filter(([k]) => k !== 'body').map(([k, v]) => `
    <div class="detail-row">
      <span>${esc(k.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()))}</span>
      <b>${k === 'amount' || k === 'paid' || k === 'balance' ? money(v) : esc(v)}</b>
    </div>
  `).join('');

  let extra = '';
  if (o.key === 'fees') {
    let bal = Math.max(0, +r.amount - +r.paid);
    extra = `
      <div class="receipt-box">
        <div class="receipt-header">
          <h3>${esc(db.settings.school)}</h3>
          <p>Fee invoice · ${esc(r.id)}</p>
        </div>
        <div class="detail-row"><span>Student</span><b>${esc(r.student)}</b></div>
        <div class="detail-row"><span>Fee head</span><b>${esc(r.type)}</b></div>
        <div class="detail-row"><span>Total amount</span><b>${money(r.amount)}</b></div>
        <div class="detail-row"><span>Total paid</span><b>${money(r.paid)}</b></div>
        <div class="detail-row"><span>Balance due</span><b style="color:${bal > 0 ? '#c76a68' : '#27a477'}">${money(bal)}</b></div>
      </div>
      ${bal > 0 ? `
        <div class="insight-card">
          <strong>Balance due:</strong> ${money(bal)}
          <div class="quick-pay-btns">
            <button type="button" class="quick-btn" data-action="quick-pay:${esc(r.id)}:${bal}">Pay Full (${money(bal)})</button>
            <button type="button" class="quick-btn" data-action="quick-pay:${esc(r.id)}:${Math.round(bal / 2)}">Pay Half (${money(Math.round(bal / 2))})</button>
          </div>
        </div>
        <form id="payment-form" data-invoice="${esc(r.id)}">
          <div class="form-field mt16">
            <label for="payment-amount">Custom payment amount (₹)</label>
            <input id="payment-amount" type="number" min="1" max="${bal}" placeholder="Enter amount" required>
          </div>
          <button class="btn primary mt16" type="submit">Record payment</button>
        </form>
      ` : `
        <div class="insight-card" style="border-left-color:#20a57d;background:#edfbf6">
          <strong style="color:#1d8c6b">Invoice fully paid</strong>
          <p style="margin:4px 0 0;font-size:11px;color:#2c745d">All dues cleared for this demo account.</p>
        </div>
      `}
    `;
  }

  let stage = '';
  if (o.key === 'leads') {
    stage = `
      <div class="form-field mt16">
        <label for="stage-update">Move to stage</label>
        <select id="stage-update">
          ${meta.leads.fields.find(f => f[0] === 'stage')[4].map(s => `<option ${s === r.stage ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>
      <button type="button" class="btn primary mt16" data-action="stage:${esc(r.id)}">Update stage</button>
      ${r.stage === 'Admitted' ? `
        <button type="button" class="btn green-btn mt16" data-action="enrol-lead:${esc(r.id)}">${icon('graduation')} Enrol as Student</button>
      ` : ''}
    `;
  }

  let resolve = '';
  if (o.key === 'tickets') {
    resolve = `
      <div class="form-field mt16">
        <label for="ticket-update">Request status</label>
        <select id="ticket-update">
          <option ${r.status === 'Open' ? 'selected' : ''}>Open</option>
          <option ${r.status === 'In progress' ? 'selected' : ''}>In progress</option>
          <option ${r.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
        </select>
      </div>
      <button type="button" class="btn primary mt16" data-action="ticket:${esc(r.id)}">Update status</button>
    `;
  }

  let msg = o.key === 'messages' && r.body ? `<div class="insight-card"><strong>Message text:</strong><br>${esc(r.body)}</div>` : '';

  return `
    <div class="overlay">
      <div class="drawer" role="dialog" aria-modal="true">
        <div class="panel-head">
          <div>
            <div class="eyebrow">${esc(r.id)} · RECORD DETAILS</div>
            <h2>${esc(display)}</h2>
          </div>
          <button type="button" class="icon-btn" data-action="close" aria-label="Close">${icon('close')}</button>
        </div>
        <div class="panel-body">
          <div class="detail-hero">
            ${avatar(display, 'lilac')}
            <div>
              <h3>${esc(display)}</h3>
              <p>${esc(r.grade || r.role || r.category || r.type || r.campus || 'Northstar School')}</p>
            </div>
          </div>
          <div class="detail-list">${rows}</div>
          ${msg}${stage}${extra}${resolve}
          <div class="mt16">
            <div class="eyebrow">ACTIVITY TIMELINE</div>
            <div class="timeline">
              <div class="timeline-item">
                <strong>Record inspected in demo session</strong>
                <small>Updated locally</small>
              </div>
              <div class="timeline-item">
                <strong>Added to Northstar database</strong>
                <small>Illustrative records</small>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-foot">
          <button type="button" class="btn danger" data-action="delete:${o.key}:${esc(r.id)}">Delete</button>
          <button type="button" class="btn primary" data-action="edit:${o.key}:${esc(r.id)}">Edit record</button>
        </div>
      </div>
    </div>
  `;
}

function toast(s) {
  state.toast = s;
  render();
  setTimeout(() => {
    if (state.toast === s) {
      state.toast = null;
      render();
    }
  }, 3000);
}

function openPage(p, updateHistory = true) {
  state.page = p;
  state.filter = 'All';
  state.query = '';
  state.overlay = null;
  state.mobile = false;
  state.view = 'list';

  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('campusos_active_page', p);
    }
  } catch (e) {}

  if (updateHistory && typeof window !== 'undefined' && window.location) {
    if (window.location.hash !== '#/' + p) {
      window.location.hash = '#/' + p;
    }
  }

  render();
  window.scrollTo(0, 0);
}

// Global browser hashchange event listener for Back/Forward navigation
if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => {
    const pageFromHash = parsePageFromHash();
    if (pageFromHash && pageFromHash !== state.page) {
      state.page = pageFromHash;
      state.overlay = null;
      try {
        localStorage.setItem('campusos_active_page', pageFromHash);
      } catch (e) {}
      render();
      window.scrollTo(0, 0);
    }
  });
}

const pageKey = {
  admissions: 'leads',
  students: 'students',
  academics: 'exams',
  fees: 'fees',
  communication: 'messages',
  staff: 'staff',
  transport: 'transport',
  library: 'library',
  assets: 'assets',
  compliance: 'compliance',
  helpdesk: 'tickets'
};

function exportCsv(key) {
  let rows = key === 'report' ? [
    { metric: 'Active Students', value: db.students.filter(x => x.status === 'Active').length },
    { metric: 'Open Leads', value: db.leads.filter(x => x.stage !== 'Admitted').length },
    { metric: 'Fees Invoiced', value: db.fees.reduce((n, x) => n + +x.amount, 0) },
    { metric: 'Fees Collected', value: db.fees.reduce((n, x) => n + +x.paid, 0) },
    { metric: 'Outstanding Fees', value: db.fees.reduce((n, x) => n + Math.max(0, +x.amount - +x.paid), 0) },
    { metric: 'Open Service Tickets', value: db.tickets.filter(x => x.status !== 'Resolved').length }
  ] : db[key] || [];

  if (!rows.length) {
    toast('No records to export');
    return;
  }

  let keys = [...new Set(rows.flatMap(Object.keys))].filter(k => k !== 'body');
  let csv = [
    keys.join(','),
    ...rows.map(r => keys.map(k => `"${String(r[k] ?? '').replace(/"/g, '""')}"`).join(','))
  ].join('\r\n');

  let blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `northstar-${key}-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast('CSV exported successfully');
}

// Global click delegation
document.addEventListener('click', e => {
  // Backdrop click on overlay
  if (e.target.classList.contains('overlay')) {
    state.overlay = null;
    render();
    return;
  }

  // Click outside global search dropdown closes it
  if (!e.target.closest('.searchbox') && state.showGlobalSearch) {
    state.showGlobalSearch = false;
    render();
    return;
  }

  // Navigation page link
  let page = e.target.closest('[data-page]');
  if (page) {
    openPage(page.dataset.page);
    return;
  }

  // Filter tabs
  let filt = e.target.closest('[data-filter]');
  if (filt) {
    state.filter = filt.dataset.filter;
    render();
    return;
  }

  // Open detail
  let open = e.target.closest('[data-open]');
  if (open) {
    let [key, id] = open.dataset.open.split(':');
    state.showGlobalSearch = false;
    state.overlay = { type: 'detail', key, id };
    render();
    return;
  }

  // Attendance button toggle
  let att = e.target.closest('[data-att]');
  if (att) {
    let [id, i] = att.dataset.att.split(':');
    let arr = db.attendance[id] || (db.attendance[id] = Array(5).fill('Unmarked'));
    let states = ['Present', 'Absent', 'Late', 'Excused', 'Unmarked'];
    let nextIdx = (states.indexOf(arr[+i]) + 1) % 5;
    arr[+i] = states[nextIdx];
    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/attendance/mark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: id, dayIdx: +i, status: arr[+i], className: state.attClass })
      }).catch(() => {});
    }
    render();
    return;
  }

  // Stepper button click (+ / -) for marks entry
  let stepBtn = e.target.closest('[data-step]');
  if (stepBtn) {
    let [inputId, delta] = stepBtn.dataset.step.split(':');
    let input = document.getElementById(inputId);
    if (input) {
      let val = (Number(input.value) || 0) + Number(delta);
      let min = input.min !== '' ? Number(input.min) : 0;
      let max = input.max !== '' ? Number(input.max) : 100;
      input.value = Math.max(min, Math.min(max, val));
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return;
  }

  // Quick insert pedagogical remark chip
  let chip = e.target.closest('[data-remark]');
  if (chip) {
    let textarea = document.getElementById('exam-remarks-input');
    if (textarea) {
      textarea.value = chip.dataset.remark;
      textarea.focus();
    }
    return;
  }

  // Actions
  let a = e.target.closest('[data-action]');
  if (!a) return;
  let action = a.dataset.action;

  
  // PARENT PORTAL INTERACTIVE ACTIONS
  if (action.startsWith('parent-device-view:')) {
    state.parentDeviceView = action.slice(19);
    render();
    return;
  }

  if (action.startsWith('parent-select-student:')) {
    state.parentStudentId = action.slice(22);
    render();
    let sel = db.students.find(s => s.id === state.parentStudentId);
    toast(`Viewing records for ${sel ? sel.name : 'Ward'}`);
    return;
  }

  if (action.startsWith('parent-tab:')) {
    state.parentActiveTab = action.slice(11);
    render();
    return;
  }

  if (action === 'parent-gate-refresh-pin') {
    state.parentGatePin = Math.floor(1000 + Math.random() * 9000).toString();
    render();
    toast(`Generated new security dismissal PIN: ${state.parentGatePin}`);
    return;
  }

  if (action === 'parent-open-pay-modal') {
    let currentStudentId = state.parentStudentId || 'ST-1024';
    let s = db.students.find(x => x.id === currentStudentId) || db.students[0];
    let bal = s.balance !== undefined ? s.balance : 0;
    let payAmt = bal > 0 ? bal : 5000;

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: `Pay School Fees Online · ${s.name}`,
      body: `
        <div style="padding:4px 0">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center">
            <div>
              <span style="font-size:11px;color:#64748b;font-weight:700">TOTAL DUE AMOUNT</span>
              <div style="font-size:24px;font-weight:800;color:#1e3a8a">${money(payAmt)}</div>
              <div style="font-size:11px;color:#059669;font-weight:600">${bal > 0 ? 'Term 2 Outstanding Fees' : 'Advance Credit for Term 3'}</div>
            </div>
            <div style="text-align:right">
              <span class="pill blue" style="font-weight:700">${s.grade} ${s.section}</span>
              <div style="font-size:10.5px;color:#64748b;margin-top:4px">Reg ID: ${s.id}</div>
            </div>
          </div>

          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:6px">SELECT PAYMENT METHOD</label>
            <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:8px">
              <div style="border:2px solid #2563eb;background:#eff6ff;padding:10px;border-radius:8px;text-align:center;cursor:pointer">
                <strong style="font-size:12px;color:#1d4ed8;display:block">Instant UPI</strong>
                <span style="font-size:10px;color:#64748b">GPay / PhonePe</span>
              </div>
              <div style="border:1px solid #cbd5e1;background:#fff;padding:10px;border-radius:8px;text-align:center;cursor:pointer">
                <strong style="font-size:12px;color:#334155;display:block">Cards</strong>
                <span style="font-size:10px;color:#64748b">Visa / MasterCard</span>
              </div>
              <div style="border:1px solid #cbd5e1;background:#fff;padding:10px;border-radius:8px;text-align:center;cursor:pointer">
                <strong style="font-size:12px;color:#334155;display:block">Net Banking</strong>
                <span style="font-size:10px;color:#64748b">All Major Banks</span>
              </div>
            </div>
          </div>

          <!-- Dynamic Simulated UPI Box -->
          <div style="background:#ffffff;border:1px dashed #cbd5e1;border-radius:10px;padding:12px;display:flex;align-items:center;gap:14px;margin-bottom:14px">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="#ffffff" rx="4"/>
              <path d="M10 10 H40 V40 H10 Z M18 18 V32 H32 V18 Z M22 22 H28 V28 H22 Z" fill="#0f172a"/>
              <path d="M60 10 H90 V40 H60 Z M68 18 V32 H82 V18 Z M72 22 H78 V28 H72 Z" fill="#0f172a"/>
              <path d="M10 60 H40 V90 H10 Z M18 68 V82 H32 V68 Z M22 72 H28 V78 H22 Z" fill="#0f172a"/>
              <rect x="50" y="50" width="10" height="10" fill="#0f172a"/>
              <rect x="70" y="50" width="10" height="10" fill="#0f172a"/>
              <rect x="60" y="70" width="20" height="10" fill="#0f172a"/>
            </svg>
            <div>
              <div style="font-size:12px;font-weight:700;color:#0f172a">Scan with any UPI App</div>
              <div style="font-size:11px;color:#64748b;margin-top:2px">UPI ID: <code>northstar.fees@icici</code></div>
              <div style="font-size:10px;color:#059669;margin-top:3px;font-weight:600">Zero Transaction Fees · Instant Receipt Generation</div>
            </div>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="btn" data-action="close">Cancel</button>
            <button type="button" class="btn primary" data-action="parent-submit-payment" style="font-weight:700;padding:8px 18px">
              Authorize & Pay ${money(payAmt)}
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'parent-submit-payment') {
    let currentStudentId = state.parentStudentId || 'ST-1024';
    let s = db.students.find(x => x.id === currentStudentId) || db.students[0];
    let prevBal = s.balance || 0;
    let paidAmt = prevBal > 0 ? prevBal : 5000;
    s.balance = 0;

    let f = db.fees.find(x => x.student === s.name && x.status !== 'Paid');
    if (f) {
      f.paid = f.amount;
      f.status = 'Paid';
    }

    save();
    state.overlay = null;
    render();
    toast(`Payment of ${money(paidAmt)} successful! Official receipt generated.`);
    return;
  }

  if (action === 'parent-open-leave-modal') {
    let currentStudentId = state.parentStudentId || 'ST-1024';
    let s = db.students.find(x => x.id === currentStudentId) || db.students[0];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: `Apply for Leave / Absence · ${s.name}`,
      body: `
        <form id="parent-leave-form" onsubmit="event.preventDefault()">
          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">LEAVE CATEGORY</label>
            <select id="parent-leave-type" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              <option value="Medical / Health">Medical / Health (Viral, Orthopedic, Doctor prescribed)</option>
              <option value="Family Occasion">Family Occasion (Wedding, Religious Ceremony)</option>
              <option value="Bereavement">Bereavement / Personal Emergency</option>
              <option value="Sports / Competition">Inter-School Competition / Olympiad</option>
            </select>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
            <div>
              <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">FROM DATE</label>
              <input type="date" id="parent-leave-from" value="2026-11-27" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">TO DATE</label>
              <input type="date" id="parent-leave-to" value="2026-11-28" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
            </div>
          </div>

          <div style="margin-bottom:14px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">REASON & NOTE TO CLASS TEACHER</label>
            <textarea id="parent-leave-reason" rows="3" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px" placeholder="Provide detailed context for the requested absence..."></textarea>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="btn" data-action="close">Cancel</button>
            <button type="button" class="btn primary" data-action="parent-submit-leave" style="font-weight:700">
              Submit to Class Teacher
            </button>
          </div>
        </form>
      `
    };
    render();
    return;
  }

  if (action === 'parent-submit-leave') {
    let currentStudentId = state.parentStudentId || 'ST-1024';
    let s = db.students.find(x => x.id === currentStudentId) || db.students[0];
    let typeEl = document.getElementById('parent-leave-type');
    let fromEl = document.getElementById('parent-leave-from');
    let toEl = document.getElementById('parent-leave-to');
    let reasonEl = document.getElementById('parent-leave-reason');

    let newLeave = {
      id: 'LR-' + Math.floor(100 + Math.random() * 900),
      studentId: s.id,
      studentName: s.name,
      type: typeEl ? typeEl.value : 'Medical / Health',
      from: fromEl ? fromEl.value : '2026-11-27',
      to: toEl ? toEl.value : '2026-11-28',
      days: 2,
      reason: reasonEl && reasonEl.value.trim() ? reasonEl.value.trim() : 'Medical prescribed rest; certificate attached.',
      status: 'Pending',
      approver: 'Class Teacher',
      appliedOn: 'Today'
    };

    if (!db.leaveRequests) db.leaveRequests = [];
    db.leaveRequests.unshift(newLeave);
    save();
    state.overlay = null;
    render();
    toast('Leave request submitted to Class Teacher for approval.');
    return;
  }

  if (action.startsWith('parent-open-consent-modal:')) {
    let consentId = action.slice(26);
    let c = (db.consents || []).find(x => x.id === consentId) || db.consents[0];
    let currentStudentId = state.parentStudentId || 'ST-1024';
    let s = db.students.find(x => x.id === currentStudentId) || db.students[0];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: 'Digital Excursion Permission & Consent Slip',
      body: `
        <div style="padding:4px 0">
          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px;margin-bottom:12px">
            <h4 style="margin:0 0 4px;color:#1e3a8a;font-size:14px">${c.title}</h4>
            <div style="font-size:11.5px;color:#475569;line-height:1.4">${c.description}</div>
            <div style="font-size:11px;color:#1e40af;margin-top:6px;font-weight:700">Scheduled Date: ${c.date} · Associated Fee: ${c.fee}</div>
          </div>

          <div style="border:1px solid #e2e8f0;border-radius:8px;padding:10px;font-size:11.5px;color:#475569;margin-bottom:14px;background:#f8fafc">
            <label style="display:flex;align-items:flex-start;gap:8px;cursor:pointer">
              <input type="checkbox" id="parent-consent-check" checked style="margin-top:2px">
              <span>I, <strong>Kiran Patel</strong> (Parent/Guardian of ${s.name}), grant authorization for my ward to participate in this school event, and confirm my ward is medically fit for travel.</span>
            </label>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="btn" data-action="close">Cancel</button>
            <button type="button" class="btn primary" data-action="parent-sign-consent:${c.id}" style="font-weight:700">
              Sign & Grant Consent
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action.startsWith('parent-sign-consent:')) {
    let consentId = action.slice(20);
    let c = (db.consents || []).find(x => x.id === consentId);
    if (c) {
      c.signed = true;
      c.signedBy = 'Kiran Patel';
      c.signedAt = 'Just now';
    }
    save();
    state.overlay = null;
    render();
    toast('Digital permission slip signed successfully.');
    return;
  }

  if (action === 'parent-open-msg-modal') {
    let currentStudentId = state.parentStudentId || 'ST-1024';
    let s = db.students.find(x => x.id === currentStudentId) || db.students[0];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: 'Message Class Teacher · Mrs. Kavita Iyer',
      body: `
        <div>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px;font-size:11.5px;color:#64748b;margin-bottom:12px">
            Direct two-way parent channel for <strong>${s.name}</strong> (${s.grade} ${s.section}). Messages are monitored during official working hours (08:00 AM – 04:30 PM).
          </div>
          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">MESSAGE TOPIC</label>
            <select id="parent-msg-topic" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              <option value="Academic Clarification">Academic Progress & Homework Inquiry</option>
              <option value="Health / Dietary Note">Health, Allergy or Dietary Update</option>
              <option value="Bus / Transport Timing">Transport / Bus Schedule Inquiry</option>
              <option value="Meeting Request">Request One-on-One Parent Conference</option>
            </select>
          </div>
          <div style="margin-bottom:14px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">MESSAGE CONTENT</label>
            <textarea id="parent-msg-text" rows="3" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px" placeholder="Type message to teacher..."></textarea>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="btn" data-action="close">Cancel</button>
            <button type="button" class="btn primary" data-action="parent-send-msg" style="font-weight:700">
              Send Message
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'parent-send-msg') {
    state.overlay = null;
    render();
    toast('Message dispatched to Class Teacher. You will receive an alert upon reply.');
    return;
  }

  if (action.startsWith('parent-view-receipt:')) {
    let invId = action.slice(20);
    let inv = db.fees.find(f => f.id === invId) || db.fees[0];
    let currentStudentId = state.parentStudentId || 'ST-1024';
    let s = db.students.find(x => x.id === currentStudentId) || db.students[0];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: `Official School Fee Receipt · ${inv.id}`,
      body: `
        <div style="border:1.5px solid #cbd5e1;border-radius:8px;padding:16px;background:#ffffff;font-family:monospace">
          <div style="text-align:center;border-bottom:1px dashed #cbd5e1;padding-bottom:10px;margin-bottom:12px">
            <h3 style="margin:0;font-size:16px;color:#0f172a;font-family:sans-serif;font-weight:800">NORTHSTAR INTERNATIONAL SCHOOL</h3>
            <div style="font-size:10px;color:#64748b">Affiliated to CBSE, New Delhi · Affiliation No. 2130842</div>
            <div style="font-size:11px;font-weight:700;color:#1e40af;margin-top:4px">OFFICIAL FEE PAYMENT RECEIPT · SESSION 2026–27</div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:11px;margin-bottom:12px">
            <div>Receipt No: <strong>RCP-${inv.id.replace('INV-', '')}</strong></div>
            <div>Date: <strong>${prettyDate(inv.due)}</strong></div>
            <div>Student: <strong>${inv.student}</strong></div>
            <div>Class: <strong>${inv.grade}</strong></div>
            <div>Payment Mode: <strong>Online UPI / NetBanking</strong></div>
            <div>Status: <span style="color:#059669;font-weight:700">CLEARED ✓</span></div>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:11px;margin-bottom:12px">
            <thead>
              <tr style="border-bottom:1px solid #cbd5e1;text-align:left">
                <th style="padding:4px 0">DESCRIPTION</th>
                <th style="padding:4px 0;text-align:right">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:4px 0">${inv.type}</td>
                <td style="padding:4px 0;text-align:right">${money(inv.paid)}</td>
              </tr>
              <tr style="border-top:1px dashed #cbd5e1;font-weight:800">
                <td style="padding:6px 0">TOTAL PAID AMOUNT</td>
                <td style="padding:6px 0;text-align:right;color:#059669">${money(inv.paid)}</td>
              </tr>
            </tbody>
          </table>

          <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px dashed #cbd5e1;padding-top:10px;font-size:9.5px;color:#64748b">
            <span>Transaction Ref: TXN-NIS-${Date.now().toString().slice(-8)}</span>
            <span>Accounts Officer Seal & Signature Verified</span>
          </div>
        </div>

        <div style="margin-top:12px;display:flex;justify-content:flex-end;gap:8px">
          <button type="button" class="btn small primary" onclick="window.print()">Print Receipt</button>
          <button type="button" class="modal-btn-cancel" data-action="close">Close</button>
        </div>
      `
    };
    render();
    return;
  }


  
  // ==========================================================================
  // MODULES 1 TO 5 INTERACTIVE ACTION HANDLERS
  // ==========================================================================

  // 1. Parent Communication Actions
  if (action.startsWith('comm-filter:')) {
    state.commFilter = action.slice(12); try { localStorage.setItem('campusos_comm_filter', state.commFilter); } catch (e) {}
    render();
    return;
  }

  if (action === 'comm-open-composer') {
    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: 'Compose Omnichannel Broadcast to Parents',
      body: `
        <div style="padding:4px 0">
          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">SELECT DISPATCH CHANNELS</label>
            <div style="display:flex;gap:12px;font-size:12px">
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer">
                <input type="checkbox" id="comm-ch-whatsapp" checked> <strong>WhatsApp Business API</strong>
              </label>
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer">
                <input type="checkbox" id="comm-ch-sms" checked> <strong>SMS DLT Gateway</strong>
              </label>
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer">
                <input type="checkbox" id="comm-ch-push" checked> <strong>App Push Notification</strong>
              </label>
            </div>
          </div>

          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">TARGET RECIPIENT AUDIENCE</label>
            <select id="comm-target-audience" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              <option value="All Parents (Entire School)">All Parents (Entire School · 840 Families)</option>
              <option value="Middle Wing (Grades 6 to 8)">Middle Wing (Grades 6 to 8)</option>
              <option value="Grade 8 A Parents">Grade 8 A Parents (32 Families)</option>
              <option value="Bus Route 02 Parents">Bus Route 02 Parents (42 Riders)</option>
              <option value="Fee Due / Overdue Cohort">Fee Due / Overdue Cohort (18 Families)</option>
            </select>
          </div>

          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">CAMPAIGN / SUBJECT TITLE</label>
            <input type="text" id="comm-msg-subject" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px" value="Term 2 Academic & Sports Advisory Update">
          </div>

          <div style="margin-bottom:14px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">MESSAGE BODY</label>
            <textarea id="comm-msg-body" rows="4" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">Dear Parents, please be advised that morning sports coaching will commence from 07:15 AM starting Monday. Regular bus transport routes will operate on their scheduled timings.</textarea>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="modal-btn-cancel" data-action="close">Cancel</button>
            <button type="button" class="modal-btn-primary" data-action="comm-send-broadcast">
              Dispatch Omnichannel Broadcast
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'comm-send-broadcast') {
    let sub = document.getElementById('comm-msg-subject');
    let aud = document.getElementById('comm-target-audience');

    let newMsg = {
      id: 'MSG-' + (300 + (db.messages ? db.messages.length + 1 : 1)),
      subject: sub ? sub.value : 'School Announcement',
      audience: aud ? aud.value : 'All Parents',
      channel: 'WhatsApp & SMS',
      sent: 'Just now',
      status: 'Sent',
      campus: state.campus
    };

    if (!db.messages) db.messages = [];
    db.messages.unshift(newMsg);
    save();
    state.overlay = null;
    render();
    toast('Omnichannel broadcast dispatched across WhatsApp, SMS & App Push!');
    return;
  }

  if (action === 'comm-emergency-blast') {
    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: '⚡ Critical Emergency Campus Alert Blast',
      body: `
        <div style="padding:4px 0">
          <div style="background:#fef2f2;border:1.5px solid #f87171;border-radius:10px;padding:12px;margin-bottom:12px">
            <strong style="color:#b91c1c;font-size:13px">PRIORITY OVERRIDE NOTICE:</strong>
            <p style="font-size:11.5px;color:#7f1d1d;margin:2px 0 0">This will bypass Do-Not-Disturb and immediately send high-priority SMS and automated voice broadcasts to all 840 registered parent phone numbers simultaneously.</p>
          </div>

          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">EMERGENCY NATURE</label>
            <select id="comm-emg-type" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              <option value="Severe Weather Closure">Severe Weather Alert & Immediate School Early Closure</option>
              <option value="Civic Waterlogging / Road Closure">Civic Waterlogging Advisory & Safe Campus Shelter</option>
              <option value="Bus Route Disruption">City-Wide Transit Roadway Diversion Alert</option>
            </select>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="modal-btn-cancel" data-action="close">Cancel</button>
            <button type="button" class="modal-btn-danger" data-action="comm-confirm-emergency">
              Confirm & Execute Emergency Blast
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'comm-confirm-emergency') {
    state.overlay = null;
    render();
    toast('Critical emergency alert dispatched to 840 parent numbers via priority DLT line.');
    return;
  }

  if (action.startsWith('comm-view-analytics:')) {
    let msgId = action.slice(20);
    let msg = (db.messages || []).find(m => m.id === msgId) || db.messages[0];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: `Delivery & Read Telematics · ${msg.id}`,
      body: `
        <div style="padding:4px 0">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px;margin-bottom:12px">
            <h4 style="margin:0 0 2px;color:#0f172a;font-size:14px">${msg.subject}</h4>
            <div style="font-size:11px;color:#64748b">Target: ${msg.audience} · Sent: ${msg.sent} · Channels: ${msg.channel}</div>
          </div>

          <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:8px;margin-bottom:14px;text-align:center">
            <div style="background:#eff6ff;padding:10px;border-radius:8px">
              <span style="font-size:10px;color:#1e40af;font-weight:700">SENT</span>
              <div style="font-size:18px;font-weight:800;color:#1d4ed8">100%</div>
              <span style="font-size:10px;color:#64748b">840 Dispatches</span>
            </div>
            <div style="background:#f0fdf4;padding:10px;border-radius:8px">
              <span style="font-size:10px;color:#166534;font-weight:700">DELIVERED</span>
              <div style="font-size:18px;font-weight:800;color:#16a34a">98.4%</div>
              <span style="font-size:10px;color:#64748b">827 Confirmed</span>
            </div>
            <div style="background:#fdf4ff;padding:10px;border-radius:8px">
              <span style="font-size:10px;color:#86198f;font-weight:700">READ RECEIPTS</span>
              <div style="font-size:18px;font-weight:800;color:#a21caf">86.2%</div>
              <span style="font-size:10px;color:#64748b">724 Read within 1 hr</span>
            </div>
          </div>

          <div style="display:flex;justify-content:flex-end">
            <button type="button" class="btn small" data-action="close">Close</button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  // 2. Staff & HR Actions
  if (action.startsWith('staff-tab:')) {
    state.staffView = action.slice(10); try { localStorage.setItem('campusos_staff_view', state.staffView); } catch (e) {}
    render();
    return;
  }

  if (action.startsWith('staff-open-profile:')) {
    let stId = action.slice(19);
    let s = (db.staff || []).find(x => x.id === stId) || db.staff[0];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: `Faculty Dossier & Workload · ${s.name}`,
      body: `
        <div style="padding:4px 0">
          <div style="display:flex;align-items:center;gap:14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px;margin-bottom:12px">
            <div style="width:48px;height:48px;border-radius:12px;background:#1d4ed8;color:#fff;font-size:18px;font-weight:800;display:flex;align-items:center;justify-content:center">
              ${initials(s.name)}
            </div>
            <div>
              <h3 style="margin:0;font-size:16px;color:#0f172a">${s.name}</h3>
              <div style="font-size:11.5px;color:#64748b">${s.role} · ${s.department} · ${s.campus}</div>
              <div style="font-size:11px;color:#2563eb;margin-top:2px;font-weight:600">M.Sc Mathematics, B.Ed (Surat University) · 8 Yrs Tenure</div>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:10px">
              <span style="font-size:10px;color:#64748b;font-weight:700">WEEKLY PERIOD WORKLOAD</span>
              <div style="font-size:18px;font-weight:800;color:#0f172a">24 Periods / Wk</div>
              <div style="font-size:10.5px;color:#059669">Grade 8 A (Math) · Grade 9 B (Math)</div>
            </div>
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:10px">
              <span style="font-size:10px;color:#64748b;font-weight:700">STATUTORY LEAVE BALANCE</span>
              <div style="font-size:18px;font-weight:800;color:#0f172a">18 Days Available</div>
              <div style="font-size:10.5px;color:#64748b">Casual: 8 days · Medical: 10 days</div>
            </div>
          </div>

          <div style="display:flex;justify-content:flex-end">
            <button type="button" class="modal-btn-cancel" data-action="close">Close Dossier</button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action.startsWith('staff-open-sub-modal:')) {
    let subId = action.slice(21);
    let sub = (db.substitutions || []).find(s => s.id === subId) || db.substitutions[0];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: 'Assign Timetable Cover & Teacher Substitution',
      body: `
        <div style="padding:4px 0">
          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px;margin-bottom:12px">
            <strong style="color:#1e40af;font-size:13px">${sub.period}</strong>
            <div style="font-size:12px;color:#0f172a;font-weight:700;margin-top:2px">${sub.class} · ${sub.subject} (${sub.room})</div>
            <div style="font-size:11px;color:#64748b">Regular Teacher on Leave: ${sub.teacherOnLeave}</div>
          </div>

          <div style="margin-bottom:14px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">SELECT AVAILABLE FREE FACULTY</label>
            <select id="sub-teacher-select" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              <option value="Mr. Arjun Rao">Mr. Arjun Rao (Admissions / English · Free in Period 4)</option>
              <option value="Mrs. Sunita Sharma">Mrs. Sunita Sharma (Faculty Mathematics · Free in Period 4)</option>
              <option value="Mr. R. Menon">Mr. R. Menon (Science Lab In-Charge · Free in Period 4)</option>
            </select>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="modal-btn-cancel" data-action="close">Cancel</button>
            <button type="button" class="modal-btn-primary" data-action="staff-confirm-sub:${sub.id}">
              Confirm & Dispatch Cover Alert
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action.startsWith('staff-confirm-sub:')) {
    let subId = action.slice(18);
    let sel = document.getElementById('sub-teacher-select');
    let sub = (db.substitutions || []).find(s => s.id === subId);
    if (sub) {
      sub.substituteTeacher = sel ? sel.value : 'Mr. Arjun Rao';
      sub.status = 'Cover Confirmed';
    }
    save();
    state.overlay = null;
    render();
    toast(`Assigned ${sub ? sub.substituteTeacher : 'Teacher'} to cover ${sub ? sub.class : 'Class'}. Notification sent!`);
    return;
  }

  // 3. Transport Actions
  if (action.startsWith('transport-tab:')) {
    state.transportView = action.slice(14); try { localStorage.setItem('campusos_transport_view', state.transportView); } catch (e) {}
    render();
    return;
  }

  if (action.startsWith('transport-select-route:')) {
    state.transportSelectedRoute = action.slice(23); try { localStorage.setItem('campusos_transport_route', state.transportSelectedRoute); } catch (e) {}
    render();
    return;
  }

  if (action.startsWith('transport-open-manifest:')) {
    state.transportView = 'manifest';
    state.transportSelectedRoute = action.slice(24) || 'RT-02';
    render();
    return;
  }

  if (action.startsWith('transport-open-delay-modal:')) {
    let rId = action.slice(27) || 'RT-02';
    let r = (db.transport || []).find(x => x.id === rId) || db.transport[0];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: `Broadcast Delay Notice to Parents · Route ${r.id}`,
      body: `
        <div style="padding:4px 0">
          <div style="background:#fff7ed;border:1px solid #fdba74;border-radius:10px;padding:12px;margin-bottom:12px">
            <strong style="color:#c2410c;font-size:13px">Route: ${r.route} (${r.vehicle})</strong>
            <div style="font-size:11px;color:#7c2d12;margin-top:2px">Will broadcast instant SMS and app notification to all ${r.students} passenger parents.</div>
          </div>

          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">EXPECTED DELAY DURATION</label>
            <select id="transport-delay-mins" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              <option value="15 mins">15 Minutes Delay (Heavy Traffic / Diversion)</option>
              <option value="30 mins">30 Minutes Delay (Waterlogging / Mechanical check)</option>
              <option value="10 mins">10 Minutes Delay (Rail Crossing Gate)</option>
            </select>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="modal-btn-cancel" data-action="close">Cancel</button>
            <button type="button" class="modal-btn-primary" data-action="transport-send-delay">
              Send Delay Broadcast
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'transport-send-delay') {
    state.overlay = null;
    render();
    toast('Delay alert broadcasted to all parents on Route 02 via WhatsApp & SMS!');
    return;
  }

  // 4. Library Actions
  if (action.startsWith('library-tab:')) {
    state.libraryView = action.slice(12); try { localStorage.setItem('campusos_library_view', state.libraryView); } catch (e) {}
    render();
    return;
  }

  if (action === 'library-open-issue' || action.startsWith('library-quick-issue:')) {
    let cat = db.libraryCatalog || [];
    let students = db.students || [];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: 'Issue Book to Student (Rapid Circulation)',
      body: `
        <div style="padding:4px 0">
          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">SELECT STUDENT BORROWER</label>
            <select id="lib-student-select" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              ${students.slice(0, 8).map(s => `
                <option value="${s.name}">${s.name} (${s.grade} ${s.section} · Roll ${s.roll})</option>
              `).join('')}
            </select>
          </div>

          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">SELECT BOOK FROM CATALOG</label>
            <select id="lib-book-select" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              ${cat.map(b => `
                <option value="${b.title}">${b.title} (${b.author} · ${b.rack})</option>
              `).join('')}
            </select>
          </div>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px;margin-bottom:14px;font-size:11px;color:#64748b">
            Standard loan period: <strong>14 Days</strong>. Automatic due back date: <strong>10 Dec 2026</strong>. Late returns accrue ₹5/day penalty.
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="modal-btn-cancel" data-action="close">Cancel</button>
            <button type="button" class="modal-btn-primary" data-action="library-submit-issue">
              Confirm Check Out
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'library-submit-issue') {
    let sSel = document.getElementById('lib-student-select');
    let bSel = document.getElementById('lib-book-select');

    let newLoan = {
      id: 'LIB-' + Math.floor(100 + Math.random() * 900),
      title: bSel ? bSel.value : 'The Blue Umbrella',
      student: sSel ? sSel.value : 'Aanya Patel',
      issued: '2026-11-26',
      due: '2026-12-10',
      status: 'Issued',
      campus: state.campus
    };

    if (!db.library) db.library = [];
    db.library.unshift(newLoan);
    save();
    state.overlay = null;
    state.libraryView = 'loans';
    render();
    toast(`Book "${newLoan.title}" issued to ${newLoan.student} successfully!`);
    return;
  }

  if (action.startsWith('library-return-book:')) {
    let loanId = action.slice(20);
    let loan = (db.library || []).find(x => x.id === loanId);
    if (loan) loan.status = 'Returned';
    save();
    render();
    toast('Book checked in and returned to shelf inventory.');
    return;
  }

  if (action.startsWith('library-sync-fine:')) {
    let fineId = action.slice(18);
    let fine = (db.libraryFines || []).find(f => f.id === fineId);
    if (fine) fine.status = 'Synced to Fees';
    save();
    render();
    toast(`Late fine of ₹${fine ? fine.fineAmount : '20'} synced to student fee invoice.`);
    return;
  }

  // 5. Assets & Facilities Actions
  if (action.startsWith('assets-tab:')) {
    state.assetsView = action.slice(11); try { localStorage.setItem('campusos_assets_view', state.assetsView); } catch (e) {}
    render();
    return;
  }

  if (action.startsWith('assets-open-reserve-modal') || action.startsWith('assets-open-reserve-modal:')) {
    let vId = action.includes(':') ? action.split(':')[1] : 'VEN-01';
    let venues = db.facilityVenues || [];

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: 'Reserve Campus Facility & Venue',
      body: `
        <div style="padding:4px 0">
          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">SELECT FACILITY VENUE</label>
            <select id="asset-venue-select" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
              ${venues.map(v => `
                <option value="${v.id}" ${v.id === vId ? 'selected' : ''}>${v.name} (${v.capacity} seats · ${v.campus})</option>
              `).join('')}
            </select>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
            <div>
              <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">START TIME</label>
              <input type="text" id="asset-reserve-start" value="02:00 PM" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">END TIME</label>
              <input type="text" id="asset-reserve-end" value="04:00 PM" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
            </div>
          </div>

          <div style="margin-bottom:14px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">PURPOSE & IN-CHARGE FACULTY</label>
            <input type="text" id="asset-reserve-purpose" value="Inter-Class Robotics Showcase" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="modal-btn-cancel" data-action="close">Cancel</button>
            <button type="button" class="modal-btn-primary" data-action="assets-submit-reserve">
              Confirm Reservation
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'assets-submit-reserve') {
    let vSel = document.getElementById('asset-venue-select');
    let startEl = document.getElementById('asset-reserve-start');
    let endEl = document.getElementById('asset-reserve-end');
    let purEl = document.getElementById('asset-reserve-purpose');

    let vId = vSel ? vSel.value : 'VEN-01';
    let venue = (db.facilityVenues || []).find(v => v.id === vId) || db.facilityVenues[0];

    let newBooking = {
      id: 'VB-' + Math.floor(100 + Math.random() * 900),
      venueId: vId,
      venueName: venue.name,
      date: '2026-11-27',
      start: startEl ? startEl.value : '02:00 PM',
      end: endEl ? endEl.value : '04:00 PM',
      purpose: purEl ? purEl.value : 'School Event',
      organizer: 'Academic Department',
      status: 'Confirmed'
    };

    if (!db.venueBookings) db.venueBookings = [];
    db.venueBookings.unshift(newBooking);
    save();
    state.overlay = null;
    state.assetsView = 'venues';
    render();
    toast(`Facility "${venue.name}" reserved clash-free for ${newBooking.start} – ${newBooking.end}!`);
    return;
  }

  if (action === 'assets-open-wo-modal') {
    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: 'Log Campus Maintenance Work Order',
      body: `
        <div style="padding:4px 0">
          <div style="margin-bottom:12px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">ASSET / LOCATION</label>
            <input type="text" id="wo-item-name" value="Room 105 Air Conditioning Unit" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
            <div>
              <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">PRIORITY LEVEL</label>
              <select id="wo-priority" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
                <option value="Urgent Safety">Urgent Safety / High Impact</option>
                <option value="High" selected>High (Instructional Interruption)</option>
                <option value="Normal">Normal Maintenance</option>
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">ASSIGN TECHNICIAN</label>
              <select id="wo-tech" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">
                <option value="Pravin Solanki (HVAC)">Pravin Solanki (HVAC)</option>
                <option value="Suresh Kumar (IT Tech)">Suresh Kumar (IT Tech)</option>
                <option value="Campus Estate Team">Campus Estate Team</option>
              </select>
            </div>
          </div>

          <div style="margin-bottom:14px">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:4px">REPORTED PROBLEM / DEFECT</label>
            <textarea id="wo-desc" rows="3" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:12px">Cooling fan not responding to thermostat; needs inspection and coolant check.</textarea>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:8px">
            <button type="button" class="modal-btn-cancel" data-action="close">Cancel</button>
            <button type="button" class="modal-btn-primary" data-action="assets-submit-wo">
              Dispatch Work Order
            </button>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'assets-submit-wo') {
    let itemEl = document.getElementById('wo-item-name');
    let priEl = document.getElementById('wo-priority');
    let techEl = document.getElementById('wo-tech');
    let descEl = document.getElementById('wo-desc');

    let newWO = {
      id: 'WO-' + Math.floor(300 + Math.random() * 700),
      item: itemEl ? itemEl.value : 'General Maintenance',
      location: 'Main Campus',
      priority: priEl ? priEl.value : 'High',
      technician: techEl ? techEl.value : 'Estate Team',
      cost: 1500,
      reportedBy: 'Staff Portal',
      status: 'Assigned',
      reportedOn: 'Today',
      issue: descEl ? descEl.value : 'Repair required'
    };

    if (!db.workOrders) db.workOrders = [];
    db.workOrders.unshift(newWO);
    save();
    state.overlay = null;
    state.assetsView = 'workorders';
    render();
    toast(`Work Order ${newWO.id} dispatched to ${newWO.technician}!`);
    return;
  }

  if (action.startsWith('assets-advance-wo:')) {
    let woId = action.slice(18);
    let wo = (db.workOrders || []).find(w => w.id === woId);
    if (wo) {
      if (wo.status === 'Assigned') wo.status = 'In Progress';
      else if (wo.status === 'In Progress') wo.status = 'Resolved';
    }
    save();
    render();
    toast(`Work order ${wo ? wo.id : ''} updated to "${wo ? wo.status : ''}"!`);
    return;
  }


  if (action === 'close' || action === 'close-search') {
    state.overlay = null;
    state.showGlobalSearch = false;
    render();
    return;
  }

  if (action === 'clear-global-search') {
    state.globalQuery = '';
    state.showGlobalSearch = false;
    render();
    return;
  }

  if (action === 'clear-table-search') {
    state.query = '';
    render();
    return;
  }

  if (action.startsWith('switch-campus:')) {
    state.campus = action.slice(14);
    render();
    toast(`Campus switched to ${state.campus}`);
    return;
  }

  if (action.startsWith('go:')) {
    openPage(action.slice(3));
    return;
  }

  if (action === 'mobile-toggle' || action === 'mobile-close') {
    state.mobile = action === 'mobile-toggle' ? !state.mobile : false;
    render();
    return;
  }

  if (action.startsWith('new:')) {
    state.overlay = { type: 'form', key: action.slice(4) };
    render();
    return;
  }

  if (action.startsWith('edit:')) {
    let [, key, id] = action.split(':');
    state.overlay = { type: 'form', key, id };
    render();
    return;
  }

  if (action.startsWith('delete:')) {
    let [, key, id] = action.split(':');
    state.overlay = {
      type: 'confirm-delete',
      title: 'Delete this record?',
      body: `<p>This removes <strong>${esc(id)}</strong> from this browser’s demo dataset.</p>`,
      action: `confirm-delete:${key}:${id}`,
      actionLabel: 'Delete record'
    };
    render();
    return;
  }

  if (action.startsWith('confirm-delete:')) {
    let [, key, id] = action.split(':');
    db[key] = (db[key] || []).filter(x => x.id !== id);
    state.overlay = null;
    save();
    toast('Record deleted');
    return;
  }

  if (action === 'toggle-view') {
    state.view = state.view === 'list' ? 'pipeline' : 'list';
    render();
    return;
  }

  if (action === 'export') {
    exportCsv(pageKey[state.page] || 'report');
    return;
  }

  if (action === 'export-report') {
    exportCsv('report');
    return;
  }

  // Attendance Action Handlers
  if (action.startsWith('att-set-status:')) {
    let [, id, dayIdxStr, status] = action.split(':');
    let dayIdx = parseInt(dayIdxStr, 10);
    if (!db.attendance[id]) db.attendance[id] = Array(5).fill('Unmarked');
    db.attendance[id][dayIdx] = status;
    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/attendance/mark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: id, dayIdx, status, className: state.attClass })
      }).catch(() => {});
    }
    render();
    return;
  }

  if (action.startsWith('att-wing-select:')) {
    state.attWing = action.slice(16);
    render();
    return;
  }

  if (action.startsWith('att-class-select:')) {
    state.attClass = action.slice(17);
    render();
    return;
  }

  if (action.startsWith('att-view-mode:')) {
    state.attView = action.slice(14);
    render();
    return;
  }

  if (action.startsWith('att-day-select:')) {
    state.attDayIdx = parseInt(action.slice(15), 10);
    render();
    return;
  }

  if (action.startsWith('att-filter:')) {
    state.attFilter = action.slice(11);
    render();
    return;
  }

  if (action === 'att-mark-all' || action === 'mark-all') {
    let affected = db.students.filter(x => `${x.grade} ${x.section}`.trim() === state.attClass.trim());
    affected.forEach(s => {
      db.attendance[s.id] = Array(5).fill('Present');
    });
    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/attendance/mark-all', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ className: state.attClass, status: 'Present' })
      }).catch(() => {});
    }
    render();
    toast(`${state.attClass} marked present for all 5 days`);
    return;
  }

  if (action.startsWith('att-mark-day-present:')) {
    let dayIdx = parseInt(action.slice(21), 10);
    let days = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'];
    let affected = db.students.filter(x => `${x.grade} ${x.section}`.trim() === state.attClass.trim());
    affected.forEach(s => {
      if (!db.attendance[s.id]) db.attendance[s.id] = Array(5).fill('Unmarked');
      db.attendance[s.id][dayIdx] = 'Present';
    });
    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/attendance/mark-all', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ className: state.attClass, status: 'Present', dayIdx })
      }).catch(() => {});
    }
    render();
    toast(`${state.attClass} marked present for ${days[dayIdx]}`);
    return;
  }

  if (action === 'att-fill-remaining') {
    let dayIdx = state.attDayIdx || 0;
    let days = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'];
    let count = 0;
    let affected = db.students.filter(x => `${x.grade} ${x.section}`.trim() === state.attClass.trim());
    affected.forEach(s => {
      if (!db.attendance[s.id]) db.attendance[s.id] = Array(5).fill('Unmarked');
      if (db.attendance[s.id][dayIdx] === 'Unmarked') {
        db.attendance[s.id][dayIdx] = 'Present';
        count++;
      }
    });
    save();
    render();
    toast(`Filled ${count} unmarked record${count === 1 ? '' : 's'} on ${days[dayIdx]} as Present`);
    return;
  }

  if (action.startsWith('att-clear-day:')) {
    let dayIdx = parseInt(action.slice(14), 10);
    let days = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'];
    let affected = db.students.filter(x => `${x.grade} ${x.section}`.trim() === state.attClass.trim());
    affected.forEach(s => {
      if (db.attendance[s.id]) db.attendance[s.id][dayIdx] = 'Unmarked';
    });
    save();
    render();
    toast(`Cleared marks for ${days[dayIdx]}`);
    return;
  }

  // Examination actions & view controllers
  if (action.startsWith('exam-wing-select:')) {
    let wing = action.slice(17);
    state.examWing = wing;
    if (wing !== 'All') {
      let firstCls = ALL_CLASSES.find(c => c.wing === wing);
      if (firstCls) state.examClass = firstCls.name;
    }
    render();
    return;
  }

  if (action.startsWith('exam-class-select:')) {
    state.examClass = action.slice(18);
    let cls = ALL_CLASSES.find(c => c.name === state.examClass);
    if (cls && state.examWing !== 'All' && cls.wing !== state.examWing) {
      state.examWing = 'All';
    }
    render();
    return;
  }

  if (action.startsWith('exam-series-select:')) {
    state.examSeries = action.slice(19);
    render();
    return;
  }

  if (action.startsWith('exam-view-mode:')) {
    state.examView = action.slice(15);
    render();
    return;
  }

  if (action.startsWith('exam-filter:')) {
    state.examFilter = action.slice(12);
    render();
    return;
  }

  if (action === 'exam-export-csv') {
    exportExamMarksheetCsv(state.examClass || 'Grade 8 A', state.examSeries || 'Term 1 Mid-Term');
    return;
  }

  if (action === 'exam-print-marksheet') {
    window.print();
    return;
  }

  if (action === 'exam-fill-benchmark') {
    let currentClass = state.examClass || 'Grade 8 A';
    let currentSeries = state.examSeries || 'Term 1 Mid-Term';
    let exams = getClassExams(currentClass, currentSeries);
    let students = db.students.filter(s => `${s.grade} ${s.section}`.trim() === currentClass.trim());
    let updatedCount = 0;

    students.forEach(s => {
      exams.forEach(ex => {
        let key = `${s.id}_${ex.id}`;
        let current = db.examMarks[key];
        let maxT = ex.maxTheory || 80;
        let maxP = ex.maxPractical || 20;
        let passM = ex.passMarks || 40;
        if (!current || (current.theory + current.practical) < passM) {
          let baseTheory = Math.round(maxT * 0.45);
          let basePractical = Math.round(maxP * 0.65);
          db.examMarks[key] = {
            theory: baseTheory,
            practical: basePractical,
            status: 'Present',
            remarks: 'Achieved baseline passing benchmark upon review.',
            coscholastic: { workEdu: 'A', artEdu: 'B', healthPhy: 'A', discipline: 'A' }
          };
          updatedCount++;
        }
      });
    });

    save();
    render();
    toast(`Pre-filled passing benchmark for ${updatedCount} assessment records in ${currentClass}!`);
    return;
  }

  if (action === 'exam-publish-results') {
    let currentClass = state.examClass || 'Grade 8 A';
    let currentSeries = state.examSeries || 'Term 1 Mid-Term';
    let exams = getClassExams(currentClass, currentSeries);
    let students = db.students.filter(s => `${s.grade} ${s.section}`.trim() === currentClass.trim());

    state.overlay = {
      type: 'custom',
      title: 'Publish Results to Parents & Student Portal',
      body: `
        <div style="margin-bottom:16px">
          <div class="notice" style="margin:0 0 14px">
            <strong>Parent & Student Portal Publishing:</strong> This action will finalize marks moderation for <strong>${esc(currentClass)}</strong> (${esc(currentSeries)}), unlock official report cards on the parent mobile app, and dispatch SMS/WhatsApp circulars.
          </div>

          <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin-bottom:16px">
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;text-align:center">
              <strong style="font-size:16px;color:#1e293b">${students.length}</strong>
              <div style="font-size:11px;color:#64748b">Students Assessed</div>
            </div>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;text-align:center">
              <strong style="font-size:16px;color:#1e293b">${exams.length}</strong>
              <div style="font-size:11px;color:#64748b">Scholastic Subjects</div>
            </div>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;text-align:center">
              <strong style="font-size:16px;color:#059669">100%</strong>
              <div style="font-size:11px;color:#64748b">Verified & Moderated</div>
            </div>
          </div>

          <label style="display:block;font-size:12px;font-weight:700;color:#475569;margin-bottom:6px">BROADCAST CIRCULAR PREVIEW (SMS & WHATSAPP):</label>
          <div style="padding:12px 14px;background:#fff;border:1px solid #cbd5e1;border-radius:8px;font-size:13px;color:#334155;line-height:1.5;margin-bottom:16px">
            Dear Parent, official progress report cards for <strong>${esc(currentClass)} · ${esc(currentSeries)}</strong> are now published. Please log in to the CampusOS Parent App to view detailed subject scores, scholastic grades, and teacher observations. – Examination Controller, Northstar International School.
          </div>

          <div style="display:flex;gap:16px;flex-wrap:wrap">
            <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;cursor:pointer">
              <input type="checkbox" checked disabled> Release to Parent Portal
            </label>
            <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;cursor:pointer">
              <input type="checkbox" checked disabled> SMS Direct Alert
            </label>
            <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;cursor:pointer">
              <input type="checkbox" checked disabled> WhatsApp Notification
            </label>
          </div>
        </div>
      `,
      action: 'dispatch-exam-alerts',
      actionLabel: `Publish & Broadcast to ${students.length} Families`
    };
    render();
    return;
  }

  if (action === 'dispatch-exam-alerts') {
    let currentClass = state.examClass || 'Grade 8 A';
    let currentSeries = state.examSeries || 'Term 1 Mid-Term';
    let exams = getClassExams(currentClass, currentSeries);
    let students = db.students.filter(s => `${s.grade} ${s.section}`.trim() === currentClass.trim());

    exams.forEach(ex => {
      ex.status = 'Results published';
    });

    let newMsg = {
      id: 'MSG-' + Date.now().toString().slice(-4),
      subject: `Exam Results Published: ${currentClass} (${currentSeries})`,
      audience: `${students.length} Parents of ${currentClass}`,
      channel: 'SMS & Parent Portal',
      sent: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Sent',
      campus: state.campus === 'All campuses' ? 'Main Campus' : state.campus
    };
    db.messages.unshift(newMsg);

    if (typeof fetch !== 'undefined') {
      fetch('/api/exams/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ className: currentClass, seriesName: currentSeries })
      }).catch(() => {});
    }

    save();
    state.overlay = null;
    render();
    toast(`Results published! Broadcast alerts sent to ${students.length} families.`);
    return;
  }

  if (action.startsWith('schedule-remedial:')) {
    let [, stId, subj] = action.split(':');
    let st = db.students.find(s => s.id === stId);
    let stName = st ? st.name : stId;
    let taskTitle = `Schedule remedial coaching in ${subj} for ${stName}`;
    db.tasks.unshift({
      id: 'T-' + Date.now(),
      title: taskTitle,
      meta: 'Academic Intervention · Due tomorrow',
      done: false
    });
    save();
    toast(`Remedial coaching session scheduled for ${stName} (${subj})! Added to priorities.`);
    return;
  }

  if (action.startsWith('notify-remedial-parent:')) {
    let [, stId, subj] = action.split(':');
    let st = db.students.find(s => s.id === stId);
    let stName = st ? st.name : stId;
    let newMsg = {
      id: 'MSG-' + Date.now().toString().slice(-4),
      subject: `Academic Support Notice: ${stName} (${subj})`,
      audience: `Parent of ${stName} (${st ? st.phone : ''})`,
      channel: 'SMS Direct',
      sent: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Sent',
      campus: state.campus === 'All campuses' ? 'Main Campus' : state.campus
    };
    db.messages.unshift(newMsg);
    save();
    toast(`Academic support notification sent to ${stName}'s parent!`);
    return;
  }

  if (action.startsWith('open-report-card:')) {
    let stId = action.slice(17);
    let student = db.students.find(s => s.id === stId);
    if (!student) return;

    let className = `${student.grade} ${student.section}`.trim();
    let seriesName = state.examSeries || 'Term 1 Mid-Term';
    let ms = getClassMarksheet(className, seriesName);
    let studentSummary = ms.matrix.find(m => m.student.id === stId);

    if (!studentSummary) return;

    let subMarks = studentSummary.subjectMarks;
    let grandTotal = studentSummary.totalMarks;
    let grandMax = studentSummary.totalMax;
    let pct = studentSummary.pct;
    let gpa = studentSummary.gpa;
    let overallGrade = studentSummary.overallGrade;
    let passed = studentSummary.passed;

    let coschol = subMarks[0]?.markInfo?.coscholastic || { workEdu: 'A', artEdu: 'A', healthPhy: 'A', discipline: 'A' };
    let clsInfo = ALL_CLASSES.find(c => c.name === className) || ALL_CLASSES[0];

    state.overlay = {
      type: 'custom',
      noHead: true,
      noFoot: true,
      docModal: true,
      title: `Official Report Card · ${student.name} (${className})`,
      body: `
        <div class="report-card-wrap">
          <div class="report-card-top-bar">
            <div>
              <span class="pill green">CBSE Board Affiliated · Permanent Affiliation No. 2130842</span>
            </div>
            <div style="display:flex;gap:8px">
              <button type="button" class="btn small primary" onclick="window.print()">
                ${icon('printer')} Print Report Card
              </button>
              <button type="button" class="btn small" data-action="close">
                ${icon('close')} Close
              </button>
            </div>
          </div>

          <!-- School Crest & Header -->
          <div class="report-header">
            <div class="report-crest-badge">NIS</div>
            <div class="report-school-name">NORTHSTAR INTERNATIONAL SCHOOL</div>
            <div class="report-school-meta">Affiliated to Central Board of Secondary Education (CBSE), New Delhi · School Code: 08124</div>
            <div class="report-title-banner">ANNUAL SCHOLASTIC PROGRESS REPORT CARD · SESSION 2026–27</div>
          </div>

          <!-- Student Dossier Grid -->
          <div class="report-student-grid">
            <div class="report-info-item">
              <span class="report-info-label">Candidate Name</span>
              <span class="report-info-val">${esc(student.name)}</span>
            </div>
            <div class="report-info-item">
              <span class="report-info-label">Roll Number</span>
              <span class="report-info-val">${esc(student.roll || '08')}</span>
            </div>
            <div class="report-info-item">
              <span class="report-info-label">Class & Section</span>
              <span class="report-info-val">${esc(className)}</span>
            </div>
            <div class="report-info-item">
              <span class="report-info-label">Admission / Reg No.</span>
              <span class="report-info-val">${esc(student.id)}</span>
            </div>
            <div class="report-info-item">
              <span class="report-info-label">Father / Guardian</span>
              <span class="report-info-val">${esc(student.parent || 'Mr. Rajesh ' + student.name.split(' ')[1])}</span>
            </div>
            <div class="report-info-item">
              <span class="report-info-label">Mother's Name</span>
              <span class="report-info-val">Mrs. Sunita ${esc(student.name.split(' ')[1] || 'Patel')}</span>
            </div>
            <div class="report-info-item">
              <span class="report-info-label">Attendance Record</span>
              <span class="report-info-val">${esc(student.attendance || '96%')} Present (Term 1)</span>
            </div>
            <div class="report-info-item">
              <span class="report-info-label">Assessment Series</span>
              <span class="report-info-val">${esc(seriesName)}</span>
            </div>
          </div>

          <!-- Scholastic Scores Table -->
          <h4 style="margin:16px 0 8px;font-size:13px;font-weight:700;color:#1e293b;text-transform:uppercase;letter-spacing:0.5px">
            Part 1: Scholastic Performance (9-Point Grading Scale)
          </h4>
          <table class="report-scores-table">
            <thead>
              <tr>
                <th>SUBJECT NAME</th>
                <th style="text-align:center">MAX THEORY</th>
                <th style="text-align:center">THEORY OBTAINED</th>
                <th style="text-align:center">MAX PRACTICAL</th>
                <th style="text-align:center">PRACTICAL OBTAINED</th>
                <th style="text-align:center">TOTAL MARKS</th>
                <th style="text-align:center">% SCORE</th>
                <th style="text-align:center">GRADE</th>
                <th style="text-align:center">GRADE POINT</th>
              </tr>
            </thead>
            <tbody>
              ${subMarks.map(sm => `
                <tr>
                  <td>
                    <strong>${esc(sm.exam.title)}</strong>
                    <div style="font-size:10px;color:#64748b">Code: ${esc(sm.exam.subjectCode || 'SUB')}</div>
                  </td>
                  <td style="text-align:center">${sm.exam.maxTheory || 80}</td>
                  <td style="text-align:center"><strong>${sm.markInfo.theory}</strong></td>
                  <td style="text-align:center">${sm.exam.maxPractical || 20}</td>
                  <td style="text-align:center"><strong>${sm.markInfo.practical}</strong></td>
                  <td style="text-align:center"><strong>${sm.markInfo.total}</strong> / ${sm.markInfo.maxTotal}</td>
                  <td style="text-align:center">${sm.markInfo.pct}%</td>
                  <td style="text-align:center">
                    <span class="grade-pill ${sm.markInfo.tier}">${sm.markInfo.grade}</span>
                  </td>
                  <td style="text-align:center"><strong>${sm.markInfo.gradePoint.toFixed(1)}</strong></td>
                </tr>
              `).join('')}
              <tr class="report-summary-row">
                <td><strong>GRAND TOTAL & AGGREGATE</strong></td>
                <td colspan="4" style="text-align:center">
                  <strong>Total Marks: ${grandTotal} / ${grandMax}</strong>
                </td>
                <td style="text-align:center"><strong>${pct}%</strong></td>
                <td style="text-align:center"><strong>Grade: ${overallGrade}</strong></td>
                <td style="text-align:center"><strong>CGPA: ${gpa.toFixed(1)}</strong></td>
                <td style="text-align:center">
                  <span class="pill ${passed ? 'green' : 'red'}">${passed ? 'PROMOTED' : 'REMEDIAL'}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Co-Scholastic Performance Table -->
          <h4 style="margin:16px 0 8px;font-size:13px;font-weight:700;color:#1e293b;text-transform:uppercase;letter-spacing:0.5px">
            Part 2: Co-Scholastic Activities & Life Skills (3-Point Scale A, B, C)
          </h4>
          <table class="report-scores-table" style="margin-bottom:16px">
            <thead>
              <tr>
                <th>DOMAIN</th>
                <th>KEY EVALUATION ATTRIBUTES</th>
                <th style="text-align:center;width:100px">GRADE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Work Education</strong></td>
                <td>Collaborative projects, technical design, initiative, and digital literacy.</td>
                <td style="text-align:center"><span class="grade-pill grade-a1">${coschol.workEdu}</span></td>
              </tr>
              <tr>
                <td><strong>Art & Aesthetic Education</strong></td>
                <td>Creativity, spatial composition, visual expression, and cultural appreciation.</td>
                <td style="text-align:center"><span class="grade-pill grade-a1">${coschol.artEdu}</span></td>
              </tr>
              <tr>
                <td><strong>Health & Physical Education</strong></td>
                <td>Physical fitness, team sportsmanship, athletic agility, and health awareness.</td>
                <td style="text-align:center"><span class="grade-pill grade-a1">${coschol.healthPhy}</span></td>
              </tr>
              <tr>
                <td><strong>Discipline & Moral Values</strong></td>
                <td>Attendance punctuality, peer respect, institutional integrity, and leadership.</td>
                <td style="text-align:center"><span class="grade-pill grade-a1">${coschol.discipline}</span></td>
              </tr>
            </tbody>
          </table>

          <!-- Teacher Pedagogical Observations -->
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 16px;margin-bottom:24px">
            <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;margin-bottom:4px">
              Class Teacher's Qualitative Assessment & Guidance:
            </div>
            <div style="font-size:13px;color:#1e293b;line-height:1.5;font-style:italic">
              "${esc(subMarks[0]?.markInfo?.remarks || 'Consistently demonstrates strong conceptual understanding, active classroom participation, and commendable focus. Recommended to maintain this standard of excellence.')}"
            </div>
          </div>

          <!-- Signatures & Verification Block -->
          <div class="report-signatures">
            <div class="report-sig-box">
              <div class="report-sig-line">
                <span style="font-family:'Courier New', monospace;font-size:12px;color:#2563eb">${esc(clsInfo.teacher)}</span>
              </div>
              <div class="report-sig-label">Class Teacher</div>
            </div>
            <div class="report-sig-box">
              <div class="report-sig-line">
                <span style="font-family:'Courier New', monospace;font-size:12px;color:#2563eb">Dr. S. K. Banerjee</span>
              </div>
              <div class="report-sig-label">Controller of Examinations</div>
            </div>
            <div class="report-sig-box">
              <div class="report-sig-line">
                <span style="font-family:'Courier New', monospace;font-size:12px;color:#2563eb">Dr. Aruna Swaminathan</span>
              </div>
              <div class="report-sig-label">Principal / School Head</div>
            </div>
          </div>

          <div style="margin-top:16px;text-align:center;font-size:10px;color:#94a3b8">
            Digital Certificate Verification Token: NIS-CBSE-2026-CERT-${esc(stId)}-${Date.now().toString().slice(-6)} · Verified by CampusOS Enterprise SIS
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action.startsWith('open-admit-card:')) {
    let target = action.slice(16);
    let student = db.students.find(s => s.id === target);
    let className = student ? `${student.grade} ${student.section}`.trim() : (target || state.examClass || 'Grade 8 A');
    if (!student) {
      student = db.students.find(s => `${s.grade} ${s.section}`.trim() === className.trim()) || db.students[0];
    }
    let seriesName = state.examSeries || 'Term 1 Mid-Term';
    let exams = getClassExams(className, seriesName);
    let clsInfo = ALL_CLASSES.find(c => c.name === className) || ALL_CLASSES[0];
    let parentSurname = student.name.split(' ')[1] || 'Patel';

    state.overlay = {
      type: 'custom',
      noHead: true,
      noFoot: true,
      docModal: true,
      title: `Board Admit Card / Hall Ticket · ${student.name} (${className})`,
      body: `
        <div class="hall-ticket-container hall-ticket-wrap">
          <!-- Top Action Bar -->
          <div class="hall-ticket-action-bar">
            <div style="display:flex;align-items:center;gap:8px">
              <span class="pill green" style="font-weight:700">Official Board Examination Admit Card · Session 2026–27</span>
              <span class="pill purple" style="font-weight:600">Gate Verification Active</span>
            </div>
            <div style="display:flex;gap:8px">
              <button type="button" class="btn small primary" onclick="window.print()">
                ${icon('printer')} Print Hall Ticket
              </button>
              <button type="button" class="btn small" data-action="close">
                ${icon('close')} Close
              </button>
            </div>
          </div>

          <!-- Official Double-Border Security Card -->
          <div class="hall-ticket-card">
            <!-- Background Security Watermark -->
            <div class="hall-ticket-watermark">NORTHSTAR BOARD OF EXAMINATIONS</div>

            <div class="hall-ticket-content">
              <!-- Official Header with Crest, Title & Barcode -->
              <div class="hall-header-grid">
                <!-- Golden Crest -->
                <div class="hall-crest-svg">
                  <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="46" fill="#0f172a" stroke="#d97706" stroke-width="3"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#d97706" stroke-dasharray="2 2"/>
                    <path d="M50 18 L58 38 L80 38 L62 52 L68 74 L50 60 L32 74 L38 52 L20 38 L42 38 Z" fill="#d97706"/>
                    <text x="50" y="86" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff" font-family="Arial, sans-serif">NIS · EST 2011</text>
                  </svg>
                </div>

                <!-- Center Title Block -->
                <div class="hall-header-center">
                  <h1 class="school-title">NORTHSTAR INTERNATIONAL SCHOOL</h1>
                  <div class="board-meta">AFFILIATED TO CENTRAL BOARD OF SECONDARY EDUCATION (CBSE), NEW DELHI · AFFILIATION NO. 2130842 · SCHOOL CODE: 08124</div>
                  <div style="font-size:10px;color:#64748b;margin-bottom:4px">SECTOR 14, MAIN CAMPUS & WEST CAMPUS · CONTROLLER OF EXAMINATIONS</div>
                  <div class="doc-title-badge">OFFICIAL EXAMINATION ADMIT CARD / HALL TICKET · 2026–27</div>
                </div>

                <!-- Right Security Barcode Box -->
                <div class="hall-barcode-box">
                  <div class="hall-barcode-lines">
                    <span style="width:3px"></span><span style="width:1px"></span><span style="width:2px"></span>
                    <span style="width:4px"></span><span style="width:1px"></span><span style="width:2px"></span>
                    <span style="width:3px"></span><span style="width:2px"></span><span style="width:1px"></span>
                    <span style="width:3px"></span><span style="width:1px"></span><span style="width:4px"></span>
                    <span style="width:2px"></span><span style="width:1px"></span><span style="width:3px"></span>
                    <span style="width:2px"></span><span style="width:3px"></span><span style="width:1px"></span>
                  </div>
                  <div class="hall-barcode-code">NIS-${esc(student.id)}-${esc(student.roll || '08')}</div>
                  <div style="font-size:8px;font-weight:800;color:#059669;margin-top:2px">SECURE AUTHENTICATED</div>
                </div>
              </div>

              <!-- Candidate Dossier & Attested Photograph Layout -->
              <div class="hall-dossier-layout">
                <!-- Left 2-Column Info Table -->
                <table class="hall-dossier-table">
                  <tbody>
                    <tr>
                      <td class="field-lbl">CANDIDATE NAME</td>
                      <td class="field-val" style="font-size:13px;font-weight:800">${esc(student.name)}</td>
                      <td class="field-lbl">ROLL NUMBER</td>
                      <td class="field-val roll-highlight">${className.replace(/\s+/g, '')}-${esc(student.roll || '08')}</td>
                    </tr>
                    <tr>
                      <td class="field-lbl">CLASS & SECTION</td>
                      <td class="field-val"><strong>${esc(className)}</strong> (${esc(clsInfo.wing)} Wing)</td>
                      <td class="field-lbl">STUDENT REG ID</td>
                      <td class="field-val">${esc(student.id)}</td>
                    </tr>
                    <tr>
                      <td class="field-lbl">FATHER'S NAME</td>
                      <td class="field-val">${esc(student.parent || 'Mr. Rajesh ' + parentSurname)}</td>
                      <td class="field-lbl">MOTHER'S NAME</td>
                      <td class="field-val">Mrs. Sunita ${esc(parentSurname)}</td>
                    </tr>
                    <tr>
                      <td class="field-lbl">DATE OF BIRTH</td>
                      <td class="field-val">14-Aug-2012</td>
                      <td class="field-lbl">GENDER / CAT</td>
                      <td class="field-val">Female / General (Regular)</td>
                    </tr>
                    <tr>
                      <td class="field-lbl">EXAM CENTER</td>
                      <td class="field-val"><strong>Center #104 · ${esc(clsInfo.campus)}</strong></td>
                      <td class="field-lbl">SEAT ALLOCATION</td>
                      <td class="field-val"><strong>${esc(clsInfo.room)} · Desk #${esc(student.roll || '08')}</strong></td>
                    </tr>
                  </tbody>
                </table>

                <!-- Right Candidate Photo Box -->
                <div class="hall-photo-frame">
                  <div class="hall-photo-avatar">${initials(student.name)}</div>
                  <div class="hall-photo-candidate-name">${esc(student.name)}</div>
                  <div class="hall-photo-attested-seal">
                    ✓ NIS CONTROLLER<br>ATTESTED
                  </div>
                  <div class="hall-photo-specimen-box">
                    <div class="hall-photo-specimen-sign">${esc(student.name)}</div>
                    <span class="hall-photo-specimen-lbl">Candidate Signature</span>
                  </div>
                </div>
              </div>

              <!-- Date Sheet Schedule Table -->
              <div class="hall-table-section-title">
                <span>SCHOLASTIC ASSESSMENT SCHEDULE & DATE SHEET (${esc(seriesName)})</span>
                <span style="font-size:10px;color:#64748b;font-weight:600">Reporting: 08:30 AM · Gate Closure: 08:45 AM</span>
              </div>

              <table class="hall-datesheet-table">
                <thead>
                  <tr>
                    <th style="width:110px">DATE & DAY</th>
                    <th style="width:130px">TIME SLOT</th>
                    <th style="width:110px">EXAM CODE</th>
                    <th>SUBJECT TITLE</th>
                    <th style="width:90px;text-align:center">MAX MARKS</th>
                    <th style="width:90px;text-align:center">DESK NO.</th>
                    <th style="width:120px;text-align:center">INVIGILATOR INITIALS</th>
                  </tr>
                </thead>
                <tbody>
                  ${exams.map(ex => `
                    <tr>
                      <td><strong>${prettyDate(ex.date)}</strong></td>
                      <td>${esc(ex.time || '09:00 AM – 12:00 PM')}</td>
                      <td><code style="font-weight:700;color:#1e40af">${esc(ex.id)}</code></td>
                      <td><strong>${esc(ex.title)}</strong> <span style="font-size:10px;color:#64748b">(${esc(ex.subjectCode || 'SUB')})</span></td>
                      <td style="text-align:center"><strong>${esc(ex.max || '100')}</strong></td>
                      <td style="text-align:center">Desk #${esc(student.roll || '08')}</td>
                      <td style="text-align:center;color:#cbd5e1;font-size:10px">________________</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>

              <!-- Rules & Code of Conduct Box -->
              <div class="hall-rules-container">
                <strong>IMPORTANT EXAMINATION RULES & CODE OF CONDUCT (CBSE / NIS PROTOCOL):</strong>
                <ol class="hall-rules-list">
                  <li>Candidates must be seated in their designated hall at least <strong>15 minutes prior</strong> to test commencement. No entry allowed after gate closure.</li>
                  <li>Possession of smartphones, smartwatches, Bluetooth peripherals, calculators, or unauthorized study material is strictly prohibited and constitutes <strong>Unfair Means (UFM)</strong>.</li>
                  <li>Candidates must carry this verified physical Admit Card along with their official Northstar Student Identity Smart Card at all times.</li>
                  <li>Write Candidate Roll Number and Subject Code only in the designated blocks on the OMR/Answer Booklet. Revealing identity on inside leaves invites disqualification.</li>
                  <li>No candidate will be permitted to leave the examination hall before the completion of the first 2 hours of the scheduled duration.</li>
                </ol>
              </div>

              <!-- Verification Signatures & Institutional Seal Block -->
              <div class="hall-sign-grid">
                <div class="hall-sign-box">
                  <div class="hall-sign-canvas">
                    <span style="font-family:'Brush Script MT', cursive, sans-serif;font-size:18px;color:#1e3a8a">${esc(student.name)}</span>
                  </div>
                  <div class="hall-sign-border">
                    <div class="hall-sign-role">Candidate's Signature</div>
                    <div class="hall-sign-sub">To be verified by Room Invigilator</div>
                  </div>
                </div>

                <div class="hall-sign-box">
                  <div class="hall-sign-canvas">
                    <span style="font-family:'Brush Script MT', cursive, sans-serif;font-size:17px;color:#1e3a8a">${esc(student.parent || 'Kiran Patel')}</span>
                  </div>
                  <div class="hall-sign-border">
                    <div class="hall-sign-role">Parent / Guardian Signature</div>
                    <div class="hall-sign-sub">Consent & Examination Acknowledgment</div>
                  </div>
                </div>

                <div class="hall-sign-box">
                  <div class="hall-official-seal">
                    <span>★ NIS ★</span>
                    <span>EXAM</span>
                    <span>OFFICIAL</span>
                  </div>
                  <div class="hall-sign-canvas">
                    <span style="font-family:'Courier New', monospace;font-size:13px;font-weight:700;color:#2563eb">Dr. S. K. Banerjee</span>
                  </div>
                  <div class="hall-sign-border">
                    <div class="hall-sign-role">Controller of Examinations</div>
                    <div class="hall-sign-sub">Northstar International School Board</div>
                  </div>
                </div>
              </div>

              <div style="margin-top:14px;display:flex;justify-content:space-between;align-items:center;font-size:9.5px;color:#94a3b8;border-top:1px dashed #e2e8f0;padding-top:8px">
                <span>Security Hash: SHA256-NIS-AUTH-2026-${esc(student.id)}-${Date.now().toString().slice(-6)}</span>
                <span>Page 1 of 1 · System Generated via CampusOS Enterprise SIS · Valid with Institutional Embossed Seal</span>
              </div>
            </div>
          </div>
        </div>
      `
    };
    render();
    return;
  }

  if (action.startsWith('open-marks-modal:')) {
    let [, stId, examId] = action.split(':');
    let student = db.students.find(s => s.id === stId);
    let exam = (db.exams || []).find(e => e.id === examId);
    if (!student || !exam) return;

    let markKey = `${stId}_${examId}`;
    let m = db.examMarks && db.examMarks[markKey];
    let theoryVal = m ? m.theory : 60;
    let practicalVal = m ? m.practical : 15;
    let statusVal = m ? m.status || 'Present' : 'Present';
    let remarksVal = m ? m.remarks || '' : '';

    let maxT = exam.maxTheory || 80;
    let maxP = exam.maxPractical || 20;

    let curGrade = calculateGrade(theoryVal, practicalVal, maxT, maxP, exam.passMarks || 40, statusVal);

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: `Marks Entry & Academic Assessment · ${student.name}`,
      body: `
        <form id="exam-marks-form" data-student="${esc(stId)}" data-exam="${esc(examId)}" data-maxt="${maxT}" data-maxp="${maxP}" class="marks-modal-body">
          <!-- Student & Subject Header Strip -->
          <div class="marks-student-strip">
            <div class="marks-student-info">
              ${avatar(student.name, 'sky')}
              <div class="marks-student-meta">
                <h3>${esc(student.name)}</h3>
                <p>Roll No: <strong>${esc(student.roll || '08')}</strong> · ${esc(student.grade)} ${esc(student.section)} · Reg ID: ${esc(student.id)}</p>
              </div>
            </div>
            <div class="marks-subject-badge">
              <strong>${esc(exam.title)}</strong><br>
              <small>Code: ${esc(exam.subjectCode || 'SUB')} · Max ${maxT + maxP} Marks</small>
            </div>
          </div>

          <!-- Two Stepper Inputs for Theory and Practical -->
          <div class="marks-form-row">
            <div class="marks-form-group">
              <label class="marks-form-label" for="exam-theory-input">
                <span>Theory Marks</span>
                <span class="badge-weight">Max ${maxT}</span>
              </label>
              <div class="marks-input-stepper">
                <button type="button" class="marks-step-btn" data-step="exam-theory-input:-1" aria-label="Decrease theory marks">−</button>
                <input type="number" id="exam-theory-input" min="0" max="${maxT}" value="${theoryVal}" required class="marks-number-input">
                <button type="button" class="marks-step-btn" data-step="exam-theory-input:1" aria-label="Increase theory marks">+</button>
              </div>
            </div>

            <div class="marks-form-group">
              <label class="marks-form-label" for="exam-practical-input">
                <span>Practical / Internal</span>
                <span class="badge-weight">Max ${maxP}</span>
              </label>
              <div class="marks-input-stepper">
                <button type="button" class="marks-step-btn" data-step="exam-practical-input:-1" aria-label="Decrease practical marks">−</button>
                <input type="number" id="exam-practical-input" min="0" max="${maxP}" value="${practicalVal}" required class="marks-number-input">
                <button type="button" class="marks-step-btn" data-step="exam-practical-input:1" aria-label="Increase practical marks">+</button>
              </div>
            </div>
          </div>

          <!-- Examination Attendance Status Selector -->
          <div class="marks-form-group">
            <label class="marks-form-label" for="exam-status-input">
              <span>Candidate Attendance Status</span>
              <span class="badge-weight">Verification</span>
            </label>
            <div class="marks-select-wrap">
              <select id="exam-status-input">
                <option value="Present" ${statusVal === 'Present' ? 'selected' : ''}>Present for Assessment</option>
                <option value="Absent" ${statusVal === 'Absent' ? 'selected' : ''}>Absent (AB) – No Show</option>
                <option value="Medical" ${statusVal === 'Medical' ? 'selected' : ''}>Medical Leave (ML) – Approved Medical Certificate</option>
                <option value="Malpractice" ${statusVal === 'Malpractice' ? 'selected' : ''}>Malpractice (UFM) – Under Board Scrutiny</option>
              </select>
            </div>
          </div>

          <!-- Dynamic Live Calculator Intelligence Box -->
          <div class="marks-calc-card">
            <div class="marks-calc-item">
              <span class="calc-label">TOTAL MARKS</span>
              <div id="live-total" class="calc-val">${curGrade.total} / ${curGrade.maxTotal}</div>
            </div>
            <div class="marks-calc-item">
              <span class="calc-label">PERCENTAGE</span>
              <div id="live-pct" class="calc-val" style="color:${curGrade.pct >= 75 ? '#059669' : curGrade.pct >= 40 ? '#0284c7' : '#dc2626'}">
                ${curGrade.pct}%
              </div>
            </div>
            <div class="marks-calc-item">
              <span class="calc-label">CBSE 9-POINT GRADE</span>
              <div id="live-grade" class="calc-val" style="color:#1d4ed8">
                ${curGrade.grade} (${curGrade.gradePoint.toFixed(1)})
              </div>
            </div>
          </div>

          <!-- Teacher Pedagogical Observation & Quick Insert Chips -->
          <div class="marks-form-group">
            <label class="marks-form-label" for="exam-remarks-input">
              <span>Teacher Pedagogical Observation & Guidance</span>
              <span class="badge-weight">Official Marksheet Note</span>
            </label>
            <textarea id="exam-remarks-input" rows="2" class="marks-textarea" placeholder="Enter qualitative academic observation, strengths or remedial plan...">${esc(remarksVal)}</textarea>
            <div class="marks-remark-chips">
              <span class="marks-chip" data-remark="Exemplary concept mastery and high analytical precision.">+ Outstanding Mastery</span>
              <span class="marks-chip" data-remark="Strong numerical problem-solving; consistent homework dedication.">+ Strong Numerical</span>
              <span class="marks-chip" data-remark="Good comprehension; recommend practicing timed proof revisions.">+ Timed Practice</span>
              <span class="marks-chip" data-remark="Needs targeted revision in fundamentals; recommended for remedial circle.">+ Remedial Support</span>
            </div>
          </div>

          <!-- Footer Action Buttons -->
          <div class="marks-modal-footer">
            <button type="button" class="btn" data-action="close">Cancel</button>
            <button type="submit" class="btn primary" style="padding:9px 20px;font-weight:700">
              ${icon('check')} Save Marks & Update Gradebook
            </button>
          </div>
        </form>
      `
    };
    render();
    return;
  }

  if (action === 'att-export-csv') {
    exportAttendanceCsv(state.attClass);
    return;
  }

  if (action === 'att-print') {
    window.print();
    return;
  }

  if (action === 'att-notify-parents') {
    let dayIdx = state.attDayIdx || 0;
    let days = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'];
    let dayName = days[dayIdx];
    let classStudents = db.students.filter(x => `${x.grade} ${x.section}`.trim() === state.attClass.trim());
    let absentees = classStudents.filter(s => {
      let m = (db.attendance[s.id] || [])[dayIdx] || 'Unmarked';
      return m === 'Absent' || m === 'Late';
    });

    state.overlay = {
      type: 'custom',
      title: 'Parent Attendance Alerts Dispatch',
      body: `
        <div style="margin-bottom:16px">
          <div class="notice" style="margin:0 0 14px">
            <strong>Automated Parent Notification:</strong> Northstar SIS will dispatch personalized alerts to families of absentees and late arrivals for <strong>${esc(state.attClass)} (${dayName})</strong>.
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px">
            <span style="font-size:13px; font-weight:700; color:#1e293b">Target Recipients (${absentees.length} Students):</span>
            <span class="pill red">${absentees.length} Unnotified Exceptions</span>
          </div>

          <div style="max-height:160px; overflow-y:auto; border:1px solid #e2e8f0; border-radius:8px; padding:8px 12px; background:#f8fafc; margin-bottom:16px">
            ${absentees.length ? absentees.map(s => {
              let m = (db.attendance[s.id] || [])[dayIdx];
              return `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid #edf2f7; font-size:12px">
                  <div>
                    <strong>${esc(s.name)}</strong> · Parent: ${esc(s.parent)} (${esc(s.phone)})
                  </div>
                  <span class="pill ${m === 'Absent' ? 'red' : 'orange'}">${m}</span>
                </div>
              `;
            }).join('') : `
              <p class="muted" style="margin:8px 0; text-align:center">No absent or late students recorded for ${dayName}. All students are present!</p>
            `}
          </div>

          <label style="display:block; font-size:12px; font-weight:700; color:#475569; margin-bottom:6px">MESSAGE PREVIEW (SMS & IN-APP ALERT):</label>
          <div style="padding:12px 14px; background:#fff; border:1px solid #cbd5e1; border-radius:8px; font-size:13px; color:#334155; line-height:1.5; margin-bottom:16px">
            Dear Parent, your child <strong>[Student Name]</strong> (${esc(state.attClass)}) was marked <strong>[Status]</strong> on ${dayName}. If this absence was unexpected, kindly contact the school attendance office immediately at +91 261 400 1122. – Northstar International School.
          </div>

          <div style="display:flex; gap:16px; flex-wrap:wrap">
            <label style="display:flex; align-items:center; gap:6px; font-size:12px; font-weight:600; cursor:pointer">
              <input type="checkbox" checked disabled> SMS Direct Gateway
            </label>
            <label style="display:flex; align-items:center; gap:6px; font-size:12px; font-weight:600; cursor:pointer">
              <input type="checkbox" checked disabled> Parent Portal Notification
            </label>
            <label style="display:flex; align-items:center; gap:6px; font-size:12px; font-weight:600; cursor:pointer">
              <input type="checkbox" checked disabled> WhatsApp Cloud Alert
            </label>
          </div>
        </div>
      `,
      action: absentees.length ? 'dispatch-parent-alerts' : null,
      actionLabel: `Send Alerts to ${absentees.length} Parents`
    };
    render();
    return;
  }

  if (action === 'dispatch-parent-alerts') {
    let dayIdx = state.attDayIdx || 0;
    let days = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'];
    let dayName = days[dayIdx];
    let classStudents = db.students.filter(x => `${x.grade} ${x.section}`.trim() === state.attClass.trim());
    let absentees = classStudents.filter(s => {
      let m = (db.attendance[s.id] || [])[dayIdx] || 'Unmarked';
      return m === 'Absent' || m === 'Late';
    });

    if (absentees.length > 0) {
      let newMsg = {
        id: 'MSG-' + Date.now().toString().slice(-4),
        subject: `Attendance Alert: ${state.attClass} (${dayName})`,
        audience: `${absentees.length} Parents of ${state.attClass}`,
        channel: 'SMS & In-App',
        sent: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        status: 'Sent',
        campus: state.campus === 'All campuses' ? 'Main Campus' : state.campus
      };
      db.messages.unshift(newMsg);

      if (typeof fetch !== 'undefined') {
        fetch('/api/attendance/notify-absentees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ className: state.attClass, dayIdx, channel: 'All' })
        }).catch(() => {});
      }
      save();
      toast(`Dispatched ${absentees.length} SMS & App alerts to parents!`);
    } else {
      toast('No absentees to notify.');
    }
    state.overlay = null;
    render();
    return;
  }

  if (action.startsWith('open-att-modal:')) {
    let [, id, dayIdxStr] = action.split(':');
    let dayIdx = parseInt(dayIdxStr, 10);
    let days = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'];
    let dayName = days[dayIdx];
    let student = db.students.find(s => s.id === id);
    if (!student) return;

    let marks = db.attendance[id] || Array(5).fill('Unmarked');
    let currentStatus = marks[dayIdx] || 'Unmarked';
    let metaKey = id + '_' + dayIdx;
    let meta = db.attendanceMeta ? db.attendanceMeta[metaKey] : null;

    let currentReason = meta ? meta.reason || '' : '';
    let currentRemarks = meta ? meta.remarks || '' : '';
    let currentArrival = meta ? meta.arrivalTime || '' : '';

    state.overlay = {
      type: 'custom',
      noFoot: true,
      title: `Attendance Reason & Notes · ${student.name}`,
      body: `
        <form id="att-reason-form" data-student="${esc(id)}" data-day="${dayIdx}">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px; padding:12px; background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0">
            ${avatar(student.name, 'sky')}
            <div>
              <h3 style="margin:0; font-size:15px; font-weight:800; color:#1e293b">${esc(student.name)}</h3>
              <p style="margin:2px 0 0; font-size:12px; color:#64748b">
                Roll ${esc(student.roll)} · ${esc(state.attClass)} · Active Date: <strong>${dayName}</strong>
              </p>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="att-status-select">Status for ${dayName}</label>
              <select id="att-status-select" class="form-select" required>
                ${['Present', 'Absent', 'Late', 'Excused', 'Unmarked'].map(st => `
                  <option value="${st}" ${currentStatus === st ? 'selected' : ''}>${st}</option>
                `).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="att-arrival-time">Arrival Time (if Late / Delayed)</label>
              <input type="text" id="att-arrival-time" class="form-input" placeholder="e.g. 08:45 AM" value="${esc(currentArrival)}">
            </div>

            <div class="form-group" style="grid-column:1/-1">
              <label class="form-label" for="att-reason-select">Excuse / Absence Category</label>
              <select id="att-reason-select" class="form-select">
                <option value="">— Select Standard Reason —</option>
                ${[
                  'Medical / Illness (Doctor Note Submitted)',
                  'Doctor / Dental Appointment',
                  'School Bus / Transport Delay',
                  'Authorized School Sports / Olympiad',
                  'Family Emergency / Personal Leave',
                  'Weather / Natural Disruption',
                  'Religious Observance',
                  'Unexcused / Truancy'
                ].map(r => `
                  <option value="${r}" ${currentReason.startsWith(r.split(' ')[0]) ? 'selected' : ''}>${r}</option>
                `).join('')}
              </select>
            </div>

            <div class="form-group" style="grid-column:1/-1">
              <label class="form-label" for="att-remarks-text">Teacher Clinical Remarks & Parent Follow-up Notes</label>
              <textarea id="att-remarks-text" class="form-input" rows="3" placeholder="Enter teacher remarks, clinic visit notes, or parent communication details...">${esc(currentRemarks)}</textarea>
            </div>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px; padding-top:14px; border-top:1px solid #e2e8f0">
            <button type="button" class="btn" data-action="close">Cancel</button>
            <button type="submit" class="btn primary">Save Attendance Record</button>
          </div>
        </form>
      `
    };
    render();
    return;
  }

  if (action.startsWith('stage:')) {
    let r = db.leads.find(x => x.id === action.slice(6));
    if (r) {
      r.stage = document.getElementById('stage-update').value;
      if (r.stage === 'Admitted') r.next = 'Onboarding';
      save();
      toast('Admission stage updated');
    }
    return;
  }

  if (action.startsWith('enrol-lead:')) {
    let lead = db.leads.find(x => x.id === action.slice(11));
    if (lead) {
      let existing = db.students.find(s => s.name.toLowerCase() === lead.name.toLowerCase());
      if (existing) {
        toast(`${lead.name} is already registered as student ${existing.id}`);
        state.overlay = { type: 'detail', key: 'students', id: existing.id };
        render();
        return;
      }
      let newId = generateId('students');
      let newStudent = {
        id: newId,
        name: lead.name,
        grade: lead.grade,
        section: 'A',
        roll: String(Math.floor(Math.random() * 20) + 10),
        parent: lead.parent,
        phone: lead.phone,
        status: 'Active',
        campus: lead.campus,
        attendance: '100%',
        balance: 0
      };
      db.students.unshift(newStudent);
      lead.next = `Enrolled (${newId})`;
      save();
      toast(`${lead.name} enrolled as student ${newId}!`);
      state.overlay = { type: 'detail', key: 'students', id: newId };
      render();
    }
    return;
  }

  if (action.startsWith('ticket:')) {
    let r = db.tickets.find(x => x.id === action.slice(7));
    if (r) {
      r.status = document.getElementById('ticket-update').value;
      save();
      toast('Ticket status updated');
    }
    return;
  }

  if (action.startsWith('quick-pay:')) {
    let [, id, amt] = action.split(':');
    let r = db.fees.find(x => x.id === id);
    if (r) {
      let amount = +amt;
      r.paid = +r.paid + amount;
      r.status = r.paid >= +r.amount ? 'Paid' : 'Partial';
      save();
      toast(`${money(amount)} payment recorded for ${r.student}!`);
    }
    return;
  }

  if (action.startsWith('payment:')) {
    let r = db.fees.find(x => x.id === action.slice(8));
    let amountInput = document.getElementById('payment-amount');
    let amount = amountInput ? +amountInput.value : 0;
    let bal = Math.max(0, +r.amount - +r.paid);

    if (!amount || amount < 1 || amount > bal) {
      toast(`Enter an amount between ₹1 and ${money(bal)}`);
      return;
    }

    r.paid = +r.paid + amount;
    r.status = r.paid >= +r.amount ? 'Paid' : 'Partial';
    save();
    toast(`${money(amount)} payment recorded for ${r.student}!`);
    return;
  }

  if (action === 'reset') {
    state.overlay = {
      type: 'confirm-reset',
      title: 'Reset demonstration data?',
      body: '<p>All changes made in this browser will be replaced with original sample records.</p>',
      action: 'confirm-reset',
      actionLabel: 'Reset demo data'
    };
    render();
    return;
  }

  if (action === 'confirm-reset') {
    if (typeof fetch !== 'undefined') {
      fetch('/api/settings/reset', { method: 'POST' }).catch(() => {});
    }
    db = clone(initial);
    save();
    state.overlay = null;
    toast('Demo data restored');
    return;
  }

  if (action === 'new-task') {
    state.overlay = {
      type: 'custom',
      title: 'Add a priority task',
      body: `
        <form id="task-form">
          <div class="form-field">
            <label for="task-title">Task description *</label>
            <input id="task-title" placeholder="What needs to be done?" required autofocus>
          </div>
          <div class="form-field mt16">
            <label for="task-meta">Department & deadline</label>
            <input id="task-meta" placeholder="Admissions · Due today">
          </div>
          <div style="display:none"><button type="submit"></button></div>
        </form>
      `,
      action: 'save-task',
      actionLabel: 'Add task'
    };
    render();
    return;
  }

  if (action === 'save-task') {
    let titleEl = document.getElementById('task-title');
    let metaEl = document.getElementById('task-meta');
    let title = titleEl ? titleEl.value.trim() : '';
    if (!title) {
      toast('Please enter a task title');
      return;
    }
    db.tasks.unshift({
      id: 'T-' + Date.now(),
      title,
      meta: (metaEl && metaEl.value.trim()) || 'School team · Today',
      done: false
    });
    save();
    state.overlay = null;
    toast('Task added to priorities');
    return;
  }

  if (action === 'new-event') {
    state.overlay = {
      type: 'custom',
      title: 'Add class event',
      body: `
        <form id="event-form">
          <div class="form-grid">
            <div class="form-field full">
              <label for="event-note">Event title *</label>
              <input id="event-note" placeholder="e.g. Science lab substitution" required autofocus>
            </div>
            <div class="form-field">
              <label for="event-day">Day</label>
              <select id="event-day">
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>
            </div>
            <div class="form-field">
              <label for="event-time">Time</label>
              <input id="event-time" type="time" value="10:30">
            </div>
            <div class="form-field full">
              <label for="event-room">Room & teacher</label>
              <input id="event-room" value="Room 204 · S. Desai">
            </div>
          </div>
          <div style="display:none"><button type="submit"></button></div>
        </form>
      `,
      action: 'save-event',
      actionLabel: 'Save event'
    };
    render();
    return;
  }

  if (action.startsWith('timetable-class:')) {
    state.attClass = action.slice(16);
    render();
    return;
  }

  if (action.startsWith('timetable-wing:')) {
    state.timetableWing = action.slice(15);
    render();
    return;
  }

  if (action === 'print-timetable') {
    window.print();
    return;
  }

  if (action === 'save-event') {
    let noteEl = document.getElementById('event-note');
    let note = noteEl ? noteEl.value.trim() : '';
    if (!note) {
      toast('Enter an event title');
      return;
    }
    let newEvent = {
      id: 'EV-' + Date.now(),
      title: note,
      day: document.getElementById('event-day').value,
      time: document.getElementById('event-time').value,
      room: document.getElementById('event-room').value
    };
    if (!Array.isArray(db.events)) db.events = [];
    db.events.push(newEvent);
    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent)
      }).catch(() => {});
    }
    state.overlay = null;
    render();
    toast('Class event added');
    return;
  }

  if (action.startsWith('remove-event:')) {
    let evId = action.slice(13);
    if (!Array.isArray(db.events)) db.events = [];
    db.events = db.events.filter(x => x.id !== evId);
    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/events/' + evId, { method: 'DELETE' }).catch(() => {});
    }
    render();
    toast('Class event removed');
    return;
  }

  let slotTarget = e.target.closest('[data-action="slot"]');
  if (slotTarget || action.startsWith('slot:')) {
    let sub, day, time, period, cls, room, teacher, color;
    if (slotTarget) {
      sub = slotTarget.dataset.sub || 'Subject';
      day = slotTarget.dataset.day || 'Monday';
      time = slotTarget.dataset.time || '08:30';
      period = slotTarget.dataset.period || 'Period';
      cls = slotTarget.dataset.class || state.attClass || 'Grade 8 A';
      room = slotTarget.dataset.room || 'Room 204';
      teacher = slotTarget.dataset.teacher || 'K. Iyer';
      color = slotTarget.dataset.color || 'blue';
    } else {
      let parts = action.split(':');
      sub = decodeURIComponent(parts[1] || 'Subject');
      day = decodeURIComponent(parts[2] || 'Monday');
      time = decodeURIComponent(parts[3] || '08:30');
      cls = decodeURIComponent(parts[4] || state.attClass || 'Grade 8 A');
      room = decodeURIComponent(parts[5] || 'Room 204');
      teacher = decodeURIComponent(parts[6] || 'K. Iyer');
      period = 'Period';
      color = 'blue';
    }

    state.overlay = {
      type: 'custom',
      title: `${sub} · ${cls}`,
      body: `
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px; padding:12px; background:#f8fafc; border-radius:10px; border:1px solid #e2e8f0;">
          <div style="width:40px; height:40px; border-radius:8px; background:#4665c3; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:16px;">
            ${esc(sub.slice(0, 2).toUpperCase())}
          </div>
          <div>
            <h3 style="margin:0; font-size:15px; color:#1e293b">${esc(sub)}</h3>
            <p style="margin:2px 0 0; font-size:12px; color:#64748b">${esc(cls)} · ${esc(day)} (${esc(time)})</p>
          </div>
        </div>
        <div class="detail-row"><span>Day & Period</span><b>${esc(day)} · ${esc(period)}</b></div>
        <div class="detail-row"><span>Schedule Time</span><b>${esc(time)}</b></div>
        <div class="detail-row"><span>Class & Section</span><b>${esc(cls)}</b></div>
        <div class="detail-row"><span>Allocated Facility</span><b>${esc(room)}</b></div>
        <div class="detail-row"><span>Subject Faculty</span><b>${esc(teacher)}</b></div>
        <div class="detail-row"><span>Curriculum Unit</span><b>Term 2 Core Syllabus Module</b></div>
        <div class="insight-card" style="margin-top:14px">
          <strong>Curriculum Session Details:</strong> Active scheduled lesson for ${esc(sub)} in ${esc(cls)}. Use <strong>Add class event</strong> to schedule ad-hoc revisions, lab tests, or teacher substitutions.
        </div>
        <div style="margin-top:16px; display:flex; gap:8px">
          <button type="button" class="btn primary small" data-action="new-event" style="flex:1">Schedule Event / Substitution</button>
          <button type="button" class="btn small" data-action="close">Close</button>
        </div>
      `
    };
    render();
    return;
  }

  if (action === 'notifications') {
    state.hasUnreadNotifs = false;
    let overdueCount = visible(db.fees).filter(f => f.status === 'Overdue').length;
    let newLeadsCount = visible(db.leads).filter(x => x.stage === 'New enquiry').length;
    let openTicketsCount = visible(db.tickets).filter(x => x.status === 'Open').length;

    state.overlay = {
      type: 'custom',
      title: 'School notifications',
      body: `
        <div class="notif-card" data-page="fees" data-action="close">
          <span class="activity-icon orange">${icon('wallet')}</span>
          <div>
            <strong>${overdueCount} overdue fee invoices</strong>
            <p>Click to open fees and follow up with parents</p>
          </div>
        </div>
        <div class="notif-card" data-page="admissions" data-action="close">
          <span class="activity-icon">${icon('users')}</span>
          <div>
            <strong>${newLeadsCount} new enquiries awaiting contact</strong>
            <p>Click to open admissions pipeline</p>
          </div>
        </div>
        <div class="notif-card" data-page="helpdesk" data-action="close">
          <span class="activity-icon green">${icon('headset')}</span>
          <div>
            <strong>${openTicketsCount} open service requests</strong>
            <p>Assigned to transport, facilities and finance</p>
          </div>
        </div>
      `,
      action: 'mark-read',
      actionLabel: 'Dismiss all'
    };
    render();
    return;
  }

  if (action === 'mark-read') {
    state.hasUnreadNotifs = false;
    state.overlay = null;
    toast('All notifications marked as read');
    return;
  }
});

// Dropdown / form change listener
document.addEventListener('change', e => {
  if (e.target.id === 'campus-select') {
    state.campus = e.target.value;
    render();
    toast(`Viewing records for ${state.campus}`);
  } else if (e.target.id === 'role-select') {
    state.role = e.target.value;
    render();
    toast(`${state.role} perspective active`);
  } else if (e.target.matches('[data-task]')) {
    let t = db.tasks.find(x => x.id === e.target.dataset.task);
    if (t) t.done = e.target.checked;
    save();
    render();
  } else if (e.target.id === 'attendance-class' || e.target.id === 'timetable-class-select') {
    state.attClass = e.target.value;
    render();
  } else if (e.target.id === 'exam-class-dropdown') {
    state.examClass = e.target.value;
    let cls = ALL_CLASSES.find(c => c.name === state.examClass);
    if (cls && state.examWing !== 'All' && cls.wing !== state.examWing) {
      state.examWing = 'All';
    }
    render();
  } else if (e.target.id === 'exam-subject-select') {
    state.examSubject = e.target.value;
    render();
  } else if (e.target.id === 'exam-status-input') {
    e.target.dispatchEvent(new Event('input', { bubbles: true }));
  }
});

// Input handling for real-time table & global searches
document.addEventListener('input', e => {
  if (e.target.id === 'exam-theory-input' || e.target.id === 'exam-practical-input' || e.target.id === 'exam-status-input') {
    let tIn = document.getElementById('exam-theory-input');
    let pIn = document.getElementById('exam-practical-input');
    let sIn = document.getElementById('exam-status-input');
    let form = document.getElementById('exam-marks-form');
    if (tIn && pIn && form) {
      let maxT = Number(form.dataset.maxt) || 80;
      let maxP = Number(form.dataset.maxp) || 20;
      let calc = calculateGrade(tIn.value, pIn.value, maxT, maxP, 40, sIn ? sIn.value : 'Present');
      let totEl = document.getElementById('live-total');
      let pctEl = document.getElementById('live-pct');
      let grdEl = document.getElementById('live-grade');
      if (totEl) totEl.innerText = `${calc.total} / ${calc.maxTotal}`;
      if (pctEl) pctEl.innerText = `${calc.pct}%`;
      if (grdEl) grdEl.innerText = `${calc.grade} (${calc.gradePoint})`;
    }
  }
  if (e.target.id === 'table-search') {
    state.query = e.target.value;
    let contentEl = document.querySelector('.content');
    if (contentEl) {
      contentEl.innerHTML = pageContent();
      let input = document.getElementById('table-search');
      if (input) {
        input.focus();
        let len = input.value.length;
        input.setSelectionRange(len, len);
      }
    }
  } else if (e.target.id === 'global-search') {
    state.globalQuery = e.target.value;
    state.showGlobalSearch = state.globalQuery.trim().length > 0;
    let existingDropdown = document.getElementById('search-dropdown');
    let searchbox = document.querySelector('.searchbox');

    if (state.showGlobalSearch) {
      let results = getGlobalSearchResults(state.globalQuery);
      let dropdownHtml = results.length ? `
        <div class="search-group-title">Matches for "${esc(state.globalQuery)}"</div>
        ${results.map(r => `
          <div class="search-item" data-open="${r.key}:${esc(r.id)}" data-action="close-search">
            <div class="search-item-info">
              <div class="flex">
                <span class="search-item-icon">${icon(r.icon)}</span>
                <strong>${esc(r.title)}</strong>
                ${pill(r.badge)}
              </div>
              <small>${esc(r.sub)}</small>
            </div>
            ${icon('chevron')}
          </div>
        `).join('')}
      ` : `
        <div class="search-empty">No results found for "${esc(state.globalQuery)}"</div>
      `;

      if (existingDropdown) {
        existingDropdown.innerHTML = dropdownHtml;
      } else if (searchbox) {
        let div = document.createElement('div');
        div.className = 'search-dropdown';
        div.id = 'search-dropdown';
        div.innerHTML = dropdownHtml;
        searchbox.appendChild(div);
      }
    } else {
      if (existingDropdown) existingDropdown.remove();
    }
  }
});

// Keyboard handling
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (state.showGlobalSearch) {
      state.showGlobalSearch = false;
      render();
    } else if (state.overlay) {
      state.overlay = null;
      render();
    }
  }
});

// Form submit listener
document.addEventListener('submit', e => {
  if (e.target.id === 'record-form') {
    e.preventDefault();
    let f = e.target;
    let key = f.dataset.key;
    let id = f.dataset.id;
    let values = Object.fromEntries(new FormData(f).entries());

    if (key === 'fees') {
      values.amount = +values.amount || 0;
      values.paid = +values.paid || 0;
      if (values.paid > values.amount) {
        toast('Paid amount cannot exceed invoice amount');
        return;
      }
      values.status = values.paid >= values.amount ? 'Paid' : values.paid > 0 ? 'Partial' : (values.status || 'Pending');
    }

    if (key === 'transport') {
      values.students = +values.students || 0;
      values.capacity = +values.capacity || 0;
    }

    if (key === 'messages') {
      values.sent = '24 Nov 2026';
      values.status = 'Sent';
    }

    if (key === 'students') {
      if (!id) {
        values.attendance = '100%';
        values.balance = 0;
      }
    }

    if (id) {
      let item = (db[key] || []).find(x => x.id === id);
      if (item) Object.assign(item, values);
    } else {
      let newId = generateId(key);
      db[key].unshift({ id: newId, ...values });
    }

    // Ensure the new record is visible in the view
    if (values.campus && state.campus !== 'All campuses' && state.campus !== values.campus) {
      state.campus = values.campus;
    }
    state.filter = 'All';
    state.query = '';

    save();
    state.overlay = null;
    toast(id ? 'Record updated' : 'Record created successfully');
    return;
  }

  if (e.target.id === 'task-form') {
    e.preventDefault();
    let titleEl = document.getElementById('task-title');
    let metaEl = document.getElementById('task-meta');
    let title = titleEl ? titleEl.value.trim() : '';
    if (!title) {
      toast('Please enter a task title');
      return;
    }
    db.tasks.unshift({
      id: 'T-' + Date.now(),
      title,
      meta: (metaEl && metaEl.value.trim()) || 'School team · Today',
      done: false
    });
    save();
    state.overlay = null;
    toast('Task added to priorities');
    return;
  }

  if (e.target.id === 'event-form') {
    e.preventDefault();
    let noteEl = document.getElementById('event-note');
    let note = noteEl ? noteEl.value.trim() : '';
    if (!note) {
      toast('Enter an event title');
      return;
    }
    let newEvent = {
      id: 'EV-' + Date.now(),
      title: note,
      day: document.getElementById('event-day').value,
      time: document.getElementById('event-time').value,
      room: document.getElementById('event-room').value
    };
    if (!Array.isArray(db.events)) db.events = [];
    db.events.push(newEvent);
    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent)
      }).catch(() => {});
    }
    state.overlay = null;
    render();
    toast('Class event added');
    return;
  }

  if (e.target.id === 'payment-form') {
    e.preventDefault();
    let invId = e.target.dataset.invoice;
    let r = db.fees.find(x => x.id === invId);
    let amountInput = document.getElementById('payment-amount');
    let amount = amountInput ? +amountInput.value : 0;
    let bal = Math.max(0, +r.amount - +r.paid);

    if (!amount || amount < 1 || amount > bal) {
      toast(`Enter an amount between ₹1 and ${money(bal)}`);
      return;
    }

    r.paid = +r.paid + amount;
    r.status = r.paid >= +r.amount ? 'Paid' : 'Partial';
    save();
    state.overlay = { type: 'detail', key: 'fees', id: invId };
    render();
    toast(`${money(amount)} payment recorded for ${r.student}!`);
    return;
  }

  if (e.target.id === 'att-reason-form') {
    e.preventDefault();
    let studentId = e.target.dataset.student;
    let dayIdx = parseInt(e.target.dataset.day, 10);
    let status = document.getElementById('att-status-select').value;
    let reason = document.getElementById('att-reason-select').value;
    let arrivalTime = document.getElementById('att-arrival-time').value.trim();
    let remarks = document.getElementById('att-remarks-text').value.trim();

    if (!db.attendance[studentId]) db.attendance[studentId] = Array(5).fill('Unmarked');
    db.attendance[studentId][dayIdx] = status;

    if (!db.attendanceMeta) db.attendanceMeta = {};
    db.attendanceMeta[studentId + '_' + dayIdx] = { reason, remarks, arrivalTime };

    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/attendance/mark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          dayIdx,
          status,
          reason,
          remarks,
          arrivalTime,
          className: state.attClass
        })
      }).catch(() => {});
    }

    state.overlay = null;
    render();
    toast(`Saved attendance reason & notes for ${studentId}`);
    return;
  }

  if (e.target.id === 'exam-marks-form') {
    e.preventDefault();
    let f = e.target;
    let stId = f.dataset.student;
    let examId = f.dataset.exam;
    let theory = Number(document.getElementById('exam-theory-input').value) || 0;
    let practical = Number(document.getElementById('exam-practical-input').value) || 0;
    let status = document.getElementById('exam-status-input').value;
    let remarks = document.getElementById('exam-remarks-input').value.trim();

    let markKey = `${stId}_${examId}`;
    if (!db.examMarks) db.examMarks = {};
    db.examMarks[markKey] = {
      theory,
      practical,
      status,
      remarks,
      coscholastic: { workEdu: 'A', artEdu: 'A', healthPhy: 'A', discipline: status === 'Present' ? 'A' : 'B' }
    };

    save();
    if (typeof fetch !== 'undefined') {
      fetch('/api/exams/marks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: stId, examId, theory, practical, remarks, status })
      }).catch(() => {});
    }

    state.overlay = null;
    render();
    let st = db.students.find(s => s.id === stId);
    toast(`Marks recorded for ${st ? st.name : stId}!`);
    return;
  }

  if (e.target.id === 'settings-form') {
    e.preventDefault();
    Object.assign(db.settings, Object.fromEntries(new FormData(e.target).entries()));
    save();
    toast('School profile updated');
  }
});

// Route & Initial Page Sync
(function initRoutingSync() {
  if (typeof window !== 'undefined' && window.location) {
    const fromHash = parsePageFromHash();
    if (fromHash) {
      state.page = fromHash;
    } else {
      if (window.location.hash !== '#/' + state.page) {
        window.location.hash = '#/' + state.page;
      }
    }
    try {
      localStorage.setItem('campusos_active_page', state.page);
    } catch (e) {}
  }
})();

render();
