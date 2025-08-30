import type { ProblemType } from "@/entities";
import { ProblemCard } from "@/shared";

interface SimilarProblemListProps {
  similarProblemList: ProblemType[];
}
export const SimilarProblemList = ({
  similarProblemList,
}: SimilarProblemListProps) => {
  return (
    <div>
      {similarProblemList.map((problem, index) => (
        <ProblemCard
          key={problem.id}
          problemInfo={problem}
          index={index}
          actions={<></>}
        />
      ))}
    </div>
  );
};
