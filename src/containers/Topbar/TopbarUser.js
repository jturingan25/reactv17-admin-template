import React from 'react';
import { useDispatch } from 'react-redux';
import Popover from '@tminds/components/uielements/popover';
import IntlMessages from '@tminds/components/utility/intlMessages';
import { UserOutlined } from '@ant-design/icons'
import authAction from '@tminds/redux/auth/actions';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

const { logout } = authAction;

export default function TopbarUser() {
  const [visible, setVisibility] = React.useState(false);
  const dispatch = useDispatch();
  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = (
    <TopbarDropdownWrapper className="isoUserDropdown">
      <div className="isoDropdownLink" onClick={() => dispatch(logout())}>
        <IntlMessages id="topbar.logout" />
      </div>
    </TopbarDropdownWrapper>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      arrowPointAtCenter={true}
      placement="bottomLeft"
    >
      <div className="isoImgWrapper">
        <UserOutlined style={{fontSize: '20px'}} />
        <span className="userActivity online" />
      </div>
    </Popover>
  );
}
