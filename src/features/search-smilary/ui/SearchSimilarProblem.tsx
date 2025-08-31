import {
  useProblemStore,
  useSelectProblemStore,
  useSimilarProblemStore,
} from "@/app/index";
import { getSimilarProblemList } from "@/entities";
import { PlusIcon } from "@/shared";

interface SearchSimilarProblemProps {
  problemId: number;
  isActive: boolean;
}

export const SearchSmilarProblem = ({
  problemId,
  isActive,
}: SearchSimilarProblemProps) => {
  const { setSimilarProblemList, setIsLoading } = useSimilarProblemStore();
  const { problemIdList } = useProblemStore();
  const { setSelectedProblemId } = useSelectProblemStore();

  const searchSimilarProblem = async () => {
    setIsLoading(true);
    try {
      const similarProblemList = await getSimilarProblemList(
        problemId,
        problemIdList
      );
      setSimilarProblemList(similarProblemList);
      setSelectedProblemId(problemId);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-1 justify-center items-center">
      <PlusIcon color={isActive ? "#00abff" : "#c0c0c0"} />
      <button
        onClick={searchSimilarProblem}
        className={`caption1-12-regular ${
          isActive ? "text-blue" : "text-gray-light"
        }`}
      >
        유사문제
      </button>
    </div>
  );
};
