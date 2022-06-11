import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  type SliderProps as ChakraSliderProps,
} from '@chakra-ui/react'

export interface SliderProps extends ChakraSliderProps {
  updateGlobalNum: (time: number) => void
}

export default function Slider({
  max,
  value,
  orientation,
  minH,
  updateGlobalNum: updatePlayerTime,
}: SliderProps) {
  return (
    <ChakraSlider
      minH={minH}
      orientation={orientation}
      min={0}
      max={max}
      value={value}
      aria-label="slider"
      focusThumbOnChange={false}
      onChange={(e) => updatePlayerTime(e)}
    >
      <SliderTrack>
        <SliderFilledTrack bg="teal.400" />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  )
}
