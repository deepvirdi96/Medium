import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './ArticalCard.css';

export default function ArticleCardHuge() {
    return (
        <div>
            <Card className="actionCard actionCard__huge">
                <CardActionArea>
                    <CardMedia
                        className="actionCard__media--huge"
                        image="https://www.xtrafondos.com/en/descargar.php?id=3633&resolucion=3840x2160"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h3 className="articalCard__header articalCard__header--huge">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h3>
                        <p className="articalCard__content">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </p>
                        <p className="articalCard__username">Username</p>
                        <span className="articalCard__caption">
                            Nov 10, 2018 - 8 min read *
                        </span>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
