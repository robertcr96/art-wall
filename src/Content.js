import React from 'react';
import fetch from 'node-fetch';

import Image from './Image';

export default class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            deviantArtPostObj : {}
        }

    }
    consoleLog = () => {console.log(this.state.deviantArtPostObj)}
    
    render() {
        return(
            <div>
                <div>
                    <Image url ={this.props.url}/>
                </div>
                <div>
                    Title : {this.props.title}
               </div>
               <div>
                    Type : {this.props.type}
               </div>
               <div>
                    Category : {this.props.category}
                </div>
                <div>
                    Author Name : {this.props.author_name} 
               </div>
               <div>
                    Author Url : {this.props.author_url}
                </div>
                <div>
                    Safety : {this.props.safety}
               </div>
               <div>
                    Publication Date : {this.props.pubdate}
                </div>
                <div>
                    Image Type : {this.props.imagetype}
                </div>
            </div>
        );
    }
}

// 