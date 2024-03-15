import Main from "./src/Main";
import { Provider } from "react-redux";
import store from "./src/utils/store";
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useCallback } from "react";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [fontsLoaded, fontError] = useFonts({
  //   'CascadiaMono': require('./assets/fonts/CascadiaMono.otf'),
  //   'CascadiaMono-Bold': require('./assets/fonts/CascadiaMono-Bold.otf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}


