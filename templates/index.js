module.exports = function(card) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          h1 > em {
            display: block;
          }
        </style>
      </head>
      <body>
        <h1>Today’s lunch is at <em>${card.name}</em></h1>

        <p>${card.description}</p>

        <h2>Tags</h2>
        <ul>
          <li>${card.labels.join('</li><li>')}</li>
        </ul>

        <h2>
          <a href="${card.menu}">View ${card.name}’s menu</a>
        </h2>

        <h2>Address</h2>
        <p>${card.address}</p>

        <footer>
          — View the <a href="${card.url}">Trello card</a>.
        </footer>
      </body>
    </html>`;
};
