import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList({articles}){
    console.log(articles);
    const posts= blogData.posts.map(article=>
       ( <Article
            key= {article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes} />
        ))

        return (<main>{posts}</main>)
}

export default ArticleList;