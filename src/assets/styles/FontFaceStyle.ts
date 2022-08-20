import { createGlobalStyle } from "styled-components";
import MuktaLightTTF from '../fonts/Heebo-Light.ttf'
import MuktaRegularTTF from '../fonts/Heebo-Regular.ttf'
import SingleDayRegular from '../fonts/SingleDay-Regular.ttf'


export const FontFaceStyle = createGlobalStyle`
     @font-face {
         font-family: Mukta-Light ;
         src: url(${MuktaLightTTF}) format('truetype');
     }

     @font-face {
         font-family: Mukta-Regular ;
         src: url(${MuktaRegularTTF}) format('truetype');
     }

     @font-face {
         font-family: SingleDay-Regular ;
         src: url(${SingleDayRegular}) format('truetype');
     }
`