// FACE-LANDING

export const selectProducts = (state) => path(['products'], state)

// FACE-MANAGER

export const selectProducts = (state: ReduxStore): Map<Product> =>
  state.products

export const selectProductSetSkus = (
  state: ReduxStore,
  productSet: string
): Array<string> =>
  pathOr([], ['productSets', productSet, 'productSkus'], state)

// FACE-GIFTING

export const selectProducts = (state: ReduxState): Map<Product> =>
  state.products

// FACE-PLAN-UPGRADE

export const selectProductsBySku = (state: ReduxState): Map<Product> =>
  state.products

type SelectProducts = (state: ReduxState) => ReadonlyArray<Product>
    export const selectProducts: SelectProducts = createSelector(
    selectProductsBySku,
    Object.values
)

// FACE-PLAN-SETTINGS

export const selectProducts = (state: ReduxStore): Map<Product> =>
  state.products