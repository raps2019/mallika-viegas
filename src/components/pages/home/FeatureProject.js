import React, { useEffect} from 'react';
import QuoteText from '../../utils/QuoteText';
import * as Styled from './FeatureProject.styles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const FeatureProject = (props) => {
  const { category, img, alt, pathName, gridType, title, client, quote } = props;

  const animation = useAnimation();
  const  [ref, inView, entry] = useInView({threshold: 0.2})

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const variants = {
    
      hidden: {
        // scaleX: 0.5,
        opacity: 0,
      },
      visible: {
        // y: 0,
        // scaleX: 1,
        opacity: 1,
        transition: { delay: 0.25, duration: 0.35 },
      },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      // scaleX: 0.25,

    },
    visible: {
      opacity: 1,
      // scaleX: 1,
      transition: {
        delay: 0.5,
        duration: 0.35,
      },
    },
  }

  return (
    <Styled.Container gridType={gridType}
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={variants}>
      <Styled.ImageWrapperLink key={pathName} to={category + '/' + pathName}>
        <Styled.Image src={img} alt={alt}></Styled.Image>
        <Styled.TextWrapper variants={childVariants}>
          <Styled.HeadingFive>{title}</Styled.HeadingFive>
          <Styled.HeadingSix>{client}</Styled.HeadingSix>
          <QuoteText quote={quote}></QuoteText>
        </Styled.TextWrapper>
      </Styled.ImageWrapperLink>
    </Styled.Container>
  );
};

export default FeatureProject;
