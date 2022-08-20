import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        boxShadows: {
            bs1: string,
            bs2: string,
            bs3 : string
        },
        borders: {
            rounded: string,
            capsule: string,
            square: string
        },
        colors: {
            brandDarkColor: string,
            brandLightColor: string,
            lightColor: string,
            darkColor: string,
            mutedColor : string
        },
        breakpoints: {
            mobile: string,
            tablet : string,
            bigTablet : string,
            narrow: string,
            desktop: string
        }
    }
}
