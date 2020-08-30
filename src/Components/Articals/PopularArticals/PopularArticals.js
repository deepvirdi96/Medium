import React from 'react'
import ArticalCardPopular from '../../ArticleCards/ArticleCardPopular';

export default function PopularArticals() {

    return (
        <div className="popularArticals">
            <div className="popularArticalsGroup" >
                <ArticalCardPopular />
                <ArticalCardPopular />
                <ArticalCardPopular />
                <ArticalCardPopular />
                <ArticalCardPopular />
            </div>
        </div>
    )
}
