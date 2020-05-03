import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const Body = styled.div`
  max-width: 550px;
  background: #FFF;
  border-radius: 4px;
  padding: 30px;
  margin: 0px auto;

`;

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .form-group label {
    font-size: 16px;
    font-family: 'Montserrat Semibold', sans-serif;
    margin-bottom: 5px;
    color: #000;
  }

  
  .form-group input,
  .form-group select {
    background: #1A1A1A;
    width: 100%;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 14px;
    padding: 0 15px;
    outline: none;
    transition: border-color 0.2s ease-in;
  }

  .form-group input:focus,
.form-group select:focus {
  border-color: #FF7373;
}

.form-group button {
  background-image: linear-gradient(-90deg, #FF7373 0%, #FDDB33 100%);
  border-radius: 4px;
  border: 0;
  height: 40px;
  color: #1A1A1A;
  font-size: 16px;
  font-family: 'Montserrat Bold', sans-serif;
  cursor: pointer;
}

.form-group:last-child {
  margin-top: 40px;
}

`;

export const Result = styled.div`
  margin-top: 50px;

  .result-container {
    background: #1A1A1A;
    margin-top: 10px;
    background: #1A1A1A;
    border-radius: 5px;
    padding: 15px;
  }

  .result-container  ul {
    list-style: none;
  }

  .result-container ul li {
    font-size: 14px;
    font-weight: bold;
    font-family: 'Montserrat Bold', sans-serif;
    line-height: 30px;
  }

  ..result-container ul li strong {
    color: #FF7373;
  }
`;


export const Header = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;

  img{
    margin-top: 40px;
  }
`;

export const GlobalStyle = createGlobalStyle` 
  *,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  body {
    background: #282828;
    font-family: 'Montserrat', sans-serif;
    color: white;
  }


`;

