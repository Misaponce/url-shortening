import 'dotenv/config'

const dotenv = require('dotenv');

dotenv.config();

const api_key = process.env.NEXT_PUBLIC_KEY;

export async function shortenURL(urlToShorten) {
    const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': `${api_key}`,
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        body: new URLSearchParams({
            url: urlToShorten // Passing the url to shorten
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        //Parse response to return proper link
        const parsedResult = JSON.parse(result)
        const actualLink = parsedResult.result_url;
        console.log(actualLink);
        return actualLink;
    } catch (error) {
        console.error(error);
    }

};


//example link 'https://github.com/Misaponce/time-tracking-dashboard'

