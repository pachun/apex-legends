import { showMessage } from "react-native-flash-message"

const baseUrl = __DEV__
  ? "http://192.168.0.152:3000"
  : "https://apex-legends-maps-api.herokuapp.com"
const get = async <T>(endpoint: string): Promise<T | undefined> => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
    })
    const json = await response.json()
    return json
  } catch ({ message }) {
    showMessage({
      message,
      type: "danger",
      icon: "danger",
      autoHide: false,
      hideOnPress: false,
    })
  }
}

export default get
