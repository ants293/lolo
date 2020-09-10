import React from 'react';

export default function Article({ data }) {
    return (
        <div className="article-list__item clear">
            {imageHandler(data.media)}
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
    )
}

function imageHandler(media) {
    if (!media) {
        return null;
    }

    return (
        <div className="article-list__image">
            <img src={media.url} alt={media.title} />
        </div>
    )
}
