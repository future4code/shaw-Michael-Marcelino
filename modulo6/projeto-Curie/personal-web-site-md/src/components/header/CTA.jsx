import React from 'react';
import CV from '../../assets/cv_MICHAEL.pdf'
import { Cta } from './styled';

function CTA() {
    return (
        <Cta >
            <a href={CV} download  className='btn'>Dowload CV</a>
            <a href='#contact'  className='btn btn-primary'>Let's Talk</a>

        </Cta>
    );
}

export default CTA;