import { useSimilarProblemStore } from "@/app/index";
import type { ProblemType } from "@/entities";
import { AddProblem, ExchangeProblem } from "@/features";
import { Loading, PlusIcon, ProblemCard } from "@/shared";

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
    <div className="h-full flex flex-col gap-4 p-4 w-[480px] xl:w-[504px] border border-gray-bg bg-gray-bg rounded-xl">
      {similarProblemList.length > 0 && (
        <span className="font-bold text-gray-dark">유사 문항</span>
      )}
      <div className="flex-1 flex flex-col gap-4 overflow-scroll">
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
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 p-1.5">
              <div className="w-14 h-6 bg-white border-[0.6px] border-gray-lightest rounded-xs flex items-center justify-center">
                <PlusIcon size={10} />
                <span className="text-[9px] text-gray-light leading-[14px]">
                  유사문제
                </span>
              </div>
              <span className="text-sm text-gray-dark">버튼을 누르면</span>
            </div>
            <span className="text-sm text-gray-dark">
              문제를 추가 또는 교체할수 있습니다.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
