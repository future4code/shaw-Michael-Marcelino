import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
<<<<<<< HEAD
        <Post
<<<<<<< HEAD
          nomeUsuario={'paulinha'}
=======
          nomeUsuario={'Michael Douglas'}
>>>>>>> estados-insta4
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
=======
        <Post fost={'https://picsum.photos/200/150'}
>>>>>>> master
        />
      </MainContainer>
    );
  }
}

export default App;
