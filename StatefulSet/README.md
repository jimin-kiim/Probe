## 테스트
1. 호스트이름 확인하는 app.js 및 dockerfile 작성, 이미지 빌드, 푸시
2. stateful set, service, pv 작성 
3. 클러스터에 stateful set, service, pv 생성 단계 적용
    ```
    kubectl apply -f <file name>
    ```
4. 생성된 pod 확인
    ```
     kubectl get pods -l app=express-stateful
    ```
5. pvc 바인딩 확인
    ```
    kubectl get pvc
    ```
6. 임시 pod 만들어 요청 보내 호스트네임 확인
    ```
    kubectl run curl-client --image=curlimages/curl -it --restart=Never -- sh <curl 요청>
    ```
7. pvc 정보 확인
    ```
    kubectl describe pvc <pvc 이름>
    ```
8. pod 삭제 후 재생성 확인 
    ```
    kubectl delete pod <pod 이름 >
    ```


## 결과
<img width="1263" height="595" alt="스크린샷 2025-12-04 오후 6 41 39" src="https://github.com/user-attachments/assets/d9b56257-378d-418e-929b-7f091a10775e" />
<img width="1263" height="1075" alt="스크린샷 2025-12-04 오후 6 46 07" src="https://github.com/user-attachments/assets/fcec5b0b-0194-46ec-b3f9-1bd42b507ac6" />
