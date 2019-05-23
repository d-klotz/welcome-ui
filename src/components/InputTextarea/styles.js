import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
// common form styles
import { fieldTypeStyles } from '../../common/styles/form'

export const StyledTextarea = styled.textarea(
  props => css`
    ${fieldTypeStyles};
    ${getCss('fields.textarea')};
    line-height: ${get('fontSizes.body1')};
    padding: ${get('space.sm')};
  `
)