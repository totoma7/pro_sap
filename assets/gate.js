/* 접근 게이트 — 등록된 ID 입력 시 60일(2개월) 쿠키 발급 후 열람 허용.
   정적 사이트의 클라이언트 측 게이트이므로 보안 장치가 아니라 열람 편의 장치다. */
(function () {
  var KEY = 'sap_edu_access';
  var TOKEN = 'dG90b21hQGVjLWJhbmsubmV0';
  var DAYS = 60;

  function getCookie(name) {
    var m = document.cookie.match('(?:^|; )' + name + '=([^;]*)');
    return m ? decodeURIComponent(m[1]) : null;
  }
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + encodeURIComponent(value) +
      '; expires=' + d.toUTCString() + '; path=/; SameSite=Lax';
  }
  function token(s) {
    return btoa(unescape(encodeURIComponent((s || '').trim().toLowerCase())));
  }

  if (getCookie(KEY) === TOKEN) return;

  document.documentElement.style.visibility = 'hidden';

  function showGate() {
    document.title = '접근 확인';
    document.body.innerHTML =
      '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;background:#f6f7fb;">' +
      '<div style="width:100%;max-width:380px;background:#fff;border:1px solid #e3e6ef;border-radius:14px;padding:28px 24px;text-align:center;">' +
      '<div style="font-size:34px;margin-bottom:10px;">🔒</div>' +
      '<h1 style="font-size:18px;margin:0 0 6px;color:#1f2433;">SAP × 전자구매 학습</h1>' +
      '<p style="font-size:13.5px;color:#5b6377;margin:0 0 18px;">등록된 ID를 입력하면 이 기기에서 2개월간 열람할 수 있습니다.</p>' +
      '<form id="gateForm">' +
      '<input id="gateId" type="email" placeholder="ID (이메일)" autocomplete="email" required ' +
      'style="width:100%;box-sizing:border-box;padding:12px 14px;font-size:15px;border:1.5px solid #e3e6ef;border-radius:10px;margin-bottom:10px;outline-color:#2b5fd9;">' +
      '<button type="submit" ' +
      'style="width:100%;padding:12px;font-size:15px;font-weight:700;color:#fff;background:#2b5fd9;border:0;border-radius:10px;cursor:pointer;">확인</button>' +
      '</form>' +
      '<p id="gateErr" style="display:none;color:#c0392b;font-size:13px;margin:12px 0 0;">등록되지 않은 ID입니다.</p>' +
      '</div></div>';
    document.documentElement.style.visibility = '';

    document.getElementById('gateForm').addEventListener('submit', function (e) {
      e.preventDefault();
      if (token(document.getElementById('gateId').value) === TOKEN) {
        setCookie(KEY, TOKEN, DAYS);
        location.reload();
      } else {
        document.getElementById('gateErr').style.display = 'block';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showGate);
  } else {
    showGate();
  }
})();
