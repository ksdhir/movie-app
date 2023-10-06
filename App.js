import {
  ThemeProvider,
  createTheme,
  darkColors,
  lightColors,
} from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStack from "./src/components/stacks/AppStack";

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
  },
  mode: "light",
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AppStack />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
export default App;