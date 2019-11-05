// in src/posts.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  AutocompleteArrayInput
} from "react-admin";

const choices = [
  { _id: 123, full_name: "Leo Tolstoi", sex: "M" },
  { _id: 456, full_name: "Jane Austen", sex: "F" },
  { _id: 234, full_name: "Bnet Khgsjd", sex: "F" },
  { _id: 532, full_name: "Khjus Uyghbd", sex: "F" },
  { _id: 634, full_name: "Ytgg Thdhd", sex: "F" }
];

const record = [{ _id: 456, full_name: "Jane Austen", sex: "F" }];

export const PostEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <AutocompleteArrayInput
        record={record}
        choices={choices}
        optionText="full_name"
        optionValue="_id"
      />
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);
