export const reformatTextHtml = (text) => {
  const parser = new DOMParser()
  const html = parser.parseFromString(text, "text/html")
  return html?.body?.textContent
}
