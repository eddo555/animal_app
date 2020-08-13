import styled from "styled-components";
import Cloud from "./img/cloud.png";

export default styled.div`
  background-color: #87cefa;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto !important;
  float: none !important;
  overflow: hidden;
  border:solid black;
  font-family: 'Open Sans', sans-serif;



  .background {
    position:relative; 
  } 
  .grass {
    max-width: 1440px;
    width: 100vw;
    height: 30vh;
    position: absolute;
    top: 70vh;
    background-color: #3cb371;
  }
  .cloud {
    background-image: url(${Cloud});
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    top: 5vh;
    position: absolute;
    animation: cloud 40s linear infinite;
  }
  .cloud:nth-child(1) {
    width: 100px;
    width: 100px;
    top: 25vh;
    opacity: 0.9;
    left: 30vw;
    animation: cloud 80s linear infinite;
  }

  @keyframes cloud {
    from {
      transform: translateX(-5vw);
    }
    to {
      transform: translatex(110vw);
    }
  }
  .wrapper_btn {
    position: absolute;
    width: 50vw;
    height: 50vh;
    display: flex;
    left: 27%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 5vh;
  }
  .wrapper_btn_back {
    position: absolute;
    width: 50vw;
    display: flex;
    left: 27%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 13vh;
  }
  .wrapper_animals {
    position: absolute;
    width: 50vw;
    height: 50vh;
    display: flex;
    left: 27%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    top: 30vh;
  }
  .btn {
    width: auto;
    height: auto;
    text-align: center;
    font-size: 3vw;
    padding: 10px 20px;
    border-radius: 15px;
    text-decoration: none;
    color:navajowhite;

  }
  .btn:hover{
    color:black;
}
  .animal {
    width: 20%;
    animation: animalAnimationReverse 2s 1;
    animation-fill-mode: forwards;
  }
  
  .animal_dog {
    animation: animalAnimation 2s 1;
    animation-fill-mode: forwards;

  }
  
  .animal_cat {
    animation: animalAnimation 2s 1;
    animation-fill-mode: forwards;
  }
  .animal_pig {
    animation: animalAnimation 2s 1;
    animation-fill-mode: forwards;
  }
  .animal_cow {
    animation: animalAnimation 2s 1;
    animation-fill-mode: forwards;
  }
  @keyframes animalAnimation {
    0% {
      transform: translateY();
      width: 20%;
    }
    10% {
        transform: translateY(-5vh);
    }
    100% {
      transform: translateY(30vh);
      width: 10%;
    }
  }
  @keyframes animalAnimationReverse {
    0% {
      transform: translateY(30vh);
      width: 10%;
    }
    100% {
      transform: translateY();
      width: 20%;
    }
  }
`;
