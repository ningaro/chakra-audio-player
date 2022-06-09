/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState, type RefObject, SyntheticEvent } from 'react'
import { Center, Stack } from '@chakra-ui/react'

// Components
import Slider from '../components/Slider'
import PlayStopButtons from '../components/PlayStopButtons'

// music
import song from '../assets/music/file_example.mp3'
import TimeText from '../components/TimeText'

// Types
export interface AudioPlayerComponent {
  audioPlayer: RefObject<HTMLAudioElement> | undefined
}

export default function Root() {
  /*  const exampleAudio =
    'https://file-examples.com/storage/fe70afa24f62a2494a35c65/2017/11/file_example_MP3_700KB.mp3' */
  const playerElem = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  const handleMeta = (e: SyntheticEvent<HTMLAudioElement>) => {
    setCurrentTime(e.currentTarget.currentTime)
    setDuration(e.currentTarget.duration)
  }

  return (
    <Center h="100%">
      <Stack
        bg="teal.100"
        borderRadius="lg"
        spacing={8}
        minW="320px"
        px={4}
        py={8}
      >
        <audio
          onPlay={handlePlay}
          onPause={handlePause}
          onTimeUpdate={handleMeta}
          ref={playerElem}
          src={song}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <Stack alignItems="center">
          <Stack direction="row" spacing={4} w="100%">
            <PlayStopButtons
              aria-label="Play/Pause button"
              variant="outline"
              colorScheme="teal"
              isPlaying={isPlaying}
              audioPlayer={playerElem}
            />
            <Slider max={duration || 1} value={currentTime} />
          </Stack>
          <TimeText
            color="teal.600"
            duration={duration}
            currentTime={currentTime}
          />
        </Stack>
      </Stack>
    </Center>
  )
}
