import { dbConnect } from "@/lib/dbConnect";
import Word from "@/models/Word";

// ENDPOINT: .../api/words/[word]

const GET_WORDS_LIMIT = 5;

// For the "Translate" page, to get all words based on a search query
export async function GET(
  req: Request,
  { params }: { params: { word: string } }
) {
  try {
    await dbConnect(); // Database connection

    const wordToFind = params.word;

    const words = await Word.find({
      $or: [
        { tagalog: wordToFind },
        { tagalogWithNG: wordToFind },
        { tagalogAlternateSpelling: wordToFind },
        { english: { $in: [wordToFind] } },
        { root: wordToFind },
      ],
    })
      .select("-__v")
      .limit(GET_WORDS_LIMIT);

    return Response.json({ words }, { status: 200 });
  } catch (error) {
    return Response.json(
      { status: "Fail", message: "Failed to find word" },
      { status: 500 }
    );
  }
}
