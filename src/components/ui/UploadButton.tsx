import { HiPlus } from "react-icons/hi";

export const UploadButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative w-fit bg-primary hover:bg-main transition-all flex justify-between items-center gap-5 px-6 py-1 rounded-full"
    >
      <div className="relative w-[56px] h-[56px] -ml-5">
        <img
          src="/images/profile.png"
          alt="image-profile"
          className="w-full h-full rounded-full object-cover"
        />
        <span className="absolute bottom-0 right-0 border-[#fff] border rounded-full z-10 bg-primary">
          <HiPlus size={14} style={{ color: "#fff" }} />
        </span>
      </div>
      <p className="text-[#fff] font-fraunces font-semibold">Upload</p>
    </button>
  );
};
