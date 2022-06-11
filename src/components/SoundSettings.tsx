/* eslint-disable no-nested-ternary */
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Icon,
  IconButton,
  Center,
  Stack,
  type IconButtonProps,
  type BoxProps,
} from '@chakra-ui/react'
import {
  RiMoreLine,
  RiVolumeUpLine,
  RiVolumeDownLine,
  RiVolumeMuteLine,
} from 'react-icons/ri'

// Components
import Slider, { type SliderProps } from './Slider'

// Types
interface SoundSettingsProps extends Omit<SliderProps, 'max'> {
  variant: IconButtonProps['variant']
  colorScheme: IconButtonProps['colorScheme']
  colors: BoxProps['bg']
}

export default function SoundSettings({
  variant,
  colors,
  colorScheme,
  value,
  updateGlobalNum,
}: SoundSettingsProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          variant={variant}
          colorScheme={colorScheme}
          aria-label="Another settings"
          icon={<Icon as={RiMoreLine} />}
        />
      </PopoverTrigger>
      <PopoverContent w="64px" bg={colors} borderColor={colors}>
        <PopoverArrow boxShadow="none!important" bg={colors} />
        <PopoverBody w="100%">
          <Center>
            <Stack direction="row" alignItems="center">
              <Icon
                color={`${colorScheme}.800`}
                as={
                  value! >= 70
                    ? RiVolumeUpLine
                    : value !== 0
                    ? RiVolumeDownLine
                    : RiVolumeMuteLine
                }
              />
              <Slider
                orientation="vertical"
                updateGlobalNum={updateGlobalNum}
                max={100}
                value={value}
                minH={16}
              />
            </Stack>
          </Center>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
