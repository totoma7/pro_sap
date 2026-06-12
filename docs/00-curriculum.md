# SAP × 전자구매(e-Procurement) 학습 커리큘럼

> 목표: SAP 구매(MM-PUR)의 핵심 구조를 이해하고, 외부 전자구매 시스템과의 연계 방식,
> 그리고 업종별로 구매 프로세스가 어떻게 달라지는지 실무 관점에서 학습한다.

## 1차시 — SAP 구매(MM-PUR) 핵심 개념
- 조직 구조: Client / Company Code / Plant / Storage Location / Purchasing Org / Purchasing Group
- 마스터 데이터: 자재 마스터, 공급업체(Business Partner), 구매정보레코드(Info Record), 소스리스트, 쿼터
- 구매 문서 흐름: PR → RFQ/Sourcing → PO → GR → IV → Payment
- 3-Way Match와 GR/IR 정산 개념
- 문서 유형(Document Type)과 품목 범주(Item Category: 표준, 외주 L, 위탁 K, 서비스 D 등)

## 2차시 — 전자구매 시스템의 개념과 유형
- 직접구매(Direct) vs 간접구매(Indirect/MRO) — 시스템이 갈라지는 근본 이유
- SAP 계열: Ariba(소싱·카탈로그·네트워크), SRM(레거시), S/4 중심 셀프서비스 구매
- 비SAP 계열: Coupa, 국내 그룹사 구매포털(자체 구축형), 나라장터(KONEPS)
- 핵심 기능 블록: 카탈로그/Punch-out, 입찰(RFx)·역경매, 계약관리, 공급업체 등록·평가, 협력사 포털

## 3차시 — SAP ↔ 전자구매 연계 기술
- 고전 기술: IDoc(ORDERS/ORDRSP/DESADV/INVOIC), ALE, RFC/BAPI, EDI
- 현대 기술: OData API, SOAP/REST, Event(메시지 큐), SAP CIG(Ariba Cloud Integration Gateway), BTP Integration Suite
- Punch-out 표준: OCI(SAP), cXML(Ariba)
- 연계 시나리오별 데이터 흐름과 마스터 데이터 동기화 전략(공급업체·자재·단가)

## 4차시 — 업종별 구매 프로세스 차이
- 제조: MRP 기반 PR 자동 생성, 외주(Subcontracting), JIT/칸반, 단가계약(Scheduling Agreement)
- 유통/리테일: SAP Retail(Article), 대량 시즌 발주, 자동 보충(Replenishment), 매입 조건·리베이트
- 건설/플랜트: 프로젝트(PS/WBS) 기반 구매, 용역·외주 비중, 기성·유보금, 장기 계약
- 공공: 나라장터(KONEPS) 의무 연계, 규정 기반 입찰, 적격심사
- 화학/제약: 배치 관리, QM(품질) 연계 입고, GMP 문서화
- 금융/서비스: 간접구매·서비스 PO 중심, 예산 통제(FM), 카탈로그 구매 비중 높음

## 5차시 — 한국 실무 특화 주제
- 전자세금계산서와 IV(송장검증) 연계, 국세청 ASP 연동
- 그룹사 구매포털 ↔ SAP 이중 구조(구매포털이 프론트, SAP이 백엔드 원장)
- 하도급법·상생결제 등 규제가 시스템 설계에 미치는 영향

## 진행 현황
> 학습 자료 본문은 HTML로 작성되어 있다. 루트 `index.html`에서 시작 (웹: https://totoma7.github.io/pro_sap/)

- [x] 1차시 — `lessons/01-1` ~ `01-3` (마크다운 원고: `01-sap-mm-core-concepts.md`)
- [x] 2차시 — `lessons/02-1`, `02-2`
- [x] 3차시 — `lessons/03-1`, `03-2`
- [x] 4차시 — `lessons/04-1`, `04-2`
- [x] 5차시 — `lessons/05-1` (커리큘럼 완료)
