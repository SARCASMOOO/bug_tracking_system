import React from 'react';

interface Props { 
    children: any;
}

const Content = ({ children }: Props) =>
    <div className="content">
        {children}
    </div>

export default Content;