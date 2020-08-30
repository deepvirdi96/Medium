import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';
import EditorsPick from '../EditorsPick/EditorsPick';

import Container from '@material-ui/core/Container';
import PopularArticals from '../../Articals/PopularArticals/PopularArticals';
import LatestArticals from '../../Articals/LatestAritcals/LatestArticals';
import { Grid } from '@material-ui/core';

const MainContainer = () => {
    return (
        <div className="mainContainer">
            <Container maxWidth="lg">
                <CategorySlider />
                <EditorsPick />
                <Grid container spacing={3} justify="center">
                    <Grid item container xs={10} spacing={1}>
                        <Grid item lg={4}>
                            <PopularArticals />
                        </Grid>
                        <Grid item lg={8} >
                            <LatestArticals />
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}

export default MainContainer;
