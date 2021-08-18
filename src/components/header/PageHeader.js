import React from 'react';
import './PageHeader.css';

const PageHeader=({heading})=>{
    return (
        <div className="page-header">
            {heading}
        </div>
    )
}
export default PageHeader;