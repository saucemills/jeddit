"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Authenticator>{({ signOut, user }) => <>{children}</>}</Authenticator>
  );
}
