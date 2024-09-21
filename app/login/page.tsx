"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthUser } from "../types/auth-types";
import { useAuth } from "../context/AuthContext";

Amplify.configure(outputs);

export default function Login() {
  const router = useRouter();
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const { updateUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      updateUser();
      router.push("/");
    }
  }, [authUser, router, updateUser]);

  return (
    <div className={styles.container}>
      <Authenticator initialState="signIn">
        {({ signOut, user }) => {
          if (user) {
            setAuthUser(user);
          } else {
            setAuthUser(null);
          }

          return (
            <div>
              {user ? (
                <div>
                  <h1>Welcome back, {user.username}!</h1>
                  <button onClick={signOut}>Sign Out</button>
                </div>
              ) : (
                <h1>Please log in</h1>
              )}
            </div>
          );
        }}
      </Authenticator>
    </div>
  );
}
