(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2603)}])},527:function(e,t,n){"use strict";n.d(t,{D:function(){return u}});var a=n(5944),c=n(7294),o=n(2734),i=n(1233),r=n(7357),l=n(5861),s=n(4369),p=n(1653);let u=()=>{let e=(0,o.Z)(),t=(0,c.useRef)(!1),[n,u]=(0,c.useState)([]),d=async()=>{console.log("".concat("https://class-post-web-backend-o3mmnjeefa-an.a.run.app","/calendar/calendars"));let e=await (await fetch("".concat("https://class-post-web-backend-o3mmnjeefa-an.a.run.app","/calendar/calendars"))).json();console.log(e),u(e)};return(0,c.useEffect)(()=>{t.current||(t.current=!0,d(),setInterval(d,6e5))},[]),(0,a.tZ)(i.Z,{gap:2,mb:2,direction:"row",justifyContent:"center",children:n.map((t,n)=>(0,a.BX)(r.Z,{children:[(0,a.tZ)(l.Z,{css:(0,s.Ge)(e).body,children:t.summary}),(0,a.tZ)("a",{href:"\n            https://calendar.google.com/calendar/u/0/r?cid=".concat(t.id),children:(0,a.tZ)(p.Z,{style:{width:"70px",height:"70px"},fgColor:"#888888",value:"\n            https://calendar.google.com/calendar/u/0/r?cid=".concat(t.id)})})]},n))})}},1447:function(e,t,n){"use strict";n.d(t,{Q:function(){return x}});var a=n(5944),c=n(7294),o=n(2734),i=n(7357),r=n(5861),l=n(1233),s=n(4369),p=n(720),u=n(4064),d=n(6829),f=n(7484),h=n.n(f);let g=e=>e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2),m=e=>"".concat(e.getMonth()+1,"月").concat(e.getDate(),"日"),x=()=>{let e=(0,c.useRef)(!1),[t,n]=(0,c.useState)([]),[f,x]=c.useState(h()()),Z=(0,o.Z)(),v=async()=>{console.log("".concat("https://class-post-web-backend-o3mmnjeefa-an.a.run.app","/calendar/day")),f&&console.log(g(f.toDate()));let e=await (await fetch("".concat("https://class-post-web-backend-o3mmnjeefa-an.a.run.app","/calendar/day").concat(f?"?date="+g(f.toDate()):void 0))).json();console.log(e),n(e)};return(0,c.useEffect)(()=>{e.current||(e.current=!0,v(),setInterval(v,6e5))},[]),(0,c.useEffect)(()=>{v()},[f]),(0,a.BX)(i.Z,{children:[(0,a.BX)(r.Z,{css:(0,s.Ge)(Z).title,my:2,children:[f?h()().isSame(f,"day")?"今日":m(f.toDate()):"","のイベント"]}),(0,a.tZ)(l.Z,{gap:2,mb:2,children:t.map((e,t)=>(0,a.BX)(r.Z,{css:(0,s.Ge)(Z).subtitle,children:[e.eventType,":",e.summary]},t))}),(0,a.tZ)(p._,{dateAdapter:d.y,children:(0,a.tZ)(u.M,{value:f,onChange:e=>{x(e)}})})]})}},2603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(5944),c=n(2734),o=n(5582),i=n(5861),r=n(1447),l=n(4369),s=n(527);function p(){let e=(0,c.Z)();return(0,a.BX)(o.Z,{sx:{minHeight:"100vh",p:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.tZ)(r.Q,{}),(0,a.tZ)(i.Z,{css:(0,l.Ge)(e).title,my:2,children:"カレンダーを追加"}),(0,a.tZ)(s.D,{})]})}},4369:function(e,t,n){"use strict";n.d(t,{Ge:function(){return i}});var a=n(917);let c={Jp:(0,a.iv)({fontFamily:'"Roboto", "Noto Sans JP"'})},o={px32:(0,a.iv)({fontSize:32,lineHeight:"46px"}),px24:(0,a.iv)({fontSize:24,lineHeight:"29px"}),px18:(0,a.iv)({fontSize:18,lineHeight:"26px"}),px16:(0,a.iv)({fontSize:16,lineHeight:"23px"}),px14:(0,a.iv)({fontSize:14,lineHeight:"20px"}),px12:(0,a.iv)({fontSize:12,lineHeight:"17px"})},i=e=>({title:(0,a.iv)([o.px32,c.Jp,{fontWeight:700,color:e.palette.text.primary}]),subtitle:(0,a.iv)([o.px24,c.Jp,{fontWeight:700,color:e.palette.text.secondary}]),body:(0,a.iv)([o.px16,c.Jp,{fontWeight:500,color:e.palette.text.secondary}]),disc:(0,a.iv)([o.px14,c.Jp,{fontWeight:500,color:e.palette.text.primary}])})}},function(e){e.O(0,[520,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);