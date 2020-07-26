import React from "react";

const VueIcon: React.StatelessComponent<{ width: String, height: String }> = ({ children, width, height }) => (
  <svg
    version="1" 
    xmlns="http://www.w3.org/2000/svg"
    width={width || '100px'}
    height={height || '100px'}
    viewBox="0 0 128 128">
    <path
      d="m32.191 97.953c-0.36865 0-0.73578 0.1056-1.0547 0.31641-0.31891 0.2108-0.61133 0.57433-0.61133 1.041 0 0.06137-0.03614 0.1992 0.08398 0.43945l-0.03125-0.07617 6.4102 20.797c0.11475 0.39015 0.39019 0.68831 0.69922 0.85938s0.64908 0.23633 0.97852 0.23633c0.70045 0 1.4696-0.33428 1.7051-1.0879v-0.002l6.4043-20.875v-0.07617c0 0.1053 0.03125 0.04444 0.03125-0.18359 0-0.47463-0.30314-0.82361-0.62695-1.043-0.32382-0.21936-0.70504-0.3457-1.1016-0.3457-0.48903 0-1.0516 0.29744-1.2402 0.86328l-0.0039 0.0059-5.1699 17.254-5.1895-17.223c-0.07694-0.30774-0.28421-0.56558-0.52539-0.70898s-0.50427-0.19141-0.75782-0.19141zm51.055 1.0723c-1.0204 0-1.8809 0.7817-1.8809 1.7598 0 0.97806 0.84711 1.7871 1.8809 1.7871 1.0142 0 1.8203-0.8242 1.8203-1.7871 0-0.96291-0.82002-1.7598-1.8203-1.7598zm-15.029 6.6582c-3.4884 0-6.3613 2.7915-6.3613 6.1465v3.4375c0 1.8791 0.74876 3.4896 2.0195 4.6016 1.2708 1.1119 3.0446 1.7266 5.0781 1.7266 1.502 0 2.7262-0.33628 3.6016-0.79297 0.43766-0.22834 0.78933-0.48448 1.0488-0.76367 0.2595-0.27918 0.45117-0.58478 0.45117-0.96679-0.000001-0.35077-0.13509-0.65471-0.35352-0.92774-0.21842-0.27303-0.56248-0.52344-1.0059-0.52344-0.32027 0-0.56614 0.13479-0.7793 0.26563-0.21315 0.13083-0.41335 0.27538-0.6543 0.41406-0.4819 0.27736-1.1204 0.54688-2.248 0.54688-1.2554 0-2.3023-0.35802-3.0234-0.95899-0.72117-0.60097-1.1406-1.4353-1.1406-2.5293v-0.63672h6.4355c0.6864 0 1.4494 0.001 2.1094-0.41993 0.65995-0.42135 1.0605-1.2588 1.0605-2.5332 0-3.5292-2.9447-6.0859-6.2383-6.0859zm24.186 0c-1.8542 0-3.2178 0.59997-4.0938 1.502-0.87597 0.90198-1.2539 2.0754-1.2539 3.1719 0 1.3974 0.56454 2.3989 1.373 3.041 0.80851 0.64211 1.8144 0.96522 2.7715 1.2539 0.95712 0.28869 1.8732 0.5449 2.4883 0.92383 0.6151 0.37894 0.94531 0.78884 0.94531 1.6543 0 0.46456-0.1396 0.83433-0.51758 1.1367-0.37798 0.30238-1.049 0.54101-2.1426 0.54101-1.2937 0-2.0167-0.31909-2.543-0.64453-0.26312-0.16272-0.47512-0.33158-0.69336-0.48242s-0.46571-0.31445-0.8125-0.31445c-0.41739 0-0.72514 0.25714-0.91211 0.52343-0.18697 0.2663-0.29492 0.56884-0.29492 0.89649 0 0.40512 0.19716 0.76131 0.47656 1.0703 0.27941 0.30901 0.65746 0.58398 1.1211 0.82422 0.92726 0.48049 2.2041 0.81445 3.7207 0.81445 1.6465 0 3.0006-0.4019 3.959-1.1816 0.95834-0.77974 1.4805-1.9389 1.4805-3.2754 0-1.5096-0.54876-2.5951-1.3574-3.3125-0.80867-0.71736-1.8296-1.0872-2.8008-1.3848-0.97115-0.29761-1.9057-0.52926-2.5312-0.85547-0.62552-0.32622-0.91992-0.62713-0.91992-1.3203 0-0.37496 0.15-0.84657 0.53125-1.2187 0.38125-0.37218 1.0032-0.67383 2.0371-0.67383 0.82606 0 1.4401 0.1897 1.9316 0.39062 0.24577 0.10046 0.45939 0.20542 0.66211 0.29297 0.20272 0.0875 0.38964 0.17383 0.6582 0.17383 0.48505 0 0.81748-0.31997 1.0156-0.61719 0.19815-0.29722 0.3125-0.59036 0.3125-0.92578 0-0.42021-0.26147-0.71802-0.55078-0.94141s-0.65198-0.40072-1.0723-0.55468c-0.84057-0.30794-1.9126-0.50782-2.9883-0.50782zm-43.857 0.18555c-0.81105 0-1.5117 0.50854-1.5117 1.2656v8.1934c0 3.3238 2.8258 6.2676 6.3301 6.2676 3.4452 0 6.3301-2.9092 6.3301-6.2676v-8.2226c0-0.37893-0.20849-0.70759-0.48242-0.91602-0.27393-0.20842-0.622-0.32031-1-0.32031s-0.72801 0.11043-1.0078 0.31445c-0.27981 0.20403-0.50391 0.53013-0.50391 0.92188v8.2226c0 1.7423-1.5183 3.4277-3.3359 3.4277-1.8478 0-3.3359-1.7154-3.3359-3.4277v-8.1934c0-0.39244-0.21435-0.695-0.48047-0.91016s-0.6137-0.35547-1.002-0.35547zm34.701 0c-0.37921 0-0.73049 0.0976-1.0098 0.30859-0.27928 0.21101-0.4707 0.55819-0.4707 0.92774v15.096c0 1.1328-0.07939 2.083-0.32812 2.6582-0.24873 0.57519-0.54222 0.83007-1.3809 0.83007-0.74093 0-1.3594 0.64736-1.3594 1.4219 0 0.32192 0.10384 0.67528 0.36719 0.95117s0.67217 0.4375 1.1445 0.4375c1.5943 0 2.8141-0.70695 3.541-1.8555 0.72696-1.1485 1.0098-2.6849 1.0098-4.4434v-15.096c0-0.39336-0.22472-0.7356-0.50977-0.9375-0.28504-0.20191-0.63516-0.29883-1.0039-0.29883zm-15.061 2.4727c1.9913 0 3.3359 1.6671 3.3359 3.3652 0 0.18502-0.01992 0.30619-0.03906 0.36133-0.01914 0.0551-0.01733 0.048-0.04492 0.0664-0.05518 0.0368-0.36251 0.11523-0.95117 0.11523h-5.6367v-0.66602c0-1.7772 1.4845-3.2422 3.3359-3.2422zm9.5117 9.3711c-1.0877 0-1.9121 0.90005-1.9121 1.9414 0 1.0003 0.81206 1.9121 1.9121 1.9121 1.042 0 1.8809-0.88405 1.8809-1.9121 0-1.067-0.8528-1.9414-1.8809-1.9414z"
      fill="#35495e"
      styles="block-progression:tb;color-rendering:auto;image-rendering:auto;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-transform:none;white-space:normal">
    </path>
    
    <path 
      fill="none"
      d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1574-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0196 63.211 107.89zm-25.149-0.008-22.745 0.16758-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087 15.036 24.958 14.983-24.956 22.982-0.0061-37.85 65.655">
    </path>
    
    <path
      fill="#35495e"
      d="m25.997 9.3929 23.002 0.0087 15.036 24.958 14.983-24.956 22.982-0.0061-37.85 65.655z">
    </path>
    
    <path
      fill="#41b883"
      d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z">
    </path>
  </svg>
);

export default VueIcon;