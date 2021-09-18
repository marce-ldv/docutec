import React, { FunctionComponent } from 'react';
import { Button } from 'reactstrap';

interface OwnProps {
  children: any,
  color?: string,
}

type Props = OwnProps;

const ButtonComponent: FunctionComponent<Props> = ({ children, color, ...props }) => {

  return (
    <Button color={color}>
      { children }
    </Button>
  );
};

export default ButtonComponent;
