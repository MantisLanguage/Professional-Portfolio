import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu} from 'react-mdl';
import Quizness from '../images/Screen Shot 2019-10-29 at 1.01.07 PM.png';

class Private extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    // Begin Group Work tab
    if(this.state.activeTab === 0){
      return(
        <div className="projects">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: {Quizness}}} >Taking Care of Quizness</CardTitle>
            <CardText>
              An application that allows users sign up/log in, in order to to create, store and take quizzes. Primary technlogies include: ReactJS, MongoDB, Heroku, html/css, express and npm packages, passport and API's as well.  
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/Project-Three-Repo" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://mighty-caverns-44381.herokuapp.com/" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ibb.co/LhbDpqr) center / cover'}} >Central Port</CardTitle>
            <CardText>
             An application that allows for users to sign up/log in, in order to post, read, like or dislike comments and photos. Primary technologies include: MySQL, sequelize ORM, jQuery, javascript, html/css, express and npm packages, express handlebars, passport and Heroku. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/Group-Project-2-Databases" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://radiant-harbor-21312.herokuapp.com/" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Game City</CardTitle>
            <CardText>
              An application allowing for the user to research current video game data including rating, images, platforms and release date. Uses Twitch API in coherence with Rawg API, including html/css, AJAX, javascript, jQuery and npm packages. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/Project-Three-Repo" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://mantislanguage.github.io/Group-Project-1-API/index.html" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
    //   Begin Private Tab
    } else if(this.state.activeTab === 1) {
        return(
            <div className="projects">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Clicky Game</CardTitle>
            <CardText>
              A memory test game played by clicking images without repeating the same image. Images will cycle. Created with react, javascript, jQuery, html/css, Heroku and npm packages. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/Clicky-Game" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://desolate-reaches-01433.herokuapp.com/" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Eat Da Burger</CardTitle>
            <CardText>
              Create and eat burgers of your choosing in a responsive menu app. Created with javascript, jQuery, html/css, npm packages, handlebars and Heroku.  
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/burger" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://quiet-wave-93756.herokuapp.com/" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Friend Finder</CardTitle>
            <CardText>
              A quiz based friend matching app, the user may upload an image and their name then complete the quiz to see their respective friend matches. Created with javascript, jQuery, npm and express packages, html/css, and Heroku. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/Friend-Finder" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://morning-river-56371.herokuapp.com/" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          <br></br>
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Bamazon</CardTitle>
            <CardText>
            A command line based digital store made using jquery, mysql workbench, inquirer/mysql packages, and node. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/Bamazon" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://www.youtube.com/watch?v=8q-UwWXfOtc" taget="_blank" className="aLive"> Demo Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
            {/* Project 5 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Liri Bot</CardTitle>
            <CardText>
            A command line based song, concert, movie and artist research bot. Used to find concerts, artists, movies and songs based on your search queries. Created using Spotify, OMDB, Bandsintown API's, and the following technologies: dotenv, fs package, moment package, and axios package. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/LIRI-Bot" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://www.youtube.com/watch?v=_TGPGdVrhPc" taget="_blank" className="aLive"> Demo Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
             {/* Project 6 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Train Scheduler</CardTitle>
            <CardText>
             Train Scheduling website used to add and monitor train schedules. Created with javascript, jQuery, html/css. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/Train-Scheduler" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://mantislanguage.github.io/Train-Scheduler/" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
             {/* Project 7 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >GifTastic</CardTitle>
            <CardText>
             A GIF search engine created using html/css, javascript, jQuery, AJAX and GIPHY API. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/GifTastic" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://mantislanguage.github.io/GifTastic/" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
            {/* Project 8 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Trivia Game</CardTitle>
            <CardText>
             Trivia quiz on Octopuses made with html/css, jQuery and javascript. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/MantisLanguage/TriviaGame" taget="_blank" className="aGitHub"> GitHub </a>
             <a href="https://mantislanguage.github.io/TriviaGame/" taget="_blank" className="aLive"> Live Link </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
            </div>
            )
    } 
 else if(this.state.activeTab === 2) {
    return (
      <div><h1>This is VueJS</h1></div>
    )
    
  }}
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab className="projectTabs">Group Work</Tab>
          <Tab className="projectTabs">Private</Tab>
          <Tab className="projectTabs">Professional</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Private;