import React, { Component } from 'react';
import {  Card, CardTitle, CardText } from 'react-mdl';


class Projects extends Component {


  render() {
    return(
      <div >
        <div className="row p-3">
          <Card shadow={5} style={{margin: '20px'}}>
          <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
            <CardText>
            <h5>ReactJS Project</h5>
            ReactJS is used to make the website interface more responsive and interactive.
            Different components are created to render different modules in the application. Learned
            how to deploy the application in gh-pages after building react the application and using
            bootstrap to make the application more attractive.
            </CardText>
          </Card>
        
          <Card shadow={5} style={{margin: '20px'}}>
          <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://img.icons8.com/color/2x/nodejs.png) center / cover'}} ></CardTitle>
            <CardText>
              <h5>NodeJS Project</h5>
              NodeJS is used to make different APIs that can be used in giving a response action
              behavior from the backend to the request got from the front end and its main aim is to
              manage the data of the user and store all the transactions details and can check the current
              status of the user account. Transactions like credit, transfer, and debit are included, learned
              how to use Postman, MAMP, JSON library, MySQL, Middleware framework, and connecting
              API with the database.
              </CardText>
          </Card>

          <Card shadow={5} style={{margin: '20px'}}>
          <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://img.icons8.com/color/2x/python.png) center / cover'}} ></CardTitle>
            <CardText>
            <h5>Python Project</h5>
            Python Programming is used as it has packages to make UI based Interface and its
            main aim was to give the information of a courier to the user and can track his courier,
            learned how to build UI based application using the python language and how to import the
            images into the application and designing the interface attractive.
            </CardText>
          </Card>

          <Card shadow={5} style={{margin: '20px'}}>
          <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://img.icons8.com/color/2x/html-5.png) center / cover'}} ></CardTitle>
            <CardText>
            <h5>HTML/CSS/JS Project</h5>
            HTML, Javascript, CSS. make the structure for website HTML used, CSS for styling and
            java scripting for responding to request of the user and its main aim was to give the
            information for the user like bank schemes, balance inquiry, creating a new account, loans
            availability, money transfer, etc., learned how to respond to the request of the user and
            designing the website more attractive and user friendly.
            </CardText>
          </Card>
        </div>
        <div className="Footer" style={{textAlign:"center"}}>
        <h6>  Copyrights © reserved by kalyan-sai</h6>
        </div>
      </div>
    )
  }
}

export default Projects;