import React from 'react'
import PropTypes from 'prop-types'

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    guid: PropTypes.string,
    link: PropTypes.string,
    pubDate: PropTypes.string,
    media: PropTypes.string
  }).isRequired,
  onArticleClick: PropTypes.func.isRequired
}

export default function Article({ data, onArticleClick }) {
  return (
    <div className="article-list__item d-flex d-block-md clear" onClick={() => onArticleClick()}>
      {getArticleImage(data.media)}
      <h2>{data.title}</h2>
      <p className="d-none d-inline-md">{data.description}</p>
    </div>
  )
}

function getArticleImage(media) {
  if (!media) {
    return null
  }

  return (
    <div className="article-list__image">
      <img src={media.url} alt={media.title} />
    </div>
  )
}
