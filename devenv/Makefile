prepare:
	yarn axios vuex vuetify vue-i18n echarts moment
	yarn --dev vue-style-loader css-loader sass-loader
	#npm audit fix --force

run_local:
	 cd ../frontend && yarn run serve

run_testnet:
	#TESTNET=testnet NODE_ENV=development vue inspect > vue_inspect_dev.js
	cd ../frontend && TESTNET=testnet yarn run serve

build_testnet:
	#cd ../frontend && TESTNET=testnet NODE_ENV=production vue inspect > vue_inspect_prod.js
	rm -rf dist
	cd ../frontend && TESTNET=testnet yarn run build && cp -rf dist ../devenv

build_testnet_stg:
	#cd ../frontend && TESTNET=testnet_stg NODE_ENV=production vue inspect > vue_inspect_stg.js
	rm -rf dist
	cd ../frontend && TESTNET=testnet_stg yarn run build && cp -rf dist ../devenv

build_prod:
	rm -rf dist
	cd ../frontend && yarn run build && cp -rf dist ../devenv
