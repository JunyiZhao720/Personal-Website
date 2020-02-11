import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    state ={
        selection: 3,

        options: [
            {id: 0, value: "Home", link: "/"},
            {id: 1, value: "Profile", link: "/profile"},
        ]
    }

    formatSelection(id){
        const{ selection } = this.state;
        let format = "nav-link";
        if (selection === id) return format + " active";

        return format;
    }

    handleSelect = (id) => {
        this.setState({selection: id});
    }

    render() { 
        return (  
            <nav className="nav nav-masthead justify-content-center">
                {this.state.options.map(opt => 
                    <Link 
                    className={this.formatSelection(opt.id)} 
                    to={opt.link} 
                    key={opt.id} 
                    onClick={()=>this.handleSelect(opt.id)} >

                        {opt.value}
                    
                    </Link>
                )}
            </nav>);
    }
}
 
export default NavBar;