"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3228],{3228:(E,s,c)=>{c.r(s),c.d(s,{ProductionPageModule:()=>h});var a=c(177),p=c(9417),d=c(3465),l=c(73),g=c(5893),n=c(4438),u=c(2753),m=c(1315),M=c(4285);function C(t,i){if(1&t&&(n.j41(0,"tr")(1,"td")(2,"span",11)(3,"span",12),n.EFF(4),n.k0s(),n.j41(5,"span"),n.EFF(6," x "),n.j41(7,"span",12),n.EFF(8),n.k0s()()(),n.nrm(9,"br"),n.j41(10,"span",13),n.EFF(11),n.k0s()(),n.j41(12,"td",14)(13,"span",12),n.EFF(14),n.k0s()()()),2&t){const e=i.$implicit,o=n.XpG(2);n.R7$(4),n.SpI(" ",e.item," "),n.R7$(4),n.JRh(e.count),n.R7$(3),n.SpI(" ",null==o.gameProcessService.ITEMS_TO_PRODUCE[e.item]?null:o.gameProcessService.ITEMS_TO_PRODUCE[e.item].description," "),n.R7$(3),n.SpI(" ",o.gameProcessService.formatTimerToDisplay(e.totalTimeInSeconds)," ")}}function O(t,i){if(1&t&&(n.j41(0,"div",8)(1,"table",9)(2,"thead")(3,"tr")(4,"th")(5,"span"),n.EFF(6," Description "),n.k0s()(),n.j41(7,"th")(8,"span"),n.EFF(9,"Time"),n.k0s()()()(),n.j41(10,"tbody"),n.DNE(11,C,15,4,"tr",10),n.k0s()()()),2&t){const e=n.XpG();n.R7$(11),n.Y8G("ngForOf",e.gameProcessService.ITEMS_QUEUE_PRODUCING.items)}}const f=[{path:"",component:(()=>{var t;class i{constructor(o,r,P){this.allModalsService=o,this.assetManagerService=r,this.gameProcessService=P}ngOnInit(){}addProductionItems(){this.allModalsService.openModal(g.q.ADD_PRODUCTION_ITEMS)}}return(t=i).\u0275fac=function(o){return new(o||t)(n.rXU(g.H),n.rXU(u.D),n.rXU(m.t))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-production"]],decls:11,vars:7,consts:[[3,"fullscreen","forceOverscroll"],[1,"production-wrapper"],[1,"cyber-h","fg-cyan"],[1,"add-button-info-row"],[3,"click","buttonText","buttonClasses"],[1,"total-queue-info","fg-white"],[1,"total-time-info"],["class","all-production-items",4,"ngIf"],[1,"all-production-items"],[1,"cyber-table","cyber-style-2","fg-white1"],[4,"ngFor","ngForOf"],[1,"item-name"],[1,"fg-cyan"],[1,"item-description"],[1,"queue-time"]],template:function(o,r){1&o&&(n.j41(0,"ion-content",0)(1,"div",1)(2,"h3",2),n.EFF(3,"Producing subsystem"),n.k0s(),n.j41(4,"div",3)(5,"app-tile-button",4),n.bIt("click",function(){return r.addProductionItems()}),n.k0s(),n.j41(6,"span",5)(7,"span",6),n.EFF(8),n.k0s(),n.nrm(9,"br"),n.k0s()(),n.DNE(10,O,12,1,"div",7),n.k0s()()),2&o&&(n.Y8G("fullscreen",!1)("forceOverscroll",!1),n.R7$(5),n.Y8G("buttonText","Create")("buttonClasses","bg-green"),n.R7$(3),n.Lme("Total time: ",r.gameProcessService.formatTimerToDisplay(r.gameProcessService.ITEMS_QUEUE_PRODUCING.totalTimeInSeconds)," / ",r.gameProcessService.formatTimerToDisplay(r.gameProcessService.PRODUCING_QUEUE_TIME_SECONDS_MAX),""),n.R7$(2),n.Y8G("ngIf",r.gameProcessService.ITEMS_QUEUE_PRODUCING.items.length>0))},dependencies:[a.Sq,a.bT,d.W9,M.G],styles:["ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]{padding-top:80px;display:flex;flex-direction:column}ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 15px 10px}ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   h3.cyber-h[_ngcontent-%COMP%]:after{background-color:var(--cyan)}ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   .add-button-info-row[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:1vh}ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   .add-button-info-row[_ngcontent-%COMP%]   .total-queue-info[_ngcontent-%COMP%]{padding:10px;margin-left:10px;border:.03rem solid cyan;width:-moz-fit-content;width:fit-content;z-index:2}ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   .all-production-items[_ngcontent-%COMP%]{margin:10px auto 0}ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   .all-production-items[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   .all-production-items[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%]{font-size:1em;line-height:2em}ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   .all-production-items[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   .all-production-items[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}ion-content[_ngcontent-%COMP%]   div.production-wrapper[_ngcontent-%COMP%]   .all-production-items[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.queue-time[_ngcontent-%COMP%]{text-align:center;min-width:7em}"]}),i})()}];let v=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[l.iI.forChild(f),l.iI]}),i})();var _=c(3887);let h=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[a.MD,p.YN,d.bv,v,_.G]}),i})()}}]);