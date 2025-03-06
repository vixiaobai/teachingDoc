import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
  import Hero from './_components/Hero'

export default function Home(): JSX.Element {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext()
  const { description } = customFields as { description: string }

  return (
    <Layout title={tagline} description={description}>
      <main>
        <Hero />
        <div className="container-wrapper">
        </div>
      </main>
    </Layout>
  )
}
