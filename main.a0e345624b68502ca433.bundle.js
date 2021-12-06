(()=>{"use strict";var e,t={752:(e,t,n)=>{n(260);const o="MainScene",s="UIScene",i={tiles:{green:"assets/tiles/green.png",yellow:"assets/tiles/yellow.png",selection:"assets/tiles/selection.png"},buildings:{house1:"assets/buildings/house1.png",block1:"assets/buildings/block1.png"}},a={mode:"view",modeData:void 0},l=e=>{a.modeData=void 0,a.mode=e.mode,"build"===e.mode&&(a.modeData=e.data),console.log({globalState:a})},r=1e6,c=Phaser.Input.Events;class d extends Phaser.GameObjects.Image{constructor({scene:e,x:t,y:n,zIndex:o}){super(e,t,n,i.tiles.green),this.scene=e,this.zIndex=o,this.x=t,this.y=n,this.originX=0,this.originY=1,this.updateDisplayOrigin(),this.setDepth(o+0),this.setInteractive({pixelPerfect:!0,alphaTolerance:1}),this.buildEvents=(e=>({onPointerOver:()=>{var t;"build"===a.mode&&void 0===e.content&&(e.overlay=e.scene.add.image(e.x,e.y,(null===(t=a.modeData)||void 0===t?void 0:t.buildable.sprite)||""),e.overlay.setOrigin(0,1),e.overlay.setAlpha(.5),e.overlay.setDepth(e.zIndex+1000001),e.selection=e.scene.add.image(e.x,e.y,i.tiles.selection),e.selection.setOrigin(0,1),e.selection.setDepth(e.zIndex+r),e.selection.setTint(1089552))},onPointerOut:()=>{var t,n;"build"===a.mode&&void 0===e.content&&((null===(t=e.overlay)||void 0===t?void 0:t.destroy)&&(e.overlay.destroy(),e.overlay=void 0),(null===(n=e.selection)||void 0===n?void 0:n.destroy)&&(e.selection.destroy(),e.overlay=void 0))},onPointerDown:()=>{var t,n,o;"build"===a.mode&&void 0===e.content&&(null===(t=e.overlay)||void 0===t||t.destroy(),e.overlay=void 0,e.content=e.scene.add.image(e.x,e.y,(null===(n=a.modeData)||void 0===n?void 0:n.buildable.sprite)||""),e.content.setOrigin(0,1),e.content.setDepth(e.zIndex+5),(null===(o=e.selection)||void 0===o?void 0:o.destroy)&&(e.selection.destroy(),e.overlay=void 0))}}))(this),this.demolishEvents=(e=>({onPointerOver:()=>{"demolish"===a.mode&&(e.selection=e.scene.add.image(e.x,e.y,i.tiles.selection),e.selection.setOrigin(0,1),e.selection.setDepth(e.zIndex+r),e.selection.setTint(15732752),void 0!==e.content&&(e.content.setTint(15732752),e.content.setAlpha(.5)))},onPointerOut:()=>{var t,n,o;"demolish"===a.mode&&((null===(t=e.overlay)||void 0===t?void 0:t.destroy)&&(e.overlay.destroy(),e.overlay=void 0),(null===(n=e.selection)||void 0===n?void 0:n.destroy)&&(e.selection.destroy(),e.overlay=void 0),(null===(o=e.content)||void 0===o?void 0:o.clearTint)&&(e.content.clearTint(),e.content.clearAlpha()))},onPointerDown:()=>{var t;"demolish"===a.mode&&void 0!==e.content&&(null===(t=e.content)||void 0===t||t.destroy(),e.content=void 0)}}))(this),this.on(c.POINTER_OVER,(()=>{this.buildEvents.onPointerOver(),this.demolishEvents.onPointerOver()})),this.on(c.POINTER_OUT,(()=>{this.buildEvents.onPointerOut(),this.demolishEvents.onPointerOut()})),this.on(c.POINTER_DOWN,(()=>{this.buildEvents.onPointerDown(),this.demolishEvents.onPointerDown()})),this.scene.add.existing(this)}}const m={type:"tile"},h=[];for(let e=0;e<32;e++){h.push([]);for(let t=0;t<32;t++)h[e].push(Object.assign({},m))}console.log({map:h});class v extends Phaser.Scene{constructor(){super({key:o})}create(){this.keyBindings=(e=>{const t={};return{bindKeys:()=>{e.input.keyboard.on("keydown",(({key:e})=>{t[e]=!0})).on("keyup",(({key:e})=>{t[e]=!1})),e.input.on("wheel",((t,n,o,s,i,a)=>{s>0?e.cameras.main.zoom>.2&&(e.cameras.main.zoom-=.1):s<0&&e.cameras.main.zoom<2&&(e.cameras.main.zoom+=.1)}))},handleCameraMovement:()=>{t.w?e.cameras.main.scrollY-=10:t.s&&(e.cameras.main.scrollY+=10),t.a?e.cameras.main.scrollX-=10:t.d&&(e.cameras.main.scrollX+=10)}}})(this),this.createTiles(),this.keyBindings.bindKeys()}createTiles(){const e=this.cameras.main.width/2;h.forEach(((t,n)=>{const o=e-32*n,s=100+16*n;t.forEach(((e,t)=>{new d({scene:this,x:o+32*t,y:s+16*t,tileInfo:e,zIndex:10*(n+t+1)})}))}))}update(){this.keyBindings.handleCameraMovement()}}const u=e=>Object.keys(e).flatMap((t=>{const n=e[t];return"object"==typeof n?u(n):n}));class p extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){u(i).forEach((e=>{this.load.image(e,e)}))}create(){this.scene.start(o),this.scene.start(s)}}const y={buildings:{house1:{sprite:i.buildings.house1,name:"House 1"},block1:{sprite:i.buildings.block1,name:"Block 1"}}},b=()=>{const e=document.querySelector(".selectionBarContainer");e&&(e.innerHTML="")},g=()=>{b();const e=document.createElement("div");e.className="selectionBar";const t=(e=>{const t=document.createElement("div");t.className="selectionBarTitleBar";const n=document.createElement("div");n.className="selectionBarTitleBarTitle",n.innerText="Build";const o=document.createElement("div");return o.className="selectionBarTitleBarCloseButton",o.innerText="X",o.addEventListener("click",(()=>{b(),l({mode:"view"})})),t.appendChild(n),t.appendChild(o),t})();e.appendChild(t);const n=(()=>{const e=Object.keys(y.buildings).map((e=>{const t=y.buildings[e],n=document.createElement("div");return n.className="selectionBarItem",n.innerHTML=`\n      <div class="selectionBarItemImage" style="background-image: url(${t.sprite})">\n      </div>\n      <div class="selectionBarItemName">\n        ${t.name}\n      </div>\n    `,n.addEventListener("click",(()=>{l({mode:"build",data:{buildable:t}})})),n})),t=document.createElement("div");return t.className="selectionBarContent",e.forEach((e=>{t.appendChild(e)})),t})();e.appendChild(n);const o=document.querySelector(".selectionBarContainer");null==o||o.appendChild(e)},O=({name:e,caption:t,callback:n})=>{const o=document.createElement("div");return o.className="leftMenuButton",o.innerText=t,o.addEventListener("click",n),o};class E extends Phaser.Scene{constructor(){var e;super({key:s}),this.ui=(e=this,{create:()=>{(e=>{const{selectionBarContainer:t,openSelectionBar:n,closeSelectionBar:o}=(()=>{const e=document.createElement("div");return e.className="selectionBarContainer",{selectionBarContainer:e,openSelectionBar:g,closeSelectionBar:b}})(),s=document.createElement("div");s.className="leftMenuWrapper";const i=document.createElement("div");i.className="leftMenu",i.appendChild(O({name:"build",caption:"Build",callback:()=>{o(),n(),l({mode:"view"})}})),i.appendChild(O({name:"demolish",caption:"DMLSH",callback:()=>{o(),l({mode:"demolish"})}})),i.appendChild(O({name:"tbd",caption:"TBD",callback:()=>{o()}})),s.appendChild(i),s.appendChild(t);const a=e.add.dom(0,100,s);a.originX=0,a.originY=0})(e)}})}create(){this.ui.create()}update(){}}const k={type:Phaser.AUTO,backgroundColor:"#303030",dom:{createContainer:!0},parent:"phaser-game",scale:{parent:"phaser-game",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:1280,height:720},scene:[p,v,E],physics:{default:"arcade",arcade:{debug:!1,gravity:{y:1e3}}}};window.addEventListener("load",(()=>{new Phaser.Game(k)}))}},n={};function o(e){var s=n[e];if(void 0!==s)return s.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,s,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,s,i]=e[d],l=!0,r=0;r<n.length;r++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[r])))?n.splice(r--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var s,i,[a,l,r]=n,c=0;if(a.some((t=>0!==e[t]))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(r)var d=r(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return o.O(d)},n=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=o.O(void 0,[216],(()=>o(752)));s=o.O(s)})();