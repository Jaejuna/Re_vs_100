(this.webpackJsonpre_vs_100=this.webpackJsonpre_vs_100||[]).push([[0],{66:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t.n(r),i=t(36),a=t.n(i),o=t(9),s=t.n(o),d=t(14),u=t(7),l=t(4),b=t(24);t(47),t(67),t(68);b.a.initializeApp({apiKey:"AIzaSyCNEEZVWLepSVn_ennOWsbwjL8E2wqnbpQ",authDomain:"re-vs-100-8ec8b.firebaseapp.com",projectId:"re-vs-100-8ec8b",storageBucket:"re-vs-100-8ec8b.appspot.com",messagingSenderId:"400681423336",appId:"1:400681423336:web:13667d56d28179863d545d"});var j,f,p,x,h,m,O,g,w,v,y,k,z,S,A,_,E,q,I,C,D,T,B,Q,L,F,M,W,H,R,V,J,P,G,K,N,X,Z,U,Y,$,nn,en,tn,rn,cn,an,on,sn,dn,un=b.a,ln=b.a.auth(),bn=b.a.firestore(),jn=(b.a.storage(),t(3)),fn=(t.p,t.p+"static/media/SamlipOutline.cb892823.ttf"),pn=t.p+"static/media/SamlipBasic.d6a7dad8.ttf",xn=Object(l.b)(j||(j=Object(jn.a)(["\n    @font-face {\n        font-family: \"SamOut\";\n        src: local('SamOut'), local('SamBasic')\n        url(",") format('woff'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),fn,pn),hn=t.p+"static/media/backgroundMobile.619b31bf.jpg",mn={giant:1920,huge:1440,bigDesktop:1200,desktop:1e3,tablet:768,thone:600,phablet:480,phone:376,tiny:330},On=Object.keys(mn).reduce((function(n,e){var t=mn[e]/16;return n[e]=function(n){return Object(l.c)(f||(f=Object(jn.a)(["\n      @media (max-width: ","em) {\n        ","\n      }\n    "])),t,Object(l.c)(n))},n}),{}),gn=l.d.div(p||(p=Object(jn.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n"])),(function(n){return n.left?"left":"center"})),wn=t(1),vn=l.d.div(x||(x=Object(jn.a)(["\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    /* background-color: ","; */\n    //\uc6d0\ub798 \ubc31\uadf8\ub77c\uc6b4 \uceec\ub7ec\n    //background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n    // background: radial-gradient(farthest-corner at 800px 300px, #f4f4f4, #363636 65%);\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin: 0;\n"])),(function(n){return n.theme.colors.main}),hn),yn=Object(l.d)(gn)(h||(h=Object(jn.a)(["\n    width:min(1470px, calc(100% - 30px));\n    padding: 20px 0 40px 0;\n    margin: 0;\n"]))),kn=function(n){var e=n.children;return Object(wn.jsxs)(vn,{children:[Object(wn.jsx)(xn,{}),Object(wn.jsx)(yn,{children:e})]})},zn=function(n){return"".concat(n/16,"rem")},Sn={mobileS:320,mobileM:375,mobileL:450,tablet:768,tabletL:1024},An={fontSizes:{small:zn(14),base:zn(16),lg:zn(18),xl:zn(20),xxl:zn(22),xxxl:zn(24),titleSize:zn(50)},colors:{main:"#365387",text:"#ddd",border:"#494949",selected:"#cc76c2",answer:"#b8cbff",answerBorder:"#eac2efc",answerText:"#4b3297",primary:{main:"#01579b",text:"#fff",border:"rgba(0, 0, 0, 0.5)",accent:"#666ad1",disabled:"#6f74dd"},secondary:{main:"#464646",text:"rgba(255,255,255,0.85)",border:"rgba(255,255,255,0.15)",accent:"#5f5f5f",disabled:"#4A4A4A"}},deviceSizes:Sn,device:{mobileS:"only screen and (max-width: ".concat(Sn.mobileS,"px)"),mobileM:"only screen and (max-width: ".concat(Sn.mobileM,"px)"),mobileL:"only screen and (max-width: ".concat(Sn.mobileL,"px)"),tablet:"only screen and (max-width: ".concat(Sn.tablet,"px)"),tabletL:"only screen and (max-width: ".concat(Sn.tabletL,"px)")}},_n=t(41),En=t(10),qn=l.d.button(m||(m=Object(jn.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    margin: 0.5rem 1rem;\n    width: ",";\n    font-weight: ",";\n    font-size: ",";\n    outline: none;\n    ","\n"])),(function(n){return n.fullWidth?"100%":"8rem"}),(function(n){return n.bold?"bold":"normal"}),(function(n){var e=n.fontSize;return e?e+"px":"1rem"}),(function(n){var e=n.color,t=n.theme.colors,r=n.disabled,c="secondary"===e?t.secondary:t.primary;return"\n            background: ".concat(r?c.disabled:c.main,";\n            color: ").concat(c.text,";\n            border: ").concat(c.border," solid thin;\n            ").concat(!r&&"\n                &:hover {\n                    background: ".concat("text"===e?"transparent":c.accent,";\n                    outline: none;\n                }\n            "),"\n        ")})),In=l.d.input(O||(O=Object(jn.a)(["\n    font-size: 18px;\n    padding: 10px;\n    border: none;\n    border-radius: 6px;\n    outline: none;\n    border-bottom: 2px solid ",";\n    background: rgba( 255, 255, 255, 0.20 );\n    box-shadow: 0 8px 40px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 10.5px );\n    -webkit-backdrop-filter: blur( 10.5px );\n    ::placeholder {\n        color: #dddddd;\n    }\n    :focus {\n        border-bottom: 4px solid ",";\n    }\n\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.selected})),Cn=t.p+"static/media/challenger.03e4f276.png",Dn=l.d.div(g||(g=Object(jn.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-items: center;\n"]))),Tn=l.d.div(w||(w=Object(jn.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    align-items: center;\n    flex-direction: row;\n    margin-bottom: 100px;\n    \n    & > button {\n      margin: 0;\n    }\n    & > *:nth-child(n+2){\n      margin-left: 15px;\n      margin-top: 0;\n    }\n    ","\n"])),On.tablet(v||(v=Object(jn.a)(["\n      flex-direction: column;\n        & > input {\n          width: 80%;\n        }\n        & > *:nth-child(n+2){\n          margin-left: 0px;\n          margin-top: 15px;\n        }\n    "])))),Bn=l.d.img(y||(y=Object(jn.a)(["\n  width: 50%;\n  height: 100%;\n  ","\n"])),On.tablet(k||(k=Object(jn.a)(["\n  width: 100%;\n  height: auto;\n"])))),Qn=function(n){var e=n.userObj,t=n.currentInfo,c=Object(r.useState)(""),i=Object(u.a)(c,2),a=i[0],o=i[1],l=Object(r.useState)(""),b=Object(u.a)(l,2),j=b[0],f=b[1],p=Object(r.useState)(""),x=Object(u.a)(p,2),h=x[0],m=x[1],O=t.toQuiz,g=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?o(r):"alias"===t?f(r):"number"===t&&m(r)},w=function(){var n=Object(d.a)(s.a.mark((function n(t){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,bn.collection("users").doc(e.uid).set({uid:e.uid,name:a,alias:j,number:h,isAdmin:!1,available:!O,quiz_1:0,quiz_2:0,quiz_3:0,quiz_4:0,quiz_5:0,quiz_6:0,quiz_7:0,quiz_8:0});case 3:alert(O?"\ucc38\uad00\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.":"\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),window.location.reload(!1);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(wn.jsxs)(Dn,{children:[Object(wn.jsx)(Bn,{src:Cn}),Object(wn.jsx)("form",{onSubmit:w,children:Object(wn.jsxs)(Tn,{children:[Object(wn.jsx)(In,{name:"name",placeholder:"\uc774\ub984",required:!0,value:a,onChange:g}),Object(wn.jsx)(In,{name:"alias",placeholder:"\ub2c9\ub124\uc784",required:!0,value:j,onChange:g}),Object(wn.jsx)(In,{name:"number",type:"tel",placeholder:"ex) 01012345678",pattern:"[0-9]{11}",required:!0,value:h,onChange:g}),Object(wn.jsx)(qn,{type:"submit",onSubmit:w,children:"\uc785\uc7a5"})]})})]})},Ln=t.p+"static/media/quizLogo.740cf7c9.png",Fn=l.d.div(z||(z=Object(jn.a)(["\n  display: grid;\n  align-items: center;\n  grid-template-rows: repeat(2, 1fr);\n  text-align: center;\n  justify-items: center;\n  ","\n"])),On.tablet(S||(S=Object(jn.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: auto auto;\n  "])))),Mn=Object(l.d)(qn)(A||(A=Object(jn.a)(["\n  width: 300px;\n"]))),Wn=l.d.img(_||(_=Object(jn.a)(["\n  width: 100%;\n  height: 100%;\n  ","\n"])),On.tablet(E||(E=Object(jn.a)(["\n    width: 100%;\n    height: 180px;\n  "])))),Hn=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],c=(e[1],function(){var n=Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new un.auth.GoogleAuthProvider,n.next=3,ln.signInWithPopup(e);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}());return Object(wn.jsx)(wn.Fragment,{children:t?Object(wn.jsxs)(wn.Fragment,{children:[Object(wn.jsx)(Qn,{}),function(){window.location.reload(!1)}]}):Object(wn.jsxs)(Fn,{children:[Object(wn.jsx)(Wn,{src:Ln}),Object(wn.jsx)(Mn,{onClick:c,name:"google",children:"\uad6c\uae00 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778\ud558\uae30"})]})})},Rn=l.d.div(q||(q=Object(jn.a)(["\n    padding-top: 20px;\n    opacity: ",";\n    transition: opacity 0.6s linear;\n\n    min-width: 96%;\n    height: 50px;\n    display: flex;\n\n    // \uacf5\ud1b5\n    & > div{\n        box-shadow: 1px 0 4px black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    // Survived\n    & > div:first-child{\n        border-top-left-radius: 15px;\n        border-bottom-left-radius: 15px;\n        background-color: #ce93d8;\n        font-weight: bolder;\n        width: ",";\n        ","\n    }\n    // Failed\n    & > div:nth-child(2){\n        border-top-right-radius: 15px;\n        border-bottom-right-radius: 15px;\n        background-color: #f3e5f5;\n        width: ",";\n        ","\n    }\n"])),(function(n){return n.show?1:0}),(function(n){var e=n.survived;return"".concat(e,"%")}),(function(n){var e=n.survived;return e?100===e?"border-radius: 15px;":"display: flex;":"display: none;"}),(function(n){var e=n.survived;return"".concat(100-e,"%")}),(function(n){var e=n.survived;return 100===e?"display: none;":e?"display: flex;":"border-radius: 15px;"})),Vn=function(n){var e=n.showAnswer,t=n.quiz,c=n.participants,i=n.currentInfo,a=Object(r.useState)(0),o=Object(u.a)(a,2),s=o[0],d=o[1],l=Object(r.useState)(1),b=Object(u.a)(l,2),j=b[0],f=b[1],p=i.currentQuiz;return Object(r.useEffect)((function(){d(c[t.answer-1]),f(c.reduce((function(n,e){return n+e})))}),[p]),Object(wn.jsxs)(Rn,{show:e,survived:100*s/j,children:[Object(wn.jsxs)("div",{children:[" ","".concat(s,"\uba85 \uc0dd\uc874")]}),Object(wn.jsxs)("div",{children:[" ","".concat(j-s,"\uba85 \ud0c8\ub77d")]})]})},Jn=t(27),Pn=function(n,e){var t=Object(r.useRef)(!1);Object(r.useEffect)((function(){t.current?n():t.current=!0}),e)},Gn=t(32),Kn=l.d.button(I||(I=Object(jn.a)(['\n    /* font-family: ""; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    font-size: 1.6rem;\n    font-weight: bolder;\n    border-radius: 5px;\n    border: ',";;\n    color: white;\n    position: relative;\n    background-color: ",";\n    color: ",";\n    "," \n    text-decoration: none;\n    text-transform: uppercase;\n    transition: 0.5s all ease;\n    outline: none;\n"])),(function(n){var e=n.theme;return n.isAnswer?"5px solid ".concat(e.colors.answerBorder):"none"}),(function(n){var e=n.theme.colors,t=n.isSelected,r=n.isAnswer;return t?e.selected:r?e.answer:e.main}),(function(n){var e=n.theme,t=n.isAnswer,r=n.isSelected;return t?r?"#1a17bb":e.colors.answerText:e.colors.text}),(function(n){return n.isAnswer&&"opacity: 0.7"})),Nn=function(n){return Object(wn.jsx)(Kn,Object(Gn.a)(Object(Gn.a)({},n),{},{children:n.text}))},Xn=l.d.div(C||(C=Object(jn.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 100px;\n    ","\n    grid-gap: 5px;\n    background-color: ",";\n    border: 5px solid ",";\n    border-radius: 5px;\n"])),On.tablet(D||(D=Object(jn.a)(["\n        grid-template-columns: 100%;\n        grid-template-rows: repeat(3, 60px);\n    "]))),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.border})),Zn=function(n){var e=n.quiz,t=n.userObj,c=n.doc_user_id,i=n.showAnswer,a=n.isBlocked,o=t.isAdmin,l=t.available,b=e.no,j=e.answer,f=e.candidates,p=Object(r.useState)(null),x=Object(u.a)(p,2),h=x[0],m=x[1],O=function(){var n=Object(d.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o||!i){n.next=2;break}return n.abrupt("return");case 2:m(e),g(e);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=Object(d.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,bn.collection("users").doc(c).update(Object(Jn.a)({},"quiz_"+b,e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){m(null)}),[e.no]),Pn((function(){Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i){n.next=2;break}return n.abrupt("return");case 2:if(h!==j){n.next=5;break}return setTimeout((function(){return alert("\uc815\ub2f5\uc785\ub2c8\ub2e4!!")}),1e3),n.abrupt("return");case 5:setTimeout((function(){return alert("\uc815\ub2f5\uc744 \ub9de\ucd94\uc9c0 \ubabb\ud558\uc168\uc2b5\ub2c8\ub2e4\u3160\u3160 \ub2e4\uc74c \ubb38\uc81c\ubd80\ud130\ub294 \uad00\uc804\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.")}),1e3);case 6:case"end":return n.stop()}}),n)})))()}),[i]),Object(wn.jsxs)(Xn,{children:[Object(wn.jsx)(Nn,{onClick:function(){return O(1)},no:1,text:f[0],isSelected:1===h,isAnswer:1===j&&i,disabled:!l||i||!o&&a}),Object(wn.jsx)(Nn,{onClick:function(){return O(2)},text:f[1],isSelected:2===h,isAnswer:2===j&&i,disabled:!l||i||!o&&a}),Object(wn.jsx)(Nn,{onClick:function(){return O(3)},no:3,text:f[2],isSelected:3===h,isAnswer:3===j&&i,disabled:!l||i||!o&&a})]})},Un=function(n,e,t,r){return{no:n,question:e,answer:t,candidates:r}},Yn=[Un(1,"\uc608\uc218\ub2d8\uc740 \uace8\uace0\ub2e4 \uc5b8\ub355\uc5d0\uc11c \uc2ed\uc790\uac00\uc5d0 \ubabb \ubc15\ud600 \ub3cc\uc544\uac00\uc168\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c \u2018\uace8\uace0\ub2e4\u2019\uc758 \uc758\ubbf8\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694?",2,["\uc8fd\uc74c","\ud574\uace8\uc0b0","\uc9c0\uc625"]),Un(2,"\ub2e4\uc74c \uc911 \ubd80\ud65c\uc808\uc758 \u201c\ubd80\u201d\ub85c \uc633\uc740 \uac83\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",1,["\ub2e4\uc2dc \ubd80(\u5fa9)","\ub730 \ubd80(\u6d6e)","\ubbf8\uc060 \ubd80(\u5b5a)"]),Un(3,"\uc608\uc218\ub2d8\uc740 3\uc77c \ub9cc\uc5d0 \ubd80\ud65c\ud558\uc2e0 \ud6c4 \uc5ec\ub7ec \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc790\uc2e0\uc758 \ubaa8\uc2b5\uc744 \ubcf4\uc774\uc168\uc2b5\ub2c8\ub2e4.  \uc774\ub54c \uc608\uc218\ub2d8\uc758 \ubd80\ud65c\uc744 \uac00\uc7a5 \ucc98\uc74c \ubaa9\uaca9\ud55c \uc778\ubb3c\uc740 \ub204\uad6c\uc77c\uae4c\uc694?",2,["\ubc30\ub4dc\ub85c","\ub9c9\ub2ec\ub77c \ub9c8\ub9ac\uc544","\uc694\ud55c"]),Un(4," \ub3c4\ub9c8\ub294 \ubd80\ud65c\ud558\uc2e0 \uc608\uc218\ub2d8\uc758 \ubabb \ucc14\ub9b0 \uc790\uad6d\uc744 \ubcf4\uace0\uc790 \ud588\uc2b5\ub2c8\ub2e4. \ub3c4\ub9c8\uac00 \ubcf4\uace0\uc790\ud55c \uc608\uc218\ub2d8\uc758 \ubabb \uc790\uad6d\uc774 \uc544\ub2cc \uacf3\uc740 \uc5b4\ub514\uc77c\uae4c\uc694?",1,["\ubc1c","\uc190","\uc606\uad6c\ub9ac"]),Un(5,"\ubd80\ud65c\uc808\uc740 \uc601\uc5b4\ub85c \u2018Easter\u2019 \uc785\ub2c8\ub2e4. Easter\uc758 \uc5b4\uc6d0\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",3,["Eous(\uc0c8\ubcbd\uc758)","Eurus(\ubc14\ub78c)","Eostre(\ubd04\uc758 \uc5ec\uc2e0)"]),Un(6,"\ubd80\ud65c \ud6c4\uc5d0 \uc608\uc218\ub2d8\uc740 \uae38\uc744 \uac00\ub294 \ub450 \uc81c\uc790\uc640 \ub3d9\ud589\ud558\uc2ed\ub2c8\ub2e4. \uc774\ub54c \ub450 \uc81c\uc790 \uc911 \ud55c\uba85\uc758 \uc774\ub984\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",3,["\ub9db\ub514\uc544","\ub2e4\ub300\uc624","\uae00\ub85c\ubc14"]),Un(7,"\uc9c0\ub09c\uc8fc \uc885\ub824\uc8fc\uc77c\uc5d0 \ub4dc\ub9b0 \ub300\ud559\ubd80 \ud14c\ub124\ube0c\ub808 \uc608\ubc30\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",2,["\ud14c\ub124\ube0c\ub808\ub294 \uc601\uc5b4\ub85c tenebre\uc774\ub2e4.","\ud0c1\ud604\uc218 \ubaa9\uc0ac\ub2d8\uc758 \uc124\uad50 \uc81c\ubaa9\uc740 '\ubca0\ub4dc\ub85c\ub97c \ubcf4\uc2dc\ub2c8' \uc774\uc5c8\ub2e4. ","\ub0a8\uc0b0 \uc0b0\ucc45\uc5d0\uc11c \ubc1b\uc740 \ub9d0\uc500\uce74\ub4dc\ub294 \ub204\uac00\ubcf5\uc74c 10\uc7a5 45\uc808\uc774\ub2e4."]),Un(8,"\ubd80\ud65c\uc808\uc740 \uacfc\uac70 325\ub144 \ub2c8\ucf00\uc544 \uacf5\uc758\ud68c\uc5d0\uc11c \uc11c\ubc29\uad50\ud68c\ub4e4\uc758 \uae30\uc900\uc744 \ub530\ub77c \uc815\ud574\uc84c\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc815\ud574\uc9c4 \ubd80\ud65c\uc808\uc758 \uae30\uc900\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694? ",1,["\ucd98\ubd84 \ub2e4\uc74c \ubcf4\ub984\ub2ec \uc774\ud6c4\uc758 \uccab \uc8fc\uc77c","\uc591\ub825 4\uc6d4\uc758 \uccab \ubc88\uc9f8 \uc8fc\uc77c","\uc74c\ub825 3\uc6d4\uc758 \uccab \ubc88\uc9f8 \uc8fc\uc77c"]),Un(9,"\ud3f4\ub780\ub4dc\uc5d0\uc11c\ub294 \ubd80\ud65c\uc808 \ub2e4\uc74c \uc6d4\uc694\uc77c\uc5d0 \ud568\uaed8 \u2018\uc774\uac83\u2019\uc744 \ud558\uba70 \uc11c\ub85c\uc758 \uac74\uac15\uacfc \uc548\uc804\uc744 \uae30\uc6d0\ud569\ub2c8\ub2e4. \u2018\uc774\uac83\u2019\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?",3,["\ub098\ubb47\uac00\uc9c0 \uc539\uae30","\ub545\uc5d0 \ub2ec\uac40 \uaecd\uc9c8 \ubb3b\uae30","\ubb3c \ubfcc\ub9ac\uae30"]),Un(10,"Re VS 100\uc758 \uc9c4\ud589\uc790\uc778 \uc548\ud0dc\ud638 \ubc97\ub2d8\uc740 1997\ub144\uc0dd(\ube60\ub978)\uc785\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 1997\ub144\ub3c4\uc758 \ubd80\ud65c\uc808\uc740 \uc5b8\uc81c\uc600\uc744\uae4c\uc694?",1,["1997\ub144 3\uc6d4 30\uc77c","1997\ub144 4\uc6d4 7\uc77c","1997\ub144 4\uc6d4 15\uc77c "])],$n=l.d.div(T||(T=Object(jn.a)(["\n    max-width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    color: ",";\n    border: 5px solid ",";\n    border-bottom: none;\n    border-radius: 5px;\n    font-size: 2rem;\n    font-weight: bolder;\n    letter-spacing: 1.5px;\n    line-height: 50px;\n    padding: 20px;\n    ","\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.border}),On.tablet(B||(B=Object(jn.a)(["\n      font-size: 1.5rem;\n      line-height: 40px;\n      word-break: break-all;\n      padding: 10px;\n  "])))),ne=function(n){var e=n.question;return Object(wn.jsx)($n,{children:e})},ee=l.d.div(Q||(Q=Object(jn.a)(["\n\tz-index: 10;\n\tdisplay: ",";\n    justify-content: center;\n    align-items: center;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth:100vw;\n\tbackground: rgba(0,0,0,0.5);\n"])),(function(n){return n.show?"flex":"none"})),te=Object(l.d)(gn)(L||(L=Object(jn.a)(["\n    background-color: #eee;\n    box-shadow: 0px 2px 6px grey;\n    border-radius: 10px;\n    padding: 10px;\n    width: 450px;\n    height: 300px;\n"]))),re=l.d.div(F||(F=Object(jn.a)(["\n    display: grid;\n    grid-template-columns: 60px 270px 80px;\n    grid-template-rows: repeat(3, 50px);\n"]))),ce=l.d.div(M||(M=Object(jn.a)(["\n    height: 15px;\n    width: ",";\n    background-color: ",";\n"])),(function(n){return 1+n.perc+"%"}),(function(n){return n.color})),ie=function(n){var e=n.visible,t=n.toggle,r=n.participants,c=Object(u.a)(r,3),i=c[0],a=c[1],o=c[2],s=(i+a+o)/100;return Object(wn.jsx)(ee,{show:e,onClick:t,children:Object(wn.jsx)(te,{children:Object(wn.jsxs)(re,{children:[Object(wn.jsx)(gn,{children:"1\ubc88"}),Object(wn.jsx)(gn,{left:!0,children:Object(wn.jsx)(ce,{perc:i/s,color:"#cf0c0c"})}),Object(wn.jsxs)(gn,{children:[i,"\uba85"]}),Object(wn.jsx)(gn,{children:"2\ubc88"}),Object(wn.jsx)(gn,{left:!0,children:Object(wn.jsx)(ce,{perc:a/s,color:"#20d6a0"})}),Object(wn.jsxs)(gn,{children:[a,"\uba85"]}),Object(wn.jsx)(gn,{children:"3\ubc88"}),Object(wn.jsx)(gn,{left:!0,children:Object(wn.jsx)(ce,{perc:o/s,color:"#245cbb"})}),Object(wn.jsxs)(gn,{children:[o,"\uba85"]})]})})})},ae=t(40),oe=t.n(ae),se=l.d.div(W||(W=Object(jn.a)(["\n    width: 100%;\n    font-size: 20px;\n    color: #ddd;\n    @media(max-width:480px){\n        height: 50px;\n        max-width: 100px;\n        font-size: 20px;\n    }\n    @media(min-width:480px){\n        height: 60px;\n        max-width: 120px;\n        font-size: 26px;\n    }\n    @media(min-width:1080px){\n        height: 90px;\n        max-width: 180px;\n        font-size: 32px;\n    }\n"]))),de=l.d.div(H||(H=Object(jn.a)(["\n    width: 100%;\n    height: 0;\n    padding-bottom: 50%;\n    background: #b6d5f8;\n    position: relative;\n    border-top-left-radius: 100% 200%;\n    border-top-right-radius: 100% 200%;\n    overflow: hidden;\n"]))),ue=l.d.div(R||(R=Object(jn.a)(["\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: inherit;\n    height: 100%;\n    transform-origin: center top;\n    transform: rotate(0.25turn);\n    transition: transform 0.2s ease-out;\n    background-color: ",";\n    transform: rotate( ","turn);\n"])),(function(n){var e=n.offset;return"#"+oe()(e,e,255)}),(function(n){return n.perc/2})),le=l.d.div(V||(V=Object(jn.a)(["\n    width: 75%;\n    height: 150%;\n    background-color: #152764;\n    border-radius: 50%;\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    transform: translateX(-50%);\n\n    /* Text */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 25%;\n    box-sizing: border-box;\n    font-weight: bolder;\n"]))),be=function(n){var e=n.seconds,t=e/60,c=Object(r.useState)(1),i=Object(u.a)(c,2),a=i[0],o=i[1];return Object(r.useEffect)((function(){o(parseInt(t>1?1:t<0?0:55+192*(1-t)))}),[e]),Object(wn.jsx)(se,{children:Object(wn.jsxs)(de,{children:[Object(wn.jsx)(ue,{offset:a,perc:t}),Object(wn.jsx)(le,{children:e})]})})},je=l.d.div(J||(J=Object(jn.a)(["\n  display: grid;\n  grid-template-rows: auto auto auto auto;\n  width: 100%;\n"]))),fe=l.d.div(P||(P=Object(jn.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  margin-bottom: 10px;\n  & > div:nth-child(2){\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    & > button {\n      margin: 0;\n    }\n  }\n"]))),pe=l.d.div(G||(G=Object(jn.a)(["\n    display: grid;\n    grid-template-rows: 360px auto auto;\n    background-color: ",";\n    border-radius: 15px;\n    box-shadow: 10px 10px 20px black;\n    ","\n"])),(function(n){return n.theme.colors.border}),On.tablet(K||(K=Object(jn.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: 300px;\n  "])))),xe=l.d.div(N||(N=Object(jn.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  & > button {\n    margin: 8px 4px;\n  }\n"]))),he=function(n){var e=n.userObj,t=n.doc_user_id,c=n.currentInfo,i=c.currentQuiz,a=c.showAnswer,o=c.showHint,l=c.isBlocked,b=c.part,j=c.startedTimestamp,f=e.isAdmin,p=Yn[i],x=Object(r.useState)([0,0,0]),h=Object(u.a)(x,2),m=h[0],O=h[1],g=Object(r.useState)(0),w=Object(u.a)(g,2),v=w[0],y=w[1],k=Object(r.useState)(60),z=Object(u.a)(k,2),S=z[0],A=z[1],_=Object(r.useState)(!1),E=Object(u.a)(_,2),q=E[0],I=E[1],C=function(){return I((function(n){return!n}))};Object(r.useEffect)((function(){bn.collection("users").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()})).map((function(n){return n.available}));y(e.filter((function(n){return n})).length)}))}),[i]);var D=function(){var n=Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(i<=0)){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,bn.collection("current").doc("current").update({currentQuiz:i-1,showAnswer:!1,isBlocked:!1,startedTimestamp:(new Date).getTime()});case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=function(){var n=Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return C(),n.next=3,bn.collection("current").doc("current").update({showHint:!0});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(){var n=Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,bn.collection("current").doc("current").update({isBlocked:!0,startedTimestamp:0});case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:bn.collection("current").doc("current").update({showAnswer:!0}),(e=bn.collection("users")).where("quiz_".concat(p.no),"!=",p.answer).get().then((function(n){if(0===m[p.answer-1])throw new Error("AllFailed");var t=bn.batch();console.log(n.docs.length),n.docs.forEach((function(n){var r=e.doc(n.data().uid);t.update(r,{available:!1})})),t.commit()})).catch((function(n){"AllFailed"===n.message&&setTimeout((function(){return alert("\ubaa8\ub4e0 \ucc38\uc5ec\uc790\uac00 \ud0c8\ub77d\ud558\uc600\uc73c\ubbc0\ub85c \ub2e4\uc74c \ub77c\uc6b4\ub4dc\uc5d0\uc11c \ubaa8\ub450 \uc7ac\ub3c4\uc804\ud569\ub2c8\ub2e4.")}),3e3),console.log("Error getting document:",n)}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){bn.collection("users").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()})).map((function(n){return n["quiz_"+p.no]}));O([e.filter((function(n){return 1===n})).length,e.filter((function(n){return 2===n})).length,e.filter((function(n){return 3===n})).length])}))}),[i]),Object(r.useEffect)((function(){var n=setInterval((function(){var e=(new Date).getTime(),t=parseInt((e-j)/1e3);A(t>61?0:61-t),t>=61&&clearInterval(n)}),1e3);return function(){return clearInterval(n)}}),[j]),Object(wn.jsxs)(je,{children:[Object(wn.jsxs)(fe,{children:[Object(wn.jsx)(be,{seconds:S}),f?Object(wn.jsx)("div",{children:!o&&Object(wn.jsx)(qn,{onClick:T,disabled:o,children:"\ubc97\ub2d8\ub4e4 \ucc2c\uc2a4"})}):Object(wn.jsx)("div",{})]}),Object(wn.jsxs)(pe,{children:[Object(wn.jsx)(ne,{question:p.question}),Object(wn.jsx)(Zn,{quiz:p,userObj:e,doc_user_id:t,showAnswer:a,isBlocked:l})]}),f&&Object(wn.jsxs)(xe,{children:[Object(wn.jsx)(qn,{color:"secondary",onClick:D,children:" \uc774\uc804 "}),l?a?Object(wn.jsx)(qn,{onClick:function(){i===Yn.length-1||v<=5?(bn.collection("current").doc("current").update({isDone:!0}),A(0)):bn.collection("current").doc("current").update({currentQuiz:i+1,showAnswer:!1,isBlocked:!1,startedTimestamp:(new Date).getTime()})},children:" \ub2e4\uc74c "}):Object(wn.jsx)(qn,{onClick:Q,children:" \uc815\ub2f5 \uacf5\uac1c "}):Object(wn.jsx)(qn,{color:"secondary",onClick:B,children:" \uc2dc\uac04 \uc885\ub8cc "})]}),Object(wn.jsx)(Vn,{showAnswer:a,quiz:p,part:b,participants:m,currentInfo:c,userObj:e}),Object(wn.jsx)(ie,{visible:q,toggle:C,participants:m,currentQuiz:i})]})},me=t(20),Oe=t(21),ge=l.d.button(X||(X=Object(jn.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    margin: 0.5rem 20rem;\n    width: ",";\n    font-weight: ",";\n    font-size: ",";\n    ","\n"])),(function(n){return n.fullWidth?"100%":"8rem"}),(function(n){return n.bold?"bold":"normal"}),(function(n){var e=n.fontSize;return e?e+"px":"1rem"}),(function(n){var e=n.color,t=n.theme.colors,r=n.disabled,c="secondary"===e?t.secondary:t.primary;return"\n            background: ".concat(r?c.disabled:c.main,";\n            color: ").concat(c.text,";\n            border: ").concat(c.border," solid thin;\n            ").concat(!r&&"\n                &:hover {\n                    background: ".concat("text"===e?"transparent":c.accent,";\n                    outline: none;\n                }\n            "),"\n        ")})),we=l.d.div(Z||(Z=Object(jn.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 2em;\n    font-weight: bolder;\n    text-align: center;\n    align-items: center;\n    letter-spacing: 1.5px;\n    color: #dbe2fd;\n"]))),ve=l.d.div(U||(U=Object(jn.a)(["\n    display: grid;\n    grid-template-columns: 50px 200px 50px;\n"]))),ye=function(n){var e=n.userObj,t=Object(r.useState)([]),c=Object(u.a)(t,2),i=c[0],a=c[1],o=e.isAdmin;Object(r.useEffect)((function(){return bn.collection("users").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()})).filter((function(n){return n.available})).map((function(n){return n.alias}));a(e)}))}),[]);return Object(wn.jsxs)(we,{children:[Object(wn.jsxs)("p",{children:["\ucd5c\ud6c4\uc758 ",i.length,"\uc778"]}),i.map((function(n,e){return Object(wn.jsxs)(ve,{children:[Object(wn.jsx)(me.a,{icon:Oe.a}),"\xa0[\xa0",n,"\xa0]\ub2d8\xa0",Object(wn.jsx)(me.a,{icon:Oe.a})]},e)})),Object(wn.jsx)("p",{children:"\ubb38\uc790\uac00 \ubc1c\uc1a1\ub420 \uc608\uc815\uc774\ub2c8 \uaf2d \ud655\uc778\ud574\uc8fc\uc138\uc694!"}),o&&Object(wn.jsx)(ge,{onClick:function(){bn.collection("current").doc("current").update({isDraw:!0})},children:" \ucd94\ucca8 \ud558\ub7ec \uac00\uae30 "})]})},ke=t.p+"static/media/frame.4a975f16.png",ze=l.d.div(Y||(Y=Object(jn.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  text-align: left;\n  ","\n"])),On.tablet($||($=Object(jn.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: auto auto;\n  "])))),Se=l.d.div(nn||(nn=Object(jn.a)(["\n  margin: 30px;\n  color: white;\n"]))),Ae=l.d.div(en||(en=Object(jn.a)(["\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  line-height: 2em;\n  font-size: large;  \n  ","\n"])),On.tablet(tn||(tn=Object(jn.a)(["\n  font-size: medium;\n  background: linear-gradient(to bottom, #fce4ec, #e3f2fd);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"])))),_e=l.d.div(rn||(rn=Object(jn.a)(["\n  float: right;\n  font-weight: bolder;\n  font-size: 2rem;\n"]))),Ee=l.d.img(cn||(cn=Object(jn.a)(["\n  width: 100%;\n  height: 100%;\n"]))),qe=function(n){var e=n.isAdmin,t=Object(r.useState)(0),c=Object(u.a)(t,2),i=c[0],a=c[1];return bn.collection("users").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()})).length;a(e)})),Object(wn.jsxs)(ze,{children:[Object(wn.jsxs)("div",{children:[Object(wn.jsxs)(Se,{children:[Object(wn.jsxs)(_e,{children:[Object(wn.jsx)(me.a,{icon:Oe.c})," \xa0",i]}),Object(wn.jsx)("h1",{children:"Rules"}),Object(wn.jsx)(Ae,{children:Object(wn.jsxs)("ol",{children:[Object(wn.jsx)("li",{children:"3\uac1c\uc758 \ubcf4\uae30 \uc911 \uc815\ub2f5\uc744 \uace0\ub985\ub2c8\ub2e4. "}),Object(wn.jsx)("li",{children:"100\uc778\uc774 \uba3c\uc800 \ubb38\uc81c\ub97c \ub2e4 \ud47c \ud6c4, \uac8c\uc2a4\ud2b8 2\uc778\uc774 \ubb38\uc81c\ub97c \ud489\ub2c8\ub2e4. "}),Object(wn.jsx)("li",{children:"\uac01 \ubb38\uc81c \ub2f9 1\ubd84\uc758 \uc2dc\uac04\uc81c\ud55c\uc774 \uc788\uc2b5\ub2c8\ub2e4. "}),Object(wn.jsx)("li",{children:"\uac01 \ub2e8\uacc4\uc758 \uc815\ub2f5\uc790\ub9cc \ub2e4\uc74c \ub2e8\uacc4\ub85c \ub118\uc5b4\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "}),Object(wn.jsx)("li",{children:"\ucd5c\ud6c4\uc758 5\uc778\uc774 \ub0a8\uc744 \ub54c\uae4c\uc9c0 \ud034\uc988\uac00 \uc9c4\ud589\ub429\ub2c8\ub2e4. "}),Object(wn.jsx)("li",{children:"\uc911\uac04 \ucc38\uc5ec\ub294 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4."}),Object(wn.jsx)("li",{children:"\uac8c\uc2a4\ud2b8 2\uba85\uc740 \ud568\uaed8 2\ubc88\uc758 \ucc2c\uc2a4\ub97c \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "}),Object(wn.jsxs)("ul",{children:[Object(wn.jsx)("li",{children:"\ud55c\ubc97\ub2d8 \ucc2c\uc2a4 : \uc6d0\ud558\ub294 \ud55c \uba85\uc758 \ub2f5\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. "}),Object(wn.jsx)("li",{children:"\ubc97\ub2d8\ub4e4 \ucc2c\uc2a4 : \ubaa8\ub4e0 \ubc97\ub2d8\uc774 \uc120\ud0dd\ud55c \ub2f5\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})})]}),e&&Object(wn.jsx)(gn,{children:Object(wn.jsx)(qn,{onClick:function(){var n=bn.collection("users");n.get().then((function(e){var t=bn.batch();e.docs.forEach((function(e){var r=n.doc(e.data().uid);t.update(r,{available:!0})})),t.commit()})).catch((function(n){console.log("Error getting document:",n)})),bn.collection("current").doc("current").update({toQuiz:!0,part:i,showAnswer:!1,block:!1,showHint:!1,currentQuiz:0,isDone:!1,isDraw:!1,startedTimestamp:(new Date).getTime()})},children:" \ud034\uc988 \uc2dc\uc791\ud558\uae30"})})]}),e&&Object(wn.jsx)(Ee,{src:ke})]})},Ie=l.d.div(an||(an=Object(jn.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 2em;\n    font-weight: bolder;\n    text-align: center;\n    align-items: center;\n    letter-spacing: 1.5px;\n    line-height: 1.8em;\n    color: white;\n    ","\n    ","\n"])),On.tablet(on||(on=Object(jn.a)(["\n      font-size: 1.5em;\n    "]))),On.phone(sn||(sn=Object(jn.a)(["\n      font-size: 1em;\n    "])))),Ce=l.d.div(dn||(dn=Object(jn.a)(["\n    font-style: italic;\n"]))),De=function(){var n=Object(r.useState)([]),e=Object(u.a)(n,2),t=e[0],c=e[1];return Object(r.useEffect)((function(){bn.collection("users").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()})).filter((function(n){return!n.isAdmin})).map((function(n){return n.alias})).slice(0,10);console.log(e),function(n){for(var e=n.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=[n[t],n[e]];n[e]=r[0],n[t]=r[1]}}(e),c(e)}))}),[]),Object(wn.jsxs)(Ie,{children:[Object(wn.jsxs)("div",{children:["\ub2f9\ucca8 \ucd95\ud558\ub4dc\ub9bd\ub2c8\ub2e4!!!",Object(wn.jsx)("br",{}),"\ubb38\uc790\uac00 \ubc1c\uc1a1\ub420 \uc608\uc815\uc774\ub2c8 \uaf2d \ud655\uc778\ud574\uc8fc\uc138\uc694 :)"]}),Object(wn.jsxs)("div",{children:[Object(wn.jsx)(me.a,{icon:Oe.b}),"  \ucd94\ucca8\uc790 \uba85\ub2e8  ",Object(wn.jsx)(me.a,{icon:Oe.b})]}),Object(wn.jsx)(Ce,{children:t.join(", ")}),Object(wn.jsx)("br",{}),Object(wn.jsx)("br",{}),Object(wn.jsx)("div",{children:"\ubaa8\ub4e0 \ud034\uc988 \uc21c\uc11c\uac00 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4!"})]})},Te=function(n){var e=n.isLoggedIn,t=n.userObj,r=n.hasAccount,c=n.doc_user_id,i=n.currentInfo;return Object(wn.jsx)(_n.a,{children:Object(wn.jsx)(En.c,{children:e?r?Object(wn.jsx)(wn.Fragment,{children:i.toQuiz?Object(wn.jsx)(wn.Fragment,{children:i.isDone?i.isDraw?Object(wn.jsx)(En.a,{exact:!0,path:"/",children:Object(wn.jsx)(De,{userObj:t})}):Object(wn.jsx)(En.a,{exact:!0,path:"/",children:Object(wn.jsx)(ye,{userObj:t,currentInfo:i})}):Object(wn.jsx)(En.a,{exact:!0,path:"/",children:Object(wn.jsx)(he,{userObj:t,doc_user_id:c,currentInfo:i})})}):Object(wn.jsx)(En.a,{exact:!0,path:"/",children:Object(wn.jsx)(qe,{isAdmin:t.isAdmin})})}):Object(wn.jsx)(En.a,{exact:!0,path:"/",children:Object(wn.jsx)(Qn,{userObj:t,currentInfo:i})}):Object(wn.jsx)(En.a,{exact:!0,path:"/",children:Object(wn.jsx)(Hn,{currentInfo:i})})})})};var Be=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(null),a=Object(u.a)(i,2),o=a[0],b=a[1],j=Object(r.useState)(!1),f=Object(u.a)(j,2),p=f[0],x=f[1],h=Object(r.useState)(""),m=Object(u.a)(h,2),O=m[0],g=m[1],w=Object(r.useState)({currentQuiz:0,showAnswer:!1,showHint:!1,toQuiz:!1,isDone:!1,isDraw:!1}),v=Object(u.a)(w,2),y=v[0],k=v[1];return Object(r.useEffect)((function(){ln.onAuthStateChanged(function(){var n=Object(d.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=8;break}return n.next=3,bn.collection("users").where("uid","==",e.uid).get();case 3:t=n.sent,x(Boolean(t.docs.length));try{b(t.docs[0].data()),g(t.docs[0].id)}catch(r){b(e)}n.next=9;break;case 8:b(null);case 9:c(!0);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),bn.collection("current").doc("current").onSnapshot((function(n){k(n.data())}))}),[]),Object(r.useEffect)((function(){O&&bn.collection("users").doc(O).onSnapshot((function(n){b(n.data())}))}),[O]),Object(wn.jsx)(l.a,{theme:An,children:Object(wn.jsx)(kn,{children:t?Object(wn.jsx)(Te,{isLoggedIn:Boolean(o),userObj:o,hasAccount:p,doc_user_id:O,currentInfo:y}):Object(wn.jsx)("div",{children:'"Initializing..."'})})})};a.a.render(Object(wn.jsx)(c.a.StrictMode,{children:Object(wn.jsx)(Be,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.f48e30a9.chunk.js.map