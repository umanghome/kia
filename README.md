# KIA Bengaluru Airport Bus UI

## Local development
- Create a `.env` file in the root folder of the repo with the below contents:
    ```dotenv
    VITE_MAPBOX_TOKEN=insert_mapbox_token_here
    VITE_GOOGLE_API_KEY=insert_google_api_key_here
    BMTC_API_ENDPOINT=endpoint_of_btmc_web_api
    ```
  The BMTC web api is used to refresh the `src/utils/timings.json` file when there are updates to bus timings. It is not publicly available. If you need it, please reach out to the team on [Discord](https://discord.gg/XhmvDP4kXp).
- Run the below commands
    ```bash
    yarn install
    yarn start
    ```


## Contributing to the repo
Before raising a pull request for feature additions, please open an issue discussing the change.  

Please follow the below guidelines for consistency and ease of review:
- Configure Prettier to run on file save for your IDE
- Use concise and descriptive commit messages
