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
    <div className="flex justify-center items-center py-3.5">
      <div className="flex gap-4 w-[1232px]">
        <div className="w-[504px] border border-red-500">
          <span>유사 문제 영역</span>
        </div>
        <ProblemList problemList={problemList} />
      </div>
    </div>
  );
};
