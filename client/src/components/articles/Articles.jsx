import React, {useEffect, useState} from "react";
import FilpboardApi from "../../api/flipboardApi/FilpboardApi";
import Article from "./article/Article";

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            setArticles(await requestArticlesFromApi());
        }

        fetchArticles();
    }, []);

    return (
        <div className="article-list">
            {
                articles.map((article) => (
                    <Article
                        data={article}
                    />
                ))
            }
        </div>
    )

}

async function requestArticlesFromApi() {
    try {
        const flipBoardApiResponse = await FilpboardApi.getArticles();

        return flipBoardApiResponse && FilpboardApi.mapResponse(flipBoardApiResponse.data) || [];
    } catch(error) {
        console.log(error);
        return [];
    }
}
