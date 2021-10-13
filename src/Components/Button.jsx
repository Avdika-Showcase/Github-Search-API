
import React from 'react';

import { Button } from '../Styles/buttonStyled';

const MyButton = (props) => {
    return (
        <Button>
            {props.buttontext}
        </Button>
    );
};

export default MyButton;
