import { DefaultTheme } from "styled-components";


// const colors = {
//     primaryColor: "#FFD369",
//     lightColor: "#EEEEEE",
//     darkColor: "222831",
//     secondaryColor: "393E46"
// };


export const theme: DefaultTheme = {
    boxShadows: {
        bs1: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        bs2: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
    },
    borders: {
        rounded: '50%',
        capsule: '500px',
        square: '0.6rem'
    },
    colors: {
        brandDarkColor: "#132A13",
        brandLightColor: "#c1e153",
        lightColor: "#fff",
        darkColor: "#222831",
        mutedColor: '#c8c8c8'
    },
    breakpoints: {
        mobile: '600px',
        tablet: '800px',
        bigTablet : '1280px',
        narrow: '1480px',
        desktop: '1600px'
    }
}