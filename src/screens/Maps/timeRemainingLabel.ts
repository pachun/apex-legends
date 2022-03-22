import differenceInSeconds from "date-fns/differenceInSeconds"
import intervalToDuration from "date-fns/intervalToDuration"
import parseISO from "date-fns/parseISO"

import Map from "types/Map"

const timeRemainingLabel = (map: Map, currentTime: Date) => {
  const duration = intervalToDuration({
    start: 0,
    end: differenceInSeconds(parseISO(map.ends_at), currentTime) * 1000,
  })
  return `${duration.hours}:${
    duration.minutes != undefined && duration.minutes < 10
      ? `0${duration.minutes}`
      : duration.minutes
  }:${
    duration.seconds != undefined && duration.seconds < 10
      ? `0${duration.seconds}`
      : duration.seconds
  }`
}

export default timeRemainingLabel
