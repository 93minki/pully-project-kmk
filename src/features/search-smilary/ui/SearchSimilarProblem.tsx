import { getSimilarProblemList } from "@/entities";

interface SearchSimilarProblemProps {
  problemId: number;
}

export const SearchSmilarProblem = ({
  problemId,
}: SearchSimilarProblemProps) => {
  const searchSimilarProblem = async () => {
    const similarProblemList = await getSimilarProblemList(problemId);
    console.log(similarProblemList);
  };

  return <button onClick={searchSimilarProblem}>유사문제</button>;
};
