import gql from 'graphql-tag'

export const ALL_TO_DOS_QUERY = gql`
  query AllToDosQuery{
    allTodos{
      id
      title
      completed
    }
  }
`

export const CREATE_TO_DO_MUTATION = gql`
  mutation CreateToDoMutation($title: String!, $completed: Boolean!) {
    createTodo(
      title: $title,
      completed: $completed
    ) {
      id
      title
      completed
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`
