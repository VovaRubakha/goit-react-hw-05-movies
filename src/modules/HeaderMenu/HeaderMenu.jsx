import { NavLink } from 'react-router-dom'


import style from'./headerMenu.module.css'

const getActiveLink = ({isActive}) => {
    return isActive ? `${style.headerLink} ${style.linkActive}` : `${style.headerLink}`
}

const HeaderMenu = () => {
    return (

            <ul className={style.headerList}>
                <li className={style.headerItem}>
                    <NavLink to='/' className={getActiveLink}>Home</NavLink>
                </li>
                <li className={style.headerItem}>
                    <NavLink to='/movies' className={getActiveLink}>Movies</NavLink>
                </li>
            </ul>

    )
}

export default HeaderMenu