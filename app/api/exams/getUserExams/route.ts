import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export type Exam = {
  id: number,
  name: string,
  kulCourseCode: string | null,
  vubCourseCode: string | null,
  startDate: Date,
  userId: string
};

export async function POST(
  req: NextRequest
) {
  const data: { user_id: string } = await req.json();

  const allUserExams: Exam[] = await prisma.exam.findMany({
    where: {
     userId: data.user_id
    },
    orderBy: {
      startDate: "asc",
    }
  });

  const date = new Date();
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  if (currentMonth == 0) {
    date.setFullYear(currentYear - 1, 8, 20); // 25 Jan 2027 -> 20 Sep 2026
    date.setHours(3, 0, 0, 0);
  } else if (currentMonth < 6) {
    date.setFullYear(currentYear, 1, 1); // 25 Jun 2027 -> 1 Feb 2027
    date.setHours(3, 0, 0, 0);
  } else if (currentMonth < 8 || (currentMonth == 8 && currentDay < 20)) {
    date.setFullYear(currentYear, 6, 1); // 2 Sep 2027 -> 1 Jul 2027
    date.setHours(3, 0, 0, 0);
  } else {
    date.setFullYear(currentYear, 8, 20); // 25 Dec 2027 -> 20 Sep 2027
    date.setHours(3, 0, 0, 0);
  }

  const userExams = allUserExams.filter(
    (exam) => exam.startDate.getTime() > date.getTime());

  return NextResponse.json({ exams: userExams }, { status: 200 });
}