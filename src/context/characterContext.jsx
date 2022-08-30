//Dependencias
import { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const CharacterContext = createContext(); 

export const CharacterProvider = ({children}) => {

    const [characters, setCharacters] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [pages, setPages] = useState(0);
    const [actualPage, setActualPage] = useState(1);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/character/')
            //.then(res => res.json())
            .then(response => {
                if (response.status === 200) {
                     setCharacters(response.data.results);
                     setTotalCount(response.data.info.count);
                     setPages(response.data.info.pages); //esto lo veo con console.log
                     setPrevPage(response.data.info.prev);
                     setNextPage(response.data.info.next);
                }               
            });
    } , []);

const goToPage = (page, e) => {
      const type = e.target.dataset.type;

      switch(type) {
        case 'prev':        
          setActualPage(actualPage - 1);
          break;
        case 'next':        
          setActualPage(actualPage + 1);
          break;
        case 'goTo':
          const number = Number(e.target.value);
          page = `https://rickandmortyapi.com/api/character?page=${number}`;
          setActualPage(number);
          break;
        default:
          return
      }

      Axios.get(page)
            //.then(res => res.json())
            .then(response => {
                if (response.status === 200) {
                     setCharacters(response.data.results);
                     setPrevPage(response.data.info.prev);
                     setNextPage(response.data.info.next);
                }               
            });
  }

  return (
    <CharacterContext.Provider value={{
        characters,
        totalCount,
        pages,
        actualPage,
        prevPage,
        nextPage,
        goToPage
    }}>  
       { children }
    </ CharacterContext.Provider>
  )
}
