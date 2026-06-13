# pro_sap — SAP × 전자구매(e-Procurement) 학습

SAP 구매(MM-PUR)의 핵심 구조부터 전자구매 시스템과의 연계 방식, 업종별 구매 프로세스 차이,
한국 실무 특화 주제, 심화 과정과 인터랙티브 시뮬레이터까지 도식 중심으로 학습하는 자료입니다.
순수 HTML/CSS/JS(의존성 제로)로 작성되어 웹/모바일 어디서든 열립니다.

**구성: 본 과정 5차시(11편) + 심화 8편 + 인터랙티브 1편 + 공정 다이어그램 1편 + 레퍼런스 1편 — 총 22개 레슨 완성**

## 보는 방법

- **웹/모바일**: https://totoma7.github.io/pro_sap/ (GitHub Pages)
- **로컬**: `index.html`을 브라우저로 열거나, 프로젝트 루트에서 `python3 -m http.server 8000` 실행 후 `http://localhost:8000` 접속
- 첫 접속 시 등록된 ID를 입력하면 60일간 열람 쿠키가 발급됩니다 (클라이언트 측 열람 제한 — 보안 장치 아님)

## 커리큘럼

### 본 과정

| 차시 | 레슨 | 핵심 내용 |
|---|---|---|
| 1차시 | [1-1 조직 구조 & 마스터 데이터](https://totoma7.github.io/pro_sap/lessons/01-1-structure.html) | Company Code·Plant·구매조직의 관계, 5대 마스터, 동기화 원본 정의 |
| | [1-2 구매 문서 흐름 (P2P)](https://totoma7.github.io/pro_sap/lessons/01-2-p2p-flow.html) | PR→PO→GR→IV→지급, 3-Way Match, GR/IR 계정 |
| | [1-3 문서 유형 & 품목 범주](https://totoma7.github.io/pro_sap/lessons/01-3-doc-types.html) | Document Type, Item Category(외주 L·서비스 D), 계정 지정 |
| 2차시 | [2-1 직접구매 vs 간접구매](https://totoma7.github.io/pro_sap/lessons/02-1-direct-indirect.html) | 시스템 아키텍처가 갈라지는 근본 이유 |
| | [2-2 전자구매 시스템 유형](https://totoma7.github.io/pro_sap/lessons/02-2-system-types.html) | Ariba 모듈, 자체 구축 그룹 포털, 나라장터(KONEPS) |
| 3차시 | [3-1 연계 기술 스택](https://totoma7.github.io/pro_sap/lessons/03-1-integration-tech.html) | IDoc·BAPI/RFC·OData·미들웨어(CPI/CIG), 기술 선택 기준 |
| | [3-2 연계 시나리오 & Punch-out](https://totoma7.github.io/pro_sap/lessons/03-2-scenarios-punchout.html) | 인터페이스 목록, OCI/cXML, 멱등성·재처리·대사 |
| 4차시 | [4-1 제조 · 유통/리테일](https://totoma7.github.io/pro_sap/lessons/04-1-mfg-retail.html) | MRP·납품일정계약·ASN vs Article·자동 보충·사후 정산 |
| | [4-2 건설 · 공공 · 제약 · 금융](https://totoma7.github.io/pro_sap/lessons/04-2-const-public-pharma-fin.html) | WBS·기성·유보금, 나라장터, 배치·QM·COA, 예산 통제 |
| | [4-3 반도체](https://totoma7.github.io/pro_sap/lessons/04-3-semiconductor.html) | 장비 CAPEX 마일스톤(FAT/SAT), 원부자재 VMI·ERS 정산, 스페어 수리 순환, 수출 규제 |
| 5차시 | [5-1 한국 실무 특화](https://totoma7.github.io/pro_sap/lessons/05-1-korea-specifics.html) | 세금계산서 대사(4-Way)·역발행, 상생결제, 이중 원장 운영 |

### 심화 (Deep Dive)

| 편 | 레슨 | 핵심 내용 |
|---|---|---|
| 심화 1 | [IDoc 깊이 보기](https://totoma7.github.io/pro_sap/lessons/A-1-idoc-deep-dive.html) | ORDERS05 세그먼트 해부, 상태 코드 생애주기, WE02·BD87·WE19, 장애 분석 실습 |
| 심화 2 | [Ariba·CIG 매핑 실무](https://totoma7.github.io/pro_sap/lessons/A-2-ariba-cig-mapping.html) | cXML↔IDoc 대응, 커스텀 매핑 이슈 5선, 공급사 온보딩 웨이브 |
| 심화 3 | [종합 케이스 스터디](https://totoma7.github.io/pro_sap/lessons/A-3-case-study.html) | 가상 그룹사(제조·건설·서비스) 구매포털을 처음부터 설계하는 통합 연습 |
| 심화 4 | [페이로드로 보는 매핑](https://totoma7.github.io/pro_sap/lessons/A-4-payload-mapping.html) | 같은 PO의 IDoc·cXML 원문 대조, 필드 매핑 표, 현장 실전 Q&A 5선 |
| 심화 5 | [반도체 특화 SAP·전자구매 구현](https://totoma7.github.io/pro_sap/lessons/A-5-semicon-sap-eproc.html) | 장비 CAPEX(IM·PS·AA·분할 지급), 위탁·파이프라인·ERS, PM 수리 순환, GTS 수출통제, Fab 인터페이스 목록 |
| 심화 6 | [반도체 MRP](https://totoma7.github.io/pro_sap/lessons/A-6-semicon-mrp.html) | 웨이퍼 투입 계획 × 원단위 예측, MRP 유형 설계(PD/VB/VV/ND), 긴 리드타임 대응, 예측↔확약(Forecast/Commit) 연계 |
| 심화 7 | [반도체 외주·매각·ESG·협력사 평가](https://totoma7.github.io/pro_sap/lessons/A-7-semicon-osat-esg.html) | OSAT 외주·수율 정산, 중고 장비·스크랩 매각, RBA·분쟁광물·Scope 3, 협력사 등급 평가·쿼터 연동 |
| 심화 8 | [AEO — 수출입 안전관리 우수업체](https://totoma7.github.io/pro_sap/lessons/A-8-semicon-aeo-process-map.html) | AEO vs GTS 수출통제, 통관 우대·공급망 보안 의무, 협력사 평가·등록 심사에 AEO 연계 |

### 인터랙티브

| 레슨 | 핵심 내용 |
|---|---|
| [P2P 시뮬레이터](https://totoma7.github.io/pro_sap/lessons/I-1-p2p-simulator.html) | 표준 자재/외주(L)/서비스(D) 시나리오를 단계별 클릭 진행 — 주체·회계 효과·인터페이스 표시 |

### 공정 다이어그램

| 레슨 | 핵심 내용 |
|---|---|
| [반도체 제조 공정 다이어그램](https://totoma7.github.io/pro_sap/lessons/P-1-semicon-process.html) | 전공정(산화→포토 사이클 반복→EDS)·후공정(다이싱→본딩→몰딩→테스트) 단계별 도식, 공정별 소비 자재·장비를 구매 카테고리와 매핑 |

### 레퍼런스

| 레슨 | 핵심 내용 |
|---|---|
| [구매 카테고리 용어 사전](https://totoma7.github.io/pro_sap/lessons/R-1-category-glossary.html) | 직접/간접·CAPEX/OPEX·MRO·저장품 등 용어를 4가지 축으로 정리, SAP 자재유형·계정지정 결정표, 헷갈리는 용어 Q&A |

## 추천 학습 경로

- **처음 시작**: 1차시 → 2차시 → 3차시 순서대로. 각 차시가 앞 차시 개념을 참조합니다.
- **업종 관심사부터**: 1차시(필수 기초) → 4차시에서 해당 업종 → 관련 차시로 역추적.
- **연계 개발자**: 1차시 → 3차시 → 심화 1·2·4 (페이로드와 매핑 중심).
- **복습/정리**: 5-1 마지막의 "전체 커리큘럼 한 장 정리" → P2P 시뮬레이터로 흐름 체화 → 심화 3 케이스 스터디로 자가 점검.

## 구조

```
.
├── index.html            # 메인 목차 (커리큘럼 + 진행 상태)
├── assets/
│   ├── style.css         # 공통 스타일 (모바일 퍼스트 반응형, 의존성 없음)
│   └── gate.js           # 접근 게이트 (ID 확인 → 60일 열람 쿠키)
├── lessons/              # 레슨 페이지 21편
│   ├── 01-* ~ 05-*       # 본 과정 (5차시 11편)
│   ├── A-1 ~ A-8         # 심화 8편 (A-5~A-8은 반도체 시리즈)
│   ├── I-1               # 인터랙티브 P2P 시뮬레이터
│   ├── P-1               # 공정 다이어그램 — 반도체 제조 공정
│   └── R-1               # 레퍼런스 — 구매 카테고리 용어 사전
└── docs/                 # 마크다운 원고 (HTML 페이지의 소스 노트)
```

## 핵심 개념 한 줄 요약

> 전자구매 포털은 공급사와 만나는 **프론트**(입찰·카탈로그·협력사 관리),
> SAP은 구매의 **원장**(PO·입고·송장·지급). 대부분의 기업은 이 이중 구조로 운영한다.
