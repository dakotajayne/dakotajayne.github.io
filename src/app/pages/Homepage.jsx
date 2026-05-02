import image from '/src/assets/smiskis/smiski.jpg'
import sonnyImage from '/src/assets/angels/sonnyangel.jpg'
import smiskiImage from '/src/assets/smiskis/gardeningsmiski.jpg'

import InfoCard from '../components/InfoCard'

export default function Homepage() {
    return (
        <div className='bg-[var(--surface)]'>
            <section className='py-20 relative overflow-hidden'>

                {/* Background decorative blobs */}
                <div className="absolute top-[-60px] left-[-80px] w-[350px] h-[350px] rounded-full bg-[var(--pink-mid)] opacity-60 blur-[80px] pointer-events-none z-0" />
                <div className="absolute bottom-[40px] right-[-60px] w-[280px] h-[280px] rounded-full bg-[var(--green-soft)] opacity-60 blur-[70px] pointer-events-none z-0" />

                <div className='relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 px-6'>

                    {/* Image */}
                    <div className="relative flex-shrink-0 flex justify-center animate-fadein">
                        {/* Decorative ring behind image */}
                        <div className="absolute inset-[-20px] rounded-[28px] border-2 border-dashed border-[var(--pink-mid)] opacity-75 rotate-[-2deg]"/>

                        <img
                            src={image} alt="smiski reading"
                            className="relative w-[260px] md:w-[380px] rounded-[20px] border-[6px] border-white object-cover shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 z-10"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fadein-delay">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--green-accent)] bg-[var(--green-soft)] px-3 py-1 rounded-full inline-block mb-3">
                            collection catalog
                        </p>
                        <h1 className="font-bakbak font-bold text-[42px] md:text-[52px] leading-tight text-[var(--text-primary)] mb-3">
                            My Sonny Angels<br />& Smiskis
                        </h1>

                        <p className="font-snpro text-[14px] text-[var(--text-secondary)] leading-[1.8] max-w-[380px] mb-8">
                            A personal catalog of every figure I own — where I got them, when I got them, and photos along the way.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <a href="/gallery" className="bg-[var(--pink-light)] text-[var(--text-primary)] text-[13px] font-semibold px-6 py-2.5 rounded-full border border-[var(--pink-deep)] shadow-[0_2px_8px_var(--pink-light)] hover:bg-[var(--pink-mid)] hover:shadow-[0_4px_16px_var(--pink-mid)] transition-all duration-200">
                                View gallery →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

           <section className='py-6 pb-24 md:py-12 md:pb-28'>
                <div className='max-w-[930px] mx-auto flex flex-col gap-14'>

                    <p className="text-center text-[10px] tracking-[0.14em] uppercase text-[var(--grey-dark)]">
                        in my collection
                    </p>

                    <InfoCard
                        img={sonnyImage}
                        imgAlt="Sonny Angel figurine"
                        title="Sonny Angels"
                        desc="Sonny Angels are collectible figurines created by the Japanese company Dreams Inc. Each blind box contains a surprise character wearing various themed headpieces."
                        btn="View collection"
                        path="/sonny"
                        accent="pink"
                        reverse
                    />
                    <InfoCard
                        img={smiskiImage}
                        imgAlt="Smiski figurine"
                        title="Smiskis"
                        desc="Smiskis are little creatures that glow in the dark. Created by Japanese company Dreams Inc. Each Smiski has a unique pose that captures everyday moments."
                        btn="View collection"
                        path="/smiski"
                        accent="green"
                    />
                </div>
            </section>

        </div>
    )
}