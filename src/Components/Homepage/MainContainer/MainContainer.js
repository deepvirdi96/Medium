import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';
import EditorsPick from '../EditorsPick/EditorsPick';

import Container from '@material-ui/core/Container';

const MainContainer = () => {
    return (
        <div className="mainContainer">
            <Container maxWidth="lg">
                <CategorySlider />
                <EditorsPick />
            </Container>
        </div>
    );
}

export default MainContainer;
