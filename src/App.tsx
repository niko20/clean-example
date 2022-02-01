import { Layout, Modal } from '@cornershop/chirimoya-react';
import React from 'react';
import { CounterView } from './counter/view';
import {
  ChirimoyaTheme,
  NavigationBar,
  NavigationItem,
  Toolbar,
  SearchBar,
} from '@cornershop/chirimoya-react';

function App() {
  return (
    <ChirimoyaTheme>
      <Layout variant="small">
        <Layout.Header>
          <NavigationBar>
            <NavigationBar.Leading>
              <NavigationItem variant="label">
                <NavigationItem.LeadingIcon icon="Menu" navRole="primary" />
              </NavigationItem>
              <span>NX Template App</span>
            </NavigationBar.Leading>
          </NavigationBar>
          <Toolbar>
            <Toolbar.Leading>
              <SearchBar />
            </Toolbar.Leading>
            <Toolbar.Trailing>
              <NavigationItem
                navRole="primary"
                alignContent="center"
                variant="label"
              >
                <NavigationItem.LeadingIcon icon="CircleAddAlternate" />
                New Counter
              </NavigationItem>
            </Toolbar.Trailing>
          </Toolbar>
        </Layout.Header>
        <Layout.Content>
          <CounterView />
        </Layout.Content>
      </Layout>
    </ChirimoyaTheme>
  );
}

export default App;
