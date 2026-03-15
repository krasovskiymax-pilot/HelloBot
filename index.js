require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('Ошибка: BOT_TOKEN не найден в .env');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

const greetings = ['Привет!', 'Я готов!', 'Здравствуйте!', 'Добрый день!'];

bot.on('message', (msg) => {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  bot.sendMessage(msg.chat.id, greeting);
});

console.log('Бот запущен');
