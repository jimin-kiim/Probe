## 테스트
1. deployment.yaml, hpa.yaml 파일 작성 
2. metrics server 설치
3. 클러스터에 적용 및 리소스 생성
4. Pod, HPA 상태 확인
5. CPU 연산 부하 발생시키는 트리거 실행
6. Pod, HPA 상태 확인

## 결과
<img width="832" height="1012" alt="스크린샷 2025-12-06 오후 4 48 02" src="https://github.com/user-attachments/assets/6bd64be6-e000-459b-83e3-bdc0eebfa1d0" />
<img width="832" height="1012" alt="스크린샷 2025-12-06 오후 4 48 24" src="https://github.com/user-attachments/assets/708fd516-579b-4858-8caf-28a99964960a" />
<img width="832" height="1012" alt="스크린샷 2025-12-06 오후 4 49 58" src="https://github.com/user-attachments/assets/ea3a641e-702d-44fa-ab58-876dfa6f0830" />

초기엔 설정한 값 만큼의 pod를 만들어 실행하지만 부하를 주는 트리거 실행으로 deployment의 파드 수 대비 평균 cpu 사용량이 임계치를 넘어섰을 때 replicas 수를 늘리는 것을 확인할 수 있었다. 