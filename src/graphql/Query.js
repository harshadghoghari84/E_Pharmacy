import { gql } from "@apollo/client";

export default {
  userDetail: gql`
    query UserDetail {
      userDetail {
        email
        fName
        lName
        mobile
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
    query GetCategoryProduct($mainId: Int!) {
      getCategoryProduct(mainId: $mainId) {
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
};
