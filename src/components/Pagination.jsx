import React from 'react'

//dependencias
import { useContext } from 'react';
//Context
import { CharacterContext } from '../context/characterContext';

export const Pagination = () => {

    const { totalCount, pages, actualPage, prevPage, nextPage, goToPage } = useContext(CharacterContext);

  return (
    <React.Fragment>
        <div className='col-3 mt-1 mb-2 d-flex align-items-center'>
            <b>Total Results: {totalCount} </b>
        </div>

        <div className='col-3  mt-1 mb-2  d-flex align-items-center'>
            <b>Page: {actualPage} of {pages}</b>
        </div>

        <div className='col-3  mt-1 mb-2  d-flex align-items-center'>
            <b>Go to Page</b>
            <select className='form-select w-auto mx-1' name="goTo" value={actualPage} data-type='goTo' onChange ={e => goToPage('', e)}>
                {
                    Array.from(Array(pages).keys()).map(page => {
                        return <option key={page + 1} value={page + 1}>{page + 1}</option>
                    })
                }
            </select>
        </div>

        <div className='col-3 text-end'>
            { prevPage && (
            <button className='btn btn-success mx-2' data-type='prev' onClick={e => goToPage(prevPage, e)}>Prev</button> )}
            { nextPage && (
            <button className='btn btn-success'  data-type='next' onClick={e => goToPage(nextPage, e)}>Next</button> )}
        </div>

    </React.Fragment>
  )
}
