var e=document.querySelector(".game-field"),r=document.querySelector(".button"),t=document.querySelector(".game-score"),n=document.querySelector(".message-lose"),o=document.querySelector(".message-win"),c=document.querySelector(".message-start"),i=0,a=[];function l(){return a.some(function(e){return e.some(function(e){return 0===e})})}function f(){var e,r;if(l()){do e=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());while(0!==a[e][r])a[e][r]=.9>Math.random()?2:4,u()}}function u(){for(var r=0;r<4;r++)for(var t=0;t<4;t++){var n=e.rows[r].cells[t];n.className="field-cell field-cell--".concat(a[r][t]),n.textContent=a[r][t]||""}}function s(){return a.map(function(e){return e.slice()})}function d(e){return e[0].map(function(r,t){return e.map(function(e){return e[t]})})}function h(e){!function(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t].join()!==r[t].join())return!1;return!0}(e,s())&&f(),t.textContent=i,u()}function g(){if(!l()&&!function(e){for(var r=0;r<e.length;r++)for(var t=0;t<e[r].length-1;t++)if(e[r][t]===e[r][t+1])return!0;for(var n=0;n<e[0].length;n++)for(var o=0;o<e.length-1;o++)if(e[o][n]===e[o+1][n])return!0;return!1}(a))return n.classList.remove("hidden"),!0}r.addEventListener("click",function(){r.classList.toggle("start",!1),r.classList.toggle("restart",!0),r.innerText="Restart",o.classList.add("hidden"),n.classList.add("hidden"),c.classList.add("hidden"),a=Array.from({length:4},function(){return[,,,,].fill(0)}),u(),f(),f(),t.textContent=0}),document.addEventListener("keydown",function(e){if(!g()){var r,t,n,c,l,f;switch(e.key){case"ArrowUp":r=s(),(t=d(a)).forEach(function(e,r){for(var n=e.filter(function(e){return 0!==e}),o=0;o<n.length-1;o++)n[o]===n[o+1]&&(n[o]+=n[o],i+=n[o],n.splice(o+1,1));t[r]=n.concat(Array(4-n.length).fill(0))}),a=d(t),h(r);break;case"ArrowDown":n=s(),(c=d(a)).forEach(function(e,r){for(var t=e.filter(function(e){return 0!==e}).reverse(),n=0;n<t.length-1;n++)t[n]===t[n+1]&&(t[n]+=t[n],i+=t[n],t.splice(n+1,1));c[r]=Array(4-t.length).fill(0).concat(t.reverse())}),a=d(c),h(n);break;case"ArrowLeft":l=s(),a.forEach(function(e,r){for(var t=e.filter(function(e){return 0!==e}),n=0;n<t.length-1;n++)t[n]===t[n+1]&&(t[n]+=t[n],i+=t[n],t.splice(n+1,1));a[r]=t.concat(Array(4-t.length).fill(0))}),h(l);break;case"ArrowRight":f=s(),a.forEach(function(e,r){for(var t=e.filter(function(e){return 0!==e}).reverse(),n=0;n<t.length-1;n++)t[n]===t[n+1]&&(t[n]+=t[n],i+=t[n],t.splice(n+1,1));a[r]=Array(4-t.length).fill(0).concat(t.reverse())}),h(f);break;default:return}g(),a.some(function(e){return e.includes(2048)})&&o.classList.remove("hidden")}});
//# sourceMappingURL=index.7e253087.js.map
