import type { ProblemType } from "@/entities";

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
    <div className="flex flex-col">
      <div className="flex">
        <span>{index + 1}</span>
        <span>{problemInfo.title}</span>
        <div>{actions}</div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <span>{parseLevel(problemInfo.level)}</span>
          <span>{problemInfo.answerRate}%</span>
          <span>{parseProblemType(problemInfo.type)}</span>
        </div>
        <img src={problemInfo.problemImageUrl} alt="problem_image" />
      </div>
    </div>
  );
};
