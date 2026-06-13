// 공통 Mermaid 초기화 — 모든 레슨 페이지에서 type="module"로 로드
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

var FONT = '"Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic",sans-serif';
mermaid.initialize({
  startOnLoad: true,
  securityLevel: 'loose',
  theme: 'base',
  fontFamily: FONT,
  flowchart: { htmlLabels: false, curve: 'basis', padding: 14, nodeSpacing: 45, rankSpacing: 45, useMaxWidth: true },
  themeVariables: {
    primaryColor: '#e8eefc', primaryBorderColor: '#2b5fd9', primaryTextColor: '#1f2433',
    lineColor: '#5b6377', fontSize: '13px', fontFamily: FONT
  }
});

// 렌더 완료 후 컨테이너 표시(깜빡임 방지)
window.addEventListener('load', function () {
  document.querySelectorAll('.mmd').forEach(function (el) { el.classList.add('done'); });
});
