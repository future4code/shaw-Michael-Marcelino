import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://cdn1.mundodastribos.com/446001-Mensagens-e-imagens-rom%C3%A2nticas-para-Facebook.jpg" 
          nome="Michael Douglas F Marcelino" 
          descricao="Oi, eu sou o Michael Douglas. Sou aluno da Labenu. Adoro responder  e-mails na sexta-feira."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
         imagem="https://icon-library.com/images/white-mail-icon/white-mail-icon-22.jpg" 
         nome="Email:" 
         descricao="michaeldouglas@gmail.com"
              
        />
         <CardPequeno
         imagem="https://w7.pngwing.com/pngs/30/177/png-transparent-ip-address-computer-icons-encapsulated-postscript-address-miscellaneous-logo-video-player.png" 
         nome="Endereço:" 
         descricao="Rua. Barão de Sabrosa nº290, Lisboa."
              
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedor web Fullstack- Labenu!" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C510BAQFMcQa3VFeTtQ/company-logo_200_200/0/1519960523306?e=2147483647&v=beta&t=U5YMrzAxwK63h7x6Q40LLseOjQGfMaMaOz_77kwsdIU" 
          nome="DVM Global" 
          descricao="Engenheiro Civil." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
