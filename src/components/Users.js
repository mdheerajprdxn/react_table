import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../actions";
import { Table } from "./Table";

export const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const users = useSelector((state) => state.users);

  let data = users.map((user) => {
    return {
      col1: user.name,
      col2: user.email,
      col3: user.username,
      col4: user.phone,
    };
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Email",
        accessor: "col2",
      },
      {
        Header: "Username",
        accessor: "col3",
      },
      {
        Header: "Phone",
        accessor: "col4",
      },
    ],
    []
  );
  return (
    <div>
      <h1>Users:</h1>
      <Table data={data} columns={columns} />
    </div>
  );
};
