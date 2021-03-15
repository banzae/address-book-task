import React, { ReactElement } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'

type ButtonType = 'button' | 'submit'

interface ButtonPropsInterface {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: ButtonType;
  icon?: IconProp
}

function Button({ text, onClick, className, icon, type = 'button' }: ButtonPropsInterface): ReactElement {

  return <button type={type} onClick={onClick} className={classNames('btn ', className)}>
    {icon ? <><Icon icon={icon} />{" "}</> : null}
    {text}
  </button>
}

Button.defaultProps = {
  className: 'btn-primary'
}

export default Button
