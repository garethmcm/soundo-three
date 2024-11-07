import{r as l,j as e}from"./index-Unzykuk8.js";import{T as b,n as j,g as S,o as g,G as p,P as d,r as v,d as k,c as w,S as T,b as _,p as R,s as A}from"./stop-circle-DqqeZ05H.js";import{s as F,g as N,b as z,d as D,p as L,v as C}from"./VOCAL WITH VERB-DVYifobt.js";import{S as h}from"./StereoEffect-D9K0WMVi.js";import{S as E}from"./Scale-CgNTF5O5.js";import"./CrossFade-Bq0s1Naa.js";import"./Merge-DoBl48kR.js";class P extends b{constructor(s){super(s),this.name="ToneAudioWorklet",this.workletOptions={},this.onprocessorerror=j;const o=URL.createObjectURL(new Blob([S()],{type:"text/javascript"})),t=this._audioWorkletName();this._dummyGain=this.context.createGain(),this._dummyParam=this._dummyGain.gain,this.context.addAudioWorkletModule(o).then(()=>{this.disposed||(this._worklet=this.context.createAudioWorkletNode(t,this.workletOptions),this._worklet.onprocessorerror=this.onprocessorerror.bind(this),this.onReady(this._worklet))})}dispose(){return super.dispose(),this._dummyGain.disconnect(),this._worklet&&(this._worklet.port.postMessage("dispose"),this._worklet.disconnect()),this}}class c extends P{constructor(){const s=g(c.getDefaults(),arguments,["delayTime","resonance"]);super(s),this.name="FeedbackCombFilter",this.input=new p({context:this.context}),this.output=new p({context:this.context}),this.delayTime=new d({context:this.context,value:s.delayTime,units:"time",minValue:0,maxValue:1,param:this._dummyParam,swappable:!0}),this.resonance=new d({context:this.context,value:s.resonance,units:"normalRange",param:this._dummyParam,swappable:!0}),v(this,["resonance","delayTime"])}_audioWorkletName(){return k}static getDefaults(){return Object.assign(b.getDefaults(),{delayTime:.1,resonance:.5})}onReady(s){w(this.input,s,this.output);const o=s.parameters.get("delayTime");this.delayTime.setParam(o);const t=s.parameters.get("feedback");this.resonance.setParam(t)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.delayTime.dispose(),this.resonance.dispose(),this}}const f=[1687/25e3,1601/25e3,2053/25e3,2251/25e3],B=[.773,.802,.753,.733],G=[347,113,37];class u extends h{constructor(){const s=g(u.getDefaults(),arguments,["roomSize"]);super(s),this.name="JCReverb",this._allpassFilters=[],this._feedbackCombFilters=[],this.roomSize=new T({context:this.context,value:s.roomSize,units:"normalRange"}),this._scaleRoomSize=new E({context:this.context,min:-.733,max:.197}),this._allpassFilters=G.map(o=>{const t=this.context.createBiquadFilter();return t.type="allpass",t.frequency.value=o,t}),this._feedbackCombFilters=f.map((o,t)=>{const i=new c({context:this.context,delayTime:o});return this._scaleRoomSize.connect(i.resonance),i.resonance.value=B[t],t<f.length/2?this.connectEffectLeft(...this._allpassFilters,i):this.connectEffectRight(...this._allpassFilters,i),i}),this.roomSize.connect(this._scaleRoomSize),v(this,["roomSize"])}static getDefaults(){return Object.assign(h.getDefaults(),{roomSize:.5})}dispose(){return super.dispose(),this._allpassFilters.forEach(s=>s.disconnect()),this._feedbackCombFilters.forEach(s=>s.dispose()),this.roomSize.dispose(),this._scaleRoomSize.dispose(),this}}const x=[{noteAllocation:"C4",fileLocation:F,sampleTitle:"Sunshine"},{noteAllocation:"D4",fileLocation:N,sampleTitle:"Guitar"},{noteAllocation:"E4",fileLocation:z,sampleTitle:"Bass"},{noteAllocation:"F4",fileLocation:D,sampleTitle:"Drums"},{noteAllocation:"G4",fileLocation:L,sampleTitle:"Piano"},{noteAllocation:"A5",fileLocation:C,sampleTitle:"Vocals"}],J=()=>{const[r,s]=l.useState(!1),o=l.useRef(null),t=l.useRef(null);l.useEffect(()=>(o.current=new _(Object.fromEntries(x.map(a=>[a.noteAllocation,a.fileLocation])),{onload:()=>{s(!0)}}),t.current=new u({roomSize:.35,wet:.35}).toDestination(),o.current&&t.current&&o.current.connect(t.current),()=>{o.current&&o.current.dispose(),t.current&&t.current.dispose()}),[]);const i=a=>{r&&o.current&&o.current.triggerAttack(a)},y=a=>{o.current&&o.current.triggerRelease(a)},m=(a,n)=>{t.current&&(t.current.roomSize.value=a,t.current.wet.value=n)};return e.jsxs("div",{children:[e.jsx("h1",{children:"Simple Reverb"}),e.jsx("p",{className:"blurb",children:"This is another spacial effect made up of lots of delays chained together that give the impression of the sound in a room."}),e.jsxs("div",{className:"audioComponentDisplay",children:[e.jsx("div",{className:"playerButtonBox",children:e.jsx("div",{children:x.map(a=>e.jsxs("div",{className:"playerButtonBox",children:[e.jsx("h2",{className:"sampleTitle",children:a.sampleTitle}),e.jsx("div",{onClick:()=>r&&i(a.noteAllocation),children:e.jsx("img",{src:R,alt:"Play",className:"buttons"})}),e.jsx("div",{onClick:()=>r&&y(a.noteAllocation),children:e.jsx("img",{src:A,alt:"Stop",className:"buttons"})})]},a.noteAllocation))})}),e.jsxs("div",{className:"paramDials",children:[e.jsxs("div",{className:"buttonSection",children:[e.jsxs("label",{children:["Amount (s): ",e.jsx("br",{}),e.jsx("input",{type:"range",min:"0",max:"0.7",step:"0.01",defaultValue:"0.35",onChange:a=>{var n;return m(parseFloat(a.target.value),((n=t.current)==null?void 0:n.wet.value)||.35)}})]}),e.jsx("div",{className:"explainer",children:"How big the space is supposed to sound"})]}),e.jsxs("div",{className:"buttonSection",children:[e.jsxs("label",{children:["Mix: ",e.jsx("br",{}),e.jsx("input",{type:"range",min:"0",max:"0.7",step:"0.01",defaultValue:"0.35",onChange:a=>{var n;return m(((n=t.current)==null?void 0:n.roomSize.value)||.5,parseFloat(a.target.value))}})]}),e.jsx("div",{className:"explainer",children:"The ratio of affected to unaffected sound"})]})]})]})]})};export{J as default};