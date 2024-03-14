.PHONY: clean build run logsmake

DC=docker compose -f .development.docker-compose.yml

default: help
init: init-env check-env install

help:
	@echo "USAGE:"
	@echo "  make [TARGET]"
	@echo
	@echo "EXAMPLES:"
	@echo "  Build and start stack for local development with logs:"
	@echo "    make build dev logs"
	@echo
	@echo "TARGETS:"
	@echo "  init:                                initialize project"
	@echo
	@echo "  // For local development"
	@echo "  dev:                                 start local development"
	@echo "   dev-all:                            start all dev containers"
	@echo "   dev-web:                            start dev web image"
	@echo "   dev-cms:                            start dev cms image"
	@echo "   dev-db:                             start dev db image"
	@echo
	@echo "  // For building containers"
	@echo "  build:                               build all"
	@echo "   build-web:                          build web image"
	@echo "   build-cms:                          build cms image"
	@echo
	@echo "  // Utilities"
	@echo "  install:                             install dependencies for all services"
	@echo "  init-env:                            initialize .env files"
	@echo "  check-env:                           compare keys in .env files with .env.example files"
	@echo "  logs:                                show logs for all containers"
	@echo "  clean:                               clean up workspace"
	@echo
	@echo "  stop:                                stop all containers"
	@echo "   stop-web:                           stop only web"
	@echo "   stop-cms:                           stop only cms"
	@echo "   stop-db:                            stop only db"

## GENERAL

install:
	@echo "Installing web dependencies"
	@echo "==========================="
	cd web && . ${NVM_DIR}/nvm.sh && nvm use && npm install
	@echo "Installing cms dependencies"
	@echo "==========================="
	cd cms && . ${NVM_DIR}/nvm.sh && nvm use && npm install

init-env:
	test -f .env || cp .env.example .env
	test -f web/.env || cp .env.example web/.env
	cd cms/ && ( test -f .env || cp .env.example .env )
	@echo '-----------------------------------------------------'
	@echo 'please update the .env files with the missing secrets'

check-env:
	./scripts/check-env.sh .env.example .env
	./scripts/check-env.sh .env.example web/.env
	./scripts/check-env.sh cms/.env.example cms/.env

# NOTE: Package throws an error when using the CLI to import or export config
import-config:
	@echo "Syncing config files to the database"
	cd cms/ && npm run cs i
export-config:
	@echo "Exporting config files from the database"
	cd cms/ && npm run cs e

logs:
	$(DC) logs -t -f web db cms

clean:
	$(DC) down
	$(DC) down --volumes

stop:
	$(DC) stop

stop-web:
	$(DC) stop web

stop-cms:
	$(DC) stop cms

stop-db:
	$(DC) stop db

## DOCKER DEVELOPMENT
dev: init dev-all

dev-all:
	$(DC) up -d
	@echo 'NOTE: Make sure to import new config files to the database. Go to Settings > Config Sync > Interface in the Admin Panel and click on "Import".'

dev-web:
	$(DC) up -d web

dev-cms:
	$(DC) up -d cms
	@echo 'NOTE: Make sure to import new config files to the database. Go to Settings > Config Sync > Interface in the Admin Panel and click on "Import".'

dev-database:
	$(DC) up -d db

## DOCKER BUILD
build: init
	$(DC) build

build-web:
	$(DC) build web

build-cms:
	$(DC) build cms