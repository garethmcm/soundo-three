import{T as e,o as c,G as h,r,c as i,f as n}from"./stop-circle-DqqeZ05H.js";import{C as o}from"./CrossFade-Bq0s1Naa.js";import{M as a}from"./Merge-DoBl48kR.js";class s extends e{constructor(){const t=c(s.getDefaults(),arguments,["channels"]);super(t),this.name="Split",this._splitter=this.input=this.output=this.context.createChannelSplitter(t.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(e.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class g extends e{constructor(t){super(t),this.name="StereoEffect",this.input=new h({context:this.context}),this.input.channelCount=2,this.input.channelCountMode="explicit",this._dryWet=this.output=new o({context:this.context,fade:t.wet}),this.wet=this._dryWet.fade,this._split=new s({context:this.context,channels:2}),this._merge=new a({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),r(this,["wet"])}connectEffectLeft(...t){this._split.connect(t[0],0,0),i(...t),n(t[t.length-1],this._merge,0,0)}connectEffectRight(...t){this._split.connect(t[0],1,0),i(...t),n(t[t.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(e.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}}export{g as S,s as a};