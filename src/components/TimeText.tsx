import { Text, TextProps } from '@chakra-ui/react'

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
    <Text color={color} size="sm">
      {getPrettyTime(currentTime)} / {getPrettyTime(duration)}
    </Text>
  )
}
