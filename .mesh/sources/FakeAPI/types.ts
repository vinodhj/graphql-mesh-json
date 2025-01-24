// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FakeApiTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

  export type QuerySdk = {
      /** undefined **/
  me: InContextSdkMethod<Query['me'], {}, MeshContext>,
  /** undefined **/
  company: InContextSdkMethod<Query['company'], QuerycompanyArgs, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  createUser: InContextSdkMethod<Mutation['createUser'], MutationcreateUserArgs, MeshContext>,
  /** undefined **/
  updateUser: InContextSdkMethod<Mutation['updateUser'], MutationupdateUserArgs, MeshContext>,
  /** undefined **/
  deleteUser: InContextSdkMethod<Mutation['deleteUser'], MutationdeleteUserArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["FakeAPI"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
