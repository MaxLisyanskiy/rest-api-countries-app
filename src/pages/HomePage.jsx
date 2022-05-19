import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

import { loadingCountries } from '../store/countries/countries-actions';
import { selectCountriesInfo, selectVisibleCountries } from '../store/countries/countries-selectors';
import { selectSearch } from '../store/controls/controls-selectors';

export const HomePage = () => {
  const navigate = useNavigate(),
        dispatch = useDispatch();

  const search = useSelector(selectSearch)
  const countries = useSelector(state => selectVisibleCountries(state, {search}));
  const {status, error, qty} = useSelector(selectCountriesInfo);


  useEffect(() => {
    dispatch(loadingCountries())
  }, [dispatch, qty])

  return (
    <>
      <Controls />

      {error && <h2>{error}</h2>}
      {status === 'loading' && <h2>Loading.....</h2>}

      {status === 'received' && 
      <List>
            {countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
      </List>
      }
    </>
  );
};
