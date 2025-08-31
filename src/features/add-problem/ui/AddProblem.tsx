import {
  useProblemStore,
  useSelectProblemStore,
  useSimilarProblemStore,
} from "@/app/index";
import { PlusIcon } from "@/shared";

interface AddProblemProps {
  similarProblemId: number;
}

export const AddProblem = ({ similarProblemId }: AddProblemProps) => {
  const problemList = useProblemStore((state) => state.problemList);
  const setProblemList = useProblemStore((state) => state.setProblemList);
  const similarProblemList = useSimilarProblemStore(
    (state) => state.similarProblemList
  );
  const setSimilarProblemList = useSimilarProblemStore(
    (state) => state.setSimilarProblemList
  );
  const selectedProblemId = useSelectProblemStore(
    (state) => state.selectedProblemId
  );

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

  return (
    <button
      onClick={addProblem}
      className="flex gap-1 justify-center items-center cursor-pointer"
    >
      <PlusIcon />
      <span className="text-xs text-gray-light">추가</span>
    </button>
  );
};
