import React, {Component} from 'react'
import './ProjectManagement.css'

class ProjectManagementApp extends Component{

    render(){
        return (
            <div className="ProjectManagmentApp">
                MyProject Management App
            </div>
        )
    }

}

export class LoginComponent extends Component{

    render(){
        return (
            <div>
            User Name: <input type ="text" name = "username"/>
            Password: <input type ="password" name = "password"/>
            <button>Login</button>
            </div>

        )
    }

}

export default ProjectManagementApp