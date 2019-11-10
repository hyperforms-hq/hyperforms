import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  QueryOptions: QueryOptions,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  User: ResolverTypeWrapper<User>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Workspace: ResolverTypeWrapper<Workspace>,
  Mutation: ResolverTypeWrapper<{}>,
  UserInput: UserInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  WorkspaceInput: ResolverTypeWrapper<WorkspaceInput>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  QueryOptions: QueryOptions,
  Int: Scalars['Int'],
  User: User,
  String: Scalars['String'],
  Workspace: Workspace,
  Mutation: {},
  UserInput: UserInput,
  Boolean: Scalars['Boolean'],
  WorkspaceInput: WorkspaceInput,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'user'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, QueryUsersArgs>,
  workspaces?: Resolver<Array<ResolversTypes['Workspace']>, ParentType, ContextType, QueryWorkspacesArgs>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type WorkspaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Workspace'] = ResolversParentTypes['Workspace']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  urlKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type WorkspaceInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkspaceInput'] = ResolversParentTypes['WorkspaceInput']> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  Workspace?: WorkspaceResolvers<ContextType>,
  WorkspaceInput?: WorkspaceInputResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
  __typename?: 'Mutation',
  createUser?: Maybe<User>,
};


export type MutationCreateUserArgs = {
  user: UserInput
};

export type Query = {
  __typename?: 'Query',
  users: Array<User>,
  workspaces: Array<Workspace>,
};


export type QueryUsersArgs = {
  options?: Maybe<QueryOptions>
};


export type QueryWorkspacesArgs = {
  options?: Maybe<QueryOptions>
};

export type QueryOptions = {
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
};

export type User = {
  __typename?: 'User',
  id: Scalars['String'],
  email: Scalars['String'],
};

export type UserInput = {
  email: Scalars['String'],
  password: Scalars['String'],
  displayName: Scalars['String'],
};

export type Workspace = {
  __typename?: 'Workspace',
  id: Scalars['String'],
  urlKey: Scalars['String'],
  displayName: Scalars['String'],
};

export type WorkspaceInput = {
  __typename?: 'WorkspaceInput',
  displayName: Scalars['String'],
};
export type GetWorkspacesQueryVariables = {};


export type GetWorkspacesQuery = (
  { __typename?: 'Query' }
  & { workspaces: Array<(
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'urlKey' | 'displayName'>
  )> }
);

export const GetWorkspacesDocument = gql`
    query GetWorkspaces {
  workspaces {
    urlKey
    displayName
  }
}
    `;
export type GetWorkspacesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetWorkspacesQuery, GetWorkspacesQueryVariables>, 'query'>;

    export const GetWorkspacesComponent = (props: GetWorkspacesComponentProps) => (
      <ApolloReactComponents.Query<GetWorkspacesQuery, GetWorkspacesQueryVariables> query={GetWorkspacesDocument} {...props} />
    );
    
export type GetWorkspacesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetWorkspacesQuery, GetWorkspacesQueryVariables> & TChildProps;
export function withGetWorkspaces<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetWorkspacesQuery,
  GetWorkspacesQueryVariables,
  GetWorkspacesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetWorkspacesQuery, GetWorkspacesQueryVariables, GetWorkspacesProps<TChildProps>>(GetWorkspacesDocument, {
      alias: 'withGetWorkspaces',
      ...operationOptions
    });
};
export type GetWorkspacesQueryResult = ApolloReactCommon.QueryResult<GetWorkspacesQuery, GetWorkspacesQueryVariables>;