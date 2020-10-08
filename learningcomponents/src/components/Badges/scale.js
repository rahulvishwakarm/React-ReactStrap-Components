import React from 'react';
import { Badge } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <h1>Heading <Badge color="primary">New</Badge></h1>
      <h2>Heading <Badge color="secondary">New</Badge></h2>
      <h3>Heading <Badge color="info">New</Badge></h3>
      <h4>Heading <Badge color="warning">New</Badge></h4>
      <h5>Heading <Badge color="success">New</Badge></h5>
      <h6>Heading <Badge color="dark">New</Badge></h6>
    </div>
  );
}

export default Example;