import { useProblemStore } from "@/app/stores/problemStore";
import { getProblemList } from "@/entities/problems/api/problem_api";
import { ProblemList } from "@/widgets/problem-list/ui/ProblemList";
import { useEffect } from "react";
export const MainPage = () => {
  const { problemList, setProblemList } = useProblemStore();

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
    <div>
      <h1>Main Page</h1>
      <ProblemList problemList={problemList} />
    </div>
  );
};
