export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-50 bg-white bg-opacity-10 backdrop-blur-lg max-w-[1856px] max-h-[1016px] w-full h-full rounded-2xl p-8">
      {children}
    </div>
  );
};
