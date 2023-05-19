# IgniteGPT

IgniteGPT is a cross-platform AI application that adds powerful features to ChatGPT.

## openapi code gen

- install swagger-cli: `npm install -g @apidevtools/swagger-cli`
- make a folder called `gen`
- create the openapi spec bundle: `swagger-cli bundle ignite-gpt-openapi/openapi.yaml -o gen/openapi.json -t json`
- follow instructions on [rtk-query docs](https://redux-toolkit.js.org/rtk-query/usage/code-generation#openapi) to generate rtk-query api
