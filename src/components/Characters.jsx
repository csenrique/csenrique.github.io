//dependencias
import { useContext } from 'react';
//Context
import { CharacterContext } from '../context/characterContext';

//Components
import { Pagination } from './Pagination';

export const Characters = () => {

    const { characters } = useContext(CharacterContext);

  return (
    <div className="row">

        <Pagination />

        {
            characters.map((character, idx) => {
                return (
                    <div className="col-3" key={character.name + idx} >
                    <div className="card mb-4">
                     <img className='card-img-top' src={character.image} alt={character.name}  />
                       <div className="card-body">
                         <h5 className="card-title"> {character.name} </h5>
                         <p className="card-text"> 
                             <b>Status</b> {character.status}<br />
                             <b>Spacies</b> {character.species}
                         </p>
                      </div>
                    </div>
                 </div>
                )
            })
        }
    </div>
  )
}
