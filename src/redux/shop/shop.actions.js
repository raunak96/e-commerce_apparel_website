import ShopActionTypes from "./shop.types";

export const updateShopCollections = (collections) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections,
});
