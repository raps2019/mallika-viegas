import React, { useEffect, useContext } from 'react';
import QuoteText from '../quoteText/QuoteText';
import * as Styled from './ProjectFeature.styles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { ThemeContext } from '../../../contexts/ThemeStore';

const ProjectFeature = (props) => {
  const { category, img, alt, pathName, gridType, title, client, quote } =
    props;
  const { currentTheme } = useContext(ThemeContext);

  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  const variants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.25, duration: 0.35 },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <Styled.Container
      gridType={gridType}
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={variants}
    >
      <Styled.ImageWrapperLink key={pathName} to={category + '/' + pathName}>
        <Styled.Image
          src={img}
          alt={alt}
          currentTheme={currentTheme}
        ></Styled.Image>
        <Styled.TextWrapper variants={childVariants}>
          <Styled.HeadingFive>{title}</Styled.HeadingFive>
          <Styled.HeadingSix>{client}</Styled.HeadingSix>
          <QuoteText quote={quote}></QuoteText>
        </Styled.TextWrapper>
      </Styled.ImageWrapperLink>
    </Styled.Container>
  );
};

export default ProjectFeature;
