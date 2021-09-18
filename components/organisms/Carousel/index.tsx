import React, { FunctionComponent, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import { itemContainer, itemLeft, itemRight } from './styles.module.scss';

interface OwnProps {}

type Props = OwnProps;

const items = [
  {
    src: '/assets/scanners/E1000_2.jpg',
    altText: 'E1000_2',
    caption: 'E1000_2',
    title: 'Kodak',
    description: 'Los scanners KODAK Serie E1000 y el software de procesamiento de imágenes le proporcionan una solución para reducir la cantidad de papeleo desorganizado, tanto en casa como en la oficina'
  },
  {
    src: '/assets/scanners/E1000_2.jpg',
    altText: 'E1000_2',
    caption: 'E1000_2',
    title: 'Kodak',
    description: 'Los scanners KODAK Serie E1000 y el software de procesamiento de imágenes le proporcionan una solución para reducir la cantidad de papeleo desorganizado, tanto en casa como en la oficina'
  },
  {
    src: '/assets/scanners/E1000_2.jpg',
    altText: 'E1000_2',
    caption: 'E1000_2',
    title: 'Kodak',
    description: 'Los scanners KODAK Serie E1000 y el software de procesamiento de imágenes le proporcionan una solución para reducir la cantidad de papeleo desorganizado, tanto en casa como en la oficina'
  },
];

const CarouselComponent: FunctionComponent<Props> = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className={itemContainer}>
          <div className={itemLeft}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div className={itemRight}>
            <picture>
              <source srcSet={item.src} />

              {/*fallback*/}
              <img src="/assets/printers/printer.png" width={500} alt="asd" />
            </picture>
          </div>
        </div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default CarouselComponent;
