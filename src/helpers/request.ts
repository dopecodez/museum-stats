import fetch from 'node-fetch';

// Makes a request to an endpoint
async function makeRequest(API_URL: string): Promise<any> { // a simple wrapper for fetch
    try {
        const response = await fetch(encodeURI(API_URL));
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export default makeRequest;