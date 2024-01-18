import { dbConnect } from "@/lib/dbConnect";
import Word from "@/models/Word";

const GET_WORD_BY_PARAM_LIMIT = 5;

// Gets word by the param and limits only to 5
export async function GET(
  req: Request,
  { params }: { params: { word: string } }
) {
  await dbConnect(); // Database connection

  const wordToFind = params.word;

  const word = await Word.find({
    $or: [
      { tagalog: wordToFind },
      { tagalogWithNG: wordToFind },
      { english: { $in: [wordToFind] } },
      { root: wordToFind },
    ],
  })
    .select("-__v")
    .limit(GET_WORD_BY_PARAM_LIMIT);

  return Response.json({
    word,
  });
}
