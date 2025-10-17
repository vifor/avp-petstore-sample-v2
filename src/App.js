import './App.css';
import { Tabs, Text, Card, ThemeProvider, Flex, Authenticator, View } from '@aws-amplify/ui-react';
import { Franchises, Stores, Products } from './pages';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <View>
            <Card>
              <Flex direction="row" justifyContent="space-between">
                <Text fontSize="2em">PetStore</Text>
                <Text fontSize="1em" alignSelf="center">
                  Welcome, {user.username}! <a href="/" onClick={signOut} style={{ color: 'blue' }}>Sign out</a>
                </Text>
              </Flex>
            </Card>
            <Tabs justifyContent="flex-start">
              <Tabs.Item title="Franchises">
                <Franchises />
              </Tabs.Item>
              <Tabs.Item title="Stores">
                <Stores />
              </Tabs.Item>
              <Tabs.Item title="Products">
                <Products />
              </Tabs.Item>
            </Tabs>
          </View>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;