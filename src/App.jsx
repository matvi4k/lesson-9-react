import './App.css'
import stickers from './stickers.json'
import GlobalStyle from './components/GlobalStyle'
import {StickerList} from './components/StickerList'


function App() {

  return (
    <>
      <StickerList stickers={stickers}/>
      <GlobalStyle/>
    </>
  )
}

export default App
