async function getWordsBySearchQuery(word: string) {
  const res = await fetch(`http://localhost:3000/api/words/${word}`, {
    method: "GET",
  });

  return res.json();
}

export default async function TranslateWord({
  params,
}: {
  params: { word: string };
}) {
  const data = await getWordsBySearchQuery(params.word);

  console.log(data);

  return <>hi</>;
}
