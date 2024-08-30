import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEzformsSubmission extends Schema.CollectionType {
  collectionName: 'ezforms_submission';
  info: {
    tableName: 'submission';
    singularName: 'submission';
    pluralName: 'submissions';
    displayName: 'Form Submissions';
    description: 'A Place for all your form submissions';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    score: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    formName: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    data: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::ezforms.submission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::ezforms.submission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEzformsRecipient extends Schema.CollectionType {
  collectionName: 'ezforms_recipient';
  info: {
    tableName: 'recipients';
    singularName: 'recipient';
    pluralName: 'recipients';
    displayName: 'Notification Recipients';
    description: 'List of Notification Recipients';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    email: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    number: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::ezforms.recipient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::ezforms.recipient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Article';
    name: 'article';
    description: '';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    slug: Attribute.UID<'api::article.article', 'title'> & Attribute.Required;
    category: Attribute.Relation<
      'api::article.article',
      'manyToOne',
      'api::category.category'
    >;
    image: Attribute.Media;
    author: Attribute.Relation<
      'api::article.article',
      'manyToOne',
      'api::writer.writer'
    >;
    moreVillaImageDesktop: Attribute.Media;
    moreVillaImageMob: Attribute.Media;
    content: Attribute.Text;
    content1: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
    name: 'category';
  };
  options: {
    increments: true;
    timestamps: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::category.category', 'name'> & Attribute.Required;
    articles: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::article.article'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChristianjagodzinskiChristianjagodzinski
  extends Schema.SingleType {
  collectionName: 'christianjagodzinskis';
  info: {
    singularName: 'christianjagodzinski';
    pluralName: 'christianjagodzinskis';
    displayName: 'Christian Jagodzinski';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    memberName: Attribute.String;
    memberImageURL: Attribute.String;
    memberType: Attribute.String;
    contactNo: Attribute.String;
    memberEmail: Attribute.Email;
    Content: Attribute.Text;
    Properties: Attribute.Component<'featured-pop.featured-properties', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::christianjagodzinski.christianjagodzinski',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::christianjagodzinski.christianjagodzinski',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiComingsoonpageComingsoonpage extends Schema.SingleType {
  collectionName: 'comingsoonpages';
  info: {
    singularName: 'comingsoonpage';
    pluralName: 'comingsoonpages';
    displayName: 'Coming Soon Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Content: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::comingsoonpage.comingsoonpage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::comingsoonpage.comingsoonpage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactformContactform extends Schema.CollectionType {
  collectionName: 'contactforms';
  info: {
    singularName: 'contactform';
    pluralName: 'contactforms';
    displayName: 'Contact Form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    email: Attribute.Email;
    phoneNo: Attribute.String;
    message: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contactform.contactform',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contactform.contactform',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmilygonzalezEmilygonzalez extends Schema.SingleType {
  collectionName: 'emilygonzalezs';
  info: {
    singularName: 'emilygonzalez';
    pluralName: 'emilygonzalezs';
    displayName: 'Emily Gonzalez';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    memberName: Attribute.String;
    memberImageURL: Attribute.String;
    memberType: Attribute.String;
    contactNo: Attribute.String;
    memberEmail: Attribute.Email;
    Content: Attribute.Text;
    Properties: Attribute.Component<'featured-pop.featured-properties', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::emilygonzalez.emilygonzalez',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::emilygonzalez.emilygonzalez',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    leftSectionContent: Attribute.RichText;
    socialConnect: Attribute.Component<'social.social-connect', true>;
    copyrightLinks: Attribute.Component<
      'copyright-links.copyright-links',
      true
    >;
    navigateLinksLeft: Attribute.Component<
      'footer-links.navigate-links-left',
      true
    >;
    navigateLinksRight: Attribute.Component<
      'footer-links.navigate-links-right',
      true
    >;
    featuredImages: Attribute.Component<
      'featured-images.featured-images',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGabrielhenriqezGabrielhenriqez extends Schema.SingleType {
  collectionName: 'gabrielhenriqezs';
  info: {
    singularName: 'gabrielhenriqez';
    pluralName: 'gabrielhenriqezs';
    displayName: 'Gabriel Henriquez';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    memberName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    memberImageURL: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    memberType: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contactNo: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    memberEmail: Attribute.Email &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Content: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Properties: Attribute.Component<'featured-pop.featured-properties', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gabrielhenriqez.gabrielhenriqez',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gabrielhenriqez.gabrielhenriqez',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::gabrielhenriqez.gabrielhenriqez',
      'oneToMany',
      'api::gabrielhenriqez.gabrielhenriqez'
    >;
    locale: Attribute.String;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    name: 'global';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    siteName: Attribute.String & Attribute.Required;
    favicon: Attribute.Media;
    companyLogo: Attribute.Media;
    videoURL: Attribute.String;
    defaultSeo: Attribute.Component<'shared.seo'> & Attribute.Required;
    OurSites: Attribute.Component<'our-sites.our-sites', true>;
    companyLogoURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderNavHeaderNav extends Schema.SingleType {
  collectionName: 'header_navs';
  info: {
    singularName: 'header-nav';
    pluralName: 'header-navs';
    displayName: 'headerNav';
    description: '';
    repeatable: true;
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Navigation: Attribute.DynamicZone<
      ['shared.header-navigation', 'shared.sub-menu']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-nav.header-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header-nav.header-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'Homepage';
    name: 'homepage';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'shared.seo'>;
    headerImage: Attribute.Media;
    homePageLinks: Attribute.Component<'shared.home-page-links', true>;
    teamImg: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMeettheteamMeettheteam extends Schema.SingleType {
  collectionName: 'meettheteams';
  info: {
    singularName: 'meettheteam';
    pluralName: 'meettheteams';
    displayName: 'Lisa Blake';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    memberName: Attribute.String;
    memberImageURL: Attribute.String;
    memberType: Attribute.String;
    contactNo: Attribute.String;
    memberEmail: Attribute.String;
    Proprties: Attribute.Component<'sold.sold-properties', true>;
    Content: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::meettheteam.meettheteam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::meettheteam.meettheteam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewdevelopmentpageNewdevelopmentpage
  extends Schema.SingleType {
  collectionName: 'newdevelopmentpages';
  info: {
    singularName: 'newdevelopmentpage';
    pluralName: 'newdevelopmentpages';
    displayName: 'New Development Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Proprties: Attribute.Component<'featured-pop.featured-properties', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::newdevelopmentpage.newdevelopmentpage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::newdevelopmentpage.newdevelopmentpage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurlistingsOurlistings extends Schema.SingleType {
  collectionName: 'our_listings';
  info: {
    singularName: 'ourlistings';
    pluralName: 'our-listings';
    displayName: 'Our Listings';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ourlisting: Attribute.Component<'our-listing.our-listing', true> &
      Attribute.SetMinMax<
        {
          max: 9;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ourlistings.ourlistings',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ourlistings.ourlistings',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertyProperty extends Schema.CollectionType {
  collectionName: 'properties';
  info: {
    singularName: 'property';
    pluralName: 'properties';
    displayName: 'Property';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    Content: Attribute.Text;
    slug: Attribute.UID<'api::property.property', 'title'>;
    location: Attribute.Text;
    ImageURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::property.property',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::property.property',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertyeightPropertyeight extends Schema.SingleType {
  collectionName: 'propertyeights';
  info: {
    singularName: 'propertyeight';
    pluralName: 'propertyeights';
    displayName: 'Property Eight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImg: Attribute.Component<'property-imgs.property-imgs', true>;
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertyeight.propertyeight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertyeight.propertyeight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertyfivePropertyfive extends Schema.SingleType {
  collectionName: 'propertyfives';
  info: {
    singularName: 'propertyfive';
    pluralName: 'propertyfives';
    displayName: 'Property Five';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImg: Attribute.Component<'property-imgs.property-imgs', true>;
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertyfive.propertyfive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertyfive.propertyfive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertyfourPropertyfour extends Schema.SingleType {
  collectionName: 'propertyfours';
  info: {
    singularName: 'propertyfour';
    pluralName: 'propertyfours';
    displayName: 'Property Four';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImg: Attribute.Component<'property-imgs.property-imgs', true>;
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertyfour.propertyfour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertyfour.propertyfour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertyninePropertynine extends Schema.SingleType {
  collectionName: 'propertynines';
  info: {
    singularName: 'propertynine';
    pluralName: 'propertynines';
    displayName: 'Property Nine';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImg: Attribute.Component<'property-imgs.property-imgs', true>;
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertynine.propertynine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertynine.propertynine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertyonePropertyone extends Schema.SingleType {
  collectionName: 'propertyones';
  info: {
    singularName: 'propertyone';
    pluralName: 'propertyones';
    displayName: 'Property One';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImgs: Attribute.Component<'property-imgs.property-imgs', true>;
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertyone.propertyone',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertyone.propertyone',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertysevenPropertyseven extends Schema.SingleType {
  collectionName: 'propertysevens';
  info: {
    singularName: 'propertyseven';
    pluralName: 'propertysevens';
    displayName: 'Property Seven';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    PropertyImg: Attribute.Component<'property-imgs.property-imgs', true>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertyseven.propertyseven',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertyseven.propertyseven',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertysixPropertysix extends Schema.SingleType {
  collectionName: 'propertysixes';
  info: {
    singularName: 'propertysix';
    pluralName: 'propertysixes';
    displayName: 'Property Six';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImg: Attribute.Component<'property-imgs.property-imgs', true>;
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertysix.propertysix',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertysix.propertysix',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertythreePropertythree extends Schema.SingleType {
  collectionName: 'propertythrees';
  info: {
    singularName: 'propertythree';
    pluralName: 'propertythrees';
    displayName: 'Property Three';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImgs: Attribute.Component<'property-imgs.property-imgs', true>;
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertythree.propertythree',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertythree.propertythree',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertytwoPropertytwo extends Schema.SingleType {
  collectionName: 'propertytwos';
  info: {
    singularName: 'propertytwo';
    pluralName: 'propertytwos';
    displayName: 'Property Two';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PropertyImgs: Attribute.Component<'property-imgs.property-imgs', true>;
    PropertyImgDetails: Attribute.Component<'property-details.property-details'>;
    MapIframe: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertytwo.propertytwo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertytwo.propertytwo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRecentsaleRecentsale extends Schema.SingleType {
  collectionName: 'recentsales';
  info: {
    singularName: 'recentsale';
    pluralName: 'recentsales';
    displayName: 'Recent Sales';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Properties: Attribute.Component<'recent-sales.recent-sales', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recentsale.recentsale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recentsale.recentsale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReviewspageReviewspage extends Schema.SingleType {
  collectionName: 'reviewspages';
  info: {
    singularName: 'reviewspage';
    pluralName: 'reviewspages';
    displayName: 'Reviews page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Reviews: Attribute.Component<'reviews.reviews', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 8;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reviewspage.reviewspage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reviewspage.reviewspage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSamarabulSamarabul extends Schema.SingleType {
  collectionName: 'samarabuls';
  info: {
    singularName: 'samarabul';
    pluralName: 'samarabuls';
    displayName: 'Samar Abul';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Content: Attribute.Text;
    Properties: Attribute.Component<'featured-pop.featured-properties', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    memberName: Attribute.String;
    memberImageURL: Attribute.String;
    memberType: Attribute.String;
    contactNo: Attribute.String;
    memberEmail: Attribute.Email;
    pagelink: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::samarabul.samarabul',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::samarabul.samarabul',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSoldbypageSoldbypage extends Schema.SingleType {
  collectionName: 'soldbypages';
  info: {
    singularName: 'soldbypage';
    pluralName: 'soldbypages';
    displayName: 'Sold By Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    soldProperties: Attribute.Component<'sold.sold-properties', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::soldbypage.soldbypage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::soldbypage.soldbypage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamspageTeamspage extends Schema.SingleType {
  collectionName: 'teamspages';
  info: {
    singularName: 'teamspage';
    pluralName: 'teamspages';
    displayName: 'Teamspage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    moreVillaImageDesktop: Attribute.Media;
    moreVillaImageMob: Attribute.Media;
    Member: Attribute.Component<'team-members.team-members', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::teamspage.teamspage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::teamspage.teamspage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToptendealToptendeal extends Schema.SingleType {
  collectionName: 'toptendeals';
  info: {
    singularName: 'toptendeal';
    pluralName: 'toptendeals';
    displayName: 'TopTenDeals';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Properties: Attribute.Component<'top-deals.top-deals', true> &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::toptendeal.toptendeal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::toptendeal.toptendeal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVideospageVideospage extends Schema.SingleType {
  collectionName: 'videospages';
  info: {
    singularName: 'videospage';
    pluralName: 'videospages';
    displayName: 'Videos';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    video: Attribute.Component<'videos.videos', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::videospage.videospage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::videospage.videospage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWriterWriter extends Schema.CollectionType {
  collectionName: 'writers';
  info: {
    singularName: 'writer';
    pluralName: 'writers';
    displayName: 'Writer';
    name: 'writer';
  };
  options: {
    increments: true;
    timestamps: true;
  };
  attributes: {
    name: Attribute.String;
    picture: Attribute.Media;
    articles: Attribute.Relation<
      'api::writer.writer',
      'oneToMany',
      'api::article.article'
    >;
    email: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::writer.writer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::writer.writer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiZadkielstuartZadkielstuart extends Schema.SingleType {
  collectionName: 'zadkielstuarts';
  info: {
    singularName: 'zadkielstuart';
    pluralName: 'zadkielstuarts';
    displayName: 'Zadkiel Stuart';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    memberName: Attribute.String;
    memberImageURL: Attribute.String;
    memberType: Attribute.String;
    contactNo: Attribute.String;
    memberEmail: Attribute.Email;
    Content: Attribute.Text;
    Properties: Attribute.Component<'featured-pop.featured-properties', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::zadkielstuart.zadkielstuart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::zadkielstuart.zadkielstuart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::ezforms.submission': PluginEzformsSubmission;
      'plugin::ezforms.recipient': PluginEzformsRecipient;
      'api::article.article': ApiArticleArticle;
      'api::category.category': ApiCategoryCategory;
      'api::christianjagodzinski.christianjagodzinski': ApiChristianjagodzinskiChristianjagodzinski;
      'api::comingsoonpage.comingsoonpage': ApiComingsoonpageComingsoonpage;
      'api::contactform.contactform': ApiContactformContactform;
      'api::emilygonzalez.emilygonzalez': ApiEmilygonzalezEmilygonzalez;
      'api::footer.footer': ApiFooterFooter;
      'api::gabrielhenriqez.gabrielhenriqez': ApiGabrielhenriqezGabrielhenriqez;
      'api::global.global': ApiGlobalGlobal;
      'api::header-nav.header-nav': ApiHeaderNavHeaderNav;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::meettheteam.meettheteam': ApiMeettheteamMeettheteam;
      'api::newdevelopmentpage.newdevelopmentpage': ApiNewdevelopmentpageNewdevelopmentpage;
      'api::ourlistings.ourlistings': ApiOurlistingsOurlistings;
      'api::property.property': ApiPropertyProperty;
      'api::propertyeight.propertyeight': ApiPropertyeightPropertyeight;
      'api::propertyfive.propertyfive': ApiPropertyfivePropertyfive;
      'api::propertyfour.propertyfour': ApiPropertyfourPropertyfour;
      'api::propertynine.propertynine': ApiPropertyninePropertynine;
      'api::propertyone.propertyone': ApiPropertyonePropertyone;
      'api::propertyseven.propertyseven': ApiPropertysevenPropertyseven;
      'api::propertysix.propertysix': ApiPropertysixPropertysix;
      'api::propertythree.propertythree': ApiPropertythreePropertythree;
      'api::propertytwo.propertytwo': ApiPropertytwoPropertytwo;
      'api::recentsale.recentsale': ApiRecentsaleRecentsale;
      'api::reviewspage.reviewspage': ApiReviewspageReviewspage;
      'api::samarabul.samarabul': ApiSamarabulSamarabul;
      'api::soldbypage.soldbypage': ApiSoldbypageSoldbypage;
      'api::teamspage.teamspage': ApiTeamspageTeamspage;
      'api::toptendeal.toptendeal': ApiToptendealToptendeal;
      'api::videospage.videospage': ApiVideospageVideospage;
      'api::writer.writer': ApiWriterWriter;
      'api::zadkielstuart.zadkielstuart': ApiZadkielstuartZadkielstuart;
    }
  }
}
