import type { ProblemType } from "@/entities";
import { PROBLEM_LEVEL_INFO } from "../utils/constants";

interface ProblemCardProps {
  index: number;
  problemInfo: ProblemType;
  actions: React.ReactNode;
  isActive?: boolean;
}

export const ProblemCard = ({
  index,
  problemInfo,
  actions,
  isActive = false,
}: ProblemCardProps) => {
  const parseProblemType = (type: ProblemType["type"]) => {
    switch (type) {
      case 1:
        return "객관식";
      case 2:
        return "주관식";
    }
  };

  return (
    <div>
      <div
        className={`flex justify-between items-center h-[52px] bg-gray-bg-light p-4 rounded-t-xl ${
          isActive ? "border-[3px] border-blue border-b-0" : ""
        }`}
      >
        <span className="shrink-0 px-3 text-xl font-bold">{index + 1}</span>
        <span className="flex-1 px-3 text-sm text-start text-gray-dark">
          {problemInfo.title}
        </span>
        <div className="shrink-0 flex gap-3 text-xs">{actions}</div>
      </div>
      <div
        className={`flex bg-white py-4 rounded-b-xl ${
          isActive ? "border-[3px] border-blue border-t-0" : ""
        }`}
      >
        <div className="flex flex-col text-xs gap-1 px-4 shrink-0">
          <span
            className={`w-10 h-5 leading-5 text-center bg-gray-bg-light rounded-sm ${
              PROBLEM_LEVEL_INFO[problemInfo.level].color
            }`}
          >
            {PROBLEM_LEVEL_INFO[problemInfo.level].name}
          </span>
          <span className="w-10 h-5 leading-5 text-gray-medium text-center bg-gray-bg-light rounded-sm">
            {problemInfo.answerRate}%
          </span>
          <span className="w-10 h-5 leading-5 text-gray-medium text-center bg-gray-bg-light rounded-sm">
            {parseProblemType(problemInfo.type)}
          </span>
        </div>
        <div className="px-4 max-w-2/3">
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
