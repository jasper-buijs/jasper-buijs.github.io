import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"

type ManualData = {
  user_id: string,
  user_name: string,
  course_name: string,
  exam_time: string,
}

export async function POST(
  req: NextRequest
) {
  try {
    const data = Object.fromEntries(await req.formData()) as ManualData;

    await prisma.exam.create({
      data: {
        name: data.course_name,
        startDate: new Date(data.exam_time),
        userId: data.user_id,
      }
    });

    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}