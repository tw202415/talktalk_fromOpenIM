System.register(["./index-legacy-1ff42a16.js","./@openim-legacy-c6a9c335.js","./i18next-legacy-3b10ec50.js","./react-legacy-86f3d07e.js"],(function(e,a){"use strict";var s,c,t,i,r,l,n,o,p,A;return{setters:[e=>{s=e.I,c=e.l,t=e.j,i=e.S,r=e.a,l=e.O,n=e.v},e=>{o=e.a},e=>{p=e.t},e=>{A=e.r}],execute:function(){e("A",A.memo((({currentUserID:e,source:a,onAccept:m,onReject:d})=>{const[u,x]=A.useState(!1),g=a.userID!==e&&a.fromUserID!==e,h=Boolean(a.groupID),f=0===a.handleResult&&g,N=()=>h?g?a.nickname:a.groupName:g?a.fromNickname:a.toNickname,w=async e=>{x(!0),await(e?m(a):d(a)),x(!1)},I=A.useCallback((async()=>{if(h){const{data:e}=await s.getSpecifiedGroupsInfo([a.groupID]);c.emit("OPEN_GROUP_CARD",e[0])}else window.userClick(g?a.fromUserID:a.toUserID)}),[]);return t(i,{spinning:u,children:r("div",{className:"flex flex-row items-center justify-between p-3.5 transition-colors hover:bg-[var(--primary-active)]",children:[r("div",{className:"flex flex-row",children:[t(l,{src:h?g?a.userFaceURL:a.groupFaceURL:g?a.fromFaceURL:a.toFaceURL,text:N(),isgroup:h,onClick:I}),r("div",{className:"ml-3",children:[t("p",{className:"text-sm",children:N()}),r("p",{className:"pb-2.5 pt-[5px] text-xs ",children:[p(h?"application.applyToJoin":g?"application.applyToFriend":"application.applyToAdd"),(h||!h&&!g)&&t("span",{className:"ml-1 text-xs text-[#0289FAFF]",children:a.groupName||a.toNickname})]}),r("p",{className:"text-xs text-[var(--sub-text)]",children:[p("application.information"),":"]}),t("p",{className:"text-xs text-[var(--sub-text)]",children:a.reqMsg})]})]}),f&&r("div",{className:"flex flex-row",children:[t("div",{className:"mr-5.5 h-8 w-[60px]",children:t(n,{block:!0,size:"small",onClick:()=>w(!1),className:"!h-full !rounded-md border-2 border-[#0089FF] text-[#0089FF]",children:p("application.refuse")})}),t("div",{className:"h-8 w-[60px]",children:t(n,{block:!0,size:"small",type:"primary",className:"!h-full !rounded-md bg-[#0289fa]",onClick:()=>w(!0),children:p("application.agree")})})]}),!f&&r("div",{className:"flex flex-row items-center",children:[!g&&t("img",{className:"mr-2 h-4 w-4",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAASRJREFUWEft2DsOgkAQBuAZC1tKj6E3EE8gR7Chl4uItTQeAU/AFfQcFsSaxDEbgjEiusvsy2Spd4Zv/6WYBQEAweNH4P4DSERe5YjY5vZMMAAVzyckqBhYb3lI0EmCeVFWALjkvrytp2uWJrOhXqOOeHcoa0SM9AABsnQ90QrkwPbHMqIGKwBYdH28Ab7iiOiCiHOB9AL4jptMIaYGay+An3DbTXLLi9PdOXAIJ2DOgd9wzoG/cE6BMjhnQFmcE6AKzjpQFWcVOAZnDTgWZwXIwRkHcnFGgTpwxoC6cEaAOnEC2E7mcM7SZKVlou7uImLYFPOcGJk407VMrdKdJC/KnAhiWzixASWgzI51rwlAbqIhwZAgNwFufe8b5DY0Ve/9X/4HCxqFYIpaWhIAAAAASUVORK5CYII=",alt:""}),t("p",{className:"text-sm text-[var(--sub-text)]",children:a.handleResult===o.Agree?p("application.agreed"):a.handleResult===o.Reject?p("application.refused"):p("application.pending")})]})]})})})))}}}));
