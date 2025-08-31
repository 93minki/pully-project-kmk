// 유사 문제 id, 선택한 문제 id 필요

import {
  useProblemStore,
  useSelectProblemStore,
  useSimilarProblemStore,
} from "@/app/index";
import { ExchangeIcon } from "@/shared";

interface ExchangeProblemProps {
  similarProblemId: number;
}

export const ExchangeProblem = ({ similarProblemId }: ExchangeProblemProps) => {
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
  const setSelectedProblemId = useSelectProblemStore(
    (state) => state.setSelectedProblemId
  );

  const exchangeProblem = async () => {
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

    const updateProblemList = problemList.map((problem) => {
      if (problem.id === selectedProblemId) {
        return similarProblem;
      }
      return problem;
    });

    const updateSimilarProblemList = similarProblemList.map((problem) => {
      if (problem.id === similarProblemId) {
        return selectedProblem;
      }
      return problem;
    });

    setProblemList(updateProblemList);
    setSimilarProblemList(updateSimilarProblemList);
    setSelectedProblemId(similarProblemId);
  };

  return (
    <button
      onClick={exchangeProblem}
      className="flex gap-1 justify-center items-center cursor-pointer"
    >
      <ExchangeIcon />
      <span className="text-xs text-gray-light">교체</span>
    </button>
  );
};
