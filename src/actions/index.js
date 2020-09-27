import axios from "axios";
//import * as _ from "lodash";

export const SHOW_CHARACTERS = "SHOW_CHARACTERS";
const url = "https://rickandmortyapi.com/";

export function showCharacters(name, unico) {
  
  let urlApi = 'api/character/' + name;
  
  return (dispatch, getState) => {
    axios
      .get(url + urlApi)
      .then(function (response) {     
          dispatch({
            type: SHOW_CHARACTERS,
            payload: unico === true ? [{...response.data}] : response.data.results,
          });                    
      })
      .catch(function (error) {
        console.log(error);        
        dispatch({
          type: SHOW_CHARACTERS,
          payload: []
        });       
        
      })
      .then(function () {});
  };
}
