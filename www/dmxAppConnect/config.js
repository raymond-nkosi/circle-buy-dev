dmx.config({
  "index": {
    "WooCommerce": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "id"
          },
          {
            "type": "text",
            "name": "name"
          },
          {
            "type": "text",
            "name": "slug"
          },
          {
            "type": "text",
            "name": "permalink"
          },
          {
            "type": "text",
            "name": "date_created"
          },
          {
            "type": "text",
            "name": "date_created_gmt"
          },
          {
            "type": "text",
            "name": "date_modified"
          },
          {
            "type": "text",
            "name": "date_modified_gmt"
          },
          {
            "type": "text",
            "name": "type"
          },
          {
            "type": "text",
            "name": "status"
          },
          {
            "type": "boolean",
            "name": "featured"
          },
          {
            "type": "text",
            "name": "catalog_visibility"
          },
          {
            "type": "text",
            "name": "description"
          },
          {
            "type": "text",
            "name": "short_description"
          },
          {
            "type": "text",
            "name": "sku"
          },
          {
            "type": "text",
            "name": "price"
          },
          {
            "type": "text",
            "name": "regular_price"
          },
          {
            "type": "text",
            "name": "sale_price"
          },
          {
            "type": "text",
            "name": "date_on_sale_from"
          },
          {
            "type": "text",
            "name": "date_on_sale_from_gmt"
          },
          {
            "type": "text",
            "name": "date_on_sale_to"
          },
          {
            "type": "text",
            "name": "date_on_sale_to_gmt"
          },
          {
            "type": "boolean",
            "name": "on_sale"
          },
          {
            "type": "boolean",
            "name": "purchasable"
          },
          {
            "type": "text",
            "name": "total_sales"
          },
          {
            "type": "boolean",
            "name": "virtual"
          },
          {
            "type": "boolean",
            "name": "downloadable"
          },
          {
            "type": "array",
            "name": "downloads"
          },
          {
            "type": "number",
            "name": "download_limit"
          },
          {
            "type": "number",
            "name": "download_expiry"
          },
          {
            "type": "text",
            "name": "external_url"
          },
          {
            "type": "text",
            "name": "button_text"
          },
          {
            "type": "text",
            "name": "tax_status"
          },
          {
            "type": "text",
            "name": "tax_class"
          },
          {
            "type": "boolean",
            "name": "manage_stock"
          },
          {
            "type": "text",
            "name": "stock_quantity"
          },
          {
            "type": "text",
            "name": "backorders"
          },
          {
            "type": "boolean",
            "name": "backorders_allowed"
          },
          {
            "type": "boolean",
            "name": "backordered"
          },
          {
            "type": "text",
            "name": "low_stock_amount"
          },
          {
            "type": "boolean",
            "name": "sold_individually"
          },
          {
            "type": "text",
            "name": "weight"
          },
          {
            "type": "object",
            "name": "dimensions",
            "sub": [
              {
                "type": "text",
                "name": "length"
              },
              {
                "type": "text",
                "name": "width"
              },
              {
                "type": "text",
                "name": "height"
              }
            ]
          },
          {
            "type": "boolean",
            "name": "shipping_required"
          },
          {
            "type": "boolean",
            "name": "shipping_taxable"
          },
          {
            "type": "text",
            "name": "shipping_class"
          },
          {
            "type": "number",
            "name": "shipping_class_id"
          },
          {
            "type": "boolean",
            "name": "reviews_allowed"
          },
          {
            "type": "text",
            "name": "average_rating"
          },
          {
            "type": "number",
            "name": "rating_count"
          },
          {
            "type": "array",
            "name": "upsell_ids"
          },
          {
            "type": "array",
            "name": "cross_sell_ids"
          },
          {
            "type": "number",
            "name": "parent_id"
          },
          {
            "type": "text",
            "name": "purchase_note"
          },
          {
            "type": "array",
            "name": "categories"
          },
          {
            "type": "array",
            "name": "tags"
          },
          {
            "type": "array",
            "name": "images"
          },
          {
            "type": "array",
            "name": "attributes"
          },
          {
            "type": "array",
            "name": "default_attributes"
          },
          {
            "type": "array",
            "name": "variations"
          },
          {
            "type": "array",
            "name": "grouped_products"
          },
          {
            "type": "number",
            "name": "menu_order"
          },
          {
            "type": "text",
            "name": "price_html"
          },
          {
            "type": "array",
            "name": "related_ids"
          },
          {
            "type": "array",
            "name": "meta_data"
          },
          {
            "type": "text",
            "name": "stock_status"
          },
          {
            "type": "boolean",
            "name": "is_purchased"
          },
          {
            "type": "array",
            "name": "attributesData"
          },
          {
            "type": "object",
            "name": "product_units",
            "sub": [
              {
                "type": "text",
                "name": "weight_unit"
              },
              {
                "type": "text",
                "name": "dimension_unit"
              }
            ]
          },
          {
            "type": "object",
            "name": "wcfm_product_policy_data",
            "sub": [
              {
                "type": "boolean",
                "name": "visible"
              },
              {
                "type": "text",
                "name": "shipping_policy"
              },
              {
                "type": "text",
                "name": "shipping_policy_heading"
              },
              {
                "type": "text",
                "name": "refund_policy"
              },
              {
                "type": "text",
                "name": "refund_policy_heading"
              },
              {
                "type": "text",
                "name": "cancellation_policy"
              },
              {
                "type": "text",
                "name": "cancellation_policy_heading"
              },
              {
                "type": "text",
                "name": "tab_title"
              }
            ]
          },
          {
            "type": "boolean",
            "name": "showAdditionalInfoTab"
          },
          {
            "type": "object",
            "name": "store",
            "sub": [
              {
                "type": "text",
                "name": "vendor_id"
              },
              {
                "type": "text",
                "name": "vendor_display_name"
              },
              {
                "type": "text",
                "name": "vendor_shop_name"
              },
              {
                "type": "text",
                "name": "vendor_email"
              },
              {
                "type": "boolean",
                "name": "disable_vendor"
              },
              {
                "type": "text",
                "name": "is_store_offline"
              },
              {
                "type": "text",
                "name": "email_verified"
              },
              {
                "type": "text",
                "name": "settings"
              },
              {
                "type": "array",
                "name": "vendor_additional_info"
              }
            ]
          },
          {
            "type": "array",
            "name": "_links",
            "sub": [
              {
                "type": "text",
                "name": "href"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "access-control-allow-headers"
          },
          {
            "type": "text",
            "name": "access-control-expose-headers"
          },
          {
            "type": "text",
            "name": "allow"
          },
          {
            "type": "text",
            "name": "cache-control"
          },
          {
            "type": "text",
            "name": "content-encoding"
          },
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "expires"
          },
          {
            "type": "text",
            "name": "link"
          },
          {
            "type": "text",
            "name": "server"
          },
          {
            "type": "text",
            "name": "vary"
          },
          {
            "type": "text",
            "name": "x-content-type-options"
          },
          {
            "type": "text",
            "name": "x-powered-by"
          },
          {
            "type": "text",
            "name": "x-robots-tag"
          },
          {
            "type": "text",
            "name": "x-wp-total"
          },
          {
            "type": "text",
            "name": "x-wp-totalpages"
          }
        ]
      }
    ],
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "slug"
        },
        {
          "type": "text",
          "name": "permalink"
        },
        {
          "type": "text",
          "name": "date_created"
        },
        {
          "type": "text",
          "name": "date_created_gmt"
        },
        {
          "type": "text",
          "name": "date_modified"
        },
        {
          "type": "text",
          "name": "date_modified_gmt"
        },
        {
          "type": "text",
          "name": "type"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "boolean",
          "name": "featured"
        },
        {
          "type": "text",
          "name": "catalog_visibility"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "text",
          "name": "short_description"
        },
        {
          "type": "text",
          "name": "sku"
        },
        {
          "type": "text",
          "name": "price"
        },
        {
          "type": "text",
          "name": "regular_price"
        },
        {
          "type": "text",
          "name": "sale_price"
        },
        {
          "type": "text",
          "name": "date_on_sale_from"
        },
        {
          "type": "text",
          "name": "date_on_sale_from_gmt"
        },
        {
          "type": "text",
          "name": "date_on_sale_to"
        },
        {
          "type": "text",
          "name": "date_on_sale_to_gmt"
        },
        {
          "type": "boolean",
          "name": "on_sale"
        },
        {
          "type": "boolean",
          "name": "purchasable"
        },
        {
          "type": "text",
          "name": "total_sales"
        },
        {
          "type": "boolean",
          "name": "virtual"
        },
        {
          "type": "boolean",
          "name": "downloadable"
        },
        {
          "type": "array",
          "name": "downloads"
        },
        {
          "type": "number",
          "name": "download_limit"
        },
        {
          "type": "number",
          "name": "download_expiry"
        },
        {
          "type": "text",
          "name": "external_url"
        },
        {
          "type": "text",
          "name": "button_text"
        },
        {
          "type": "text",
          "name": "tax_status"
        },
        {
          "type": "text",
          "name": "tax_class"
        },
        {
          "type": "boolean",
          "name": "manage_stock"
        },
        {
          "type": "text",
          "name": "stock_quantity"
        },
        {
          "type": "text",
          "name": "backorders"
        },
        {
          "type": "boolean",
          "name": "backorders_allowed"
        },
        {
          "type": "boolean",
          "name": "backordered"
        },
        {
          "type": "text",
          "name": "low_stock_amount"
        },
        {
          "type": "boolean",
          "name": "sold_individually"
        },
        {
          "type": "text",
          "name": "weight"
        },
        {
          "type": "object",
          "name": "dimensions",
          "sub": [
            {
              "type": "text",
              "name": "length"
            },
            {
              "type": "text",
              "name": "width"
            },
            {
              "type": "text",
              "name": "height"
            }
          ]
        },
        {
          "type": "boolean",
          "name": "shipping_required"
        },
        {
          "type": "boolean",
          "name": "shipping_taxable"
        },
        {
          "type": "text",
          "name": "shipping_class"
        },
        {
          "type": "number",
          "name": "shipping_class_id"
        },
        {
          "type": "boolean",
          "name": "reviews_allowed"
        },
        {
          "type": "text",
          "name": "average_rating"
        },
        {
          "type": "number",
          "name": "rating_count"
        },
        {
          "type": "array",
          "name": "upsell_ids"
        },
        {
          "type": "array",
          "name": "cross_sell_ids"
        },
        {
          "type": "number",
          "name": "parent_id"
        },
        {
          "type": "text",
          "name": "purchase_note"
        },
        {
          "type": "array",
          "name": "categories"
        },
        {
          "type": "array",
          "name": "tags"
        },
        {
          "type": "array",
          "name": "images"
        },
        {
          "type": "array",
          "name": "attributes"
        },
        {
          "type": "array",
          "name": "default_attributes"
        },
        {
          "type": "array",
          "name": "variations"
        },
        {
          "type": "array",
          "name": "grouped_products"
        },
        {
          "type": "number",
          "name": "menu_order"
        },
        {
          "type": "text",
          "name": "price_html"
        },
        {
          "type": "array",
          "name": "related_ids"
        },
        {
          "type": "array",
          "name": "meta_data"
        },
        {
          "type": "text",
          "name": "stock_status"
        },
        {
          "type": "boolean",
          "name": "is_purchased"
        },
        {
          "type": "array",
          "name": "attributesData"
        },
        {
          "type": "object",
          "name": "product_units",
          "sub": [
            {
              "type": "text",
              "name": "weight_unit"
            },
            {
              "type": "text",
              "name": "dimension_unit"
            }
          ]
        },
        {
          "type": "object",
          "name": "wcfm_product_policy_data",
          "sub": [
            {
              "type": "boolean",
              "name": "visible"
            },
            {
              "type": "text",
              "name": "shipping_policy"
            },
            {
              "type": "text",
              "name": "shipping_policy_heading"
            },
            {
              "type": "text",
              "name": "refund_policy"
            },
            {
              "type": "text",
              "name": "refund_policy_heading"
            },
            {
              "type": "text",
              "name": "cancellation_policy"
            },
            {
              "type": "text",
              "name": "cancellation_policy_heading"
            },
            {
              "type": "text",
              "name": "tab_title"
            }
          ]
        },
        {
          "type": "boolean",
          "name": "showAdditionalInfoTab"
        },
        {
          "type": "object",
          "name": "store",
          "sub": [
            {
              "type": "text",
              "name": "vendor_id"
            },
            {
              "type": "text",
              "name": "vendor_display_name"
            },
            {
              "type": "text",
              "name": "vendor_shop_name"
            },
            {
              "type": "text",
              "name": "vendor_email"
            },
            {
              "type": "boolean",
              "name": "disable_vendor"
            },
            {
              "type": "text",
              "name": "is_store_offline"
            },
            {
              "type": "text",
              "name": "email_verified"
            },
            {
              "type": "text",
              "name": "settings"
            },
            {
              "type": "array",
              "name": "vendor_additional_info"
            }
          ]
        },
        {
          "type": "array",
          "name": "_links",
          "sub": [
            {
              "type": "text",
              "name": "href"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": null,
      "outputType": "array"
    },
    "arr1": {
      "meta": null,
      "outputType": "array"
    },
    "api1": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "id"
          },
          {
            "type": "text",
            "name": "name"
          },
          {
            "type": "text",
            "name": "slug"
          },
          {
            "type": "text",
            "name": "permalink"
          },
          {
            "type": "text",
            "name": "date_created"
          },
          {
            "type": "text",
            "name": "date_created_gmt"
          },
          {
            "type": "text",
            "name": "date_modified"
          },
          {
            "type": "text",
            "name": "date_modified_gmt"
          },
          {
            "type": "text",
            "name": "type"
          },
          {
            "type": "text",
            "name": "status"
          },
          {
            "type": "boolean",
            "name": "featured"
          },
          {
            "type": "text",
            "name": "catalog_visibility"
          },
          {
            "type": "text",
            "name": "description"
          },
          {
            "type": "text",
            "name": "short_description"
          },
          {
            "type": "text",
            "name": "sku"
          },
          {
            "type": "text",
            "name": "price"
          },
          {
            "type": "text",
            "name": "regular_price"
          },
          {
            "type": "text",
            "name": "sale_price"
          },
          {
            "type": "text",
            "name": "date_on_sale_from"
          },
          {
            "type": "text",
            "name": "date_on_sale_from_gmt"
          },
          {
            "type": "text",
            "name": "date_on_sale_to"
          },
          {
            "type": "text",
            "name": "date_on_sale_to_gmt"
          },
          {
            "type": "boolean",
            "name": "on_sale"
          },
          {
            "type": "boolean",
            "name": "purchasable"
          },
          {
            "type": "text",
            "name": "total_sales"
          },
          {
            "type": "boolean",
            "name": "virtual"
          },
          {
            "type": "boolean",
            "name": "downloadable"
          },
          {
            "type": "array",
            "name": "downloads"
          },
          {
            "type": "number",
            "name": "download_limit"
          },
          {
            "type": "number",
            "name": "download_expiry"
          },
          {
            "type": "text",
            "name": "external_url"
          },
          {
            "type": "text",
            "name": "button_text"
          },
          {
            "type": "text",
            "name": "tax_status"
          },
          {
            "type": "text",
            "name": "tax_class"
          },
          {
            "type": "boolean",
            "name": "manage_stock"
          },
          {
            "type": "text",
            "name": "stock_quantity"
          },
          {
            "type": "text",
            "name": "backorders"
          },
          {
            "type": "boolean",
            "name": "backorders_allowed"
          },
          {
            "type": "boolean",
            "name": "backordered"
          },
          {
            "type": "text",
            "name": "low_stock_amount"
          },
          {
            "type": "boolean",
            "name": "sold_individually"
          },
          {
            "type": "text",
            "name": "weight"
          },
          {
            "type": "object",
            "name": "dimensions",
            "sub": [
              {
                "type": "text",
                "name": "length"
              },
              {
                "type": "text",
                "name": "width"
              },
              {
                "type": "text",
                "name": "height"
              }
            ]
          },
          {
            "type": "boolean",
            "name": "shipping_required"
          },
          {
            "type": "boolean",
            "name": "shipping_taxable"
          },
          {
            "type": "text",
            "name": "shipping_class"
          },
          {
            "type": "number",
            "name": "shipping_class_id"
          },
          {
            "type": "boolean",
            "name": "reviews_allowed"
          },
          {
            "type": "text",
            "name": "average_rating"
          },
          {
            "type": "number",
            "name": "rating_count"
          },
          {
            "type": "array",
            "name": "upsell_ids"
          },
          {
            "type": "array",
            "name": "cross_sell_ids"
          },
          {
            "type": "number",
            "name": "parent_id"
          },
          {
            "type": "text",
            "name": "purchase_note"
          },
          {
            "type": "array",
            "name": "categories"
          },
          {
            "type": "array",
            "name": "tags"
          },
          {
            "type": "array",
            "name": "images"
          },
          {
            "type": "array",
            "name": "attributes"
          },
          {
            "type": "array",
            "name": "default_attributes"
          },
          {
            "type": "array",
            "name": "variations"
          },
          {
            "type": "array",
            "name": "grouped_products"
          },
          {
            "type": "number",
            "name": "menu_order"
          },
          {
            "type": "text",
            "name": "price_html"
          },
          {
            "type": "array",
            "name": "related_ids"
          },
          {
            "type": "array",
            "name": "meta_data"
          },
          {
            "type": "text",
            "name": "stock_status"
          },
          {
            "type": "boolean",
            "name": "is_purchased"
          },
          {
            "type": "array",
            "name": "attributesData"
          },
          {
            "type": "object",
            "name": "product_units",
            "sub": [
              {
                "type": "text",
                "name": "weight_unit"
              },
              {
                "type": "text",
                "name": "dimension_unit"
              }
            ]
          },
          {
            "type": "object",
            "name": "wcfm_product_policy_data",
            "sub": [
              {
                "type": "boolean",
                "name": "visible"
              },
              {
                "type": "text",
                "name": "shipping_policy"
              },
              {
                "type": "text",
                "name": "shipping_policy_heading"
              },
              {
                "type": "text",
                "name": "refund_policy"
              },
              {
                "type": "text",
                "name": "refund_policy_heading"
              },
              {
                "type": "text",
                "name": "cancellation_policy"
              },
              {
                "type": "text",
                "name": "cancellation_policy_heading"
              },
              {
                "type": "text",
                "name": "tab_title"
              }
            ]
          },
          {
            "type": "boolean",
            "name": "showAdditionalInfoTab"
          },
          {
            "type": "object",
            "name": "store",
            "sub": [
              {
                "type": "text",
                "name": "vendor_id"
              },
              {
                "type": "text",
                "name": "vendor_display_name"
              },
              {
                "type": "text",
                "name": "vendor_shop_name"
              },
              {
                "type": "text",
                "name": "vendor_email"
              },
              {
                "type": "boolean",
                "name": "disable_vendor"
              },
              {
                "type": "text",
                "name": "is_store_offline"
              },
              {
                "type": "text",
                "name": "email_verified"
              },
              {
                "type": "text",
                "name": "settings"
              },
              {
                "type": "array",
                "name": "vendor_additional_info"
              }
            ]
          },
          {
            "type": "array",
            "name": "_links",
            "sub": [
              {
                "type": "text",
                "name": "href"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "access-control-allow-headers"
          },
          {
            "type": "text",
            "name": "access-control-expose-headers"
          },
          {
            "type": "text",
            "name": "allow"
          },
          {
            "type": "text",
            "name": "cache-control"
          },
          {
            "type": "text",
            "name": "content-encoding"
          },
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "expires"
          },
          {
            "type": "text",
            "name": "link"
          },
          {
            "type": "text",
            "name": "server"
          },
          {
            "type": "text",
            "name": "vary"
          },
          {
            "type": "text",
            "name": "x-content-type-options"
          },
          {
            "type": "text",
            "name": "x-powered-by"
          },
          {
            "type": "text",
            "name": "x-robots-tag"
          },
          {
            "type": "text",
            "name": "x-wp-total"
          },
          {
            "type": "text",
            "name": "x-wp-totalpages"
          }
        ]
      }
    ],
    "iterator1": {
      "meta": null,
      "outputType": "array"
    },
    "var1": {
      "meta": null,
      "outputType": "array"
    },
    "data_detail1": {
      "meta": null,
      "outputType": "array"
    }
  }
});
