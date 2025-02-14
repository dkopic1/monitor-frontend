import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import menuIcon from '../../../assets/icons/menu.png';
import { setMenuExpanded } from "../../../store/modules/menu";

function NavDrawer({ push, menuItems, isMenuExpanded, setMenuExpanded }) {

    const switchRoute = (link) => {
        push(link);
    };

    return (
        <div className='menu'>
            <div className='app-title'>
                {isMenuExpanded && <span>Monitor</span>}
                <img src={menuIcon} onClick={() => setMenuExpanded(!isMenuExpanded)}/>
            </div>
            <div>
                {isMenuExpanded && menuItems
                    .map((item, i) => {
                        return (
                            <div className='menu-item'
                                 key={i}
                                 id={i}
                                 onClick={() => switchRoute(item.link)}>
                                {item.name}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default connect(state => {
    return {
        menuItems: state.menu.items,
        isMenuExpanded: state.menu.isMenuExpanded,
        access_level: 0,    // TODO
    };
}, { push, setMenuExpanded })(NavDrawer);
