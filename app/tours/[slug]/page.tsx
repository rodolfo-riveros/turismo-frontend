import { notFound } from "next/navigation";
import { tours, getTourBySlug } from "@/app/data/tours";
import { testimonials } from "@/app/data/testimonials";
import PhotoGallery from "@/app/components/PhotoGallery";
import ItineraryTimeline from "@/app/components/ItineraryTimeline";
import InclusionsPanel from "@/app/components/InclusionsPanel";
import BookingWidget from "@/app/components/BookingWidget";
import TourCard from "@/app/components/TourCard";
import TestimonialCard from "@/app/components/TestimonialCard";

export default async function TourDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const tourTestimonials = testimonials.filter(t => t.tourName === tour.title);
  const relatedTours = tours.filter(t => t.id !== tour.id && t.category.some(c => tour.category.includes(c))).slice(0, 3);

  return (
    <>
      <section className="py-8 md:py-12 transition-colors">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
                  <span>{tour.location}</span>
                  <span>·</span>
                  <span>{tour.duration}</span>
                </div>
                <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-deep-slate mb-3">
                  {tour.title}
                </h1>
                <p className="text-lg text-on-surface-variant leading-relaxed">{tour.subtitle}</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-deep-slate">{tour.rating}</span>
                    <span className="text-on-surface-variant">({tour.reviewCount} opiniones)</span>
                  </div>
                  <div className="flex gap-1.5">
                    {tour.category.map(cat => (
                      <span key={cat} className="px-3 py-1 bg-sky-blue/10 text-sky-blue text-xs font-semibold rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <PhotoGallery images={tour.images} title={tour.title} />

              <div className="lg:hidden">
                <BookingWidget tour={tour} />
              </div>

              <div>
                <h2 className="font-montserrat text-2xl font-bold text-deep-slate mb-4">Acerca de esta experiencia</h2>
                <p className="text-on-surface-variant leading-relaxed mb-4">{tour.description}</p>
                <div className="bg-surface-container rounded-2xl p-6">
                  <p className="text-sm italic text-on-surface-variant leading-relaxed">
                    &ldquo;{tour.story}&rdquo;
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-montserrat text-2xl font-bold text-deep-slate mb-4">Lo que vivirás</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-surface-container rounded-xl">
                      <div className="w-8 h-8 bg-adventure-orange/10 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-adventure-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-deep-slate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-montserrat text-2xl font-bold text-deep-slate mb-6">Itinerario</h2>
                <ItineraryTimeline items={tour.itinerary} />
              </div>

              <div>
                <h2 className="font-montserrat text-2xl font-bold text-deep-slate mb-6">Qué incluye</h2>
                <InclusionsPanel inclusions={tour.inclusions} exclusions={tour.exclusions} />
              </div>

              {tourTestimonials.length > 0 && (
                <div>
                  <h2 className="font-montserrat text-2xl font-bold text-deep-slate mb-6">Opiniones de este tour</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tourTestimonials.map(t => (
                      <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <BookingWidget tour={tour} />
            </div>
          </div>
        </div>
      </section>

      {relatedTours.length > 0 && (
        <section className="py-16 bg-surface transition-colors">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12">
            <h2 className="font-montserrat text-2xl font-bold text-deep-slate mb-8">Tours relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTours.map(t => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
