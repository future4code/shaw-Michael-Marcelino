
import './App.css'
import foto from "./img/perfil.png"

function App() {

  const titulo = "Título do vídeo "
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}
  return (
    <div class="tela-inteira">
    <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
    </header>

    <main>
        <nav class="menu-vertical">
            <ul>
                <li class="botoes-meunu-vertical">Início</li>
                <li class="botoes-meunu-vertical">Em alta</li>
                <li class="botoes-meunu-vertical">Inscrições</li>
                <hr>
                </hr>
                <li className="botoes-meunu-vertical">Originais</li>
                <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
        </nav>

        <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onclick="reproduzVideo()">
                <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=1 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onclick="reproduzVideo()">
                <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=2 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onclick="reproduzVideo()">
                <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=3 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onclick="reproduzVideo()">
                <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=4 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onclick="reproduzVideo()">
                <img onClick={reproduzVideo}  src="https://picsum.photos/400/400?a=5 " alt="" />
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onclick="reproduzVideo()">
                <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=6 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onclick="reproduzVideo()">
                <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=7 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onclick="reproduzVideo()">
                <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=8 " alt=""/>
                <h4>{titulo}</h4>
            </div>
        </section>
    </main>

    <footer>
        <h4>Oi! Eu moro no footer!</h4>
    </footer>
</div>
  )
}

export default App;
