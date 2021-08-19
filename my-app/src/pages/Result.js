import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import {Grid, Paper} from '@material-ui/core';
import axios, { post } from 'axios';
import DataGrid, { Column, Pager, Paging, Export, FilterRow, FilterPanel, HeaderFilter, Scrolling, Selection} from 'devextreme-react/data-grid';
import FileUploader from 'devextreme-react/file-uploader';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { ContactSupportOutlined } from '@material-ui/icons';
import FileUpload from '../Components/fileupload';
import { Box, Typography, Button, ListItem, withStyles } from '@material-ui/core';


//const columns = ['dateload', 'inqty', 'noqty', 'resultqty', 'innotqty', 'shareprocent'];

export default class Result extends Component {
    "use strict";
    constructor() {
        super()
        this.role = window.localStorage.getItem('in_role')
        this.fio = window.localStorage.getItem('in_fio')
        this.state = {
          reportgeneral: [],
          allMode: 'allPages',
          checkBoxesMode: 'onClick',
          file:null
        };
        this.onCheckBoxesModeChanged = this.onCheckBoxesModeChanged.bind(this);
        this.onAllModeChanged = this.onAllModeChanged.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    // if (role !== 'admin') {
    //       replace('/')
    //     }
    }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
          this.loadTable();

        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'api/results/upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
      }

      loadTable() {
        axios.get(`api/results`)  
          .then(res => {
            const result = res.data;
            this.setState({ result });
          })
          this.setState({file:''})  
      }

      componentDidMount() {
          this.loadTable();
      }
    
    render() {
      const { allMode, checkBoxesMode } = this.state;
      
      if (this.role === 'admin') {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit}>
                            <h1>Загрузка файла</h1>
                            <input type="file" onChange={this.onChange} />
                            <Button type="submit">Загрузить</Button>
                    </form>
                    {/* <div className="App">
                        <FileUpload />
                    </div > */}
                    <DataGrid
                      style={{ height: '80vh' }}
                      dataSource= {this.state.result}
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
                    <Column format='dd.MM.yyyy' dataType='date' dataField='dateResult' caption='Дата результата'/>
                    <Column dataField='Fio' caption='ФИО'/>
                    <Column dataField='Result' caption='Результат'/>
                    <Column dataField='tabel' caption='Табель'/>
                    <Column dataField='adrestest' caption='Адрес теста'/>
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
    onSelectedFilesChanged(e) {
        console.log(e)
    }

    onSelectOptionChanged(e) {
        console.log(2,e)
    }
}

