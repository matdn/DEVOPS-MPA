import React from "react";
import { Amplify } from "aws-amplify";
// import { Button, Flex, ThemeProvider, Theme } from '@aws-amplify/ui-react';

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// import awsExports from '../src/aws-exports';
// import awsExports from "./aws-exports";
Amplify.configure({
  aws_project_region: "eu-west-1",
  aws_dynamodb_all_tables_region: "eu-west-1",
  aws_dynamodb_table_schemas: [
    {
      tableName: "User-devarthur",
      region: "eu-west-1",
    },
  ],
});

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
