import { useSelectProblemStore } from "@/app/index";
import type { ProblemType } from "@/entities";
import { useEffect } from "react";

interface ProblemCardProps {
  index: number;
  problemInfo: ProblemType;
  actions: React.ReactNode;
}

export const ProblemCard = ({
  index,
  problemInfo,
  actions,
}: ProblemCardProps) => {
  const { selectedProblemId } = useSelectProblemStore();

  useEffect(() => {
    if (selectedProblemId === problemInfo.id) {
      console.log("selectedProblemId!!", selectedProblemId);
    }
  }, [selectedProblemId]);

  const isSelected = selectedProblemId === problemInfo.id;

  const parseLevel = (level: ProblemType["level"]) => {
    switch (level) {
      case 1:
        return "하";
      case 2:
        return "중하";
      case 3:
        return "중";
      case 4:
        return "상";
      case 5:
        return "최상";
    }
  };

  const parseProblemType = (type: ProblemType["type"]) => {
    switch (type) {
      case 1:
        return "객관식";
      case 2:
        return "주관식";
    }
  };

  return (
    <div
      className={`${isSelected ? "border-4 border-blue-400 rounded-xl" : ""}`}
    >
      <div className="flex justify-between items-center bg-[#FAFAFA] rounded-t-xl p-4">
        <span className="shrink-0 px-3 text-xl font-bold">{index + 1}</span>
        <span className="flex-1 px-3 text-sm text-start">
          {problemInfo.title}
        </span>
        <div className="shrink-0 flex gap-3 text-xs">{actions}</div>
      </div>
      <div className="flex bg-white rounded-b-xl py-4">
        <div className="flex flex-col text-xs gap-1 px-4">
          <span className="w-10 h-5 leading-5 text-center bg-[#FAFAFA] rounded-sm">
            {parseLevel(problemInfo.level)}
          </span>
          <span className="w-10 h-5 leading-5 text-center bg-[#FAFAFA] rounded-sm">
            {problemInfo.answerRate}%
          </span>
          <span className="w-10 h-5 leading-5 text-center bg-[#FAFAFA] rounded-sm">
            {parseProblemType(problemInfo.type)}
          </span>
        </div>
        <div className="flex-1 p-4">
          <img
            className="object-contain"
            src={problemInfo.problemImageUrl}
            alt="problem_image"
          />
        </div>
      </div>
    </div>
  );
};
