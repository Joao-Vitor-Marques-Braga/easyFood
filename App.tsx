import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_500Medium});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
  );
}
