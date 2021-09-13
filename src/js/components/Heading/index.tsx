import React from 'react'
import * as Styles from './styles'

type HeadingProps = {
  title: string
}

export default function Heading({ title }: HeadingProps) { 
  return (
    <Styles.Heading>
      <Styles.headingText>{title}</Styles.headingText>
    </Styles.Heading>
  )
}