import { useProblemStore } from "@/app/index";
import { getProblemList } from "@/entities";
import { ProblemList, SimilarProblemList } from "@/widgets";
import { useEffect } from "react";

export const MainPage = () => {
  const setProblemList = useProblemStore((state) => state.setProblemList);
  const setIsLoading = useProblemStore((state) => state.setIsLoading);

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
        <SimilarProblemList />
        <ProblemList />
      </div>
    </div>
  );
};
