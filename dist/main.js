(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",u="week",o="month",c="quarter",l="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:u,d:a,D:d,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=$;var S=function(t){return t instanceof O},M=function t(e,n,r){var i;if(!e)return p;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;g[u]=e,i=u}return!r&&i&&(p=i),i||!r&&p},D=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},w=y;w.l=M,w.i=S,w.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function $(t){this.$L=M(t.locale,null,!0),this.parse(t)}var v=$.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return D(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<D(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,f=w.p(t),h=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(a)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,v=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(f){case l:return c?h(1,0):h(31,11);case o:return c?h(1,v):h(0,v+1);case u:var g=this.$locale().weekStart||0,S=($<g?$+7:$)-g;return h(c?y-S:y+(6-S),v);case a:case d:return m(p+"Hours",0);case s:return m(p+"Minutes",1);case i:return m(p+"Seconds",2);case r:return m(p+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var u,c=w.p(t),f="set"+(this.$u?"UTC":""),h=(u={},u[a]=f+"Date",u[d]=f+"Date",u[o]=f+"Month",u[l]=f+"FullYear",u[s]=f+"Hours",u[i]=f+"Minutes",u[r]=f+"Seconds",u[n]=f+"Milliseconds",u)[c],m=c===a?this.$D+(e-this.$W):e;if(c===o||c===l){var $=this.clone().set(d,1);$.$d[h](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var d,f=this;n=Number(n);var h=w.p(c),m=function(t){var e=D(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(h===o)return this.set(o,this.$M+n);if(h===l)return this.set(l,this.$y+n);if(h===a)return m(1);if(h===u)return m(7);var $=(d={},d[i]=t,d[s]=e,d[r]=1e3,d)[h]||1,v=this.$d.getTime()+n*$;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return w.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:w.s(u+1,2,"0"),MMM:l(n.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:w.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||$[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var h,m=w.p(d),$=D(n),v=($.utcOffset()-this.utcOffset())*t,y=this-$,p=w.m(this,$);return p=(h={},h[l]=p/12,h[o]=p,h[c]=p/3,h[u]=(y-v)/6048e5,h[a]=(y-v)/864e5,h[s]=y/e,h[i]=y/t,h[r]=y/1e3,h)[m]||y,f?p:w.a(p)},v.daysInMonth=function(){return this.endOf(o).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},$}(),k=O.prototype;return D.prototype=k,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",o],["$y",l],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,O,D),t.$i=!0),D},D.locale=M,D.isDayjs=S,D.unix=function(t){return D(1e3*t)},D.en=g[p],D.Ls=g,D.p={},D}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}(()=>{"use strict";function t(t){return n(484)(t).format("MMM/D/YY")}function e(e){const n=document.querySelector(".tasks-output"),r=document.querySelector(".task-title");(r.style.visibility="hidden")&&(r.style.visibility="visible");let s=document.createElement("div");s.classList.add("tasks");let a=document.createElement("div");a.classList.add("date"),a.textContent=t(e.time);let u=document.createElement("input");u.classList.add("tasks-value"),u.value=e.taskName,u.readOnly=!0;let o=document.createElement("button");o.classList.add("edit-button"),o.textContent="Edit",o.addEventListener("click",(t=>{t.preventDefault(),function(t,e,n){if("Edit"==event.target.textContent)t.readOnly=!1,t.focus(),e.textContent="Save";else if("Save"==event.target.textContent){t.readOnly=!0;let r=i.findIndex((t=>t.time==n));i[r].taskName=t.value,localStorage.setItem("tasks",JSON.stringify(i)),e.textContent="Edit"}}(u,o,e.time)}));let c=document.createElement("button");c.classList.add("remove-button"),c.textContent="Remove",c.addEventListener("click",(t=>{t.preventDefault(),function(t,e){let n=document.querySelector(".tasks-output");const r=document.querySelector(".task-title");let s=i.findIndex((t=>t.time==e));i.splice(s,1),localStorage.setItem("tasks",JSON.stringify(i)),t.remove(),3===n.childNodes.length&&(r.style.visibility="hidden")}(s,e.time)})),s.appendChild(a),s.appendChild(u),s.appendChild(o),s.appendChild(c),n.appendChild(s)}const r=document.querySelector(".task-add-button");let i=JSON.parse(localStorage.getItem("tasks"))||[];window.onload=n=>{!function(){let t=document.querySelector(".user-name");if(null===localStorage.getItem("name")){let t=prompt("Please enter your name");t||(alert("Please enter your name."),t=prompt("Please enter your name")),localStorage.setItem("name",t)}t.textContent=`Hi, ${localStorage.getItem("name")}`}(),function(){let t=JSON.parse(localStorage.getItem("tasks"));if(null!=t&&t.length>=0)for(let n=0;n<t.length;n++)e(t[n])}(),document.querySelector(".current-date").innerHTML=t(Date.now()),r.addEventListener("click",(t=>{t.preventDefault();let n={time:Date.now(),taskName:document.getElementById("tasks-input").value};n.taskName?(e(n),i.push(n),localStorage.setItem("tasks",JSON.stringify(i)),document.getElementById("tasks-input").value=""):alert("Please enter a task.")}))}})()})();