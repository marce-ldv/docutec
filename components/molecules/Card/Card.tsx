import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const CustomCard = ({ name, image, price, sku, description }): JSX.Element => {
  return (
    <div className="card-container">
      <Card>
        <CardImg top width="100%" src={`/assets/${image}`} alt={name} />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Ver producto</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomCard;
