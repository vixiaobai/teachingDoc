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
  github: 'https://github.com/wwg1996',
  twitter: 'https://twitter.com/wwg1996',
  juejin: 'https://juejin.cn/user/wwg1996',
  qq: 'http://wangc.site/noteImages/a848953441f475d232a246c2206e25e.jpg',
  wx: 'http://wangc.site/noteImages/7b93a69cadcc42bc746a1ba7feec13f.jpg',
  zhihu: 'https://www.zhihu.com/people/wwg1996',
  cloudmusic: 'https://music.163.com/#/user/home?id=wwg1996',
  email: '947790973@qq.com',
  discord: 'https://discord.gg/wwg1996',
}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  juejin: {
    href: social.juejin,
    title: '掘金',
    icon: 'simple-icons:juejin',
    color: '#1E81FF',
  },
  twitter: {
    href: social.twitter,
    title: 'Twitter',
    icon: 'ri:twitter-line',
    color: '#1da1f2',
  },
  discord: {
    href: social.discord,
    title: 'Discord',
    icon: 'ri:discord-line',
    color: '#5A65F6',
  },
  qq: {
    href: social.qq,
    title: 'QQ',
    icon: 'ri:qq-line',
    color: '#1296db',
  },
  wx: {
    href: social.wx,
    title: '微信',
    icon: 'ri:wechat-2-line',
    color: '#07c160',
  },
  zhihu: {
    href: social.zhihu,
    title: '知乎',
    icon: 'ri:zhihu-line',
    color: '#1772F6',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  cloudmusic: {
    href: social.cloudmusic,
    title: '网易云',
    icon: 'ri:netease-cloud-music-line',
    color: '#C20C0C',
  },
  rss: {
    href: '/blog/rss.xml',
    title: 'RSS',
    icon: 'ri:rss-line',
    color: '#FFA501',
  },
}

export default socialSet
