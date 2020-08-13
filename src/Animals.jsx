import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dog from "./img/dog.png";
import Cat from "./img/cat.png";
import Pig from "./img/pig.png";
import Cow from "./img/cow.png";
import Bark from "./img/dog.mp3";
import Squeel from "./img/pig.mp3";
import Meow from "./img/cat.mp3";
import Moo from "./img/cow.mp3";

function Animals() {
  const [dog, setDog] = useState(false);
  const [cat, setCat] = useState(false);
  const [pig, setPig] = useState(false);
  const [cow, setCow] = useState(false);
  const [play, setPlay] = useState(false);

  function PlayToggle(animal) {
    const audio = new Audio(animal);
    setPlay(!play);

    audio.play();
  }

  return (
    <div className="background">
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="grass"></div>
      <div className="wrapper_btn_back">
        <Link className="btn" to="/">
          Back
        </Link>
      </div>
      <div className="wrapper_animals">
        <img
          className={dog === false ? "animal" : "animal_dog"}
          src={Dog}
          alt="dog"
          onClick={() => PlayToggle(Bark, setDog(!dog))}
        />
        <img
          className={cat === false ? "animal" : "animal_cat"}
          src={Cat}
          alt="cat"
          onClick={() => PlayToggle(Meow, setCat(!cat))}
        />
        <img
          className={pig === false ? "animal" : "animal_pig"}
          src={Pig}
          alt="pig"
          onClick={() => PlayToggle(Squeel, setPig(!pig))}
        />
        <img
          className={cow === false ? "animal" : "animal_cow"}
          src={Cow}
          alt="cow"
          onClick={() => PlayToggle(Moo, setCow(!cow))}
        />
      </div>
    </div>
  );
}

export default Animals;
