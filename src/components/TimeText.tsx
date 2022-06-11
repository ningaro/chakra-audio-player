import { Text, Stack, TextProps } from '@chakra-ui/react'

interface TimeTextProps extends TextProps {
  duration: number
  currentTime: number
}

function getPrettyTime(n: number) {
  return new Date(n * 1000)
    .toLocaleTimeString('ru', { timeZone: 'UTC' })
    .substring(3)
}

export default function TimeText({
  color,
  currentTime,
  duration,
}: TimeTextProps) {
  return (
    <Stack direction="row" color={color} w="100%">
      <Text flex="10" size="sm" textAlign="right">
        {getPrettyTime(currentTime)}
      </Text>
      <Text flex="1" size="sm" textAlign="center">
        /
      </Text>
      <Text flex="10" size="sm" textAlign="left">
        {getPrettyTime(duration)}
      </Text>
    </Stack>
  )
}
