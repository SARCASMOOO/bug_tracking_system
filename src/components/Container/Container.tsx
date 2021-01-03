import React from 'react';

interface Props { 
    children: any;
}

const ContainerWrapper = ({ children }: Props) =>
    <div className="wrapper">
        {children}
    </div>

export default ContainerWrapper;