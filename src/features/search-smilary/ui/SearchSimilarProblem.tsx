import { useProblemStore, useSimilarProblemStore } from "@/app/index";
import { getSimilarProblemList } from "@/entities";

interface SearchSimilarProblemProps {
  problemId: number;
}

export const SearchSmilarProblem = ({
  problemId,
}: SearchSimilarProblemProps) => {
  const { setSimilarProblemList } = useSimilarProblemStore();
  const { problemIdList } = useProblemStore();

  const searchSimilarProblem = async () => {
    try {
      const similarProblemList = await getSimilarProblemList(
        problemId,
        problemIdList
      );
      setSimilarProblemList(similarProblemList);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return <button onClick={searchSimilarProblem}>유사문제</button>;
};
