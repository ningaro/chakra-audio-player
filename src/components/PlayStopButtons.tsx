import { ButtonGroup, Icon, IconButton } from '@chakra-ui/react'
import { RiPlayLine, RiPauseLine } from 'react-icons/ri'

import type { AudioPlayerComponent } from '../screens/Root'

// Types
interface PlayStopButtonsProps extends AudioPlayerComponent {}

export default function PlayStopButtons({ audioPlayer }: PlayStopButtonsProps) {
  const handlePlay = () => {
    if (audioPlayer?.current) audioPlayer?.current?.play()
  }
  const handlePause = () => {
    if (audioPlayer?.current) audioPlayer?.current?.pause()
  }

  return (
    <ButtonGroup isAttached variant="outline">
      <IconButton
        onClick={handlePlay}
        aria-label="Play audio"
        icon={<Icon as={RiPlayLine} />}
      />
      <IconButton
        onClick={handlePause}
        aria-label="Pause audio"
        icon={<Icon as={RiPauseLine} />}
      />
    </ButtonGroup>
  )
}
