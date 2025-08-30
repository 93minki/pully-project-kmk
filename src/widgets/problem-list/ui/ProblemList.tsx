import type { ProblemType } from "@/entities";
import { DeleteProblem } from "@/features/delete-problem/ui/DeleteProblem";
import { SearchSmilarProblem } from "@/features/search-smilary/ui/SearchSimilarProblem";
import { ProblemCard } from "@/shared";

interface ProblemListProps {
  problemList: ProblemType[];
}

export const ProblemList = ({ problemList }: ProblemListProps) => {
  // Delete Action 에서 problemList의 길이가 0일 경우 selectedProblemId를 0으로 설정해야 함.

  return (
    <div>
      {problemList.map((problem, index) => (
        <ProblemCard
          key={problem.id}
          index={index}
          problemInfo={problem}
          actions={
            <>
              <SearchSmilarProblem problemId={problem.id} />
              <DeleteProblem problemId={problem.id} />
            </>
          }
        />
      ))}
    </div>
  );
};
