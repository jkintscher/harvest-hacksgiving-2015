module.exports = function(card, is_team_lunch) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Helvetica, sans-serif;
            margin: 7% auto 0;
            padding-bottom: 3rem;
            text-align: center;
            width: 80%;
          }
          h1 {
            margin-bottom: 0.5em;
          }
          h1 > em {
            display: block;
            font-size: 1.75em;
            font-style: normal;
            margin-top: 0.25em;
          }
          .description {
            line-height: 1.5;
            margin: 2em auto;
            max-width: 700px;
            width: 100%;
            text-align: justify;
          }
          .labels > h2 {
            display: none;
          }
          .labels > ul {
            list-style: none;
          }
          .labels li {
            background-color: #dfdfdf;
            border-radius: 0.25em;
            display: inline-block;
            height: 1em;
            margin: 0.25em;
            padding: 0.3em 0.5em;
          }
          .location > h2 {
            display: none;
          }
          .location img {
            border: 1px solid #ccc;
            max-width: 600px;
            width: 100%;
          }
          footer {
            background-color: #f5f5f5;
            bottom: 0;
            font-size: 0.75em;
            height: 1.5rem;
            left: 0;
            padding-top: 0.5rem;
            position: fixed;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <h1>
          Today’s ${is_team_lunch ? 'team ' : ''}lunch is at
          <em>${card.name}</em>
        </h1>

        <article class="description">${card.description}</article>

        <section class="labels">
          <h2>Labels</h2>
          <ul>
            <li>${card.labels.join('</li><li>')}</li>
          </ul>
        </section>

        <h2>
          <a href="${card.menu}">View ${card.name}’s Menu</a>
        </h2>

        <section class="location">
          <h2>Address</h2>
          <a href="https://www.google.com/maps/dir//${card.address}/">
            <img src="http://maps.googleapis.com/maps/api/staticmap?autoscale=2&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C${card.address}" alt="Location of ${card.name}" />
          </a>
        </section>

        <footer>
          View the <a href="${card.url}">Trello card</a>.
        </footer>
      </body>
    </html>`;
};
