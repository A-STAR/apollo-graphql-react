import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import './App.css';

const App = () => (
  <Query
    query={gql`
      {
        photos {
          author
          url
          comments {
            author
            text
          }
        }
      }
    `}
  >
    {({ loading, error, data: { photos } }) => {
      if (loading) {
        return <p>Loading…</p>;
      }

      if (error) {
        return `<p>Error: ${error}</p>`;
      }

      return photos.map(({ author, url, comments }) => (
        <div key={url}>
          {author}

          <img src={url} alt={author} />

          {comments.map(({ author, text }) => (
            <div key={`${author}${text}`}>
              {author}: {text}
            </div>
          ))}
        </div>
      ));
    }}
  </Query>
);

export default App;
