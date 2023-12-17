"use strict";

const DomaciukolMainUseCaseError = require("./domaciukol-main-use-case-error.js");
const SHOPPING_LIST_ERROR_PREFIX = `${DomaciukolMainUseCaseError.ERROR_PREFIX}shoppingList/`;

const ShoppingList = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}shoppingList/`,
  
};

module.exports = {
  ShoppingList
};
