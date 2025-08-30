import type { ProblemType } from "@/entities";
import { DeleteProblem, SearchSmilarProblem } from "@/features";
import { ProblemCard } from "@/shared";
import { useMemo } from "react";

interface ProblemListProps {
  problemList: ProblemType[];
}

export const ProblemList = ({ problemList }: ProblemListProps) => {
  // Delete Action 에서 problemList의 길이가 0일 경우 selectedProblemId를 0으로 설정해야 함.

  const levelCount = useMemo(() => {
    return problemList.reduce(
      (acc, problem) => {
        acc[problem.level] = acc[problem.level] + 1;
        return acc;
      },
      { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 } as Record<
        ProblemType["level"],
        number
      >
    );
  }, [problemList]);

  return (
    <div className="flex flex-col gap-4 p-4 w-[712px] border border-[#5C5C5C] bg-[#5C5C5C] rounded-xl relative min-h-screen">
      <span className="text-white font-bold">학습지 상세 편집</span>
      <div className="flex-1 flex flex-col gap-4">
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
      <div className="flex justify-end items-center sticky bottom-0 left-0 right-0 bg-[#5C5C5C] h-16 ">
        {problemList.length > 0 && (
          <div>
            <span>하 {levelCount[1]} ·</span>
            <span> 중하 {levelCount[2]} ·</span>
            <span> 중 {levelCount[3]} ·</span>
            <span> 상 {levelCount[4]} ·</span>
            <span> 최상 {levelCount[5]} |</span>
          </div>
        )}
        <span
          className={`${
            problemList.length > 0 ? "text-white" : "text-[#FD5354]"
          }`}
        >
          문제 수 {problemList.length}개
        </span>
      </div>
    </div>
  );
};
