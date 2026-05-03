import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string } from 'yup';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get('take') ?? 10);
  const skip = Number(searchParams.get('skip') ?? 2);

  const todos = await prisma.todo.findMany(
    {
      take: take,
      skip: skip
    }
  );

  return new NextResponse(JSON.stringify({
    todos: todos
  }), { status: 200 });
}

const postSchema = object({
  description: string().required(),
  complete: boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const body = await postSchema.validate(await request.json());
    const todo = await prisma.todo.create({ data: body });

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE() {
  try {
    const { count } = await prisma.todo.deleteMany({
      where: {
        complete: true
      }
    })

    return NextResponse.json({ status: 200, deleted: count });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
