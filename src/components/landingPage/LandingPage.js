import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Landingpage = () => {
    
const [data ,setData]=useState()
    const options = {
	method: 'GET',
	url: 'https://football.elenasport.io/v2/seasons',
	qs: {
		expand: '***expand***',
		page: '***page***'
	},
	headers: {
		Authorization: '***Authorization***'
	}
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div>
            
        </div>
    );
}

export default Landingpage;
