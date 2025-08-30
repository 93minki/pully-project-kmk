// 유사 문제 id, 선택한 문제 id 필요

import {
  useProblemStore,
  useSelectProblemStore,
  useSimilarProblemStore,
} from "@/app/index";

interface ExchangeProblemProps {
  similarProblemId: number;
}

export const ExchangeProblem = ({ similarProblemId }: ExchangeProblemProps) => {
  const { problemList, setProblemList } = useProblemStore();
  const { similarProblemList, setSimilarProblemList } =
    useSimilarProblemStore();
  const { selectedProblemId, setSelectedProblemId } = useSelectProblemStore();

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

  return <button onClick={exchangeProblem}>교체</button>;
};
