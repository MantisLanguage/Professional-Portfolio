import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';  

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="homeGrid">
                    <Cell col={12}>
                    <div className='homeBanner'>
                        <h1>Connor Dougherty <br/>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML | CSS | Javascript | jQuery | JSON | React | NodeJS | ExpressJS | MongoDB | SQL | Firebase | AJAX | Heroku | and growing!</p>
                      <div className='links'>
                        <a href="https://www.linkedin.com/in/connor-dougherty-7a8880b8/" taget="_blank">
                            <i className="fa fa-linkedin"/>
                        </a>
                        <a href="https://github.com/MantisLanguage" taget="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Home;
