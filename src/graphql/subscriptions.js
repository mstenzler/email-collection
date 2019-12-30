/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserInfoEntry = `subscription OnCreateUserInfoEntry(
  $id: ID
  $name: String
  $email: AWSEmail
  $phone: AWSPhone
  $interests: [String!]
) {
  onCreateUserInfoEntry(
    id: $id
    name: $name
    email: $email
    phone: $phone
    interests: $interests
  ) {
    id
    name
    email
    phone
    interests
    description
  }
}
`;
export const onUpdateUserInfoEntry = `subscription OnUpdateUserInfoEntry(
  $id: ID
  $name: String
  $email: AWSEmail
  $phone: AWSPhone
  $interests: [String!]
) {
  onUpdateUserInfoEntry(
    id: $id
    name: $name
    email: $email
    phone: $phone
    interests: $interests
  ) {
    id
    name
    email
    phone
    interests
    description
  }
}
`;
export const onDeleteUserInfoEntry = `subscription OnDeleteUserInfoEntry(
  $id: ID
  $name: String
  $email: AWSEmail
  $phone: AWSPhone
  $interests: [String!]
) {
  onDeleteUserInfoEntry(
    id: $id
    name: $name
    email: $email
    phone: $phone
    interests: $interests
  ) {
    id
    name
    email
    phone
    interests
    description
  }
}
`;
