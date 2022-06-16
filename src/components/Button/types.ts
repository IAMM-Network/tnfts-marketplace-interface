import React, { ElementType, ReactNode } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'
import type { PolymorphicComponentProps } from '../../util/polymorphic'

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  CTA: 'cta',
} as const

export type Variant = typeof variants[keyof typeof variants]

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: 'a' | 'button' | ElementType
  external?: boolean
  isLoading?: boolean
  variant?: Variant
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export interface BaseSquareButtonProps extends LayoutProps, SpaceProps {
  borderRadius: number|string;
  size: number|string;
  rotation: boolean;
  active: boolean;
  onActived: () => any;
  onDisabled: () => any;
  Icon: React.ReactChild;
  disabledBackground: string;
  activeBackground: string;
  iconDisabledColor: string;
  iconActiveColor: string;
}

export type ButtonProps<P extends ElementType = 'button'> = PolymorphicComponentProps<P, BaseButtonProps>
export type SquareButtonProps<P extends ElementType = 'button'> = PolymorphicComponentProps<P, BaseSquareButtonProps>
