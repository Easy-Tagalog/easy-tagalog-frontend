import { dbConnect } from "@/lib/dbConnect";
import Word from "@/models/Word";

// Gets one word by the wordId
export async function GET(
  req: Request,
  { params }: { params: { wordId: string } }
) {
  await dbConnect(); // Database connection

  const wordId = params.wordId;

  const body = await req.json();

  const word = Word.findByIdAndUpdate(wordId, body);

  return Response.json({ updatedWord: word }, { status: 200 });
}
