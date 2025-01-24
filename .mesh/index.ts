// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, type ExecuteMeshFn, type SubscribeMeshFn, type MeshContext as BaseMeshContext, type MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { ImportFn } from '@graphql-mesh/types';
import type { FakeApiTypes } from './sources/FakeAPI/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents date values */
  Date: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  me?: Maybe<User>;
  company?: Maybe<Company>;
};


export type QuerycompanyArgs = {
  id: Scalars['String']['input'];
};

/** Fake User Object */
export type User = {
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  foos?: Maybe<Array<Maybe<Foo>>>;
  company?: Maybe<Company>;
};

export type Foo = {
  id?: Maybe<Scalars['String']['output']>;
};

/** Fake Company */
export type Company = {
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CompanyType>;
  employers?: Maybe<Array<Maybe<User>>>;
};

export type CompanyType =
  | 'Public_Limited'
  | 'Private_Limited'
  | 'One_Person';

export type Mutation = {
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<Scalars['JSON']['output']>;
};


export type MutationcreateUserArgs = {
  input?: InputMaybe<CreateUpdateUserInput>;
};


export type MutationupdateUserArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<CreateUpdateUserInput>;
};


export type MutationdeleteUserArgs = {
  id: Scalars['String']['input'];
};

export type CreateUpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
};

export type HttpMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Foo: ResolverTypeWrapper<Foo>;
  Company: ResolverTypeWrapper<Company>;
  CompanyType: CompanyType;
  Mutation: ResolverTypeWrapper<{}>;
  CreateUpdateUserInput: CreateUpdateUserInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  HttpMethod: HttpMethod;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  User: User;
  String: Scalars['String']['output'];
  Date: Scalars['Date']['output'];
  Foo: Foo;
  Company: Company;
  Mutation: {};
  CreateUpdateUserInput: CreateUpdateUserInput;
  JSON: Scalars['JSON']['output'];
  Boolean: Scalars['Boolean']['output'];
  ObjMap: Scalars['ObjMap']['output'];
}>;

export type enumDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  value?: Maybe<Scalars['String']['input']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type exampleDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  value?: Maybe<Scalars['ObjMap']['input']>;
};

export type exampleDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = exampleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  path?: Maybe<Scalars['String']['input']>;
  operationSpecificHeaders?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
  httpMethod?: Maybe<HttpMethod>;
  isBinary?: Maybe<Scalars['Boolean']['input']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
  jsonApiFields?: Maybe<Scalars['Boolean']['input']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type transportDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  kind?: Maybe<Scalars['String']['input']>;
  location?: Maybe<Scalars['String']['input']>;
  headers?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
  queryParams?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
};

export type transportDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = transportDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QuerycompanyArgs, 'id'>>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  foos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Foo']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FooResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Foo'] = ResolversParentTypes['Foo']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CompanyType']>, ParentType, ContextType>;
  employers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationcreateUserArgs>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Foo?: FooResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  ObjMap?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  enum?: enumDirectiveResolver<any, any, ContextType>;
  example?: exampleDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
  transport?: transportDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = FakeApiTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"playground":true},
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
export function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type ExampleMeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleMeQueryQuery = { me?: Maybe<(
    Pick<User, 'firstName' | 'lastName' | 'jobTitle'>
    & { company?: Maybe<(
      Pick<Company, 'name' | 'type'>
      & { employers?: Maybe<Array<Maybe<Pick<User, 'firstName' | 'lastName' | 'jobTitle'>>>> }
    )> }
  )> };


export const ExampleMeQueryDocument = gql`
    query ExampleMeQuery {
  me {
    firstName
    lastName
    jobTitle
    company {
      name
      type
      employers {
        firstName
        lastName
        jobTitle
      }
    }
  }
}
    ` as unknown as DocumentNode<ExampleMeQueryQuery, ExampleMeQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    ExampleMeQuery(variables?: ExampleMeQueryQueryVariables, options?: C): Promise<ExampleMeQueryQuery> {
      return requester<ExampleMeQueryQuery, ExampleMeQueryQueryVariables>(ExampleMeQueryDocument, variables, options) as Promise<ExampleMeQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;