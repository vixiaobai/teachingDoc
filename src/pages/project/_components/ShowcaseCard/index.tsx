import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import { TagList, Tags, type Project, type Tag, type TagType } from '@site/data/projects'
import Tooltip from '@site/src/components/Tooltip'
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon'
import { sortBy } from '@site/src/utils/jsUtils'
 import clsx from 'clsx'
import React, { memo } from 'react'
import styles from './styles.module.css'

const TagComp = React.forwardRef<HTMLLIElement, Tag>(({ label, color, description }, ref) => (
  <li ref={ref} className={styles.tag} title={description}>
    <span className={styles.textLabel}>{label.toLowerCase()}</span>
    <span className={styles.colorLabel} style={{ backgroundColor: color }} />
  </li>
))

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map(tag => ({ tag, ...Tags[tag] }))

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, tagObject => TagList.indexOf(tagObject.tag))

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`

        return (
          <Tooltip key={index} text={tagObject.description} anchorEl="#__docusaurus" id={id}>
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        )
      })}
    </>
  )
}

const ShowcaseCard = memo(({ project }: { project: Project }) => {
  return (
    <div key={project.title} className={clsx('card', styles.showcaseCard)}>
      {project.preview && (
        <div className={clsx('card__image', styles.showcaseCardImage)}>

          <img src={project.preview} alt={project.title} img={project.preview} />
        </div>
      )}
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <h4 className={styles.showcaseCardTitle}>
            <Link href={project.website} className={styles.showcaseCardLink}>
              {project.title}
            </Link>
          </h4>
          {project.tags.includes('favorite') && (
            <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
          )}
          {project.source && (
            <Link
              href={project.source}
              className={clsx('button button--secondary button--sm', styles.showcaseCardSrcBtn)}
            >
              <Translate id="showcase.card.sourceLink">介绍</Translate>
            </Link>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{project.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={project.tags} />
      </ul>
    </div>
  )
})

export default ShowcaseCard
