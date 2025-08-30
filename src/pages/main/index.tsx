import { getProblemList } from "@/entities/problems/api/problem_api";
import type { ProblemType } from "@/entities/problems/model/types";
import { ProblemCard } from "@/shared/ui/ProblemCard";
import { useEffect, useState } from "react";
export const MainPage = () => {
  const [problemList, setProblemList] = useState<ProblemType[]>([]);

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
  }, []);

  return (
    <div>
      <h1>Main Page</h1>
      {problemList.map((problem, index) => (
        <ProblemCard
          key={problem.id}
          index={index}
          problemInfo={problem}
          actions={<></>}
        />
      ))}
    </div>
  );
};
