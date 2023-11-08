import { Box, useTheme } from 'native-base'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'

const Routes = () => {
    const { colors } = useTheme()
    const theme = DefaultTheme
    theme.colors.background = colors.gray[100]

    return(
        <Box flex={1} bg="gray.900">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>

    )
}

export default Routes