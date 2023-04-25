import React from 'react';

const Cebu = (props) => {
  const {
    handleMouseMove,
    handleMunicipalityClick,
    handleMunicipalityMouseEnter,
    handleMunicipalityMouseLeave,
    setShowOptions,
    showOptions,
    getMunicipalityColor,
  } = props;

  return (
    <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2400 2400"
    onMouseMove={handleMouseMove}
    onClick={() => setShowOptions(!showOptions)}
    >
        <rect id="bg" className="map-bg" width="2400" height="2400" />
        <polygon
            id="San_Francisco"
            className="municipality-layer"
            points="1792.35 823 1792.35 894.99 1744.9 942.43 1771.08 968.61 1813.07 968.61 1886.14 918.98 1886.14 853.76 1857.3 824.91 1849.39 823 1792.35 823"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Francisco')}
        />
        <polygon
            id="Pilar"
            className="municipality-layer"
            points="2078.1 695.39 2000.12 773.38 2031.15 804.41 2085.81 749.75 2085.81 729.1 2102.1 729.1 2102.1 695.39 2078.1 695.39"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pilar')}
        />
        <polygon
            id="Santa_Fe"
            className="municipality-layer"
            points="1321.72 67 1305.9 90.07 1305.9 145.69 1313.81 153.38 1329.13 128.24 1329.13 67 1321.72 67"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Santa_Fe')}
        />
        <polygon
            id="Santa_Fe"
            className="municipality-layer"
            points="1237.85 231.26 1225.19 247.13 1238.28 261.3 1251.37 243.85 1237.85 231.26"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Santa_Fe')}
        />
        <polygon
            id="Santa_Fe"
            className="municipality-layer"
            points="1180.48 238.4 1180.48 311.91 1225.19 311.91 1225.19 282.03 1180.48 238.4"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Santa_Fe')}
        />
        <polygon
            id="Madridejos"
            className="municipality-layer"
            points="1092.97 196.21 1167.11 196.21 1145.57 128.24 1124.85 128.24 1092.97 196.21"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Madridejos')}
        />
        <polygon
            id="Bantayan"
            className="municipality-layer"
            points="1020.42 386.73 1036.64 402.96 1053.82 385.78 1039.97 371.93 1020.42 386.73"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bantayan')}
        />
        <polygon
            id="Bantayan"
            className="municipality-layer"
            points="1092.97 322.22 1084.83 330.35 1093.18 338.7 1100.67 331.2 1092.97 322.22"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bantayan')}
        />
        <polygon
            id="Bantayan"
            className="municipality-layer"
            points="1080.13 223.57 1121.03 311.91 1180.48 311.91 1180.48 238.4 1167.11 196.21 1092.97 196.21 1080.13 223.57"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bantayan')}
        />
        <polygon
            id="Tudela"
            className="municipality-layer"
            points="2000.12 832.67 1964.24 920.07 2038.84 901.53 2038.84 851.36 2000.12 832.67"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Tudela')}
        />
        <polygon
            id="Poro"
            className="municipality-layer"
            points="1943.95 805.55 2000.12 832.67 1964.24 920.07 1910.14 920.07 1910.14 834.13 1943.95 805.55"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Poro')}
        />
        <polygon
            id="Santander"
            className="municipality-layer"
            points="707.78 2332.5 707.78 2237.5 671.95 2273.33 639.5 2273.33 639.5 2332.5 707.78 2332.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Santander')}
        />
        <polygon
            id="Oslob"
            className="municipality-layer"
            points="707.78 2237.5 707.78 2221.14 759.47 2095.82 840.18 2139.45 707.78 2332.5 707.78 2237.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Oslob')}
        />
        <polygon
            id="Samboan"
            className="municipality-layer"
            points="725.76 2177.56 646.26 2177.56 639.5 2211.33 639.5 2273.33 671.95 2273.33 707.78 2237.5 707.78 2221.14 725.76 2177.56"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Samboan')}
        />
        <polygon
            id="Ginatilan"
            className="municipality-layer"
            points="662.61 2095.82 759.47 2095.82 725.76 2177.56 646.26 2177.56 662.61 2095.82"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Ginatilan')}
        />
        <polygon
            id="Malabuyoc"
            className="municipality-layer"
            points="759.47 2095.82 787.83 2007.48 686.4 1976.94 662.61 2095.82 759.47 2095.82"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Malabuyoc')}
        />
        <polygon
            id="Boljoon"
            className="municipality-layer"
            points="787.83 2007.48 877.41 2036.38 840.18 2139.45 759.47 2095.82 787.83 2007.48"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Boljoon')}
        />
        <polygon
            id=""
            className="municipality-layer"
            points=""
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('')}
        />

        <polygon
            id="Alegria"
            className="municipality-layer"
            points="787.83 2007.48 787.83 1903.1 715.85 1873.33 686.4 1900.59 686.4 1976.94 787.83 2007.48"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Alegria')}
        />
        <polygon
            id="Alcoy"
            className="municipality-layer"
            points="903.54 1964.06 787.83 1926.01 787.83 2007.48 877.41 2036.38 903.54 1964.06"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Alcoy')}
        />
        <polygon
            id=""
            className="municipality-layer"
            points=""
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('')}
        />
        <polygon
            id="Badian"
            className="municipality-layer"
            points="787.83 1903.1 840.18 1791.2 749.66 1753.9 749.66 1808.97 715.85 1808.97 715.85 1873.33 787.83 1903.1"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Badian')}
        />
        <polygon
            id="Dalaguete"
            className="municipality-layer"
            points="943.8 1852.6 840.18 1791.2 787.83 1903.1 787.83 1926.01 903.54 1964.06 943.8 1852.6"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Dalaguete')}
        />
        <polygon
            id="Argao"
            className="municipality-layer"
            points="840.18 1791.2 882.72 1655.19 1013.78 1690.52 998.33 1800.25 943.8 1852.6 840.18 1791.2"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Argao')}
        />
        <polygon
            id="Ronda"
            className="municipality-layer"
            points="756.2 1603.93 882.72 1655.19 873.14 1685.84 756.2 1662.93 756.2 1603.93"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Ronda')}
        />
        <polygon
            id="Alcantara"
            className="municipality-layer"
            points="864.66 1712.92 873.14 1685.84 756.2 1662.93 756.2 1691.18 864.66 1712.92"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Alcantara')}
        />
        <polygon
            id="Moalboal"
            className="municipality-layer"
            points="840.18 1791.2 864.66 1712.92 756.2 1691.18 742.02 1691.18 742.02 1654.1 718.03 1654.1 718.03 1732.63 749.66 1732.63 749.66 1753.9 840.18 1791.2"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Moalboal')}
        />
        <polygon
            id="Sibonga"
            className="municipality-layer"
            points="882.72 1655.19 954.71 1536.31 1029.96 1575.57 1013.78 1690.52 882.72 1655.19"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Sibonga')}
        />
        <polygon
            id="Dumanjug"
            className="municipality-layer"
            points="918.37 1596.31 819.46 1526.65 756.2 1603.93 882.72 1655.19 918.37 1596.31"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Dumanjug')}
        />
        <polygon
            id="Carcar"
            className="municipality-layer"
            points="954.71 1536.31 1016.87 1408.7 1095.44 1504.5 1029.96 1575.57 954.71 1536.31"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Carcar')}
        />
        <polygon
            id="Barili"
            className="municipality-layer"
            points="904.32 1422.98 985.75 1472.57 954.71 1536.31 918.37 1596.31 819.46 1526.65 904.32 1422.98"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Barili')}
        />
        <polygon
            id="Aloguinsan"
            className="municipality-layer"
            points="1016.87 1408.7 957.98 1357.43 904.32 1422.98 985.75 1472.57 1016.87 1408.7"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Aloguinsan')}
        />
        <polygon
            id="Pinamungahan"
            className="municipality-layer"
            points="957.98 1265.82 1076.86 1312.72 1076.86 1357.43 1016.87 1408.7 957.98 1357.43 957.98 1265.82"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pinamungahan')}
        />
        <polygon
            id="San_Fernando"
            className="municipality-layer"
            points="1076.86 1357.43 1106.86 1387.43 1106.86 1405.75 1148.13 1447.03 1095.44 1504.5 1016.87 1408.7 1076.86 1357.43"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Fernando')}
        />
        <polygon
            id="Naga"
            className="municipality-layer"
            points="1076.86 1312.72 1142.63 1312.72 1182.28 1352.36 1183.31 1376.63 1153.86 1406.08 1170.66 1422.88 1148.13 1447.03 1106.86 1405.75 1106.86 1387.43 1076.86 1357.43 1076.86 1312.72"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Naga')}
        />
        <polygon
            id="Toledo"
            className="municipality-layer"
            points="1072.95 1115.96 1168.48 1179.65 1183.31 1210.08 1183.31 1270.29 1142.63 1312.72 1076.86 1312.72 957.98 1265.82 1072.95 1115.96"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Toledo')}
        />
        <polygon
            id="Minglanilla"
            className="municipality-layer"
            points="1183.31 1270.29 1198.91 1270.29 1230.65 1326.9 1230.65 1376.63 1183.31 1376.63 1182.28 1352.36 1142.63 1312.72 1183.31 1270.29"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Minglanilla')}
        />
        <polygon
            id="Talisay"
            className="municipality-layer"
            points="1198.91 1270.29 1239.48 1270.29 1239.48 1300.39 1287.79 1348.7 1259.44 1376.63 1230.65 1376.63 1230.65 1326.9 1198.91 1270.29"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Talisay')}
        />
        <polygon
            id="Cebu_City"
            className="municipality-layer"
            points="1168.48 1179.65 1327.72 1061.86 1366.44 1100.58 1366.44 1203.65 1360.74 1239.1 1360.74 1276.83 1287.79 1348.7 1239.48 1300.39 1239.48 1270.29 1198.91 1270.29 1183.31 1270.29 1183.31 1210.08 1168.48 1179.65"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cebu_City')}
        />
        <polygon
            id="Mandaue"
            className="municipality-layer"
            points="1366.44 1203.65 1399.81 1237.57 1399.81 1276.83 1360.74 1276.83 1360.74 1239.1 1366.44 1203.65"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Mandaue')}
        />
        <polygon
            id="Consolacion"
            className="municipality-layer"
            points="1366.44 1100.58 1380.28 1100.58 1405.15 1185.11 1446.87 1226.83 1436.13 1237.57 1399.81 1237.57 1366.44 1203.65 1366.44 1100.58"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Consolacion')}
        />
        <polygon
            id="Cordova"
            className="municipality-layer"
            points="1362.28 1329.42 1403.74 1329.42 1405.15 1367.14 1362.28 1367.14 1362.28 1329.42"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cordova')}
        />
        <polygon
            id="Lapu-Lapu"
            className="municipality-layer"
            points="1511.71 1308.85 1461.95 1358.61 1473.92 1370.58 1493.56 1350.94 1503.32 1360.71 1503.32 1379.25 1511.71 1379.25 1511.71 1353.4 1534.4 1330.71 1511.71 1308.85"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Lapu-Lapu')}
        />
        <polygon
            id="Lapu-Lapu"
            className="municipality-layer"
            points="1431.33 1260.36 1362.28 1329.42 1403.74 1329.42 1405.15 1367.14 1507.08 1265.22 1492.41 1250.55 1458.05 1284.9 1431.33 1260.36"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Lapu-Lapu')}
        />
        <polygon
            id="Compostela"
            className="municipality-layer"
            points="1327.72 1061.86 1338.62 1018.23 1472.44 1103.53 1456.79 1143.35 1443 1143.35 1400.08 1100.58 1380.28 1100.58 1366.44 1100.58 1327.72 1061.86"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Compostela')}
        />
        <polygon
            id="Danao"
            className="municipality-layer"
            points="1338.62 1018.23 1357.17 961.52 1446.87 989.88 1483.68 989.88 1483.68 1074.95 1472.44 1103.53 1338.62 1018.23"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Danao')}
        />
        <polygon
            id="Carmen"
            className="municipality-layer"
            points="1357.17 961.52 1374.62 904.8 1483.68 945.7 1483.68 989.88 1446.87 989.88 1357.17 961.52"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Carmen')}
        />
        <polygon
            id="Catmon"
            className="municipality-layer"
            points="1374.62 904.8 1374.62 846.23 1419.77 801.08 1483.68 801.08 1483.68 945.7 1374.62 904.8"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Catmon')}
        />
        <polygon
            id="Sogod"
            className="municipality-layer"
            points="1374.62 846.23 1374.62 718.3 1483.68 755.27 1483.68 801.08 1419.77 801.08 1374.62 846.23"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Sogod')}
        />
        <polygon
            id="Borbon"
            className="municipality-layer"
            points="1374.62 718.3 1401.88 603.78 1483.68 603.78 1483.68 755.27 1374.62 718.3"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Borbon')}
        />
        <polygon
            id="Tabogon"
            className="municipality-layer"
            points="1401.88 603.78 1401.88 510.52 1420.42 510.52 1444.42 488.17 1483.68 488.17 1483.68 603.78 1401.88 603.78"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Tabogon')}
        />
        <polygon
            id="Bogo"
            className="municipality-layer"
            points="1401.88 510.52 1390.76 372.33 1405.15 386.73 1434.6 385.64 1483.68 409.64 1483.68 488.17 1444.42 488.17 1420.42 510.52 1401.88 510.52"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bogo')}
        />
        <rect
            id="Medellin"
            className="municipality-layer"
            x="1344.84" y="254.06" width="15.9" height="28.08"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Medellin')}
        />
        <polygon
            id="Medellin"
            className="municipality-layer"
            points="1399.7 238.4 1483.68 316.82 1434.6 385.64 1405.15 386.73 1377.89 315.84 1377.89 238.4 1399.7 238.4"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Medellin')}
        />
        <polygon
            id="Daanbantayan"
            className="municipality-layer"
            points="1570.94 87.89 1578.57 103.16 1584.35 87.89 1577.65 71.42 1570.94 87.89"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Daanbantayan')}
        />
        <polygon
            id="Daanbantayan"
            className="municipality-layer"
            points="1465.14 145.69 1520.77 160.96 1483.68 316.82 1399.7 238.4 1465.14 145.69"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Daanbantayan')}
        />
        <polygon
            id="San_Remigio"
            className="municipality-layer"
            points="1401.88 603.78 1360.74 603.78 1321.72 586.67 1360.74 515.11 1360.74 478.79 1335.35 463.08 1335.35 430.36 1360.74 413.02 1360.74 360.01 1370.8 352.38 1390.76 372.33 1401.88 510.52 1401.88 603.78"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Remigio')}
        />
        <polygon
            id="Tabuelan"
            className="municipality-layer"
            points="1374.62 718.3 1269.41 682.6 1321.72 586.67 1360.74 603.78 1401.88 603.78 1374.62 718.3"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Tabuelan')}
        />
        <polygon
            id="Tuburan"
            className="municipality-layer"
            points="1357.17 961.52 1299.03 945.7 1218.65 945.7 1145.32 910.16 1269.41 682.6 1374.62 718.3 1374.62 846.23 1374.62 904.8 1357.17 961.52"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Tuburan')}
        />
        <polygon
            id="Asturias"
            className="municipality-layer"
            points="1335.05 1032.53 1310.81 1032.53 1296.09 1022.6 1226.39 1022.6 1198.91 1007.22 1177.31 1007.22 1103.04 1046.59 1103.04 987.7 1145.32 910.16 1218.65 945.7 1299.03 945.7 1357.17 961.52 1338.62 1018.23 1335.05 1032.53"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Asturias')}
        />
        <polygon
            id="Balamban"
            className="municipality-layer"
            points="1168.48 1179.65 1072.95 1115.96 1116.13 1059.68 1103.04 1046.59 1177.31 1007.22 1198.91 1007.22 1226.39 1022.6 1296.09 1022.6 1310.81 1032.53 1335.05 1032.53 1327.72 1061.86 1168.48 1179.65"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Balamban')}
        />
        <polygon
            id="Liloan"
            className="municipality-layer"
            points="1456.79 1143.35 1443 1143.35 1400.08 1100.58 1380.28 1100.58 1405.15 1185.11 1446.87 1226.83 1473.6 1200.1 1445.51 1172.02 1456.79 1143.35"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Liloan')}
        />
    </svg>
  );
}

export default Cebu;
