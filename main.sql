-- Students table
CREATE TABLE Students (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Phone VARCHAR(20),
    Date_of_Birth DATE,
    Gender VARCHAR(10),
    Address VARCHAR(255)
);

-- Courses table
CREATE TABLE Courses (
    Course_ID INT PRIMARY KEY,
    Course_Name VARCHAR(100),
    Description TEXT,
    Instructor_ID INT,
    FOREIGN KEY (Instructor_ID) REFERENCES Instructors(Instructor_ID)
);

-- Instructors table
CREATE TABLE Instructors (
    Instructor_ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Phone VARCHAR(20),
    Expertise VARCHAR(255)
);

-- Enrollments table
CREATE TABLE Enrollments (
    Enrollment_ID INT PRIMARY KEY,
    Student_ID INT,
    Course_ID INT,
    Enrollment_Date DATE,
    FOREIGN KEY (Student_ID) REFERENCES Students(Student_ID),
    FOREIGN KEY (Course_ID) REFERENCES Courses(Course_ID)
);

-- Assignments table
CREATE TABLE Assignments (
    Assignment_ID INT PRIMARY KEY,
    Course_ID INT,
    Title VARCHAR(100),
    Description TEXT,
    Deadline DATE,
    FOREIGN KEY (Course_ID) REFERENCES Courses(Course_ID)
);

-- Submissions table
CREATE TABLE Submissions (
    Submission_ID INT PRIMARY KEY,
    Assignment_ID INT,
    Student_ID INT,
    Submission_Date DATE,
    Score DECIMAL(5, 2),
    FOREIGN KEY (Assignment_ID) REFERENCES Assignments(Assignment_ID),
    FOREIGN KEY (Student_ID) REFERENCES Students(Student_ID)
);
+-------------+        +-------------+        +-------------+
|  Students   |        |   Courses   |        | Instructors |
+-------------+        +-------------+        +-------------+
| Student_ID  |---|<---| Course_ID   |        | Instructor_ID|
| Name        |        | Course_Name |        | Name        |
| Email       |        | Description |        | Email       |
| Phone       |        | Instructor_ID|---|<--| Phone       |
| Date_of_Birth|       +-------------+        | Expertise   |
| Gender      |                              +-------------+
| Address     |
+-------------+

+-------------+        +-------------+
| Enrollments |        | Assignments |
+-------------+        +-------------+
| Enrollment_ID|---|<--| Assignment_ID|
| Student_ID  |        | Course_ID   |
| Course_ID   |        | Title       |
| Enrollment_Date|     | Description |
+-------------+        | Deadline    |
                       +-------------+

+----------------+
| Submissions    |
+----------------+
| Submission_ID  |
| Assignment_ID  |
| Student_ID     |
| Submission_Date|
| Score          |
+----------------+
