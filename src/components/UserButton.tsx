import { Avatar } from "./ui/Avatar";

export const UserButton = () => {
  return (
    <div
      role="button"
      className="flex flex-col justify-center items-center p-4 gap-y-3"
      onClick={() => {}}
    >
      <Avatar src="/images/profile.png" name="Florian Homm" />
      <p className="text-main font-fraunces font-semibold text-sm">
        Florian Homm
      </p>
    </div>
  );
};
