import { dbConnect } from "@/lib/dbConnect";
import Word, { IWord } from "@/models/Word";
import { lessonOneWords } from "@/data/words";

// ENDPOINT: .../api/words

// This request is just to add words from our databfile into the database
// export async function POST(req: Request) {
//   await dbConnect();
//   const words = await Word.insertMany(lessonOneWords);

//   return Response.json({ message: "Words successfully added to the database" });
// }

// This POST request is to create a word in the database
export async function POST(req: Request, res: Response) {
  try {
    await dbConnect(); // Database connection

    const { english, accents, ...word }: IWord = await req.json();

    // Check to make sure there is at least 1 translation in the english array
    if (english.length === 0) {
      return Response.json(
        {
          status: "Fail",
          message: "Word must have at least one english translation",
        },
        { status: 400 }
      );
    }

    const newWord = await Word.create({ english, ...word });

    return Response.json({ status: "Success", newWord }, { status: 201 });
  } catch (error) {
    return Response.json({ status: "Fail", message: error }, { status: 400 });
  }
}
