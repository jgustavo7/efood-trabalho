import { ButtonContainer, ButtonContainerLink } from './styles'

type ButtonProps = {
  kind: 'button' | 'link'
  displayMode?: 'full' | 'inline'
  coresMode: 'primary' | 'second'
  placeholder: string
  to?: string
  type?: 'button' | 'reset' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  kind,
  placeholder,
  displayMode = 'full',
  coresMode = 'primary',
  to,
  type = 'button',
  disabled = false,
  onClick
}: ButtonProps) => {
  if (kind === 'link') {
    return (
      <ButtonContainerLink
        $displayMode={displayMode}
        $coresMode={coresMode}
        to={to as string}
      >
        {placeholder}
      </ButtonContainerLink>
    )
  }

  return (
    <ButtonContainer
      onClick={onClick}
      $displayMode={displayMode}
      $coresMode={coresMode}
      type={type}
      disabled={disabled}
    >
      {placeholder}
    </ButtonContainer>
  )
}

export default Button
