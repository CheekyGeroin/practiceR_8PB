export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;
export const selectName = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
