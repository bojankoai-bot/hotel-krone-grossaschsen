#!/bin/bash
export RAILWAY_TOKEN="dd662cd7-6be2-4d1b-86c2-e35883fb78c8"

# Try to link to the project
railway link --project="f00f5873-1197-485e-96a1-c6eef6bc50c8"

# Deploy
railway up --detach
