# 프리윌린 - 풀리팀 채용 과제

## 실행 방법
```
yarn install
yarn dev
```

## 기술 스택
- **Frontend**: React + TypeScript + TailwindCSS  
- **상태관리**: Zustand
- **아키텍처**: FSD (Feature-Sliced Design)

## 주요 기능
- 문제 목록 관리 (삭제)
- 유사 문제 검색 및 관리 (추가/교체)
- 실시간 상태 동기화

## 설계 특징

### 상태 관리
- Zustand 기반 전역 상태 관리
- 도메인별 Store 분리: `problemStore`, `similarProblemStore`, `selectProblemStore`

### 컴포넌트 구조  
- FSD 아키텍처로 Feature 단위 모듈화
- 관심사 분리를 통한 독립성 확보
- 공통 컴포넌트는 shared 레이어에서 관리

## 폴더 구조
```
├── app/ # 앱 설정, 스토어
├── entities/ # 비즈니스 엔티티
├── features/ # 핵심 기능
├── shared/ # 공통 컴포넌트
└── widgets/ # 복합 컴포넌트
```
## 실행 화면

![Kapture 2025-09-01 at 10 19 27](https://github.com/user-attachments/assets/6616dbe4-8658-4abd-a478-699647569c99)
