import axios from 'axios';

export const sendWebhook = async (data: any) => {
  if (!process.env.WEBHOOK_URL || !process.env.WEBHOOK_URL.startsWith('http')) {
    console.error('WEBHOOK_URL is not defined in .env! Unable to send webhook.');
    return;
  }

  if (!data.content) {
    // eslint-disable-next-line no-param-reassign
    data.content = null;
  }

  await axios.post(process.env.WEBHOOK_URL as string, data);
};

export const codeBlock = (text: string) => `\`\`\`\n${text.replace(/`/gi, '`\u200b')}\n\`\`\``;
