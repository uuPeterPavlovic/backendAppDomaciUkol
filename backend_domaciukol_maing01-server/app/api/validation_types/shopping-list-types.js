/* eslint-disable */
const shoppingListCreateDtoIn = {
    uuAppProfileAuthorities: uri().isRequired("uuBtLocationUri"),
    uuBtLocationUri: uri(),
    name: uu5String(512),
    };
  
  const shoppingListGetDtoInType = shape({
    id: id().isRequired()
  });
  
  const shopppingListListDtoInType = shape({
    includeInvalid: boolean(),
    pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer()
    }),
    sort: shape({
      datetimeFrom: number(),
      priority: number(),
    })
  });
  
  const shoppingListDeleteDtoInType = shape({
    id: id().isRequired()
  });
  
  const shoppingListUpdateDtoInType = shape({
    id: id().isRequired(),
    header: map(string(/^[a-z]{2}(\-[a-z]{2})?$/), string(256), 10,
  });