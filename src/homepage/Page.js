import React, { Component } from 'react'
import Recherche from './Recherche'


class  Information extends Component{

render()
{
    return(

      <section className="container-fluid mx-0 ">
            <div className="row">
                <div className="col-6   ">
              <h1 className="bb">  Cooking for all</h1>
              <Recherche/>
                </div>
                <div className="col-6   aa ">

                </div>

          </div>
      </section>
    )
}

}
export default  Information