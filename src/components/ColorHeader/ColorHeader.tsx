import { Colors } from '@/lib/constant/color';

export const ColorHeader = () => {
  return (
    <div className="flex text-center my-5 ">
      <div className="flex lg:flex-col flex-wrap gap-2">
        {Colors.map((item) => (
          <div
            style={{
              background: item.color,
            }}
            key={item.id}
            className={`flex mr-2 flex-col px-2 py-1 lg:p-4 items-center yellow-400   text-black rounded-lg shadow ${item.color}`}
          >
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
