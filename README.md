# charity-frontend

echo '000 USER:'$USER
cd frontend/
yarn
cd ../devenv/
./gen_img.sh
./push_img.sh
cd k8s
kubectl config use-context luomu-test
kubectl delete -f charity_frontend.yaml
kubectl apply -f charity_frontend.yaml
