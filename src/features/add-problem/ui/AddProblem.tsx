import {
  useProblemStore,
  useSelectProblemStore,
  useSimilarProblemStore,
} from "@/app/index";

interface AddProblemProps {
  similarProblemId: number;
}

export const AddProblem = ({ similarProblemId }: AddProblemProps) => {
  const { problemList, setProblemList } = useProblemStore();
  const { similarProblemList, setSimilarProblemList } =
    useSimilarProblemStore();
  const { selectedProblemId } = useSelectProblemStore();

  const addProblem = async () => {
    const selectedProblem = problemList.find(
      (problem) => problem.id === selectedProblemId
    );
    const similarProblem = similarProblemList.find(
      (problem) => problem.id === similarProblemId
    );

    if (!selectedProblem || !similarProblem) {
      console.error("Error");
      return;
    }

    const selectedProblemIndex = problemList.findIndex(
      (problem) => problem.id === selectedProblemId
    );

    if (selectedProblemIndex === -1) {
      console.error("Error");
      return;
    }

    const updatedProblemList = [
      ...problemList.slice(0, selectedProblemIndex + 1),
      similarProblem,
      ...problemList.slice(selectedProblemIndex + 1),
    ];

    const updatedSimilarProblemList = similarProblemList.filter(
      (problem) => problem.id !== similarProblemId
    );

    setProblemList(updatedProblemList);
    setSimilarProblemList(updatedSimilarProblemList);
  };

  return <button onClick={addProblem}>추가</button>;
};
