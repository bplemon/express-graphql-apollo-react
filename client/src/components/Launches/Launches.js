import React from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from '../LaunchItem/LaunchItem'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_utc
            launch_success
            rocket {
                rocket_id
                rocket_type
                rocket_name
            }
        }
    }
`;

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if(loading) return <h3>Loading...</h3>

    if(error) console.log(error);

       
    return data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launch={launch} />
     ))
                       
};

export default Launches;