javascript:(function(){open('https://archive.is?run=1&url='+encodeURIComponent(document.location));var f=document.createElement('form');f.method='POST';f.action='https://web.archive.org/save/'+encodeURI(location.href);f.target='_blank';u=document.createElement('input');u.type='hidden';u.name='url';u.value=location.href;f.appendChild(u);document.body.appendChild(f);f.submit();document.body.removeChild(f);})();
