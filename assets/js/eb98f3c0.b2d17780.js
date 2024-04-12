/*! For license information please see eb98f3c0.b2d17780.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[661109],{493128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(824246),r=t(511151);const o={id:"index",title:"Authentication in Backstage",description:"Introduction to authentication in Backstage"},s=void 0,a={id:"auth/index",title:"Authentication in Backstage",description:"Introduction to authentication in Backstage",source:"@site/../docs/auth/index.md",sourceDirName:"auth",slug:"/auth/",permalink:"/docs/auth/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Authentication in Backstage",description:"Introduction to authentication in Backstage"},sidebar:"docs",previous:{title:"Defining Configuration for your Plugin",permalink:"/docs/conf/defining"},next:{title:"Auth0",permalink:"/docs/auth/auth0/provider"}},c={},d=[{value:"Built-in Authentication Providers",id:"built-in-authentication-providers",level:2},{value:"Configuring Authentication Providers",id:"configuring-authentication-providers",level:2},{value:"Sign-In Configuration",id:"sign-in-configuration",level:2},{value:"Sign-In with Proxy Providers",id:"sign-in-with-proxy-providers",level:2},{value:"Scaffolder Configuration (Software Templates)",id:"scaffolder-configuration-software-templates",level:2},{value:"For Plugin Developers",id:"for-plugin-developers",level:2},{value:"Identity for Plugin Developers",id:"identity-for-plugin-developers",level:3},{value:"Accessing Third Party Resources",id:"accessing-third-party-resources",level:3},{value:"Custom Authentication Provider",id:"custom-authentication-provider",level:2},{value:"Custom ScmAuthApi Implementation",id:"custom-scmauthapi-implementation",level:2},{value:"Configuring token issuers",id:"configuring-token-issuers",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The authentication system in Backstage serves two distinct purposes: sign-in and\nidentification of users, as well as delegating access to third-party resources. It is possible to\nconfigure Backstage to have any number of authentication providers, but only\none of these will typically be used for sign-in, with the rest being used to provide\naccess to external resources."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["NOTE: Identity management and the Sign-In page in Backstage is NOT a method for blocking\naccess for unauthorized users. The identity system only serves to provide a personalized\nexperience and access to a Backstage Identity Token, which can be passed to backend plugins.\nThis also means that your Backstage backend APIs are by default unauthenticated.\nThus, if your Backstage instance is exposed to the Internet, anyone can access\ninformation in the Backstage. You can learn more ",(0,i.jsx)(n.a,{href:"/docs/overview/threat-model#integrator-responsibilities",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"built-in-authentication-providers",children:"Built-in Authentication Providers"}),"\n",(0,i.jsx)(n.p,{children:"Backstage comes with many common authentication providers in the core library:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/auth0/provider",children:"Auth0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/atlassian/provider",children:"Atlassian"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/microsoft/provider",children:"Azure"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/microsoft/easy-auth",children:"Azure Easy Auth"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/bitbucket/provider",children:"Bitbucket"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/bitbucketServer/provider",children:"Bitbucket Server"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/cloudflare/provider",children:"Cloudflare Access"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/github/provider",children:"GitHub"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/gitlab/provider",children:"GitLab"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/google/provider",children:"Google"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/google/gcp-iap-auth",children:"Google IAP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/okta/provider",children:"Okta"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/oauth2-proxy/provider",children:"OAuth 2 Custom Proxy"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/onelogin/provider",children:"OneLogin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/auth/vmware-cloud/provider",children:"VMware Cloud"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These built-in providers handle the authentication flow for a particular service\nincluding required scopes, callbacks, etc. These providers are each added to a\nBackstage app in a similar way."}),"\n",(0,i.jsx)(n.h2,{id:"configuring-authentication-providers",children:"Configuring Authentication Providers"}),"\n",(0,i.jsxs)(n.p,{children:["Each built-in provider has a configuration block under the ",(0,i.jsx)(n.code,{children:"auth"})," section of\n",(0,i.jsx)(n.code,{children:"app-config.yaml"}),". For example, the GitHub provider:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    github:\n      development:\n        clientId: ${AUTH_GITHUB_CLIENT_ID}\n        clientSecret: ${AUTH_GITHUB_CLIENT_SECRET}\n"})}),"\n",(0,i.jsx)(n.p,{children:"See the documentation for a particular provider to see what configuration is\nneeded."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"providers"})," key may have several authentication providers, if multiple\nauthentication methods are supported. Each provider may also have configuration\nfor different authentication environments (development, production, etc). This\nallows a single auth backend to serve multiple environments, such as running a\nlocal frontend against a deployed backend. The provider configuration matching\nthe local ",(0,i.jsx)(n.code,{children:"auth.environment"})," setting will be selected."]}),"\n",(0,i.jsx)(n.h2,{id:"sign-in-configuration",children:"Sign-In Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Using an authentication provider for sign-in is something you need to configure\nboth in the frontend app, as well as the ",(0,i.jsx)(n.code,{children:"auth"})," backend plugin. For information\non how to configure the backend app, see ",(0,i.jsx)(n.a,{href:"/docs/auth/identity-resolver",children:"Sign-in Identities and Resolvers"}),".\nThe rest of this section will focus on how to configure sign-in for the frontend app."]}),"\n",(0,i.jsxs)(n.p,{children:["Sign-in is configured by providing a custom ",(0,i.jsx)(n.code,{children:"SignInPage"})," app component. It will be\nrendered before any other routes in the app and is responsible for providing the\nidentity of the current user. The ",(0,i.jsx)(n.code,{children:"SignInPage"})," can render any number of pages and\ncomponents, or just blank space with logic running in the background. In the end\nhowever it must provide a valid Backstage user identity through the ",(0,i.jsx)(n.code,{children:"onSignInSuccess"}),"\ncallback prop, at which point the rest of the app is rendered."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to, you can use the ",(0,i.jsx)(n.code,{children:"SignInPage"})," component that is provided by ",(0,i.jsx)(n.code,{children:"@backstage/core-components"}),",\nwhich takes either a ",(0,i.jsx)(n.code,{children:"provider"})," or ",(0,i.jsx)(n.code,{children:"providers"})," (array) prop of ",(0,i.jsx)(n.code,{children:"SignInProviderConfig"})," definitions."]}),"\n",(0,i.jsxs)(n.p,{children:["The following example for GitHub shows the additions needed to ",(0,i.jsx)(n.code,{children:"packages/app/src/App.tsx"}),",\nand can be adapted to any of the built-in providers:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"/* highlight-add-start */\nimport { githubAuthApiRef } from '@backstage/core-plugin-api';\nimport { SignInPage } from '@backstage/core-components';\n/* highlight-add-end */\n\nconst app = createApp({\n  /* highlight-add-start */\n  components: {\n    SignInPage: props => (\n      <SignInPage\n        {...props}\n        auto\n        provider={{\n          id: 'github-auth-provider',\n          title: 'GitHub',\n          message: 'Sign in using GitHub',\n          apiRef: githubAuthApiRef,\n        }}\n      />\n    ),\n  },\n  /* highlight-add-end */\n  // ..\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use the ",(0,i.jsx)(n.code,{children:"providers"})," prop to enable multiple sign-in methods, for example"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"allowing guest access:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"const app = createApp({\n  /* highlight-add-start */\n  components: {\n    SignInPage: props => (\n      <SignInPage\n        {...props}\n        providers={[\n          'guest',\n          {\n            id: 'github-auth-provider',\n            title: 'GitHub',\n            message: 'Sign in using GitHub',\n            apiRef: githubAuthApiRef,\n          },\n        ]}\n      />\n    ),\n  },\n  /* highlight-add-end */\n  // ..\n});\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["NOTE: You can configure sign-in to use a redirect flow with no pop-up by adding\n",(0,i.jsx)(n.code,{children:"enableExperimentalRedirectFlow: true"})," to the root of your ",(0,i.jsx)(n.code,{children:"app-config.yaml"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"}),"\n",(0,i.jsxs)(n.p,{children:['Some auth providers are so-called "proxy" providers, meaning they\'re meant to be used\nbehind an authentication proxy. Examples of these are\n',(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/contrib/docs/tutorials/aws-alb-aad-oidc-auth.md",children:"Amazon Application Load Balancer"}),",\n",(0,i.jsx)(n.a,{href:"/docs/auth/microsoft/easy-auth",children:"Azure EasyAuth"}),",\n",(0,i.jsx)(n.a,{href:"/docs/auth/cloudflare/provider",children:"Cloudflare Access"}),",\n",(0,i.jsx)(n.a,{href:"/docs/auth/google/gcp-iap-auth",children:"Google Identity-Aware Proxy"}),"\nand ",(0,i.jsx)(n.a,{href:"/docs/auth/oauth2-proxy/provider",children:"OAuth2 Proxy"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When using a proxy provider, you'll end up wanting to use a different sign-in page, as\nthere is no need for further user interaction once you've signed in towards the proxy.\nAll the sign-in page needs to do is to call the ",(0,i.jsx)(n.code,{children:"/refresh"})," endpoint of the auth providers\nto get the existing session, which is exactly what the ",(0,i.jsx)(n.code,{children:"ProxiedSignInPage"})," does. The only\nthing you need to do to configure the ",(0,i.jsx)(n.code,{children:"ProxiedSignInPage"})," is to pass the ID of the provider like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'const app = createApp({\n  components: {\n    SignInPage: props => <ProxiedSignInPage {...props} provider="awsalb" />,\n  },\n  // ..\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If the provider in auth backend expects additional headers such as ",(0,i.jsx)(n.code,{children:"x-provider-token"}),", there is now a way to configure that in ",(0,i.jsx)(n.code,{children:"ProxiedSignInPage"})," using the optional ",(0,i.jsx)(n.code,{children:"headers"})," prop."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<ProxiedSignInPage\n  {...props}\n  provider=\"my-custom-provider\"\n  /* highlight-next-line */\n  headers={{ 'x-some-key': someValue }}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Headers can also be returned in an async manner:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<ProxiedSignInPage\n  {...props}\n  provider=\"my-custom-provider\"\n  /* highlight-start */\n  headers={async () => {\n    const someValue = await someFn();\n    return { 'x-some-key': someValue };\n  }}\n  /* highlight-end */\n/>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A downside of this method is that it can be cumbersome to set up for local development.\nAs a workaround for this, it's possible to dynamically select the sign-in page based on\nwhat environment the app is running in, and then use a different sign-in method for local\ndevelopment, if one is needed at all. Depending on the exact setup, one might choose to\nselect the sign-in method based on the ",(0,i.jsx)(n.code,{children:"process.env.NODE_ENV"})," environment variable,\nby checking the ",(0,i.jsx)(n.code,{children:"hostname"})," of the current location, or by accessing the configuration API\nto read a configuration value. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"const app = createApp({\n  components: {\n    SignInPage: props => {\n      const configApi = useApi(configApiRef);\n      if (configApi.getString('auth.environment') === 'development') {\n        return (\n          <SignInPage\n            {...props}\n            provider={{\n              id: 'google-auth-provider',\n              title: 'Google',\n              message: 'Sign In using Google',\n              apiRef: googleAuthApiRef,\n            }}\n          />\n        );\n      }\n      return <ProxiedSignInPage {...props} provider=\"gcpiap\" />;\n    },\n  },\n  // ..\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using multiple auth providers like this, it's important that you configure the different\nsign-in resolvers so that they resolve to the same identity regardless of the method used."}),"\n",(0,i.jsx)(n.h2,{id:"scaffolder-configuration-software-templates",children:"Scaffolder Configuration (Software Templates)"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use the authentication capabilities of the ",(0,i.jsx)(n.a,{href:"/docs/features/software-templates/writing-templates#the-repository-picker",children:"Repository Picker"})," inside your software templates you will need to configure the ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/reference/integration-react.scmauthapi",children:(0,i.jsx)(n.code,{children:"ScmAuthApi"})})," alongside your authentication provider. It is an API used to authenticate towards different SCM systems in a generic way, based on what resource is being accessed."]}),"\n",(0,i.jsxs)(n.p,{children:["To set it up, you'll need to add an API factory entry to ",(0,i.jsx)(n.code,{children:"packages/app/src/apis.ts"}),". The example below sets up the ",(0,i.jsx)(n.code,{children:"ScmAuthApi"})," for an already configured GitLab authentication provider:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="packages/app/src/apis.ts"',children:"createApiFactory({\n  api: scmAuthApiRef,\n  deps: {\n    gitlabAuthApi: gitlabAuthApiRef,\n  },\n  factory: ({ gitlabAuthApi }) => ScmAuth.forGitlab(gitlabAuthApi),\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In case you are using a custom authentication providers, you might need to add a ",(0,i.jsxs)(n.a,{href:"/docs/auth/#custom-scmauthapi-implementation",children:["custom ",(0,i.jsx)(n.code,{children:"ScmAuthApi"})," implementation"]}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"for-plugin-developers",children:"For Plugin Developers"}),"\n",(0,i.jsx)(n.p,{children:"The Backstage frontend core APIs provide a set of Utility APIs for plugin developers\nto use, both to access the user identity, as well as third party resources."}),"\n",(0,i.jsx)(n.h3,{id:"identity-for-plugin-developers",children:"Identity for Plugin Developers"}),"\n",(0,i.jsxs)(n.p,{children:["For plugin developers, there is one main touchpoint for accessing the user identity: the\n",(0,i.jsx)(n.code,{children:"IdentityApi"})," exported by ",(0,i.jsx)(n.code,{children:"@backstage/core-plugin-api"})," via the ",(0,i.jsx)(n.code,{children:"identityApiRef"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"IdentityApi"})," gives access to the signed-in user's identity in the frontend.\nIt provides access to the user's entity reference, lightweight profile information, and\na Backstage token that identifies the user when making authenticated calls within Backstage."]}),"\n",(0,i.jsxs)(n.p,{children:["When making calls to backend plugins, we recommend that the ",(0,i.jsx)(n.code,{children:"FetchApi"})," is used, which\nis exported via the ",(0,i.jsx)(n.code,{children:"fetchApiRef"})," from ",(0,i.jsx)(n.code,{children:"@backstage/core-plugin-api"}),". The ",(0,i.jsx)(n.code,{children:"FetchApi"})," will\nautomatically include a Backstage token in the request, meaning there is no need\nto interact directly with the ",(0,i.jsx)(n.code,{children:"IdentityApi"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"accessing-third-party-resources",children:"Accessing Third Party Resources"}),"\n",(0,i.jsx)(n.p,{children:"A common pattern for talking to third party services in Backstage is\nuser-to-server requests, where short-lived OAuth Access Tokens are requested by\nplugins to authenticate calls to external services. These calls can be made\neither directly to the services or through a backend plugin or service."}),"\n",(0,i.jsx)(n.p,{children:"By relying on user-to-server calls we keep the coupling between the frontend and\nbackend low, and provide a much lower barrier for plugins to make use of third\nparty services. This is in comparison to for example a session-based system,\nwhere access tokens are stored server-side. Such a solution would require a much\ndeeper coupling between the auth backend plugin, its session storage, and other\nbackend plugins or separate services. A goal of Backstage is to make it as easy\nas possible to create new plugins, and an auth solution based on user-to-server\nOAuth helps in that regard."}),"\n",(0,i.jsxs)(n.p,{children:["The method with which frontend plugins request access to third party services is\nthrough ",(0,i.jsx)(n.a,{href:"/docs/api/utility-apis",children:"Utility APIs"})," for each service provider. These\nare all suffixed with ",(0,i.jsx)(n.code,{children:"*AuthApiRef"}),", for example ",(0,i.jsx)(n.code,{children:"githubAuthApiRef"}),". For a\nfull list of providers, see the\n",(0,i.jsx)(n.a,{href:"/docs/reference/core-plugin-api#variables",children:"@backstage/core-plugin-api"})," reference."]}),"\n",(0,i.jsx)(n.h2,{id:"custom-authentication-provider",children:"Custom Authentication Provider"}),"\n",(0,i.jsx)(n.p,{children:"There are generic authentication providers for OAuth2 and SAML. These can reduce\nthe amount of code needed to implement a custom authentication provider that\nadheres to these standards."}),"\n",(0,i.jsxs)(n.p,{children:["Backstage uses ",(0,i.jsx)(n.a,{href:"http://www.passportjs.org/",children:"Passport"})," under the hood, which has\na wide library of authentication strategies for different providers. See\n",(0,i.jsx)(n.a,{href:"/docs/auth/add-auth-provider",children:"Add authentication provider"})," for details on adding a new\nPassport-supported authentication method."]}),"\n",(0,i.jsx)(n.h2,{id:"custom-scmauthapi-implementation",children:"Custom ScmAuthApi Implementation"}),"\n",(0,i.jsxs)(n.p,{children:["The default ",(0,i.jsx)(n.code,{children:"ScmAuthAPi"})," provides integrations for ",(0,i.jsx)(n.code,{children:"github"}),", ",(0,i.jsx)(n.code,{children:"gitlab"}),", ",(0,i.jsx)(n.code,{children:"azure"})," and ",(0,i.jsx)(n.code,{children:"bitbucket"})," and is created by the following code in ",(0,i.jsx)(n.code,{children:"packages/app/src/apis.ts"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"ScmAuth.createDefaultApiFactory();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you require only a subset of these integrations, then you will need a custom implementation of the ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/reference/integration-react.scmauthapi",children:(0,i.jsx)(n.code,{children:"ScmAuthApi"})}),". It is an API used to authenticate different SCM systems generically, based on what resource is being accessed, and is used for example, by the Scaffolder (Software Templates) and Catalog Import plugins."]}),"\n",(0,i.jsx)(n.p,{children:"The first step is to remove the code that creates the default providers."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="packages/app/src/apis.ts"',children:"import {\n  ScmIntegrationsApi,\n  scmIntegrationsApiRef,\n  /* highlight-add-next-line */\n  ScmAuth,\n} from '@backstage/integration-react';\n\nexport const apis: AnyApiFactory[] = [\n  /* highlight-add-next-line */\n  ScmAuth.createDefaultApiFactory(),\n  // ...\n];\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then replace it with something like this, which will create an ",(0,i.jsx)(n.code,{children:"ApiFactory"})," with only a github provider."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="packages/app/src/apis.ts"',children:"export const apis: AnyApiFactory[] = [\n  createApiFactory({\n    api: scmAuthApiRef,\n    deps: {\n      githubAuthApi: githubAuthApiRef,\n    },\n    factory: ({ githubAuthApi }) =>\n      ScmAuth.merge(\n        ScmAuth.forGithub(githubAuthApi),\n      ),\n  });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you use any custom authentication integrations, a new provider can be added to the ",(0,i.jsx)(n.code,{children:"ApiFactory"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The first step is to create a new authentication ref, which follows the naming convention of ",(0,i.jsx)(n.code,{children:"xxxAuthApiRef"}),". The example below is for a new GitHub enterprise integration which can be defined either inside the app itself if it's only used for this purpose or inside a common internal package for APIs, such as ",(0,i.jsx)(n.code,{children:"@internal/apis"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const gheAuthApiRef: ApiRef<OAuthApi & ProfileInfoApi & SessionApi> =\n  createApiRef({\n    id: 'internal.auth.ghe',\n  });\n"})}),"\n",(0,i.jsx)(n.p,{children:"This new API ref will only work if you define an API factory for it. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"createApiFactory({\n  api: gheAuthApiRef,\n  deps: {\n    discoveryApi: discoveryApiRef,\n    oauthRequestApi: oauthRequestApiRef,\n    configApi: configApiRef,\n  },\n  factory: ({ discoveryApi, oauthRequestApi, configApi }) =>\n    GithubAuth.create({\n      configApi,\n      discoveryApi,\n      oauthRequestApi,\n      provider: { id: 'ghe', title: 'GitHub Enterprise', icon: () => null },\n      defaultScopes: ['read:user'],\n      environment: configApi.getOptionalString('auth.environment'),\n    }),\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"The new API ref is then used to add a new provider to the ApiFactory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"createApiFactory({\n  api: scmAuthApiRef,\n  deps: {\n    gheAuthApi: gheAuthApiRef,\n    githubAuthApi: githubAuthApiRef,\n  },\n  factory: ({ githubAuthApi, gheAuthApi }) =>\n    ScmAuth.merge(\n      ScmAuth.forGithub(githubAuthApi),\n      ScmAuth.forGithub(gheAuthApi, {\n        host: 'ghe.example.com',\n      }),\n    ),\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, you also need to add and configure another provider to the ",(0,i.jsx)(n.code,{children:"auth-backend"})," using the provider ID, which in this example is ",(0,i.jsx)(n.code,{children:"ghe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { providers } from '@backstage/plugin-auth-backend';\n\n// Add the following options to `createRouter` in packages/backend/src/plugins/auth.ts\nproviderFactories: {\n  ghe: providers.github.create(),\n},\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-token-issuers",children:"Configuring token issuers"}),"\n",(0,i.jsx)(n.p,{children:"By default, the Backstage authentication backend generates and manages its own signing keys automatically for any issued\nBackstage tokens. However, these keys have a short lifetime and do not persist after instance restarts."}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, users can provide their own public and private key files to sign issued tokens. This is beneficial in\nscenarios where the token verification implementation aggressively caches the list of keys, and doesn't attempt to fetch\nnew ones even if they encounter an unknown key id. To enable this feature add the following configuration to your config\nfile:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"auth:\n  keyStore:\n    provider: 'static'\n    static:\n      keys:\n        # Must be declared at least once and the first one will be used for signing\n        - keyId: 'primary'\n          publicKeyFile: /path/to/public.key\n          privateKeyFile: /path/to/private.key\n          algorithm: # Optional, algorithm used to generate the keys, defaults to ES256\n          # More keys can be added so with future key rotations caches already know about it\n        - keyId: ...\n"})}),"\n",(0,i.jsx)(n.p,{children:"The private key should be stored in the PKCS#8 format. The public key should be stored in the SPKI format.\nYou can generate the public/private key pair, using openssl and the ES256 algorithm by performing the following\nsteps:"}),"\n",(0,i.jsx)(n.p,{children:"Generate a private key using the ES256 algorithm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"openssl ecparam -name prime256v1 -genkey -out private.ec.key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Convert it to PKCS#8 format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in private.ec.key -out private.key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Extract the public key"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"openssl ec -inform PEM -outform PEM -pubout -in private.key -out public.key\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},371426:(e,n,t)=>{var i=t(827378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,o={},d=null,l=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,i)&&!c.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:l,props:o,_owner:a.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},541535:(e,n)=>{var t=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}function x(){}function v(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var b=v.prototype=new x;b.constructor=v,g(b,y.prototype),b.isPureReactComponent=!0;var j=Array.isArray,A=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,i){var r,o={},s=null,a=null;if(null!=n)for(r in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)A.call(n,r)&&!w.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=i;else if(1<c){for(var d=Array(c),l=0;l<c;l++)d[l]=arguments[l+2];o.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:t,type:e,key:s,ref:a,props:o,_owner:k.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var P=/\/+/g;function _(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,r,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case i:c=!0}}if(c)return s=s(c=e),e=""===o?"."+_(c,0):o,j(s)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),R(s,n,r,"",(function(e){return e}))):null!=s&&(I(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),n.push(s)),1;if(c=0,o=""===o?".":o+":",j(e))for(var d=0;d<e.length;d++){var l=o+_(a=e[d],d);c+=R(a,n,r,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),d=0;!(a=e.next()).done;)c+=R(a=a.value,n,r,l=o+_(a,d++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,n,t){if(null==e)return e;var i=[],r=0;return R(e,i,"","",(function(e){return n.call(t,e,r++)})),i}function E(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},B={transition:null},F={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};n.Children={map:T,forEach:function(e,n,t){T(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return T(e,(function(){n++})),n},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=r,n.Profiler=s,n.PureComponent=v,n.StrictMode=o,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,n.cloneElement=function(e,n,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=g({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=k.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in n)A.call(n,d)&&!w.hasOwnProperty(d)&&(r[d]=void 0===n[d]&&void 0!==c?c[d]:n[d])}var d=arguments.length-2;if(1===d)r.children=i;else if(1<d){c=Array(d);for(var l=0;l<d;l++)c[l]=arguments[l+2];r.children=c}return{$$typeof:t,type:e.type,key:o,ref:s,props:r,_owner:a}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=I,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=B.transition;B.transition={};try{e()}finally{B.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return C.current.useCallback(e,n)},n.useContext=function(e){return C.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return C.current.useDeferredValue(e)},n.useEffect=function(e,n){return C.current.useEffect(e,n)},n.useId=function(){return C.current.useId()},n.useImperativeHandle=function(e,n,t){return C.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return C.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return C.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return C.current.useMemo(e,n)},n.useReducer=function(e,n,t){return C.current.useReducer(e,n,t)},n.useRef=function(e){return C.current.useRef(e)},n.useState=function(e){return C.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return C.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return C.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(667294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);