import React from "react"

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = React.useState<Date>(new Date())

  React.useEffect(() => {
    const runEverySecond = 1000
    const interval = setInterval(
      () => setCurrentTime(new Date()),
      runEverySecond,
    )
    return () => clearInterval(interval)
  }, [])

  return currentTime
}

export default useCurrentTime
