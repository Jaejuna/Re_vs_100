(this.webpackJsonpre_vs_100=this.webpackJsonpre_vs_100||[]).push([[0],{66:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t.n(r),i=t(36),a=t.n(i),o=t(9),s=t.n(o),d=t(14),u=t(6),l=t(4),b=t(24);t(47),t(67),t(68);b.a.initializeApp({apiKey:"AIzaSyCNEEZVWLepSVn_ennOWsbwjL8E2wqnbpQ",authDomain:"re-vs-100-8ec8b.firebaseapp.com",projectId:"re-vs-100-8ec8b",storageBucket:"re-vs-100-8ec8b.appspot.com",messagingSenderId:"400681423336",appId:"1:400681423336:web:13667d56d28179863d545d"});var j,f,p,h,x,m,O,g,v,w,y,k,z,S,A,_,q,E,I,C,B,T,Q,D,L,F,M,W,H,R,V,J,P,G,K,N,X,Z,U,Y,$,nn,en,tn,rn,cn,an,on,sn,dn,un,ln,bn,jn,fn,pn=b.a,hn=b.a.auth(),xn=b.a.firestore(),mn=(b.a.storage(),t(3)),On=(t.p,t.p+"static/media/SamlipOutline.cb892823.ttf"),gn=t.p+"static/media/SamlipBasic.d6a7dad8.ttf",vn=Object(l.b)(j||(j=Object(mn.a)(["\n    @font-face {\n        font-family: \"SamOut\";\n        src: local('SamOut'), local('SamBasic')\n        url(",") format('woff'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),On,gn),wn=t.p+"static/media/backgroundMobile.619b31bf.jpg",yn={giant:1920,huge:1440,bigDesktop:1200,desktop:1e3,tablet:768,thone:600,phablet:480,phone:376,tiny:330},kn=Object.keys(yn).reduce((function(n,e){var t=yn[e]/16;return n[e]=function(n){return Object(l.c)(f||(f=Object(mn.a)(["\n      @media (max-width: ","em) {\n        ","\n      }\n    "])),t,Object(l.c)(n))},n}),{}),zn=l.d.div(p||(p=Object(mn.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n"])),(function(n){return n.left?"left":"center"})),Sn=t(1),An=l.d.div(h||(h=Object(mn.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n"])),wn),_n=Object(l.d)(zn)(x||(x=Object(mn.a)(["\n    width:min(1470px, calc(100% - 30px));\n    padding: 20px 0 40px 0;\n    margin: 0;\n"]))),qn=function(n){var e=n.children;return Object(Sn.jsxs)(An,{children:[Object(Sn.jsx)(vn,{}),Object(Sn.jsx)(_n,{children:e})]})},En=function(n){return"".concat(n/16,"rem")},In={mobileS:320,mobileM:375,mobileL:450,tablet:768,tabletL:1024},Cn={fontSizes:{small:En(14),base:En(16),lg:En(18),xl:En(20),xxl:En(22),xxxl:En(24),titleSize:En(50)},colors:{main:"#365387",text:"#ddd",border:"#494949",selected:"#cc76c2",answer:"#b8cbff",answerBorder:"#eac2efc",answerText:"#4b3297",primary:{main:"#01579b",text:"#fff",border:"rgba(0, 0, 0, 0.5)",accent:"#666ad1",disabled:"#6f74dd"},secondary:{main:"#464646",text:"rgba(255,255,255,0.85)",border:"rgba(255,255,255,0.15)",accent:"#5f5f5f",disabled:"#4A4A4A"}},deviceSizes:In,device:{mobileS:"only screen and (max-width: ".concat(In.mobileS,"px)"),mobileM:"only screen and (max-width: ".concat(In.mobileM,"px)"),mobileL:"only screen and (max-width: ".concat(In.mobileL,"px)"),tablet:"only screen and (max-width: ".concat(In.tablet,"px)"),tabletL:"only screen and (max-width: ".concat(In.tabletL,"px)")}},Bn=t(41),Tn=t(10),Qn=l.d.button(m||(m=Object(mn.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    margin: 0.5rem 1rem;\n    width: ",";\n    font-weight: ",";\n    font-size: ",";\n    outline: none;\n    ","\n"])),(function(n){return n.fullWidth?"100%":"8rem"}),(function(n){return n.bold?"bold":"normal"}),(function(n){var e=n.fontSize;return e?e+"px":"1rem"}),(function(n){var e=n.color,t=n.theme.colors,r=n.disabled,c="secondary"===e?t.secondary:t.primary;return"\n            background: ".concat(r?c.disabled:c.main,";\n            color: ").concat(c.text,";\n            border: ").concat(c.border," solid thin;\n            ").concat(!r&&"\n                &:hover {\n                    background: ".concat("text"===e?"transparent":c.accent,";\n                    outline: none;\n                }\n            "),"\n        ")})),Dn=l.d.input(O||(O=Object(mn.a)(["\n    font-size: 18px;\n    padding: 10px;\n    border: none;\n    border-radius: 6px;\n    outline: none;\n    border-bottom: 2px solid ",";\n    background: rgba( 255, 255, 255, 0.20 );\n    box-shadow: 0 8px 40px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 10.5px );\n    -webkit-backdrop-filter: blur( 10.5px );\n    ::placeholder {\n        color: #dddddd;\n    }\n    :focus {\n        border-bottom: 4px solid ",";\n    }\n\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.selected})),Ln=t.p+"static/media/challenger.03e4f276.png",Fn=l.d.div(g||(g=Object(mn.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-items: center;\n    ","\n"])),kn.tablet(v||(v=Object(mn.a)(["      display: grid;\n      grid-template-columns: 100%;\n      grid-template-rows: 250px auto;\n  "],["\\\n      display: grid;\n      grid-template-columns: 100%;\n      grid-template-rows: 250px auto;\n  "])))),Mn=l.d.div(w||(w=Object(mn.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    align-items: center;\n    flex-direction: row;\n    margin-bottom: 100px;\n    \n    & > button {\n      margin: 0;\n    }\n    & > *:nth-child(n+2){\n      margin-left: 15px;\n      margin-top: 0;\n    }\n    ","\n"])),kn.tablet(y||(y=Object(mn.a)(["\n      flex-direction: column;\n        & > input {\n          width: 80%;\n        }\n        & > *:nth-child(n+2){\n          margin-left: 0px;\n          margin-top: 15px;\n        }\n    "])))),Wn=l.d.img(k||(k=Object(mn.a)(["\n  width: 50%;\n  height: 100%;\n  ","\n"])),kn.tablet(z||(z=Object(mn.a)(["\n  width: 100%;\n  height: auto;\n"])))),Hn=function(n){var e=n.userObj,t=n.currentInfo,c=Object(r.useState)(""),i=Object(u.a)(c,2),a=i[0],o=i[1],l=Object(r.useState)(""),b=Object(u.a)(l,2),j=b[0],f=b[1],p=Object(r.useState)(""),h=Object(u.a)(p,2),x=h[0],m=h[1],O=t.toQuiz,g=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?o(r):"alias"===t?f(r):"number"===t&&m(r)},v=function(){var n=Object(d.a)(s.a.mark((function n(t){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,xn.collection("users").doc(e.uid).set({uid:e.uid,name:a,alias:j,number:x,isAdmin:!1,available:!O,quiz_1:0,quiz_2:0,quiz_3:0,quiz_4:0,quiz_5:0,quiz_6:0,quiz_7:0,quiz_8:0});case 3:alert(O?"\ucc38\uad00\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.":"\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),window.location.reload(!1);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(Sn.jsxs)(Fn,{children:[Object(Sn.jsx)(Wn,{src:Ln}),Object(Sn.jsx)("form",{onSubmit:v,children:Object(Sn.jsxs)(Mn,{children:[Object(Sn.jsx)(Dn,{name:"name",placeholder:"\uc774\ub984",required:!0,value:a,onChange:g}),Object(Sn.jsx)(Dn,{name:"alias",placeholder:"\ub2c9\ub124\uc784",required:!0,value:j,onChange:g}),Object(Sn.jsx)(Dn,{name:"number",type:"tel",placeholder:"ex) 01012345678",pattern:"[0-9]{11}",required:!0,value:x,onChange:g}),Object(Sn.jsx)(Qn,{type:"submit",onSubmit:v,children:"\uc785\uc7a5"})]})})]})},Rn=t.p+"static/media/quizLogo.740cf7c9.png",Vn=l.d.div(S||(S=Object(mn.a)(["\n  display: grid;\n  align-items: center;\n  grid-template-rows: repeat(2, 1fr);\n  text-align: center;\n  justify-items: center;\n  ","\n"])),kn.tablet(A||(A=Object(mn.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: 300px auto;\n  "])))),Jn=Object(l.d)(Qn)(_||(_=Object(mn.a)(["\n  width: 300px;\n"]))),Pn=l.d.img(q||(q=Object(mn.a)(["\n  width: 100%;\n  height: 100%;\n  ","\n"])),kn.tablet(E||(E=Object(mn.a)(["\n    width: 100%;\n    height: 180px;\n  "])))),Gn=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],c=(e[1],function(){var n=Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new pn.auth.GoogleAuthProvider,n.next=3,hn.signInWithPopup(e);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}());return Object(Sn.jsx)(Sn.Fragment,{children:t?Object(Sn.jsxs)(Sn.Fragment,{children:[Object(Sn.jsx)(Hn,{}),function(){window.location.reload(!1)}]}):Object(Sn.jsxs)(Vn,{children:[Object(Sn.jsx)(Pn,{src:Rn}),Object(Sn.jsx)(Jn,{onClick:c,name:"google",children:"\uad6c\uae00 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778\ud558\uae30"})]})})},Kn=l.d.div(I||(I=Object(mn.a)(["\n    padding-top: 20px;\n    opacity: ",";\n    transition: opacity 0.6s linear;\n\n    min-width: 96%;\n    height: 50px;\n    display: flex;\n\n    // \uacf5\ud1b5\n    & > div{\n        box-shadow: 1px 0 4px black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    // Survived\n    & > div:first-child{\n        border-top-left-radius: 15px;\n        border-bottom-left-radius: 15px;\n        background-color: #ce93d8;\n        font-weight: bolder;\n        width: ",";\n        ","\n    }\n    // Failed\n    & > div:nth-child(2){\n        border-top-right-radius: 15px;\n        border-bottom-right-radius: 15px;\n        background-color: #f3e5f5;\n        width: ",";\n        ","\n    }\n"])),(function(n){return n.show?1:0}),(function(n){var e=n.survived;return"".concat(e,"%")}),(function(n){var e=n.survived;return e?100===e?"border-radius: 15px;":"display: flex;":"display: none;"}),(function(n){var e=n.survived;return"".concat(100-e,"%")}),(function(n){var e=n.survived;return 100===e?"display: none;":e?"display: flex;":"border-radius: 15px;"})),Nn=function(n){var e=n.showAnswer,t=n.quiz,c=n.survived,i=n.currentInfo,a=Object(r.useState)([0,0,0]),o=Object(u.a)(a,2),s=(o[0],o[1]),d=Object(r.useState)(0),l=Object(u.a)(d,2),b=l[0],j=l[1],f=Object(r.useState)(1),p=Object(u.a)(f,2),h=p[0],x=p[1];i.currentQuiz;return Object(r.useEffect)((function(){xn.collection("users").get().then((function(n){var e=n.docs.map((function(n){return n.data()})).map((function(n){return n["quiz_"+t.no]})),r=[e.filter((function(n){return 1===n})).length,e.filter((function(n){return 2===n})).length,e.filter((function(n){return 3===n})).length];s(r),j(r[t.answer-1])})),x(c)}),[e,t.no]),Object(Sn.jsxs)(Kn,{show:e,survived:100*b/h,children:[Object(Sn.jsxs)("div",{children:[" ","".concat(b,"\uba85 \uc0dd\uc874")]}),Object(Sn.jsxs)("div",{children:[" ","".concat(h-b,"\uba85 \ud0c8\ub77d")]})]})},Xn=t(27),Zn=function(n,e){var t=Object(r.useRef)(!1);Object(r.useEffect)((function(){t.current?n():t.current=!0}),e)},Un=t(32),Yn=l.d.button(C||(C=Object(mn.a)(['\n    /* font-family: ""; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    font-size: 1.6rem;\n    font-weight: bolder;\n    border-radius: 5px;\n    border: ',";;\n    color: white;\n    position: relative;\n    background-color: ",";\n    color: ",";\n    "," \n    text-decoration: none;\n    text-transform: uppercase;\n    transition: 0.5s all ease;\n    outline: none;\n"])),(function(n){var e=n.theme;return n.isAnswer?"5px solid ".concat(e.colors.answerBorder):"none"}),(function(n){var e=n.theme.colors,t=n.isSelected,r=n.isAnswer;return t?e.selected:r?e.answer:e.main}),(function(n){var e=n.theme,t=n.isAnswer,r=n.isSelected;return t?r?"#1a17bb":e.colors.answerText:e.colors.text}),(function(n){return n.isAnswer&&"opacity: 0.7"})),$n=function(n){return Object(Sn.jsx)(Yn,Object(Un.a)(Object(Un.a)({},n),{},{children:n.text}))},ne=l.d.div(B||(B=Object(mn.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 100px;\n    ","\n    grid-gap: 5px;\n    background-color: ",";\n    border: 5px solid ",";\n    border-radius: 5px;\n"])),kn.tablet(T||(T=Object(mn.a)(["\n        grid-template-columns: 100%;\n        grid-template-rows: repeat(3, 60px);\n    "]))),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.border})),ee=function(n){var e=n.quiz,t=n.userObj,c=n.doc_user_id,i=n.showAnswer,a=n.isBlocked,o=t.isAdmin,l=t.available,b=t.uid,j=e.no,f=e.answer,p=e.candidates,h=Object(r.useState)(null),x=Object(u.a)(h,2),m=x[0],O=x[1],g=function(){var n=Object(d.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o||!i){n.next=2;break}return n.abrupt("return");case 2:O(e),v(e);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=Object(d.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,xn.collection("users").doc(c).update(Object(Xn.a)({},"quiz_"+j,e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){xn.collection("users").where("uid","==",b).get().then((function(n){O(n.docs[0].data()["quiz_".concat(e.no)]),console.log(n.docs[0].data()["quiz_".concat(e.no)])}))}),[e.no]),Zn((function(){!0===l&&Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i){n.next=2;break}return n.abrupt("return");case 2:if(m!==f){n.next=5;break}return setTimeout((function(){return alert("\uc815\ub2f5\uc785\ub2c8\ub2e4!!")}),1e3),n.abrupt("return");case 5:setTimeout((function(){return alert("\uc815\ub2f5\uc744 \ub9de\ucd94\uc9c0 \ubabb\ud558\uc168\uc2b5\ub2c8\ub2e4\u3160\u3160 \ub2e4\uc74c \ubb38\uc81c\ubd80\ud130\ub294 \uad00\uc804\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.")}),1e3);case 6:case"end":return n.stop()}}),n)})))()}),[i]),Object(Sn.jsxs)(ne,{children:[Object(Sn.jsx)($n,{onClick:function(){return g(1)},no:1,text:p[0],isSelected:1===m,isAnswer:1===f&&i,disabled:!l||i||!o&&a}),Object(Sn.jsx)($n,{onClick:function(){return g(2)},text:p[1],isSelected:2===m,isAnswer:2===f&&i,disabled:!l||i||!o&&a}),Object(Sn.jsx)($n,{onClick:function(){return g(3)},no:3,text:p[2],isSelected:3===m,isAnswer:3===f&&i,disabled:!l||i||!o&&a})]})},te=function(n,e,t,r){return{no:n,question:e,answer:t,candidates:r}},re=[te(1,"\uc608\uc218\ub2d8\uc740 \uace8\uace0\ub2e4 \uc5b8\ub355\uc5d0\uc11c \uc2ed\uc790\uac00\uc5d0 \ubabb \ubc15\ud600 \ub3cc\uc544\uac00\uc168\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c \u2018\uace8\uace0\ub2e4\u2019\uc758 \uc758\ubbf8\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694?",2,["\uc8fd\uc74c","\ud574\uace8\uc758 \uacf3","\uc9c0\uc625"]),te(2,"\ub2e4\uc74c \uc911 \ubd80\ud65c\uc808\uc758 \u201c\ubd80\u201d\ub85c \uc633\uc740 \uac83\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",1,["\ub2e4\uc2dc \ubd80(\u5fa9)","\ub730 \ubd80(\u6d6e)","\ubbf8\uc060 \ubd80(\u5b5a)"]),te(3,"\uc608\uc218\ub2d8\uc740 3\uc77c \ub9cc\uc5d0 \ubd80\ud65c\ud558\uc2e0 \ud6c4 \uc5ec\ub7ec \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc790\uc2e0\uc758 \ubaa8\uc2b5\uc744 \ubcf4\uc774\uc168\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc608\uc218\ub2d8\uc758 \ubd80\ud65c\uc744 \uac00\uc7a5 \ucc98\uc74c \ubaa9\uaca9\ud55c \uc778\ubb3c\uc740 \ub204\uad6c\uc77c\uae4c\uc694?",2,["\ubca0\ub4dc\ub85c","\ub9c9\ub2ec\ub77c \ub9c8\ub9ac\uc544","\uc694\ud55c"]),te(4,"\ub3c4\ub9c8\ub294 \ubd80\ud65c\ud558\uc2e0 \uc608\uc218\ub2d8\uc744 \uc758\uc2ec\ud558\uba70 \uc0c1\ucc98 \uc790\uad6d\uc744 \ubd10\uc57c \ubbff\uaca0\ub2e4\uace0 \ud588\uc2b5\ub2c8\ub2e4. \ub3c4\ub9c8\uac00 \ubcf4\uace0\uc790\ud55c \uc608\uc218\ub2d8\uc758 \uc0c1\ucc98 \uc790\uad6d\uc774 \uc544\ub2cc \uacf3\uc740 \uc5b4\ub514\uc77c\uae4c\uc694?",1,["\ubc1c","\uc190","\uc606\uad6c\ub9ac"]),te(5,"\ubd80\ud65c\uc808\uc740 \uc601\uc5b4\ub85c \u2018Easter\u2019 \uc785\ub2c8\ub2e4. Easter\uc758 \uc5b4\uc6d0\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",3,["Eous(\uc0c8\ubcbd\uc758)","Eurus(\ubc14\ub78c)","Eostre(\ubd04\uc758 \uc5ec\uc2e0)"]),te(6,"\ubd80\ud65c \ud6c4\uc5d0 \uc608\uc218\ub2d8\uc740 \uc5e0\ub9c8\uc624\ub77c\ub294 \ub9c8\uc744\ub85c \uac00\ub294 \ub450 \uc81c\uc790\uc640 \ub3d9\ud589\ud558\uc2ed\ub2c8\ub2e4. \uc774\ub54c \ub450 \uc81c\uc790 \uc911 \ud55c\uba85\uc758 \uc774\ub984\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",3,["\ub9db\ub514\uc544","\ub2e4\ub300\uc624","\uae00\ub85c\ubc14"]),te(7,"\uc9c0\ub09c\uc8fc \uc885\ub824\uc8fc\uc77c\uc5d0 \ub4dc\ub9b0 \ub300\ud559\ubd80 \ud14c\ub124\ube0c\ub808 \uc608\ubc30\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",2,["\ud14c\ub124\ube0c\ub808\ub294 \uc601\uc5b4\ub85c tenebre\uc774\ub2e4.","\ud0c1\ud604\uc218 \ubaa9\uc0ac\ub2d8\uc758 \uc124\uad50 \uc81c\ubaa9\uc740 '\ubca0\ub4dc\ub85c\ub97c \ubcf4\uc2dc\ub2c8' \uc774\uc5c8\ub2e4. ","\ub0a8\uc0b0 \uc0b0\ucc45\uc5d0\uc11c \ubc1b\uc740 \ub9d0\uc500\uce74\ub4dc\ub294 \ub204\uac00\ubcf5\uc74c 10\uc7a5 45\uc808\uc774\ub2e4."]),te(8,"\ubd80\ud65c\uc808\uc740 \uacfc\uac70 325\ub144 \ub2c8\ucf00\uc544 \uacf5\uc758\ud68c\uc5d0\uc11c \uc11c\ubc29\uad50\ud68c\ub4e4\uc758 \uae30\uc900\uc744 \ub530\ub77c \uc815\ud574\uc84c\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc815\ud574\uc9c4 \ubd80\ud65c\uc808\uc758 \uae30\uc900\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694? ",1,["\ucd98\ubd84 \ub2e4\uc74c \ubcf4\ub984\ub2ec \uc774\ud6c4\uc758 \uccab \uc8fc\uc77c","\uc591\ub825 4\uc6d4\uc758 \uccab \ubc88\uc9f8 \uc8fc\uc77c","\uc74c\ub825 3\uc6d4\uc758 \uccab \ubc88\uc9f8 \uc8fc\uc77c"]),te(9,"\ud3f4\ub780\ub4dc\uc5d0\uc11c\ub294 \ubd80\ud65c\uc808 \ub2e4\uc74c \uc6d4\uc694\uc77c\uc5d0 \ud568\uaed8 \u2018\uc774\uac83\u2019\uc744 \ud558\uba70 \uc11c\ub85c\uc758 \uac74\uac15\uacfc \uc548\uc804\uc744 \uae30\uc6d0\ud569\ub2c8\ub2e4. \u2018\uc774\uac83\u2019\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",3,["\ub098\ubb47\uac00\uc9c0 \uc539\uae30","\ub545\uc5d0 \ub2ec\uac40 \uaecd\uc9c8 \ubb3b\uae30","\ubb3c \ubfcc\ub9ac\uae30"]),te(10,"Re VS 100\uc758 \uc9c4\ud589\uc790\uc778 \uc548\ud0dc\ud638 \ubc97\ub2d8\uc740 1997\ub144\uc0dd(\ube60\ub978)\uc785\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 1997\ub144\ub3c4\uc758 \ubd80\ud65c\uc808\uc740 \uc5b8\uc81c\uc600\uc744\uae4c\uc694?",1,["1997\ub144 3\uc6d4 30\uc77c","1997\ub144 4\uc6d4 7\uc77c","1997\ub144 4\uc6d4 15\uc77c "])],ce=l.d.div(Q||(Q=Object(mn.a)(["\n    max-width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    color: ",";\n    border: 5px solid ",";\n    border-bottom: none;\n    border-radius: 5px;\n    font-size: 2rem;\n    font-weight: bolder;\n    letter-spacing: 1.5px;\n    line-height: 50px;\n    padding: 20px;\n    ","\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.border}),kn.tablet(D||(D=Object(mn.a)(["\n      font-size: 1.5rem;\n      line-height: 40px;\n      word-break: break-all;\n      padding: 10px;\n  "])))),ie=function(n){var e=n.quiz,t=e.no,r=e.question;return Object(Sn.jsx)(ce,{children:"Q"+t+". "+r})},ae=l.d.div(L||(L=Object(mn.a)(["\n\tz-index: 10;\n\tdisplay: ",";\n    justify-content: center;\n    align-items: center;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth:100vw;\n\tbackground: rgba(0,0,0,0.5);\n"])),(function(n){return n.show?"flex":"none"})),oe=Object(l.d)(zn)(F||(F=Object(mn.a)(["\n    background-color: #eee;\n    box-shadow: 0px 2px 6px grey;\n    border-radius: 10px;\n    padding: 10px;\n    width: 450px;\n    height: 300px;\n"]))),se=l.d.div(M||(M=Object(mn.a)(["\n    display: grid;\n    grid-template-columns: 60px 270px 80px;\n    grid-template-rows: repeat(3, 50px);\n"]))),de=l.d.div(W||(W=Object(mn.a)(["\n    height: 15px;\n    width: ",";\n    background-color: ",";\n"])),(function(n){return 1+n.perc+"%"}),(function(n){return n.color})),ue=function(n){var e=n.visible,t=n.toggle,r=n.participants,c=Object(u.a)(r,3),i=c[0],a=c[1],o=c[2],s=(i+a+o)/100;return Object(Sn.jsx)(ae,{show:e,onClick:t,children:Object(Sn.jsx)(oe,{children:Object(Sn.jsxs)(se,{children:[Object(Sn.jsx)(zn,{children:"1\ubc88"}),Object(Sn.jsx)(zn,{left:!0,children:Object(Sn.jsx)(de,{perc:i/s,color:"#cf0c0c"})}),Object(Sn.jsxs)(zn,{children:[i,"\uba85"]}),Object(Sn.jsx)(zn,{children:"2\ubc88"}),Object(Sn.jsx)(zn,{left:!0,children:Object(Sn.jsx)(de,{perc:a/s,color:"#20d6a0"})}),Object(Sn.jsxs)(zn,{children:[a,"\uba85"]}),Object(Sn.jsx)(zn,{children:"3\ubc88"}),Object(Sn.jsx)(zn,{left:!0,children:Object(Sn.jsx)(de,{perc:o/s,color:"#245cbb"})}),Object(Sn.jsxs)(zn,{children:[o,"\uba85"]})]})})})},le=t(40),be=t.n(le),je=l.d.div(H||(H=Object(mn.a)(["\n    width: 100%;\n    font-size: 20px;\n    color: #ddd;\n    @media(max-width:480px){\n        height: 50px;\n        max-width: 100px;\n        font-size: 20px;\n    }\n    @media(min-width:480px){\n        height: 60px;\n        max-width: 120px;\n        font-size: 26px;\n    }\n    @media(min-width:1080px){\n        height: 90px;\n        max-width: 180px;\n        font-size: 32px;\n    }\n"]))),fe=l.d.div(R||(R=Object(mn.a)(["\n    width: 100%;\n    height: 0;\n    padding-bottom: 50%;\n    background: #b6d5f8;\n    position: relative;\n    border-top-left-radius: 100% 200%;\n    border-top-right-radius: 100% 200%;\n    overflow: hidden;\n"]))),pe=l.d.div(V||(V=Object(mn.a)(["\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: inherit;\n    height: 100%;\n    transform-origin: center top;\n    transform: rotate(0.25turn);\n    transition: transform 0.2s ease-out;\n    background-color: ",";\n    transform: rotate( ","turn);\n"])),(function(n){var e=n.offset;return"#"+be()(e,e,255)}),(function(n){return n.perc/2})),he=l.d.div(J||(J=Object(mn.a)(["\n    width: 75%;\n    height: 150%;\n    background-color: #152764;\n    border-radius: 50%;\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    transform: translateX(-50%);\n\n    /* Text */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 25%;\n    box-sizing: border-box;\n    font-weight: bolder;\n"]))),xe=function(n){var e=n.seconds,t=e/60,c=Object(r.useState)(1),i=Object(u.a)(c,2),a=i[0],o=i[1];return Object(r.useEffect)((function(){o(parseInt(t>1?1:t<0?0:55+192*(1-t)))}),[e]),Object(Sn.jsx)(je,{children:Object(Sn.jsxs)(fe,{children:[Object(Sn.jsx)(pe,{offset:a,perc:t}),Object(Sn.jsx)(he,{children:e})]})})},me=t(19),Oe=t(20),ge=l.d.div(P||(P=Object(mn.a)(["\n  display: grid;\n  grid-template-rows: auto auto auto auto;\n  width: 100%;\n"]))),ve=l.d.div(G||(G=Object(mn.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  margin-bottom: 10px;\n  & > div:nth-child(2){\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: flex-end;\n    & > button {\n      margin: 0;\n    }\n  }\n"]))),we=l.d.div(K||(K=Object(mn.a)(["\n    display: grid;\n    grid-template-rows: 360px auto auto;\n    background-color: ",";\n    border-radius: 15px;\n    box-shadow: 10px 10px 20px black;\n    ","\n"])),(function(n){return n.theme.colors.border}),kn.tablet(N||(N=Object(mn.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: 300px;\n  "])))),ye=l.d.div(X||(X=Object(mn.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  & > button {\n    margin: 8px 4px;\n  }\n"]))),ke=l.d.div(Z||(Z=Object(mn.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  font-weight: bolder;\n  font-size: 2rem;\n  color: white;\n  margin-left: 20px;\n"]))),ze=function(n){var e=n.userObj,t=n.doc_user_id,c=n.currentInfo,i=c.currentQuiz,a=c.showAnswer,o=c.showHint,l=c.isBlocked,b=c.survived,j=c.startedTimestamp,f=(e.uid,e.isAdmin),p=re[i],h=Object(r.useState)([0,0,0]),x=Object(u.a)(h,2),m=x[0],O=x[1],g=Object(r.useState)(0),v=Object(u.a)(g,2),w=v[0],y=v[1],k=Object(r.useState)(60),z=Object(u.a)(k,2),S=z[0],A=z[1],_=Object(r.useState)(!1),q=Object(u.a)(_,2),E=q[0],I=q[1],C=function(){return I((function(n){return!n}))};Object(r.useEffect)((function(){xn.collection("users").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()})).map((function(n){return n.available}));y(e.filter((function(n){return n})).length)}))}),[i]);var B=function(){var n=Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(i<=0)){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,xn.collection("current").doc("current").update({currentQuiz:i-1,showAnswer:!1,isBlocked:!1,startedTimestamp:(new Date).getTime()});case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=function(){var n=Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return C(),n.next=3,xn.collection("current").doc("current").update({showHint:!0});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,xn.collection("current").doc("current").update({isBlocked:!0,startedTimestamp:0});case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),D=function(){var n=Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:xn.collection("current").doc("current").update({showAnswer:!0}),(e=xn.collection("users")).where("quiz_".concat(p.no),"!=",p.answer).get().then((function(n){if(0===m[p.answer-1])throw new Error("AllFailed");var t=xn.batch();n.docs.forEach((function(n){var r=e.doc(n.data().uid);t.update(r,{available:!1})})),t.commit()})).catch((function(n){"AllFailed"===n.message&&setTimeout((function(){return alert("\ubaa8\ub4e0 \ucc38\uc5ec\uc790\uac00 \ud0c8\ub77d\ud558\uc600\uc73c\ubbc0\ub85c \ub2e4\uc74c \ub77c\uc6b4\ub4dc\uc5d0\uc11c \ubaa8\ub450 \uc7ac\ub3c4\uc804\ud569\ub2c8\ub2e4.")}),3e3),console.log("Error getting document:",n)}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){xn.collection("users").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()})).map((function(n){return n["quiz_"+p.no]}));O([e.filter((function(n){return 1===n})).length,e.filter((function(n){return 2===n})).length,e.filter((function(n){return 3===n})).length])}))}),[i]),Object(r.useEffect)((function(){var n=setInterval((function(){var e=(new Date).getTime(),t=parseInt((e-j)/1e3);A(t>61?0:61-t),t>=61&&clearInterval(n)}),1e3);return function(){return clearInterval(n)}}),[j]),Object(Sn.jsxs)(ge,{children:[Object(Sn.jsxs)(ve,{children:[Object(Sn.jsx)(xe,{seconds:S}),Object(Sn.jsxs)("div",{children:[f&&!o&&Object(Sn.jsx)(Qn,{onClick:T,disabled:o,children:"\ubc97\ub2d8\ub4e4 \ucc2c\uc2a4"}),Object(Sn.jsxs)(ke,{children:[Object(Sn.jsx)(me.a,{icon:Oe.c})," \xa0",b]})]})]}),Object(Sn.jsxs)(we,{children:[Object(Sn.jsx)(ie,{quiz:p}),Object(Sn.jsx)(ee,{quiz:p,userObj:e,doc_user_id:t,showAnswer:a,isBlocked:l})]}),f&&Object(Sn.jsxs)(ye,{children:[Object(Sn.jsx)(Qn,{color:"secondary",onClick:B,children:" \uc774\uc804 "}),l?a?Object(Sn.jsx)(Qn,{onClick:function(){i===re.length-1||w<=5?(xn.collection("current").doc("current").update({isDone:!0}),A(0)):xn.collection("users").where("quiz_".concat(p.no),"==",p.answer).get().then((function(n){return n.docs.length})).then((function(n){xn.collection("current").doc("current").update({currentQuiz:i+1,showAnswer:!1,isBlocked:!1,survived:n,startedTimestamp:(new Date).getTime()})}))},children:" \ub2e4\uc74c "}):Object(Sn.jsx)(Qn,{onClick:D,children:" \uc815\ub2f5 \uacf5\uac1c "}):Object(Sn.jsx)(Qn,{color:"secondary",onClick:Q,children:" \uc2dc\uac04 \uc885\ub8cc "})]}),Object(Sn.jsx)(Nn,{showAnswer:a,quiz:p,survived:b,currentInfo:c,userObj:e}),Object(Sn.jsx)(ue,{visible:E,toggle:C,participants:m,currentQuiz:i})]})},Se=l.d.button(U||(U=Object(mn.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    margin: 0.5rem 20rem;\n    width: ",";\n    font-weight: ",";\n    font-size: ",";\n    ","\n"])),(function(n){return n.fullWidth?"100%":"8rem"}),(function(n){return n.bold?"bold":"normal"}),(function(n){var e=n.fontSize;return e?e+"px":"1rem"}),(function(n){var e=n.color,t=n.theme.colors,r=n.disabled,c="secondary"===e?t.secondary:t.primary;return"\n            background: ".concat(r?c.disabled:c.main,";\n            color: ").concat(c.text,";\n            border: ").concat(c.border," solid thin;\n            ").concat(!r&&"\n                &:hover {\n                    background: ".concat("text"===e?"transparent":c.accent,";\n                    outline: none;\n                }\n            "),"\n        ")})),Ae=l.d.div(Y||(Y=Object(mn.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 2em;\n    font-weight: bolder;\n    text-align: center;\n    align-items: center;\n    letter-spacing: 1.5px;\n    color: #dbe2fd;\n"]))),_e=l.d.div($||($=Object(mn.a)(["\n    width: 100%;\n"]))),qe=function(n){var e=n.userObj,t=Object(r.useState)([]),c=Object(u.a)(t,2),i=c[0],a=c[1],o=e.isAdmin,s=Object(Tn.f)();Object(r.useEffect)((function(){xn.collection("users").get().then((function(n){var e=n.docs.map((function(n){return n.data()})).filter((function(n){return n.available}));return a(e),e})).then((function(n){var e=n.map((function(n){return{name:n.name,alias:n.alias,number:n.number}}));xn.collection("current").doc("survivor").set({survivor:e})}))}),[]);return Object(Sn.jsxs)(Ae,{children:[Object(Sn.jsxs)("p",{children:[Object(Sn.jsx)(me.a,{icon:Oe.a}),"  \ucd5c\ud6c4\uc758 ",i.length,"\uc778  ",Object(Sn.jsx)(me.a,{icon:Oe.a})]}),i.map((function(n,e){return Object(Sn.jsx)(_e,{children:"["+n.alias+"]"},e)})),Object(Sn.jsx)("p",{children:"\ubb38\uc790\uac00 \ubc1c\uc1a1\ub420 \uc608\uc815\uc774\ub2c8 \uaf2d \ud655\uc778\ud574\uc8fc\uc138\uc694!"}),o&&Object(Sn.jsx)(Se,{onClick:function(){return s.push("draw")},children:" \ucd94\ucca8 \ud558\ub7ec \uac00\uae30 "})]})},Ee=t.p+"static/media/frame.4a975f16.png",Ie=l.d.div(nn||(nn=Object(mn.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  text-align: left;\n  ","\n"])),kn.tablet(en||(en=Object(mn.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: auto auto;\n  "])))),Ce=l.d.div(tn||(tn=Object(mn.a)(["\n  margin: 30px;\n  color: white;\n  ","\n"])),kn.tablet(rn||(rn=Object(mn.a)(["\n    margin: 5px;\n  "])))),Be=l.d.div(cn||(cn=Object(mn.a)(["\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  font-size: large;  \n  ","\n"])),kn.tablet(an||(an=Object(mn.a)(["\n    font-size: medium;\n    background: linear-gradient(to bottom, #fce4ec, #e3f2fd);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    line-height: 1.5em;\n"])))),Te=l.d.ol(on||(on=Object(mn.a)(["\n  padding-inline-start: 18px;\n"]))),Qe=l.d.ul(sn||(sn=Object(mn.a)(["\n  padding-inline-start: 18px;\n  list-style-type: '\ud83d\ude4f\ud83c\udffb';\n"]))),De=l.d.div(dn||(dn=Object(mn.a)(["\n  float: right;\n  font-weight: bolder;\n  font-size: 2rem;\n"]))),Le=l.d.img(un||(un=Object(mn.a)(["\n  width: 100%;\n  height: 100%;\n"]))),Fe=function(n){var e=n.isAdmin,t=Object(r.useState)(0),c=Object(u.a)(t,2),i=c[0],a=c[1];return xn.collection("users").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()})).length;a(e)})),Object(Sn.jsxs)(Ie,{children:[Object(Sn.jsxs)("div",{children:[Object(Sn.jsxs)(Ce,{children:[Object(Sn.jsxs)(De,{children:[Object(Sn.jsx)(me.a,{icon:Oe.c})," \xa0",i]}),Object(Sn.jsx)("h1",{children:"Rules"}),Object(Sn.jsx)(Be,{children:Object(Sn.jsxs)(Te,{children:[Object(Sn.jsx)("li",{children:"3\uac1c\uc758 \ubcf4\uae30 \uc911 \uc815\ub2f5\uc744 \uace0\ub985\ub2c8\ub2e4. "}),Object(Sn.jsx)("li",{children:"100\uc778\uc774 \uba3c\uc800 \ubb38\uc81c\ub97c \ub2e4 \ud47c \ud6c4, \uac8c\uc2a4\ud2b8 2\uc778\uc774 \ubb38\uc81c\ub97c \ud489\ub2c8\ub2e4. "}),Object(Sn.jsx)("li",{children:"\uac01 \ubb38\uc81c \ub2f9 1\ubd84\uc758 \uc2dc\uac04\uc81c\ud55c\uc774 \uc788\uc2b5\ub2c8\ub2e4. "}),Object(Sn.jsx)("li",{children:"\uac01 \ub2e8\uacc4\uc758 \uc815\ub2f5\uc790\ub9cc \ub2e4\uc74c \ub2e8\uacc4\ub85c \ub118\uc5b4\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "}),Object(Sn.jsx)("li",{children:"\ucd5c\ud6c4\uc758 5\uc778\uc774 \ub0a8\uc744 \ub54c\uae4c\uc9c0 \ud034\uc988\uac00 \uc9c4\ud589\ub429\ub2c8\ub2e4. "}),Object(Sn.jsx)("li",{children:"\uc911\uac04 \ucc38\uc5ec\ub294 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4."}),Object(Sn.jsx)("li",{children:"\uac8c\uc2a4\ud2b8 2\uba85\uc740 \ud568\uaed8 2\ubc88\uc758 \ucc2c\uc2a4\ub97c \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "}),Object(Sn.jsxs)(Qe,{children:[Object(Sn.jsx)("li",{children:"\ud55c\ubc97\ub2d8 \ucc2c\uc2a4 : \uc6d0\ud558\ub294 \ud55c \uba85\uc758 \ub2f5\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. "}),Object(Sn.jsx)("li",{children:"\ubc97\ub2d8\ub4e4 \ucc2c\uc2a4 : \ubaa8\ub4e0 \ubc97\ub2d8\uc774 \uc120\ud0dd\ud55c \ub2f5\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})})]}),e&&Object(Sn.jsx)(zn,{children:Object(Sn.jsx)(Qn,{onClick:function(){var n=xn.collection("users");n.get().then((function(e){var t=xn.batch();e.docs.forEach((function(e){var r=n.doc(e.data().uid);t.update(r,{available:!0})})),t.commit()})).catch((function(n){console.log("Error getting document:",n)})),xn.collection("current").doc("current").update({toQuiz:!0,part:i,survived:i,showAnswer:!1,isBlocked:!1,showHint:!1,currentQuiz:0,isDone:!1,startedTimestamp:(new Date).getTime()})},children:" \ud034\uc988 \uc2dc\uc791\ud558\uae30"})})]}),e&&Object(Sn.jsx)(Le,{src:Ee})]})},Me=l.d.div(ln||(ln=Object(mn.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 2em;\n    font-weight: bolder;\n    text-align: center;\n    align-items: center;\n    letter-spacing: 1.5px;\n    line-height: 1.8em;\n    color: white;\n    ","\n    ","\n"])),kn.tablet(bn||(bn=Object(mn.a)(["\n      font-size: 1.5em;\n    "]))),kn.phone(jn||(jn=Object(mn.a)(["\n      font-size: 1em;\n    "])))),We=l.d.div(fn||(fn=Object(mn.a)(["\n    font-style: italic;\n"]))),He=function(){var n=Object(r.useState)([]),e=Object(u.a)(n,2),t=e[0],c=e[1];return Object(r.useEffect)((function(){xn.collection("users").get().then((function(n){var e=n.docs.map((function(n){return n.data()})).filter((function(n){return!n.isAdmin&&!n.available}));return c(function(n){for(var e=n.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=[n[t],n[e]];n[e]=r[0],n[t]=r[1]}return n}(e).slice(0,8)),e})).then((function(n){var e=n.map((function(n){return{name:n.name,alias:n.alias,number:n.number}}));xn.collection("current").doc("drawn").set({drawn:e})}))}),[]),Object(Sn.jsxs)(Me,{children:[Object(Sn.jsxs)("div",{children:["\ub2f9\ucca8 \ucd95\ud558\ub4dc\ub9bd\ub2c8\ub2e4!!!",Object(Sn.jsx)("br",{}),"\ubb38\uc790\uac00 \ubc1c\uc1a1\ub420 \uc608\uc815\uc774\ub2c8 \uaf2d \ud655\uc778\ud574\uc8fc\uc138\uc694 :)"]}),Object(Sn.jsxs)("div",{children:[Object(Sn.jsx)("br",{}),Object(Sn.jsx)(me.a,{icon:Oe.b}),"  \ucd94\ucca8\uc790 \uba85\ub2e8  ",Object(Sn.jsx)(me.a,{icon:Oe.b})]}),Object(Sn.jsx)(We,{children:t.map((function(n){return n.alias})).join(", ")}),Object(Sn.jsx)("br",{}),Object(Sn.jsx)("br",{}),Object(Sn.jsx)("div",{children:"\ubaa8\ub4e0 \ud034\uc988 \uc21c\uc11c\uac00 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4!"})]})},Re=function(n){var e=n.isLoggedIn,t=n.userObj,r=n.hasAccount,c=n.doc_user_id,i=n.currentInfo,a=i.toQuiz,o=i.isDone;return Object(Sn.jsx)(Bn.a,{children:Object(Sn.jsx)(Tn.c,{children:e?r?Object(Sn.jsx)(Sn.Fragment,{children:a?Object(Sn.jsx)(Sn.Fragment,{children:o?Object(Sn.jsxs)(Sn.Fragment,{children:[Object(Sn.jsx)(Tn.a,{exact:!0,path:"/",children:Object(Sn.jsx)(qe,{userObj:t,currentInfo:i})}),(null===t||void 0===t?void 0:t.isAdmin)&&Object(Sn.jsx)(Tn.a,{exact:!0,path:"/draw",children:Object(Sn.jsx)(He,{userObj:t})})]}):Object(Sn.jsx)(Tn.a,{exact:!0,path:"/",children:Object(Sn.jsx)(ze,{userObj:t,doc_user_id:c,currentInfo:i})})}):Object(Sn.jsx)(Tn.a,{exact:!0,path:"/",children:Object(Sn.jsx)(Fe,{isAdmin:t.isAdmin})})}):Object(Sn.jsx)(Tn.a,{exact:!0,path:"/",children:Object(Sn.jsx)(Hn,{userObj:t,currentInfo:i})}):Object(Sn.jsx)(Tn.a,{exact:!0,path:"/",children:Object(Sn.jsx)(Gn,{currentInfo:i})})})})};var Ve=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(null),a=Object(u.a)(i,2),o=a[0],b=a[1],j=Object(r.useState)(!1),f=Object(u.a)(j,2),p=f[0],h=f[1],x=Object(r.useState)(""),m=Object(u.a)(x,2),O=m[0],g=m[1],v=Object(r.useState)({currentQuiz:0,showAnswer:!1,showHint:!1,toQuiz:!1,isDone:!1,isDraw:!1}),w=Object(u.a)(v,2),y=w[0],k=w[1];return Object(r.useEffect)((function(){hn.onAuthStateChanged(function(){var n=Object(d.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=8;break}return n.next=3,xn.collection("users").where("uid","==",e.uid).get();case 3:t=n.sent,h(Boolean(t.docs.length));try{b(t.docs[0].data()),g(t.docs[0].id)}catch(r){b(e)}n.next=9;break;case 8:b(null);case 9:c(!0);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),xn.collection("current").doc("current").onSnapshot((function(n){k(n.data())}))}),[]),Object(r.useEffect)((function(){O&&xn.collection("users").doc(O).onSnapshot((function(n){b(n.data())}))}),[O]),Object(Sn.jsx)(l.a,{theme:Cn,children:Object(Sn.jsx)(qn,{children:t?Object(Sn.jsx)(Re,{isLoggedIn:Boolean(o),userObj:o,hasAccount:p,doc_user_id:O,currentInfo:y}):Object(Sn.jsx)("div",{children:'"Initializing..."'})})})};a.a.render(Object(Sn.jsx)(c.a.StrictMode,{children:Object(Sn.jsx)(Ve,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.2ece5f0d.chunk.js.map