import React from 'react';

const Etivac = (props) => {
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
            id="Ternate"
            data-name="San Pedro"
            className="municipality-layer"
            points="353.81 1302.91 494.55 1422.98 744.81 1209.41 814.25 1209.41 880.29 1135.08 822.44 1074.82 692.13 1185.89 598.04 1073.93 353.81 1302.91"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Ternate')}
        />
        <polygon
            id="Maragondon"
            className="municipality-layer"
            points="284.18 1197.18 283.81 1247.98 319.75 1247.98 319.75 1197.18 284.18 1197.18"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Maragondon')}
        />
        <polygon
            id="Maragondon"
            className="municipality-layer"
            points="167.14 1349.59 206.19 1390.42 224.91 1370.01 196.03 1331.15 167.14 1349.59"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Maragondon')}
        />
        <polygon
            id="Maragondon"
            className="municipality-layer"
            points="1297.08 1717.46 1191.71 1406.98 880.29 1135.08 814.25 1209.41 744.81 1209.41 494.55 1422.98 353.81 1302.91 357.19 1439.91 206.19 1441.32 394.35 1539.17 487.5 1460.14 654.97 1551.4 599.46 1672.77 678.77 1672.77 702.34 1708.89 1024.24 1483.19 1022.55 1390.42 1259.45 1739.29 1297.08 1717.46"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Maragondon')}
        />
        <polygon
            id="Alfonso"
            className="municipality-layer"
            points="1297.08 1717.46 1413.75 1829.42 1529.97 2092.77 1334.25 2163.88 1203 1987.95 1144.2 1987.95 1144.2 1849.36 1259.45 1791.78 1259.45 1739.29 1297.08 1717.46"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Alfonso')}
        />
        <polygon
            id="Magallanes"
            className="municipality-layer"
            points="1024.24 1483.19 1024.24 1674.93 1144.2 1849.36 1144.2 1987.95 978.52 1849.64 794.21 1849.64 702.34 1708.89 1024.24 1483.19"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Magallanes')}
        />
        <polygon
            id="Naic"
            className="municipality-layer"
            points="1191.71 1406.98 1374.8 1360.79 1203 1173.66 1203 1029.71 1060.8 871.68 822.44 1074.82 880.29 1135.08 1191.71 1406.98"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Naic')}
        />
        <polygon
            id="Tagaytay"
            className="municipality-layer"
            points="1474.21 1966.43 1628.29 1908.33 2086.44 1735.57 2149.95 1867.52 1529.97 2092.77 1474.21 1966.43"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Tagaytay')}
        />
        <polygon
            id="Mendez"
            className="municipality-layer"
            points="1413.75 1829.42 1572.75 1766.38 1628.29 1908.33 1474.21 1966.43 1413.75 1829.42"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Mendez')}
        />
        <polygon
            id="Indang"
            className="municipality-layer"
            points="1682.45 1887.91 1491.65 1406.98 1413.75 1406.98 1374.8 1360.79 1191.71 1406.98 1297.08 1717.46 1413.75 1829.42 1572.75 1766.38 1628.29 1908.33 1682.45 1887.91"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Indang')}
        />
        <polygon
            id="Amadeo"
            className="municipality-layer"
            points="1785.75 1848.96 1661.19 1398.52 1547.53 1360.79 1491.65 1406.98 1682.45 1887.91 1785.75 1848.96"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Amadeo')}
        />
        <polygon
            id="Trece_Martires"
            className="municipality-layer"
            points="1278.83 1256.26 1314.02 1229.17 1278.83 1183.82 1278.83 1117.77 1337.08 1073.93 1508.58 1073.93 1547.53 1360.79 1491.65 1406.98 1413.75 1406.98 1374.8 1360.79 1278.83 1256.26"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Trece_Martires')}
        />
        <polygon
            id="Tanza"
            className="municipality-layer"
            points="1326.29 645.41 1437.08 773.99 1437.08 1073.93 1337.08 1073.93 1278.83 1117.77 1278.83 1183.82 1314.02 1229.17 1278.83 1256.26 1203 1173.66 1203 1029.71 1060.8 871.68 1326.29 645.41"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Tanza')}
        />
        <polygon
            id="Rosario"
            className="municipality-layer"
            points="1358.83 683.17 1445.73 611.04 1437.27 550.83 1326.25 645.85 1358.83 683.17"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Rosario')}
        />
        <polygon
            id="Cavite_City"
            className="municipality-layer"
            points="92.82 695.71 92.82 802.97 189.35 802.97 206.19 749.34 357 749.34 357 714.72 299.42 695.71 92.82 695.71"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cavite_City')}
        />
        <polygon
            id="Cavite_City"
            className="municipality-layer"
            points="292.27 814.26 367.54 788.86 367.54 841.73 292.27 841.73 292.27 814.26"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cavite_City')}
        />
        <polygon
            id="Cavite_City"
            className="municipality-layer"
            points="1506.42 442.16 1447.93 442.16 1547.53 230.47 1674.83 230.47 1674.55 333.96 1562.87 333.96 1506.42 442.16"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cavite_City')}
        />
        <polygon
            id="Noveleta"
            className="municipality-layer"
            points="1445.73 611.04 1501.81 611.04 1529.97 584.32 1502.18 525.42 1506.42 442.16 1447.93 442.16 1414.64 512.92 1437.27 550.83 1445.73 611.04"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Noveleta')}
        />
        <polygon
            id="Kawit"
            className="municipality-layer"
            points="1529.97 584.32 1620.73 481.2 1674.83 481.2 1679.53 421.46 1506.42 442.16 1502.18 525.42 1529.97 584.32"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Kawit')}
        />
        <polygon
            id="Imus"
            className="municipality-layer"
            points="1674.83 481.2 1884.16 850.01 1703.34 850.01 1638.7 885.76 1501.81 611.04 1529.97 584.32 1620.73 481.2 1674.83 481.2"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Imus')}
        />
        <polygon
            id="Bacoor"
            className="municipality-layer"
            points="1884.16 850.01 1999.82 918.71 2035.17 757.34 1845.12 343.37 1679.53 421.46 1674.83 481.2 1884.16 850.01"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bacoor')}
        />
        <polygon
            id="Dasmariñas"
            className="municipality-layer"
            points="1963.66 1083.81 1947.2 1281.85 1774.46 1281.85 1720.27 1247.98 1667.77 1090.86 1638.7 885.76 1703.34 850.01 1884.16 850.01 1999.82 918.71 1963.66 1083.81"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Dasmariñas')}
        />
        <polygon
            id="General_Mariano_Alvarez"
            className="municipality-layer"
            points="1954.02 1199.77 1979.19 1209.41 2061.98 1092.74 2179.21 1073.93 2231.68 1018.14 2045.52 999.13 1999.41 1102.62 1963.66 1083.81 1954.02 1199.77"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('General_Mariano_Alvarez')}
        />
        <polygon
            id="Carmona"
            className="municipality-layer"
            points="1979.19 1209.41 1979.19 1240.46 2166.88 1263.51 2312.71 1026.42 2231.68 1018.14 2179.21 1073.93 2061.98 1092.74 1979.19 1209.41"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Carmona')}
        />
        <polygon
            id="Silang"
            className="municipality-layer"
            points="1720.27 1247.98 1638.7 1341.31 1661.19 1398.52 1785.75 1848.96 2086.44 1735.57 2065.27 1691.59 2191.34 1479.9 2166.88 1263.51 1979.19 1240.46 1979.19 1209.41 1954.02 1199.77 1947.2 1281.85 1774.46 1281.85 1720.27 1247.98"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Silang')}
        />
        <polygon
            id="General_Trias"
            className="municipality-layer"
            points="1501.81 611.04 1445.73 611.04 1358.83 683.17 1437.08 773.99 1437.08 1073.93 1508.58 1073.93 1547.53 1360.79 1661.19 1398.52 1638.7 1341.31 1720.27 1247.98 1667.77 1090.86 1638.7 885.76 1501.81 611.04"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('General_Trias')}
        />
        <polygon
            id="General_Emilio_Aguinaldo"
            className="municipality-layer"
            points="1259.45 1791.78 1259.45 1739.29 1022.55 1390.42 1024.24 1674.93 1144.2 1849.36 1259.45 1791.78"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('General_Emilio_Aguinaldo')}
        />
    </svg>
  );
}

export default Etivac;
