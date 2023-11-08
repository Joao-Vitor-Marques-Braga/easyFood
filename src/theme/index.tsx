import { extendTheme } from "native-base";

export const THEME = extendTheme({
    colors: {
        orange: {
            100: '#FFA149'
        },
        pink: {
            100: '#FFCBF7'
        },
        red: {
            100: '#FFACAC'
        },
        yellow: {
            100: '#FFFBF2',
            200: '#FFE9AF'
        },
        green: {
            100: '#BDFFA6'
        },
        black: '#000',
        white: '#fff',
    },

    fonts: {
        heading: 'Poppins_500Medium',
        body: 'Poppins_400Regular'
    },

    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    }
})