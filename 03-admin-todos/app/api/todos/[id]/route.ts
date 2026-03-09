import { Todo } from '@/app/generated/prisma';
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string } from 'yup';

interface Segments {
  params: {
    id: string;
  }
}

const getTodo = async( id: string ):Promise<Todo | null> => {

  const todo = await prisma.todo.findFirst({ where: { id } });

  return todo;
}

export async function GET(request: Request, { params }: Segments) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `No existe todo con id ${id}` },
      { status: 400 }
    );
  }
  return new NextResponse(JSON.stringify({
    todo
  }), { status: 200 });
}

const putSchema = object({
    description: string().optional(),
    complete: boolean().optional(),
  });

export async function PUT(request: Request, { params }: Segments) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `No existe todo con id ${id}` },
      { status: 400 }
    );
  }

  try {
    const {description, complete} = await putSchema.validate(await request.json());
  
    const updatedTodo = await prisma.todo.update({
      where : {id}, 
      data  : {description, complete}
    });  
  
    return NextResponse.json(updatedTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, {status: 400})
  }
}
