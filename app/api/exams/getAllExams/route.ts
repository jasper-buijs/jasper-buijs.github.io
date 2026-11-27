import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export type Exam = {
  id: number,
  name: string,
  kulCourseCode: string | null,
  vubCourseCode: string | null,
  startDate: Date,
  users: {
    userId: string,
    userName: string,
    userImg: string | null,
  }[]
};

export async function POST(
  req: NextRequest
) {
  const data: { startFilterDate: number, endFilterDate: number } = await req.json();

  const prismaExams = await prisma.exam.findMany({
    where: {
      startDate: {
        gt: new Date(data.startFilterDate),
        lt: new Date(data.endFilterDate),
      }
    },
    include: {
      user: true,
    },
    orderBy: {
      startDate: "asc",
    }
  });

  const examsByCourseAndDate = new Map<string, Exam>();

  for (const exam of prismaExams) {
    const courseKey = exam.kulCourseCode !== null
      ? `kul:${exam.kulCourseCode}`
      : exam.vubCourseCode !== null
        ? `vub:${exam.vubCourseCode}`
        : `exam:${exam.id}`;
    const key = JSON.stringify([courseKey, exam.startDate.getTime()]);
    const existingExam = examsByCourseAndDate.get(key);

    if (existingExam) {
      if (existingExam.users.some((user) => user.userId === exam.userId)) {
        continue;
      }

      existingExam.users.push({
        userId: exam.userId,
        userName: exam.user.name,
        userImg: exam.user.image,
      });
    } else {
      examsByCourseAndDate.set(key, {
        id: exam.id,
        name: exam.name,
        kulCourseCode: exam.kulCourseCode,
        vubCourseCode: exam.vubCourseCode,
        startDate: exam.startDate,
        users: [{
          userId: exam.userId,
          userName: exam.user.name,
          userImg: exam.user.image,
        }],
      });
    }
  }

  const exams = [...examsByCourseAndDate.values()];

  return NextResponse.json({ exams: exams }, { status: 200 });
}