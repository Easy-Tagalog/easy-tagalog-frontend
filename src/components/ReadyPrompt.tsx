import BackQuitButton from './BackQuitButton';
import { Button } from './ui/button';

interface IReadyPromptProps {
  handleSetReady: () => void;
}

export default function ReadyPrompt({ handleSetReady }: IReadyPromptProps) {
  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center">
      <p className="text-4xl">Are you ready?</p>
      <p className="text-lg">Handa ka na ba?</p>

      <div className="flex gap-4">
        <BackQuitButton />
        <Button onClick={handleSetReady}>Ready</Button>
      </div>
    </div>
  );
}
