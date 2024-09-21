"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import styles from "./SignUp.module.css";

Amplify.configure(outputs);

export default function SignUp() {
  return (
    <div className={styles.container}>
      <Authenticator initialState="signUp">
        {({ signOut, user }) => (
          <div>
            {user ? (
              <div>
                <h1>Welcome, {user.username}!</h1>
                <button onClick={signOut}>Sign Out</button>
              </div>
            ) : (
              <h1>Please sign up</h1>
            )}
          </div>
        )}
      </Authenticator>
    </div>
  );
}
