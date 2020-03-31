import React, {useState, useEffect, useMemo} from 'react';
import ChoroplethMap, {highlightRegionInMap} from './choropleth';
import {MAP_TYPES, MAP_META} from '../utils/constants';
import {formatDate} from '../utils/';
import {formatDistance} from 'date-fns';

export default function ({
  states,
  stateDistrictWiseData,
  stateHighlighted,
  districtHighlighted,
}) {
  const [selectedRegion, setSelectedRegion] = useState({});
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState({});
  const [currentMap, setCurrentMap] = useState(MAP_META.India);

  useEffect(() => {
    // setStates(props.states);
    // setCurrentHoveredRegion()
  }, [states]);

  useEffect(() => {
    const region = getRegionFromState(states[1]);
    setCurrentHoveredRegion(region);
  }, [states]);

  useEffect(() => {
    const newMap = MAP_META['India'];
    setCurrentMap(newMap);
    if (stateHighlighted === null) {
      highlightRegionInMap(null, currentMap.mapType);
    } else {
      if (stateHighlighted !== undefined) {
        const regionHighlighted = getRegionFromState(stateHighlighted.state);
        setCurrentHoveredRegion(regionHighlighted);
        highlightRegionInMap(regionHighlighted.name, currentMap.mapType);
        setSelectedRegion(regionHighlighted.name);
      }
    }
  }, [stateHighlighted]);

  useEffect(() => {
    if (districtHighlighted === null) {
      highlightRegionInMap(null, currentMap.mapType);
      return;
    }
    const newMap = MAP_META[districtHighlighted?.state.state];
    if (!newMap) {
      return;
    }
    setCurrentMap(newMap);
    setHoveredRegion(districtHighlighted?.district, newMap);
    highlightRegionInMap(districtHighlighted?.district, currentMap.mapType);
    setSelectedRegion(districtHighlighted?.district);
  }, [districtHighlighted]);

  if (!currentHoveredRegion) {
    return null;
  }

  const [statistic, currentMapData] = useMemo(() => {
    const statistic = {total: 0, maxConfirmed: 0};
    let currentMapData = {};

    if (currentMap.mapType === MAP_TYPES.COUNTRY) {
      currentMapData = states.reduce((acc, state) => {
        if (state.state === 'Total') {
          return acc;
        }
        const confirmed = parseInt(state.confirmed);
        statistic.total += confirmed;
        if (confirmed > statistic.maxConfirmed) {
          statistic.maxConfirmed = confirmed;
        }

        acc[state.state] = state.confirmed;
        return acc;
      }, {});
    } else if (currentMap.mapType === MAP_TYPES.STATE) {
      const districtWiseData = (
        stateDistrictWiseData[currentMap.name] || {districtData: {}}
      ).districtData;
      currentMapData = Object.keys(districtWiseData).reduce((acc, district) => {
        const confirmed = parseInt(districtWiseData[district].confirmed);
        statistic.total += confirmed;
        if (confirmed > statistic.maxConfirmed) {
          statistic.maxConfirmed = confirmed;
        }
        acc[district] = districtWiseData[district].confirmed;
        return acc;
      }, {});
    }
    return [statistic, currentMapData];
  }, [currentMap]);

  const setHoveredRegion = (name, currentMap) => {
    if (currentMap.mapType === MAP_TYPES.COUNTRY) {
      setCurrentHoveredRegion(
        getRegionFromState(states.filter((state) => name === state.state)[0])
      );
    } else if (currentMap.mapType === MAP_TYPES.STATE) {
      const state = stateDistrictWiseData[currentMap.name] || {
        districtData: {},
      };
      let districtData = state.districtData[name];
      if (!districtData) {
        districtData = {
          confirmed: 0,
          active: 0,
          deaths: 0,
          recovered: 0,
        };
      }
      setCurrentHoveredRegion(getRegionFromDistrict(districtData, name));
    }
  };

  const getRegionFromDistrict = (districtData, name) => {
    if (!districtData) {
      return;
    }
    const region = {...districtData};
    if (!region.name) {
      region.name = name;
    }
    return region;
  };

  const getRegionFromState = (state) => {
    if (!state) {
      return;
    }
    const region = {...state};
    if (!region.name) {
      region.name = region.state;
    }
    return region;
  };

  const switchMapToState = (name) => {
    const newMap = MAP_META[name];
    if (!newMap) {
      return;
    }
    setCurrentMap(newMap);
    if (newMap.mapType === MAP_TYPES.COUNTRY) {
      setHoveredRegion(states[1].state, newMap);
    } else if (newMap.mapType === MAP_TYPES.STATE) {
      const districtData = (stateDistrictWiseData[name] || {districtData: {}})
        .districtData;
      const topDistrict = Object.keys(districtData)
        .filter((name) => name !== 'Unknown')
        .sort((a, b) => {
          return districtData[b].confirmed - districtData[a].confirmed;
        })[0];
      setHoveredRegion(topDistrict, newMap);
    }
  };
  const {name, lastupdatedtime} = currentHoveredRegion;
  return (
    <div className="MapExplorer fadeInUp" style={{animationDelay: '1.2s'}}>
      <div className="header">
        <h1>{currentMap.name} Map</h1>
        <h6>
          Hover over a{' '}
          {currentMap.mapType === MAP_TYPES.COUNTRY ? 'state' : 'district'} for
          more details
        </h6>
      </div>

      <div className="map-stats">
        <div className="stats">
          <h5>Confirmed</h5>
          <div className="stats-bottom">
            <h1>{currentHoveredRegion.confirmed}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-blue">
          <h5>Active</h5>
          <div className="stats-bottom">
            <h1>{currentHoveredRegion.active || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-green">
          <h5>Recovered</h5>
          <div className="stats-bottom">
            <h1>{currentHoveredRegion.recovered || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-gray">
          <h5>Deceased</h5>
          <div className="stats-bottom">
            <h1>{currentHoveredRegion.deaths || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>
      </div>

      <div className="meta">
        <h2>{name}</h2>
        {lastupdatedtime && (
          <div
            className={`last-update ${
              currentMap.mapType === MAP_TYPES.STATE
                ? 'district-last-update'
                : 'state-last-update'
            }`}
          >
            <h6>Last Updated</h6>
            <h3>
              {isNaN(Date.parse(formatDate(lastupdatedtime)))
                ? ''
                : formatDistance(
                    new Date(formatDate(lastupdatedtime)),
                    new Date()
                  ) + ' Ago'}
            </h3>
          </div>
        )}

        {currentMap.mapType === MAP_TYPES.STATE &&
        currentMapData.Unknown > 0 ? (
          <h4 className="unknown">
            Districts unknown for {currentMapData.Unknown} people
          </h4>
        ) : null}

        {currentMap.mapType === MAP_TYPES.STATE ? (
          <div
            className="button back-button"
            onClick={() => switchMapToState('India')}
          >
            Back
          </div>
        ) : null}
      </div>

      <ChoroplethMap
        statistic={statistic}
        mapMeta={currentMap}
        mapData={currentMapData}
        setHoveredRegion={(region) => setHoveredRegion(region, currentMap)}
        changeMap={switchMapToState}
        selectedRegion={selectedRegion}
      />
    </div>
  );
}
