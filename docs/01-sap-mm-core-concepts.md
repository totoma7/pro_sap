# 1차시 — SAP 구매(MM-PUR) 핵심 개념

전자구매 시스템 연계를 이해하려면 먼저 "SAP 안에서 구매가 어떻게 굴러가는지"를 알아야 한다.
외부 시스템이 SAP에 보내는 모든 데이터는 결국 아래 구조 어딘가에 꽂히기 때문이다.

## 1. 조직 구조 (Enterprise Structure)

```
Client (전사)
 └─ Company Code (회계 법인 단위)          ← 재무제표가 나오는 단위
     └─ Plant (공장/사업장)                ← 재고·MRP가 돌아가는 단위
         └─ Storage Location (저장 위치)
 Purchasing Organization (구매 조직)       ← 구매 계약·단가의 주체
     └─ Purchasing Group (구매 그룹)       ← 실제 구매 담당자/팀
```

핵심 포인트:
- **Purchasing Org는 Company Code 또는 Plant에 할당**되며, 그룹사 통합구매라면
  하나의 구매조직이 여러 법인을 커버하는 "중앙 구매조직" 구조를 쓴다.
- 전자구매 포털 연계 시 외부 시스템의 "구매 부서" 개념을 SAP의 Purchasing Org/Group에
  매핑하는 작업이 항상 초기 설계 이슈가 된다.

## 2. 마스터 데이터

| 마스터 | 역할 | 연계 관점 포인트 |
|---|---|---|
| 자재 마스터 (Material) | 품목 정보, 뷰(구매/MRP/회계 등) 구조 | 포털 카탈로그 품목과 SAP 자재코드 매핑이 최대 난제 |
| 공급업체 (Business Partner) | S/4부터 BP로 통합 (구 Vendor Master) | 협력사 포털 가입 → SAP BP 생성 동기화 흐름 필요 |
| 구매정보레코드 (Info Record) | 자재×공급업체 조합의 단가·조건 | 포털에서 낙찰된 단가를 Info Record로 내려보내는 게 일반적 |
| 소스리스트 (Source List) | 자재별 허용/고정 공급원 | 수의계약·단가계약 업체를 고정할 때 사용 |
| 단가계약 (Contract/SA) | Outline Agreement (수량/금액 계약, 납품일정계약) | 포털 계약관리와 SAP 계약의 이중 원장 문제 발생 지점 |

## 3. 구매 문서 흐름 (Procure-to-Pay)

```
PR (구매요청)  →  Sourcing/RFQ  →  PO (구매오더)  →  GR (입고)  →  IV (송장검증)  →  지급
ME51N             ME41/포털         ME21N            MIGO           MIRO             F110
```

1. **PR (Purchase Requisition)**: 수요 발생. 사람이 만들거나(간접구매),
   MRP가 자동 생성(직접구매), 또는 전자구매 포털에서 인터페이스로 유입.
2. **Sourcing**: 공급원 결정. 입찰(RFQ)·단가계약 참조·소스리스트 자동 결정.
   전자구매 시스템이 가장 깊게 개입하는 구간 — 입찰/역경매/견적비교는 대부분 포털에서 수행.
3. **PO (Purchase Order)**: 법적 구매 확약. 외부 연계의 중심 문서.
   포털→SAP로 PO를 생성하거나, SAP→포털/공급사로 PO를 송신(IDoc ORDERS).
4. **GR (Goods Receipt)**: 입고. 재고 증가 + GR/IR 중간계정 대변 기표.
5. **IV (Invoice Verification)**: 송장검증. **3-Way Match** = PO 수량/단가 ↔ GR 수량 ↔ 송장 대조.
   한국에서는 전자세금계산서 데이터와의 대사가 추가된다.
6. **지급(Payment)**: FI 영역. 상생결제·구매카드 등 한국 특화 지급수단 분기.

### GR/IR 계정의 의미
입고 시점과 송장 시점이 다르기 때문에 중간 계정(GR/IR Clearing)으로 잡아둔다.
입고만 있고 송장이 없으면 GR/IR 잔액으로 남고, 월말 정산 대상이 된다.
연계 장애로 송장이 안 들어오면 이 잔액이 비정상적으로 쌓이므로, 운영에서 모니터링 포인트다.

## 4. 문서 유형과 품목 범주

- **Document Type**: PR/PO의 성격 구분(표준 NB, 긴급, 수입, 프레임워크 FO 등).
  포털 유입 PO에 전용 문서유형을 부여해 추적·권한·번호대역을 분리하는 것이 정석.
- **Item Category**: 품목 단위 프로세스 분기.
  - (공란) 표준 — 일반 자재 구매
  - `L` 외주(Subcontracting) — 자재를 사급하고 가공품을 받음 (제조업 핵심)
  - `K` 위탁(Consignment) — 공급사 재고를 사용 시점에 매입
  - `D` 서비스(Service) — 용역. Service Entry Sheet(SES) 검수 후 IV (건설·서비스업 핵심)
  - `U` 사내이전(Stock Transfer)

품목 범주는 업종별 차이가 가장 크게 드러나는 지점이다. 제조는 L, 건설·금융은 D의 비중이 높다.

## 5. 자주 쓰는 T-Code 요약

| 영역 | T-Code |
|---|---|
| PR 생성/조회 | ME51N / ME53N |
| PO 생성/조회 | ME21N / ME23N |
| 입고 | MIGO |
| 송장검증 | MIRO |
| Info Record | ME11 / ME13 |
| 계약 | ME31K / ME33K |
| 소스리스트 | ME01 |

## 다음 차시 예고
2차시에서는 전자구매 시스템의 유형(Ariba, 자체 구축 포털, 나라장터)과
직접구매/간접구매가 시스템 아키텍처를 어떻게 가르는지 다룬다.
