import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs1 = (props) =>{
    return(
        <div> 
            <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem><a href="https://www.google.com">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem><a href="https://www.google.com">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="https://www.google.com">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
}

export default Breadcrumbs1;