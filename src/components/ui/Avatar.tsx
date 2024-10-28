interface AvatarProps {
  name: string;
  src: string;
}

export const Avatar = ({ name, src }: AvatarProps) => {
  return (
    <div className="h-[56px] w-[56px] rounded-full overflow-hidden border-2 border-primary flex justify-center items-center">
      {src ? (
        <img
          src={src}
          alt={`avatar-${name}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "";
          }}
        />
      ) : (
        name?.slice(0, 2).toUpperCase()
      )}
    </div>
  );
};
