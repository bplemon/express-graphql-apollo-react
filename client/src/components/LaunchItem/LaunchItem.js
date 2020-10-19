import React from 'react';

const LaunchItem = (props) => {
    const { 
        launch: {
            flight_number,
            mission_name,
            launch_date_utc,
            launch_success,
            rocket: {
                rocket_id,
                rocket_type,
                rocket_name
            } = {}
        } = {}
    } = props;

    return (
        <div>
            <h1>Flight Number {flight_number}</h1>
            <ul>
                <li>Mission Name: {mission_name}</li>
                <li>Date UTC: {launch_date_utc}</li>
                <li>Success: {launch_success}</li>
                <li>Rocket</li>
                <ul>
                    <li>ID: {rocket_id}</li>
                    <li>Type: {rocket_type}</li>
                    <li>Name: {rocket_name}</li>
                </ul>

            </ul>
        </div>
    )
}

export default LaunchItem;
