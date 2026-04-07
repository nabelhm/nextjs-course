import { TodosGrid } from "@/todos";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Rest Todos",
  description: "A page to test the rest api route for todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({orderBy: {description: 'asc'}});

  return (
    <div>
      <TodosGrid todos={todos}/>
    </div>
  );
}