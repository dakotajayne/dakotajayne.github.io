import photo1 from '/src/assets/gallery/IMG_1.jpeg';
import photo2 from '/src/assets/gallery/IMG_2.jpeg';
import photo3 from '/src/assets/gallery/IMG_3.jpeg';
import photo4 from '/src/assets/gallery/IMG_4.jpeg';
import photo5 from '/src/assets/gallery/IMG_5.jpeg';
import photo6 from '/src/assets/gallery/IMG_6.jpeg';
import photo7 from '/src/assets/gallery/IMG_7.jpeg';
import photo8 from '/src/assets/gallery/IMG_8.jpeg';
import photo9 from '/src/assets/gallery/IMG_9.jpeg';

import { useState } from 'react';

const Photos = [
    { img: photo1, caption: "Park, London", date: "July 2024" },
    { img: photo2, caption: "NEO Coffee Bar, Toronto", date: "March 2024" },
    { img: photo3, caption: "Subway, Lakeshore", date: "March 2024" },
    { img: photo4, caption: "HarbourFront, Toronto", date: "May 2024" },
    { img: photo5, caption: "Yorkville, Toronto", date: "May 2024" },
    { img: photo6, caption: "JENN & Larry's Ice cream, Stratford", date: "May 2024" },
    { img: photo7, caption: "Apt 200, Toronto", date: "May 2024" },
    { img: photo8, caption: "Grand Bend Beach ", date: "August 2024" },
    { img: photo9, caption: "20th Birthday", date: "September 2024" },
    
]

export default function GalleryPage() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="bg-[var(--surface)] min-h-screen">
            <div className="px-8 pt-10 pb-6 md:px-12">
                <div className="md:flex md:items-baseline gap-3">
                    <h1 className="font-bakbak text-[20px] md:text-[24px] text-[var(--text-primary)] md:pl-2">
                        Gallery
                    </h1>
                    <p className="font-snpro text-[12px] md:text-[13px] text-[var(--text-muted)]">
                        Photos I've taken
                    </p>
                </div>
            </div>

            <div className="border-b border-[var(--grey-mid)] mx-8 md:mx-12"></div>

            <div className="columns-2 md:columns-4 gap-4 px-8 md:px-12 py-8">
                {Photos.map((photo, i) => (
                    <div
                        key={i}
                        onClick={() => setSelected(photo)}
                        className="break-inside-avoid rounded-2xl overflow-hidden border border-[var(--grey-mid)] bg-white shadow-sm cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md mb-4"
                    >
                        <img src={photo.img} className="w-full object-cover" />
                        <div className="p-3 font-snpro">
                            <p className="text-[12px] font-bold text-[var(--text-primary)]">{photo.caption}</p>
                            <p className="text-[11px] text-[var(--text-muted)]">{photo.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* selected images */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
                    onClick={() => setSelected(null)}
                >
                    <div className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-xl">
                        <img src={selected.img} className="w-full object-cover" />
                        <div className="p-4 font-snpro">
                            <p className="font-bold text-[var(--text-primary)]">{selected.caption}</p>
                            <p className="text-[12px] text-[var(--text-muted)]">{selected.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}