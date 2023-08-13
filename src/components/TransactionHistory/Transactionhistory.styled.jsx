import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 3px solid #818181;
  border-radius: 7px;
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;
  color: #383838;


  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #afafaf;
  }

  & th {
    background-color: #c5d6ff;
    font-weight: bold;
  }

  & tr:hover {
    background-color: #e0eeff;
  }
`;
