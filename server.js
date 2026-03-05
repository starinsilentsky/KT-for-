import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', (req, reply) => {
  reply.type('text/html').send(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <title>Fastify App</title>
    </head>
    <body>
      <button id="btn">Сделать запрос на АПИ</button>
      <script>
        document.getElementById('btn').addEventListener('click', async () => {
          const response = await fetch('/api');
          const message = await response.text();
          console.log(message);
        });
      </script>
    </body>
    </html>
  `);
});

fastify.get('/api', (req, reply) => {
  reply.send('Запрос прошел успешно');
});

fastify.listen({ port: 8080 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Сервер запущен на http://localhost:8080');
});