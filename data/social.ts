export type Social = {
  github?: string
  twitter?: string
  juejin?: string
  qq?: string
  wx?: string
  cloudmusic?: string
  zhihu?: string
  email?: string
  discord?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {

}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {

}

export default socialSet
