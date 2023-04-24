import React from 'react';

function Bulacan(props) {
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
            id="Hagonoy"
            className="municipality-layer"
            points="266.5 1592.5 294.95 1592.5 344 1565 452.9 1565 452.9 1623.35 402 1653 402 1735 425 1758 428.09 1923.61 113 1889 266.5 1592.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Hagonoy')}
        />
        <polygon
            id="Calumpit"
            className="municipality-layer"
            points="452.9 1582.85 479.9 1582.85 542.5 1528.5 542.5 1453.25 517.7 1373.5 336.5 1373.5 266.5 1592.5 294.95 1592.5 344 1565 452.9 1565 452.9 1582.85"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Calumpit')}
        />
        <polygon
            id="Paombong"
            className="municipality-layer"
            points="542.5 1936.17 556.5 1756.5 535.25 1756.5 535.25 1686.8 504.5 1663.5 504.5 1612.55 479.9 1582.85 452.9 1582.85 452.9 1623.35 402 1653 402 1735 425 1758 428.09 1923.61 542.5 1936.17"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Paombong')}
        />
        <polygon
            id="Malolos"
            className="municipality-layer"
            points="542.5 1528.5 569.5 1549.5 596 1549.5 629.75 1528.5 685.1 1592.5 709.4 1592.5 751.5 1750.5 689.5 1842.5 647 1811 618.95 1842.5 639.5 1858.5 632 1946 542.5 1936.17 556.5 1756.5 535.25 1756.5 535.25 1686.8 504.5 1663.5 504.5 1612.55 479.9 1582.85 542.5 1528.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Malolos')}
        />
        <polygon
            id="Bulakan"
            className="municipality-layer"
            points="859 1991 897.05 1946 871.5 1871.5 832.5 1825.5 832.5 1782.65 806.6 1782.65 775.5 1751.5 751.5 1750.5 689.5 1842.5 647 1811 618.95 1842.5 639.5 1858.5 632 1946 840 2074 859 1991"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bulakan')}
        />
        <polygon
            id="Obando"
            className="municipality-layer"
            points="962 2012 962 1945.78 897.05 1946 859 1991 880 1997 880 2062.1 997 2166 1015 2147 962 2012"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Obando')}
        />
        <polygon
            id="Bocaue"
            className="municipality-layer"
            points="871.5 1871.5 947.5 1704.5 1015 1669.25 1030.5 1696.5 1002.35 1759.51 1068.5 1863.5 937 1945.78 897.05 1946 871.5 1871.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bocaue')}
        />
        <polygon
            id="Balagtas"
            className="municipality-layer"
            points="832.5 1782.65 866.5 1599.5 910.55 1599.5 947.5 1704.5 871.5 1871.5 832.5 1825.5 832.5 1782.65"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Balagtas')}
        />
        <polygon
            id="Guiguinto"
            className="municipality-layer"
            points="709.4 1592.5 866.5 1599.5 832.5 1782.65 806.6 1782.65 775.5 1751.5 751.5 1750.5 709.4 1592.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Guiguinto')}
        />
        <polygon
            id="Pulilan"
            className="municipality-layer"
            points="542.5 1483 733.7 1483 733.5 1512.5 787.95 1512.5 787.95 1464.05 840.5 1464.5 751.5 1403.3 721.5 1403.5 689.5 1296.5 612.5 1295.5 586.5 1373.5 517.7 1373.5 542.5 1453.25 542.5 1483"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pulilan')}
        />
        <polygon
            id="Plaridel"
            className="municipality-layer"
            points="840.5 1464.5 840.5 1404 879.5 1404 879.5 1512.5 866.5 1543.7 910.55 1599.5 866.5 1599.5 709.4 1592.5 685.1 1592.5 629.75 1528.5 596 1549.5 569.5 1549.5 542.5 1528.5 542.5 1483 733.7 1483 733.5 1512.5 787.95 1512.5 787.95 1464.05 840.5 1464.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Plaridel')}
        />
        <polygon
            id="Baliwag"
            className="municipality-layer"
            points="840.5 1404 897.05 1261.55 897.05 1129.25 868.77 1129.25 844.5 1088.5 793.5 1095.5 793.5 1223.5 710.5 1226.5 689.5 1296.5 721.5 1403.5 751.5 1403.3 840.5 1464.5 840.5 1404"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Baliwag')}
        />
        <polygon
            id="Bustos"
            className="municipality-layer"
            points="897.05 1261.55 1045.5 1323.5 1045.5 1418.15 964.55 1483 915.95 1483 879.5 1512.5 879.5 1404 840.5 1404 897.05 1261.55"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bustos')}
        />
        <polygon
            id="San_Rafael"
            className="municipality-layer"
            points="1045.5 1323.5 1272.35 1276.5 1292.5 1223.5 1366.64 1200 1371 1147 1126.5 1131.5 1045.5 1026.65 952.5 1018.5 844.5 1088.5 868.77 1129.25 897.05 1129.25 897.05 1261.55 1045.5 1323.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Rafael')}
        />
        <polygon
            id="Angat"
            className="municipality-layer"
            points="1045.5 1418.15 1087.5 1426.5 1117.5 1472.5 1182.5 1434.35 1200 1492.4 1252.1 1492.4 1399 1349 1359 1293 1366.64 1200 1292.5 1223.5 1272.35 1276.5 1045.5 1323.5 1045.5 1418.15"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Angat')}
        />
        <polygon
            id="Pandi"
            className="municipality-layer"
            points="927.71 1648.26 1015 1648.26 1117.5 1613.5 1165.33 1512.5 1200 1492.4 1182.5 1434.35 1117.5 1472.5 1087.5 1426.5 1045.5 1418.15 964.55 1483 915.95 1483 879.5 1512.5 866.5 1543.7 910.55 1599.5 927.71 1648.26"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pandi')}
        />
        <polygon
            id="Santa_Maria"
            className="municipality-layer"
            points="1252.1 1492.4 1276.4 1648.26 1227.5 1800.5 1204.85 1800.5 1172.5 1835.5 1099.55 1835.5 1068.5 1863.5 1002.35 1759.51 1030.5 1696.5 1015 1669.25 947.5 1704.5 927.71 1648.26 1015 1648.26 1117.5 1613.5 1165.33 1512.5 1200 1492.4 1252.1 1492.4"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Santa_Maria')}
        />
        <polygon
            id="San_Jose_Del_Monte"
            className="municipality-layer"
            points="1276.4 1648.26 1295.3 1648.26 1337.15 1599.5 1389.8 1599.5 1427.6 1648.26 1482.95 1648.26 1500.5 1623.88 1532.9 1623.88 1700.5 1704.5 1702 1760 1495 1897 1390 1899 1264 1859.6 1227.5 1800.5 1276.4 1648.26"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Jose_Del_Monte')}
        />
        <polygon
            id="San_Ildefonso"
            className="municipality-layer"
            points="1374 781 1273.7 781 1192.5 821.5 1149.5 821.5 1017.2 763.5 974.5 849.5 870.5 866.5 870.5 915.5 952.5 1018.5 1045.5 1026.65 1126.5 1131.5 1371 1147 1424 981 1374 781"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Ildefonso')}
        />
        <polygon
            id="San_Miguel"
            className="municipality-layer"
            points="982.5 447.5 978.5 650.5 1045.5 706.5 1017.2 763.5 1149.5 821.5 1192.5 821.5 1273.7 781 1374 781 1471 577 1463 302 982.5 447.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Miguel')}
        />
        <polygon
            id="Meycauayan"
            className="municipality-layer"
            points="997 2011 1215.5 1877.5 1215.5 1919 1264 1920 1140.5 1959.5 1098 2059 1032 2059 997 2011"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Meycauayan')}
        />
        <polygon
            id="Marilao"
            className="municipality-layer"
            points="937 1945.78 962 1945.78 962 2012 997 2011 1215.5 1877.5 1215.5 1919 1264 1920 1264 1859.6 1227.5 1800.5 1204.85 1800.5 1172.5 1835.5 1099.55 1835.5 1068.5 1863.5 937 1945.78"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Marilao')}
        />
        <polygon
            id="Norzagaray"
            className="municipality-layer"
            points="1399 1349 1398 1286 1479 1284 1479 1332 1723 1274 1726 1338 1692 1402 2252 1461.35 2252 1519 2032 1677 1702 1760 1700.5 1704.5 1532.9 1623.88 1500.5 1623.88 1482.95 1648.26 1427.6 1648.26 1389.8 1599.5 1337.15 1599.5 1295.3 1648.26 1276.4 1648.26 1252.1 1492.4 1399 1349"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Norzagaray')}
        />
        <polygon
            id="Dona_Remedios_Trinidad"
            className="municipality-layer"
            points="2251.5 742.5 2263.25 741.8 2263.25 639.5 2206.5 639.5 2178.2 504.5 1995.5 504.5 1833.5 435.5 1697.6 265.5 1622.5 265.5 1511.3 302 1463 302 1471 577 1374 781 1424 981 1371 1147 1359 1293 1399 1349 1398 1286 1479 1284 1479 1332 1723 1274 1726 1338 1692 1402 2252 1461.35 2251.5 742.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Dona_Remedios_Trinidad')}
        />
    </svg>
  );
}

export default Bulacan;
