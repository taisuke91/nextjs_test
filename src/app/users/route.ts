import { NextRequest, NextResponse } from 'next/server';

export const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export async function GET() {
  // Use NextResponse.json for automatic content-type and status handling
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const user = await request.json();
  const newUser = { id: users.length + 1, name: user.name };
  users.push(newUser); // In a real application, you'd update a database here, not a global array.

  // Use NextResponse for consistent API responses
  return NextResponse.json(newUser, { status: 201 });
}