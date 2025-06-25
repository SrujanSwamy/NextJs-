import React from 'react'
import books from '@/app/api/db'



export async function DELETE(request: Request, context :{params:{id: number}}) {

    const {id}=context.params;

  const index=books.findIndex((b)=> b.id==id)
  books.slice(index,1);
  return Response.json(books);
  
}
