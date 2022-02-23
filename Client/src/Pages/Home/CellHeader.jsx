import React, { useContext } from 'react'
import { StyledTh } from '../../styles/Th.styled'
import Filter from './Filter'
import { FiledsContext, SortContext } from './TableHeader'

export default function CellHeader({filed, children, sort, index}) {
  const [fileds, setFileds] = useContext(FiledsContext)
  const sorted = useContext(SortContext)

  function changeFiled() {
    filed.searching = !filed.searching
    fileds.splice(index,1,filed)
    setFileds(fileds => [...fileds])
  }

  return (
    <StyledTh filed={filed}>
      <div>
      {filed.toSearch && <span onClick={changeFiled}><i className="fas fa-search"></i></span>}
        
        {
          filed?.searching? 
          <>
          <Filter filed={filed}/> 
          <span>
              {
                sort?.name?.includes(filed.dictionaryName) ? sort.downToUp ? <i className="fas fa-long-arrow-alt-down"></i> : <i className="fas fa-long-arrow-alt-up"></i> : null
              } 
            </span>
            </>
          : 
          <div onClick={() => filed.toSort ? sorted(filed.dictionaryName, filed.fieldDbName) : ''}>
            <span>{children}</span>
            <span>
              {
                sort?.name?.includes(filed.dictionaryName) ? sort.downToUp ? <i className="fas fa-long-arrow-alt-down"></i> : <i className="fas fa-long-arrow-alt-up"></i> : null
              } 
            </span>
          </div>
        }
      </div>
    </StyledTh>
  )
}
