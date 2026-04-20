# Project : Student Task Manager App

## Project Description
Angular-based Task Manager application with authentication and task tracking features using mock API.

---

## Features

### Login
- Hardcoded username & password login
- Protected routes using auth guard
- Redirect unauthorized users to login page

---

### Dashboard
- Total tasks count
- Completed tasks count
- Pending tasks count
- Auto-updates without refresh

---

### Task List
- View all tasks in table format
- Columns: Title, Assigned To, Priority, Due Date, Status
- High priority tasks highlighted
- View button → Task Details page

---

### Task Details
- Full task information view
- Mark as Complete button
- Updates dashboard instantly

---

### Add Task
- Form with validation:
  - Title
  - Description
  - Assigned To
  - Priority
  - Due Date

---

### Edit Task
- Pre-filled form for editing
- Update task and return to list

---

### Delete Task
- Confirmation before delete
- Instant UI update

---

## Tech Stack
- Angular
- TypeScript
- HTML, CSS
- JSON Server / Mock API

---

## Screenshots

### Login Page
![Login](screenshots/login.png)

### Signup
![Signup](screenshots/signup.png)


### Dashboard
![Dashboard](screenshots/dashboard.png)

### Task List
![Task List](screenshots/tasklist.png)

### Task Detail
![Task Detail](screenshots/taskdetail.png)


### Task Update
![Task Update](screenshots/taskupdate.png)

### Task Delete
![Task Delete](screenshots/taskdel.png)


---

## Run Project

npm install
ng serve