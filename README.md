# charity-frontend

echo '000 USER:'$USER
cd frontend/
yarn
cd ../devenv/
chmod a+x *.sh
./gen_img.sh
./push_img.sh
cd k8s
#kubectl config use-context luomu-test

kubectl --kubeconfig=/root/k8s_config/luomu-test.yaml --ignore-not-found=true delete -f charity_frontend.yaml
kubectl --kubeconfig=/root/k8s_config/luomu-test.yaml apply -f charity_frontend.yaml
