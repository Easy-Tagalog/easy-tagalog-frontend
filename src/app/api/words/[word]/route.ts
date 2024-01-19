import { dbConnect } from "@/lib/dbConnect";
import Word from "@/models/Word";

// ENDPOINT: .../api/words/[word]

const GET_WORD_BY_PARAM_LIMIT = 5;

// Gets all words
export async function GET(
  req: Request,
  { params }: { params: { word: string } }
) {
  try {
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
  } catch (error) {
    return Response.json({ message: "Failed to find word" }, { status: 500 });
  }
}
