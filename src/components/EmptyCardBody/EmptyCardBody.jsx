import React from 'react';
import {CardBody} from 'reactstrap'

function EmptyCardBody(props) {
    return (
        <CardBody>
            {props.children}
        </CardBody>
    );
}

export default EmptyCardBody;