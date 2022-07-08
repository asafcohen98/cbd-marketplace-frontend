import { createGlobalStyle } from "styled-components";
import MuktaLightTTF from '../fonts/Mukta-Light.ttf'
import MuktaRegularTTF from '../fonts/Mukta-Regular.ttf'


export const FontFaceStyle = createGlobalStyle`
     @font-face {
         font-family: Mukta-Light ;
         src: url(${MuktaLightTTF}) format('truetype');
     }

     @font-face {
         font-family: Mukta-Regular ;
         src: url(${MuktaRegularTTF}) format('truetype');
     }
`