export type MapType =
  | "current_battle_royale"
  | "next_battle_royale"
  | "current_arenas"
  | "next_arenas"
  | "current_ranked_arenas"
  | "next_ranked_arenas"
  | "current_ranked"
  | "next_ranked"

type BattleRoyaleMapNames =
  | "Kings Canyon"
  | "Olympus"
  | "Storm Point"
  | "World's Edge"

type ArenasMapNames =
  | "Habitat 4"
  | "Encore"
  | "Overflow"
  | "Party Crasher"
  | "Phase Runner"
  | "Drop Off"

export type MapName = BattleRoyaleMapNames | ArenasMapNames

interface Map {
  map_type: MapType
  name: MapName
  starts_at: string
  ends_at: string
}

export default Map
