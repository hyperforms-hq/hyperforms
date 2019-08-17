#! /bin/bash
docker run -d -p 8080:8080 \
       -e HASURA_GRAPHQL_DATABASE_URL=postgres://hyperforms:hyperforms@host.docker.internal:5432/hyperforms \
       -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
       hasura/graphql-engine:v1.0.0-beta.4
