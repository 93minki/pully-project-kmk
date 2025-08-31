import { useProblemStore, useSimilarProblemStore } from "@/app/index";
import { getProblemList } from "@/entities";
import { ProblemList, SimilarProblemList } from "@/widgets";
import { useEffect } from "react";

export const MainPage = () => {
  const { problemList, setProblemList, setIsLoading } = useProblemStore();
  const { similarProblemList } = useSimilarProblemStore();

  useEffect(() => {
    const initialFetch = async () => {
      setIsLoading(true);
      try {
        const response = await getProblemList();
        setProblemList(response);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    initialFetch();
  }, [setProblemList, setIsLoading]);

  return (
    <div className="flex justify-center items-center p-3.5 h-screen">
      <div className="flex gap-4 h-full">
        <SimilarProblemList similarProblemList={similarProblemList} />
        <ProblemList problemList={problemList} />
      </div>
    </div>
  );
};
