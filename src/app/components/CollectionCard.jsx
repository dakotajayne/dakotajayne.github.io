
export default function CollectionCard({ data, colour }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 text-center md:text-left gap-6 px-9 py-8 md:px-12 md:py-12">
            {data.map(item => (
                <div 
                    className="text-[12px] border border-[var(--grey-mid)] rounded-2xl bg-white p-4 shadow-sm cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md" 
                    key={item.name}
                >
                    <div className="flex justify-center items-center h-[130px] md:h-[140px] pb-2">
                        <img className="h-full object-contain rounded-2xl" src={item.img} />
                    </div>

                    <div className="font-snpro border-t border-[var(--grey-light)] mt-2 pt-3 p-1">
                        <p className="font-bold text-[13px] text-[var(--text-primary)]">{item.name}</p>
                        <p className={`${colour} mt-0.5`}>{item.collection}</p>
                        <p className="text-[var(--text-secondary)] pt-3">{item.purchasedFor}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}