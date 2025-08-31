export const Loading = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-[480px] xl:w-[504px] border border-[#E8E8E8] bg-[#E8E8E8] rounded-xl min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="text-sm text-gray-500">로딩 중...</span>
        </div>
      </div>
    </div>
  );
};
