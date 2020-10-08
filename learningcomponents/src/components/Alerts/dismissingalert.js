import React, { useState } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

const AlertExample = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
      <div>
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
                I am an alert and I can be dismissed!
        </Alert>

        <UncontrolledAlert color="info" fade={false}>
            I am an alert and I can be test dismissed!
        </UncontrolledAlert>
      </div>
  );
}

export default AlertExample;