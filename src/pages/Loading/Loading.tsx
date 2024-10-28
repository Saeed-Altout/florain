import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-full relative overflow-hidden flex justify-center items-center">
      <div className="w-full h-full bg-primary absolute top-0 left-0" />
      <img
        src="/images/bg.png"
        alt="bg-platform"
        className="w-full h-full absolute top-0 left-0 object-cover mix-blend-multiply"
      />
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-14">
        <Loader2 className="h-[80px] w-[80px] animate-spin transition-all text-[#fff]" />
      </div>
    </div>
  );
}
