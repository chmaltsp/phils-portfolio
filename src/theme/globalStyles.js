import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default injectGlobal`
 ${styledNormalize}

 body {
   font-family: 'Halvetica Neue', Halvetica, sans-serif;
   font-size: 16px;
   color: #FFF;
   cursor: none;
 }


`;
