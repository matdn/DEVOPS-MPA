import React from 'react';
import { Amplify } from 'aws-amplify';
// import { Button, Flex, ThemeProvider, Theme } from '@aws-amplify/ui-react';

const theme = {
  name: 'button-theme',
  tokens: {
    colors: {
      border: {
        // this will affect the default button's border color
        primary: { value: 'black' },
      },
    },
    components: {
      button: {
        // this will affect the font weight of all button variants
        fontWeight: { value: '{fontWeights.extrabold}' },
        backgroundColor: { value: '#f1fff5' },
        borderColor: { value: '{colors.purple.80}' },
        color: { value: '{colors.purple.100}' },
        outlined: {
          info: {
            borderColor: '{colors.purple.60}',
            color: '{colors.purple.90}',
          },
        },

        // style the primary variation
        primary: {
          backgroundColor: { value: '{colors.blue.60}' },
          _hover: {
            backgroundColor: { value: '{colors.blue.80}' },
          },
          _focus: {
            backgroundColor: { value: '{colors.blue.80}' },
          },
          _active: {
            backgroundColor: { value: '{colors.blue.90}' },
          },
          _disabled: {
            backgroundColor: { value: 'transparent' },
            borderColor: { value: '{colors.neutral.30}' },
          },
          error: {
            backgroundColor: { value: '{colors.pink.10}' },
            color: { value: '{colors.red.80}' },
            _hover: {
              backgroundColor: { value: '#a51b34' },
            },
            _focus: {
              backgroundColor: { value: '#9a0c26' },
            },
            _active: {
              backgroundColor: { value: '#9a0c26' },
            },
          },
        },
      },
    },
  },
};

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  
  return (
    <Authenticator>
      
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}