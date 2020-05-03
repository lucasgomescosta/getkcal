import React, { useState, useCallback } from 'react'
import { Container, Header, Form, Result, GlobalStyle, Body } from './styles'
import logo from '../assets/logo.svg';

function Index() {

  const [sexo, setSexo] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [activity, setActivity] = useState();
  const [age, setAge] = useState();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const tmb = Math.round(
      age === 'female'
        ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
        : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    );

    const maintenance = Math.round(tmb * Number(activity));
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;
    const layout = `
    <h2>Aqui está o resultado:</h2>
    <div>
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
    </div>
  `;
    
    const result = document.getElementById('Result');

    result.innerHTML = layout; 

  })
  
  return (
    <>
    <GlobalStyle />
    <Container>
      <Header>
        <img src={logo} alt="getkcal" />
      </Header>
      <Body>
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="gender">Seu sexo</label>
            <select id="gender" onChange={e => setSexo(e.target.value)}>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
          <div className="form-group">
            <label for="age">Sua idade</label>
            <input type="number" id="age" onChange={e => setAge(e.target.value)} />
          </div>
          <div className="form-group">
            <label for="weight">Seu peso</label>
            <input type="number" id="weight" onChange={e => setWeight(e.target.value)}/>
          </div>
          <div className="form-group">
            <label for="height">Sua altura</label>
            <input type="number" id="height" onChange={e => setHeight(e.target.value)} />
          </div>
          <div className="form-group">
            <label for="activity">Seu nível de atividade física</label>
            <select id="activity" onChange={e => setActivity(e.target.value)}>
              <option value="1.2">Sedentário</option>
              <option value="1.375">Pouca atividade</option>
              <option value="1.55">Atividade moderada</option>
              <option value="1.725">Atividade intensa</option>
              <option value="1.9">Atividade muito intensa</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Calcular!</button>
          </div>
        </Form>
        
        <Result>
        <div className="result-container" id="Result"></div>
        </Result>
      </Body>
    </Container>
    </>
  );
}

export default Index;