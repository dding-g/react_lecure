import React, { Component } from 'react';

// import EmptyCard from '../../components/EmptyCard/EmptyCard'
// import EmptyCardBody from '../../components/EmptyCardBody'
// import EmptyCardImage from '../../components/EmptyCardImage'
// import EmptyCardText from '../../components/EmptyCardText'
// import EmptyCardTitle from '../../components/EmptyCardTitle'

import {EmptyCardBody, EmptyCard, EmptyCardImage, EmptyCardText, EmptyCardTitle} from '../../components/EmptySet'

class ProfileCard extends Component {
    render() {
        const {title, text ,src} = this.props;

        return (
                <EmptyCard>
                    <EmptyCardImage src={src}/>
                    <EmptyCardBody>
                        <EmptyCardTitle tag="h3" title={title}/>
                        <EmptyCardText text={text}/>
                    </EmptyCardBody>
                </EmptyCard>
        );
    }
}

export default ProfileCard;