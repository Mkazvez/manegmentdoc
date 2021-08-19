//import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from './c1.png';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import About from '../pages/About';
import Reports from '../pages/Reports';
import Dataw from '../pages/Dataw';
//import Registration from '../pages/RegistrationForm'
import Login from '../pages/Login';
import reg from '../pages/reg';
import result from '../pages/Result';

export default class Header extends Component {
    constructor() {
        super()
        this.role = window.localStorage.getItem('in_role')
        this.fio = window.localStorage.getItem('in_fio')
    }
    render() {
        return (
            <>
                <Navbar fixet="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> КОВИД 2019 статистика
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Домой </Nav.Link>
                                <Nav.Link href="/about"> О нас </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                                <Nav.Link href="/dataw"> Данные </Nav.Link>
                                <Nav.Link href="/reports"> Отчеты </Nav.Link>
                            </Nav>
                            {/* <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Поиск</Button>
                            </Form> */}
                            <Nav className="mr-auto">
                                <Nav.Link href="/login"> Войти </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Form inline >
                            <Form.Label style={{color: '#ffffff'}}> Пользователь { this.fio } </Form.Label>
                        </Form>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/dataw" component={Dataw} />
                        <Route exact path="/reports" component={Reports} />
                        <Route exact path="/login" component={reg} />
                        <Route exact path="/reg" component={reg} />
                        <Route exact path="/result" component={result} />
                    </Switch>
                </Router>
            </>
        )
    } 
}