
import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../../utils/style/colors';
const FormContainer = styled.div`
  border-radius: 8px;
  background-color: ${colors.primary || '#f2f2f2'};
  padding: 30px;
  box-sizing: border-box;`


const FormRow = styled.div`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  margin-bottom: 12px;
`;

const Col25 = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Col75 = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

const StyledLabel = styled.label`
  padding: 12px 12px 10px 7px;
  display: inline-block;
  font-weight: 500;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  background-color: ${colors.backgroundLight || '#fff'};
  color: #333; 

  &:focus {
    outline: none;
    border-color: ${colors.primaro};
  }
`;

const SubmitButton = styled.button`
  background-color:${colors.secondary};
  color: black;
  font-weight:bold;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  float: right;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color:${colors.backgroundLight} ;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    float: none;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;
function Paludisme() {
    // État pour stocker les valeurs du formulaire
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        temperature: '',
        poids: '',
        imageFile: null
    });

    // Gestion des changements dans les champs texte et nombre
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Gestion du chargement de l'image
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({
                ...prev,
                imageFile: e.target.files[0]
            }));
        }
    };

    // Soumission du formulaire (vers votre backend FastAPI par exemple)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Utilisation de FormData pour envoyer du texte et un fichier binaire
        const dataToSend = new FormData();
        dataToSend.append('nom', formData.nom);
        dataToSend.append('prenom', formData.prenom);
        dataToSend.append('temperature', formData.temperature);
        dataToSend.append('poids', formData.poids);
        if (formData.imageFile) {
            dataToSend.append('file', formData.imageFile);
        }

        try {
            // Exemple d'envoi vers votre futur endpoint FastAPI
            const response = await fetch('http://127.0.0.1:8000/predict', {
                method: 'POST',
                body: dataToSend,
            });

            const result = await response.json();
            console.log('Réponse du modèle d’IA :', result);
            alert('Analyse lancée avec succès !');
        } catch (error) {
            console.error('Erreur lors de la soumission :', error);
            alert('Erreur de communication avec le serveur FastAPI.');
        }
    };

    return (
       <FormContainer>
      <Title>Faire un test du paludisme</Title>
      
      <form onSubmit={handleSubmit}>
        
        <FormRow>
          <Col25>
            <StyledLabel htmlFor="nom">Nom </StyledLabel>
          </Col25>
          <Col75>
            <StyledInput
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder=" Nom du patient..."
              required
            />
          </Col75>
        </FormRow>

        <FormRow>
          <Col25>
            <StyledLabel htmlFor="prenom">Prénom </StyledLabel>
          </Col25>
          <Col75>
            <StyledInput
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="prenom du patient..."
              required
            />
          </Col75>
        </FormRow>

        <FormRow>
          <Col25>
            <StyledLabel htmlFor="temperature">Température (°C) </StyledLabel>
          </Col25>
          <Col75>
            <StyledInput
              type="number"
              step="0.10"
              id="temperature"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="Ex: 38.5"
            />
          </Col75>
        </FormRow>

        <FormRow>
          <Col25>
            <StyledLabel htmlFor="poids">poids</StyledLabel>
          </Col25>
          <Col75>
            <StyledInput
              type="number"
              step="0.1"
              id="poids"
              name="poids"
              value={formData.poids}
              onChange={handleChange}
              placeholder="Ex: 12.5"
            />
          </Col75>
        </FormRow>

        <FormRow>
          <Col25>
            <StyledLabel htmlFor="imageFrottis">Image du frottis </StyledLabel>
          </Col25>
          <Col75>
            <StyledInput
              type="file"
              id="imageFrottis"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </Col75>
        </FormRow>

        <FormRow>
          <SubmitButton type="submit">Lancer l'analyse par l'IA</SubmitButton>
        </FormRow>

      </form>
    </FormContainer>
  );
}

export default Paludisme;