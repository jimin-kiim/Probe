## 테스트
1. v1 배포 (deployment yaml로 클러스터에 적용)
    ```
    kubectl apply -f deployment-v1.yaml
    ```
2. 서비스 생성 
    ```
    kubectl apply -f service.yaml
    ```
3. 배포 상태 확인
    ```
    kubectl rollout status deployment express-deploy
    ```
4. 임시 pod 만들어 서비스 통해 현재 배포된 버전 확인하는 요청 전송
    ```
    kubectl run curl-client -- image=curlimages/curl -it --restart=Never sh
    ```

    ```
    while true: do curl -s express-service: 3000: sleep 1; done
    ```
5. v2 배포
    ```
    kubectl apply -f deployment-v2.yaml
    ```
6. 배포 상태 확인
    ```
    kubectl rollout status deployment express-deploy
    ```
7. 배포 작업 롤백
    ```
    kubectl rollout undo deployment express-deploy
    ```
8. 배포 작업 확인
    ```
    kubectl rollout status deployment express-deploy
    ```
9. 리소스 정리
    ```
    kubectl delete pod curl-client 
    ```

## 결과 
<img width="1317" height="491" alt="스크린샷 2025-12-04 오전 10 00 00" src="https://github.com/user-attachments/assets/d20f4e59-92bf-474f-b983-0afa80f853fc" />

<img width="1347" height="427" alt="스크린샷 2025-12-04 오전 10 00 01" src="https://github.com/user-attachments/assets/eda6947d-691b-438e-bdc9-573dfab9da43" />
