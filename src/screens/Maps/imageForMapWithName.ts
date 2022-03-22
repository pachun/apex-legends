import { MapName } from "types/Map"

const imageForMapWithName = (mapName: MapName) => {
  switch (mapName) {
    case "Olympus":
      return require("../../../assets/olympus.jpeg")
      break
    case "Kings Canyon":
      return require("../../../assets/kings-canyon.jpeg")
      break
    case "Storm Point":
      return require("../../../assets/storm-point.jpg")
      break
    case "World's Edge":
      return require("../../../assets/worlds-edge.jpeg")
      break
    case "Habitat 4":
      return require("../../../assets/habitat.jpeg")
      break
    case "Encore":
      return require("../../../assets/encore.jpeg")
      break
    case "Overflow":
      return require("../../../assets/overflow.jpeg")
      break
    case "Party Crasher":
      return require("../../../assets/party-crasher.jpeg")
      break
    case "Phase Runner":
      return require("../../../assets/phase-runner.jpeg")
      break
    case "Drop Off":
      return require("../../../assets/drop-off.jpeg")
      break
  }
}

export default imageForMapWithName
