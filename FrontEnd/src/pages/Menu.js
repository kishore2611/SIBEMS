import React, {Component} from 'react';

import './Style.css';
import Sidebar from './Sidebar';
import { Card, CardGroup} from 'react-bootstrap';
import ab1 from '../pages/images/ab1.jpg';
import ab2 from '../pages/images/ab2.jpg';
import ab3 from '../pages/images/ab3.jpg';






export default class menu extends Component {

  render(){
  
  return (
    <div>
        
        <React.StrictMode>
          <Sidebar/>
        </React.StrictMode>
        
        <div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Services</h1>
                {/* <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button type="button" className="btn btn-sm btn-outline-success">Share</button>
                    <button type="button" className="btn btn-sm btn-outline-success">Export</button>
                  </div>
                  
                </div> */}
              </div>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={ab2} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer> */}
                </Card>
                <Card>
                  <Card.Img variant="top" src={ab1} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                    </Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer> */}
                </Card>
                <Card>
                  <Card.Img variant="top" src={ab3} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to
                      show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer> */}
                </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={ab2} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
              </Card>
              <Card>
                <Card.Img variant="top" src={ab1} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
              </Card>
              <Card>
                <Card.Img variant="top" src={ab3} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
              </Card>
            </CardGroup>          
            </main>
            
        </div>
      </div>
    );
}
}
