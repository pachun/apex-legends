import React from "react"
import { useNavigation } from "@react-navigation/native"
import parseISO from "date-fns/parseISO"
import isBefore from "date-fns/isBefore"

import Map from "types/Map"

import useCurrentTime from "hooks/useCurrentTime"

import get from "api/get"

const useMaps = (): Map[] => {
  const navigation = useNavigation()
  const currentTime = useCurrentTime()
  const [maps, setMaps] = React.useState<Map[]>([])

  const getMaps = React.useCallback(async () => {
    const maps = await get<Map[]>("/apex_legends_maps")
    if (maps) {
      setMaps(maps)
    }
  }, [])

  const getMapsWhenThisScreenIsShown = React.useCallback(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getMaps()
    })

    return unsubscribe
  }, [navigation, getMaps])

  const updateMapsWhenTheyChange = React.useCallback(() => {
    if (maps.length > 0) {
      const thereAreExpiredMaps = maps.some(map => {
        const mapTypesThatExpire = [
          "current_battle_royale",
          "current_arenas",
          "current_ranked_arenas",
        ]

        return (
          mapTypesThatExpire.includes(map.map_type) &&
          isBefore(parseISO(map.ends_at), currentTime)
        )
      })
      if (thereAreExpiredMaps) {
        getMaps()
      }
    }
  }, [currentTime, maps, getMaps])

  React.useEffect(getMapsWhenThisScreenIsShown, [getMapsWhenThisScreenIsShown])
  React.useEffect(updateMapsWhenTheyChange, [updateMapsWhenTheyChange])

  return maps
}

export default useMaps
