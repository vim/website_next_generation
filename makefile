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
	@echo "  stop:                                stop all containers"

## GENERAL

install:
	@echo "Installing web dependencies"
	@cd web && npm install
	@echo "Installing cms dependencies"
	@cd cms && npm install

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

logs:
	$(DC) logs -t -f web db cms

clean:
	$(DC) down
	$(DC) down --volumes

stop:
	$(DC) stop

## DOCKER DEVELOPMENT
dev: init dev-all

dev-all:
	$(DC) up -d

dev-web:
	$(DC) up -d web

dev-cms:
	$(DC) up -d cms

dev-database:
	$(DC) up -d db

## DOCKER BUILD
build: init
	$(DC) build

build-web:
	$(DC) build web

build-backend:
	$(DC) build cms