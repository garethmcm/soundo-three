import{S as e,o as n,G as u,c as h,e as i,M as m}from"./stop-circle-DqqeZ05H.js";class s extends e{constructor(){super(n(s.getDefaults(),arguments,["value"])),this.override=!1,this.name="Add",this._sum=new u({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,h(this._constantSource,this._sum)}static getDefaults(){return Object.assign(e.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class a extends i{constructor(){const t=n(a.getDefaults(),arguments,["min","max"]);super(t),this.name="Scale",this._mult=this.input=new m({context:this.context,value:t.max-t.min}),this._add=this.output=new s({context:this.context,value:t.min}),this._min=t.min,this._max=t.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(i.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(t){this._min=t,this._setRange()}get max(){return this._max}set max(t){this._max=t,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}export{a as S};