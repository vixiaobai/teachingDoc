import Translate, { translate } from '@docusaurus/Translate'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string
  text: JSX.Element
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: 'TypeScript/Java全栈工程师',
    }),
    text: (
      <Translate>
        作为全栈开发者，拥有前后端等各项技能与丰富的技术视野是基本素养，进一步则要将各种技术形成一个有机的整体，应用与开发实践过程中。
      </Translate>
    ),
    Svg: WebDeveloperSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '为多所企业/事业单位提供服务',
    }),
    text: (
      <Translate>
        曾就职于北京某大型软件公司，服务过多所企业/事业单位，客户包括清华、北大、人大等多所头部985/211大学和一些中小型企业，拥有丰富的项目经验。
      </Translate>
    ),
    Svg: SpiderSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '软件开发领域创业者',
    }),
    text: (
      <Translate>
        作为一个软件开发领域创业者，致力于打造一个从需求设计-UI设计-前端开发-后端开发-运维测试 一体化的全栈开发工作室，为客户提供更优质的开发外包服务。
      </Translate>
    ),
    Svg: OpenSourceSvg,
  },
]

export default FEATURES
