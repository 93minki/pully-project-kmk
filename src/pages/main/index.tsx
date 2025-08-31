import { useProblemStore, useSimilarProblemStore } from "@/app/index";
import { getProblemList } from "@/entities";
import { ProblemList, SimilarProblemList } from "@/widgets";
import { useEffect } from "react";

export const MainPage = () => {
  const { problemList, setProblemList } = useProblemStore();
  const { similarProblemList } = useSimilarProblemStore();
  useEffect(() => {
    const initialFetch = async () => {
      try {
        const response = await getProblemList();
        setProblemList(response);
      } catch (error) {
        console.error("Error", error);
      }
    };
    initialFetch();
  }, [setProblemList]);

  return (
    <div className="flex justify-center items-center py-3.5">
      <div className="flex gap-4">
        <SimilarProblemList similarProblemList={similarProblemList} />
        <ProblemList problemList={problemList} />
      </div>
    </div>
  );
};
