import React from 'react'
import { Grid } from '@material-ui/core'
import './ArticalCard.css';

export default function ArticleCardPopular() {
    return (
        <div className="articalCardPopular" >
            <Grid container>
                <Grid item xs={2} className="articalCardPopular__index">
                    <span className="articalCardPopular__span">01</span>
                </Grid>
                <Grid container direaction="column" item xs={10} className="articalCardPopular__body" >
                    <Grid item xs={12}>
                        <h4 className="articalCard__header articalCard__header--popular">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
                        </h4>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="articalCard__username articalCard__username--popular">
                            Username
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="articalCard__caption articalCard__caption--popular">
                            Nov 10, 2018 - 8 min read *
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
