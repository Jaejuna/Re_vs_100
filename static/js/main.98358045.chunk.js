(this.webpackJsonpre_vs_100=this.webpackJsonpre_vs_100||[]).push([[0],{51:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(33),i=t.n(a),o=t(7),s=t.n(o),u=t(12),d=t(6),l=t(4),b=t(20);t(43),t(52),t(53);b.a.initializeApp({apiKey:"AIzaSyCNEEZVWLepSVn_ennOWsbwjL8E2wqnbpQ",authDomain:"re-vs-100-8ec8b.firebaseapp.com",projectId:"re-vs-100-8ec8b",storageBucket:"re-vs-100-8ec8b.appspot.com",messagingSenderId:"400681423336",appId:"1:400681423336:web:13667d56d28179863d545d"});var j,p,f,x,h,O,m,g,w,v,y,k,S,z,A,_,I,q,E,C,L,B,Q,D,F,H,M,T,W,P,J,V,G,K,N,R,Z,U,X,Y,$,ee,ne=b.a,te=b.a.auth(),re=b.a.firestore(),ce=(b.a.storage(),t(3)),ae=t.p+"static/media/labdigital.a204f34c.ttf",ie=Object(l.b)(j||(j=Object(ce.a)(['\n    @font-face {\n        font-family: "Lab Digital";\n        src: local("Lab Digital"),\n        url(',") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),ae),oe=t(1),se=l.d.div(p||(p=Object(ce.a)(["\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: ","; */\n    background: rgb(238,174,202);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n    margin: 0;\n\n"])),(function(e){return e.theme.colors.main})),ue=l.d.div(f||(f=Object(ce.a)(["\n    width:min(1470px, calc(100% - 30px));\n    padding: 20px 0 40px 0;\n    margin: 0;\n"]))),de=function(e){var n=e.children;return Object(oe.jsxs)(se,{children:[Object(oe.jsx)(ie,{}),Object(oe.jsx)(ue,{children:n})]})},le=function(e){return"".concat(e/16,"rem")},be={mobileS:320,mobileM:375,mobileL:450,tablet:768,tabletL:1024},je={fontSizes:{small:le(14),base:le(16),lg:le(18),xl:le(20),xxl:le(22),xxxl:le(24),titleSize:le(50)},colors:{main:"#f6e9ff",text:"#333",border:"#666",selected:"#d9afff",answer:"#b8cbff",answerBorder:"#eac2efc",answerText:"#2a50b8",primary:{main:"#303f9f",text:"#fff",border:"rgba(0, 0, 0, 0.5)",accent:"#666ad1",disabled:"#777aef"},secondary:{main:"#464646",text:"rgba(255,255,255,0.85)",border:"rgba(255,255,255,0.15)",accent:"#5f5f5f",disabled:"#4A4A4A"}},deviceSizes:be,device:{mobileS:"only screen and (max-width: ".concat(be.mobileS,"px)"),mobileM:"only screen and (max-width: ".concat(be.mobileM,"px)"),mobileL:"only screen and (max-width: ".concat(be.mobileL,"px)"),tablet:"only screen and (max-width: ".concat(be.tablet,"px)"),tabletL:"only screen and (max-width: ".concat(be.tabletL,"px)")}},pe=t(37),fe=t(9),xe=l.d.button(x||(x=Object(ce.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    margin: 0.5rem 1rem;\n    width: ",";\n    font-weight: ",";\n    font-size: ",";\n    outline: none;\n    ","\n"])),(function(e){return e.fullWidth?"100%":"8rem"}),(function(e){return e.bold?"bold":"normal"}),(function(e){var n=e.fontSize;return n?n+"px":"1rem"}),(function(e){var n=e.color,t=e.theme.colors,r=e.disabled,c="secondary"===n?t.secondary:t.primary;return"\n            background: ".concat(r?c.disabled:c.main,";\n            color: ").concat(c.text,";\n            border: ").concat(c.border," solid thin;\n            ").concat(!r&&"\n                &:hover {\n                    background: ".concat("text"===n?"transparent":c.accent,";\n                    outline: none;\n                }\n            "),"\n        ")})),he=l.d.input(h||(h=Object(ce.a)(["\n    font-size: 18px;\n    padding: 10px;\n    margin: 10px;\n    background: papayawhip;\n    border: none;\n    border-radius: 3px;\n    ::placeholder {\n        color: palevioletred;\n    }\n"]))),Oe={giant:1920,huge:1440,bigDesktop:1200,desktop:1e3,tablet:768,thone:600,phablet:480,phone:376,tiny:330},me=Object.keys(Oe).reduce((function(e,n){var t=Oe[n]/16;return e[n]=function(e){return Object(l.c)(O||(O=Object(ce.a)(["\n      @media (max-width: ","em) {\n        ","\n      }\n    "])),t,Object(l.c)(e))},e}),{}),ge=t.p+"static/media/challenger.03e4f276.png",we=l.d.div(m||(m=Object(ce.a)(["\n  display: grid;\n  align-items: center;\n  text-align: center;\n  justify-items: center;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(1, 2fr);\n"]))),ve=l.d.div(g||(g=Object(ce.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  align-items: center;\n  ","\n"])),me.tablet(w||(w=Object(ce.a)(["\n    display: grid;\n    grid-template-rows: auto auto auto 180px;\n  "])))),ye=l.d.img(v||(v=Object(ce.a)(["\n  width: 45%;\n  height: 100%;\n  ","\n"])),me.tablet(y||(y=Object(ce.a)(["\n  width: 70%;\n  "])))),ke=function(e){var n=e.userObj,t=e.currentInfo,c=Object(r.useState)(""),a=Object(d.a)(c,2),i=a[0],o=a[1],l=Object(r.useState)(""),b=Object(d.a)(l,2),j=b[0],p=b[1],f=Object(r.useState)(""),x=Object(d.a)(f,2),h=x[0],O=x[1],m=t.toQuiz,g=function(e){var n=e.target,t=n.name,r=n.value;"name"===t?o(r):"alias"===t?p(r):"number"===t&&O(r)},w=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,re.collection("users").doc(n.uid).set({uid:n.uid,name:i,alias:j,number:h,isAdmin:!1,available:!m,quiz_1:0,quiz_2:0,quiz_3:0,quiz_4:0,quiz_5:0,quiz_6:0,quiz_7:0,quiz_8:0});case 3:alert(m?"\ucc38\uad00\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.":"\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),window.location.reload(!1);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(oe.jsxs)(we,{children:[Object(oe.jsx)(ye,{src:ge}),Object(oe.jsx)("form",{onSubmit:w,children:Object(oe.jsxs)(ve,{children:[Object(oe.jsx)(he,{name:"name",type:"text",placeholder:"\uc774\ub984",required:!0,value:i,onChange:g}),Object(oe.jsx)(he,{name:"alias",type:"text",placeholder:"\ub2c9\ub124\uc784",required:!0,value:j,onChange:g}),Object(oe.jsx)(he,{name:"number",type:"tel",placeholder:"ex) 01012345678",pattern:"[0-9]{11}",required:!0,value:h,onChange:g}),Object(oe.jsx)(he,{type:"submit",onSubmit:w})]})})]})},Se=t.p+"static/media/quizLogo.740cf7c9.png",ze=l.d.div(k||(k=Object(ce.a)(["\n  display: grid;\n  align-items: center;\n  grid-template-rows: repeat(2, 1fr);\n  text-align: center;\n  justify-items: center;\n  ","\n"])),me.tablet(S||(S=Object(ce.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: repeat(2, 1fr);\n  "])))),Ae=Object(l.d)(xe)(z||(z=Object(ce.a)(["\n  width: 300px;\n"]))),_e=l.d.img(A||(A=Object(ce.a)(["\n  width: 45%;\n  height: 100%;\n  ","\n"])),me.tablet(_||(_=Object(ce.a)(["\n  width: 70%;\n  "])))),Ie=function(){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=(n[1],function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new ne.auth.GoogleAuthProvider,e.next=3,te.signInWithPopup(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(oe.jsx)(oe.Fragment,{children:t?Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(ke,{}),function(){window.location.reload(!1)}]}):Object(oe.jsxs)(ze,{children:[Object(oe.jsx)(_e,{src:Se}),Object(oe.jsx)(Ae,{onClick:c,name:"google",children:"\uad6c\uae00 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778\ud558\uae30"})]})})},qe=l.d.div(I||(I=Object(ce.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n"])),(function(e){return e.left?"left":"center"})),Ee=function(e,n,t,r,c){return{no:e,question:n,answer:t,wrong:r,candidates:c}},Ce=[Ee(1,"\uace8\uace0\ub2e4 \uc5b8\ub355\uc758 '\uace8\uace0\ub2e4'\uc758 \ub73b\uc740?",2,[1,3],["\uc8fd\uc74c","\ud574\uace8\uc0b0","\uc9c0\uc625"]),Ee(2,"\uc601\uc5b4\ub85c \ubd80\ud65c\uc808\uc740 Easter \uc785\ub2c8\ub2e4. Easter\uc758 \uc5b4\uc6d0\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",1,[2,3],["Eastre(\uc0c8\ubcbd) + Ostara(\ubd04)","Ostern(\uc624\uc2a4\ud134)","Pascha(\ud30c\uc2a4\ucc28)"]),Ee(3,"\uc608\uc218\ub2d8\uc740 \uc2ed\uc790\uac00\uc5d0 \ubabb\ubc15\ud788\uc2dc\uace0 3\uc77c\ub9cc\uc5d0 \ubd80\ud65c\ud558\uc168\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8 \ubaa8\uc2b5\uc744 \uc5ec\ub7ec \uc0ac\ub78c\ub4e4\uc5d0\uac8c \ubcf4\uc774\uc2dc\uba70 \uc790\uc2e0\uc758 \ubd80\ud65c\uc744 \uc54c\ub838\ub294\ub370\uc694 \uadf8 \uc911 \uc608\uc218\ub2d8\uc758 \ubd80\ud65c\uc744 \uac00\uc7a5 \ucc98\uc74c \ubaa9\uaca9\ud55c \uc778\ubb3c\uc740 \ub204\uad6c\uc77c\uae4c\uc694?",1,[2,3],["\ub9c9\ub2ec\ub77c \ub9c8\ub9ac\uc544","\ubc30\ub4dc\ub85c","\uc694\ud55c"]),Ee(4," \ubd80\ud65c\uc808\uc758 \uae30\uc900\uc740 \uacfc\uac70 325\ub144 \ub2db\ucf00\uc544 \uacf5\uc758\ud68c\uc5d0\uc11c \uc815\ud574\uc84c\ub294\ub370\uc694 \uc774\ub294 \uc11c\ubc29\uad50\ud68c\ub4e4\uc758 \uae30\uc900\uc744 \ub530\ub978 \uac83\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \ubd80\ud65c\uc808\uc758 \uc815\ud655\ud55c \ub0a0\uc9dc \uc5b8\uc81c \uc77c\uae4c\uc694?",1,[2,3],["\ucd98\ubd84(\u6625\u5206) \uc774\ud6c4 \ubcf4\ub984\ub2ec\uc774 \ub418\ub294 \ub2e4\uc74c \uc8fc\uc77c","\uc591\ub825 4\uc6d4\uc758 \uccab\ubc88\uc9f8 \uc8fc\uc77c ","\uc74c\ub825 3\uc6d4 \uccab \uc8fc\uc77c"]),Ee(5,"\ub2e4\uc74c \uc911 \ubd80\ud65c\uc808\uc758 \u201c\ubd80\u201d\ub85c \uc633\uc740 \uac83\uc740?",1,[2,3],["\ub2e4\uc2dc \ubd80(\u5fa9)","\ub730 \ubd80(\u6d6e)","\ub2e4\ub2e4\ub97c \ubd80(\u8d74)"]),Ee(6,"\ub3c4\ub9c8\ub294 \ubd80\ud65c\ud558\uc2e0 \uc608\uc218\ub2d8\uc758 \ubabb\uc790\uad6d\uc744 \ubcf4\uace0\uc790 \ud588\uc2b5\ub2c8\ub2e4. \ub3c4\ub9c8\uac00 \ubcf4\uae38 \uc6d0\ud588\ub358 \uc608\uc218\ub2d8\uc758 \ubabb\uc790\uad6d\uc774 \uc544\ub2cc \uacf3\uc740?",2,[1,3],["\uc190","\ubc1c","\uc606\uad6c\ub9ac"]),Ee(7,"\ud638\uc2a4\ud2b8\uc778 \uc548\ud0dc\ud638 \ubc97\ub2d8\uc740 1997\ub144\uc0dd(\ube60\ub978)\uc774\ub2e4. \uadf8\ub807\ub2e4\uba74 1997\ub144\ub3c4\uc758 \ubd80\ud65c\uc808\uc740 \ub2e4\uc74c \uc911 \uc5b8\uc81c\uc600\uc744\uae4c?",3,[1,2],["1997\ub144 4\uc6d4 7\uc77c","1997\ub144 4\uc6d4 15\uc77c","1997\ub144 3\uc6d4 30\uc77c"]),Ee(8,"\ub2e4\uc74c \uc911 \ubd80\ud65c\uc808 \uc74c\uc2dd\uc5d0 \ud574\ub2f9\ub418\uc9c0 \uc54a\ub294 \uac83\uc740?",2,[1,3],["\ud584","\uae40\uce58","\uc0b6\uc740 \ub2ec\uac40"])],Le=Object(l.d)(qe)(q||(q=Object(ce.a)(["\n    padding-top: 20px;\n    opacity: ",";\n    transition: opacity 0.6s linear;\n"])),(function(e){return e.show?1:0})),Be=l.d.div(E||(E=Object(ce.a)(["\n    width: 96%;\n    height: 50px;\n    display: grid;\n    grid-template-columns: ",";\n\n    // \uacf5\ud1b5\n    & > div{\n        box-shadow: 1px 0 4px black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    // Survived\n    & > div:first-child{\n        border-top-left-radius: 15px;\n        border-bottom-left-radius: 15px;\n        background-color: #ce93d8;\n        font-weight: bolder;\n    }\n    // Failed\n    & > div:nth-child(2){\n        border-top-right-radius: 15px;\n        border-bottom-right-radius: 15px;\n        background-color: #f3e5f5;\n    }\n"])),(function(e){var n=e.survived;return"".concat(10+.8*n,"% ").concat(90-.8*n,"%")})),Qe=function(e){var n=e.showAnswer,t=e.part,c=(e.participants,e.currentInfo),a=Object(r.useState)(0),i=Object(d.a)(a,2),o=i[0],s=i[1],u=c.currentQuiz;return Object(r.useEffect)((function(){re.collection("users").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).filter((function(e){return e.available})).length;s(n)}))}),[u]),Object(oe.jsx)(Le,{show:n,children:Object(oe.jsxs)(Be,{survived:100*o/t,children:[Object(oe.jsxs)("div",{children:[" ",o,"\uba85 \uc0dd\uc874"]}),Object(oe.jsxs)("div",{children:[" ",t-o,"\uba85 \ud0c8\ub77d"]})]})})},De=t(25),Fe=t(28),He=l.d.button(C||(C=Object(ce.a)(['\n    /* font-family: ""; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    font-size: 1.6rem;\n    font-weight: bolder;\n    border-radius: 5px;\n    border: ',";;\n\n    position: relative;\n    background-color: ",";\n    color: ",";\n    "," \n    text-decoration: none;\n    text-transform: uppercase;\n    transition: 0.5s all ease;\n\n    \n"])),(function(e){var n=e.theme;return e.isAnswer?"5px solid ".concat(n.colors.answerBorder):"none"}),(function(e){var n=e.theme.colors,t=e.isSelected,r=e.isAnswer;return t?n.selected:r?n.answer:n.main}),(function(e){var n=e.theme;return e.isAnswer?n.colors.answerText:n.colors.text}),(function(e){return e.isAnswer&&"opacity: 0.7"})),Me=function(e){return Object(oe.jsx)(He,Object(Fe.a)(Object(Fe.a)({},e),{},{children:e.text}))},Te=l.d.div(L||(L=Object(ce.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 100px;\n    ","\n    grid-gap: 5px;\n    background-color: ",";\n    border: 5px solid ",";\n    border-radius: 5px;\n"])),me.tablet(B||(B=Object(ce.a)(["\n        grid-template-columns: 100%;\n        grid-template-rows: repeat(3, 60px);\n    "]))),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border})),We=function(e){var n=e.quiz,t=e.userObj,c=e.doc_user_id,a=e.showAnswer,i=e.isBlocked,o=t.isAdmin,l=t.available,b=n.no,j=n.answer,p=n.candidates,f=Object(r.useState)(null),x=Object(d.a)(f,2),h=x[0],O=x[1],m=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o||!a){e.next=2;break}return e.abrupt("return");case 2:O(n),g(n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.collection("users").doc(c).update(Object(De.a)({},"quiz_"+b,n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){O(null)}),[n.no]),Object(r.useEffect)((function(){Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:if(h!==j){e.next=5;break}return setTimeout((function(){return alert("\uc815\ub2f5\uc785\ub2c8\ub2e4!!")}),1e3),e.abrupt("return");case 5:setTimeout((function(){return alert("\uc815\ub2f5\uc744 \ub9de\ucd94\uc9c0 \ubabb\ud558\uc168\uc2b5\ub2c8\ub2e4\u3160\u3160 \ub2e4\uc74c \ubb38\uc81c\ubd80\ud130\ub294 \uad00\uc804\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.")}),1e3);case 6:case"end":return e.stop()}}),e)})))()}),[a]),Object(oe.jsxs)(Te,{children:[Object(oe.jsx)(Me,{onClick:function(){return m(1)},no:1,text:p[0],isSelected:1===h,isAnswer:1===j&&a,disabled:!l||a||!o&&i}),Object(oe.jsx)(Me,{onClick:function(){return m(2)},text:p[1],isSelected:2===h,isAnswer:2===j&&a,disabled:!l||a||!o&&i}),Object(oe.jsx)(Me,{onClick:function(){return m(3)},no:3,text:p[2],isSelected:3===h,isAnswer:3===j&&a,disabled:!l||a||!o&&i})]})},Pe=l.d.div(Q||(Q=Object(ce.a)(["\n    max-width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    color: ",";\n    border: 5px solid ",";\n    border-bottom: none;\n    border-radius: 5px;\n    font-size: 2rem;\n    font-weight: bolder;\n    letter-spacing: 1.5px;\n    line-height: 50px;\n    padding: 20px;\n    ","\n"])),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.border}),me.tablet(D||(D=Object(ce.a)(["\n    font-size: 1.5rem;\n    line-height: 40px;\n  "])))),Je=function(e){var n=e.question;return Object(oe.jsx)(Pe,{children:n})},Ve=l.d.div(F||(F=Object(ce.a)(["\n\tz-index: 10;\n\tdisplay: ",";\n    justify-content: center;\n    align-items: center;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth:100vw;\n\tbackground: rgba(0,0,0,0.5);\n"])),(function(e){return e.show?"flex":"none"})),Ge=Object(l.d)(qe)(H||(H=Object(ce.a)(["\n    background-color: #eee;\n    box-shadow: 0px 2px 6px grey;\n    border-radius: 10px;\n    padding: 10px;\n    width: 450px;\n    height: 300px;\n"]))),Ke=l.d.div(M||(M=Object(ce.a)(["\n    display: grid;\n    grid-template-columns: 60px 270px 80px;\n    grid-template-rows: repeat(3, 50px);\n"]))),Ne=l.d.div(T||(T=Object(ce.a)(["\n    height: 15px;\n    width: ",";\n    background-color: ",";\n"])),(function(e){return 1+e.perc+"%"}),(function(e){return e.color})),Re=function(e){var n=e.visible,t=e.toggle,r=e.participants,c=Object(d.a)(r,3),a=c[0],i=c[1],o=c[2],s=(a+i+o)/100;return Object(oe.jsx)(Ve,{show:n,onClick:t,children:Object(oe.jsx)(Ge,{children:Object(oe.jsxs)(Ke,{children:[Object(oe.jsx)(qe,{children:"1\ubc88"}),Object(oe.jsx)(qe,{left:!0,children:Object(oe.jsx)(Ne,{perc:a/s,color:"#cf0c0c"})}),Object(oe.jsxs)(qe,{children:[a,"\uba85"]}),Object(oe.jsx)(qe,{children:"2\ubc88"}),Object(oe.jsx)(qe,{left:!0,children:Object(oe.jsx)(Ne,{perc:i/s,color:"#20d6a0"})}),Object(oe.jsxs)(qe,{children:[i,"\uba85"]}),Object(oe.jsx)(qe,{children:"3\ubc88"}),Object(oe.jsx)(qe,{left:!0,children:Object(oe.jsx)(Ne,{perc:o/s,color:"#245cbb"})}),Object(oe.jsxs)(qe,{children:[o,"\uba85"]})]})})})},Ze=(t(47),l.d.div(W||(W=Object(ce.a)(["\n  display: grid;\n  grid-template-rows: auto auto auto auto;\n"])))),Ue=l.d.div(P||(P=Object(ce.a)(["\n    display: grid;\n    grid-template-rows: 360px auto auto;\n    background-color: ",";\n    border-radius: 15px;\n    ","\n"])),(function(e){return e.theme.colors.border}),me.tablet(J||(J=Object(ce.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: 300px;\n  "])))),Xe=l.d.div(V||(V=Object(ce.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  & > button {\n    margin: 8px 4px;\n  }\n"]))),Ye=l.d.div(G||(G=Object(ce.a)(["\n  width: 100%;\n  display: grid;\n  justify-content: flex-start;\n  font-size: 2em;\n  font-weight: bolder;\n  padding: 5% 0;\n"]))),$e=function(e){var n=e.userObj,t=e.doc_user_id,c=e.currentInfo,a=c.currentQuiz,i=c.showAnswer,o=c.showHint,l=c.isBlocked,b=c.part,j=n.isAdmin,p=Ce[a],f=Object(r.useState)([0,0,0]),x=Object(d.a)(f,2),h=x[0],O=x[1],m=Object(r.useState)(0),g=Object(d.a)(m,2),w=g[0],v=g[1],y=Object(r.useState)(1),k=Object(d.a)(y,2),S=k[0],z=k[1],A=Object(r.useState)(0),_=Object(d.a)(A,2),I=_[0],q=_[1],E=Object(r.useState)(!1),C=Object(d.a)(E,2),L=C[0],B=C[1],Q=function(){return B((function(e){return!e}))},D=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a<=0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,re.collection("current").doc("current").update({currentQuiz:a-1,showAnswer:!1,isBlocked:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){re.collection("users").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).map((function(e){return e.available}));v(n.filter((function(e){return!0===e})).length)}))}),[a]);var F=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a===Ce.length-1||w<=2)){e.next=5;break}return e.next=3,re.collection("current").doc("current").update({isDone:!0});case 3:e.next=9;break;case 5:return e.next=7,re.collection("current").doc("current").update({currentQuiz:a+1,showAnswer:!1,isBlocked:!1});case 7:z(1),q(0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(),e.next=3,re.collection("current").doc("current").update({showHint:!0});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.collection("current").doc("current").update({isBlocked:!0});case 2:z(0),q(0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=setInterval((function(){parseInt(I)>0&&q(parseInt(I)-1),0===parseInt(I)&&(0===parseInt(S)?clearInterval(e):(z(parseInt(S)-1),q(59)))}),1e3);return function(){return clearInterval(e)}}),[S,I]),Object(r.useEffect)((function(){re.collection("users").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).map((function(e){return e["quiz_"+p.no]}));O([n.filter((function(e){return 1===e})).length,n.filter((function(e){return 2===e})).length,n.filter((function(e){return 3===e})).length])}))}),[a]),Object(oe.jsxs)(Ze,{children:[j&&Object(oe.jsx)(Xe,{children:Object(oe.jsx)(xe,{onClick:H,disabled:o,children:"\ucc2c\uc2a4"})}),Object(oe.jsxs)(Ue,{children:[Object(oe.jsx)(Je,{question:p.question}),Object(oe.jsx)(We,{quiz:p,userObj:n,doc_user_id:t,showAnswer:i,isBlocked:l})]}),j&&Object(oe.jsxs)(Xe,{children:[Object(oe.jsx)(xe,{color:"secondary",onClick:D,children:" \uc774\uc804 "}),l?i?Object(oe.jsx)(xe,{onClick:F,children:" \ub2e4\uc74c "}):Object(oe.jsx)(xe,{onClick:function(){re.collection("current").doc("current").update({showAnswer:!0});var e=re.collection("users");e.where("quiz_".concat(p.no),"!=",p.answer).get().then((function(n){var t=re.batch();n.docs.forEach((function(n){var r=e.doc(n.data().uid);t.update(r,{available:!1})})),t.commit()})).catch((function(e){console.log("Error getting document:",e)}))},children:" \uc815\ub2f5 \uacf5\uac1c "}):Object(oe.jsx)(xe,{color:"secondary",onClick:M,children:" \uc2dc\uac04 \uc885\ub8cc "})]}),Object(oe.jsx)(Qe,{showAnswer:i,part:b,participants:h,currentInfo:c,userObj:n}),Object(oe.jsx)(Re,{visible:L,toggle:Q,participants:h,currentQuiz:a}),j&&Object(oe.jsxs)(Ye,{children:[S,":",I<10?"0".concat(I):I]})]})},en=l.d.div(K||(K=Object(ce.a)(["\n    display: grid;\n    justify-content: center;\n    grid-template-rows: 250px auto;\n    font-size: 2em;\n    font-weight: bolder;\n    text-align: center;\n    letter-spacing: 1.5px;\n    line-height: 1.8em;\n    ","\n"])),me.tablet(N||(N=Object(ce.a)(["\n    grid-template-rows: 300px auto;\n    font-size: 1.5em;\n  "])))),nn=l.d.div(R||(R=Object(ce.a)(["\n    font-style: italic;\n"]))),tn=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)((function(){re.collection("users").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).filter((function(e){return!0===e.available})).map((function(e){return e.alias})).map((function(e,n,t){return n<t.length-1?e+", ":e}));c(n)}))}),[]),Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsxs)(en,{children:[Object(oe.jsxs)("div",{children:["\ub9c8\uc9c0\ub9c9\uae4c\uc9c0 \uc0dd\uc874\ud558\uc2e0\uac78 \ucd95\ud558\ub4dc\ub9bd\ub2c8\ub2e4!!!",Object(oe.jsx)("br",{}),"\ubb38\uc790\uac00 \ubc1c\uc1a1\ub420 \uc608\uc815\uc774\ub2c8 \uaf2d \ud655\uc778\ud574\uc8fc\uc138\uc694 :)"]}),Object(oe.jsx)("div",{children:"\uc0dd\uc874\uc790 \uba85\ub2e8 :"}),Object(oe.jsx)(nn,{children:[t]})]})})},rn=t.p+"static/media/frame.4a975f16.png",cn=l.d.div(Z||(Z=Object(ce.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  text-align: left;\n  ","\n"])),me.tablet(U||(U=Object(ce.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: auto auto;\n  "])))),an=l.d.div(X||(X=Object(ce.a)(["\n  margin: 30px;\n"]))),on=l.d.div(Y||(Y=Object(ce.a)(["\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  line-height: 2em;\n  font-size: large;  \n  ","\n"])),me.tablet($||($=Object(ce.a)(["\n  font-size: medium;\n"])))),sn=l.d.img(ee||(ee=Object(ce.a)(["\n  width: 100%;\n  height: 100%;\n"]))),un=function(e){var n=e.isAdmin,t=Object(r.useState)(0),c=Object(d.a)(t,2),a=c[0],i=c[1],o=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.collection("current").doc("current").update({toQuiz:!0,part:a,showAnswer:!1,block:!1,showHint:!1,currentQuiz:0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return re.collection("users").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).length;i(n)})),Object(oe.jsxs)(cn,{children:[Object(oe.jsxs)("div",{children:[Object(oe.jsxs)(an,{children:[Object(oe.jsx)("h1",{children:"Rules"}),Object(oe.jsxs)(on,{children:["1. 3\uac1c\uc758 \ubcf4\uae30 \uc911 \uc815\ub2f5\uc744 \uace0\ub978\ub2e4. ",Object(oe.jsx)("br",{}),"2. 100\uc778\uc774 \uba3c\uc800 \ubb38\uc81c\ub97c \ub2e4 \ud47c \ud6c4, \uac8c\uc2a4\ud2b8 2\uc778\uc774 \ud47c\ub2e4. ",Object(oe.jsx)("br",{}),"3. \ubb38\uc81c\ub97c \ud478\ub294 \ub370\ub294 1\ubd84\uc758 \uc2dc\uac04\uc81c\ud55c\uc774 \uc788\ub2e4. ",Object(oe.jsx)("br",{}),"4. \ubb38\uc81c\ub97c \ud2c0\ub9ac\uba74 \ud0c8\ub77d\uc774\uba70, \uc815\ub2f5\uc790\ub9cc \ub2e4\uc74c \ubb38\uc81c\ub85c \ub118\uc5b4\uac04\ub2e4. ",Object(oe.jsx)("br",{}),"5. \uc815\ub2f5\uc790\uac00 8\uba85(?) \uc774\ud558\ub85c \ub0a8\uc73c\uba74 \ud504\ub85c\uadf8\ub7a8\uc774 \uc885\ub8cc\ub41c\ub2e4. ",Object(oe.jsx)("br",{}),"6. \uc911\uac04 \ucc38\uc5ec\ub294 \ubd88\uac00\ub2a5\ud558\ub2e4.",Object(oe.jsx)("br",{}),"7. \uac8c\uc2a4\ud2b8 2\uba85\uc740 \ud568\uaed8 2\ubc88\uc758 \ucc2c\uc2a4\ub97c \uc4f8 \uc218 \uc788\ub2e4. ",Object(oe.jsx)("br",{}),Object(oe.jsx)("br",{}),"\ud55c\ubc97\ub2d8 \ucc2c\uc2a4 : \uc6d0\ud558\ub294 \ud55c \uba85\uc758 \ub2f5\uc744 \uc54c \uc218 \uc788\ub2e4, \uc5c6\uc744 \uc2dc \ud638\uc2a4\ud2b8\uac00 \uc9c0\uc815. ",Object(oe.jsx)("br",{}),"\ubc97\ub2d8\ub4e4 \ucc2c\uc2a4 : \ubaa8\ub4e0 \ubc97\ub2d8\uc774 \uc120\ud0dd\ud55c \ub2f5\uc744 \uc54c \uc218 \uc788\ub2e4.",Object(oe.jsx)("br",{}),Object(oe.jsx)("br",{}),"\uc9c0\uae08\uae4c\uc9c0 ",a,"\uba85 \ucc38\uc5ec\ud558\uc168\uc2b5\ub2c8\ub2e4."]})]}),n&&Object(oe.jsx)(qe,{children:Object(oe.jsx)(xe,{onClick:o,children:" \ud034\uc988 \uc2dc\uc791\ud558\uae30"})})]}),n&&Object(oe.jsx)(sn,{src:rn})]})},dn=function(e){var n=e.isLoggedIn,t=e.userObj,r=e.hasAccount,c=e.doc_user_id,a=e.currentInfo;return Object(oe.jsx)(pe.a,{children:Object(oe.jsx)(fe.c,{children:n?r?Object(oe.jsx)(oe.Fragment,{children:a.toQuiz?Object(oe.jsx)(oe.Fragment,{children:a.isDone?Object(oe.jsx)(fe.a,{exact:!0,path:"/",children:Object(oe.jsx)(tn,{userObj:t})}):Object(oe.jsx)(fe.a,{exact:!0,path:"/",children:Object(oe.jsx)($e,{userObj:t,doc_user_id:c,currentInfo:a})})}):Object(oe.jsx)(fe.a,{exact:!0,path:"/",children:Object(oe.jsx)(un,{isAdmin:t.isAdmin})})}):Object(oe.jsx)(fe.a,{exact:!0,path:"/",children:Object(oe.jsx)(ke,{userObj:t,currentInfo:a})}):Object(oe.jsx)(fe.a,{exact:!0,path:"/",children:Object(oe.jsx)(Ie,{currentInfo:a})})})})};var ln=function(){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(null),i=Object(d.a)(a,2),o=i[0],b=i[1],j=Object(r.useState)(!1),p=Object(d.a)(j,2),f=p[0],x=p[1],h=Object(r.useState)(""),O=Object(d.a)(h,2),m=O[0],g=O[1],w=Object(r.useState)({currentQuiz:0,showAnswer:!1,showHint:!1,toQuiz:!1,isDone:!1}),v=Object(d.a)(w,2),y=v[0],k=v[1];return Object(r.useEffect)((function(){te.onAuthStateChanged(function(){var e=Object(u.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=8;break}return e.next=3,re.collection("users").where("uid","==",n.uid).get();case 3:t=e.sent,x(Boolean(t.docs.length));try{b(t.docs[0].data()),g(t.docs[0].id)}catch(r){b(n)}e.next=9;break;case 8:b(null);case 9:c(!0);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),re.collection("current").doc("current").onSnapshot((function(e){k(e.data())}))}),[]),Object(r.useEffect)((function(){m&&re.collection("users").doc(m).onSnapshot((function(e){b(e.data())}))}),[m]),Object(oe.jsx)(l.a,{theme:je,children:Object(oe.jsx)(de,{children:t?Object(oe.jsx)(dn,{isLoggedIn:Boolean(o),userObj:o,hasAccount:f,doc_user_id:m,currentInfo:y}):Object(oe.jsx)("div",{children:'"Initializing..."'})})})};i.a.render(Object(oe.jsx)(c.a.StrictMode,{children:Object(oe.jsx)(ln,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.98358045.chunk.js.map