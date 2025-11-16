import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type KeyboardEvent,
} from 'react';
import type { Promotion } from '../types';

type CarouselProps = {
  promotions: Promotion[];
  autoplayDelay?: number;
};

const Carousel: FC<CarouselProps> = ({
  promotions,
  autoplayDelay = 5000,
}) => {
  const autoplayRef = useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement ?? emblaRoot,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      updateScrollButtons();
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    updateScrollButtons();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollNext, scrollPrev]
  );

  const pauseAutoplay = () => autoplayRef.current?.stop();
  const resumeAutoplay = () => autoplayRef.current?.play();

  return (
    <section
      className="relative w-full overflow-hidden rounded-2xl bg-surface"
      aria-label="Carrusel de promociones"
      role="region"
      aria-roledescription="carrusel"
      aria-live="polite"
    >
      <div
        className="overflow-hidden focus:outline-none"
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onFocus={pauseAutoplay}
        onBlur={resumeAutoplay}
      >
        <div className="flex">
          {promotions.map((promotion, index) => (
            <div
              key={promotion.id}
              id={`promotion-slide-${index}`}
              className="relative min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Promoción: ${promotion.title}`}
              aria-hidden={index !== selectedIndex}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={promotion.image}
                  alt={promotion.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f16]/80 via-[#2a1f16]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 md:p-12">
                  <div className="mx-auto max-w-3xl">
                    <p className="mb-2 text-xs uppercase tracking-wider text-white/80 sm:text-sm">
                      {promotion.dateRange}
                    </p>
                    <h3 className="mb-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
                      {promotion.title}
                    </h3>
                    {promotion.description && (
                      <p className="text-sm text-white/90 sm:text-base md:text-lg">
                        {promotion.description}
                      </p>
                    )}
                    {promotion.url && (
                      <a
                        href={promotion.url}
                        className="mt-4 inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      >
                        Ver más
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-text shadow-lg transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Slide anterior"
        >
        <ChevronLeftIcon className="h-6 w-6" aria-hidden />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-text shadow-lg transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Slide siguiente"
      >
        <ChevronRightIcon className="h-6 w-6" aria-hidden />
      </button>

      <div
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Indicadores de slides"
      >
        {promotions.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            role="tab"
            aria-selected={index === selectedIndex}
            aria-controls={`promotion-slide-${index}`}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;

