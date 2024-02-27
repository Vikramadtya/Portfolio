# To run the build use the commands below
#   make build-development
#   make start-development
# ** make is very picky use tab instead of space

.PHONY: build-development
build-development: ## Build the development docker image.
	docker compose --env-file ./docker/dev/.env.dev -f ./docker/dev/compose.dev.yaml build

.PHONY: start-development
start-development: ## Start the development docker container.
	docker compose --env-file ./docker/dev/.env.dev -f ./docker/dev/compose.dev.yaml up -d

.PHONY: stop-development
stop-development: ## Stop the development docker container.
	docker compose -f ./docker/dev/compose.dev.yaml down