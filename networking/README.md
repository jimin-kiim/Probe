## 테스트

1. yaml 파일 작성
2. yaml 파일 cluster에 적용해 파드 생성
    ```
    kubectl apply -f pod-server.yaml
    kubectl apply -f pod-client.yaml
    ```
3. 생성된 pod 확인
    ```
    kubectl get pod pod-server -o wide
    ```
4. 생성된 pod로 요청 전송 수행
    ```
    kubectl exec pod-client -- curl http://10.244.1.58:3000
    ```
5. 네트워크 폴리시 적용
    ```
    kubectl apply -f 17 network-policy.yaml
    ```

6. 4번 재수행(role label 일치 경우 수신 허용으로, 4번 수행 시와 결과 동일)
7. 임시 pod 생성해 4번 수행(flannel 사용으로 결과 동일)

## 결과

<img width="1326" height="447" alt="스크린샷 2025-12-03 오후 7 09 20" src="https://github.com/user-attachments/assets/24d13634-4eaf-4649-933b-8221df2f097d" />
<img width="1284" height="367" alt="스크린샷 2025-12-03 오후 8 25 46" src="https://github.com/user-attachments/assets/ffaac143-57ba-4374-8fa7-896cc2bee774" />
