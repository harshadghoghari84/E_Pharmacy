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
        mobile
        lName
        fName
        email
        billing_detail {
          id
          userId
          fName
          lName
          companyName
          address
          city
          postcode
          state
          country
          phoneNo
          email
        }
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
  mutation CheckOutOrder($fName: String!, $lName: String!, $address: String!, $city: String!, $postcode: Int!, $state: String!, $country: String!, $phoneNo: String!, $email: String!, $orderItems: [orderItem]!, $companyName: String, $fName2: String, $lName2: String, $companyName2: String, $address2: String, $city2: String, $postcode2: Int, $state2: String, $country2: String, $orderNotes: String) {
    checkOutOrder(fName: $fName, lName: $lName, address: $address, city: $city, postcode: $postcode, state: $state, country: $country, phoneNo: $phoneNo, email: $email, orderItems: $orderItems, companyName: $companyName, fName2: $fName2, lName2: $lName2, companyName2: $companyName2, address2: $address2, city2: $city2, postcode2: $postcode2, state2: $state2, country2: $country2, orderNotes: $orderNotes) {
      id
      create_time
      transactions {
        amount {
          currency
          total
        }
      }
      links {
        href
        method
        rel
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
};
