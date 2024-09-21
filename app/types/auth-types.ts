export interface AuthUser {
  username: string;
  attributes?: {
    email: string;
    // Add any other attributes you might need
  };
  // Add any other properties that might be useful from the Cognito user object
}
