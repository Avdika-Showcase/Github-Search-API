
import React from 'react';

import { Button } from '../Styles/buttonStyled';

const MyButton = (props) => {



    return (
        <Button
            title={props.title}
            // onClick={() => props.onClick(props.title)}
            onClick={props.onClick}
        >
            {props.buttontext}
        </Button>
    );
};

export default MyButton;
