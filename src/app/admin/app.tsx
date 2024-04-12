"use client";

import { Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import jsonServerProvider from "ra-data-json-server";

import React from "react";
import LessonList from "./lesson/list";
import LessonCreate from "./lesson/create";

const dataProvider = jsonServerProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="lessons" list={LessonList} create={LessonCreate} />
    </Admin>
  );
};

export default App;
