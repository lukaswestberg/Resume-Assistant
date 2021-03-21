/** Retrieves a JSON file containing resume data from an API and decodes it
 * @author Henry Kon
 */
const axios = require('axios');

/**
 * Retrieves the JSON-formatted resume analysis information for a given reference hash
 * @param hash the SHA-1 hash of the resume we're trying to retrieve
 * @returns {Promise<string|*>}
 */
export default async function getJsonData(file) {
    try {
        const response = await axios({method: 'get', url: `https://rastaging01.aptlogic.xyz/api/get`, headers: { 'dataHash': file}, timeout: 5000});
        if(response.data.results !== 1) return "Not found";
        return response.data;
    } catch(error) {
        console.log("---=== ERROR ENCOUNTERED ===---\n" + error);
    }
}