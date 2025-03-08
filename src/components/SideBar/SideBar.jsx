import './SideBar.css'
import avatar from "../../assets/avatar.svg"
function SideBar (){

    return(
        
        <div className="sidebar">
            <img className="sidebar__avatar" src={avatar} alt="Profile Avatar" />
            <p className="sidebar__username">Terrence Tegegne</p>
        </div>

    )

}

export default SideBar