import './Nav.css'

function Nav(props) // Параметры передаются через props в любом количестве
{
    return (
        <nav>
            <ul>
                {
                    Object.keys(props.menu).map
                    (
                        element =>
                        {
                            return(
                                <li>
                                    <a href={props.menu[element]}>{element}</a>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </nav>
    )
}
export default Nav;