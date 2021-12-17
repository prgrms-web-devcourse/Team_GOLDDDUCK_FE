import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from '@components/Image'
import Text from '@components/Text'
import Header from '@domains/Header'
import MUIButton from '@components/MUIButton'

interface Props {
  link: string
  giftChoiceType: string
}

interface Message {
  copyMessage: boolean
}

const EventComplete = ({ link, giftChoiceType }: Props) => {
  const [copyMessage, setCopyMessage] = useState(false)
  const handleCopy = () => {
    copy(link)
    setCopyMessage(true)

    setTimeout(() => {
      setCopyMessage(false)
    }, 1000)
  }

  return (
    <>
      <Header />
      <EventCompleteContainer>
        <Text style={{ textAlign: 'center' }} size="LARGE">
          링크가 생성되었습니다
        </Text>

        <Text style={{ textAlign: 'center', marginTop: '5%' }} size="LARGE">
          이제 선물을 전달해보세요!
        </Text>

        <Div>
          <Image src="/roudolf.png"></Image>
        </Div>

        <Div>
          <a
            href={
              giftChoiceType === 'FIFO' ? `fifo/${link}` : `random/${link}`
            }>
            <Text size="MEDIUM">{link}</Text>
          </a>
        </Div>

        <Div>
          <MUIButton
            style={{ backgroundColor: '#CE000B' }}
            onClick={handleCopy}>
            링크 복사
          </MUIButton>
        </Div>

        <DisplayStyle copyMessage={copyMessage}>
          <Div>
            <Text size="SMALL">복사 완료</Text>
          </Div>
        </DisplayStyle>
      </EventCompleteContainer>
    </>
  )
}

const EventCompleteContainer = styled.div`
  height: calc(100% - 92px);
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`
const Div = styled.div`
  margin-top: 10%;
`
const DisplayStyle = styled.div`
  ${({ copyMessage }: Message) => {
    return copyMessage
      ? css`
          display: black;
        `
      : css`
          visibility: hidden;
        `
  }}
`

export default EventComplete
