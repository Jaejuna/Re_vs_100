(this.webpackJsonpre_vs_100=this.webpackJsonpre_vs_100||[]).push([[0],{54:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(34),i=t.n(a),o=t(6),s=t.n(o),u=t(12),d=t(8),l=t(4),b=t(20);t(43),t(55),t(56);b.a.initializeApp({apiKey:"AIzaSyCNEEZVWLepSVn_ennOWsbwjL8E2wqnbpQ",authDomain:"re-vs-100-8ec8b.firebaseapp.com",projectId:"re-vs-100-8ec8b",storageBucket:"re-vs-100-8ec8b.appspot.com",messagingSenderId:"400681423336",appId:"1:400681423336:web:13667d56d28179863d545d"});var j,p,f,x,h,O,m,g,v,w,y,k,S,A,z,I,_,C,q,B,L,E,Q,D,T,F,H=b.a,M=b.a.auth(),W=b.a.firestore(),J=(b.a.storage(),t(5)),P=t.p+"static/media/labdigital.a204f34c.ttf",V=Object(l.b)(j||(j=Object(J.a)(['\n    @font-face {\n        font-family: "Lab Digital";\n        src: local("Lab Digital"),\n        url(',") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),P),G=t(1),K=l.d.div(p||(p=Object(J.a)(["\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: ","; */\n    background: rgb(238,174,202);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n    margin: 0;\n\n"])),(function(e){return e.theme.colors.main})),N=l.d.div(f||(f=Object(J.a)(["\n    width:min(1470px, calc(100% - 30px));\n    padding: 20px 0 40px 0;\n    margin: 0;\n"]))),R=function(e){var n=e.children;return Object(G.jsxs)(K,{children:[Object(G.jsx)(V,{}),Object(G.jsx)(N,{children:n})]})},Z=function(e){return"".concat(e/16,"rem")},U={mobileS:320,mobileM:375,mobileL:450,tablet:768,tabletL:1024},X={fontSizes:{small:Z(14),base:Z(16),lg:Z(18),xl:Z(20),xxl:Z(22),xxxl:Z(24),titleSize:Z(50)},colors:{main:"#f6e9ff",text:"#333",border:"#666",selected:"#d9afff",answer:"#b8cbff",answerBorder:"#eac2efc",answerText:"#2a50b8",primary:{main:"#303f9f",text:"#fff",border:"rgba(0, 0, 0, 0.5)",accent:"#666ad1",disabled:"#777aef"},secondary:{main:"#464646",text:"rgba(255,255,255,0.85)",border:"rgba(255,255,255,0.15)",accent:"#5f5f5f",disabled:"#4A4A4A"}},deviceSizes:U,device:{mobileS:"only screen and (max-width: ".concat(U.mobileS,"px)"),mobileM:"only screen and (max-width: ".concat(U.mobileM,"px)"),mobileL:"only screen and (max-width: ".concat(U.mobileL,"px)"),tablet:"only screen and (max-width: ".concat(U.tablet,"px)"),tabletL:"only screen and (max-width: ".concat(U.tabletL,"px)")}},Y=t(27),$=t(9),ee=l.d.button(x||(x=Object(J.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    margin: 0.5rem 1rem;\n    border-radius: 5px;\n    width: ",";\n    font-weight: ",";\n    font-size: ",";\n    outline: none;\n    ","\n"])),(function(e){return e.fullWidth?"100%":"8rem"}),(function(e){return e.bold?"bold":"normal"}),(function(e){var n=e.fontSize;return n?n+"px":"1rem"}),(function(e){var n=e.color,t=e.theme.colors,r=e.disabled,c="secondary"===n?t.secondary:t.primary;return"\n            background: ".concat(r?c.disabled:c.main,";\n            color: ").concat(c.text,";\n            border: ").concat(c.border," solid thin;\n            ").concat(!r&&"\n                &:hover {\n                    background: ".concat("text"===n?"transparent":c.accent,";\n                    outline: none;\n                }\n            "),"\n        ")})),ne=l.d.input(h||(h=Object(J.a)(["\n    font-size: 18px;\n    padding: 10px;\n    margin: 10px;\n    background: papayawhip;\n    border: none;\n    border-radius: 3px;\n    ::placeholder {\n        color: palevioletred;\n    }\n"]))),te=l.d.div(O||(O=Object(J.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  "]))),re=function(e){var n=e.userObj,t=e.currentInfo,c=Object(r.useState)(""),a=Object(d.a)(c,2),i=a[0],o=a[1],l=Object(r.useState)(""),b=Object(d.a)(l,2),j=b[0],p=b[1],f=Object(r.useState)(""),x=Object(d.a)(f,2),h=x[0],O=x[1],m=t.toQuiz,g=Object($.f)(),v=function(e){var n=e.target,t=n.name,r=n.value;"name"===t?o(r):"alias"===t?p(r):"number"===t&&O(r)},w=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!0!==m){e.next=7;break}return e.next=4,W.collection("users").add({uid:n.uid,name:i,alias:j,number:h,isAdmin:!1,available:!1});case 4:alert("\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.next=11;break;case 7:if(!1!==m){e.next=11;break}return e.next=10,W.collection("users").add({uid:n.uid,name:i,alias:j,number:h,isAdmin:!1,available:!0});case 10:alert("\ucc38\uad00\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.");case 11:g.go(0);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(te,{children:Object(G.jsx)("h2",{children:"\ub3c4\uc804\uc790 \uc815\ubcf4"})}),Object(G.jsx)("form",{onSubmit:w,children:Object(G.jsxs)(te,{children:[Object(G.jsx)(ne,{name:"name",type:"text",placeholder:"\uc774\ub984",required:!0,value:i,onChange:v}),Object(G.jsx)(ne,{name:"alias",type:"text",placeholder:"\ub2c9\ub124\uc784",required:!0,value:j,onChange:v}),Object(G.jsx)(ne,{name:"number",type:"tel",placeholder:"ex)01012345678",pattern:"[0-9]{7}",required:!0,value:h,onChange:v}),Object(G.jsx)(ne,{type:"submit",onSubmit:w})]})})]})},ce=l.d.div(m||(m=Object(J.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n"]))),ae=Object(l.d)(ee)(g||(g=Object(J.a)(["\n  width: 300px;\n"]))),ie=function(){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=n[1],a=function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new H.auth.GoogleAuthProvider,e.next=3,M.signInWithPopup(n);case 3:c(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(G.jsx)(G.Fragment,{children:t?Object(G.jsx)(re,{}):Object(G.jsx)(ce,{children:Object(G.jsx)(ae,{onClick:a,name:"google",children:"\uad6c\uae00 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778\ud558\uae30"})})})},oe=l.d.div(v||(v=Object(J.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n"])),(function(e){return e.left?"left":"center"})),se=Object(l.d)(oe)(w||(w=Object(J.a)(["\n    opacity: ",";\n    transition: opacity 0.6s linear;\n"])),(function(e){return e.show?1:0})),ue=l.d.div(y||(y=Object(J.a)(["\n    width: 96%;\n    height: 50px;\n    display: grid;\n    grid-template-columns: ",";\n\n    // \uacf5\ud1b5\n    & > div{\n        box-shadow: 1px 0 4px black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    // Survived\n    & > div:first-child{\n        border-top-left-radius: 15px;\n        border-bottom-left-radius: 15px;\n        background-color: #ce93d8;\n        font-weight: bolder;\n    }\n    // Failed\n    & > div:nth-child(2){\n        border-top-right-radius: 15px;\n        border-bottom-right-radius: 15px;\n        background-color: #f3e5f5;\n    }\n"])),(function(e){var n=e.survived;return"".concat(n,"% ").concat(100-n,"%")})),de=function(e){var n=e.showAnswer,t=e.part,c=(e.participants,Object(r.useState)(0)),a=Object(d.a)(c,2),i=a[0],o=a[1];return W.collection("users").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).filter((function(e){return e.available})).length;o(n)})),Object(G.jsx)(se,{show:n,children:Object(G.jsxs)(ue,{survived:100*i/t,children:[Object(G.jsxs)("div",{children:[" ",i,"\uba85 \uc0dd\uc874"]}),Object(G.jsxs)("div",{children:[" ",t-i,"\uba85 \ud0c8\ub77d"]})]})})},le=t(24),be=t(31),je=l.d.button(k||(k=Object(J.a)(['\n    /* font-family: ""; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    font-size: 1.6rem;\n    font-weight: bolder;\n    border-radius: 15px;\n    border: ',";;\n\n    position: relative;\n    background-color: ",";\n    color: ",";\n    "," \n    text-decoration: none;\n    text-transform: uppercase;\n    transition: 0.5s all ease;\n\n    \n"])),(function(e){var n=e.theme;return e.isAnswer?"5px solid ".concat(n.colors.answerBorder):"none"}),(function(e){var n=e.theme.colors,t=e.isSelected,r=e.isAnswer;return t?n.selected:r?n.answer:n.main}),(function(e){var n=e.theme;return e.isAnswer?n.colors.answerText:n.colors.text}),(function(e){return e.isAnswer&&"opacity: 0.7"})),pe=function(e){return Object(G.jsx)(je,Object(be.a)(Object(be.a)({},e),{},{children:e.text}))},fe={giant:1920,huge:1440,bigDesktop:1200,desktop:1e3,tablet:768,thone:600,phablet:480,phone:376,tiny:330},xe=Object.keys(fe).reduce((function(e,n){var t=fe[n]/16;return e[n]=function(e){return Object(l.c)(S||(S=Object(J.a)(["\n      @media (max-width: ","em) {\n        ","\n      }\n    "])),t,Object(l.c)(e))},e}),{}),he=l.d.div(A||(A=Object(J.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 100px;\n    ","\n    grid-gap: 5px;\n    background-color: ",";\n    border: 5px solid ",";\n    border-radius: 20px;\n"])),xe.tablet(z||(z=Object(J.a)(["\n        grid-template-columns: 100%;\n        grid-template-rows: repeat(3, 60px);\n    "]))),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border})),Oe=function(e){var n=e.quiz,t=e.userObj,c=e.doc_user_id,a=e.showAnswer,i=e.isBlocked,o=t.isAdmin,l=t.available,b=n.no,j=n.answer,p=n.candidates,f=Object(r.useState)(null),x=Object(d.a)(f,2),h=x[0],O=x[1],m=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o||!a){e.next=2;break}return e.abrupt("return");case 2:O(n),g(n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.collection("users").doc(c).update(Object(le.a)({},"quiz_"+b,n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){O(null)}),[n.no]),Object(r.useEffect)((function(){Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:if(h!==j){e.next=5;break}return setTimeout((function(){return alert("\uc815\ub2f5\uc785\ub2c8\ub2e4!!")}),1e3),e.abrupt("return");case 5:return e.next=7,W.collection("users").doc(c).update({available:!1});case 7:if(console.log(h),h){e.next=10;break}return e.abrupt("return");case 10:setTimeout((function(){return alert("\uc815\ub2f5\uc744 \ub9de\ucd94\uc9c0 \ubabb\ud558\uc168\uc2b5\ub2c8\ub2e4\u3160\u3160 \ub2e4\uc74c \ubb38\uc81c\ubd80\ud130\ub294 \uad00\uc804\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.")}),1e3);case 11:case"end":return e.stop()}}),e)})))()}),[a]),Object(G.jsxs)(he,{children:[Object(G.jsx)(pe,{onClick:function(){return m(1)},no:1,text:p[0],isSelected:1===h,isAnswer:1===j&&a,disabled:!l||a||!o&&i}),Object(G.jsx)(pe,{onClick:function(){return m(2)},text:p[1],isSelected:2===h,isAnswer:2===j&&a,disabled:!l||a||!o&&i}),Object(G.jsx)(pe,{onClick:function(){return m(3)},no:3,text:p[2],isSelected:3===h,isAnswer:3===j&&a,disabled:!l||a||!o&&i})]})},me=function(e,n,t,r){return{no:e,question:n,answer:t,candidates:r}},ge=[me(1,"\ud638\uc2a4\ud2b8\uc778 \uc548\ud0dc\ud638 \ubc97\ub2d8\uc740 1997\ub144\uc0dd(\ube60\ub978)\uc774\ub2e4. \uadf8\ub807\ub2e4\uba74 1997\ub144\ub3c4\uc758 \ubd80\ud65c\uc808\uc740 \ub2e4\uc74c \uc911 \uc5b8\uc81c\uc600\uc744\uae4c?",3,["1997\ub144 4\uc6d4 7\uc77c","1997\ub144 4\uc6d4 15\uc77c","1997\ub144 3\uc6d4 30\uc77c"]),me(2,"\ub3c4\ub9c8\ub294 \ubd80\ud65c\ud558\uc2e0 \uc608\uc218\ub2d8\uc758 \ubabb\uc790\uad6d\uc744 \ubcf4\uace0\uc790 \ud588\uc2b5\ub2c8\ub2e4. \ub3c4\ub9c8\uac00 \ubcf4\uae38 \uc6d0\ud588\ub358 \uc608\uc218\ub2d8\uc758 \ubabb\uc790\uad6d\uc774 \uc544\ub2cc \uacf3\uc740?",2,["\uc190","\ubc1c","\uc606\uad6c\ub9ac"]),me(3,"\uc608\uc218\ub2d8\uc774 \uba70\uce60\ub9cc\uc5d0 \ubd80\ud65c\ud558\uc168\ub098\uc694?",3,["\ub098\ud758","4\uc77c","\uc0ac\ud758"])],ve=l.d.div(I||(I=Object(J.a)(["\n    max-width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    color: ",";\n    border: 5px solid ",";\n    border-bottom: none;\n    border-radius: 20px;\n    font-size: 1.5rem;\n"])),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.border})),we=function(e){var n=e.question;return Object(G.jsx)(ve,{children:n})},ye=l.d.div(_||(_=Object(J.a)(["\n\tz-index: 10;\n\tdisplay: ",";\n    justify-content: center;\n    align-items: center;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth:100vw;\n\tbackground: rgba(0,0,0,0.5);\n"])),(function(e){return e.show?"flex":"none"})),ke=Object(l.d)(oe)(C||(C=Object(J.a)(["\n    background-color: #eee;\n    box-shadow: 0px 2px 6px grey;\n    border-radius: 10px;\n    padding: 10px;\n    width: 450px;\n    height: 300px;\n"]))),Se=l.d.div(q||(q=Object(J.a)(["\n    display: grid;\n    grid-template-columns: 60px 270px 80px;\n    grid-template-rows: repeat(3, 50px);\n"]))),Ae=l.d.div(B||(B=Object(J.a)(["\n    height: 15px;\n    width: ",";\n    background-color: ",";\n"])),(function(e){return 1+e.perc+"%"}),(function(e){return e.color})),ze=function(e){var n=e.visible,t=e.toggle,r=e.participants,c=Object(d.a)(r,3),a=c[0],i=c[1],o=c[2],s=(a+i+o)/100;return Object(G.jsx)(ye,{show:n,onClick:t,children:Object(G.jsx)(ke,{children:Object(G.jsxs)(Se,{children:[Object(G.jsx)(oe,{children:"1"}),Object(G.jsx)(oe,{left:!0,children:Object(G.jsx)(Ae,{perc:a/s,color:"#cf0c0c"})}),Object(G.jsxs)(oe,{children:[a,"\uba85"]}),Object(G.jsx)(oe,{children:"2"}),Object(G.jsx)(oe,{left:!0,children:Object(G.jsx)(Ae,{perc:i/s,color:"#20d6a0"})}),Object(G.jsxs)(oe,{children:[i,"\uba85"]}),Object(G.jsx)(oe,{children:"3"}),Object(G.jsx)(oe,{left:!0,children:Object(G.jsx)(Ae,{perc:o/s,color:"#245cbb"})}),Object(G.jsxs)(oe,{children:[o,"\uba85"]})]})})})},Ie=l.d.div(L||(L=Object(J.a)(["\n  display: grid;\n  grid-template-rows: auto auto auto auto auto;\n"]))),_e=l.d.div(E||(E=Object(J.a)(["\n    display: grid;\n    grid-template-rows: 360px auto auto;\n    background-color: ",";\n    border-radius: 20px;\n"])),(function(e){return e.theme.colors.border})),Ce=l.d.div(Q||(Q=Object(J.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  & > button {\n    margin: 8px 4px;\n  }\n"]))),qe=function(e){var n=e.userObj,t=e.doc_user_id,c=e.currentInfo,a=c.currentQuiz,i=c.showAnswer,o=c.showHint,l=c.isBlocked,b=c.part,j=n.isAdmin,p=(n.available,ge[a]),f=Object(r.useState)([0,0,0]),x=Object(d.a)(f,2),h=x[0],O=x[1],m=Object(r.useState)(1),g=Object(d.a)(m,2),v=g[0],w=g[1],y=Object(r.useState)(0),k=Object(d.a)(y,2),S=k[0],A=k[1],z=Object(r.useState)(!1),I=Object(d.a)(z,2),_=I[0],C=I[1],q=function(){return C((function(e){return!e}))},B=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a<=0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,W.collection("current").doc("current").update({currentQuiz:a-1,showAnswer:!1,isBlocked:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a>=2)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,W.collection("current").doc("current").update({currentQuiz:a+1,showAnswer:!1,isBlocked:!1});case 4:w(1),A(0),n=(new Date).getTime(),console.log(n/1e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.next=3,W.collection("current").doc("current").update({showHint:!0});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.collection("current").doc("current").update({isBlocked:!0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.collection("current").doc("current").update({showAnswer:!0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=setInterval((function(){parseInt(S)>0&&A(parseInt(S)-1),0===parseInt(S)&&(0===parseInt(v)?clearInterval(e):(w(parseInt(v)-1),A(59)))}),1e3);return function(){return clearInterval(e)}}),[v,S]),Object(r.useEffect)((function(){W.collection("users").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).map((function(e){return e["quiz_"+p.no]}));O([n.filter((function(e){return 1===e})).length,n.filter((function(e){return 2===e})).length,n.filter((function(e){return 3===e})).length])}))}),[a]),Object(G.jsxs)(Ie,{children:[Object(G.jsx)(Ce,{children:Object(G.jsx)(ee,{onClick:E,disabled:o,children:" \ucc2c\uc2a4 "})}),Object(G.jsxs)(_e,{children:[Object(G.jsx)(we,{question:p.question}),Object(G.jsx)(Oe,{quiz:p,userObj:n,doc_user_id:t,showAnswer:i,isBlocked:l})]}),j&&Object(G.jsxs)(Ce,{children:[Object(G.jsx)(ee,{color:"secondary",onClick:B,children:" \uc774\uc804 "}),l?i?Object(G.jsx)(ee,{onClick:L,children:" \ub2e4\uc74c "}):Object(G.jsx)(ee,{onClick:D,children:" \uc815\ub2f5 \uacf5\uac1c "}):Object(G.jsx)(ee,{color:"secondary",onClick:Q,children:" \uc2dc\uac04 \uc885\ub8cc "})]}),Object(G.jsx)(de,{showAnswer:i,part:b,participants:h}),Object(G.jsxs)("h2",{children:[v,":",S<10?"0".concat(S):S]}),Object(G.jsx)(ze,{visible:_,toggle:q,participants:h})]})},Be=function(e){var n=e.userObj,t=n.name,r=n.isSurvived;return Object(G.jsxs)("div",{children:["\ucd5c\ud6c4\uc758 \uc0dd\uc874\uc790",r?t:""]})},Le=t.p+"static/media/frame.4a975f16.png",Ee=l.d.div(D||(D=Object(J.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  ","\n"])),xe.tablet(T||(T=Object(J.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: auto auto;\n  "])))),Qe=l.d.img(F||(F=Object(J.a)(["\n  width: 100%;\n  height: 100%;\n"]))),De=function(e){var n=e.isAdmin,t=Object(r.useState)(0),c=Object(d.a)(t,2),a=c[0],i=c[1],o=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.collection("current").doc("current").update({toQuiz:!0,part:a,showAnswer:!1,block:!1,showHint:!1,currentQuiz:0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return W.collection("users").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).length;i(n)})),Object(G.jsxs)(Ee,{children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{children:"Rules"}),Object(G.jsxs)("div",{children:["1.3\uac1c\uc758 \ubcf4\uae30 \uc911 \uc815\ub2f5\uc744 \uace0\ub978\ub2e4. ",Object(G.jsx)("br",{}),"2.100\uc778\uc774 \uba3c\uc800 \ubb38\uc81c\ub97c \ub2e4 \ud47c \ud6c4, \uac8c\uc2a4\ud2b8 2\uc778\uc774 \ud47c\ub2e4. ",Object(G.jsx)("br",{}),"3.\ubb38\uc81c\ub97c \ud478\ub294 \ub370\ub294 1\ubd84\uc758 \uc2dc\uac04\uc81c\ud55c\uc774 \uc788\ub2e4. ",Object(G.jsx)("br",{}),"4.\ubb38\uc81c\ub97c \ud2c0\ub9ac\uba74 \ud0c8\ub77d\uc774\uba70, \uc815\ub2f5\uc790\ub9cc \ub2e4\uc74c \ubb38\uc81c\ub85c \ub118\uc5b4\uac04\ub2e4.(\uc911\uac04 \ucc38\uc5ec \ubd88\uac00\ub2a5) ",Object(G.jsx)("br",{}),"5. \uc815\ub2f5\uc790\uac00 8\uba85(?) \uc774\ud558\ub85c \ub0a8\uc73c\uba74 \ud504\ub85c\uadf8\ub7a8\uc774 \uc885\ub8cc\ud55c\ub2e4. ",Object(G.jsx)("br",{}),"6. \uac8c\uc2a4\ud2b8 2\uba85\uc740 \ud568\uaed8 2\ubc88\uc758 \ucc2c\uc2a4\ub97c \uc4f8 \uc218 \uc788\ub2e4.",Object(G.jsx)("br",{}),Object(G.jsx)("br",{}),"\ud55c\ubc97\ub2d8 \ucc2c\uc2a4 : \uc6d0\ud558\ub294 \ud55c \uba85\uc758 \ub2f5\uc744 \uc54c \uc218 \uc788\ub2e4, \uc5c6\uc744 \uc2dc \ud638\uc2a4\ud2b8\uac00 \uc9c0\uc815. ",Object(G.jsx)("br",{}),"\ubc97\ub2d8\ub4e4 \ucc2c\uc2a4 : \ubaa8\ub4e0 \ubc97\ub2d8\uc774 \uc120\ud0dd\ud55c \ub2f5\uc744 \uc54c \uc218 \uc788\ub2e4.",Object(G.jsx)("br",{}),Object(G.jsx)("br",{}),a,"\uba85 \ucc38\uc5ec\ud558\uc168\uc2b5\ub2c8\ub2e4."]}),n&&Object(G.jsx)(oe,{children:Object(G.jsx)(ee,{onClick:o,children:" \ud034\uc988 \uc2dc\uc791\ud558\uae30"})})]}),Object(G.jsx)(Qe,{src:Le})]})},Te=function(e){var n=e.isLoggedIn,t=e.userObj,r=e.hasAccount,c=e.doc_user_id,a=e.currentInfo;return Object(G.jsx)(Y.a,{children:Object(G.jsx)($.c,{children:n?r?Object(G.jsxs)(G.Fragment,{children:[a.toQuiz?Object(G.jsx)($.a,{exact:!0,path:"/",children:Object(G.jsx)(qe,{userObj:t,doc_user_id:c,currentInfo:a})}):Object(G.jsx)($.a,{exact:!0,path:"/",children:Object(G.jsx)(De,{isAdmin:t.isAdmin})}),Object(G.jsx)($.a,{exact:!0,path:"/result",component:Be})]}):Object(G.jsx)($.a,{exact:!0,path:"/",children:Object(G.jsx)(re,{userObj:t,currentInfo:a})}):Object(G.jsx)($.a,{exact:!0,path:"/",component:ie})})})};var Fe=function(){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(null),i=Object(d.a)(a,2),o=i[0],b=i[1],j=Object(r.useState)(!1),p=Object(d.a)(j,2),f=p[0],x=p[1],h=Object(r.useState)(""),O=Object(d.a)(h,2),m=O[0],g=O[1],v=Object(r.useState)({currentQuiz:0,showAnswer:!1,showHint:!1,toQuiz:!1,isDone:!1}),w=Object(d.a)(v,2),y=w[0],k=w[1];return Object(r.useEffect)((function(){M.onAuthStateChanged(function(){var e=Object(u.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=8;break}return e.next=3,W.collection("users").where("uid","==",n.uid).get();case 3:t=e.sent,x(Boolean(t.docs.length));try{b(t.docs[0].data()),g(t.docs[0].id)}catch(r){b(n)}e.next=9;break;case 8:b(null);case 9:c(!0);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),W.collection("current").doc("current").onSnapshot((function(e){k(e.data())}))}),[]),Object(r.useEffect)((function(){m&&W.collection("users").doc(m).onSnapshot((function(e){b(e.data())}))}),[m]),Object(G.jsx)(l.a,{theme:X,children:Object(G.jsx)(R,{children:t?Object(G.jsx)(Te,{isLoggedIn:Boolean(o),userObj:o,hasAccount:f,doc_user_id:m,currentInfo:y}):Object(G.jsx)("div",{children:'"Initializing..."'})})})};i.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(Fe,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.dc9fc475.chunk.js.map