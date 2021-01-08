import  { Component } from 'react';
import { DeleteOutlined,EditOutlined} from   '@ant-design/icons';
import './table.css';
import { Modal, Button,Form, Input } from 'antd';

class Foods  extends Component {
    state = {
        visible: false,
        loading: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
      

    

    render() { 
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };
        const { visible } = this.state;
        return(
            <>
           
            <div className=" container">
                <div className="row" >
                    <div className="col-md-12 ">
                        <div class="header nav justify-content-between">
                            <h3>Категории</h3>
                            <div className="category">
                                <a href="#" onClick={this.showModal} className="text-white  btn btn-lg btn-sm-block  btn-raised">Добавить категория</a>
                                <Modal
                                    visible={this.state.visible}
                                    title = {
                                        <div className='card-header text-start'>
                                                <h3 className='text-white ml-3 '>Добавить категория</h3>
                                        </div>
                                    }
                                    
                                   
                                    >
                                     <div className='card-body'>
                                        <Form>
                                                <div className = "username">
                                                <Form.Item className="label_one"
                                            label="Название категория (RU)"
                                            name="Название категория (RU)"
                                            
                                        >
                                        <Input placeholder="Введите ..."/>
                                        <p className='text-danger ml-5'>Поле должна быть заполнена</p>
                                        </Form.Item>
                                        <Form.Item className="label_two"
                                        label=" Kategoriya nomi (UZ)"
                                        name="Kategoriya nomi (UZ)"
                                        >
                                        <Input  placeholder="Введите ..." type="text" className="password"/>
                                        <p className='text-danger ml-5'>Maydon to'ldirilishi shart </p>
                                        </Form.Item>
                                        <div className="button">
                                        <Form.Item {...tailLayout} >
                                            <div className="nav bottom">
                                            <Button onClick={this.handleCancel} className=" mt-3 cancel"  htmlType="button">
                                            Отмена
                                            </Button>
                                            <Button onClick={this.handleCancel} className="text-white mt-3 add"  htmlType="button">
                                            Добавить 
                                            </Button>
                                            </div>
                                        </Form.Item>
                                        </div>
                                        </div>
                                        </Form>
                                        </div>
                                    </Modal>
                            </div>
                        </div>
                        <div className="navbar mt-4">
                            <div className="table-responsive">
                                <table className="table table-hover text-center">
                                    <thead className="background">
                                        <tr>
                                            <th scope='col'>№</th>
                                            <th scope='col'>Название (ру)</th>
                                            <th scope='col'>Название (uz)</th>
                                            <th className='mr-5 icon-slice' scope='col'>Действие</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='fontweight'>1</td>
                                            <td className='fontweight'>Наборы</td>
                                            <td className='fontweight'>To'plamlar</td>
                                            <td>
                                            <div className='nav icons'>
                                                <div className='delete_icon text-white'><EditOutlined /></div>
                                                <div className='edit_icon text-white '><DeleteOutlined /></div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fontweight'>2</td>
                                            <td className='fontweight'>Противни</td>
                                            <td className='fontweight'>Qarshi</td>
                                            <td>
                                            <div className='nav icons'>
                                                <div className='delete_icon text-white'><EditOutlined /></div>
                                                <div className='edit_icon text-white '><DeleteOutlined /></div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fontweight'>3</td>
                                            <td className='fontweight'>Ковши</td>
                                            <td className='fontweight'>Ковши</td>
                                            <td>
                                            <div className='nav icons'>
                                                <div className='delete_icon text-white'><EditOutlined /></div>
                                                <div className='edit_icon text-white '><DeleteOutlined /></div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fontweight'>4</td>
                                            <td className='fontweight'>Ковши</td>
                                            <td className='fontweight'>Ковши</td>
                                            <td>
                                            <div className='nav icons'>
                                                <div className='delete_icon text-white'><EditOutlined /></div>
                                                <div className='edit_icon text-white '><DeleteOutlined /></div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fontweight'>5</td>
                                            <td className='fontweight'>Блинницы</td>
                                            <td className='fontweight'>Блинницы</td>
                                            <td>
                                            <div className='nav icons'>
                                                <div className='delete_icon text-white'><EditOutlined /></div>
                                                <div className='edit_icon text-white '><DeleteOutlined /></div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fontweight'>6</td>
                                            <td className='fontweight'>Грили</td>
                                            <td className='fontweight'>Грили</td>
                                            <td>
                                            <div className='nav icons'>
                                                <div className='delete_icon text-white'><EditOutlined /></div>
                                                <div className='edit_icon text-white '><DeleteOutlined /></div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fontweight'>6</td>
                                            <td className='fontweight'>Грили</td>
                                            <td className='fontweight'>Грили</td>
                                            <td>
                                            <div className='nav icons'>
                                                <div className='delete_icon text-white'><EditOutlined /></div>
                                                <div className='edit_icon text-white '><DeleteOutlined /></div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fontweight'>6</td>
                                            <td className='fontweight'>Грили</td>
                                            <td className='fontweight'>Грили</td>
                                            <td>
                                            <div className='nav icons'>
                                                <div className='delete_icon text-white'><EditOutlined /></div>
                                                <div className='edit_icon text-white '><DeleteOutlined /></div>
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>



          
        
            
           
            </>
        )
        
       
    }
}
 
export default Foods;