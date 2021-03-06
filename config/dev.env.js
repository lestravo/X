'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GTM_ID: '"UA-137901930-1"',
  API_BANNER: '"https://app-staging.asani.co.id/api/v1/rent/banner-laptop"',
  API_ALL_PRODUCT: '"https://app-staging.asani.co.id/api/v1/rent/all-product-laptop"',
  API_ALL_PRODUCT_BELI: '"https://app-staging.asani.co.id/api/v1/rent/all-product-laptop-beli"',
  API_PROD_DESC: '"https://app-staging.asani.co.id/api/v1/rent/product-description"',
  API_SAVE_FORM: '"https://app-staging.asani.co.id/api/v1/rent/save-form"',
  API_SAVE_FORM_LAPTOP: '"https://app-staging.asani.co.id/api/v1/rent/save-form-laptop"',
  API_SAVE_FORM_LAPTOP_BUY: '"https://app-staging.asani.co.id/api/v1/rent/save-form-laptop-buy"',
  API_SAVE_AREA: '"https://app-staging.asani.co.id/api/v1/rent/save-form-area"',
  API_SEND_OTP: '"https://app-staging.asani.co.id/api/v1/rent/send-otp"',
  API_SEND_OTP_LAPTOP: '"https://app-staging.asani.co.id/api/v1/rent/send-otp-laptop"',
  API_LOGIN: '"https://app-staging.asani.co.id/api/v1/rent/login"',
  API_USER_INFO: '"https://app-staging.asani.co.id/api/v1/rent/user-info"',
  API_USER_INFO_BUY: '"https://app-staging.asani.co.id/api/v1/rent/user-info-buy"',
  API_GET_PROVINCE: '"https://app-staging.asani.co.id/api/v1/rent/get-provinsi"',
  API_GET_CITY: '"https://app-staging.asani.co.id/api/v1/rent/kabkot"',
  API_GET_DISTRICT: '"https://app-staging.asani.co.id/api/v1/rent/kecamatan"',
})
