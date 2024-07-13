export interface ImageOptions {
  id: string
  src: string
}

interface ImageProps {
  image: ImageOptions[]
  nameSearch: string
}

export const useImage = ({ image, nameSearch }: ImageProps) => {
  const key = Object.values(image).find((el) => el.id === nameSearch)
  return { key } as const
}
