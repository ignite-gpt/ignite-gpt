# IgniteGPT

IgniteGPT is a cross-platform AI application that adds powerful features to ChatGPT.

See https://ignitegpt.ai for a hosted version of the webapp.

## Installation

```sh
npm install
```

## Usage

Run the desktop app

```sh
npm start
```

Run the web app

```sh
npm run start:web
```

Run the iOS app in Simulator. Note: This requires [prerequisites](https://docs.expo.dev/workflow/ios-simulator/).

```sh
npm run start:ios
```

Run the iOS app on device. Note: This requires [prerequisites](https://docs.expo.dev/guides/ios-developer-mode/).

```sh
npm run start:ios:device
```

## Contributing

### OpenAPI spec

Documentation for a persistence API is available at <https://ignitegpt.ai/docs>.
You can run this locally with:

```sh
npm run start:docs
```

It is based on the OpenAPI spec located in the [`ignite-gpt-openapi`](ignite-gpt-openapi) folder ([`openapi.yaml`](ignite-gpt-openapi/openapi.yaml), [`paths.yaml`](ignite-gpt-openapi/paths.yaml), and [`schemas.yaml`](ignite-gpt-openapi/schemas.yaml)) and is also available at <https://ignitegpt.ai/openapi.json>.

### Update app code from OpenAPI spec

```sh
npm run generate
```
