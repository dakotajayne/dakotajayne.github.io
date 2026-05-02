import CollectionCard from '../components/CollectionCard';
import { Angels } from '../data/figures';

export default function SonnyPage() {
    return (
      <div className="bg-[var(--surface)] min-h-screen">
        <div className="px-8 pt-10 pb-6 md:px-12">

            <div className="md:flex md:items-baseline gap-3">
                <h1 className="font-bakbak text-[20px] md:text-[24px] text-[var(--text-primary)] md:pl-2">
                    Sonny Angel Collection
                </h1>
                <p className="font-snpro text-[12px] md:text-[13px] text-[var(--text-muted)]">
                    As of May 1, 2026
                </p>

                <div className="flex gap-3 mt-4 md:pl-2">
                    <span className="font-bakbak text-[11px] px-3 py-1 rounded-full bg-[var(--pink-mid)] opacity-70 text-[var(--text-primary)]">
                        7 Angels
                    </span>
                    <span className="font-bakbak text-[11px] px-3 py-1 rounded-full bg-[var(--grey-mid)] opacity-70 text-[var(--text-primary)]">
                        4 Series
                    </span>
                </div>
            </div>

        </div>

        <div className="border-b border-[var(--grey-mid)] mx-8 md:mx-12"></div>

        <CollectionCard data={Angels} colour="text-[var(--pink-deep)]"/>
      </div>
    )
}