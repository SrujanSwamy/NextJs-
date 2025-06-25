import React from 'react'
import books from '@/app/api/db'

//thsi are the named exports so don't use defualt in this function call 

export  async function GET() {
  return Response.json(books);
}

export  async function POST(request: Request){
    const book=await request.json();
    books.push(book);
    return Response.json(books);

}
