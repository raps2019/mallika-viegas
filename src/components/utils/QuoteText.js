import React from 'react'
import * as Styled from './QuoteText.styles'

const QuoteText = ({quote}) => {
  return (
  <Styled.QuoteParagraphContainer>
    <Styled.OpenQuoteStrong></Styled.OpenQuoteStrong>
    <Styled.QuoteParagraph>{quote}</Styled.QuoteParagraph>
    <Styled.CloseQuoteStrong></Styled.CloseQuoteStrong>
  </Styled.QuoteParagraphContainer>
  )
}

export default QuoteText
