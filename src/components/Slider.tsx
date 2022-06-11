import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  type SliderProps as ChakraSliderProps,
} from '@chakra-ui/react'

interface SliderProps extends ChakraSliderProps {
  updatePlayerTime: (time: number) => void
}

export default function Slider({ max, value, updatePlayerTime }: SliderProps) {
  return (
    <ChakraSlider
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
