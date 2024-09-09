import React from 'react'

import { Button as PrimeButton, ButtonProps } from 'primereact/button'

interface CustomButtonProps extends ButtonProps {
  children?: React.ReactNode
}

export const Button: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  ...rest
}) => (
  <PrimeButton onClick={onClick} {...rest}>
    {children}
  </PrimeButton>
)
