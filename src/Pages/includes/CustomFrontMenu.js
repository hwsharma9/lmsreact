import React from 'react'
import { Link } from 'react-router-dom';
import { CreateMenuTree } from '../../Utilities/utils';

function CreateMenuTreeHtml({ menus }) {
    return <>
        {menus.length > 0 ? menus.map(menu => <li
            className={menu.children.length ? 'dropdown' : ''}
            key={menu.id}>
            <Link to={!['#', '/'].includes(menu.controller_name) ? 'lms/' + menu.controller_name : '/'}>
                {menu.title_en}
            </Link>
            {
                (menu.children.length) ?
                    <ul
                        className={menu.children.length ? 'fref' : ''}
                        style={{ listStyle: 'none' }}><CreateMenuTreeHtml menus={menu.children} /></ul>
                    : ''
            }
        </li>) : ''}
    </>
}

function CustomFrontMenu(props) {
    const json_tree = CreateMenuTree(props.menus, 0);
    return (
        <ul className='main-menu__list'><CreateMenuTreeHtml menus={json_tree} /></ul>
    )
}

export default CustomFrontMenu;