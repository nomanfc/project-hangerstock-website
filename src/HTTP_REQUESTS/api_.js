import axios from "axios";
import { BASE_URL } from "../Constants/constant.js";

const API = axios.create({ baseURL: BASE_URL });
const APICP = axios.create({ baseURL: BASE_URL });
const APIMV = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).data.token
    }`;
  }
  return req;
});

APICP.interceptors.request.use((req) => {
  if (localStorage.getItem("profile2")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile2")).token
    }`;
  }

  return req;
});

APIMV.interceptors.request.use((req) => {
  if (localStorage.getItem("OTPDETOKEN")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("OTPDETOKEN")).token
    }`;
  }

  return req;
});

// APICP.interceptors.request.use((request) => {
//   if (localStorage.getItem("profilechangepass")) {
//     request.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profilechangepass")).token
//     }`;
//   }
//   return request;
// });

//*****************seller*****************

//user_create_seller
export const signup_seller = (sellerData) =>
  axios.post(`${BASE_URL}/api/user/create`, sellerData);

export const signup_buyer = (buyerData) =>
  axios.post(`${BASE_URL}/api/user/create`, buyerData);

export const login_buyer = (buyerData) =>
  axios.post(`${BASE_URL}/api/user/login`, buyerData);

//get all auction
export const get_all_auctions = () => axios.get(`${BASE_URL}/api/auction/all`);

//get auction details by auction id
export const get_auction_details_by_aid = (id) =>
  axios.get(`${BASE_URL}/api/auction/full/details/get/${id}`);

//get images
export const get_images_by_key = (key) =>
  axios.get(`${BASE_URL}/api/auction/media/file/${key}`);

export const get_images_url_by_key = (key) =>
  axios.get(`${BASE_URL}/api/auction/media/file/${key}`);

//post BID
export const post_bid = (bid_data) =>
  axios.post(`${BASE_URL}/api/user/auction/bid/create`, {
    user_id: parseInt(bid_data.user_id),
    auction_id: parseInt(bid_data.auction_id),
    bid_amount: bid_data.bid_amount,
  });

//all auction by user id
export const get_submitted_auctions_by_user_id = (user_id) =>
  axios.post(`${BASE_URL}/api/auction/user/submitted`, { user_id: user_id });

//get all settings
export const get_settings = () => axios.get(`${BASE_URL}/api/app/setting`);

//Add to favourite
export const add_favt = (check) =>
  axios.post(`${BASE_URL}/api/user/favorite/auction/create`, check);

//remove favourite
export const remove_favt = (id) =>
  axios.post(`${BASE_URL}/api/user/favorite/auction/remove`, { id: id });

// check favourite
export const get_favt_status_by_uid_aid = (check) =>
  axios.post(`${BASE_URL}/api/user/favorite/auction/check`, check);

//get all bids by auction_id
export const get_all_bids_by_aid = (id) =>
  API.post(`/api/user/auction/bid/id`, { auction_id: parseInt(id) });

//create support
export const create_support = (formData) =>
  API.post(`/api/customer/support/create`, formData);

//get all buyers blog
export const get_buyers_blog = () => API.get(`/api/admin/blog/published/1`);

//get all sellers blog
export const get_sellers_blog = () => API.get(`/api/admin/blog/published/2`);

//get all shipping blog
export const get_shipping_blog = () => API.get(`/api/admin/blog/published/3`);

//get all product condition
export const get_all_conditions = () =>
  API.post(`/api/auction/product/condition/get`);

//get all shipment type
export const get_all_shipments = () =>
  API.post(`/api/auction/product/freight/type/get`);

//get all categories type
export const get_all_categories = () =>
  API.post(`/api/auction/product/category/get`);

//filter by category
export const filter_by_category = (catData) =>
  API.get(`/api/auction/filter/category/${parseInt(catData)}`);

//filter by freight
export const filter_by_freight = (ftData) =>
  API.get(`/api/auction/filter/freight/${parseInt(ftData)}`);

//filter by condition
export const filter_by_condition = (conData) =>
  API.get(`/api/auction/filter/condition/${parseInt(conData)}`);