import React, {Fragment, useEffect, useState} from "react";
import FilpboardApi from "../../api/flipboardApi/FilpboardApi";
import Article from "./article/Article";
import ArticleModal from "./articleModal/ArticleModal";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        async function fetchArticles() {
            setArticles(await requestArticlesFromApi());
        }

        fetchArticles();
    }, []);
    console.log("articles comp", modalOpen);

    return (
        <Fragment>
            <ArticleModal
                isOpen={modalOpen}
                setOpen={setModalOpen}
            />
            <div className="article-list">
                <div className="flex-grid flex-wrap">
                    {
                        articles.map((article) => (
                            <div key={article.title} className="flex-grid-col-4">
                                <Article
                                    data={article}
                                    setModal={setModalOpen}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )

}

async function requestArticlesFromApi() {
    try {
        const flipBoardApiResponse = await FilpboardApi.getArticles();

        return (flipBoardApiResponse && FilpboardApi.mapResponse(flipBoardApiResponse.data)) || [];
    } catch(error) {
        console.log(error);
        return [];
    }
}
