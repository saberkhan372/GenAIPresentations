(() => {
  const documentRoot = document.getElementById('document');
  const source = document.body.dataset.source;
  const escapeHtml = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const safeUrl = (url) => /^(https?:|mailto:|\.\/|\.\.\/|\/|#)/i.test(url) ? url : '#';
  function inline(text) {
    let html = escapeHtml(text);
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (_, label, url) => `<a href="${safeUrl(url)}">${label}</a>`);
    html = html.replace(/&lt;(https?:\/\/[^&\s]+)&gt;/g, (_, url) => `<a href="${safeUrl(url)}">${url}</a>`);
    return html;
  }
  const isTableSeparator = (line) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
  const tableCells = (line) => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => inline(cell.trim()));
  function render(markdown) {
    const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
    const out = []; let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      const heading = line.match(/^(#{1,3})\s+(.+)$/);
      if (heading) { const level = heading[1].length; out.push(`<h${level}>${inline(heading[2])}</h${level}>`); i++; continue; }
      if (i + 1 < lines.length && line.includes('|') && isTableSeparator(lines[i + 1])) { const headers = tableCells(line); i += 2; const rows = []; while (i < lines.length && lines[i].includes('|') && lines[i].trim()) rows.push(tableCells(lines[i++])); out.push(`<table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`); continue; }
      if (/^>\s?/.test(line)) { const quote = []; while (i < lines.length && /^>\s?/.test(lines[i])) quote.push(lines[i++].replace(/^>\s?/, '')); out.push(`<blockquote><p>${inline(quote.join(' '))}</p></blockquote>`); continue; }
      const unordered = line.match(/^[-*]\s+(.+)$/); const ordered = line.match(/^\d+\.\s+(.+)$/);
      if (unordered || ordered) { const tag = ordered ? 'ol' : 'ul'; const pattern = ordered ? /^\d+\.\s+(.+)$/ : /^[-*]\s+(.+)$/; const items = []; while (i < lines.length && pattern.test(lines[i])) items.push(inline(lines[i++].match(pattern)[1])); out.push(`<${tag}>${items.map(item => `<li>${item}</li>`).join('')}</${tag}>`); continue; }
      const paragraph = [line.trim()]; i++; while (i < lines.length && lines[i].trim() && !/^(#{1,3})\s+|^[-*]\s+|^\d+\.\s+|^>\s?/.test(lines[i]) && !(lines[i].includes('|') && isTableSeparator(lines[i + 1] || ''))) paragraph.push(lines[i++].trim()); out.push(`<p>${inline(paragraph.join(' '))}</p>`);
    }
    return out.join('\n');
  }
  fetch(source).then(response => { if (!response.ok) throw new Error('Document unavailable'); return response.text(); }).then(markdown => { documentRoot.innerHTML = render(markdown); }).catch(() => { documentRoot.innerHTML = `<p class="error">This document could not load. <a href="${safeUrl(source)}">Open the Markdown source</a>.</p>`; });
})();
