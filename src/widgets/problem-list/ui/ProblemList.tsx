import { useProblemStore, useSelectProblemStore } from "@/app/index";
import type { ProblemType } from "@/entities";
import { DeleteProblem, SearchSmilarProblem } from "@/features";
import { Loading, ProblemCard } from "@/shared";

export const ProblemList = () => {
  const problemList = useProblemStore((state) => state.problemList);
  const isLoading = useProblemStore((state) => state.isLoading);
  const selectedProblemId = useSelectProblemStore(
    (state) => state.selectedProblemId
  );

  const levelCount = problemList.reduce(
    (acc, problem) => {
      acc[problem.level] = acc[problem.level] + 1;
      return acc;
    },
    { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 } as Record<
      ProblemType["level"],
      number
    >
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full flex flex-col px-4 pt-4 w-[480px] xl:w-[712px] border border-gray bg-gray rounded-xl">
      <span className="text-white body1-16-bold">학습지 상세 편집</span>
      <div className="flex-1 flex flex-col gap-4 overflow-auto mt-4">
        {problemList.length > 0 ? (
          problemList.map((problem, index) => (
            <ProblemCard
              key={problem.id}
              index={index}
              problemInfo={problem}
              isActive={selectedProblemId === problem.id}
              actions={
                <>
                  <SearchSmilarProblem
                    problemId={problem.id}
                    isActive={selectedProblemId === problem.id}
                  />
                  <DeleteProblem problemId={problem.id} />
                </>
              }
            />
          ))
        ) : (
          <div className="flex-1 flex flex-col justify-center items-center text-white body2-14-regular">
            <span>학습지 문제수가 없습니다.</span>
            <span>다음 단계로 넘어가기 위해 문제를 추가해주세요.</span>
          </div>
        )}
      </div>
      <div className="flex px-2 justify-end items-center bg-gray h-16 ">
        {problemList.length > 0 && (
          <div className="text-gray-light body1-16-regular">
            <span>하 {levelCount[1]}</span>
            <span className="mx-1">·</span>
            <span>중하 {levelCount[2]}</span>
            <span className="mx-1">·</span>
            <span>중 {levelCount[3]}</span>
            <span className="mx-1">·</span>
            <span>상 {levelCount[4]}</span>
            <span className="mx-1">·</span>
            <span>최상 {levelCount[5]}</span>
            <span className="mx-1">|</span>
          </div>
        )}
        <span
          className={`body1-16-bold ${
            problemList.length > 0 ? "text-white" : "text-red"
          }`}
        >
          문제 수 {problemList.length} 개
        </span>
      </div>
    </div>
  );
};
