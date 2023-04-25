import React from 'react';

function Rizal(props) {
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
            id="Cainta"
            className="municipality-layer"
            points="821.2 1013.5 848.5 1058.5 918.4 1058.5 918.4 1194 774.5 1351.4 774.5 1013.5 821.2 1013.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cainta')}
        />
        <polygon
            id="Taytay"
            className="municipality-layer"
            points="918.4 1194 1011.5 1279.5 904.82 1398.66 889.6 1381.5 846.5 1381.5 821.2 1416.5 774.5 1416.5 731.5 1351.5 774.5 1351.4 918.4 1194"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Taytay')}
        />
        <polygon
            id="Angono"
            className="municipality-layer"
            points="1011.5 1279.5 1076.8 1279.5 1076.8 1351.4 968.5 1470.5 904.82 1398.66 1011.5 1279.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Angono')}
        />
        <polygon
            id="Binangonan"
            className="municipality-layer"
            points="1177.5 1896.5 1177.5 2037.5 1166.5 2076.8 1166.5 2138 1247.5 2312.5 1287.5 2231.5 1264.66 2204.6 1227 2204.6 1199.2 1896.5 1177.5 1896.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Binangonan')}
        />
        <polygon
            id="Binangonan"
            className="municipality-layer"
            points="1166.5 1837.5 1166.5 1401.5 1076.8 1351.4 968.5 1470.5 1166.5 1837.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Binangonan')}
        />
        <polygon
            id="Cardona"
            className="municipality-layer"
            points="1199.2 1896.5 1213.5 1817.5 1264.66 2075 1312.6 2075 1353.5 2116.5 1353.5 2147 1264.66 2147 1264.66 2204.6 1227 2204.6 1199.2 1896.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cardona')}
        />
        <polygon
            id="Cardona"
            className="municipality-layer"
            points="1166.5 1401.5 1323.5 1241.5 1362.82 1280.82 1339 1304.65 1339.5 1482.5 1326.5 1534.5 1267.5 1534.5 1237 1609.5 1190.2 1609.5 1190.2 1837.5 1166.5 1837.5 1166.5 1401.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Cardona')}
        />
        <polygon
            id="Pililla"
            className="municipality-layer"
            points="1485.5 1590.5 1485.5 1539.5 1547.85 1477.15 1667.2 1477.15 1703.5 1495.5 1703.5 1974.5 1589.5 1959.8 1589.5 1772.5 1542.5 1646.5 1485.5 1644.8 1485.5 1590.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Pililla')}
        />
        <polygon
            id="Teresa"
            className="municipality-layer"
            points="1076.8 1279.5 1166.5 1259.6 1227 1194 1321.6 1194 1323.5 1241.5 1166.5 1401.5 1076.8 1351.4 1076.8 1279.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Teresa')}
        />
        <polygon
            id="Tanay"
            className="municipality-layer"
            points="1321.6 1194 1372 1194 1787.53 810.42 2072.5 1255.5 1703.5 1495.5 1667.2 1477.15 1547.85 1477.15 1485.5 1539.5 1485.5 1590.5 1420.5 1592.5 1393.5 1482.5 1460.2 1401.5 1460.2 1322.5 1418 1280.3 1362.82 1280.82 1323.5 1241.5 1321.6 1194"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Tanay')}
        />
        <polygon
            id="Baras"
            className="municipality-layer"
            points="1339.5 1482.5 1339 1304.65 1362.82 1280.82 1418 1280.3 1460.2 1322.5 1460.2 1401.5 1393.5 1482.5 1339.5 1482.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Baras')}
        />
        <polygon
            id="San_Mateo"
            className="municipality-layer"
            points="866.5 957.2 918.4 957.2 990.81 915.8 1102 915.8 1101.5 874.5 1132.5 829.5 983.5 710.5 822.39 710.5 797.5 766.5 797.5 865.5 866.5 865.5 866.5 957.2"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('San_Mateo')}
        />
        <polygon
            id="Antipolo"
            className="municipality-layer"
            points="1734.23 727.17 1605.5 766.5 1348.6 766.5 1132.5 829.5 1101.5 874.5 1102 915.8 990.81 915.8 918.4 957.2 866.5 957.2 866.5 1013.5 821.2 1013.5 848.5 1058.5 918.4 1058.5 918.4 1194 1011.5 1279.5 1076.8 1279.5 1166.5 1259.6 1227 1194 1321.6 1194 1372 1194 1787.53 810.42 1734.23 727.17"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Antipolo')}
        />
        <polygon
            id="Jalajala"
            className="municipality-layer"
            points="1589.5 1959.8 1488.5 2155.5 1488.5 2323.5 1535.8 2323.5 1708.5 2139.5 1794.5 2123.5 1703.5 1974.5 1589.5 1959.8"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Jalajala')}
        />
        <polygon
            id="Rodriguez"
            className="municipality-layer"
            points="1734.23 727.17 1668.5 624.5 1668.5 53.5 1337.5 248.5 1163.5 271.5 1046.5 332.5 957.5 332.5 957.5 368.5 896.5 368.5 795.5 471.5 878.5 471.5 817.5 555.5 817.5 600.5 857.5 631.5 822.39 710.5 983.5 710.5 1132.5 829.5 1348.6 766.5 1605.5 766.5 1734.23 727.17"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Rodriguez')}
        />
        <polygon
            id="Morong"
            className="municipality-layer"
            points="1267.5 1534.5 1166.5 1534.5 1166.5 1401.5 1323.5 1241.5 1362.82 1280.82 1339 1304.65 1339.5 1482.5 1326.5 1534.5 1267.5 1534.5"
            onClick={handleMunicipalityClick}
            onMouseEnter={handleMunicipalityMouseEnter}
            onMouseLeave={handleMunicipalityMouseLeave}
            fill={getMunicipalityColor('Morong')}
        />
    </svg>
  );
}

export default Rizal;
