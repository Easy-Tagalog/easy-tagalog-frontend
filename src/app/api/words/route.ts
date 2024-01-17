import { dbConnect } from "@/lib/dbConnect";
import Word from "@/models/Word";

// Creating a word
export async function POST(req: Request) {
  await dbConnect(); // Database connection

  const body = await req.json();

  return Response.json({ message: "Hello" }, { status: 201 });
}
