import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import './App.css';

import { Container, Card, Header, Author, Image, Footer, Comment } from './Components';

const App = () => (
  <Container>
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
          <Card key={url}>
            <Header>
              {author}
            </Header>

            <Image src={url} alt={author} />

            <Footer>
              {comments.map(({ author, text }) => (
                <Comment key={`${author}${text}`}>
                  <Author>
                    {author}
                  </Author>
                  {text}
                </Comment>
              ))}
            </Footer>
          </Card>
        ));
      }}
    </Query>
  </Container>
);

export default App;
