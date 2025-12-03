"use server";

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

interface QueuedExam {
  name: string,
  startDate: Date,
  courseCode?: string
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const exams: QueuedExam[] = await req.json();
  if (!exams) return NextResponse.json({ error: "No exams received" }, { status: 500 });

  const user = await prisma.user.findUnique({
    where: {
      username: session.user?.name as string,
    }
  });

  if (user == null) return NextResponse.json({ redirect: "/update-logout" }, { status: 400 });

  //console.log("deleting");
  await prisma.exam.deleteMany({
    where: {
      user: user,
    }
  });

  //console.log("registering exams");
  if (exams[0].courseCode) {
    await prisma.exam.createManyAndReturn({
      data: exams.map((e) => {
        return {
          name: e.name,
          startDate: e.startDate,
          courseCode: e.courseCode,
          userId: user.id,
        };
      }),
    });
    //console.log(`registered:\n${registered}`);
  } else {
    await prisma.exam.createManyAndReturn({
      data: exams.map((e) => {
        return {
          name: e.name,
          startDate: e.startDate,
          userId: user.id,
        };
      }),
    });
    //console.log(`registered:\n${registered}`);
  }

  return NextResponse.json({ status: 200 });
}