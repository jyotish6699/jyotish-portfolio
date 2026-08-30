export type SemesterStatus = "completed" | "current";

export type Semester = {
  number: number;
  tgpa?: number;
  status: SemesterStatus;
};

export type Education = {
  degree: string;
  branch: string;
  institution: string;
  location: string;
  startYear: number;
  expectedCompletion: number;
  currentSemester: number;
  cgpa: number;
  semesters: Semester[];
};

export const education: Education = {
  degree: "B.Tech",
  branch: "Computer Science and Engineering",
  institution: "Lovely Professional University",
  location: "Phagwara, Punjab, India",
  startYear: 2025,
  expectedCompletion: 2029,
  currentSemester: 3,
  cgpa: 7.71,
  semesters: [
    {
      number: 1,
      tgpa: 7.06,
      status: "completed",
    },
    {
      number: 2,
      tgpa: 8.16,
      status: "completed",
    },
    {
      number: 3,
      status: "current",
    },
  ],
};
