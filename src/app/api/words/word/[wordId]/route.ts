import { dbConnect } from "@/lib/dbConnect";
import Word from "@/models/Word";

// ENDPOINT: .../api/words/translate/[wordId]

type Params = { wordId: string };

// Gets one word by the wordId
export async function GET(req: Request, { params }: { params: Params }) {
  try {
    await dbConnect(); // Database connection

    const wordId = params.wordId;

    const word = await Word.findById(wordId);

    return Response.json({ status: "Success", word }, { status: 200 });
  } catch (error) {
    return Response.json({ status: "Fail", message: error }, { status: 400 });
  }
}

// Updates one word in the database
export async function PATCH(req: Request, { params }: { params: Params }) {
  try {
    await dbConnect(); // Database connection

    const wordId = params.wordId;
    const updatedWordData = await req.json();

    await Word.findByIdAndUpdate(wordId, updatedWordData);

    return Response.json(
      { status: "Success", message: "Word updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ status: "Fail", message: error }, { status: 400 });
  }
}

// Deletes one word from the database
export async function DELETE(req: Request, { params }: { params: Params }) {
  try {
    await dbConnect(); // Database connection

    const wordId = params.wordId;

    console.log(wordId);

    await Word.findByIdAndDelete(wordId);

    return Response.json(
      { status: "Success", message: "Word deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ status: "Fail", message: error }, { status: 400 });
  }
}
