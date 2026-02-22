const HeroSlot = () => (
  <div className="px-10 min-[700px]:px-16 pt-12 pb-8">
    <h1 className="text-white text-[clamp(36px,4vw,56px)] font-extrabold tracking-[-0.02em] m-0 mb-3">
      Johann Koeh
    </h1>

    <div className="relative flex items-center gap-[10px] h-10 text-[clamp(22px,2.2vw,32px)] font-bold tracking-[-0.01em]">

      {/* Slot reel — decorative, screen readers skip */}
      <span className="slot-fade-line" aria-hidden="true">
        {/* Window: fixed size + edge fade mask */}
        <span className="relative block h-[34px] w-[140px] overflow-hidden [mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)] [-webkit-mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)]">
          {/* Scrolling track */}
          <span className="block will-change-transform slot-track text-white">
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">AI</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Front-end</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Back-end</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Web</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Systems</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Product</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Platform</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Identity</span>
            {/* Blank — visual pause before settling on final item */}
            <span className="block h-[34px] leading-[34px] opacity-0">&nbsp;</span>
            {/* Duplicates — prevent hard visual stop */}
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">AI</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Front-end</span>
            <span className="block h-[34px] leading-[34px] opacity-[0.92]">Back-end</span>
          </span>
        </span>
      </span>

      {/* "Engineer" — fades out with the reel */}
      <span className="text-white whitespace-nowrap slot-fade-line">Engineer</span>

      {/* The point — fades in after reel settles and clears */}
      <span
        className="absolute left-0 top-0 text-white/40 text-sm min-[700px]:text-base uppercase tracking-[0.25em] opacity-0 translate-y-[2px] slot-reveal-final"
      >
        From Idea to Production
      </span>

    </div>
  </div>
);

export default HeroSlot;
