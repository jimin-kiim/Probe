## 테스트
1. yaml 파일 작성을 통한 role, cluster role 정의
2. yaml 파일 작성을 통한 role binding, cluster role binding으로 Role 부여
3. 클러스터에 적용해 리소스 생성 
4. 테스트에 활용할 임시 리소스(pod, configmap) 생성 
5. 리소스 접근 테스트
6. 리소스 정리 

## 결과
<img width="941" height="1067" alt="스크린샷 2025-12-06 오후 8 03 18" src="https://github.com/user-attachments/assets/4a70c0b5-9231-42e1-b4ca-779ebd57cb1c" />

role과 cluster role을 정의하고 role binding과 cluster role binding을 통해 dev-user를 이름으로 하는 User에게 pod와 node에 대한 조회 권한을 부여하였습니다. 
dev-user로 pod, node, configmap, service 리소스에 대한 접근 시도를 하자 role과 cluster role에 권한으로 정의되었던 작업은 문제없이 수행되고, 그렇지 않은 작업의 경우 Forbidden 에러를 출력하는 것을 확인할 수 있었습니다. 