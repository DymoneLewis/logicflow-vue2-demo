(function(){"use strict";var e={6136:function(e,t,a){var l=a(8904),i=a(5138),M=a.n(i),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{ref:"container",staticClass:"lf-container"})])},n=[],s=(a(6206),a(1359),a(2033),a(1130)),r=a(2738),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"lf-info-card-node",style:e.nodeStyle},[t("el-divider",{attrs:{"content-position":"center"}},[e._v(e._s(e.nodeTypeZhMap[e.type])+"描述")]),t("el-form",e._l(e.config,(function(a){return t("el-form-item",{key:a.key,attrs:{label:a.label}},[t("el-select",{staticClass:"lf-info-card-node-selector",attrs:{size:"mini",placeholder:"请选择",filterable:a.filterable,clearable:a.clearable,multiple:a.multiple,"allow-create":a.allowCreate},on:{focus:e.onInfoCardNodeFocus,blur:e.onInfoCardNodeBlur},model:{value:e.descData[a.key],callback:function(t){e.$set(e.descData,a.key,t)},expression:"descData[item.key]"}},["groupSelect"===a.type?e._l(a.options,(function(a){return t("el-option-group",{key:a.label,attrs:{label:a.label}},e._l(a.options,(function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.label}})})),1)})):e._l(a.options,(function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.label}})}))],2)],1)})),1)],1)},c=[],N=a(9708),g=a(8421),d=a(3638),j=a(9033);const z=["sceneNode","subjectNode","behaviorNode"],T={sceneNode:"场景",subjectNode:"主体",behaviorNode:"行为"},y={sceneNode:"data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzMxNDk3NjAwNTA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyOTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxwYXRoIGQ9Ik0xMjguMjk5IDEyOEM5Mi43ODggMTI4IDY0IDE1Ni43ODggNjQgMTkyLjI5OXY2MzkuNEM2NCA4NjcuMjEyIDkyLjc4OCA4OTYgMTI4LjI5OSA4OTZIODk1LjdjMzUuNTEyIDAgNjQuMy0yOC43ODggNjQuMy02NC4yOTlWMTkyLjI5OUM5NjAgMTU2Ljc4OCA5MzEuMjEyIDEyOCA4OTUuNzAxIDEyOEgxMjguMjk5ek0xMjggNTg4LjMxM2wxNzguMTYyLTE3OC4xNjJjMjQuNzk1LTI0Ljc5NSA2NC45OTYtMjQuNzk1IDg5Ljc5MiAwTDgxNy44MDMgODMySDEyOFY1ODguMzEzeiBtNzY4IDIzMS4zNzVMNjY2LjM4NSA1OTAuMDczbDY0LjcxOC02NC43MThjMjUuMTUzLTI1LjE1MiA2NS45MzMtMjUuMTUyIDkxLjA4NSAwTDg5NiA1OTkuMTY3djIyMC41MjF6TTY5NC42NSA0NzEuMjk5bC03My41MTkgNzMuNTE5TDQzMi42NTMgMzU2LjM0Yy00NS4wNjQtNDUuMDY0LTExOC4xMjctNDUuMDY0LTE2My4xOSAwTDEyOCA0OTcuODAzVjE5Mmg3Njh2MzE2LjY1N2wtMzcuMzU4LTM3LjM1OGMtNDUuMjg2LTQ1LjI4NS0xMTguNzA3LTQ1LjI4NS0xNjMuOTkyIDB6IiBwLWlkPSI0Mjk1IiBmaWxsPSIjMmMyYzJjIj48L3BhdGg+PC9zdmc+",subjectNode:"data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzMxNDk3NjEyODUzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU0NTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxwYXRoIGQ9Ik04NDguNiAxNzAuOUgxNzUuMWMtNDkuNiAwLTkwIDQwLjQtOTAgOTB2NTAxLjhjMCA0OS42IDQwLjQgOTAgOTAgOTBoNjczLjVjNDkuNiAwIDkwLTQwLjQgOTAtOTBWMjYwLjljMC00OS42LTQwLjQtOTAtOTAtOTB6IG0zMCA1OTEuOGMwIDE2LjUtMTMuNSAzMC0zMCAzMEgxNzUuMWMtMTYuNSAwLTMwLTEzLjUtMzAtMzBWMjYwLjljMC0xNi41IDEzLjUtMzAgMzAtMzBoNjczLjVjMTYuNSAwIDMwIDEzLjUgMzAgMzB2NTAxLjh6IiBmaWxsPSIjMmMyYzJjIiBwLWlkPSI1NDU2Ij48L3BhdGg+PHBhdGggZD0iTTUwMCA1NzAuMmM0Mi40LTMwLjEgNzAuMi03OS43IDcwLjItMTM1LjUgMC05MS42LTc0LjUtMTY2LjEtMTY2LjEtMTY2LjFzLTE2Ni4yIDc0LjQtMTY2LjIgMTY2YzAgNTUuOSAyNy43IDEwNS40IDcwLjIgMTM1LjUtNjAuNiAyOS41LTEwNi4zIDg2LjItMTE5LjcgMTU1LjctMi44IDE0LjYgNi43IDI4LjcgMjEuMyAzMS41IDEuNyAwLjMgMy40IDAuNSA1LjEgMC41IDEyLjYgMCAyMy45LTkgMjYuNC0yMS44IDE1LTc3LjcgODMuNS0xMzQuMiAxNjIuOC0xMzQuMiA3OS4zIDAgMTQ3LjggNTYuNCAxNjIuOCAxMzQuMiAyLjggMTQuNiAxNi45IDI0LjIgMzEuNSAyMS4zIDE0LjYtMi44IDI0LjItMTYuOSAyMS4zLTMxLjUtMTMuMy02OS40LTU5LTEyNi4xLTExOS42LTE1NS42eiBtLTk2LTIzLjNjLTYxLjkgMC0xMTIuMy01MC40LTExMi4zLTExMi4zUzM0Mi4xIDMyMi40IDQwNCAzMjIuNHMxMTIuMyA1MC40IDExMi4zIDExMi4zUzQ2NS45IDU0Ni45IDQwNCA1NDYuOXogbTQwNi42LTIzMC44SDY0MC4xYy0xMy44IDAtMjUgMTEuMi0yNSAyNXMxMS4yIDI1IDI1IDI1aDE3MC40YzEzLjggMCAyNS0xMS4yIDI1LTI1IDAuMS0xMy44LTExLjEtMjUtMjQuOS0yNXogbTAgOTkuNkg2NDAuMWMtMTMuOCAwLTI1IDExLjItMjUgMjVzMTEuMiAyNSAyNSAyNWgxNzAuNGMxMy44IDAgMjUtMTEuMiAyNS0yNXMtMTEuMS0yNS0yNC45LTI1eiBtMCAxMDYuMkg2NDAuMWMtMTMuOCAwLTI1IDExLjItMjUgMjVzMTEuMiAyNSAyNSAyNWgxNzAuNGMxMy44IDAgMjUtMTEuMiAyNS0yNXMtMTEuMS0yNS0yNC45LTI1eiIgZmlsbD0iIzJjMmMyYyIgcC1pZD0iNTQ1NyI+PC9wYXRoPjwvc3ZnPg==",behaviorNode:"data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzMxNDk3NTM1ODgxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxwYXRoIGQ9Ik0yMjAuNzQ4ODI0IDU4OC40MzI3MzhjMi44NTk4MzEgMCA1LjY1OTQ1NC0wLjM5MTM0NSA4LjM5ODg3MS0xLjExMzgyOWwxMzAuNDY4NDg2LTM0Ljk1MDE0MSAyMC41MzA1NzMgNDQuMjgyMjItMTA1LjcyMzQyNCA1OC44ODI0MDhhMzQuNjc5MjEgMzQuNjc5MjEgMCAwIDAtMTQuNzIwNjAyIDQzLjgwMDU2NGw2MS4xNzAyNzMgMTQ1Ljk0MTY3NWEzMi45MDMxMDQgMzIuOTAzMTA0IDAgMCAwIDQzLjkyMDk3OCAxNy45MTE1NzFjMTYuOTE4MTU2LTcuNTI1ODcgMjQuNzE0OTU4LTI3LjY5NTIwMiAxNy4zOTk4MTItNDUuMTI1MTE4bC00OS4xNTg5ODQtMTE3LjEwMjU0IDc5LjkyNDc0MS00NC41MjMwNDggNjEuMDE5NzU2IDk0LjEwMzQ4MWMzLjgyMzE0MiA1LjkwMDI4MiA5LjM2MjE4MyAxMC40NDU5MDggMTUuNzQ0MTIgMTMuMDM0ODA3bDE4MC44OTE4MTYgNzEuNDk1NzY3YzMuOTczNjU5IDEuNTY1MzgxIDguMDM3NjI5IDIuMjg3ODY1IDExLjk1MTA4MiAyLjI4Nzg2NWEzMy40MTQ4NjQgMzMuNDE0ODY0IDAgMCAwIDMxLjE4NzIwNi0yMS45NzU1NDEgMzQuNjc5MjEgMzQuNjc5MjEgMCAwIDAtMTkuMjA2MDIxLTQ0LjQzMjczOGwtMTcwLjk4Nzc3LTY3LjU1MjIxMS03MC42ODI5NzMtMTA4Ljk3NDYtMzIuMTUwNTE4LTY5LjUwODkzNyA3My4zOTIyODYtNTguMzQwNTQ1IDEwOC4zNDI0MjggMzcuMDg3NDg4YTMzLjIwNDEzOSAzMy4yMDQxMzkgMCAwIDAgNDIuMjM1MTgzLTIxLjczNDcxM2M1Ljc3OTg2OC0xOC4wMDE4ODEtMy42NDI1MjEtMzcuNDE4NjI3LTIxLjEwMjU0LTQzLjQwOTIxOWwtMTI1LjIzMDQ4LTQyLjkyNzU2NGEzMi41NDE4NjMgMzIuNTQxODYzIDAgMCAwLTMxLjAwNjU4NSA1LjQ0ODczbC03NS44OTA4NzUgNjAuNDE3Njg2LTIxLjU1NDA5Mi00Ni41NzAwODVhMTMxLjA3MDU1NSAxMzEuMDcwNTU1IDAgMCAwIDQyLjgzNzI1My05Ni44NzMwMDFjMC03MS43OTY4MDItNTYuODM1MzcyLTEzMC4xNjc0NTEtMTI2LjYxNTI0LTEzMC4xNjc0NS02OS44MDk5NzIgMC0xMjYuNjE1MjQgNTguMzcwNjQ5LTEyNi42MTUyNCAxMzAuMTY3NDUgMCA3MS44MjY5MDUgNTYuODA1MjY4IDEzMC4xOTc1NTQgMTI2LjYxNTI0IDEzMC4xOTc1NTQgOC4yMTgyNSAwIDE2LjI4NTk4My0wLjkzMzIwOCAyNC4xNDI5OTItMi40OTg1ODlsMjAuMTA5MTI1IDQzLjQ5OTUzLTEwMy43MDY0OTEgMjcuNzU1NDA5LTkzLjMyMDc5LTYzLjEyNjk5OWMtMTUuNDczMTg5LTEwLjQ3NjAxMS0zNi4xMjQxNzctNi4wNTA4LTQ2LjI2OTA1IDkuNzgzNjMxcy01Ljg0MDA3NSAzNy4xMTc1OTIgOS41NDI4MDMgNDcuNTMzMzk3bDEwNS43NTM1MjggNzEuNTU1OTczYzUuNTM5MDQgMy43OTMwMzkgMTEuOTIwOTc4IDUuNzE5NjYxIDE4LjM2MzEyMyA1LjcxOTY2MnogbTY1LjQ0NDk2Ny0yMDguODU3OTVjLTMzLjAyMzUxOCAwLTU5Ljg0NTcyLTI3LjYwNDg5Mi01OS44NDU3Mi02MS41MDE0MTEgMC0zMy45MjY2MjMgMjYuODgyNDA4LTYxLjUzMTUxNSA1OS44NDU3Mi02MS41MzE1MTRzNTkuNzg1NTEzIDI3LjYwNDg5MiA1OS43ODU1MTMgNjEuNTMxNTE0YzAgMzMuODk2NTE5LTI2Ljc5MjA5OCA2MS41MDE0MTEtNTkuNzg1NTEzIDYxLjUwMTQxMXogbTI3NC4wNjIwODktMTA4LjcwMzY2OWgxNzguMDYyMDg4YzE4LjQyMzMzIDAgMzMuMzg0NzYtMTUuNDEyOTgyIDMzLjM4NDc2LTM0LjQwODI3OCAwLTE4LjkzNTA4OS0xNC45NjE0My0zNC4zMTc5NjgtMzMuMzg0NzYtMzQuMzE3OTY4aC0xNzguMDYyMDg4Yy0xOC4zOTMyMjcgMC0zMy4zODQ3NiAxNS4zODI4NzktMzMuMzg0NzYxIDM0LjMxNzk2OC0wLjAzMDEwMyAxOS4wMjU0IDE0Ljk2MTQzIDM0LjQwODI3OCAzMy4zODQ3NjEgMzQuNDA4Mjc4eiBtNzcuOTA3ODA4IDEzMS41ODIzMTVjMCAxOC45NjUxOTMgMTQuOTMxMzI2IDM0LjM0ODA3MSAzMy4zODQ3NiAzNC4zNDgwNzFoMTc4LjA2MjA4OGMxOC40MjMzMyAwIDMzLjM4NDc2LTE1LjM1Mjc3NSAzMy4zODQ3Ni0zNC4zNDgwNzEgMC0xOC45NjUxOTMtMTQuOTYxNDMtMzQuMzQ4MDcxLTMzLjM4NDc2LTM0LjM0ODA3Mkg2NzEuNjA4NjU1Yy0xOC40ODM1MzcgMC4wMzAxMDMtMzMuNDQ0OTY3IDE1LjQxMjk4Mi0zMy40NDQ5NjcgMzQuMzQ4MDcyeiBtODkuMDQ2MDk2IDE1NC41MjExNjZjMCAxOC45NjUxOTMgMTQuOTMxMzI2IDM0LjMxNzk2OCAzMy4zNTQ2NTYgMzQuMzE3OTY4aDE3OC4wOTIxOTJjMTguNDIzMzMgMCAzMy4zODQ3Ni0xNS4zNTI3NzUgMzMuMzg0NzYtMzQuMzE3OTY4cy0xNC45NjE0My0zNC4zNzgxNzUtMzMuMzg0NzYtMzQuMzc4MTc1aC0xNzguMDkyMTkyYy0xOC4zOTMyMjcgMC4wMzAxMDMtMzMuMzU0NjU3IDE1LjQxMjk4Mi0zMy4zNTQ2NTYgMzQuMzc4MTc1eiIgcC1pZD0iMTUxNCIgZmlsbD0iIzJjMmMyYyI+PC9wYXRoPjwvc3ZnPg=="},I=e=>{switch(e){case"sceneNode":return m;case"subjectNode":return x;case"behaviorNode":return C}},D={sceneNode:{width:240,height:240,style:{background:"#fff",border:"3px solid #f57170"}},subjectNode:{width:240,height:400,style:{background:"#fff",border:"3px solid #15b7b9"}},behaviorNode:{width:240,height:140,style:{background:"#fff",border:"3px solid #ffde7d"}}},L={time:[{label:"清晨"},{label:"上午"},{label:"中午"},{label:"下午"},{label:"傍晚"},{label:"深夜"}],place:[{label:"房间"},{label:"公司"},{label:"公园"},{label:"海边"},{label:"山顶"},{label:"湖边"},{label:"森林"}]},b={somatotype:[{label:"高个子"},{label:"矮个子"},{label:"胖乎乎的"},{label:"瘦瘦的"}],hair:[{label:"长发"},{label:"短发"},{label:"卷发"},{label:"直发"}],emotion:[{label:"开心的"},{label:"生气的"},{label:"伤心的"},{label:"惊讶的"}],type:[{label:"人物",options:[{label:"男孩"},{label:"女孩"},{label:"少年"},{label:"少女"},{label:"男青年"},{label:"女青年"},{label:"中年男人"},{label:"中年女人"},{label:"老爷爷"},{label:"老太太"}]},{label:"动物",options:[{label:"猫"},{label:"老虎"},{label:"狗"},{label:"狼"},{label:"鹰"},{label:"鸽子"},{label:"鸭子"},{label:"天鹅"},{label:"鲤鱼"},{label:"金鱼"},{label:"金枪鱼"},{label:"鲨鱼"}]},{label:"植物",options:[{label:"柳树"},{label:"松树"},{label:"橡树"},{label:"银杏树"},{label:"玫瑰"},{label:"向日葵"},{label:"牡丹"},{label:"茉莉"}]}]},h={behavior:[{label:"吃饭"},{label:"睡觉"},{label:"工作"},{label:"旅行"},{label:"购物"},{label:"跑步"},{label:"看书"},{label:"唱歌"},{label:"画画"}]},A=e=>["动物","猫","老虎","狗","狼","鹰","鸽子","鸭子","天鹅"].includes(e)?"只":["鲤鱼","金鱼","金枪鱼","鲨鱼"].includes(e)?"条":["柳树","松树","橡树","银杏树","玫瑰","向日葵","牡丹","茉莉"].includes(e)?"棵":"个",p=[{label:"默认",value:"<auto>"},{label:"摄影",value:"<photography>"},{label:"人像写真",value:"<portrait>"},{label:"3D卡通",value:"<3d cartoon>"},{label:"动画",value:"<anime>"},{label:"油画风",value:"<oil painting>"},{label:"水彩风",value:"<watercolor>"},{label:"素描",value:"<sketch>"},{label:"中国画",value:"<chinese painting>"},{label:"扁平插画",value:"<flat illustration>"}],O=[{label:"1024*1024",value:"1024*1024"},{label:"720*1280",value:"720*1280"},{label:"1280*720",value:"1280*720"}];class m extends d.M3{setAttributes(){super.setAttributes();const{width:e,height:t}=this.properties;e&&(this.width=e),t&&(this.height=t)}getDefaultAnchor(){const{x:e,y:t,id:a,width:l}=this,i=[{x:e+l/2,y:t,id:`${a}_right`,type:"right"}];return i}getConnectedSourceRules(){const e=super.getConnectedSourceRules(),t={message:"场景节点的下一个节点只能是主体节点",validate:(e,t)=>{let a=!0;return"subjectNode"!==t.type&&(a=!1),a}},a={message:"场景节点只能连接两个主体节点",validate:e=>{let t=!0;return console.log("source.outgoing.nodes.length",e,e.outgoing.nodes.length),e.outgoing.nodes.length>=2&&(t=!1),t}};return(0,j.A)(e,[t,a]),e}}class x extends d.M3{setAttributes(){super.setAttributes();const{width:e,height:t}=this.properties;e&&(this.width=e),t&&(this.height=t)}getDefaultAnchor(){const{x:e,y:t,id:a,width:l,height:i}=this,M=[{x:e+l/2,y:t+i/4,id:`${a}_right`,type:"right"},{x:e-l/2,y:t,id:`${a}_left`,type:"left"}];return M}getConnectedSourceRules(){const e=super.getConnectedSourceRules(),t={message:"主体节点的下一个节点只能是主体节点",validate:(e,t)=>{let a=!0;return"behaviorNode"!==t.type&&(a=!1),a}},a={message:"一个主体节点只能连接一个行为节点",validate:e=>{let t=!0;return e.outgoing.nodes.length>=1&&(t=!1),t}};return(0,j.A)(e,[t,a]),e}}class C extends d.M3{setAttributes(){super.setAttributes();const{width:e,height:t}=this.properties;e&&(this.width=e),t&&(this.height=t)}getDefaultAnchor(){const{x:e,y:t,id:a,width:l}=this,i=[{x:e-l/2,y:t,id:`${a}_left`,type:"left"}];return i}}const E={sceneNode:[{key:"time",label:"时间",type:"select",options:L.time,filterable:!0,clearable:!0,allowCreate:!0},{key:"place",label:"地点",type:"select",options:L.place,filterable:!0,clearable:!0,allowCreate:!0}],subjectNode:[{key:"emotion",label:"情绪",type:"select",options:b.emotion,filterable:!0,clearable:!0,allowCreate:!0},{key:"somatotype",label:"体型",type:"select",options:b.somatotype,filterable:!0,clearable:!0,allowCreate:!0},{key:"hair",label:"发型",type:"select",options:b.hair,filterable:!0,clearable:!0,allowCreate:!0},{key:"type",label:"主体类型",type:"groupSelect",options:b.type,filterable:!0,clearable:!0,allowCreate:!0}],behaviorNode:[{key:"behavior",label:"行为",type:"select",options:h.behavior,filterable:!0,clearable:!0,allowCreate:!0}]};var f={name:"InfoCardNode",inject:["getNode","getGraph"],data(){return{nodeTypeZhMap:T,keys:N.A,config:{},descData:{},node:null,type:"",graph:null}},computed:{nodeStyle(){return(0,g.A)(this.$data.node)?{}:this.$data.node.getNodeStyle()}},watch:{descData:{deep:!0,handler(e){this.$data.node.setProperties(e)}}},mounted(){const{type:e}=this.getNode();this.$data.config=E[e],this.$data.type=e,this.$data.node=this.getNode(),this.$data.graph=this.getGraph()},methods:{onInfoCardNodeFocus(){this.$data.graph.eventCenter.emit("info-card-select-focus")},onInfoCardNodeBlur(){this.$data.graph.eventCenter.emit("info-card-select-blur")}}},w=f,v=a(5436),S=(0,v.A)(w,u,c,!1,null,null,null),k=S.exports,Q=a(7810),Y=(a(1292),a(7869),a(5026),a(5127)),U=a(2972),$=a(9882),B=function(){var e=this,t=e._self._c;return t("div",{staticClass:"img-generate-panel"},[t("el-divider",{attrs:{"content-position":"left"}},[e._v("API-key")]),t("el-alert",{attrs:{title:"注意：这个key的用量已经过半了，随时可能没办法调用。如果想要生成图片，推荐各位看官用自己的key嗷  2024.11.15",type:"warning"}}),t("el-input",{attrs:{placeholder:"请输入API-key"},on:{focus:e.onGeneratePanelFocus,blur:e.onGeneratePanelBlur},model:{value:e.apiKey,callback:function(t){e.apiKey=t},expression:"apiKey"}}),t("el-divider",{attrs:{"content-position":"left"}},[e._v("描述")]),t("div",{staticClass:"img-generate-panel-desc"},[e._v(e._s(e.desc))]),t("el-divider",{attrs:{"content-position":"left"}},[e._v("配置")]),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},[t("el-select",{attrs:{size:"small",placeholder:"请选择图片风格"},model:{value:e.imgStyle,callback:function(t){e.imgStyle=t},expression:"imgStyle"}},e._l(e.imgStyleOptionConfig,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-col",{attrs:{span:12}},[t("el-select",{attrs:{size:"small",placeholder:"请选择图片尺寸"},model:{value:e.composition,callback:function(t){e.composition=t},expression:"composition"}},e._l(e.imgSizeOptionConfig,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-video-play",round:"",disabled:e.generateDisabled},on:{click:e.$_generateImg}},[e._v(" 生成 ")])],1)],1),t("el-divider",{attrs:{"content-position":"left"}},[e._v("图片生成")]),t("el-row",{attrs:{gutter:10}},[t("el-col",{directives:[{name:"loading",rawName:"v-loading",value:e.imgLoading,expression:"imgLoading"}],attrs:{span:24}},e._l(e.imgList,(function(a,l){return t("el-image",{key:l,staticClass:"img-generate-img",attrs:{src:a,"preview-src-list":e.imgList},on:{click:function(t){return e.downloadImg(a)}}},[t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"image-slot-icon el-icon-picture-outline"})])])})),1)],1)],1)},P=[],W=a(5194),R={name:"ImgGeneratePanel",props:{lf:s.Ay$,desc:{type:String,default:"暂无描述"}},data(){return{imgStyleOptionConfig:p,imgSizeOptionConfig:O,imgStyle:"",composition:"",taskId:"",taskStauts:"",imgList:["","","",""],intervalId:"",imgLoading:!1,apiKey:"sk-ede6d92ca2024eaa8880b7c7b8541725"}},mounted(){this.$_getGenerateStatus()},computed:{generateDisabled(){return["PENDING","RUNNING"].includes(this.$data.taskStauts)}},methods:{onGeneratePanelFocus(e){console.log("focus",e),this.$props.lf.graphModel.eventCenter.emit("img-generator-focus")},onGeneratePanelBlur(){console.log("blur"),this.$props.lf.graphModel.eventCenter.emit("img-generator-blur")},async $_generateImg(){this.$props.lf.graphModel.eventCenter.emit("generate-start");const{desc:e}=this.$props,{imgStyle:t,composition:a}=this.$data;this.$data.imgLoading=!0;const{data:{code:l,message:i,output:M}}=await W.A.post("/ali/api/v1/services/aigc/text2image/image-synthesis",{model:"wanx-v1",input:{prompt:e},parameters:{style:t||"<auto>",size:a||"1024*1024"}},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.$data.key}`,"X-DashScope-Async":"enable"}});if(l)return this.$message.error(i),void(this.$data.imgLoading=!1);const{task_id:o,task_status:n}=M;this.$data.taskId=o,this.$data.taskStauts=n,this.intervalId=setInterval((()=>{this.$data.taskId&&["PENDING","RUNNING"].includes(this.$data.taskStauts)&&this.$_getGenerateStatus(),this.$data.taskId&&["SUCCEEDED","FAILED","UNKNOWN"].includes(this.$data.taskStauts)&&(this.$data.imgLoading=!1,clearInterval(this.intervalId))}),5e3)},async $_getGenerateStatus(){if(!this.$data.taskId)return;const{data:{code:e,message:t,output:a}}=await W.A.get(`/ali/api/v1/tasks/${this.$data.taskId}`,{headers:{Authorization:`Bearer ${this.$data.key}`}});e?this.$message.error(t):((0,Y.A)(a.results)||(this.$data.imgList=a.results.map((e=>e.url))),this.$data.taskStauts=a.task_status)},downloadImg(e){if(!e)return;const t=document.createElement("a");t.href=e,t.download=`${e}.jpg`,document.body.appendChild(t),t.click(),document.body.removeChild(t)}},beforeDestroy(){clearInterval(this.intervalId)}},G=R,_=(0,v.A)(G,B,P,!1,null,"3dc87d5c",null),F=_.exports;class Z{constructor({lf:e}){(0,Q.A)(this,"lf",void 0),(0,Q.A)(this,"vueInstance",void 0),(0,Q.A)(this,"panelComponent",void 0),(0,Q.A)(this,"panelElement",void 0),(0,Q.A)(this,"domContainer",void 0),(0,Q.A)(this,"desc",void 0),(0,Q.A)(this,"isMounted",!1),this.lf=e;const{graphModel:{eventCenter:t}}=e;t.on("generate-start",(()=>{this.generateDesc()})),t.on("img-generator-focus",(()=>{e.keyboard.disable()})),t.on("img-generator-blur",(()=>{e.keyboard.enable()}))}render(e,t){const a=document.createElement("div"),i=document.createElement("div");i.className="lf-generate-panel",i.appendChild(a),t.appendChild(i),this.domContainer=t,this.vueInstance=new l["default"]({render:t=>{const a=t(F,{props:{lf:e,desc:this.desc}});return this.panelComponent=a,a}}),this.vueInstance.$mount(a),this.panelElement=a}generateDesc(){const e=this.lf.getGraphData();if((0,Y.A)(e))return;const t=this.convertDataToPrompt(e);this.desc=t,this.panelComponent.componentInstance.$props.desc=t}statisticalSubject(e,t=!0){const a={};e.forEach((e=>{const{somatotype:t="",hair:l="",emotion:i="",type:M=""}=e.properties,o=`${i}${t}${l}${M}`;a[o]?a[o].count+=1:a[o]={emotion:i,hair:l,somatotype:t,type:M,count:1}}));const l=Object.values(a).map((({emotion:e,hair:a,somatotype:l,type:i,count:M})=>t?`${M}${A(i)}${e}${l}${a}${i}`:`${e}${l}${a}${i}`));return l.length>1?l.slice(0,-1).join("、")+"和"+l[l.length-1]:l[0]}sceneInfoTranslater(e){const{time:t,place:a}=e;return`${t||""}${a?`在${a}`:""}，`}summaryTranslater(e,t){if(e.length>2){const a=t.slice(0,-1).join("、")+"和"+t[t.length-1];return`有${this.statisticalSubject(e)}在${a}, 其中`}return"有"}convertDataToPrompt(e){let t="",a="",l="",i="",M=[],o=[];const n=e.nodes.find((e=>"sceneNode"===e.type));if(n){const{id:e,properties:a}=n;t=this.sceneInfoTranslater(a);const l=this.lf.graphModel.getNodeModelById(e),{nodes:i}=l.outgoing;M=i.filter((e=>"subjectNode"===e.type))}else M=e.nodes.filter((e=>"subjectNode"===e.type)).map((e=>this.lf.graphModel.getNodeModelById(e.id)));return o=(0,U.A)((0,$.A)(M.map((e=>{const{nodes:t}=e.outgoing;return t}))),"id"),(0,Y.A)(M)||(l=this.statisticalSubject(M)),(0,Y.A)(o)||(a=this.summaryTranslater(M,o),i=o.map((e=>{const t=e.incoming.nodes.filter((e=>"subjectNode"===e.type));return`${this.statisticalSubject(t)}在${e.properties.behavior}`})).join(",")),console.log("desc",t,a,l,i),`${t}${a}${i||l}`}destroy(){this.domContainer&&this.panelElement&&this.domContainer.contains(this.panelElement)&&(this.vueInstance.$destroy(),this.domContainer.removeChild(this.panelElement))}}(0,Q.A)(Z,"pluginName","imgGenerator");var V={name:"App",data(){return{lf:null}},mounted(){this.$_initLf()},methods:{getNodePatternConfig(e){return{type:e,label:T[e],icon:y[e],properties:D[e]}},$_initLf(){const e=new s.Ay$({grid:{enabled:!0,size:20},allowResize:!0,allowRotate:!0,keyboard:{enabled:!0},edgeType:"bezier",container:this.$refs.container,plugins:[r.tu,Z]}),t=[];z.forEach((a=>{(0,d.kz)({type:a,component:k,model:I(a)},e),t.push(this.getNodePatternConfig(a))})),e.setPatternItems(t),this.lf=e,this.lf.render({}),this.lf.on("connection:not-allowed",(({msg:e})=>{this.$message.error(e)})),this.lf.on("info-card-select-focus",(()=>{this.lf.keyboard.disable()})),this.lf.on("info-card-select-blur",(()=>{this.lf.keyboard.enable()}))}}},H=V,X=(0,v.A)(H,o,n,!1,null,null,null),J=X.exports;l["default"].use(M()),l["default"].config.productionTip=!1,new l["default"]({render:e=>e(J)}).$mount("#app")}},t={};function a(l){var i=t[l];if(void 0!==i)return i.exports;var M=t[l]={id:l,loaded:!1,exports:{}};return e[l].call(M.exports,M,M.exports,a),M.loaded=!0,M.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,l,i,M){if(!l){var o=1/0;for(u=0;u<e.length;u++){l=e[u][0],i=e[u][1],M=e[u][2];for(var n=!0,s=0;s<l.length;s++)(!1&M||o>=M)&&Object.keys(a.O).every((function(e){return a.O[e](l[s])}))?l.splice(s--,1):(n=!1,M<o&&(o=M));if(n){e.splice(u--,1);var r=i();void 0!==r&&(t=r)}}return t}M=M||0;for(var u=e.length;u>0&&e[u-1][2]>M;u--)e[u]=e[u-1];e[u]=[l,i,M]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var i,M,o=l[0],n=l[1],s=l[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(s)var u=s(a)}for(t&&t(l);r<o.length;r++)M=o[r],a.o(e,M)&&e[M]&&e[M][0](),e[M]=0;return a.O(u)},l=self["webpackChunklogicflow_vue2_demo"]=self["webpackChunklogicflow_vue2_demo"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(6136)}));l=a.O(l)})();
//# sourceMappingURL=app.0067f2a0.js.map