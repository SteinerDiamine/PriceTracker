import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractPrice } from '../utils';

export async function scrapeAmazonProduct(url: string) {
    if (!url) return;

    // BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);

    const port = 22225;
    const session_id = (1000000 * Math.random()) | 0;

    const proxyUrl = `http://${username}-session-${session_id}:${password}@brd.superproxy.io:${port}`;
    const options = {
        proxy: {
            host: proxyUrl,
            port: 80,
        },
    };

    try {
        // Fetch amazon page
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        const title = $('#productTitle').text().trim();
        const currentPrice = extractPrice($('.priceToPay span.a-price-whole').text());
        const originalPrice = extractPrice($('#priceblock_ourprice').text());

        console.log({ title, currentPrice, originalPrice });
        
    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`);
    }
}
