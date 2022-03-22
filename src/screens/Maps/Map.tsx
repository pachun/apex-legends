import React from "react"
import { ImageBackground, Platform, StyleSheet, Text, View } from "react-native"

import useCurrentTime from "hooks/useCurrentTime"

import timeRemainingLabel from "./timeRemainingLabel"
import imageForMapWithName from "./imageForMapWithName"

import Map from "types/Map"

interface MapProps {
  map: Map
}

const MapComponent = ({ map }: MapProps) => {
  const currentTime = useCurrentTime()

  const isShowingTimeRemainingLabel = React.useMemo(() => {
    const mapTypesShowingTimeRemaining = [
      "current_battle_royale",
      "current_arenas",
      "current_ranked_arenas",
    ]
    return mapTypesShowingTimeRemaining.includes(map.map_type)
  }, [map.map_type])

  const timeRemaining = React.useMemo(() => {
    if (isShowingTimeRemainingLabel) {
      return timeRemainingLabel(map, currentTime)
    }
  }, [isShowingTimeRemainingLabel, map, currentTime])

  const isShowingNextLabel = React.useMemo(() => {
    const mapTypesShowingNextLabel = [
      "next_battle_royale",
      "next_arenas",
      "next_ranked_arenas",
    ]
    return mapTypesShowingNextLabel.includes(map.map_type)
  }, [map])

  const nextLabel = React.useMemo(() => {
    if (isShowingNextLabel) {
      return "next"
    }
  }, [isShowingNextLabel])

  return (
    <View>
      <ImageBackground
        style={styles.mapImage}
        source={imageForMapWithName(map.name)}
      >
        {isShowingTimeRemainingLabel && (
          <Text style={styles.timeRemainingLabel}>{timeRemaining}</Text>
        )}
        {isShowingNextLabel && (
          <Text style={styles.nextLabel}>{nextLabel}</Text>
        )}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  mapImage: {
    width: "100%",
    height: Platform.OS === "web" ? 400 : 200,
    ...(Platform.OS === "web"
      ? {
          justifyContent: "center",
          alignItems: "center",
        }
      : {
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }),
    borderRadius: 7,
    overflow: "hidden",
  },
  timeRemainingLabel: {
    fontVariant: ["tabular-nums"],
    fontSize: Platform.OS === "web" ? 64 : 30,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginRight: 20,
  },
  nextLabel: {
    fontVariant: ["tabular-nums"],
    fontSize: Platform.OS === "web" ? 64 : 30,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginRight: 20,
  },
})

export default MapComponent
