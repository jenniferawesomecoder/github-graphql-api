export const graphqlData = {
    "data":{
      "repository":{
        "id":"MDEwOlJlcG9zaXRvcnkyNzI1MTM5Mzg=",
        "name":"portfolio",
        "description":null,
        "homepageUrl":null,
        "owner":{
          "avatarUrl":"https://avatars0.githubusercontent.com/u/61946829?v=4",
          "id":"MDQ6VXNlcjYxOTQ2ODI5",
          "email":"",
          "name":null,
          "__typename":"User"
        },
        "vulnerabilityAlerts":{
          "nodes":[
            {
              "id":"MDI4OlJlcG9zaXRvcnlWdWxuZXJhYmlsaXR5QWxlcnQzMTM1NzU2NTQ=",
              "vulnerableRequirements":"= 0.1.3",
              "vulnerableManifestPath":"yarn.lock",
              "securityVulnerability":{
                "package":{
                  "name":"websocket-extensions",
                  "ecosystem":"NPM",
                  "__typename":"SecurityAdvisoryPackage"
                },
                "vulnerableVersionRange":"< 0.1.4",
                "severity":"MODERATE",
                "__typename":"SecurityVulnerability"
              },
              "createdAt":"2020-06-20T18:17:47Z",
              "__typename":"RepositoryVulnerabilityAlert"
            },
            {
              "id":"MDI4OlJlcG9zaXRvcnlWdWxuZXJhYmlsaXR5QWxlcnQzMzMxNzEzMjE=",
              "vulnerableRequirements":"= 4.17.15",
              "vulnerableManifestPath":"yarn.lock",
              "securityVulnerability":{
                "package":{
                  "name":"lodash",
                  "ecosystem":"NPM",
                  "__typename":"SecurityAdvisoryPackage"
                },
                "vulnerableVersionRange":"< 4.17.19",
                "severity":"LOW",
                "__typename":"SecurityVulnerability"
              },
              "createdAt":"2020-07-19T09:30:44Z",
              "__typename":"RepositoryVulnerabilityAlert"
            },
            {
              "id":"MDI4OlJlcG9zaXRvcnlWdWxuZXJhYmlsaXR5QWxlcnQzNDU3NDc2MzI=",
              "vulnerableRequirements":"= 6.5.2",
              "vulnerableManifestPath":"yarn.lock",
              "securityVulnerability":{
                "package":{
                  "name":"elliptic",
                  "ecosystem":"NPM",
                  "__typename":"SecurityAdvisoryPackage"
                },
                "vulnerableVersionRange":"< 6.5.3",
                "severity":"HIGH",
                "__typename":"SecurityVulnerability"
              },
              "createdAt":"2020-08-01T03:00:00Z",
              "__typename":"RepositoryVulnerabilityAlert"
            },
            {
              "id":"MDI4OlJlcG9zaXRvcnlWdWxuZXJhYmlsaXR5QWxlcnQzNTMyODE2NDg=",
              "vulnerableRequirements":"= 2.1.2",
              "vulnerableManifestPath":"yarn.lock",
              "securityVulnerability":{
                "package":{
                  "name":"serialize-javascript",
                  "ecosystem":"NPM",
                  "__typename":"SecurityAdvisoryPackage"
                },
                "vulnerableVersionRange":"< 3.1.0",
                "severity":"HIGH",
                "__typename":"SecurityVulnerability"
              },
              "createdAt":"2020-08-13T12:09:33Z",
              "__typename":"RepositoryVulnerabilityAlert"
            }
          ],
          "__typename":"RepositoryVulnerabilityAlertConnection"
        },
        "dependencyGraphManifests":{
          "nodes":[
            {
              "id":"MDIzOkRlcGVuZGVuY3lHcmFwaE1hbmlmZXN0MjcyNTEzOTM4OjE3NDM1MDAyMg==",
              "filename":"package.json",
              "dependenciesCount":9,
              "dependencies":{
                "nodes":[
                  {
                    "packageName":"@testing-library/jest-dom",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"^ 4.2.4",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkxMjg3Nzg2OTI=",
                      "name":"jest-dom",
                      "owner":{
                        "avatarUrl":"https://avatars1.githubusercontent.com/u/49996085?v=4",
                        "id":"MDEyOk9yZ2FuaXphdGlvbjQ5OTk2MDg1",
                        "email":null,
                        "name":"Testing Library",
                        "__typename":"Organization"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  },
                  {
                    "packageName":"@testing-library/react",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"^ 9.3.2",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkxMjU4NjM1MDc=",
                      "name":"react-testing-library",
                      "owner":{
                        "avatarUrl":"https://avatars1.githubusercontent.com/u/49996085?v=4",
                        "id":"MDEyOk9yZ2FuaXphdGlvbjQ5OTk2MDg1",
                        "email":null,
                        "name":"Testing Library",
                        "__typename":"Organization"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  },
                  {
                    "packageName":"@testing-library/user-event",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"^ 7.1.2",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkxNDk2MzgxNjU=",
                      "name":"user-event",
                      "owner":{
                        "avatarUrl":"https://avatars1.githubusercontent.com/u/49996085?v=4",
                        "id":"MDEyOk9yZ2FuaXphdGlvbjQ5OTk2MDg1",
                        "email":null,
                        "name":"Testing Library",
                        "__typename":"Organization"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  },
                  {
                    "packageName":"aos",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"^ 2.3.4",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkzODgzNjAxNQ==",
                      "name":"aos",
                      "owner":{
                        "avatarUrl":"https://avatars3.githubusercontent.com/u/4093559?u=e5e80627d616914be44d849f4a7cf1aff94037f9&v=4",
                        "id":"MDQ6VXNlcjQwOTM1NTk=",
                        "email":"msajnog93@gmail.com",
                        "name":"Michał Sajnóg",
                        "__typename":"User"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  },
                  {
                    "packageName":"react",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"^ 16.13.1",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
                      "name":"react",
                      "owner":{
                        "avatarUrl":"https://avatars3.githubusercontent.com/u/69631?v=4",
                        "id":"MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
                        "email":null,
                        "name":"Facebook",
                        "__typename":"Organization"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  }
                ],
                "pageInfo":{
                  "hasNextPage":true,
                  "endCursor":"NQ",
                  "__typename":"PageInfo"
                },
                "__typename":"DependencyGraphDependencyConnection"
              },
              "__typename":"DependencyGraphManifest"
            },
            {
              "id":"MDIzOkRlcGVuZGVuY3lHcmFwaE1hbmlmZXN0MjcyNTEzOTM4OjE3NDM1MDAyNA==",
              "filename":"yarn.lock",
              "dependenciesCount":1221,
              "dependencies":{
                "nodes":[
                  {
                    "packageName":"elliptic",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"= 6.5.2",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkxOTAyOTEyMA==",
                      "name":"elliptic",
                      "owner":{
                        "avatarUrl":"https://avatars1.githubusercontent.com/u/238531?u=602d6ef0c20b1aaded9562d805368f5cab9bb601&v=4",
                        "id":"MDQ6VXNlcjIzODUzMQ==",
                        "email":"fedor@indutny.com",
                        "name":"Fedor Indutny",
                        "__typename":"User"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  },
                  {
                    "packageName":"lodash",
                    "packageManager":"NPM",
                    "hasDependencies":false,
                    "requirements":"= 4.17.15",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkzOTU1NjQ3",
                      "name":"lodash",
                      "owner":{
                        "avatarUrl":"https://avatars3.githubusercontent.com/u/2565403?v=4",
                        "id":"MDEyOk9yZ2FuaXphdGlvbjI1NjU0MDM=",
                        "email":null,
                        "name":"Lodash Utilities",
                        "__typename":"Organization"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  },
                  {
                    "packageName":"serialize-javascript",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"= 2.1.2",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkyNDEwNjk0NA==",
                      "name":"serialize-javascript",
                      "owner":{
                        "avatarUrl":"https://avatars1.githubusercontent.com/u/16574?v=4",
                        "id":"MDEyOk9yZ2FuaXphdGlvbjE2NTc0",
                        "email":"ospo@verizonmedia.com",
                        "name":"Yahoo",
                        "__typename":"Organization"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  },
                  {
                    "packageName":"websocket-extensions",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"= 0.1.3",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkyNzEyNzg3OA==",
                      "name":"websocket-extensions-node",
                      "owner":{
                        "avatarUrl":"https://avatars3.githubusercontent.com/u/1277447?v=4",
                        "id":"MDEyOk9yZ2FuaXphdGlvbjEyNzc0NDc=",
                        "email":null,
                        "name":"faye",
                        "__typename":"Organization"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  },
                  {
                    "packageName":"@babel/code-frame",
                    "packageManager":"NPM",
                    "hasDependencies":true,
                    "requirements":"= 7.10.1",
                    "repository":{
                      "id":"MDEwOlJlcG9zaXRvcnkyNDU2MDMwNw==",
                      "name":"babel",
                      "owner":{
                        "avatarUrl":"https://avatars1.githubusercontent.com/u/9637642?v=4",
                        "id":"MDEyOk9yZ2FuaXphdGlvbjk2Mzc2NDI=",
                        "email":null,
                        "name":"Babel",
                        "__typename":"Organization"
                      },
                      "__typename":"Repository"
                    },
                    "__typename":"DependencyGraphDependency"
                  }
                ],
                "pageInfo":{
                  "hasNextPage":true,
                  "endCursor":"NQ",
                  "__typename":"PageInfo"
                },
                "__typename":"DependencyGraphDependencyConnection"
              },
              "__typename":"DependencyGraphManifest"
            }
          ],
          "__typename":"DependencyGraphManifestConnection"
        },
        "__typename":"Repository"
      }
    }
  }

export const node = {
  "packageName":"aos",
  "packageManager":"NPM",
  "hasDependencies":true,
  "requirements":"^ 2.3.4",
  "repository":{
    "id":"MDEwOlJlcG9zaXRvcnkzODgzNjAxNQ==",
    "name":"aos",
    "owner":{
      "avatarUrl":"https://avatars3.githubusercontent.com/u/4093559?u=e5e80627d616914be44d849f4a7cf1aff94037f9&v=4",
      "id":"MDQ6VXNlcjQwOTM1NTk=",
      "email":"msajnog93@gmail.com",
      "name":"Michał Sajnóg",
      "__typename":"User"
    },
    "__typename":"Repository"
  },
  "__typename":"DependencyGraphDependency"
}

export const packageJsonData = {
  "id":"MDIzOkRlcGVuZGVuY3lHcmFwaE1hbmlmZXN0MjcyNTEzOTM4OjE3NDM1MDAyMg==",
  "filename":"package.json",
  "dependenciesCount":9,
  "dependencies":{
    "nodes":[
      {
        "packageName":"@testing-library/jest-dom",
        "packageManager":"NPM",
        "hasDependencies":true,
        "requirements":"^ 4.2.4",
        "repository":{
          "id":"MDEwOlJlcG9zaXRvcnkxMjg3Nzg2OTI=",
          "name":"jest-dom",
          "owner":{
            "avatarUrl":"https://avatars1.githubusercontent.com/u/49996085?v=4",
            "id":"MDEyOk9yZ2FuaXphdGlvbjQ5OTk2MDg1",
            "email":null,
            "name":"Testing Library",
            "__typename":"Organization"
          },
          "__typename":"Repository"
        },
        "__typename":"DependencyGraphDependency"
      },
      {
        "packageName":"@testing-library/react",
        "packageManager":"NPM",
        "hasDependencies":true,
        "requirements":"^ 9.3.2",
        "repository":{
          "id":"MDEwOlJlcG9zaXRvcnkxMjU4NjM1MDc=",
          "name":"react-testing-library",
          "owner":{
            "avatarUrl":"https://avatars1.githubusercontent.com/u/49996085?v=4",
            "id":"MDEyOk9yZ2FuaXphdGlvbjQ5OTk2MDg1",
            "email":null,
            "name":"Testing Library",
            "__typename":"Organization"
          },
          "__typename":"Repository"
        },
        "__typename":"DependencyGraphDependency"
      },
      {
        "packageName":"@testing-library/user-event",
        "packageManager":"NPM",
        "hasDependencies":true,
        "requirements":"^ 7.1.2",
        "repository":{
          "id":"MDEwOlJlcG9zaXRvcnkxNDk2MzgxNjU=",
          "name":"user-event",
          "owner":{
            "avatarUrl":"https://avatars1.githubusercontent.com/u/49996085?v=4",
            "id":"MDEyOk9yZ2FuaXphdGlvbjQ5OTk2MDg1",
            "email":null,
            "name":"Testing Library",
            "__typename":"Organization"
          },
          "__typename":"Repository"
        },
        "__typename":"DependencyGraphDependency"
      },
      {
        "packageName":"aos",
        "packageManager":"NPM",
        "hasDependencies":true,
        "requirements":"^ 2.3.4",
        "repository":{
          "id":"MDEwOlJlcG9zaXRvcnkzODgzNjAxNQ==",
          "name":"aos",
          "owner":{
            "avatarUrl":"https://avatars3.githubusercontent.com/u/4093559?u=e5e80627d616914be44d849f4a7cf1aff94037f9&v=4",
            "id":"MDQ6VXNlcjQwOTM1NTk=",
            "email":"msajnog93@gmail.com",
            "name":"Michał Sajnóg",
            "__typename":"User"
          },
          "__typename":"Repository"
        },
        "__typename":"DependencyGraphDependency"
      },
      {
        "packageName":"react",
        "packageManager":"NPM",
        "hasDependencies":true,
        "requirements":"^ 16.13.1",
        "repository":{
          "id":"MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
          "name":"react",
          "owner":{
            "avatarUrl":"https://avatars3.githubusercontent.com/u/69631?v=4",
            "id":"MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
            "email":null,
            "name":"Facebook",
            "__typename":"Organization"
          },
          "__typename":"Repository"
        },
        "__typename":"DependencyGraphDependency"
      }
    ],
    "pageInfo":{
      "hasNextPage":true,
      "endCursor":"NQ",
      "__typename":"PageInfo"
    },
    "__typename":"DependencyGraphDependencyConnection"
  },
  "__typename":"DependencyGraphManifest"
}