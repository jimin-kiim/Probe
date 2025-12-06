## 테스트
 1. vpa 설치
```
git clone https://github.com/kubernetes/autoscaler.git
cd autoscaler/vertical-pod-autoscaler/
./hack/vpa-up.sh
```
 2. vpa 실행 확인 
 ```
 kubectl get pods -n kube-system | grep vpa
 ```
 3. deployment.yaml, vpa.yaml 파일 생성 및 클러스터에 적용해 리소스 생성
 4. 실시간 vpa 리소스 추천값 확인
 ```
 watch -n 5 kubectl describe vpa vpa-demo
 ```
 5. pod 정보 확인
 ```
 kubectl describe pod <pod-name> | grep -A 10 "Containers:"
 ```
 6. pod 삭제 및 새로 생성된 Pod의 vpa 반영 값 확인
 7. 리소스 정리 

 ## 결과


<img width="941" height="987" alt="스크린샷 2025-12-06 오후 6 34 09" src="https://github.com/user-attachments/assets/71f0d639-3002-40a2-ac03-95a55f9ad7cc" />
<img width="941" height="567" alt="스크린샷 2025-12-06 오후 6 39 54" src="https://github.com/user-attachments/assets/a331fdfe-5db7-4e6b-9083-35ad16ef4153" />

vpa의 status.recommendation.upperbound 값이 워크로드 부하에 따라 실시간으로 변경되는 것을 확인할 수 있었습니다. 또한 pod를 삭제하자 ReplicaSet에 의해 새로운 pod가 자동으로 생성되었고, 정보를 확인해보니 vpa에 의해 조정된 자원 requests 값이 반영되었음을 annotations를 통해 확인할 수 있었습니다. 