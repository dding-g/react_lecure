import React, { Component } from 'react';
import {CardText} from 'reactstrap';

class EmptyCardText extends Component {
    render() {
        const {text, ...props} = this.props;

        return (
            <CardText {...props}>
                {text}
            </CardText>
        );
    }
}

export default EmptyCardText;