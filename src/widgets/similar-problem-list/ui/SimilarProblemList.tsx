import { useSimilarProblemStore } from "@/app/index";
import type { ProblemType } from "@/entities";
import { AddProblem } from "@/features/add-problem/ui/AddProblem";
import { ExchangeProblem } from "@/features/exchange-problem/ui/ExchangeProblem";
import { PlusIcon, ProblemCard } from "@/shared";
import { Loading } from "@/shared/ui/Loading";

interface SimilarProblemListProps {
  similarProblemList: ProblemType[];
}
export const SimilarProblemList = ({
  similarProblemList,
}: SimilarProblemListProps) => {
  const { isLoading } = useSimilarProblemStore();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-4 p-4 w-[480px] xl:w-[504px] border border-[#E8E8E8] bg-[#E8E8E8] rounded-xl min-h-screen">
      {similarProblemList.length > 0 && (
        <span className="font-bold text-[#333333]">유사 문항</span>
      )}
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
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 p-1.5">
              <div className="w-14 h-6 bg-white border-[0.6px] border-[#E0E0E0] rounded-xs flex items-center justify-center">
                <PlusIcon size={10} />
                <span className="text-[9px] text-[#959595] leading-[14px]">
                  유사문제
                </span>
              </div>
              <span className="text-sm text-[#333333]">버튼을 누르면</span>
            </div>
            <span className="text-sm text-[#333333]">
              문제를 추가 또는 교체할수 있습니다.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
