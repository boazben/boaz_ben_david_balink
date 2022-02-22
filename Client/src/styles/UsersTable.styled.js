import styled from 'styled-components';

export const StyledUsersTable = styled.table` 
    border-collapse: collapse;
    width: 70%;
    margin: 10px;
    transition: 300ms;
    font-weight: bold;

    th {
        background-color: ${({theme}) => theme.colors.table.headerBg};
        color: ${({theme}) => theme.colors.bg};
        font-size: 20px;
        text-align: start;
        padding: 5px 10px;
        border: ${({theme}) => theme.colors.table.border};
        border-left: none;
        border-right: none;
        cursor: pointer;
    }
    
    th:first-child {
        border-left: ${({theme, ltr}) => ltr ? theme.colors.table.border : ''};
        border-right: ${({theme, ltr}) => !ltr ? theme.colors.table.border : ''};
    }
    
    th:last-child {
        border-left: ${({theme, ltr}) => !ltr ? theme.colors.table.border : ''};
        border-right: ${({theme, ltr}) => ltr ? theme.colors.table.border : ''};
    }
    
    th:hover {
        background-color: ${({theme}) => theme.colors.table.headerBgHover};
    }

    th:first-child:hover, th:last-child:hover {
        cursor: auto;
        background-color: ${({theme}) => theme.colors.table.headerBg};
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    span {
        min-width: 15px;
    }

    tr:hover {
        background-color: ${({theme}) => theme.colors.table.rowHover};
    }
   
  
  td {
    border: ${({theme}) => theme.colors.table.border};
    text-align: start;
    padding: 8px;
    cursor: pointer;
    color: ${({theme}) => theme.colors.table.text};
  }

  td:last-child {
      text-align: center;
  }

  td:last-child:hover {
    background-color: ${({theme}) => theme.colors.table.delete};
    color: ${({theme}) => theme.colors.table.rowHover};
  }


`