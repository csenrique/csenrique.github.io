//Context
import { CharacterProvider } from './context/characterContext';

//Components
import { Characters } from './components/Characters';

export const App = () => {
  
  return (
    <div className="container">
       <h2 className="alert alert-success text-center">Rick and Morty</h2>

       <CharacterProvider>   
         <Characters />
       </CharacterProvider>
       
    </div>
   
  )
}

