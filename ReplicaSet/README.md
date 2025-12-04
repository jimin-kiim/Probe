## 테스트
1. ReplicaSet 정의 파일 클러스터에 적용
    ```
    kubectl apply -f replicaset.yaml
    ```
2. ReplicaSet 확인
    ```
    kubectl get replicaset
    ```
3. Pod 리스트 확인
    ```
    kubectl get pods -l app=express-rs -o wide
    ```
4. Pod 중 하나 삭제
    ```
    kubectl delete pod <pod-name>
    ```
5. Pod 리스트 재확인

## 결과
<img width="1165" height="747" alt="스크린샷 2025-12-04 오전 1 33 03" src="https://github.com/user-attachments/assets/bfc72581-db85-48cb-ab4d-7e3e3dd33b02" />