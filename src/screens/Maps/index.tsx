import React from "react"
import { SafeAreaView, SectionList, StyleSheet, View } from "react-native"

import { MapType } from "types/Map"

import useMaps from "hooks/useMaps"
import useMapsSectionListData from "./useMapsSectionListData"

import GameType from "./GameType"
import Map from "./Map"

import Loading from "components/Loading"

const apexLegendsMapTypes: MapType[] = [
  "current_battle_royale",
  "next_battle_royale",
  "current_arenas",
  "next_arenas",
  "current_ranked_arenas",
  "next_ranked_arenas",
  "current_ranked",
  "next_ranked",
]

const Maps = () => {
  const maps = useMaps()
  const mapsSectionListData = useMapsSectionListData(maps)

  const mapsHaveBeenFetched = maps.length === apexLegendsMapTypes.length

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {mapsHaveBeenFetched ? (
        <SectionList
          style={styles.sectionList}
          sections={mapsSectionListData}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
          renderSectionHeader={({ section: { title: gameType } }) => (
            <GameType gameType={gameType} />
          )}
          renderItem={({ item: map }) => <Map map={map} />}
        />
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  sectionList: {
    flex: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
})

export default Maps
