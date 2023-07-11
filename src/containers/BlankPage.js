import React, { Component } from 'react';
import LayoutContentWrapper from '@tminds/components/utility/layoutWrapper';
import LayoutContent from '@tminds/components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Blank Page</h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
