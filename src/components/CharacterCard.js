import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { showCharacters } from "../actions";




class CharacterCard extends Component {

  state = {
    isDetail : false
  };

  componentWillMount() {
    this.props.showCharacters('', false);
  }
  
  renderCharacterList() {

    return this.props.characters.slice(0, 12).map((character) => {
      return (
        <Card key={character.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              {character.status} - {character.species}
              {character.type}              
            </Card.Text>
            <p>{ this.state.isDetail === true ? <b> Género:  { character.gender } </b>   : null }</p>
            <p>{ this.state.isDetail === true ? <b> Origen: { character.origin.name } </b>  : null }</p>
            <Button  variant="primary" hidden={this.state.isDetail} onClick={()=> { this.detailCharacter(character) }} >Ver Detalle</Button>
          </Card.Body>
        </Card>
      );
    });
  }

  detailCharacter = (detail) => {
    //console.log(detail);
    if(detail !== '') 
    {  
      this.setState({
        isDetail: true
      });
      this.props.showCharacters(detail.id, true);
    }
    else
    {
      this.setState({
        isDetail: false
      });
      this.props.showCharacters('', false);   
    }  
  }

  render() {

    return this.props.characters.length ? (
      <div>
        <div className="alert alert-success">
          {" "}
          {"Se encontraron " +
            this.props.characters.length +
            " personajes."}
        </div>
        <div className="row">{this.renderCharacterList()}</div>     
      </div>
    ) : (
      <div className="alert alert-danger">
        {"No se encontraron personajes, intenta con otro nombre."}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.character.list
  };
}

export default connect(mapStateToProps, { showCharacters })(CharacterCard);
