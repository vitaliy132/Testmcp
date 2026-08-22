/** Demo CDN — MadeByShape imagery kept for visual fidelity. */
export const CDN = 'https://made-byshape.transforms.svdcdn.com/production/uploads/images'

export const award = (file: string, dm: string, s: string) =>
  `${CDN}/Awards/${file}?w=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=${dm}&s=${s}`

/* Order matches source arched carousel data-index 0…8 */
export const aboutHeroImages: string[] = [
  `${CDN}/India-2022/Empty-Studio/Shape-April-2022-HR-201.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142747&s=ac2c8013dee87f79b22c4e0c0aae7dab`,
  `${CDN}/India-2022/Empty-Studio/Shape-April-2022-HR-200.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142745&s=babedcc3fa45f9af1a08b9a9062682f7`,
  `${CDN}/India-2022/Chillout-Area/Shape-April-2022-HR-163.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142276&s=623a91582904eeaaa558600540e49349`,
  `${CDN}/India-2022/Empty-Studio/Shape-April-2022-HR-198.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142740&s=b277c4ce6152387dcd4771b708003cf7`,
  `${CDN}/India-2022/People-in-Studio/Shape-April-2022-HR-208.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143487&s=19b949fe09dfe3e0161a0a345a83f057`,
  `${CDN}/MadeByShape-Studio/Shape-2018-LR-169_200119_175819.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1604326504&s=bf17266e2762cabc752c1a107cfd715b`,
  `${CDN}/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-101.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143071&s=3a162be72d42e6e50308ae56a152957e`,
  `${CDN}/India-2022/Chillout-Area/Shape-April-2022-HR-175.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706011832&s=e19014f3eb901418311caf1ce06e12c5`,
  `${CDN}/India-2022/People-in-Studio/Shape-April-2022-HR-215.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143498&s=2b69f2b4d69766ef9557bfde462cb117`,
]

export type AboutShowreel = {
  src: string
  poster: string
}

export const aboutShowreel: AboutShowreel = {
  src: 'https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4',
  poster: '/images/studio/hr-204.webp',
}

