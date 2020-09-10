import React, {Fragment, useEffect, useState} from "react";
import FilpboardApi from "../../api/flipboardApi/FilpboardApi";
import Article from "./article/Article";
import ArticleModal from "./articleModal/ArticleModal";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [articleContent, setArticleContent] = useState(null);

    useEffect(() => {
        async function fetchArticles() {
            setArticles(await requestArticlesFromApi());
        }

        fetchArticles();
    }, []);

    async function onArticleClick(link) {
        setModalOpen(true);
        setArticleContent(await requestArticle(link));
    }

    return (
        <Fragment>
            <ArticleModal
                isOpen={modalOpen}
                setOpen={setModalOpen}
                contents={articleContent}
            />
            <div className="article-list">
                <div className="flex-grid flex-wrap">
                    {
                        articles.map((article) => (
                            <div key={article.title} className="flex-grid-col-4">
                                <Article
                                    data={article}
                                    onArticleClick={() => onArticleClick(article.link)}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )

}

async function requestArticle(link) {
    try {
        const response = await FilpboardApi.requestArticle(link);

        return response.data;
    } catch(error) {
        console.log(error);
    }
}

async function requestArticlesFromApi() {
    try {
        const flipBoardApiResponse = await FilpboardApi.requestArticles();

        return (flipBoardApiResponse && FilpboardApi.mapResponse(flipBoardApiResponse.data)) || [];
    } catch(error) {
        console.log(error);
        return [];
    }
}
