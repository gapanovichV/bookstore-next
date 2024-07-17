import React from "react"
import ContentLoader from "react-content-loader"

export const CardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={322}
    height={507}
    viewBox="0 0 322 507"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="17" y="16" rx="3" ry="3" width="239" height="311" />
    <circle cx="481" cy="90" r="20" />
    <rect x="19" y="342" rx="0" ry="0" width="236" height="21" />
    <rect x="20" y="377" rx="0" ry="0" width="61" height="14" />
    <rect x="183" y="374" rx="0" ry="0" width="70" height="16" />
    <rect x="19" y="398" rx="0" ry="0" width="70" height="20" />
    <rect x="188" y="400" rx="0" ry="0" width="67" height="19" />
  </ContentLoader>
)
