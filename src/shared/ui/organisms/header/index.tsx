import * as React from 'react'
import styled from 'styled-components/macro'

import { Logo } from '@/shared/ui/atoms'
import { Menu } from '@/shared/ui/molecules'

const headerItems = [
  {
    slug: '#footer',
    caption: 'Anchor',
  },
  {
    slug: '404',
    caption: '404 page',
  },
]

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <Menu items={headerItems} />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`
