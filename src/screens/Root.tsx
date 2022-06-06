/* eslint-disable jsx-a11y/media-has-caption */
import type { RefObject } from 'react'
import { useRef } from 'react'
import { Center, Stack } from '@chakra-ui/react'

// Components
import Slider from '../components/Slider'
import PlayStopButtons from '../components/PlayStopButtons'

// Types
export interface AudioPlayerComponent {
  audioPlayer: RefObject<HTMLAudioElement> | undefined
}

export default function Root() {
  const exampleAudio =
    'https://file-examples.com/storage/fe83f6744b629b798a083a5/2017/11/file_example_MP3_700KB.mp3'
  const playerElem = useRef(null)

  return (
    <Center h="100%">
      <Stack spacing={8} minW="300px">
        <audio ref={playerElem} src={exampleAudio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <Stack direction="row" spacing={4}>
          <PlayStopButtons audioPlayer={playerElem} />
          <Slider />
        </Stack>
      </Stack>
    </Center>
  )
}
