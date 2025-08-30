import { useProblemStore, useSelectProblemStore } from "@/app/index";

interface DeleteProblemProps {
  problemId: number;
}

export const DeleteProblem = ({ problemId }: DeleteProblemProps) => {
  const { problemList, setProblemList } = useProblemStore();
  const { selectedProblemId, setSelectedProblemId } = useSelectProblemStore();
  const deleteProblem = async () => {
    const updateProblemList = problemList.filter(
      (problem) => problem.id !== problemId
    );
    if (updateProblemList.length === 0 || problemId === selectedProblemId) {
      setSelectedProblemId(0);
    }
    setProblemList(updateProblemList);
  };

  return <button onClick={deleteProblem}>삭제</button>;
};
