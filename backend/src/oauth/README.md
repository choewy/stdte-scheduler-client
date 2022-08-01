# TODO

- 작성일자 : 20220801
- 내용
  - auth(토큰 관리) 모듈과 oauth 분리할 것
  - oauth는 entity와 repository만 구현하고, controller와 service, module은 불필요(orm 관계 설정 시 활용)
  - 왜? 각 플랫폼 별 계정 통합을 위해
