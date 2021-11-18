const getCharacter = async () => {    
    const endpoint = 'https://django-starwars.herokuapp.com/characters/API/10'  
    try{
      const response =  await fetch(endpoint, {mode: 'cors'});
      if(response.ok){
        let jsonResponse = await response.json();
            console.log(jsonResponse['character_faction'])
            $(".name").html(jsonResponse.name);
            $(".gender").html(jsonResponse.gender);
            $(".birth_year").html(jsonResponse.birthYear);
            $(".birth_planet").html(jsonResponse.birthPlanet);
            $(".faction").html(jsonResponse.characterFaction);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  getCharacter()