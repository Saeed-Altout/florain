import { cn } from "../../lib/utils";

export const Box = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("bg-[#fff] rounded-2xl p-4", className)}>{children}</div>
  );
};
