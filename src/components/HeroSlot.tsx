const SLOT_ITEMS = [
  "AI",
  "Front-end",
  "Back-end",
  "Web",
  "Systems",
  "Product",
  "Platform",
  "ML",
];

// Number of items repeated at the end to prevent a hard visual stop
const DUPLICATE_COUNT = 3;

const HeroSlot = () => {
  return (
    <div className="px-10 min-[700px]:px-16 pt-12 pb-8 text-left">
      <h1 className="text-white text-[clamp(36px,4vw,56px)] font-extrabold tracking-[-0.02em] m-0 mb-3">
        Johann Koeh
      </h1>

      {/* Final reveal is an absolute inline row matching this flex layout. */}
      <div className="relative flex items-center gap-[10px] text-[clamp(22px,2.2vw,32px)] font-bold tracking-[-0.01em]">
        {/* Slot reel — decorative, screen readers skip */}
        <span className="slot-fade-line" aria-hidden="true">
          {/* Window: fixed size + edge fade mask */}
          <span className="relative block h-[34px] w-[140px] overflow-hidden [mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)] [-webkit-mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)]">
            {/* Scrolling track */}
            <span className="block will-change-transform slot-track text-white">
              {SLOT_ITEMS.map((item) => (
                <span
                  key={item}
                  className="block h-[34px] leading-[34px] opacity-[0.92]"
                >
                  {item}
                </span>
              ))}
              {/* Blank — visual pause before settling */}
              <span className="block h-[34px] leading-[34px] opacity-0">
                &nbsp;
              </span>
              {/* Duplicates — prevent hard visual stop */}
              {SLOT_ITEMS.slice(0, DUPLICATE_COUNT).map((item) => (
                <span
                  key={`dup-${item}`}
                  className="block h-[34px] leading-[34px] opacity-[0.92]"
                >
                  {item}
                </span>
              ))}
            </span>
          </span>
        </span>

        {/* "Engineer" suffix — fades out with the reel */}
        <span className="text-white whitespace-nowrap slot-fade-line">
          Engineer
        </span>

        {/*
          Final state: inline row matching the flex layout above.
          w-[140px] mirrors the slot window so "Builder." lands on "Engineer".
        */}
        <span className="absolute inset-y-0 left-0 flex items-center gap-[10px] opacity-0 translate-y-[2px] slot-reveal-final">
          <span className="text-white/30 uppercase tracking-[0.2em] font-normal">
            Ideas to Production.
          </span>
        </span>
      </div>
    </div>
  );
};

export default HeroSlot;
