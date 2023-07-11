import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import useWindowSize from '@tminds/lib/hooks/useWindowSize';
import appActions from '@tminds/redux/app/actions';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import AppRoutes from './AppRoutes';

import { AppContainer, AppGlobalStyles } from './App.styles';

const { Content } = Layout;
const { toggleAll } = appActions;
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '70px 0 0',
    flexShrink: '0',
    background: '#f1f3f6',
    position: 'relative',
  },
  footer: {
    background: '#ffffff',
    textAlign: 'center',
    borderTop: '1px solid #ededed',
  },
};

export default function MainApp() {
  const dispatch = useDispatch();
  const appHeight = useSelector((state) => state.App.height);
  const { width, height } = useWindowSize();

  React.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);
  return (
    <AppContainer>
      <AppGlobalStyles />
      <Layout style={{ height: height }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout
            className="isoContentMainLayout"
            style={{
              height: appHeight,
            }}
          >
            <Content className="isomorphicContent" style={styles.content}>
              <AppRoutes />
            </Content>
           {/* <Footer style={styles.footer}>{siteConfig.footerText}</Footer>*/}
          </Layout>
        </Layout>
      </Layout>
    </AppContainer>
  );
}
