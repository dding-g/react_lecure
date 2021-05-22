import React from 'react';
import {Card} from 'reactstrap'
import style from 'styled-components';

const StyedCard = style(Card)`
    max-width: 20rem;
    max-height: 30rem;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem auto;

    & > img { 
        align-self: center;
    }
`

function EmptyCard(props) {
    return (
        <StyedCard>
            {props.children}
        </StyedCard>
    );
}

export default EmptyCard;