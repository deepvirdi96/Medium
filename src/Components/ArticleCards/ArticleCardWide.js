import React from 'react'
import './ArticalCard.css';
import { Card, CardActionArea } from '@material-ui/core';

export default function ArticleCardWide() {
    return (
        <div>
         <Card className="actionCard actionCard__wide" elevation={0} >
                <CardActionArea>
                    <div className="actionCard__container actionCard__container--wide">
                        <div className="actionCard__media--wide">
                            <img src="https://www.xtrafondos.com/en/descargar.php?id=3633&resolucion=3840x2160" alt="" />
                        </div>
                        <div className="actionCard__body--wide">
                            <h4 className="articalCard__header articalCard__header--wide">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </h4>
                            <p className="articalCard__description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, optio quaerat?.
                            </p>
                            <p className="articalCard__username articalCard__username--wide">Username</p>
                            <span className="articalCard__caption articalCard__caption--wide">
                                Nov 10, 2018 - 8 min read *
                            </span>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
}
