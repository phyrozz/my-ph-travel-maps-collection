import React from 'react';

function Laguna(props) {
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
            id="San_Pedro"
            data-name="San Pedro"
            className="municipality-layer"
            points="209 846 40 958 21 1085 130 1005 209 996.5 289 942 209 846"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Pedro')}
        />
        <polygon
            id="Biñan"
            className="municipality-layer"
            points="261 1034 229 1053 183.8 1034 37 1104 21 1085 130 1005 209 996.5 289 942 366 1015 312 1209 198 1356 126.2 1356 261 1034"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Biñan')}
        />
        <polygon
            id="Santa_Rosa"
            className="municipality-layer"
            points="475.4 1149 441 1057 366 1015 312 1209 198 1356 171 1447 314 1401 475.4 1149"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Santa_Rosa')}
        />
        <polygon
            id="Cabuyao"
            className="municipality-layer"
            points="635 1364 602 1270 475.4 1149 314 1401 171 1447 171 1507.7 345 1417 635 1364"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cabuyao')}
        />
        <polygon
            id="Calamba"
            className="municipality-layer"
            points="750 1563 647 1735 171 1692.2 171 1507.7 345 1417 635 1364 750 1563"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Calamba')}
        />
        <polygon
            id="Los_Baños"
            className="municipality-layer"
            points="950.88 1530.08 978 1651 930.8 1735 862.4 1735 747 1830 647 1735 750 1563 950.88 1530.08"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Los_Baños')}
        />
        <polygon
            id="Bay"
            className="municipality-layer"
            points="1105 1591 1078 1698 945 1816 885.8 1816 780.38 1943.76 747 1830 862.4 1735 930.8 1735 978 1651 950.88 1530.08 1087 1508 1105 1591"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Bay')}
        />
        <polygon
            id="Calauan"
            className="municipality-layer"
            points="1181 1564 1253 1564 1339 1694 1267.4 1694 1158 1870 1105 1830 1033 1910 907 1971 780.38 1943.76 885.8 1816 945 1816 1078 1698 1105 1591 1087 1508 1181 1564"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Calauan')}
        />
        <polygon
            id="Alaminos"
            className="municipality-layer"
            points="949.7 2273 1059.69 2061.2 1033 1910 907 1971 780.38 1943.76 877 2273 949.7 2273"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Alaminos')}
        />
        <polygon
            id="Calauan"
            className="municipality-layer"
            points="1181 1564 1253 1564 1339 1694 1267.4 1694 1158 1870 1105 1830 1033 1910 907 1971 780.38 1943.76 885.8 1816 945 1816 1078 1698 1105 1591 1087 1508 1181 1564"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Calauan')}
        />
        <polygon
            id="San_Pablo_City"
            className="municipality-layer"
            points="1267.4 1694 1480 1989 1582 2011 1077 2362 950 2375 949.7 2273 1059.69 2061.2 1033 1910 1105 1830 1158 1870 1267.4 1694"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Pablo_City')}
        />
        <polygon
            id="Rizal"
            className="municipality-layer"
            points="1428 1764 1339 1793.35 1480 1989 1582 2011 1582 1943.76 1428 1764"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Rizal')}
        />
        <polygon
            id="Nagcarlan"
            className="municipality-layer"
            points="1483.4 1447 1253 1564 1339 1694 1267.4 1694 1339 1793.35 1428 1764 1582 1943.76 1582 2011 1768 1997 1532 1680.04 1483.4 1447"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Nagcarlan')}
        />
        <polygon
            id="Liliw"
            className="municipality-layer"
            points="1624 1631 1817.74 1937.21 1768 1997 1532 1680.04 1500.73 1530.08 1624 1631"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Liliw')}
        />
        <polygon
            id="Magdalena"
            className="municipality-layer"
            points="1681 1388 1681 1500 1624 1631 1500.73 1530.08 1483.4 1447 1541 1404 1681 1388"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Magdalena')}
        />
        <polygon
            id="Majayjay"
            className="municipality-layer"
            points="1961.84 1764 1681 1499.6 1624 1631 1817.74 1937.21 1961.84 1764"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Majayjay')}
        />
        <polygon
            id="Luisiana"
            className="municipality-layer"
            points="2159 1527 1905 1438 1681 1461.8 1681 1499.6 1961.84 1764 2159 1527"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Luisiana')}
        />
        <polygon
            id="Cavinti"
            className="municipality-layer"
            points="2316 1171 2108 1264 1757 1264 1757 1453.72 1905 1438 2159 1527 2316 1171"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cavinti')}
        />
        <polygon
            id="Victoria"
            className="municipality-layer"
            points="1254.8 1356 1379.82 1499.6 1253 1564 1181 1564 1087 1508 1254.8 1356"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Victoria')}
        />
        <polygon
            id="Pila"
            className="municipality-layer"
            points="1483.4 1447 1360.21 1285.11 1254.8 1356 1379.82 1499.6 1483.4 1447"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pila')}
        />
        <polygon
            id="Santa_Cruz"
            className="municipality-layer"
            points="1541 1404 1600 1220 1566.37 1144.53 1360.21 1285.11 1483.4 1447 1541 1404"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Santa_Cruz')}
        />
        <polygon
            id="Pagsanjan"
            className="municipality-layer"
            points="1872.2 1264 1872.2 1200 1692.2 1200 1600 1220 1541 1404 1681 1388 1681 1461.8 1757 1453.72 1757 1264 1872.2 1264"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pagsanjan')}
        />
        <polygon
            id="Lumban"
            className="municipality-layer"
            points="1708 1069 2095.4 1069 2302.85 962.22 2316 1171 2108 1264 1872.2 1264 1872.2 1200 1692.2 1200 1600 1220 1566.37 1144.53 1616.6 1085 1560 1036 1611 988 1708 1069"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Lumban')}
        />
        <polygon
            id="Kalayaan"
            className="municipality-layer"
            points="1703.34 947.82 2300.59 926.36 2302.85 962.22 2095.4 1069 1708 1069 1703.34 947.82"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Kalayaan')}
        />
        <polygon
            id="Paete"
            className="municipality-layer"
            points="1701.26 893.83 2057 742 2292 790 2300.59 926.36 1703.34 947.82 1701.26 893.83 1764"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Paete')}
        />
        <polygon
            id="Pakil"
            className="municipality-layer"
            points="1698 809 2022.34 676.18 2057 742 1701.26 893.83 1698 809"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pakil')}
        />
        <polygon
            id="Pakil"
            className="municipality-layer"
            points="1519.5 880.5 1418.6 785.01 1347.4 785.01 1349 904 1422 979 1519.5 880.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pakil')}
        />
        <polygon
            id="Pangil"
            className="municipality-layer"
            points="1979.77 595.33 1698 723.8 1649 779 1649 809.79 1698 809 2022.34 676.18 1979.77 595.33"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pangil')}
        />
        <polygon
            id="Pangil"
            className="municipality-layer"
            points="1418.6 785.01 1506.8 785.01 1511 812 1519.5 880.5 1418.6 785.01"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pangil')}
        />
        <polygon
            id="Mabitac"
            className="municipality-layer"
            points="1343.76 513.21 1608 580 1608 809.79 1511 812 1506.8 785.01 1347.4 785.01 1343.76 513.21"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Mabitac')}
        />
        <polygon
            id="Siniloan"
            className="municipality-layer"
            points="1932.11 504.83 1654 671 1627 778 1627 809.79 1649 809.79 1649 779 1698 723.8 1979.77 595.33 1932.11 504.83"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Siniloan')}
        />
        <polygon
            id="Famy"
            className="municipality-layer"
            points="1871 388.78 1608 580 1608 809.79 1627 809.79 1627 778 1654 671 1932.11 504.83 1871 388.78"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Famy')}
        />
        <polygon
            id="Santa_Maria"
            className="municipality-layer"
            points="1343.76 513.21 1608 580 1871 388.78 1730 121 1338.5 121 1343.76 513.21"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Santa_Maria')}
        />
    </svg>
  );
}

export default Laguna;
