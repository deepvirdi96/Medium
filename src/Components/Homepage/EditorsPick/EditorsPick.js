import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import ArticleCardHuge from '../../ArticleCards/ArticleCardHuge';
import ArticleCardCompact from '../../ArticleCards/ArticleCardCompact';
import './EditorsPick.css';

export default class EditorsPick extends Component {
    render() {
        return (
            <div className="editorsPick__container">
                <Grid container spacing={3}>
                    <Grid item lg={4} md={6}>
                        <ArticleCardHuge />
                    </Grid>
                    <Grid item lg={4} md={6}>
                        <ArticleCardCompact />
                        <ArticleCardCompact />
                        <ArticleCardCompact />
                    </Grid>
                    <Grid item lg={4} >
                        <ArticleCardHuge />
                    </Grid>
                </Grid>
                <br/>

                <div className="editorsPick_btnContainer">
                    <a href="/"className="editorsaick_btn">Editors Pick > </a>
                </div>
                <hr className="editors_pick_line"/>
            </div>
        )
    }
}
