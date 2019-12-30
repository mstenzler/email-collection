/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInfoEntry = `query GetUserInfoEntry($id: ID!, $name: String!) {
  getUserInfoEntry(id: $id, name: $name) {
    id
    name
    email
    phone
    interests
    description
  }
}
`;
export const listUserInfoEntries = `query ListUserInfoEntries(
  $filter: TableUserInfoEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserInfoEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      phone
      interests
      description
    }
    nextToken
  }
}
`;
export const queryUserInfoEntriesByEmailIndex = `query QueryUserInfoEntriesByEmailIndex(
  $email: AWSEmail!
  $first: Int
  $after: String
) {
  queryUserInfoEntriesByEmailIndex(
    email: $email
    first: $first
    after: $after
  ) {
    items {
      id
      name
      email
      phone
      interests
      description
    }
    nextToken
  }
}
`;
