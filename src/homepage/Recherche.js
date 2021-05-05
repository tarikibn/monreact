import React, { Component } from 'react'
import axios from 'axios'
import Search1 from './Search1';


export class Recherche extends Component {
    state = {
        obj: [],
      };
      GitDATAsearch = (data) => {
        if (data !== '') {
          axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
            .then((Response) => {
                console.log(Response)
              this.setState({
                obj: Response.data.meals,
              });
            });
        }
      };
    render() {
        return (
            <div>
                <Search1 getSearsh={this.GitDATAsearch} /> 
                <div>
            <div className="row">
              {this.state.obj.map((gitDATA) => (
                <div className="col-md-4">
                  <div className="card text-white bg-secondary mb-3 mt-4">
                    <img
                      className="card-img-top"
                      src={gitDATA.strMealThumb}
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">{gitDATA.strMeal}</h4>
                      <p className="card-text">
                        <a
                          href={'show/' + gitDATA.idMeal}
                          className="btn btn-danger">
                          show more
                        </a>
                        <a className="favori" href="/favori">
                          <i className="fas fa-heart"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            </div>
        )
    }
}

export default Recherche
