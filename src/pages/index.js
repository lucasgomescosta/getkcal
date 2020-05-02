import React, { useState, useCallback } from 'react'
import { Container, Header, Form, Result, GlobalStyle, BODY } from './styles'
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
    alert(`
    Seu metabolismo basal é de ${tmb} calorias.\n
    Para manter o seu peso você precisa consumir em média ${maintenance} calorias.\n
    Para perder peso você precisa consumir em média ${loseWeight} calorias\n
    Para ganhar peso você precisa consumir em média ${gainWeight} calorias\n
    `)
    const layout = `
    <h2>Aqui está o resultado:</h2>
    <div class="result-content">
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
    
    const result = document.getElementById('result');

    result.innerHTML = layout; 

  })
  
  return (
    <>
    <GlobalStyle />
    <Container>
      <Header>
        <img src={logo} alt="getkcal" />
      </Header>
      <BODY>
        <Form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="gender">Seu sexo</label>
            <select id="gender" onChange={e => setSexo(e.target.value)}>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
          <div class="form-group">
            <label for="age">Sua idade</label>
            <input type="number" id="age" onChange={e => setAge(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="weight">Seu peso</label>
            <input type="number" id="weight" onChange={e => setWeight(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="height">Sua altura</label>
            <input type="number" id="height" onChange={e => setHeight(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="activity">Seu nível de atividade física</label>
            <select id="activity" onChange={e => setActivity(e.target.value)}>
              <option value="1.2">Sedentário</option>
              <option value="1.375">Pouca atividade</option>
              <option value="1.55">Atividade moderada</option>
              <option value="1.725">Atividade intensa</option>
              <option value="1.9">Atividade muito intensa</option>
            </select>
          </div>

          <div class="form-group">
            <button type="submit">Calcular!</button>
          </div>
        </Form>
        <div class="result-container" id="result"></div>
        <Result>
        
        </Result>
      </BODY>
    </Container>
    </>
  );
}

export default Index;