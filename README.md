# pro_sap — SAP × 전자구매(e-Procurement) 학습

SAP 구매(MM-PUR)의 핵심 구조부터 전자구매 시스템과의 연계 방식, 업종별 구매 프로세스 차이,
한국 실무 특화 주제와 심화 과정까지 도식 중심으로 학습하는 자료입니다.
순수 HTML/CSS로 작성되어 웹/모바일 어디서든 열립니다. **본 과정 5차시 + 심화 3편 완성.**

## 보는 방법

- **웹/모바일**: https://totoma7.github.io/pro_sap/ (GitHub Pages)
- **로컬**: `index.html`을 브라우저로 열거나, 프로젝트 루트에서 `python3 -m http.server 8000` 실행 후 `http://localhost:8000` 접속
- 첫 접속 시 등록된 ID를 입력하면 60일간 열람 쿠키가 발급됩니다 (클라이언트 측 열람 제한 — 보안 장치 아님)

## 커리큘럼

| 차시 | 주제 | 상태 |
|---|---|---|
| 1차시 | SAP 구매(MM-PUR) 핵심 개념 — 조직 구조, 마스터 데이터, P2P 흐름, 문서 유형/품목 범주 | ✅ 완료 |
| 2차시 | 전자구매 시스템의 개념과 유형 — 직접/간접구매, Ariba, 그룹 구매포털, 나라장터 | ✅ 완료 |
| 3차시 | SAP ↔ 전자구매 연계 기술 — IDoc, BAPI, OData, CIG, Punch-out(OCI/cXML) | ✅ 완료 |
| 4차시 | 업종별 구매 프로세스 차이 — 제조, 유통, 건설, 공공, 제약, 금융 | ✅ 완료 |
| 5차시 | 한국 실무 특화 — 전자세금계산서, 상생결제, 그룹 구매포털 이중 구조 | ✅ 완료 |
| 심화 1 | IDoc 깊이 보기 — ORDERS05 세그먼트 해부, 상태 코드, 운영 트랜잭션, 장애 분석 | ✅ 완료 |
| 심화 2 | Ariba·CIG 매핑 실무 — cXML 구조, IDoc 대응, 커스텀 매핑 이슈, 공급사 온보딩 | ✅ 완료 |
| 심화 3 | 종합 케이스 스터디 — 가상 그룹사(제조·건설·서비스) 구매포털 설계 연습 | ✅ 완료 |

## 구조

```
.
├── index.html            # 메인 목차 (커리큘럼 + 진행 상태)
├── assets/style.css      # 공통 스타일 (모바일 퍼스트 반응형, 의존성 없음)
├── lessons/              # 차시별 학습 페이지
│   ├── 01-1-structure.html       # 조직 구조 & 마스터 데이터
│   ├── 01-2-p2p-flow.html        # 구매 문서 흐름 (P2P)
│   ├── 01-3-doc-types.html       # 문서 유형 & 품목 범주
│   ├── 02-1-direct-indirect.html # 직접구매 vs 간접구매
│   ├── 02-2-system-types.html    # 전자구매 시스템 유형
│   ├── 03-1-integration-tech.html      # 연계 기술 스택 (IDoc·BAPI·OData·미들웨어)
│   ├── 03-2-scenarios-punchout.html    # 연계 시나리오 & Punch-out
│   ├── 04-1-mfg-retail.html            # 제조 · 유통/리테일
│   ├── 04-2-const-public-pharma-fin.html # 건설 · 공공 · 제약 · 금융
│   ├── 05-1-korea-specifics.html       # 한국 실무 특화 (세금계산서·상생결제·이중 원장)
│   ├── A-1-idoc-deep-dive.html         # [심화] IDoc 세그먼트·상태코드·운영
│   ├── A-2-ariba-cig-mapping.html      # [심화] Ariba·CIG 매핑 실무
│   └── A-3-case-study.html             # [심화] 종합 케이스 스터디
└── docs/                 # 마크다운 원고 (HTML 페이지의 소스 노트)
```

## 핵심 개념 한 줄 요약

> 전자구매 포털은 공급사와 만나는 **프론트**(입찰·카탈로그·협력사 관리),
> SAP은 구매의 **원장**(PO·입고·송장·지급). 대부분의 기업은 이 이중 구조로 운영한다.
