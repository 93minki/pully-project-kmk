import { useProblemStore, useSimilarProblemStore } from "@/app/index";
import { getProblemList } from "@/entities";
import { ProblemList, SimilarProblemList } from "@/widgets";
import { useEffect } from "react";

export const MainPage = () => {
  const { problemList, setProblemList } = useProblemStore();
  const { similarProblemList } = useSimilarProblemStore();
  useEffect(() => {
    const initialFetch = async () => {
      try {
        const response = await getProblemList();
        setProblemList(response);
      } catch (error) {
        console.error("Error", error);
      }
    };
    initialFetch();
  }, [setProblemList]);

  // useEffect(() => {
  //   if (selectedProblemId !== 0) {
  //     const fetchSimilarProblemList = async () => {
  //       try {
  //         const response = await getSimilarProblemList(selectedProblemId);
  //         console.log("response", response);
  //         setSimilarProblemList(response);
  //       } catch (error) {
  //         console.error("Error", error);
  //       }
  //     };
  //     fetchSimilarProblemList();
  //   }
  // }, [selectedProblemId, setSimilarProblemList]);

  return (
    <div className="flex justify-center items-center py-3.5">
      <div className="flex gap-4 w-[1232px]">
        <SimilarProblemList similarProblemList={similarProblemList} />
        <ProblemList problemList={problemList} />
      </div>
    </div>
  );
};
