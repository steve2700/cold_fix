import { PhotoSection } from "@/components/site/photo-section"

export function WorkPhotosStrip() {
  return (
    <PhotoSection
      title="This is what the job looks like."
      intro="Photos from real Cold Fix callouts across Gauteng."
      keys={["fridgeCondenser", "aircon", "washerOnSite", "defyStove"]}
    />
  )
}
