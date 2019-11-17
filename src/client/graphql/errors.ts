import { GraphQLError } from "graphql"

/**
 * react-final-form can only show 1 form-level error. For that reason, multiple GraphQL errors
 * have to be consolidated into a single string
 * @param graphqlErrors
 */
export function getReadableErrorsFromGraphQLErrors(graphqlErrors: GraphQLError[]) {
  return `${graphqlErrors.map(e => e.message).join("; ")}`
}
