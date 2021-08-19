import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import {Grid, Paper} from '@material-ui/core';
import axios from 'axios';
import DataGrid, { Column, Pager, Paging, Export, FilterRow, FilterPanel, HeaderFilter, Scrolling, Selection} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
 
//const columns = ['dateload', 'inqty', 'noqty', 'resultqty', 'innotqty', 'shareprocent'];

export default class Reports extends Component {
    "use strict";
    constructor() {
        super()
        this.role = window.localStorage.getItem('in_role')
        this.fio = window.localStorage.getItem('in_fio')
        this.state = {
          reportgeneral: [],
          allMode: 'allPages',
          checkBoxesMode: 'onClick'
        };
        this.onCheckBoxesModeChanged = this.onCheckBoxesModeChanged.bind(this);
        this.onAllModeChanged = this.onAllModeChanged.bind(this);
    // if (role !== 'admin') {
    //       replace('/')
    //     }
    }
  
      componentDidMount() {
        axios.get(`api/reportgenerals`)  
          .then(res => {
            const reportgeneral= res.data;
            this.setState({ reportgeneral });
          })
      }
    
    render() {
      const { allMode, checkBoxesMode } = this.state;
      
      if (this.role === 'admin') {
            return (
                <div>
                  <DataGrid
                      style={{ height: '80vh' }}
                      dataSource= {this.state.reportgeneral}
  //                    defaultColumns={columns}
                      showBorders={true}
                      columnsAutoWidth="true"
                  >
                  <Selection
                    mode="multiple"
                    selectAllMode={allMode}
                    showCheckBoxesMode={checkBoxesMode}
                  />

                    <FilterRow visible={true} />
                    <FilterPanel visible={true} />
                    <HeaderFilter visible={true} />
                    <Scrolling mode="infinite" />
                    <Paging defaultPageSize={20} />
                    <Pager
                        showPageSizeSelector={true}
                        allowedPageSizes={[5, 10, 20]}
                        showInfo={true} />
                    <Column format='dd.MM.yyyy' dataType='date' dataField='dateload' caption='Дата'/>
                    <Column dataField='inqty' caption='Заявка'/>
                    <Column datatype='date' dataField='noqty' caption='Не пришло'/>
                    <Column datatype='date' dataField='resultqty' caption='Результат'/>
                    <Column datatype='date' dataField='innotqty' caption='Пришло не в заявку'/>
                    <Column dataField='shareprocent' caption='Процент'/>
                    <Export enabled={true} allowExportSelectedData={true} />
                  </DataGrid>  
                </div>
            )
          } 
        return (
            <div>
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Grid item xs>

                    <h2> { this.fio } Нет доступа к странице </h2>
                    <Link href="/login" variant="body2">
                        Авторизоваться
                    </Link>
                </Grid>    
              </Grid>  
            </div>

        )    
     }
  onCheckBoxesModeChanged({ value }) {
      this.setState({ checkBoxesMode: value });
    }
  
  onAllModeChanged({ value }) {
      this.setState({ allMode: value });
    }   
}
