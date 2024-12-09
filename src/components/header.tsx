import { Colors } from '@/lib/constant/color';

export const Header = () => {
  return (
    <div className="flex items-center flex-col text-center my-5 ">
      <div className="flex flex-col gap-2">
        {Colors.map((item) => (
          <div
            style={{
              background: item.color,
            }}
            key={item.id}
            className={`flex mr-4 flex-col p-4 items-center yellow-400   text-black rounded-lg shadow ${item.color}`}
          >
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
