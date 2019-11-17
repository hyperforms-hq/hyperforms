import { GraphQLError } from "graphql"

export function getReadableErrorsFromGraphQLErrors(graphqlErrors: GraphQLError[]) {
  return `${graphqlErrors.map(e => e.message).join("; ")}`
}
