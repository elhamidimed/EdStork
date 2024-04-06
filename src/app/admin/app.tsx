"use client";

import { Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider("./api/lessons");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="lessons"
        list={ListGuesser}
        recordRepresentation="title"
      />
    </Admin>
  );
};

export default App;
