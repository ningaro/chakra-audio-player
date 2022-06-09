import { Icon, IconButton, type IconButtonProps } from '@chakra-ui/react'
import { RiPlayFill, RiPauseFill } from 'react-icons/ri'

import type { AudioPlayerComponent } from '../screens/Root'

// Types
interface PlayStopButtonsProps extends AudioPlayerComponent, IconButtonProps {
  isPlaying: boolean
}

export default function PlayStopButtons({
  isPlaying,
  audioPlayer,
  color,
  colorScheme,
  variant,
}: PlayStopButtonsProps) {
  const handlePlay = () => {
    if (audioPlayer?.current) audioPlayer?.current?.play()
  }
  const handlePause = () => {
    if (audioPlayer?.current) audioPlayer?.current?.pause()
  }

  return (
    <IconButton
      colorScheme={colorScheme}
      variant={variant}
      color={color}
      onClick={isPlaying ? handlePause : handlePlay}
      aria-label="Play/Pause button"
      icon={<Icon as={isPlaying ? RiPauseFill : RiPlayFill} />}
    />
  )
}
