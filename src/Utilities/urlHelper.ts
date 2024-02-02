export function prepareUrl(url: string): string {
  let preparedUrl = '';

  if(!url.startsWith("https://")){
    preparedUrl = "https://" + url;
  }

  if(!url.endsWith("/")){
    preparedUrl = preparedUrl + '/';
  }

  return preparedUrl;
}

export function isUrlValid (url: string): boolean {
  if(!url.includes('.'))
  {
    return false;
  }
  
  const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
      'i' // case-insensitive
  );

  return !!pattern.test(url);
}