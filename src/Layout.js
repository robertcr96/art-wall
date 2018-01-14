import React from 'react';
import Header from './Header.js';
import Content from './Content';
import Footer from './Footer.js'

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            deviantArtPostUrl : "Some DA Url!"
        }
    }

    takeDeviantArtPost = (url) => {this.setState({deviantArtPostUrl : url})}

    render() {
        return(
            <div>
                <Header takeDeviantArtPost = {this.takeDeviantArtPost} />
                <Content deviantArtPost = {this.state.deviantArtPostUrl} />
                <Footer/>
            </div>
        );
    }
}

