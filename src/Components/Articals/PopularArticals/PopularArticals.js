import React from 'react'
import ArticalCardPopular from '../../ArticleCards/ArticleCardPopular';
import './PopularArticals.css';

export default function PopularArticals() {

    return (
        <div className="popularArticals">
            <h1 className="popularArticals__header">Popular Articals</h1>
            <hr className="popularArticalsSeperator"/>
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
