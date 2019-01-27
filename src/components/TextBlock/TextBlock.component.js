import React from 'react'
import StyledTextBlock from './TextBlock.style'

import PropTypes from "prop-types"

const TextBlock = ({textBlockInfo}) => (
  <div className="text-block-container">
    <StyledTextBlock>
      <h2>{textBlockInfo.title}</h2>
      <div
        className="text-block-content"
        dangerouslySetInnerHTML={{__html: textBlockInfo.content.childContentfulRichText.html}}
      />
      { 
        (
          textBlockInfo.callToActionText !== null
          && textBlockInfo.isLinkInternal !== null
          && textBlockInfo.callToActionUrl !== null
        ) && (
          <div className="call-to-action__neutral">
            <a href={textBlockInfo.callToActionUrl}>{textBlockInfo.callToActionText}</a>
          </div>
        )
      }
    </StyledTextBlock>
  </div>
)

TextBlock.propTypes = {
  textBlockInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    callToActionText: PropTypes.string,
    isLinkInternal: PropTypes.bool,
    callToActionUrl: PropTypes.string,
    content: PropTypes.shape({
      childContentfulRichText: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired,
  }).isRequired
}

export default TextBlock