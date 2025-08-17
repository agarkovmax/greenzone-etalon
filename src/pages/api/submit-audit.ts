export async function POST({ request }) {
  const { url, email } = await request.json();

  const message = `
🚨 Новый лид: GreenZone
🌐 Сайт: ${url}
📧 E-mail: ${email}
🕒 ${new Date().toLocaleString('ru-RU')}
  `;

  await fetch('https://api.telegram.org/bot8237548717:AAGCmK-olMN0xVgXVu3AzagniQYeispig1I/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: 4873916789,
      text: message,
    }),
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
