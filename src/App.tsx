import { ItemFontsContainer } from "./components/ItemFontsContainer"
import { TitleApp } from "./components/TitleApp"

import "./config.scss"
import "./styles/app-style.scss"

import fonts from "./data/fonts.json"

function App() {
  return (
    <div className="App">

      <TitleApp/>

      <ul className="container-fonts">
        {
          fonts.map( font => <ItemFontsContainer 
            key={ font.name } 
            fontsData={ font }
          />)
        }
      </ul>

    </div>
  )
}

export default App