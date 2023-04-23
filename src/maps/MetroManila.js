import React from 'react';

function MetroManila(props) {
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
            id="Manila"
            className="municipality-layer"
            points="1452 1107 1501.5 1025.3 1303 872 1320 821 1269 801 1254 826 1149 832 1067 832 1078 857 1149 857 1150 998 1110 930 1092 939 1124 994 1068 1015 1080 1038 1149 1031 1149 1048 1116 1073 1141 1103 1161 1069 1270 1141 1301 1212 1364.6 1191.25 1452 1107"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Manila')}
        />
        <polygon
            id="Muntinlupa"
            className="municipality-layer"
            points="1413 2154 1431.2 2154 1431.2 2066.6 1501.5 1872.2 1591 1824 1613 1758 1613 1694.9 1678.05 1704.27 1646.5 1801.5 1648.5 2120.5 1677.5 2165.5 1613.5 2234.9 1613.5 2192.5 1413.5 2329.5 1413 2154"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Muntinlupa')}
        />
        <polygon
            id="Las_Piñas"
            className="municipality-layer"
            points="1222 1626 1229 1632 1263.8 1593 1264 1568 1222 1626"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Las_Piñas')}
        />
        <polygon
            id="Las_Piñas"
            className="municipality-layer"
            points="1501.5 1872.2 1388 1765 1388 1703 1280 1593 1200 1675.1 1200 1802 1413 2154 1431.2 2154 1431.2 2066.6 1501.5 1872.2"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Las_Piñas')}
        />
        <polygon
            id="Parañaque"
            className="municipality-layer"
            points="1280 1522 1280 1556.3 1292.6 1556.3 1310 1524 1280 1522"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Parañaque')}
        />
        <polygon
            id="Parañaque"
            className="municipality-layer"
            points="1280 1593 1320 1521 1241 1498 1266 1441 1264.39 1354.69 1369 1344 1369 1479.8 1421 1460 1429 1479 1375 1498 1383 1531 1555 1488 1562 1506 1612 1505 1613 1694.9 1613 1758 1591 1824 1501.5 1872.2 1388 1765 1388 1703 1280 1593"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Parañaque')}
        />
        <polygon
            id="Pasay"
            className="municipality-layer"
            points="1301 1212 1364.6 1191.25 1383 1253 1419 1269 1419 1314.2 1443.8 1314.2 1443.8 1364.6 1491.5 1364.6 1555 1488 1383 1531 1375 1498 1429 1479 1421 1460 1369 1479.8 1369 1344 1264.39 1354.69 1262 1227 1301 1212"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pasay')}
        />
        <polygon
            id="Taguig"
            className="municipality-layer"
            points="1491.5 1364.6 1510.4 1364.6 1555 1439.3 1585 1453 1668.8 1408.8 1700.3 1344 1722.8 1344 1798 1276 1798 1304.3 1890 1302 1948.7 1388 1942 1407 1882 1388 1843 1496 1756 1464 1678.05 1704.27 1613 1694.9 1612 1505 1562 1506 1555 1488 1491.5 1364.6"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Taguig')}
        />
        <polygon
            id="Pateros"
            className="municipality-layer"
            points="1722.8 1344 1688 1306 1716.5 1276 1715 1249 1749.8 1249 1798 1276 1722.8 1344"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pateros')}
        />
        <polygon
            id="Makati"
            className="municipality-layer"
            points="1364.6 1191.25 1452 1107 1550 1173 1640 1171 1713 1210 1715 1249 1716.5 1276 1688 1306 1722.8 1344 1700.3 1344 1668.8 1408.8 1585 1453 1555 1439.3 1510.4 1364.6 1491.5 1364.6 1443.8 1364.6 1443.8 1314.2 1419 1314.2 1419 1269 1383 1253 1364.6 1191.25"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Makati')}
        />
        <polygon
            id="Manila"
            className="municipality-layer"
            points="1447 1158 1442 1175 1458 1180 1463 1163 1447 1158"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Manila')}
        />
        <polygon
            id="San_Juan"
            className="municipality-layer"
            points="1501.5 1025.3 1543.7 1052.6 1595 1038.95 1632 1002 1679 1002 1679 974.6 1641.8 974.6 1626 958 1555 958 1521 932.6 1491.5 932.6 1452.97 987.82 1501.5 1025.3"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Juan')}
        />
        <polygon
            id="Mandaluyong"
            className="municipality-layer"
            points="1640 1171 1669 1138 1669 1052.6 1679 1002 1632 1002 1595 1038.95 1543.7 1052.6 1501.5 1025.3 1452 1107 1550 1173 1640 1171"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Mandaluyong')}
        />
        <polygon
            id="Pasig"
            className="municipality-layer"
            points="1669 1052.6 1802 1052.6 1802 989.6 1815 990 1836 1009 1844 995 1779 926 1809 895 1920 893 1944 933 1945 1105 1889 1156 1890 1302 1798 1304.3 1798 1276 1749.8 1249 1715 1249 1713 1210 1640 1171 1669 1138 1669 1052.6"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pasig')}
        />
        <polygon
            id="Marikina"
            className="municipality-layer"
            points="1779 926 1779 824 1837 762 1821 744 1821 711 1872 667 1888 679 1899.8 667 1888 651 1925 605 2031 639 2075 708 2048.6 814 1920 814 1920 893 1809 895 1779 926"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Marikina')}
        />
        <polygon
            id="Caloocan"
            className="municipality-layer"
            points="1935 180 1888 216 1857.2 216 1857 246 1816 276 1645 284 1491 405 1483 456 1411 437 1411 375.8 1440 376 1440 359 1367 322 1378 307 1426 329 1455 327 1454 282 1393.55 258.78 1403 237 1600 183 1608 83 1707 53 1770 136 1935 180"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Caloocan')}
        />
        <polygon
            id="Caloocan"
            className="municipality-layer"
            points="1371.41 579.43 1371.41 637.4 1284.25 684.8 1203.8 684.8 1189 700 1189 729.2 1213.4 765.5 1213 784 1200 784 1200 829.09 1254 826 1269 801 1320 821 1326 808 1314.8 801 1367 707.6 1367 665.6 1501.5 542.6 1449.2 542.6 1449.2 581 1432 581 1398 556 1371.41 579.43"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Caloocan')}
        />
        <polygon
            id="Valenzuela"
            className="municipality-layer"
            points="1483 456 1501.5 542.6 1449.2 542.6 1449.2 581 1432 581 1398 556 1297 645 1182 582 1169.6 605 1162.4 605 1153 542 1132 438 1026 351 1104 286 1187 332.3 1187 411 1331 411.5 1331 301 1380 290 1393.55 258.78 1454 282 1455 327 1426 329 1378 307 1367 322 1440 359 1440 376 1411 375.8 1411 437 1483 456"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Valenzuela')}
        />
        <polygon
            id="Malabon"
            className="municipality-layer"
            points="976.16 472.07 1026 533.6 1026 568.4 1092.8 685.84 1092.8 708.2 1119 739 1131 724 1149.2 739 1149.2 768.2 1177 735 1156 712 1156 700 1189 700 1203.8 684.8 1284.25 684.8 1371.41 637.4 1371.41 579.43 1297 645 1182 582 1169.6 605 1162.4 605 1153 542 1091 577 997 457 976.16 472.07"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Malabon')}
        />
        <polygon
            id="Navotas"
            className="municipality-layer"
            points="976.16 472.07 928 506.9 1099 738 1083 768 1149 832 1200 829.09 1200 784 1213 784 1213.4 765.5 1189 729.2 1189 700 1156 700 1156 712 1177 735 1149.2 768.2 1149.2 739 1131 724 1119 739 1092.8 708.2 1092.8 685.84 1026 568.4 1026 533.6 976.16 472.07"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Navotas')}
        />
        <polygon
            id="Quezon_City"
            className="municipality-layer"
            points="1303 872 1320 821 1326 808 1314.8 801 1367 707.6 1367 665.6 1501.5 542.6 1483 456 1491 405 1645 284 1816 276 1857 246 1857.2 216 1888 216 1935 180 1971 156 2002.7 204 1981 204 1982 274 2064 274 1925 605 1888 651 1899.8 667 1888 679 1872 667 1821 711 1821 744 1837 762 1779 824 1779 926 1844 995 1836 1009 1815 990 1802 989.6 1802 1052.6 1669 1052.6 1679 1002 1679 974.6 1641.8 974.6 1626 958 1555 958 1521 932.6 1491.5 932.6 1452.97 987.82 1303 872"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Quezon_City')}
        />
    </svg>
  );
}

export default MetroManila;
