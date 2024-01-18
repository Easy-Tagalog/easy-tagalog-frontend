import { dbConnect } from "@/lib/dbConnect";
import Word from "@/models/Word";
import { lessonOneWords } from "@/data/words";

// For now, used for inserting words into the database
export async function POST(req: Request) {
  await dbConnect(); // Database connection

  // const words = await Word.insertMany(lessonOneWords);

  return Response.json({ message: "success" }, { status: 201 });
}
