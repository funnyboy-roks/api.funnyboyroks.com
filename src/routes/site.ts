import { Router, json } from 'express';
import { codeBlock, sendWebhook } from '../util/discord';

const router = Router();

router.use(json());

router.post('/contact', async (req, res) => {
  const { name, contact, content } = req.body;
  await sendWebhook({
    username: 'Website Message',
    embeds: [
      {
        title: 'Contact Form',
        description: `From: \`${name}\`\nContact: \`${contact}\`\n${codeBlock(content)}`,
        color: 0x00ff00,
      },
    ],
  });
  res.send({
    message: 'Submitted!',
  });
});

export default router;
