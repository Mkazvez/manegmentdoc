import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import {Grid, Paper} from '@material-ui/core';

export default class Dataw extends Component {
    constructor() {
        super()
        this.role = window.localStorage.getItem('in_role')
        this.fio = window.localStorage.getItem('in_fio')
    // if (role !== 'admin') {
    //       replace('/')
    //     }
    }
    render() {
        if (this.role === 'admin') {
            return (
                <div>
                    Это домашняя с данными { this.role } { this.fio }
                </div>
            )} 
        return (
            <div>
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Grid item xs>

                    <h2> { this.fio } Нет доступа к страницы </h2>
                    <Link href="/login" variant="body2">
                    Авторизоваться
                    </Link>
                </Grid>    
              </Grid>  
            </div>

        )    
    }
}
