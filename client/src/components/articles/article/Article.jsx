import React from 'react';

export default function Article({ data }) {
    console.log(data);
    return (
        <div className="article-list__item">
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
        <img className="article-list__image" src={media.url} alt={media.title} />
    )
}
