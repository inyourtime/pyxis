#!/usr/bin/env bash
# scripts/run-integration.sh

DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/setenv.sh

# npx prisma generate
# npx prisma migrate dev --name init

jest --config=jest.config.ts --detectOpenHandles --coverage