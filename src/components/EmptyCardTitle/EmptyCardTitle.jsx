import React, { Component } from 'react';
import {CardTitle} from 'reactstrap';

class EmptyCardTitle extends Component {
    render() {
        const {title, ...props} = this.props;

        return (
            <CardTitle {...props}>
                {title}
            </CardTitle>
        );
    }
}

export default EmptyCardTitle;