import type { ProblemType } from "@/entities";
import { DeleteProblem, SearchSmilarProblem } from "@/features";
import { ProblemCard } from "@/shared";

interface ProblemListProps {
  problemList: ProblemType[];
}

export const ProblemList = ({ problemList }: ProblemListProps) => {
  // Delete Action 에서 problemList의 길이가 0일 경우 selectedProblemId를 0으로 설정해야 함.

  return (
    <div>
      <span>학습지 상세 편집</span>
      <div>
        {problemList.length > 0 ? (
          problemList.map((problem, index) => (
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
          ))
        ) : (
          <div>
            학습지 문제수가 없습니다. 다음 단계로 넘어가기 위해 문제를
            추가해주세요.
          </div>
        )}
      </div>
    </div>
  );
};
