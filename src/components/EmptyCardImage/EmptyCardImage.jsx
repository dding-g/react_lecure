import React, { Component } from 'react';
import {CardImg} from 'reactstrap'

const IMAGE_PATH = '/images'

class EmptyCardImage extends Component {
    
    render() {
        const {src, alt} = this.props;
        
        return (
            <CardImg top src={`${IMAGE_PATH}/${src}`} alt={alt} style={{maxWidth: '18.75rem', maxHeight: '20rem'}}/>
        );
    }
}

export default EmptyCardImage;