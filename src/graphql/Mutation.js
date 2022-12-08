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
  addToCart: gql`
    mutation AddToCart($medicineId: Int!, $qty: Int!) {
      addToCart(medicineId: $medicineId, qty: $qty) {
        cartItems {
          id
          sku
          title
          medicine_detail {
            id
            price
            cart_master {
              id
              qty
              subtotal
            }
          }
        }
        countryList {
          country
          currency
          id
          shipping_charge
        }
      }
    }
  `,
  removeCartItem: gql`
    mutation RemoveCartItem($removeCartItemId: Int!) {
      removeCartItem(id: $removeCartItemId)
    }
  `,
  checkoutOrder: gql`
    mutation CheckOutOrder(
      $fName: String!
      $lName: String!
      $address: String!
      $city: String!
      $postcode: Int!
      $state: String!
      $country: String!
      $phoneNo: String!
      $email: String!
      $orderItems: [orderItem]!
    ) {
      checkOutOrder(
        fName: $fName
        lName: $lName
        address: $address
        city: $city
        postcode: $postcode
        state: $state
        country: $country
        phoneNo: $phoneNo
        email: $email
        orderItems: $orderItems
      ) {
        create_time
        id
        links {
          href
          method
          rel
        }
        transactions {
          amount {
            currency
            total
          }
        }
      }
    }
  `,
  updateCart: gql`mutation UpdateCart($updateCartId: Int!, $qty: Int) {
    updateCart(id: $updateCartId, qty: $qty)
  }`,
  confirmPayment: gql`mutation ConfirmPayment($paymentId: String!, $total: String!, $currency: String!, $href: String!, $rel: String!) {
    confirmPayment(paymentId: $paymentId, total: $total, currency: $currency, href: $href, rel: $rel)
  }`
  // checkoutOrder:gql`mutation CheckOutOrder($fName: String!, $lName: String!, $address: String!, $city: String!, $postcode: Int!, $state: String!, $country: String!, $phoneNo: String!, $email: String!, $orderItems: [orderItem]!) {
  //   checkOutOrder(fName: $fName, lName: $lName, address: $address, city: $city, postcode: $postcode, state: $state, country: $country, phoneNo: $phoneNo, email: $email, orderItems: $orderItems) {
  //     id
  //     create_time
  //     transactions {
  //       amount {
  //         total
  //         currency
  //       }
  //     }
  //     links {
  //       href
  //       rel
  //       method
  //     }
  //   }
  // }`
};
