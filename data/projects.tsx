export const projects: Project[] = [
  {
    title: 'cMall商城（用户端）',
    description: '这是一个使用 react native + antd pro + nestjs 开发的在线购物商城',
    preview: '/img/project/cmall-pc.png',
    website: 'http://mall.wangc.site',
    source: '/blog/cmall',
    tags: ['product'],
    type: 'commerce',
  },
  {
    title: 'cMall商城（管理端）',
    description: '这是一个使用 react native + antd pro + nestjs 开发的在线购物商城',
    preview: '/img/project/cmall-admin.png',
    website: 'http://mall.wangc.site/admin',
    source: '/blog/cmall',
    tags: ['product'],
    type: 'commerce',
  },
  {
    title: 'wangc-vben-admin',
    description: '这是一个NestJs + Vben Admin 编写的一款前后端分离的权限管理系统',
    preview: '/img/project/cadmin.png',
    website: 'http://vben.wangc.site',
    source: '/blog/vben-admin',
    tags: ['opensource'],
    type: 'commerce',
  },
  // {
  //   title: '口袋校园社交平台',
  //   description: '这是一个为客户定制的大学校园社交项目，使用 nextjs + nestjs + vben 开发',
  //   preview: '/img/project/youni.png',
  //   website: 'http://school.wangc.site',
  //   source: '/blog/app4school',
  //   tags: ['product'],
  //   type: 'commerce',
  // },
  // {
  //   title: 'E-Design创意设计工作室',
  //   description: '这是一个为客户定制的工作室创意宣传网站，使用 React Native + nestjs + antd pro开发',
  //   preview: '/img/project/edesign.png',
  //   website: 'http://edesign.wangc.site',
  //   tags: ['product'],
  //   source: '/blog/e-design',
  //   type: 'commerce',
  // },
  {
    title: '北大校园缴费平台',
    description: '这是为北大定制的一款基于 vue + springcloud 架构的校园缴费平台。',
    preview: '/img/project/bdpay-pc.png',
    website: '/blog/bdpay-platform',
    source: '/blog/bdpay-platform',
    tags: ['product', 'large'],
    type: 'commerce',
  },
  {
    title: '设备智能报警组件',
    description: '基于 python + sklearn + flask 的设备智能告警功能组件。',
    preview: '/img/project/device-alert.png',
    website: '/blog/device-alert',
    source: '/blog/device-alert',
    tags: ['product'],
    type: 'commerce',
  },
  {
    title: '校园运维监控平台',
    description: '一款基于 vue + uniapp + echarts + grafana + prometheus + flink + elasticsearch 等技术编写的一款运维监控系统。',
    preview: '/img/project/monitoring-pc.png',
    website: '/blog/monitoring-platform',
    source: '/blog/monitoring-platform',
    tags: ['product', 'large'],
    type: 'commerce',
  },
  {
    title: '业务流程管理平台',
    description: '这是一款基于 ruoyi-vue + flowable 的工作流管理平台。',
    preview: '/img/project/jbpm-pc.png',
    website: '/blog/jbpm-platform',
    source: '/blog/jbpm-platform',
    tags: ['product'],
    type: 'commerce',
  },
  {
    title: '镰刀校园支付平台',
    description: '这是一款基于 vue + springboot 的支持微信、支付宝、云闪付以及各大银行支付的支付平台。',
    preview: '/img/project/pay-pc.png',
    website: '/blog/pay-platform',
    source: '/blog/pay-platform',
    tags: ['product'],
    type: 'commerce',
  },
  {
    title: '校园核身服务平台',
    description: '这是一款基于 vue + springboot 的支持微信、支付宝、云闪付支付核实消费者的身份的平台。',
    preview: '/img/project/checkid-pc.png',
    website: '/blog/checkid-platform',
    source: '/blog/checkid-platform',
    tags: ['product'],
    type: 'commerce',
  },
  {
    title: '校园微信服务平台',
    description: '这是一款基于 jsp + tomcat 的校园微信平台，在微信服务好与企业号提供手机端校园卡服务。',
    preview: '/img/project/weixin-moblie.jpg',
    website: '/blog/weixin-platform',
    source: '/blog/weixin-platform',
    tags: ['product'],
    type: 'commerce',
  },

  //个人
  {
    title: 'wangc的小站',
    description: '基于 react + typescript + docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: '/blog/docusaurus-blog',
    source: '/blog/docusaurus-blog',
    tags: ['opensource', 'personal'],
    type: 'personal',
  },
  {
    title: 'cBrain知识管理系统',
    description: '基于 ruoyi-vue + jsmind + vditor 开发的个人知识管理系统。',
    preview: '/img/project/pkms2.png',
    website: '/blog/pkms2',
    source: '/blog/pkms2',
    tags: ['opensource', 'personal', 'favorite'],
    type: 'personal',
  },
  {
    title: 'cPiano桌面钢琴小应用',
    description: '用 swing + jwt 桌面多功能钢琴。',
    preview: '/img/project/cpiano.png',
    website: '/blog/cpiano',
    source: '/blog/cpiano',
    tags: ['opensource', 'personal', 'favorite'],
    type: 'personal',
  },
  {
    title: '金庸文本写作风格迁移研究',
    description: '基于统计机器学习的中文文本写作风格迁移研究项目。',
    preview: '/img/project/jinyong-nlp.png',
    website: '/blog/jinyong-nlp',
    source: '/blog/jinyong-nlp',
    tags: ['personal', 'favorite'],
    type: 'personal',
  },
  {
    title: '模仿个人风格的qq聊天机器人',
    description: '基于聊天记录训练生成的模仿个人风格的qq聊天机器人。',
    preview: '/img/project/qq-chatbot.jpg',
    website: '/blog/qq-chatbot',
    source: '/blog/qq-chatbot',
    tags: ['personal'],
    type: 'personal',
  },
  {
    title: '基于 jekyll 的个人博客',
    description: '基于 jekyll 的个人博客（弃用）',
    preview: '/img/project/blog0.png',
    website: '/blog/jekyll-blog',
    source: '/blog/jekyll-blog',
    tags: ['opensource', 'personal'],
    type: 'personal',
  },
  {
    title: '个人知识管理系统（ACCESS）',
    description: '基于 access 开发的的个人知识管理系统',
    preview: '/img/project/pkms0.png',
    website: '/blog/pkms0',
    source: '/blog/pkms0',
    tags: ['personal'],
    type: 'personal',
  }
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  commerce: '商业项目',
  app: '应用',
  personal: '个人项目',
  other: '其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，远多于平均数的功能与组件',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
