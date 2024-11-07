import{T as s,o,P as d,r as c,S as h,G as a}from"./stop-circle-DqqeZ05H.js";import{S as i,a as l}from"./StereoEffect-D9K0WMVi.js";import{M as r}from"./Merge-DoBl48kR.js";class n extends s{constructor(){const e=o(n.getDefaults(),arguments,["delayTime","maxDelay"]);super(e),this.name="Delay";const t=this.toSeconds(e.maxDelay);this._maxDelay=Math.max(t,this.toSeconds(e.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(t),this.delayTime=new d({context:this.context,param:this._delayNode.delayTime,units:"time",value:e.delayTime,minValue:0,maxValue:this.maxDelay}),c(this,"delayTime")}static getDefaults(){return Object.assign(s.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}}class u extends i{constructor(e){super(e),this.feedback=new h({context:this.context,value:e.feedback,units:"normalRange"}),this._feedbackL=new a({context:this.context}),this._feedbackR=new a({context:this.context}),this._feedbackSplit=new l({context:this.context,channels:2}),this._feedbackMerge=new r({context:this.context,channels:2}),this._merge.connect(this._feedbackSplit),this._feedbackMerge.connect(this._split),this._feedbackSplit.connect(this._feedbackL,0,0),this._feedbackL.connect(this._feedbackMerge,0,0),this._feedbackSplit.connect(this._feedbackR,1,0),this._feedbackR.connect(this._feedbackMerge,0,1),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),c(this,["feedback"])}static getDefaults(){return Object.assign(i.getDefaults(),{feedback:.5})}dispose(){return super.dispose(),this.feedback.dispose(),this._feedbackL.dispose(),this._feedbackR.dispose(),this._feedbackSplit.dispose(),this._feedbackMerge.dispose(),this}}export{n as D,u as S};