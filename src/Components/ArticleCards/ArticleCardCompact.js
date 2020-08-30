import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './ArticalCard.css';

export default function ArticalCardCompact() {
    return (
        <div>
            <Card className="actionCard actionCard__compact">
                <CardActionArea>
                    <div className="actionCard__container">
                        <div className="actionCard__media--compact">
                            <img src="https://www.xtrafondos.com/en/descargar.php?id=3633&resolucion=3840x2160" alt="" />
                        </div>
                        <div className="actionCard__body">
                            <h3 className="articalCard__header articalCard__header--compact">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </h3>
                            <p className="articalCard__username articalCard__username--compact">Username</p>
                            <span className="articalCard__caption articalCard__caption--compact">
                                Nov 10, 2018 - 8 min read *
                            </span>
                        </div>

                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
}
