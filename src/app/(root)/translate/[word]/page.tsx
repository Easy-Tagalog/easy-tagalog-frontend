export default function TranslateWord({
  params,
}: {
  params: { word: string };
}) {
  const word = params.word;

  return <div>{word}</div>;
}
