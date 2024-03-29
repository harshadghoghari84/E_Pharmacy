import { gql } from "@apollo/client";

export default {
  userDetail: gql`
   query UserDetail {
  userDetail {
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
    email
    mobile
    lName
    fName
  }
}
  `,
  navBarCatagory: gql`
    query AllCategories {
      allCategories {
        id
        name
        sub_categories {
          id
          name
        }
      }
    }
  `,
  productByCatogary: gql`
    query GetCategoryProduct($mainId: Int!, $subId: Int) {
      getCategoryProduct(mainId: $mainId, subId: $subId) {
        brand
        delivery_time_max
        delivery_time_min
        id
        img_url
        in_pack
        indication
        ingredient
        main_cate_id
        manufacturer
        medicine_details {
          id
          med_type
          piece
          price
          product_id
          weight
          weight_type
        }
        pack_type
        sku
        status
        sub_cate_id
        title
        type
      }
    }
  `,
  getSelectedProduct: gql`
    query GetSelectedProduct($productId: Int!) {
      getSelectedProduct(productId: $productId) {
        relatedProduct {
          brand
          delivery_time_max
          delivery_time_min
          id
          img_url
          in_pack
          indication
          ingredient
          main_cate_id
          manufacturer
          medicine_details {
            id
            med_type
            piece
            price
            product_id
            weight
            weight_type
          }
          pack_type
          sku
          status
          status
          sub_cate_id
          title
          type
        }
        selectedProduct {
          brand
          delivery_time_max
          delivery_time_min
          id
          img_url
          in_pack
          indication
          ingredient
          manufacturer
          main_cate_id
          medicine_details {
            id
            med_type
            piece
            price
            product_id
            weight
            weight_type
          }
          pack_type
          sku
          status
          sub_cate_id
          title
          type
        }
      }
    }
  `,
  viewCart: gql`
    query ViewCart {
      viewCart {
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
};
