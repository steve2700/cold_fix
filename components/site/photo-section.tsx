import Image from "next/image"
import { WORK_PHOTOS, type WorkPhotoKey } from "@/components/site/work-photos"
import { displayFont, h2Class } from "@/components/site/ui"

// Real photos from our own jobs. Plain pictures with a short caption, no frames or effects.
export function PhotoSection({
  title = "From our own jobs.",
  intro = "Photos from real Cold Fix callouts.",
  keys,
}: {
  title?: string
  intro?: string
  keys: WorkPhotoKey[]
}) {
  const photos = keys.map((k) => WORK_PHOTOS[k])
  if (photos.length === 0) return null

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className={`${h2Class} max-w-[40rem]`} style={displayFont}>
          {title}
        </h2>
        <p className="mt-5 max-w-[34rem] leading-relaxed text-[#33475f]">{intro}</p>

        <ul className="m-0 mt-10 flex list-none flex-wrap items-end gap-x-6 gap-y-10 p-0">
          {photos.map((p, i) => {
            // Small source photos stay small instead of being stretched and blurred.
            const maxW = Math.min(p.width, i === 0 ? 520 : 380)
            return (
              <li key={p.src} style={{ width: `min(100%, ${maxW}px)` }} className="m-0">
                <figure className="m-0">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    sizes={`(max-width: 640px) 100vw, ${maxW}px`}
                    className="block h-auto w-full rounded-md"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-base leading-snug text-[#33475f]">{p.caption}</figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
