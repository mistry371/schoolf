# 🎓 Northstar CampusOS — School Operations & CRM Frontend

An enterprise-grade, comprehensive School Management & Operations Frontend Single Page Application (SPA). Built with zero-dependency vanilla JavaScript and high-performance modern CSS, featuring responsive layouts, state persistence across page refreshes, client-side hash routing, and 16 modular school operational consoles.

---

## 🌟 Key Features & Operational Consoles

### 1. 📊 Executive Workspace & KPIs
* Real-time executive dashboards for Admissions, Students, Today's Attendance, and Fee Collections.
* Actionable priority queues, event calendars, and admissions funnel intelligence.

### 2. 👥 Admissions & Pipeline
* End-to-end prospective student enquiry pipeline (New Enquiry ➔ Contacted ➔ School Visit ➔ Application ➔ Admitted).
* 1-Click lead enrolment into active student roster with automatic student ID and balance generation.

### 3. 🎓 Students Dossier 360°
* Complete student profile dossiers with academic history, attendance trends, disciplinary logs, and parent guardian details.
* Live balance calculation synced across term tuition, transport, and library dues.

### 4. 📅 Smart Attendance Management
* Real-time weekly attendance matrix with single-click status cycling (Present, Absent, Late, Excused).
* Daily bulk attendance markers ("Mark All Present", "Fill Unmarked") and parental notification triggers.

### 5. 📝 Academics & Examination Management
* Comprehensive Gradebook & Assessment engine supporting CBSE CCE grading (A1, A2, B1, etc.).
* Automated generation of official CBSE Report Cards and Board Examination Hall Tickets / Admit Cards.

### 6. 💳 Fees, Invoicing & Rapid Receipts
* Comprehensive fee invoicing with instant 1-click Pay Full simulation, UPI QR code integration, and printable thermal receipt vouchers.

### 7. ⏰ Master Class Timetable
* Weekly schedule planner across all school wings (Primary, Middle, Senior).
* Interactive period blocks displaying subject, faculty in-charge, and room allocations.

### 8. 📱 Dual-Device Parent Portal
* Switch between Smartphone Mockup (375px mobile app) and Desktop Parent Portal.
* Sibling switcher (Aanya Patel - Grade 8 A & Kabir Patel - Grade 4 B).
* 8 parent services: Academics & Report Cards, Fee Payment, Attendance & Leave Request, Live GPS Bus Tracking, Daily Bell Timetable, Homework Diaries, Permission Slips, and Dismissal Gate Pass with QR and PIN.

### 9. 📢 Parent Communication (Omnichannel Engagement)
* Omnichannel Broadcast Composer across WhatsApp Business API, SMS DLT Priority Gateway, and In-App Push.
* Segmented audience targeting (by wing, grade, route, or fee due cohort) and delivery analytics (Sent, Delivered, Read receipts).

### 10. 🔄 Staff & HR (Faculty Operations & Substitution Matrix)
* Morning absence detection and Daily Timetable Substitution & Cover Matrix.
* Timetable free-teacher period scanner for 1-click cover assignment.
* Faculty 360° dossier detailing qualifications, tenure, weekly period workloads, and leave quotas.

### 11. 🚌 Transport & Routes (Fleet Telematics & Stop Manifests)
* Stop-by-stop passenger boarding manifests with scheduled pickup/drop-off times, parent contact numbers, and boarding status indicators.
* 1-Click Route Delay broadcast modal (10m, 15m, 30m).
* Statutory Fleet Road Compliance ledger (Fitness Certificate FC, Insurance, Pollution PUC, Speed Governor 40 km/h).

### 12. 📖 School Library (Digital OPAC Catalog & Circulation)
* Modern OPAC catalog grid with Dewey Decimal call numbers, shelf racks, and real-time copy availability.
* Rapid circulation check-out simulator and overdue fines ledger (@ ₹5/day with 1-click sync to student fee balance).

### 13. 🏢 Assets & Facilities (Clash-Free Venue Reservations)
* Clash-free booking engine for Dr. Vikram Sarabhai Auditorium, Atal Tinkering STEM Lab, AV Seminar Hall, and Olympic Sports Ground.
* Maintenance work order dispatch system with priority levels, technician assignment, and repair expense tracking.
* Statutory Preventive Maintenance (PPM) schedule checklists.

### 14. 📋 Compliance Tracker & Helpdesk
* Board statutory obligations (CBSE affiliation, fire safety, water sanitation, building safety, POSHCO committee).
* Multi-department service ticket queue with priority routing.

---

## 🚀 Quick Start & Local Setup

### Option 1: Direct Browser Launch
Simply open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Static Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js npx serve
npx serve .
```
Navigate to `http://localhost:8000/`.

---

## 🔗 Routing & Deep Linking
The frontend uses URL Hash routing (`#/<page>`), ensuring that reloading (F5) maintains the active page and view state:
* `/#/timetable`
* `/#/attendance`
* `/#/communication`
* `/#/staff`
* `/#/transport`
* `/#/library`
* `/#/assets`
* `/#/parent`
