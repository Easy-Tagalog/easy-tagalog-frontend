import { Button } from './ui/button';

interface IQuestionOptionProps {
  optionIndex: number;
  selectedOptions: number[];
  isChecked: boolean;
  handleOptionClicked: (optionIndex: number) => void;
  text: string;
}

export default function QuestionOption({
  optionIndex,
  selectedOptions,
  isChecked,
  handleOptionClicked,
  text,
}: IQuestionOptionProps) {
  return (
    <Button
      key={optionIndex}
      className={`text-black p-4 text-2xl bg-ph-yellow rounded-md hover:bg-ph-blue transition-all hover:text-ph-white hover:-translate-y-1 hover:shadow-md ${
        selectedOptions.includes(optionIndex) &&
        'bg-ph-blue transition-all text-ph-white -translate-y-1'
      }`}
      onClick={() => handleOptionClicked(optionIndex)}
      disabled={isChecked}
    >
      {text}
    </Button>
  );
}
