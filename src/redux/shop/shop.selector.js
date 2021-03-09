import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(k => collections[k])
);

export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    );
}