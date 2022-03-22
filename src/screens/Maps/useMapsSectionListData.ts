import React from "react"

import Map from "types/Map"

const useMapsSectionListData = (maps: Map[]) => {
  const mapsSectionListData = React.useMemo(() => {
    const currentBattleRoyaleMap = maps.find(
      map => map.map_type === "current_battle_royale",
    )
    const nextBattleRoyaleMap = maps.find(
      map => map.map_type === "next_battle_royale",
    )
    const currentArenasMap = maps.find(map => map.map_type === "current_arenas")
    const nextArenasMap = maps.find(map => map.map_type === "next_arenas")
    const currentRankedArenasMap = maps.find(
      map => map.map_type === "current_ranked_arenas",
    )
    const nextRankedArenasMap = maps.find(
      map => map.map_type === "next_ranked_arenas",
    )
    const currentRankedMap = maps.find(map => map.map_type === "current_ranked")
    const nextRankedMap = maps.find(map => map.map_type === "next_ranked")

    if (
      currentBattleRoyaleMap &&
      nextBattleRoyaleMap &&
      currentArenasMap &&
      nextArenasMap &&
      currentRankedArenasMap &&
      nextRankedArenasMap &&
      currentRankedMap &&
      nextRankedMap
    ) {
      return [
        {
          title: "Battle Royale",
          data: [currentBattleRoyaleMap, nextBattleRoyaleMap],
        },
        {
          title: "Arenas",
          data: [currentArenasMap, nextArenasMap],
        },
        {
          title: "Ranked Arenas",
          data: [currentRankedArenasMap, nextRankedArenasMap],
        },
        {
          title: "Ranked",
          data: [currentRankedMap, nextRankedMap],
        },
      ]
    }
    return []
  }, [maps])

  return mapsSectionListData
}

export default useMapsSectionListData
