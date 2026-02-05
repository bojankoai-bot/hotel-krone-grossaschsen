#!/bin/bash
export RAILWAY_TOKEN="dd662cd7-6be2-4d1b-86c2-e35883fb78c8"

curl -s -H "Authorization: Bearer $RAILWAY_TOKEN" \
  -H "Content-Type: application/json" \
  -X POST https://backboard.railway.app/graphql/v2 \
  -d '{
    "query": "mutation DeployFromRepo($projectId: String!, $serviceId: String!, $environmentId: String!, $provider: String!, $repo: String!, $branch: String!) { deploymentTriggerCreate(input: { projectId: $projectId, serviceId: $serviceId, environmentId: $environmentId, provider: $provider, repository: $repo, branch: $branch }) { id } }",
    "variables": {
      "projectId": "f00f5873-1197-485e-96a1-c6eef6bc50c8",
      "serviceId": "b71796fc-c29d-473b-adfa-2a6cd34f2656",
      "environmentId": "21703ab9-2d5a-4346-9ad4-9b6838bd07e9",
      "provider": "github",
      "repo": "bojankoai-bot/hotel-krone-grossaschsen",
      "branch": "main"
    }
  }'
