import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import appActions from '@tminds/redux/app/actions';
import TopbarWrapper from './Topbar.styles';
import TopbarUser from './TopbarUser';
const { Header } = Layout;
const { toggleCollapsed } = appActions;

export default function Topbar() {
  const [selectedItem, setSelectedItem] = React.useState('');
  const customizedTheme = "defaultTheme";
  const { collapsed, openDrawer } = useSelector(state => state.App);
  const dispatch = useDispatch();
  const handleToggle = React.useCallback(() => dispatch(toggleCollapsed()), [
    dispatch,
  ]);
  const isCollapsed = collapsed && !openDrawer;
  const styling = {
    background: customizedTheme.backgroundColor,
    position: 'fixed',
    width: '100%',
    height: 50,
  };
  return (
    <TopbarWrapper>
      <Header
        style={styling}
        className={
          isCollapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
        }
      >
        <div className="isoLeft">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: { fontSize: "20px" },
            onClick: () => handleToggle(),
          })}
        </div>

        <ul className="isoRight">
          <li className="isoSearch">
          </li>

          <li
            onClick={() => setSelectedItem('notification')}
            className={selectedItem ? 'isoNotify active' : 'isoNotify'}
          >

          </li>

          <li onClick={() => setSelectedItem('message')} className="isoMsg">

          </li>
          <li onClick={() => setSelectedItem('addToCart')} className="isoCart">

          </li>

          <li onClick={() => setSelectedItem('user')} className="isoUser">
            <TopbarUser />
          </li>
        </ul>
      </Header>
    </TopbarWrapper>
  );
}
