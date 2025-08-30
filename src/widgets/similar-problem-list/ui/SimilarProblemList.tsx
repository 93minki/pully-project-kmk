import type { ProblemType } from "@/entities";
import { AddProblem } from "@/features/add-problem/ui/AddProblem";
import { ExchangeProblem } from "@/features/exchange-problem/ui/ExchangeProblem";
import { ProblemCard } from "@/shared";

interface SimilarProblemListProps {
  similarProblemList: ProblemType[];
}
export const SimilarProblemList = ({
  similarProblemList,
}: SimilarProblemListProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 w-[504px] border border-[#E8E8E8] bg-[#E8E8E8] rounded-xl relative min-h-screen">
      <span className="font-bold">유사 문항</span>
      <div className="flex-1 flex flex-col gap-4">
        {similarProblemList.length > 0 ? (
          similarProblemList.map((problem, index) => (
            <ProblemCard
              key={problem.id}
              index={index}
              problemInfo={problem}
              actions={
                <>
                  <ExchangeProblem similarProblemId={problem.id} />
                  <AddProblem similarProblemId={problem.id} />
                </>
              }
            />
          ))
        ) : (
          <div>
            유사 문제 버튼을 누르면 문제를 추가 또는 교체할수 있습니다.
          </div>
        )}
      </div>
    </div>
  );
};
