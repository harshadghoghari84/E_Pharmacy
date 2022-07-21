import { gql } from "@apollo/client";

export default {
  userSignup: gql`
    mutation UserSignUp(
      $fName: String!
      $lName: String!
      $mobile: String!
      $email: String!
      $password: String!
    ) {
      userSignUp(
        fName: $fName
        lName: $lName
        mobile: $mobile
        email: $email
        password: $password
      )
    }
  `,
  userSignIn: gql`
    mutation UserSingIn($mobile: String!, $password: String!) {
      userSingIn(mobile: $mobile, password: $password) {
        msg
        token
        user {
          email
          fName
          lName
          mobile
        }
      }
    }
  `,
};
