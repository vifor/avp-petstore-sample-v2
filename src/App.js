import './App.css';
import { Tabs, Text, Card, Loader, ThemeProvider, Flex, Authenticator, View } from '@aws-amplify/ui-react';
import { Franchises, Stores, Products } from './pages'; // Suponiendo que estos componentes existen
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

// Note: The original file did not have a definition for Franchises, Stores, and Products.
// To make the code functional, we add some simple placeholder components.
// If these files exist in the /pages folder, this part is not necessary.
const Placeholder = ({ name }) => <Card><Text>{name} content will be displayed here.</Text></Card>;
const Franchises = () => <Placeholder name="Franchises" />;
const Stores = () => <Placeholder name="Stores" />;
const Products = () => <Placeholder name="Products" />;

export default App;