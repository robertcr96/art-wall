import React from 'react';
import fetch from 'node-fetch';
import Header from './Header.js';
import Content from './Content';
import Footer from './Footer.js'

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            deviantArtPost : {}
        }
        
    }

    takeDeviantArtPost = (json) => {
        this.setState({deviantArtPost : json});
        console.log(this.state.takeDeviantArtPost);
}

    render() {
        return(
            <div>
                <Header takeDeviantArtPost = {this.takeDeviantArtPost} />
                <Content version = {this.state.deviantArtPost.version}
                        type = {this.state.deviantArtPost.type}
                        title = {this.state.deviantArtPost.title}
                        category = {this.state.deviantArtPost.category} 
                        url = {this.state.deviantArtPost.url}
                        author_name = {this.state.deviantArtPost.author_name}
                        author_url = {this.state.deviantArtPost.author_url}
                        safety = {this.state.deviantArtPost.safety}
                        pubdate = {this.state.deviantArtPost.pubdate}
                        width = {this.state.deviantArtPost.width}
                        height = {this.state.deviantArtPost.height}
                        imagetype = {this.state.deviantArtPost.imagetype}
                        thumbnail_url = {this.state.deviantArtPost.thumbnail_url}
                        thumbnail_width = {this.state.deviantArtPost.thumbnail_width}
                        thumbnail_height = {this.state.deviantArtPost.thumbnail_height}
                        thumbnail_url_150 = {this.state.deviantArtPost.thumbnail_url_150}
                        thumbnail_url_200h = {this.state.deviantArtPost.thumbnail_url_200h}
                        thumbnail_width_200h = {this.state.deviantArtPost.thumbnail_width_200h}
                        thumbnail_height_200h = {this.state.deviantArtPost.thumbnail_height_200h}

                        />
                <Footer/>
            </div>
        );
    }
}

