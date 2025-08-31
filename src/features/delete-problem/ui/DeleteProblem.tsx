import {
  useProblemStore,
  useSelectProblemStore,
  useSimilarProblemStore,
} from "@/app/index";
import { TrashIcon } from "@/shared";

interface DeleteProblemProps {
  problemId: number;
}

export const DeleteProblem = ({ problemId }: DeleteProblemProps) => {
  const { problemList, setProblemList } = useProblemStore();
  const { selectedProblemId, setSelectedProblemId } = useSelectProblemStore();
  const { setSimilarProblemList } = useSimilarProblemStore();
  const deleteProblem = async () => {
    const updateProblemList = problemList.filter(
      (problem) => problem.id !== problemId
    );
    if (updateProblemList.length === 0 || problemId === selectedProblemId) {
      setSelectedProblemId(0);
    }
    setProblemList(updateProblemList);
    setSimilarProblemList([]);
  };

  return (
    <button
      onClick={deleteProblem}
      className="flex gap-1 justify-center items-center cursor-pointer"
    >
      <TrashIcon />
      <span className="text-xs text-gray-light">삭제</span>
    </button>
  );
};
