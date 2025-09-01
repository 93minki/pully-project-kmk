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
  return (
    <div>
      <div
        className={`flex justify-between items-center h-[52px] bg-gray-bg-light py-4 rounded-t-xl ${
          isActive ? "border-[3px] border-blue border-b-0" : ""
        }`}
      >
        <span className="w-[72px] shrink-0 px-3 h4-20-bold text-center">
          {index + 1}
        </span>
        <span className="flex-1 body2-14-regular text-start text-gray-dark truncate">
          {problemInfo.title}
        </span>
        <div className="shrink-0 flex gap-3 text-xs pr-4">{actions}</div>
      </div>
      <div
        className={`flex bg-white py-4 rounded-b-xl ${
          isActive ? "border-[3px] border-blue border-t-0" : ""
        }`}
      >
        <div className="flex flex-col text-xs gap-1 px-4 shrink-0">
          <span
            className={`w-10 h-5 caption1-12-regular bg-gray-bg-light text-center rounded-sm ${
              PROBLEM_LEVEL_INFO[problemInfo.level].color
            }`}
          >
            {PROBLEM_LEVEL_INFO[problemInfo.level].name}
          </span>
          <span className="w-10 h-5 caption1-12-regular text-gray-medium text-center bg-gray-bg-light rounded-sm">
            {problemInfo.answerRate}%
          </span>
          <span className="w-10 h-5 caption1-12-regular text-gray-light text-center bg-gray-bg-light rounded-sm">
            {problemInfo.type === 1 ? "객관식" : "주관식"}
          </span>
        </div>
        <div className="px-2">
          <img
            className="object-contain"
            src={problemInfo.problemImageUrl}
            alt="problem_image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
