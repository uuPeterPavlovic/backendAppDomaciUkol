/* eslint-disable */

const initDtoInType = shape({
  uuAppProfileAuthorities: uri().isRequired("uuBtLocationUri"),
  uuBtLocationUri: uri(),
  name: uu5String(512),
  sysState: oneOf(["active", "restricted", "readOnly"]),
  adviceNote: shape({
    message: uu5String().isRequired(),
    severity: oneOf(["debug", "info", "warning", "error", "fatal"]),
    estimatedEndTime: datetime(),
  }),
});

const shoppingListCreateDtoIn = {
  uuAppProfileAuthorities: uri().isRequired("uuBtLocationUri"),
  uuBtLocationUri: uri(),
  name: uu5String(512),
  sysState: oneOf(["active", "restricted", "readOnly"]),
  header:  {"en":"..."}, //název shoppping listu
  header: map(string(/^[a-z]{2}(\-[a-z]{2})?$/), string(256), 10).isRequired(),
  languages: ["cs", "en"], //jazyk shopping listu
  languages: array(oneOf(["cs", "en"])).isRequired(),
  originId: "...", //id shopping listu
  items: "..." // položky seznamu
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
