import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  type SliderProps as ChakraSliderProps,
} from '@chakra-ui/react'

interface SliderProps extends ChakraSliderProps {}

export default function Slider({ max, value }: SliderProps) {
  return (
    <ChakraSlider
      min={0}
      max={max}
      aria-label="slider-ex-1"
      value={value}
      focusThumbOnChange={false}
    >
      <SliderTrack>
        <SliderFilledTrack bg="teal.400" />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  )
}
