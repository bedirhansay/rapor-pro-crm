export const Colors = [
  { id: 1, label: 'Boyalı', color: '#FFD580' },
  { id: 2, label: 'Değişen', color: '#FF6F61' },
  { id: 3, label: 'Lokal Boyalı', color: '#FFA07A' },
  { id: 4, label: 'Orijinal', color: '#F0F0F0' },
  { id: 5, label: 'Boyalı İşlemli', color: '#D1C4E9' },
  { id: 6, label: 'Dolu Göçüğü', color: '#ADD8E6' },
  { id: 7, label: 'Hasarlı', color: '#D3D3D3' },
  { id: 8, label: 'Ezik/Göçük', color: '#90EE90' },
  { id: 9, label: 'Sökülüp Takılmış', color: '#87CEEB' },
]

export const ColorHeader = () => {
  return (
    <div className="my-5 flex text-center">
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {Colors.map((item) => (
          <div
            style={{
              background: item.color,
            }}
            key={item.id}
            className={`yellow-400 mr-2 flex flex-col items-center rounded-lg px-2 py-1 text-black shadow lg:p-4 ${item.color}`}
          >
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
