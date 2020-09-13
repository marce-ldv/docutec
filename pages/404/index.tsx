import React, { FunctionComponent } from 'react';
import {Typography}                 from '@material-ui/core';


interface OwnProps {}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {
  
  return (
		<Typography variant="h2">404 - Pagina no encontrada</Typography>
	);
};

export default index;